const stages = [
  {
    id: 'CAPTURE',
    title: 'Capture',
    text: "A new enquiry enters from the client's existing source.",
  },
  {
    id: 'RESPOND',
    title: 'Respond',
    text: 'The system engages immediately.',
  },
  {
    id: 'QUALIFY',
    title: 'Qualify',
    text: 'The homeowner is asked the questions that matter to that installer.',
  },
  {
    id: 'FOLLOW UP',
    title: 'Follow up',
    text: "The system continues the conversation when the homeowner doesn't immediately book.",
  },
  {
    id: 'BOOK',
    title: 'Book',
    text: 'Qualified homeowners are directed to an available appointment.',
  },
  {
    id: 'NOTIFY',
    title: 'Notify',
    text: 'The salesperson receives the opportunity.',
  },
  {
    id: 'LEARN',
    title: 'Learn',
    text: 'The outcome feeds back into the system.',
  },
];

function ProcessSection() {
  return (
    <section className="process-section" id="how-it-works" aria-labelledby="process-heading">
      <div className="section-shell">
        <div className="section-heading-wrap">
          <p className="eyebrow">How it works</p>
          <h2 id="process-heading">Every enquiry follows a system.</h2>
        </div>

        <div className="process-grid">
          {stages.map((stage, index) => (
            <article key={stage.id} className="process-card">
              <div className="process-index">0{index + 1}</div>
              <p className="process-label">{stage.id}</p>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
