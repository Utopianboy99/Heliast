const systemSteps = [
  'EXISTING LEAD',
  'IMMEDIATE AI RESPONSE',
  'QUALIFICATION',
  'FOLLOW-UP',
  'APPOINTMENT BOOKED',
  'SALES TEAM',
];

function ConversionSystem() {
  return (
    <section className="conversion-system" aria-labelledby="system-heading">
      <div className="section-shell">
        <div className="section-heading-wrap section-heading-center">
          <p className="eyebrow">The Heliast system</p>
          <h2 id="system-heading">We automate the gap between enquiry and appointment.</h2>
        </div>

        <div className="system-rail" aria-label="The conversion system flow">
          {systemSteps.map((step, index) => (
            <div key={step} className="system-step">
              <div className={`system-node ${index === 0 ? 'is-active' : ''}`}>
                <span>{step}</span>
              </div>
              {index < systemSteps.length - 1 && <span className="system-line" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConversionSystem;
