const flowSteps = [
  'NEW LEAD',
  'AI RESPONSE',
  'QUALIFIED',
  'APPOINTMENT',
  'SALES TEAM',
];

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="section-shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">INTELLIGENT LEAD CONVERSION</p>
          <h1>
            <span>Your leads are already there.</span>
          </h1>
          <h2 className="hero-supporting">Turn more of them into qualified sales appointments.</h2>
          <p className="hero-text">
            Heliast helps residential solar installers respond to new enquiries
            immediately, qualify homeowners with AI, follow up automatically and book
            qualified prospects directly onto the sales team&apos;s calendar.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#book-strategy-call">
              Book a Strategy Call →
            </a>
            <a className="button button-secondary" href="#how-it-works">
              See How It Works ↓
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Lead flow from enquiry to appointment to sales team">
          <div className="flow-panel">
            {flowSteps.map((step, index) => (
              <div key={step} className="flow-segment">
                <div className={`flow-node ${index === 0 ? 'is-active' : ''}`}>
                  <span>{step}</span>
                </div>
                {index < flowSteps.length - 1 && <span className="flow-arrow" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
