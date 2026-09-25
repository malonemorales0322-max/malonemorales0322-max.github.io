const ROLES = [
  { date: 'May 2024 – Present', company: 'Halara Coffee Club', title: 'Operations Manager', points: ['Oversee daily operations, staffing, service standards, and administrative coordination.', 'Coach employees and improve workflows to support consistent performance and customer experience.'] },
  { date: 'Feb 2021 – Dec 2021', company: 'Private Client · airSlate Project', title: 'Freelance Workflow Technical Support', points: ['Diagnosed bot configuration, workflow execution, and document automation issues.', 'Reviewed setups, recommended corrective actions, and documented resolutions.'] },
  { date: 'Jan 2018 – Sep 2023', company: 'Beyond The Crust Manila', title: 'Co-Owner & Business Manager', points: ['Directed scheduling, inventory, marketing, customer engagement, and vendor coordination.', 'Managed expenses, budgeting, records, and operational decisions.'] },
  { date: 'Jun 2016 – Dec 2017', company: 'Maritime Industry Authority', title: 'Surveillance Officer · Research Technical Assistant', points: ['Conducted compliance reviews and supported regulatory reporting and procedure updates.', 'Performed institutional research for workforce planning and employee development.'] },
  { date: 'May 2016 – Jun 2016', company: 'Gemphil Technologies Inc.', title: 'Management Information System Specialist', points: ['Supported data management, reporting, information security, and user onboarding.'] },
  { date: 'May 2015 – May 2016', company: 'Tech Mahindra', title: 'Technical Service Representative', points: ['Provided Tier 1 troubleshooting and documented customer service interactions.'] },
  { date: 'May 2011 – Apr 2014', company: 'The Real Bank', title: 'Marketing Officer · ATM Operations Support', points: ['Supported marketing activities, staff training, ATM settlement, and reconciliation.', 'Worked within banking security controls and dispute-resolution procedures.'] },
]

export default function ExperienceGrid() {
  return <section className="pgrid xgrid" aria-labelledby="experience-title">
    <header className="pgrid__head">
      <span className="pgrid__eyebrow">Experience</span>
      <h1 className="pgrid__title" id="experience-title">Broad experience. Transferable discipline.</h1>
      <p className="pgrid__lede">My career crosses operations, small business, technology, government compliance, customer support, and banking.</p>
    </header>
    <div className="home__glass xgrid__glass">
      <ol className="xgrid__timeline">
        {ROLES.map((role, i) => <li key={`${role.company}-${role.date}`} className="xgrid__role">
          <span className="xgrid__index">{String(i + 1).padStart(2, '0')}</span>
          <div className="xgrid__date">{role.date}</div>
          <div className="xgrid__body"><h2>{role.company}</h2><p className="xgrid__title">{role.title}</p><ul>{role.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
        </li>)}
      </ol>
      <a className="xgrid__resume" href="/Malone-Morales-Resume.pdf" target="_blank" rel="noreferrer">Download complete résumé</a>
    </div>
  </section>
}
