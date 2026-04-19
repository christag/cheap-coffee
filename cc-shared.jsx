// Shared UI primitives used across all three directions
// ScoreBars, RankBadge, FilterBar, DetailDrawer, Toast

const { useState, useEffect, useMemo, useRef } = React;

// ====== Score visual ======
function ScoreBars({ match, save, compact = false }) {
  return (
    <div className="score-bars" style={compact ? { minWidth: 90 } : {}}>
      <div className="score-bar">
        <span style={{ width: 32, color: 'var(--ink-mute)' }}>Match</span>
        <div className="track"><div className="fill match" style={{ width: `${match}%` }} /></div>
        <span className="val">{match}%</span>
      </div>
      <div className="score-bar">
        <span style={{ width: 32, color: 'var(--ink-mute)' }}>Save</span>
        <div className="track"><div className="fill save" style={{ width: `${Math.min(100, save)}%` }} /></div>
        <span className="val">{save}%</span>
      </div>
    </div>
  );
}

function RankBadge({ tier, children }) {
  return <span className={`rank-badge ${tier}`}>{children}</span>;
}

// ====== Filter bar (shared across directions) ======
function FilterBar({ filters, setFilters, allTags, allCategories, compact = false }) {
  const upd = (patch) => setFilters(f => ({ ...f, ...patch }));
  const toggleCat = (c) => upd({
    categories: filters.categories.includes(c)
      ? filters.categories.filter(x => x !== c)
      : [...filters.categories, c],
  });
  const toggleTag = (t) => upd({
    tags: filters.tags.includes(t) ? filters.tags.filter(x => x !== t) : [...filters.tags, t],
  });

  return (
    <div className="filter-bar">
      <div className="filter-row">
        <div className="filter-label">Search</div>
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            className="search-input"
            placeholder="vanilla, matcha, cold brew…"
            value={filters.q}
            onChange={e => upd({ q: e.target.value })}
          />
          {filters.q && <button className="clear" onClick={() => upd({ q: '' })}>×</button>}
        </div>
      </div>

      <div className="filter-row">
        <div className="filter-label">Temp</div>
        <div className="seg">
          {['All', 'Hot', 'Iced'].map(v => (
            <button key={v} className={filters.temp === v ? 'on' : ''} onClick={() => upd({ temp: v })}>{v}</button>
          ))}
        </div>
        <div className="filter-label" style={{ marginLeft: 20 }}>Size</div>
        <div className="seg">
          {['tall', 'grande', 'venti'].map(v => (
            <button key={v} className={filters.size === v ? 'on' : ''} onClick={() => upd({ size: v })}>{v[0].toUpperCase() + v.slice(1)}</button>
          ))}
        </div>
        <div className="filter-label" style={{ marginLeft: 20 }}>Sort</div>
        <div className="seg">
          {[['score','Best'],['save','$ Save'],['match','Match']].map(([k,l]) => (
            <button key={k} className={filters.sort === k ? 'on' : ''} onClick={() => upd({ sort: k })}>{l}</button>
          ))}
        </div>
      </div>

      <div className="filter-row">
        <div className="filter-label">Min match</div>
        <input type="range" min="0" max="100" step="5" value={filters.minMatch} onChange={e => upd({ minMatch: +e.target.value })} />
        <span className="mono slider-val">{filters.minMatch}%</span>
        <div className="filter-label" style={{ marginLeft: 20 }}>Min save</div>
        <input type="range" min="0" max="3" step="0.25" value={filters.minSave} onChange={e => upd({ minSave: +e.target.value })} />
        <span className="mono slider-val">${filters.minSave.toFixed(2)}</span>
      </div>

      {!compact && (
        <div className="filter-row wrap">
          <div className="filter-label">Category</div>
          {allCategories.map(c => (
            <button key={c} className={`chip ${filters.categories.includes(c) ? 'active' : ''}`} onClick={() => toggleCat(c)}>{c}</button>
          ))}
        </div>
      )}

      {!compact && (
        <div className="filter-row wrap">
          <div className="filter-label">Flavor</div>
          {allTags.map(t => (
            <button key={t} className={`chip ${filters.tags.includes(t) ? 'active' : ''}`} onClick={() => toggleTag(t)}>{t}</button>
          ))}
        </div>
      )}
    </div>
  );
}

