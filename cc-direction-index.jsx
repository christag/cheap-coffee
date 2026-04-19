// Direction B: "The Hack Index" — Bloomberg-terminal-for-coffee
// Data-dense, monospace, scatter plot hero, ranked table

function HackIndex({ drinks, filters, setFilters, density, onOpen }) {
  const rows = useFilteredDrinks(drinks, filters);

  return (
    <div className="hi-root">
      <div className="hi-banner">
        <div className="hi-banner-left">
          <span className="tag" style={{color:'var(--hazard)'}}>● LIVE</span>
          <span className="hi-ticker mono">CHEAP-COFFEE :: CORPORATE MENU ARBITRAGE DESK :: SESSION 0947</span>
        </div>
        <div className="hi-banner-right mono">
          {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} · 04:19AM PT
        </div>
      </div>

      <section className="hi-hero">
        <div className="hi-hero-left">
          <div className="tag">THE HACK INDEX™</div>
          <h1 className="hi-hero-title mono">COFFEE_MENU.EXPLOIT()</h1>
          <p className="hi-hero-sub">
            A quantitative index of {drinks.length} overpriced beverages and their cheaper
            twins. Similarity measured empirically. Savings calculated to the cent.
            Ethics questionable. Results replicable.
          </p>
          <div className="hi-metrics">
            <div className="hi-metric">
              <div className="tag">Median savings</div>
              <div className="hi-metric-val mono">${median(drinks.map(d=>d.best.savings)).toFixed(2)}</div>
            </div>
            <div className="hi-metric">
              <div className="tag">Top hack fidelity</div>
              <div className="hi-metric-val mono">{Math.max(...drinks.map(d=>d.best.similarity))}%</div>
            </div>
            <div className="hi-metric">
              <div className="tag">Total annual leak</div>
              <div className="hi-metric-val mono">${(drinks.reduce((s,d)=>s+d.best.savings,0) * 52).toFixed(0)}</div>
            </div>
          </div>
        </div>
        <div className="hi-hero-right">
          <ScatterPlot drinks={drinks} size={filters.size} onOpen={onOpen} />
        </div>
      </section>

      <div className="hi-filter-shell">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          allTags={['sweet','nutty','chocolatey','fruity','tea','strong','iced','hot','non-dairy','refresher']}
          allCategories={[...new Set(drinks.map(d => d.category))]}
          compact={density === 'compact'}
        />
      </div>

      <div className="hi-table-wrap">
        <div className="hi-table-head mono">
          <div style={{width: 50}}>#</div>
          <div style={{width: 80}}>TIER</div>
          <div style={{flex: 2}}>DRINK</div>
          <div style={{width: 120}}>CATEGORY</div>
          <div style={{width: 90, textAlign:'right'}}>MENU</div>
          <div style={{width: 90, textAlign:'right'}}>HACK</div>
          <div style={{width: 90, textAlign:'right', color:'var(--money-ink)'}}>Δ SAVE</div>
          <div style={{width: 70, textAlign:'right'}}>MATCH</div>
          <div style={{width: 70, textAlign:'right'}}>SCORE</div>
        </div>
        {rows.map((d, i) => {
          const origPrice = d.prices[filters.size];
          const hPrice = window.CC.hackTotalPrice(d.best, filters.size);
          const save = origPrice - hPrice;
          const t = window.CC.tier(d.best.hackScore);
          return (
            <button className={`hi-row density-${density}`} key={d.id} onClick={() => onOpen(d)}>
              <div style={{width: 50}} className="mono muted">{String(i+1).padStart(3,'0')}</div>
              <div style={{width: 80}}><RankBadge tier={t}>{t.toUpperCase()}</RankBadge></div>
              <div style={{flex: 2}} className="hi-drink-name">
                <span>{d.name}</span>
                {d.hacks.length > 1 && <span className="tag" style={{marginLeft:8, color:'var(--hazard)'}}>+{d.hacks.length-1}alt</span>}
              </div>
              <div style={{width: 120}} className="muted">{d.category}</div>
              <div style={{width: 90, textAlign:'right'}} className="mono strike">${origPrice.toFixed(2)}</div>
              <div style={{width: 90, textAlign:'right'}} className="mono">${hPrice.toFixed(2)}</div>
              <div style={{width: 90, textAlign:'right', color:'var(--money-ink)'}} className="mono">-${save.toFixed(2)}</div>
              <div style={{width: 70, textAlign:'right'}} className="mono">{d.best.similarity}%</div>
              <div style={{width: 70, textAlign:'right'}} className="mono" style={{color: t === 'sss' || t === 's' ? 'var(--hazard)' : 'var(--ink)'}}>{d.best.hackScore}</div>
            </button>
          );
        })}
        {rows.length === 0 && <div className="hi-empty">— no rows —</div>}
      </div>
    </div>
  );
}

