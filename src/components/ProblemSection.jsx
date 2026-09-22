function ProblemSection() {
  const problems = [
    {
      number: '01',
      title: 'Slow response',
      text: 'The enquiry sits waiting while the salesperson is busy.',
    },
    {
      number: '02',
      title: 'Poor qualification',
      text: 'Salespeople spend time chasing homeowners who aren\'t ready or aren\'t a fit.',
    },
    {
      number: '03',
      title: 'Weak follow-up',
      text: 'Interested prospects disappear because nobody consistently follows up.',
    },
  ];

  return (
    <section className="problem-section" aria-labelledby="problem-heading">
      <div className="section-shell problem-shell">
        <div className="section-heading-wrap">
          <p className="eyebrow eyebrow-dark">The problem</p>
          <h2 id="problem-heading">You&apos;re already paying for the opportunity.</h2>
        </div>

        <div className="problem-intro">
          <p>
            A homeowner submits an enquiry. But between that moment and the first sales
            conversation, opportunities can disappear.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((problem) => (
            <article key={problem.number} className="problem-card">
              <div className="problem-card-number">{problem.number}</div>
              <h3>{problem.title}</h3>
              <p>{problem.text}</p>
            </article>
          ))}
        </div>

        <p className="problem-transition">
          <strong>The problem isn&apos;t always getting another lead.</strong> It&apos;s what happens
          after the lead arrives.
        </p>
      </div>
    </section>
  );
}

export default ProblemSection;
