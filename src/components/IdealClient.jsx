const idealFits = [
  { number: '01', title: 'Gauteng', text: 'Our initial market.' },
  { number: '02', title: 'Existing lead flow', text: 'You already receive enquiries.' },
  { number: '03', title: 'Sales capacity', text: 'You have someone who can handle qualified appointments.' },
  { number: '04', title: 'Installation capacity', text: 'You can service the customers you win.' },
];

const exclusions = [
  'Solo installers',
  'Large enterprise installers',
  'Commercial solar companies',
  'Companies outside Gauteng',
  'Businesses with no existing lead flow',
];

function IdealClient() {
  return (
    <section className="ideal-client-section" id="who-its-for" aria-labelledby="ideal-client-heading">
      <div className="section-shell">
        <div className="section-heading-wrap">
          <p className="eyebrow">Who it&apos;s for</p>
          <h2 id="ideal-client-heading">Built for residential solar installers.</h2>
        </div>

        <div className="ideal-fit-grid">
          {idealFits.map((fit) => (
            <article key={fit.number} className="fit-card">
              <div className="fit-number">{fit.number}</div>
              <h3>{fit.title}</h3>
              <p>{fit.text}</p>
            </article>
          ))}
        </div>

        <div className="qualify-box">
          <p className="qualify-label">Not every business is a Heliast client.</p>
          <ul>
            {exclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default IdealClient;