function median(arr) {
  const s = [...arr].sort((a,b)=>a-b);
  const m = Math.floor(s.length/2);
  return s.length % 2 ? s[m] : (s[m-1]+s[m])/2;
}

// ==== Scatter plot ====
function ScatterPlot({ drinks, size, onOpen }) {
  const [hover, setHover] = useState(null);
  const W = 420, H = 300, padL = 40, padB = 40, padT = 20, padR = 20;
  const maxSave = Math.max(...drinks.map(d => d.best.savings), 2.5);

  const xScale = (sim) => padL + (sim / 100) * (W - padL - padR);
  const yScale = (save) => (H - padB) - (save / maxSave) * (H - padT - padB);

  return (
    <div className="scatter-wrap">
      <div className="scatter-head mono">
        <span>PLOT: SIMILARITY × SAVINGS ({size.toUpperCase()})</span>
        <span className="muted">hover to inspect · click to open</span>
      </div>
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} className="scatter-svg">
        {/* Grid */}
        {[0,25,50,75,100].map(v => (
          <g key={v}>
            <line x1={xScale(v)} x2={xScale(v)} y1={padT} y2={H-padB} stroke="var(--line-soft)" strokeDasharray="2 3" />
            <text x={xScale(v)} y={H-padB+15} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="var(--ink-mute)">{v}</text>
          </g>
        ))}
        {[0, maxSave/2, maxSave].map((v, i) => (
          <g key={i}>
            <line x1={padL} x2={W-padR} y1={yScale(v)} y2={yScale(v)} stroke="var(--line-soft)" strokeDasharray="2 3" />
            <text x={padL-6} y={yScale(v)+3} textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="var(--ink-mute)">${v.toFixed(1)}</text>
          </g>
        ))}
        {/* Axes */}
        <line x1={padL} x2={W-padR} y1={H-padB} y2={H-padB} stroke="var(--ink)" strokeWidth="1.5" />
        <line x1={padL} x2={padL} y1={padT} y2={H-padB} stroke="var(--ink)" strokeWidth="1.5" />
        {/* Labels */}
        <text x={(W-padL-padR)/2+padL} y={H-6} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="var(--ink-mute)">← MATCH FIDELITY %</text>
        <text x={10} y={padT+8} fontSize="10" fontFamily="JetBrains Mono" fill="var(--ink-mute)">$ SAVE</text>

        {/* Sweet spot quadrant */}
        <rect x={xScale(75)} y={yScale(maxSave)} width={xScale(100)-xScale(75)} height={yScale(maxSave*0.5)-yScale(maxSave)}
              fill="var(--money-bg)" opacity="0.5" />
        <text x={xScale(87.5)} y={yScale(maxSave*0.85)} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="var(--money-ink)" fontWeight="600">SWEET SPOT</text>

        {/* Dots */}
        {drinks.map(d => {
          const x = xScale(d.best.similarity);
          const save = d.prices[size] - window.CC.hackTotalPrice(d.best, size);
          const y = yScale(Math.max(0, save));
          const t = window.CC.tier(d.best.hackScore);
          const col = t === 'sss' ? 'var(--hazard)' : t === 's' ? 'oklch(0.55 0.15 30)' : t === 'a' ? 'var(--money)' : t === 'b' ? 'var(--olive)' : 'var(--ink-mute)';
          const r = hover?.id === d.id ? 8 : 5;
          return (
            <circle key={d.id} cx={x} cy={y} r={r} fill={col} opacity="0.85"
              stroke="var(--paper)" strokeWidth="1.5"
              style={{cursor:'pointer', transition: 'r 0.15s'}}
              onMouseEnter={() => setHover(d)}
              onMouseLeave={() => setHover(null)}
              onClick={() => onOpen(d)} />
          );
        })}
      </svg>
      {hover && (
        <div className="scatter-tooltip">
          <strong>{hover.name}</strong>
          <span className="muted"> · {hover.category}</span>
          <div className="mono" style={{fontSize:11, marginTop:2}}>
            {hover.best.similarity}% match · save ${(hover.prices[size]-window.CC.hackTotalPrice(hover.best,size)).toFixed(2)} · score {hover.best.hackScore}
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { HackIndex, ScatterPlot });
