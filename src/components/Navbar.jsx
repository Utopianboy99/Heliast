import { useState } from 'react';

const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: "Who It's For", href: '#who-its-for' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#about' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="section-shell navbar-shell">
        <a className="brand" href="#top" aria-label="Heliast home">
          <img
            className="brand-logo"
            src="/Submark%20-%20Light.svg"
            alt="Heliast logo"
          />
          <span>Heliast</span>
        </a>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button-primary nav-cta" href="#book-strategy-call">
          Book a Strategy Call
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
