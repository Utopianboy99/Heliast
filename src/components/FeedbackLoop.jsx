const loopSteps = [
  'LEAD',
  'QUALIFICATION',
  'APPOINTMENT',
  'SALES OUTCOME',
  'DATA',
  'BETTER QUALIFICATION',
];

function FeedbackLoop() {
  return (
    <section className="feedback-loop-section" aria-labelledby="feedback-heading">
      <div className="section-shell">
        <div className="section-heading-wrap section-heading-center">
          <p className="eyebrow">Feedback loop</p>
          <h2 id="feedback-heading">The system improves with every outcome.</h2>
        </div>

        <div className="loop-visual" aria-label="Lead to outcome to improved qualification loop">
          {loopSteps.map((step, index) => (
            <div key={step} className="loop-step">
              <span>{step}</span>
              {index < loopSteps.length - 1 && <span className="loop-arrow" aria-hidden="true" />}
            </div>
          ))}
          <div className="loop-cycle" aria-hidden="true">↺</div>
        </div>

        <p className="feedback-copy">
          Every booked appointment, attended meeting, no-show and sales outcome gives information
          about what a good lead actually looks like. This creates a feedback loop over time.
        </p>
      </div>
    </section>
  );
}

export default FeedbackLoop;
