const insights = [
  'The Speed-to-Lead Problem',
  'The Qualification Problem',
  'The Follow-Up Problem',
  'The Appointment Funnel',
];

function HeliastLab() {
  return (
    <section className="heliast-lab-section" id="insights" aria-labelledby="insights-heading">
      <div className="section-shell">
        <div className="section-heading-wrap">
          <p className="eyebrow">Insights / experiments</p>
          <h2 id="insights-heading">We&apos;re studying what happens between lead and sale.</h2>
        </div>

        <div className="lab-grid">
          {insights.map((item, index) => (
            <article key={item} className="insight-card">
              <span className="insight-index">0{index + 1}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeliastLab;
