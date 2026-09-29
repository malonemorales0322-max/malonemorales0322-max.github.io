import { FlowIcon, PlanIcon, DeviceIcon, SparkIcon } from './ProjectIcons'
import { CheckCircle } from '@/components/slab'

const PROJECTS = [
  {
    index: '01', title: 'airSlate Workflow Support', eyebrow: 'Paid remote work', Icon: DeviceIcon,
    desc: 'Problem: document bots stalled mid-flow. Action: remote diagnosis of configuration and execution errors. Result: working workflows plus a written runbook the client could reuse.',
    items: ['Problem named in the ticket', 'Fix applied remotely', 'Steps documented for reuse'],
    tools: ['airSlate', 'Slack', 'Jira'],
  },
  {
    index: '02', title: "Mao's AI Marketing Team", eyebrow: 'Live tool I built', Icon: SparkIcon,
    desc: 'Problem: a small team needs marketing help without hiring a department. Action: a briefing desk — pick a specialist, attach business context, run one job in ChatGPT. Result: a repeatable workflow instead of a blank prompt.',
    items: ['One brief per job', 'Business profile travels with the brief', 'You keep approval and facts'],
    tools: ['ChatGPT', 'JavaScript', 'GitHub Pages'],
    href: 'https://malonemorales0322-max.github.io/ai-marketing-team/',
  },
  {
    index: '03', title: 'Operations Tracker & Weekly Report', eyebrow: 'Case study sample', Icon: FlowIcon,
    desc: 'Problem: daily work lived in chat and memory. Action: one tracker plus a one-page weekly brief. Result: owners, due dates, and exceptions visible without a long meeting.',
    items: ['One source of truth', 'Weekly exception-first brief', 'Clear next action'],
    tools: ['Excel', 'Google Sheets', 'Word'],
  },
  {
    index: '04', title: 'SOP & Onboarding Pack', eyebrow: 'Case study sample', Icon: PlanIcon,
    desc: 'Problem: new people learned by asking around. Action: current SOP, checklist, and role sheet in one pack. Result: a handoff that does not depend on whoever is on shift.',
    items: ['Live procedure, named owner', 'Onboarding checklist', 'Handoff without guesswork'],
    tools: ['Microsoft 365', 'Google Workspace', 'airSlate'],
  },
]

export default function ProjectsGrid() {
  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">Case studies and one live tool.</h1>
        <p className="pgrid__lede">Paid remote work first. Then a live app that turns marketing tasks into a briefing workflow. Samples are labeled so hiring managers can tell demonstration work from client work.</p>
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
            {p.href ? <p className="project-tools"><a href={p.href} target="_blank" rel="noreferrer">Open live app →</a></p> : null}
          </article>)}
        </div>
        <p className="project-note"><strong>Transparency:</strong> “Paid remote work” is a client engagement. “Live tool I built” is my own app. “Case study sample” is a demonstration, not a named client.</p>
      </div>
    </section>
  )
}
