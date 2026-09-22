const outcomes = [
  {
    title: 'Better opportunities',
    text: 'Salespeople spend more time with homeowners who meet agreed criteria.',
  },
  {
    title: 'Less manual chasing',
    text: 'The system handles repetitive follow-up.',
  },
  {
    title: 'Faster conversations',
    text: 'Qualified opportunities are surfaced while they are still active.',
  },
];

function OutcomesSection() {
  return (
    <section className="outcomes-section" aria-labelledby="outcomes-heading">
      <div className="section-shell">
        <div className="section-heading-wrap">
          <p className="eyebrow">Sales team outcomes</p>
          <h2 id="outcomes-heading">Your sales team gets fewer dead ends.</h2>
        </div>

        <div className="outcome-grid">
          {outcomes.map((outcome, index) => (
            <article key={outcome.title} className="outcome-card">
              <div className="outcome-index">0{index + 1}</div>
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
            </article>
          ))}
        </div>

        <p className="supporting-note">
          Heliast doesn&apos;t replace your sales team. It makes their time more valuable.
        </p>
      </div>
    </section>
  );
}

export default OutcomesSection;
