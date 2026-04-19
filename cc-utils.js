// Normalize the raw drinks data into a uniform array with
// computed savings, similarity, hackScore, tags, etc.

(function () {
  const SIZES = ['tall', 'grande', 'venti'];

  function hacksOf(drink) {
    if (drink.hacks) return drink.hacks;
    if (drink.hack) return [{ ...drink.hack, name: drink.hack.name || 'Hack' }];
    return [];
  }

  function hackTotalPrice(hack, size) {
    const base = hack.basePrices?.[size] ?? 0;
    const adds = (hack.additions || []).reduce((s, a) => s + (a.price || 0), 0);
    return base + adds;
  }

  function computeMetrics(drink, size = 'grande') {
    const original = drink.prices?.[size] ?? 0;
    const hacks = hacksOf(drink);
    if (!hacks.length) return null;

    const scored = hacks.map(h => {
      const hackPrice = hackTotalPrice(h, size);
      const savings = Math.max(0, original - hackPrice);
      const savingsPct = original > 0 ? (savings / original) * 100 : 0;
      // Default similarity if missing: 60 if hack, else inferred
      const similarity = typeof h.similarity === 'number' ? h.similarity : 60;
      // Hidden "best" composite score: weight match heavier for ties
      const hackScore = Math.round(similarity * 0.55 + savingsPct * 0.45 * 1.2);
      return {
        ...h,
        hackPrice,
        savings,
        savingsPct,
        similarity,
        hackScore,
      };
    });

    // Primary hack: best composite score
    const best = [...scored].sort((a, b) => b.hackScore - a.hackScore)[0];
    return { original, hacks: scored, best };
  }

  function tier(score) {
    if (score >= 85) return 'sss';
    if (score >= 72) return 's';
    if (score >= 60) return 'a';
    if (score >= 48) return 'b';
    return 'c';
  }

  function tierLabel(t) {
    return { sss: 'Elite Hack', s: 'Top Tier', a: 'Great Deal', b: 'Decent', c: 'Situational' }[t];
  }

  function flavorTags(drink) {
    const tags = new Set();
    const text = (drink.name + ' ' + (drink.ingredients?.grande || []).join(' ')).toLowerCase();
    if (/vanilla|caramel|brown sugar|toffee|cinnamon dolce|honey/.test(text)) tags.add('sweet');
    if (/pistachio|toffee|coconut|brown butter|cookie/.test(text)) tags.add('nutty');
    if (/mocha|chocolate|mocha sauce/.test(text)) tags.add('chocolatey');
    if (/mango|strawberry|berry|dragonfruit|peach|raspberry|passionfruit/.test(text)) tags.add('fruity');
    if (/matcha|chai|tea|lavender/.test(text)) tags.add('tea');
    if (/espresso|americano|cold brew|doppio|ristretto|shaken/.test(text)) tags.add('strong');
    if (/iced|cold/.test(text) || /iced/.test(drink.name.toLowerCase())) tags.add('iced');
    else tags.add('hot');
    if (/oat|almond|soy|coconut|non-dairy/.test(text)) tags.add('non-dairy');
    if (/refresher|energy/.test(text)) tags.add('refresher');
    return [...tags];
  }

  function normalizeAll(raw) {
    const rows = [];
    for (const [id, d] of Object.entries(raw)) {
      const m = computeMetrics(d, 'grande');
      if (!m) continue;
      rows.push({
        id,
        name: d.name,
        category: d.category || 'Other',
        prices: d.prices,
        ingredients: d.ingredients,
        customizations: d.customizations,
        hacks: m.hacks,
        best: m.best,
        original: m.original,
        tags: flavorTags(d),
        temp: /iced/i.test(d.name) ? 'Iced' : 'Hot',
      });
    }
    return rows;
  }

  // Deterministic "punk censor" — star one vowel per name, always the same one
  // (so it reads like a kid did it once with a sharpie, not like a random glitch).
  function censorName(name) {
    if (!name) return name;
    const vowels = /[aeiouAEIOU]/g;
    const positions = [];
    let m;
    while ((m = vowels.exec(name))) positions.push(m.index);
    if (!positions.length) return name;
    // Stable hash of the name → pick one position
    let h = 0;
    for (let i = 0; i < name.length; i++) h = ((h << 5) - h + name.charCodeAt(i)) | 0;
    const pick = positions[Math.abs(h) % positions.length];
    return name.slice(0, pick) + '*' + name.slice(pick + 1);
  }

  window.CC = {
    SIZES,
    hacksOf,
    hackTotalPrice,
    computeMetrics,
    tier,
    tierLabel,
    normalizeAll,
    censorName,
  };
})();
