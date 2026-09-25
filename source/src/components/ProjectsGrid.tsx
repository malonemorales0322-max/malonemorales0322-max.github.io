import { FlowIcon, PlanIcon, SparkIcon, DeviceIcon } from './ProjectIcons'
import { CheckCircle } from '@/components/slab'

const PROJECTS = [
  {
    index: '01', title: 'Operations Tracker & Weekly Report', eyebrow: 'Portfolio sample', Icon: FlowIcon,
    desc: 'A structured system for converting daily activity into a clear management update.',
    items: ['Task and KPI tracker', 'Weekly status summary', 'Issues and follow-up log', 'Priority flags'],
    tools: ['Excel', 'Google Sheets', 'Word'],
  },
  {
    index: '02', title: 'SOP & Employee Onboarding Pack', eyebrow: 'Portfolio sample', Icon: PlanIcon,
    desc: 'A repeatable documentation set that makes responsibilities and next steps obvious.',
    items: ['Step-by-step SOP', 'Onboarding checklist', 'Role expectations', 'Training follow-up'],
    tools: ['Microsoft 365', 'Google Workspace', 'airSlate'],
  },
  {
    index: '03', title: 'Data Cleanup & Reconciliation', eyebrow: 'Portfolio sample', Icon: SparkIcon,
    desc: 'A controlled review for missing records, duplicates, mismatches, and exceptions.',
    items: ['Cleaned master list', 'Exception report', 'Reconciliation checklist', 'Correction log'],
    tools: ['Excel', 'Xero', 'QuickBooks'],
  },
  {
    index: '04', title: 'airSlate Workflow Support', eyebrow: 'Real engagement', Icon: DeviceIcon,
    desc: 'Remote technical support for document workflows, bots, and automation issues.',
    items: ['Configuration review', 'Issue diagnosis', 'Corrective guidance', 'Resolution notes'],
    tools: ['airSlate', 'Slack', 'Jira'],
  },
]

export default function ProjectsGrid() {
  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">Proof of process, not inflated claims.</h1>
        <p className="pgrid__lede">These samples show how I structure common support work. They are clearly labeled so employers can separate demonstration work from paid experience.</p>
      </header>
      <div className="home__glass pgrid__glass">
        <div className="bento bento--projects">
          {PROJECTS.map((p, i) => <article key={p.title} className={`bento__card${i < 2 ? ' bento__card--wide' : ''}`}>
            <span className="bento__head">
              <span className="bento__icon"><p.Icon size={21} /></span>
              <span className="bento__kicker">{p.eyebrow} · {p.index}</span>
              <span className="bento__title">{p.title}</span>
              <span className="bento__desc">{p.desc}</span>
            </span>
            <ul className="sgrid__bullets" role="list">
              {p.items.map((item) => <li key={item} className="sgrid__bullet"><CheckCircle size={15} weight="duotone" /><span>{item}</span></li>)}
            </ul>
            <p className="project-tools"><strong>Tools:</strong> {p.tools.join(' · ')}</p>
          </article>)}
        </div>
        <p className="project-note"><strong>Transparency:</strong> Items marked “Portfolio sample” are self-directed demonstrations, not paid client engagements.</p>
      </div>
    </section>
  )
}
