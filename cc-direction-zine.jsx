// Direction C: "Contraband Menu" — zine / underground newsletter aesthetic
// Warm cream, editorial serif, rubber-stamp badges, handmade pamphlet feel

function ContrabandMenu({ drinks, filters, setFilters, density, onOpen }) {
  const rows = useFilteredDrinks(drinks, filters);
  // Featured picks = top-3 hackScore
  const featured = [...drinks].sort((a,b) => b.best.hackScore - a.best.hackScore).slice(0, 3);

  return (
    <div className="cm-root">
      {/* Masthead */}
      <header className="cm-masthead">
        <div className="cm-masthead-row">
          <span className="tag">VOL. 07 · ISSUE ∞</span>
          <span className="tag">FOR INTERNAL CIRCULATION</span>
          <span className="tag">PRICE: GRATIS</span>
        </div>
        <h1 className="cm-masthead-title">The Contraband Menu</h1>
        <div className="cm-masthead-sub">
          An underground newsletter of ordering loopholes, counter-service arbitrage, and
          tiny acts of quiet rebellion against the pumpkin-spice-industrial complex.
        </div>
      </header>

      {/* Featured carousel */}
      <section className="cm-featured">
        <div className="cm-section-head">
          <h2>This Week's Exhibits</h2>
          <div className="tag muted">rotates every few seconds · click for evidence</div>
        </div>
        <FeaturedCarousel drinks={featured} onOpen={onOpen} />
      </section>

      {/* Filter controls styled as form */}
      <section className="cm-controls">
        <div className="cm-section-head">
          <h2>Filter the Dossier</h2>
        </div>
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          allTags={['sweet','nutty','chocolatey','fruity','tea','strong','iced','hot','non-dairy','refresher']}
          allCategories={[...new Set(drinks.map(d => d.category))]}
        />
      </section>

      {/* Magazine-style listings */}
      <section className="cm-listings">
        <div className="cm-section-head">
          <h2>The Dossier</h2>
          <div className="tag">{rows.length} entries</div>
        </div>

        <div className={`cm-entries density-${density}`}>
          {rows.map((d, i) => <ContrabandEntry key={d.id} drink={d} size={filters.size} idx={i} onOpen={onOpen} />)}
          {rows.length === 0 && <div className="cm-empty">The files are empty. Loosen your filters.</div>}
        </div>
      </section>

      <footer className="cm-foot">
        <div>— END OF TRANSMISSION —</div>
        <div className="muted tag">Printed on recycled suggestion. Not affiliated with any coffee conglomerate, real or imagined.</div>
      </footer>
    </div>
  );
}

function FeaturedCarousel({ drinks, onOpen }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (drinks.length < 2) return;
    const t = setInterval(() => setIdx(i => (i + 1) % drinks.length), 5000);
    return () => clearInterval(t);
  }, [drinks.length]);

  if (!drinks.length) return null;

  return (
    <div className="cm-carousel">
      {drinks.map((d, i) => (
        <article className={`cm-feature ${i === idx ? 'on' : ''}`} key={d.id} onClick={() => onOpen(d)}>
          <div className="cm-stamp">
            <div>EXHIBIT</div>
            <div className="cm-stamp-letter">{String.fromCharCode(65+i)}</div>
          </div>
          <div className="cm-feature-glyph">
            <DrinkGlyph drink={d} />
          </div>
          <div className="cm-feature-body">
            <div className="tag">CASE NO. {String((i+1)*107).padStart(4,'0')}</div>
            <h3>{d.name}</h3>
            <p className="cm-feature-quote">
              "They will charge you <span className="strike">${d.prices.grande.toFixed(2)}</span>{' '}
              for what amounts to a {d.best.base.toLowerCase()} and some goodwill."
            </p>
            <div className="cm-feature-stats">
              <div><div className="tag">LOSS PREVENTED</div><strong>${d.best.savings.toFixed(2)}</strong></div>
              <div><div className="tag">TASTE FIDELITY</div><strong>{d.best.similarity}%</strong></div>
              <div><div className="tag">RECOMMENDATION</div><strong>ACT NOW</strong></div>
            </div>
          </div>
        </article>
      ))}
      <div className="cm-carousel-dots">
        {drinks.map((_, i) => <button key={i} className={i === idx ? 'on' : ''} onClick={() => setIdx(i)}>{String.fromCharCode(65+i)}</button>)}
      </div>
    </div>
  );
}

function ContrabandEntry({ drink, size, idx, onOpen }) {
  const best = drink.best;
  const origPrice = drink.prices[size];
  const hPrice = window.CC.hackTotalPrice(best, size);
  const savings = origPrice - hPrice;
  const t = window.CC.tier(best.hackScore);

  return (
    <article className={`cm-entry tier-${t}`} onClick={() => onOpen(drink)}>
      <div className="cm-entry-num">§{String(idx+1).padStart(3,'0')}</div>
      <div className="cm-entry-glyph"><DrinkGlyph drink={drink} /></div>
      <div className="cm-entry-body">
        <div className="cm-entry-header">
          <div>
            <div className="tag">{drink.category} · {drink.temp}</div>
            <h3>{drink.name}</h3>
          </div>
          <RankBadge tier={t}>{window.CC.tierLabel(t)}</RankBadge>
        </div>

        <div className="cm-entry-pull">
          <span className="cm-big-save">−${savings.toFixed(2)}</span>
          <div>
            <div className="tag muted">instead of <span className="strike">${origPrice.toFixed(2)}</span></div>
            <div>pay <strong>${hPrice.toFixed(2)}</strong> · order a <em>{best.base}</em></div>
          </div>
        </div>

        <div className="cm-entry-score">
          <ScoreBars match={best.similarity} save={Math.min(100, Math.round(best.savingsPct))} />
        </div>

        <div className="cm-entry-hint muted">
          ↗ Read the full file for the exact ordering script
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { ContrabandMenu, FeaturedCarousel, ContrabandEntry });
