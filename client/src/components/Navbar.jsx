import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setChaptersOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled ? 'var(--bg-nav)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
      transition: 'all 0.4s ease',
      WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40,
            borderRadius: 12,
            background: 'var(--grad-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20,
            boxShadow: '0 4px 16px rgba(46,164,100,0.4)',
            flexShrink: 0,
          }}>
            🧬
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 800,
              fontSize: 18,
              color: 'var(--text-primary)',
              letterSpacing: '-0.3px',
              lineHeight: 1.1,
            }}>
              BioLearn
            </div>
            <div style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>
              by Anil Letwala
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1, justifyContent: 'center' }}>
          <NavLink to="/" active={isActive('/')}>🏠 Home</NavLink>

          {/* Chapters Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setChaptersOpen(prev => !prev)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '10px 18px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: chaptersOpen ? 'rgba(46,164,100,0.15)' : 'transparent',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-secondary)',
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { if (!chaptersOpen) e.target.style.background = 'rgba(46,164,100,0.1)'; }}
              onMouseLeave={e => { if (!chaptersOpen) e.target.style.background = 'transparent'; }}
            >
              📖 Chapters
              <span style={{ transform: chaptersOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease', fontSize: 10 }}>▼</span>
            </button>
            {chaptersOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                minWidth: 240,
                overflow: 'hidden',
                animation: 'slideDown 0.2s ease',
              }}>
                <div style={{ padding: '8px' }}>
                  <DropdownItem to="/chapters/human-biology" icon="🫀" label="Human Biology" desc="5 Chapters • Cell to Systems" />
                  <DropdownItem to="/chapters/skin-biology" icon="✨" label="Skin Biology" desc="5 Chapters • Science of Skin" />
                </div>
              </div>
            )}
          </div>

          <NavLink to="/about" active={isActive('/about')}>👤 About</NavLink>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            style={{
              width: 44, height: 44,
              borderRadius: 'var(--radius-full)',
              border: '1.5px solid var(--border-color)',
              background: 'var(--bg-card)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20,
              transition: 'all 0.3s ease',
              color: 'var(--text-primary)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green-primary)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(prev => !prev)}
            style={{
              display: 'none',
              width: 44, height: 44,
              borderRadius: 'var(--radius-full)',
              border: '1.5px solid var(--border-color)',
              background: 'var(--bg-card)',
              cursor: 'pointer',
              alignItems: 'center', justifyContent: 'center',
              fontSize: 18,
              color: 'var(--text-primary)',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          borderTop: '1px solid var(--border-color)',
          padding: '16px 24px',
          background: 'var(--bg-nav)',
          backdropFilter: 'blur(24px)',
          display: 'flex', flexDirection: 'column', gap: 8,
          animation: 'slideDown 0.2s ease',
        }}>
          <MobileNavLink to="/" label="🏠 Home" />
          <MobileNavLink to="/chapters/human-biology" label="🫀 Human Biology Chapters" />
          <MobileNavLink to="/chapters/skin-biology" label="✨ Skin Biology Chapters" />
          <MobileNavLink to="/about" label="👤 About" />
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

const NavLink = ({ to, active, children }) => (
  <Link
    to={to}
    style={{
      display: 'flex', alignItems: 'center', gap: 6,
      padding: '10px 18px',
      borderRadius: 'var(--radius-full)',
      textDecoration: 'none',
      fontFamily: 'var(--font-secondary)',
      fontWeight: 600,
      fontSize: 14,
      color: active ? 'var(--green-primary)' : 'var(--text-secondary)',
      background: active ? 'rgba(46,164,100,0.12)' : 'transparent',
      border: active ? '1px solid rgba(46,164,100,0.3)' : '1px solid transparent',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(46,164,100,0.08)'; e.currentTarget.style.color = 'var(--green-primary)'; }}}
    onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; }}}
  >
    {children}
  </Link>
);

const DropdownItem = ({ to, icon, label, desc }) => (
  <Link to={to} style={{
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '12px 16px',
    borderRadius: 'var(--radius-sm)',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  }}
    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(46,164,100,0.08)'; }}
    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
    <div style={{ fontSize: 24 }}>{icon}</div>
    <div>
      <div style={{ fontFamily: 'var(--font-secondary)', fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{label}</div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{desc}</div>
    </div>
  </Link>
);

const MobileNavLink = ({ to, label }) => (
  <Link to={to} style={{
    padding: '14px 16px',
    borderRadius: 'var(--radius-sm)',
    textDecoration: 'none',
    fontFamily: 'var(--font-secondary)',
    fontWeight: 600,
    fontSize: 15,
    color: 'var(--text-primary)',
    display: 'block',
    border: '1px solid var(--border-color)',
    background: 'var(--bg-card)',
    transition: 'all 0.2s ease',
  }}>
    {label}
  </Link>
);

export default Navbar;