// ====== Detail Drawer ======
function DetailDrawer({ drink, size, onClose, onToast }) {
  useEffect(() => {
    const h = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [onClose]);

  if (!drink) return null;

  const hack = drink.best;
  const originalPrice = drink.prices[size];
  const hackPrice = window.CC.hackTotalPrice(hack, size);
  const savings = originalPrice - hackPrice;
  const savingsPct = Math.round((savings / originalPrice) * 100);

  const script = [
    `ORDER: ${drink.name} ($${originalPrice.toFixed(2)}) — HACK v${hack.name ? hack.name.toLowerCase().replace(/\s+/g,'-') : 'std'}`,
    ...hack.steps.map(s => '• ' + s.replace(/\[SIZE\]/g, size)),
    `TOTAL: $${hackPrice.toFixed(2)}  —  SAVE $${savings.toFixed(2)} (${savingsPct}%)`
  ].join('\n');

  const copyScript = async () => {
    try {
      await navigator.clipboard.writeText(script);
      onToast('Ordering script copied.');
    } catch { onToast('Copy failed — long-press to copy manually.'); }
  };

  const shareDeal = async () => {
    const url = window.location.href.split('#')[0] + `#drink=${drink.id}`;
    try {
      await navigator.clipboard.writeText(url);
      onToast('Share link copied to clipboard.');
    } catch { onToast('Copy failed.'); }
  };

  const ingredientDiff = (origList, hackSteps) => {
    // Very rough diff: words in original ingredients that appear in no hack step = "swapped out"
    const hackText = hackSteps.join(' ').toLowerCase();
    return origList.map(item => {
      const keywords = item.toLowerCase().match(/[a-z]{4,}/g) || [];
      const matched = keywords.some(k => hackText.includes(k));
      return { item, kept: matched };
    });
  };
  const diff = ingredientDiff(drink.ingredients?.[size] || [], hack.steps);

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer" onClick={e => e.stopPropagation()}>
        <div className="drawer-head">
          <div>
            <div className="tag">{drink.category} · {size.toUpperCase()}</div>
            <h2 className="drawer-title">{drink.name}</h2>
            <div className="drawer-sub">
              The Hack: <strong>{hack.name || 'Ordering workaround'}</strong>
              {drink.hacks.length > 1 && <span className="muted"> · {drink.hacks.length - 1} alt variant{drink.hacks.length > 2 ? 's' : ''}</span>}
            </div>
          </div>
          <button className="btn ghost" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Score display */}
        <div className="drawer-score">
          <div className="score-cell">
            <div className="tag">Similarity</div>
            <div className="big-num">{hack.similarity}<span className="pct">%</span></div>
          </div>
          <div className="score-cell">
            <div className="tag">You Save</div>
            <div className="big-num" style={{ color: 'var(--money-ink)' }}>${savings.toFixed(2)}<span className="pct">/drink</span></div>
          </div>
          <div className="score-cell">
            <div className="tag">Hack Score</div>
            <div className="big-num">{hack.hackScore}<span className="pct">/100</span></div>
          </div>
        </div>

        {/* Receipt comparison */}
        <div className="receipt-section">
          <div className="receipt-head">THE RECEIPT</div>
          <div className="receipt-grid">
            <div className="receipt-col">
              <div className="receipt-label">If you order by the menu</div>
              <div className="receipt-item strike-row">
                <span>{drink.name} ({size})</span>
                <span className="num">${originalPrice.toFixed(2)}</span>
              </div>
              <div className="receipt-total strike-row">
                <span>Total</span>
                <span className="num strike">${originalPrice.toFixed(2)}</span>
              </div>
            </div>
            <div className="receipt-col hacked">
              <div className="receipt-label">If you say the magic words</div>
              <div className="receipt-item">
                <span>{hack.base} ({size})</span>
                <span className="num">${hack.basePrices[size].toFixed(2)}</span>
              </div>
              {(hack.additions || []).map((a, i) => (
                <div className="receipt-item" key={i}>
                  <span>+ {a.item}</span>
                  <span className="num">${a.price.toFixed(2)}</span>
                </div>
              ))}
              <div className="receipt-item free-items">
                <span>+ free add-ons from counter</span>
                <span className="num">$0.00</span>
              </div>
              <div className="receipt-total">
                <span>Total</span>
                <span className="num">${hackPrice.toFixed(2)}</span>
              </div>
              <div className="receipt-saved">
                <span>YOU KEEP</span>
                <span className="num">${savings.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Script */}
        <div className="script-section">
          <div className="script-head">
            <span className="receipt-head">THE SCRIPT</span>
            <button className="btn ghost" onClick={copyScript}>⎘ Copy</button>
          </div>
          <ol className="script-list">
            {hack.steps.map((s, i) => (
              <li key={i}>{s.replace(/\[SIZE\]/g, size)}</li>
            ))}
          </ol>
        </div>

        {/* Ingredient diff */}
        {drink.ingredients?.[size] && (
          <div className="ingredient-diff">
            <div className="receipt-head">THE RECIPE, DECODED</div>
            <ul>
              {diff.map((d, i) => (
                <li key={i} className={d.kept ? 'kept' : 'swapped'}>
                  <span className="dot" />{d.item}
                  {!d.kept && <span className="swap-tag">hack substitutes this</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Alt variants */}
        {drink.hacks.length > 1 && (
          <div className="alt-variants">
            <div className="receipt-head">ALTERNATE HACKS</div>
            {drink.hacks.filter(h => h !== hack).map((h, i) => (
              <div className="alt-variant" key={i}>
                <div>
                  <strong>{h.name}</strong>
                  <span className="muted"> · ${window.CC.hackTotalPrice(h, size).toFixed(2)}</span>
                </div>
                <ScoreBars match={h.similarity} save={Math.round(h.savingsPct)} compact />
              </div>
            ))}
          </div>
        )}

        <div className="drawer-foot">
          <button className="btn primary" onClick={copyScript}>⎘ Copy ordering script</button>
          <button className="btn ghost" onClick={shareDeal}>↗ Share this deal</button>
        </div>
      </div>
    </div>
  );
}

// Hook: filter + sort drinks
function useFilteredDrinks(drinks, filters) {
  return useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    const out = drinks
      .map(d => {
        // Recompute for current size
        const m = window.CC.computeMetrics({
          ...d, prices: d.prices,
          hacks: d.hacks, hack: d.hacks[0],
        }, filters.size);
        return { ...d, best: m.best, hacks: m.hacks, original: m.original };
      })
      .filter(d => {
        if (filters.temp !== 'All' && d.temp !== filters.temp) return false;
        if (filters.categories.length && !filters.categories.includes(d.category)) return false;
        if (filters.tags.length && !filters.tags.some(t => d.tags.includes(t))) return false;
        if (d.best.similarity < filters.minMatch) return false;
        if (d.best.savings < filters.minSave) return false;
        if (q && !d.name.toLowerCase().includes(q) && !d.tags.join(' ').includes(q) && !d.category.toLowerCase().includes(q)) return false;
        return true;
      });

    const sortFns = {
      score: (a, b) => b.best.hackScore - a.best.hackScore,
      save:  (a, b) => b.best.savings - a.best.savings,
      match: (a, b) => b.best.similarity - a.best.similarity,
    };
    return out.sort(sortFns[filters.sort] || sortFns.score);
  }, [drinks, filters]);
}

// Toast hook
function useToast() {
  const [msg, setMsg] = useState(null);
  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => setMsg(null), 2000);
    return () => clearTimeout(t);
  }, [msg]);
  return [msg, setMsg];
}

Object.assign(window, {
  ScoreBars, RankBadge, FilterBar, DetailDrawer,
  useFilteredDrinks, useToast,
});
