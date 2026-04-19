// Direction A: "Deal Grid" — modern card grid, clean & practical
// The most user-friendly, mobile-first feeling direction

function DealGrid({ drinks, filters, setFilters, density, onOpen }) {
  const rows = useFilteredDrinks(drinks, filters);

  const gap = { compact: 10, comfortable: 16, spacious: 24 }[density];
  const cardPad = { compact: 14, comfortable: 20, spacious: 28 }[density];
  const cols = density === 'compact' ? 'repeat(auto-fill, minmax(240px, 1fr))'
             : density === 'spacious' ? 'repeat(auto-fill, minmax(320px, 1fr))'
             : 'repeat(auto-fill, minmax(280px, 1fr))';

  return (
    <div className="dg-root">
      <section className="dg-hero">
        <div className="dg-hero-inner">
          <div className="tag" style={{ color: 'var(--olive)' }}>◎ OPERATIVE MANUAL · VOL.7</div>
          <h1 className="dg-hero-title">The menu is<br/>a <em>suggestion</em>.</h1>
          <p className="dg-hero-sub">
            Every overpriced drink has a cheaper twin hiding behind the counter.
            We keep the receipts. You keep the money.
          </p>
          <div className="dg-hero-stats">
            <div><strong className="num">{drinks.length}</strong><span>hacks documented</span></div>
            <div><strong className="num">${(drinks.reduce((s,d)=>s+d.best.savings,0)).toFixed(2)}</strong><span>saved per round</span></div>
            <div><strong className="num">{Math.round(drinks.reduce((s,d)=>s+d.best.similarity,0)/drinks.length)}%</strong><span>avg match fidelity</span></div>
          </div>
        </div>
        <div className="dg-hero-carousel">
          <CarouselHero drinks={rows.slice(0, 6)} onOpen={onOpen} />
        </div>
      </section>

      <div className="dg-filter-shell">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          allTags={['sweet','nutty','chocolatey','fruity','tea','strong','iced','hot','non-dairy','refresher']}
          allCategories={[...new Set(drinks.map(d => d.category))]}
        />
      </div>

      <div className="dg-results-meta">
        <span>{rows.length} hack{rows.length !== 1 ? 's' : ''} matching</span>
      </div>

      <div className="dg-grid" style={{ gap, gridTemplateColumns: cols }}>
        {rows.map(d => <DealCard key={d.id} drink={d} size={filters.size} pad={cardPad} density={density} onOpen={onOpen} />)}
        {rows.length === 0 && (
          <div className="dg-empty">
            <div style={{fontSize:48}}>⌀</div>
            <h3>No hacks match these filters.</h3>
            <p>Try loosening the Min-Match or Min-Save sliders.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function DealCard({ drink, size, pad, density, onOpen }) {
  const best = drink.best;
  const originalPrice = drink.prices[size];
  const savings = originalPrice - window.CC.hackTotalPrice(best, size);
  const savingsPct = Math.round((savings / originalPrice) * 100);
  const t = window.CC.tier(best.hackScore);

  return (
    <button className={`dg-card tier-${t} density-${density}`} style={{ padding: pad }} onClick={() => onOpen(drink)}>
      <div className="dg-card-head">
        <div className="dg-card-rank">
          <RankBadge tier={t}>{window.CC.tierLabel(t)}</RankBadge>
        </div>
        <div className="dg-card-cat tag">{drink.category}</div>
      </div>

      <h3 className="dg-card-name">{drink.name}</h3>

      <div className="dg-card-prices">
        <span className="dg-orig num strike">${originalPrice.toFixed(2)}</span>
        <span className="dg-arrow">→</span>
        <span className="dg-hack num">${window.CC.hackTotalPrice(best, size).toFixed(2)}</span>
      </div>

      <div className="dg-card-savings">
        <span className="save-big num">${savings.toFixed(2)}</span>
        <span className="save-lbl">saved · {savingsPct}%</span>
      </div>

      <ScoreBars match={best.similarity} save={Math.min(100, Math.round(best.savingsPct))} />

      {density !== 'compact' && (
        <div className="dg-card-sub muted">
          Order <strong>{best.base}</strong>{best.additions?.length ? ` + ${best.additions[0].item}` : ''}
        </div>
      )}

      {drink.hacks.length > 1 && (
        <div className="dg-card-alt tag">+{drink.hacks.length - 1} alt variant{drink.hacks.length > 2 ? 's' : ''}</div>
      )}
    </button>
  );
}

// ==== Carousel ====
function CarouselHero({ drinks, onOpen }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (drinks.length < 2) return;
    const t = setInterval(() => setIdx(i => (i + 1) % drinks.length), 4500);
    return () => clearInterval(t);
  }, [drinks.length]);

  if (!drinks.length) return null;
  const cur = drinks[idx];
  const save = cur.best.savings;
  const originalPrice = cur.prices.grande;

  return (
    <div className="carousel">
      <div className="carousel-card" key={cur.id} onClick={() => onOpen(cur)}>
        <div className="carousel-stamp">FEATURED HACK<br/>#{String(idx+1).padStart(3,'0')}</div>
        <DrinkGlyph drink={cur} />
        <div className="carousel-title">{cur.name}</div>
        <div className="carousel-save num">-${save.toFixed(2)}</div>
        <div className="carousel-sub">{cur.best.similarity}% match · order a {cur.best.base}</div>
      </div>
      <div className="carousel-dots">
        {drinks.map((_, i) => <button key={i} className={i === idx ? 'on' : ''} onClick={() => setIdx(i)} />)}
      </div>
      <div className="carousel-phase2 tag">⟡ ph2: live social feed</div>
    </div>
  );
}

// A drawn-SVG placeholder "drink" that varies per drink
function DrinkGlyph({ drink }) {
  // Hash name to color
  const hash = [...drink.name].reduce((a, c) => a + c.charCodeAt(0), 0);
  const isIced = drink.temp === 'Iced';
  const isTea = drink.category === 'Tea';
  const baseColor = isTea ? 'oklch(0.68 0.12 135)' :
                    /mocha|chocolate/i.test(drink.name) ? 'oklch(0.38 0.06 40)' :
                    /matcha/i.test(drink.name) ? 'oklch(0.72 0.14 140)' :
                    /strawberry|berry|dragonfruit|mango/i.test(drink.name) ? 'oklch(0.70 0.18 20)' :
                    /pistachio/i.test(drink.name) ? 'oklch(0.78 0.12 130)' :
                    'oklch(0.55 0.08 50)';
  const liquidLevel = 20 + (hash % 25);

  return (
    <svg className="drink-glyph" viewBox="0 0 120 160" aria-hidden="true">
      <defs>
        <clipPath id={`cup-${drink.id}`}>
          <path d="M 25 30 L 35 130 Q 35 140, 45 140 L 75 140 Q 85 140, 85 130 L 95 30 Z" />
        </clipPath>
      </defs>
      {/* Cup outline */}
      <path d="M 25 30 L 35 130 Q 35 140, 45 140 L 75 140 Q 85 140, 85 130 L 95 30 Z"
            fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
      {/* Liquid */}
      <rect x="25" y={30 + liquidLevel} width="70" height="120" fill={baseColor} clipPath={`url(#cup-${drink.id})`} opacity="0.85" />
      {/* Foam */}
      {!isIced && <rect x="25" y={30 + liquidLevel - 6} width="70" height="8" fill="var(--paper-2)" clipPath={`url(#cup-${drink.id})`} />}
      {/* Ice */}
      {isIced && [0,1,2,3].map(i => (
        <rect key={i} x={30 + (i%2)*20 + (hash%8)} y={50 + Math.floor(i/2)*22} width="12" height="12"
              fill="var(--paper)" opacity="0.6" stroke="var(--paper)" strokeWidth="1" clipPath={`url(#cup-${drink.id})`}
              transform={`rotate(${hash % 20} ${36+(i%2)*20} ${56+Math.floor(i/2)*22})`} />
      ))}
      {/* Lid */}
      <path d="M 22 30 L 98 30 L 94 22 L 26 22 Z" fill="var(--ink)" />
      <rect x="55" y="16" width="10" height="8" rx="2" fill="var(--ink)" />
      {/* Sleeve tag */}
      <rect x="30" y="80" width="60" height="22" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.2" opacity="0.95" />
      <text x="60" y="94" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono" fill="var(--ink)">
        HACK-{String(hash % 999).padStart(3,'0')}
      </text>
    </svg>
  );
}

Object.assign(window, { DealGrid, DealCard, CarouselHero, DrinkGlyph });
