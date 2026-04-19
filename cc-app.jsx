// Main app shell — direction switcher, Tweaks panel, orchestration

const { useState: uS, useEffect: uE, useMemo: uM } = React;

function App() {
  const rawDrinks = uM(() => window.CC.normalizeAll(window.DRINKS_DATA), []);
  const [direction, setDirection] = uS(() => localStorage.getItem('cc_dir') || 'mix');
  const [density, setDensity] = uS(() => localStorage.getItem('cc_dens') || 'comfortable');
  const [layout, setLayout] = uS(() => localStorage.getItem('cc_layout') || 'default');
  const [open, setOpen] = uS(null); // drink being viewed
  const [toast, setToast] = useToast();
  const [tweaksOn, setTweaksOn] = uS(false);

  const [filters, setFilters] = uS({
    q: '', temp: 'All', size: 'grande', sort: 'score',
    minMatch: 0, minSave: 0,
    categories: [], tags: [],
  });

  uE(() => localStorage.setItem('cc_dir', direction), [direction]);
  uE(() => localStorage.setItem('cc_dens', density), [density]);
  uE(() => localStorage.setItem('cc_layout', layout), [layout]);

  // Deep-link: #drink=<id>
  uE(() => {
    const m = window.location.hash.match(/drink=([a-z_]+)/);
    if (m) {
      const d = rawDrinks.find(x => x.id === m[1]);
      if (d) setOpen(d);
    }
  }, [rawDrinks]);

  // Edit mode wiring
  uE(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksOn(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksOn(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const dirComp = { mix: MixDirection, grid: DealGrid, index: HackIndex, zine: ContrabandMenu }[direction] || MixDirection;

  return (
    <div className={`app dir-${direction} layout-${layout}`} data-screen-label={`Direction ${direction}`}>
      {/* Top nav */}
      <nav className="topnav">
        <div className="topnav-brand">
          <span className="brand-mark">◉</span>
          <span className="brand-name">cheap-coffee</span>
          <span className="brand-dot muted">/</span>
          <span className="brand-sub muted">the menu is a suggestion</span>
        </div>
        <div className="topnav-switch">
          <span className="tag">VIEW</span>
          <div className="seg">
            <button className={direction==='mix'?'on':''} onClick={() => setDirection('mix')}>Menu</button>
            <button className={direction==='index'?'on':''} onClick={() => setDirection('index')}>Index</button>
          </div>
        </div>
        <div className="topnav-actions">
          <a className="btn ghost" href="#about" onClick={e => { e.preventDefault(); alert('Parody site. No affiliation. All savings hypothetical until executed.'); }}>About</a>
        </div>
      </nav>

      {React.createElement(dirComp, {
        drinks: rawDrinks, filters, setFilters, density, layout,
        onOpen: (d) => setOpen(d),
      })}

      {open && <DetailDrawer drink={open} size={filters.size} onClose={() => { setOpen(null); history.replaceState(null,'',' '); }} onToast={setToast} />}
      {toast && <div className="toast">{toast}</div>}

      {tweaksOn && (
        <div className="tweaks-panel">
          <h4>Tweaks</h4>
          <div className="tweak-row">
            <label>Direction</label>
            <div className="seg">
              <button className={direction==='mix'?'on':''} onClick={() => setDirection('mix')}>Mix</button>
              <button className={direction==='grid'?'on':''} onClick={() => setDirection('grid')}>Grid</button>
              <button className={direction==='index'?'on':''} onClick={() => setDirection('index')}>Index</button>
              <button className={direction==='zine'?'on':''} onClick={() => setDirection('zine')}>Zine</button>
            </div>
          </div>
          <div className="tweak-row">
            <label>Card density</label>
            <div className="seg">
              <button className={density==='compact'?'on':''} onClick={() => setDensity('compact')}>Compact</button>
              <button className={density==='comfortable'?'on':''} onClick={() => setDensity('comfortable')}>Comfortable</button>
              <button className={density==='spacious'?'on':''} onClick={() => setDensity('spacious')}>Spacious</button>
            </div>
          </div>
          <div className="tweak-row">
            <label>Layout variant</label>
            <div className="seg">
              <button className={layout==='default'?'on':''} onClick={() => setLayout('default')}>Default</button>
              <button className={layout==='wide'?'on':''} onClick={() => setLayout('wide')}>Wide</button>
              <button className={layout==='single'?'on':''} onClick={() => setLayout('single')}>Single-col</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "mix",
  "density": "comfortable",
  "layout": "default"
}/*EDITMODE-END*/;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
