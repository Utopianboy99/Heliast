function LeadMagnet() {
  return (
    <section className="lead-magnet-section" id="lead-magnet" aria-labelledby="lead-magnet-heading">
      <div className="section-shell lead-magnet-shell">
        <div className="lead-magnet-copy">
          <p className="eyebrow">Free guide</p>
          <h2 id="lead-magnet-heading">The Solar Installer&apos;s Guide to Turning More Leads Into Sales Appointments</h2>
          <p>
            A practical guide to responding faster, qualifying better and building a
            consistent follow-up system around the enquiries you&apos;re already receiving.
          </p>
          <a className="button button-primary" href="#lead-magnet-form">
            Get the Free Guide →
          </a>
        </div>

        <form className="lead-form" id="lead-magnet-form">
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            <span>Company</span>
            <input type="text" name="company" placeholder="Your company" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            <span>Phone</span>
            <input type="tel" name="phone" placeholder="+27 00 000 0000" />
          </label>
          <label>
            <span>Approximate monthly enquiry volume</span>
            <input type="text" name="volume" placeholder="Optional" />
          </label>
          <button type="submit" className="button button-primary form-submit">
            Get the Free Guide →
          </button>
        </form>
      </div>
    </section>
  );
}

export default LeadMagnet;
