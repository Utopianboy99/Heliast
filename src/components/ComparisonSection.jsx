const withoutHeliast = ['LEAD', 'WAIT', 'CALL', 'NO ANSWER', 'TRY AGAIN', 'FORGET'];
const withHeliast = ['LEAD', 'IMMEDIATE RESPONSE', 'QUALIFICATION', 'FOLLOW-UP', 'APPOINTMENT', 'SALES'];

function ComparisonSection() {
  return (
    <section className="comparison-section" aria-labelledby="comparison-heading">
      <div className="section-shell comparison-shell">
        <div className="section-heading-wrap section-heading-center">
          <p className="eyebrow">Before vs Heliast</p>
          <h2 id="comparison-heading">Same leads. Better conversion system.</h2>
        </div>

        <div className="comparison-grid">
          <div className="comparison-column">
            <div className="comparison-header">Without Heliast</div>
            <div className="comparison-flow">
              {withoutHeliast.map((step, index) => (
                <div key={`${step}-${index}`} className="comparison-step">
                  <span>{step}</span>
                  {index < withoutHeliast.length - 1 && <span className="comparison-arrow" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>

          <div className="comparison-column is-heliast">
            <div className="comparison-header">With Heliast</div>
            <div className="comparison-flow">
              {withHeliast.map((step, index) => (
                <div key={`${step}-${index}`} className="comparison-step comparison-step-heliast">
                  <span>{step}</span>
                  {index < withHeliast.length - 1 && <span className="comparison-arrow" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
