function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="section-shell about-shell">
        <div className="section-heading-wrap">
          <p className="eyebrow">About</p>
          <h2 id="about-heading">Every enquiry is an opportunity.</h2>
        </div>

        <div className="about-copy">
          <p>
            We believe businesses shouldn&apos;t lose valuable opportunities simply because a
            salesperson was busy, a follow-up was forgotten, or nobody knew whether a lead was
            worth pursuing.
          </p>
          <p>
            Heliast exists to build the system between the first enquiry and the sales
            conversation.
          </p>
        </div>

        <div className="wordmark" aria-label="Three words: Intelligent, Precise, Systematic">
          <span>INTELLIGENT.</span>
          <span>PRECISE.</span>
          <span>SYSTEMATIC.</span>
        </div>
      </div>
    </section>
  );
}

export default About;
