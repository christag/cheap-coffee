// Direction "mix" — Deal Grid's shell + copy, Zine's texture + feel
// Collapsible filters, switchable Grid/List card layout, punk-kid parody tone.

function MixDirection({ drinks, filters, setFilters, density, layout, onOpen }) {
  const rows = useFilteredDrinks(drinks, filters);

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState(() => localStorage.getItem('cc_viewmode') || 'grid');
  useEffect(() => localStorage.setItem('cc_viewmode', viewMode), [viewMode]);

  const activeFilterCount =
    (filters.categories?.length || 0) +
    (filters.tags?.length || 0) +
    (filters.temp !== 'All' ? 1 : 0) +
    (filters.minMatch > 0 ? 1 : 0) +
    (filters.minSave > 0 ? 1 : 0) +
    (filters.q ? 1 : 0);

  const totalSave = drinks.reduce((s,d)=>s+d.best.savings, 0);
  const avgMatch = Math.round(drinks.reduce((s,d)=>s+d.best.similarity, 0) / drinks.length);

  return (
    <div className="mx-root">
      {/* TIGHT HERO — no wasted space */}
      <section className="mx-hero">
        <div className="mx-hero-left">
          <div className="mx-kicker">
            <span className="mx-stamp">NOT AFFILIATED · UNOFFICIAL</span>
            <span className="mx-kicker-dot">·</span>
            <span className="mono">updated spring '26</span>
          </div>
          <h1 className="mx-title">
            The drinks are fine, the <em>prices</em> could be better.
          </h1>
          <p className="mx-sub">
            Every overpriced drink has a cheaper twin hiding behind the counter.
            We keep the receipts. You keep the money. <span className="mx-mumble">(they've still got plenty.)</span>
          </p>
        </div>
        <div className="mx-hero-right">
          <div className="mx-stat">
            <div className="mx-stat-num num">{drinks.length}</div>
            <div className="mx-stat-lbl">hacks on file</div>
          </div>
          <div className="mx-stat">
            <div className="mx-stat-num num money">${totalSave.toFixed(0)}</div>
            <div className="mx-stat-lbl">saved / round</div>
          </div>
          <div className="mx-stat">
            <div className="mx-stat-num num">{avgMatch}<span className="mx-stat-pct">%</span></div>
            <div className="mx-stat-lbl">avg match</div>
          </div>
        </div>
      </section>

      {/* COLLAPSIBLE FILTER BAR */}
      <section className="mx-filters">
        <div className="mx-filter-summary">
          <button
            className={`mx-filter-toggle ${filtersOpen ? 'on' : ''}`}
            onClick={() => setFiltersOpen(o => !o)}
            aria-expanded={filtersOpen}
          >
            <span className="mx-filter-icon">{filtersOpen ? '▾' : '▸'}</span>
            <span>Filters</span>
            {activeFilterCount > 0 && <span className="mx-filter-count">{activeFilterCount}</span>}
          </button>

          <div className="mx-filter-chips">
            {filters.q && <ActiveChip label={`"${filters.q}"`} onClear={() => setFilters(f=>({...f, q:''}))} />}
            {filters.temp !== 'All' && <ActiveChip label={filters.temp} onClear={() => setFilters(f=>({...f, temp:'All'}))} />}
            {filters.categories.map(c => <ActiveChip key={c} label={c} onClear={() => setFilters(f=>({...f, categories: f.categories.filter(x=>x!==c)}))} />)}
            {filters.tags.map(t => <ActiveChip key={t} label={t} onClear={() => setFilters(f=>({...f, tags: f.tags.filter(x=>x!==t)}))} />)}
            {filters.minMatch > 0 && <ActiveChip label={`match ≥ ${filters.minMatch}%`} onClear={() => setFilters(f=>({...f, minMatch:0}))} />}
            {filters.minSave > 0 && <ActiveChip label={`save ≥ $${filters.minSave.toFixed(2)}`} onClear={() => setFilters(f=>({...f, minSave:0}))} />}
            {activeFilterCount > 1 && (
              <button className="mx-clear-all" onClick={() => setFilters({
                q:'', temp:'All', size: filters.size, sort: filters.sort,
                minMatch:0, minSave:0, categories:[], tags:[]
              })}>clear all</button>
            )}
          </div>

          <div className="mx-view-switch">
            <span className="tag">VIEW</span>
            <div className="seg mx-seg">
              <button className={viewMode==='grid'?'on':''} onClick={() => setViewMode('grid')} aria-label="Grid view">
                <GridIcon /> <span>Grid</span>
              </button>
              <button className={viewMode==='list'?'on':''} onClick={() => setViewMode('list')} aria-label="List view">
                <ListIcon /> <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {filtersOpen && (
          <div className="mx-filter-body">
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              allTags={['sweet','nutty','chocolatey','fruity','tea','strong','iced','hot','non-dairy','refresher']}
              allCategories={[...new Set(drinks.map(d => d.category))]}
            />
          </div>
        )}
      </section>

      {/* RESULTS */}
      <div className="mx-results-meta">
        <span className="mx-count">
          <strong>{rows.length}</strong> hack{rows.length !== 1 ? 's' : ''}
          {activeFilterCount ? ' matching your filters' : ' on the counter'}
        </span>
        <span className="mx-mumble-small">sorted by {filters.sort === 'score' ? 'best deal' : filters.sort === 'save' ? 'most saved' : 'truest match'}</span>
      </div>

      {rows.length === 0 && (
        <div className="mx-empty">
          <div className="mx-empty-mark">∅</div>
          <h3>Zero hacks survive these filters.</h3>
          <p className="muted">Loosen the screws — drag the sliders down or drop a tag.</p>
        </div>
      )}

      {viewMode === 'grid' && (
        <div className={`mx-grid density-${density}`}>
          {rows.map((d, i) => <MixCard key={d.id} drink={d} size={filters.size} onOpen={onOpen} idx={i} />)}
        </div>
      )}

      {viewMode === 'list' && (
        <div className={`mx-list density-${density}`}>
          {rows.map((d, i) => <MixListRow key={d.id} drink={d} size={filters.size} onOpen={onOpen} idx={i} />)}
        </div>
      )}

      {/* Zine colophon footer — punk-kid parody, but small + dignified */}
      <footer className="mx-colophon">
        <div className="mx-colophon-rule">〰</div>
        <div className="mx-colophon-text">
          <strong>cheap-coffee</strong> is a small field guide to ordering loopholes, counter-service arbitrage,
          and <em>small, legal, satisfying</em> acts of disobedience against drinks that cost more than a paperback.
          <br/><span className="muted">unaffiliated with any coffee conglomerate · all savings hypothetical until executed</span>
        </div>
        <div className="mx-colophon-links">
          <a
            className="mx-colophon-link mx-colophon-about"
            href="#about"
            onClick={e => { e.preventDefault(); alert('Parody site. No affiliation. All savings hypothetical until executed.'); }}
          >About</a>
          <a
            className="mx-colophon-link"
            href="https://github.com/christag/cheap-coffee"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub ↗</a>
        </div>
      </footer>
    </div>
  );
}

function ActiveChip({ label, onClear }) {
  return (
    <span className="mx-active-chip">
      {label}
      <button onClick={onClear} aria-label="Remove">×</button>
    </span>
  );
}

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="5" height="5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="8" y="1" width="5" height="5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="1" y="8" width="5" height="5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="8" y="8" width="5" height="5" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}
function ListIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <line x1="1" y1="3" x2="13" y2="3" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="1" y1="11" x2="13" y2="11" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

// ========= GRID CARD (Deal-Grid derived, zine-textured) =========
function MixCard({ drink, size, onOpen, idx }) {
  const best = drink.best;
  const originalPrice = drink.prices[size];
  const savings = originalPrice - window.CC.hackTotalPrice(best, size);
  const savingsPct = Math.round((savings / originalPrice) * 100);
  const t = window.CC.tier(best.hackScore);
  const displayName = window.CC.censorName(drink.name);

  return (
    <button className={`mx-card tier-${t}`} onClick={() => onOpen(drink)}>
      {/* Alt-variant stamp — top-right corner */}
      {drink.hacks.length > 1 && (
        <div className="mx-card-alt-stamp">+{drink.hacks.length - 1} alt</div>
      )}

      {/* Split block: left = full glyph, right = 2 stacked cells */}
      <div className="mx-card-quads">
        <div className="mx-quad mx-quad-glyph">
          <DrinkGlyph drink={drink} />
        </div>
        <div className="mx-quad-right">
          <div className="mx-quad mx-quad-match">
            <div className="mx-quad-pair">
              <div className="mx-quad-col">
                <div className="mx-quad-num">{best.similarity}<span className="mx-quad-pct">%</span></div>
                <div className="mx-quad-lbl">match</div>
              </div>
              <div className="mx-quad-col">
                <div className="mx-quad-num money">{savingsPct}<span className="mx-quad-pct">%</span></div>
                <div className="mx-quad-lbl">saved</div>
              </div>
            </div>
          </div>
          <div className="mx-quad mx-quad-price">
            <div className="mx-quad-priceline">
              <span className="strike num mx-card-old">${originalPrice.toFixed(2)}</span>
              <span className="mx-arrow">→</span>
              <span className="mx-hack-big num">${window.CC.hackTotalPrice(best, size).toFixed(2)}</span>
            </div>
            <div className="mx-quad-lbl">−${savings.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Meta line — below quadrant */}
      <div className="mx-card-meta">№{String(idx+1).padStart(2,'0')} · {drink.category.toUpperCase()}</div>

      {/* Drink name */}
      <h3 className="mx-card-name">{displayName}</h3>
    </button>
  );
}

// ========= LIST ROW (Zine-derived, Deal-Grid copy) =========
function MixListRow({ drink, size, onOpen, idx }) {
  const best = drink.best;
  const originalPrice = drink.prices[size];
  const hPrice = window.CC.hackTotalPrice(best, size);
  const savings = originalPrice - hPrice;
  const savingsPct = Math.round((savings / originalPrice) * 100);
  const t = window.CC.tier(best.hackScore);
  const displayName = window.CC.censorName(drink.name);

  return (
    <article className={`mx-row tier-${t}`} onClick={() => onOpen(drink)}>
      <div className="mx-row-num">№{String(idx+1).padStart(3,'0')}</div>
      <div className="mx-row-glyph"><DrinkGlyph drink={drink} /></div>
      <div className="mx-row-body">
        <div className="mx-row-head">
          <div className="mx-row-title-wrap">
            <div className="tag mx-row-cat">{drink.category} · {drink.temp}</div>
            <h3 className="mx-row-title">{displayName}</h3>
          </div>
          <RankBadge tier={t}>{window.CC.tierLabel(t)}</RankBadge>
        </div>

        <div className="mx-row-deal">
          <div className="mx-row-priceblock">
            <div className="mx-row-priceline">
              <span className="strike num mx-row-old">${originalPrice.toFixed(2)}</span>
              <span className="mx-arrow">→</span>
              <strong className="num mx-row-new">${hPrice.toFixed(2)}</strong>
              <span className="mx-row-savedollar num">save ${savings.toFixed(2)}</span>
            </div>
            <div className="mx-row-script">
              based on a <strong>{best.base}</strong>
              {best.additions?.length ? <span className="muted"> · + {best.additions[0].item.toLowerCase()}</span> : null}
            </div>
          </div>
          <div className="mx-row-scores">
            <ScoreBars match={best.similarity} save={Math.min(100, Math.round(best.savingsPct))} compact />
          </div>
        </div>
      </div>
      <div className="mx-row-arrow" aria-hidden="true">↗</div>
    </article>
  );
}

Object.assign(window, { MixDirection, MixCard, MixListRow });
