const footerNav = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: "Who It's For", href: '#who-its-for' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#about' },
  { label: 'Resources', href: '#lead-magnet' },
  { label: 'Book a Strategy Call', href: '#book-strategy-call' },
];

const legalLinks = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <div className="footer-brand-wrap">
          <div className="brand">
            <img
              className="brand-logo"
              src="/Submark%20-%20Light.svg"
              alt="Heliast logo"
            />
            <span>Heliast</span>
          </div>
          <p className="footer-tagline">Turn More Leads Into Appointments.</p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Navigation</h3>
            <ul>
              {footerNav.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:hello@heliast.co.za">Email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="section-shell footer-bottom-inner">
          <span>© 2026 Heliast</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
