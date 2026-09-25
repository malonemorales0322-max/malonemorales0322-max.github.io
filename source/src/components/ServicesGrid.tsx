import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'

const STAGES = [
  { index: '01', label: 'Clarify', body: 'Define the task, owner, deadline, and standard.', Icon: MagnetStraight, chips: ['Scope', 'Priority', 'Access'] },
  { index: '02', label: 'Organize', body: 'Build a visible process and keep the details current.', Icon: Timer, chips: ['Tracker', 'Checklist', 'Updates'] },
  { index: '03', label: 'Close', body: 'Verify the work, document the result, and follow through.', Icon: Trophy, chips: ['Quality check', 'Handoff', 'Next step'] },
]

const SERVICES = [
  { index: '01', title: 'Administrative Support', chip: 'Daily support', description: 'Dependable handling of routine work that cannot be allowed to drift.', logos: ['/icons/microsoft365.svg', '/icons/googleworkspace.svg', '/icons/slack.svg'], bullets: ['Documents and records', 'Inbox and schedule support', 'Research and coordination'] },
  { index: '02', title: 'Operations Coordination', chip: 'Execution', description: 'Clear ownership, tracking, and follow-through across recurring workflows.', logos: ['/icons/jira.svg', '/icons/hubstaff.svg', '/icons/googleworkspace.svg'], bullets: ['Task and deadline tracking', 'SOP documentation', 'Team and vendor follow-up'] },
  { index: '03', title: 'Reporting & Data Support', chip: 'Accuracy', description: 'Structured information that helps managers see issues and act sooner.', logos: ['/icons/excel.svg', '/icons/xero.svg', '/icons/quickbooks.svg'], bullets: ['Spreadsheet maintenance', 'Validation and reconciliation', 'Recurring reports and summaries'] },
  { index: '04', title: 'Workflow Support', chip: 'Systems', description: 'Practical help with automated document workflows and user issues.', logos: ['/icons/airslate.svg', '/icons/jira.svg', '/icons/slack.svg'], bullets: ['airSlate troubleshooting', 'Bot and workflow review', 'Resolution documentation'] },
  { index: '05', title: 'Customer & Team Support', chip: 'Service', description: 'Professional communication that keeps customers and colleagues informed.', logos: ['/icons/googleworkspace.svg', '/icons/slack.svg', '/icons/microsoft365.svg'], bullets: ['Inquiry handling', 'Technical guidance', 'Onboarding and training support'] },
]

function Marks({ logos }: { logos: string[] }) {
  return <span className="bento__logos" aria-hidden="true">{logos.map((src) => (
    <span key={src} className="bento__logo"><img src={src} alt="" width={22} height={22} /></span>
  ))}</span>
}

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">Reliable support. Visible progress.</h1>
        <p className="pgrid__lede">I help busy teams control the details, maintain momentum, and keep work from falling through the cracks.</p>
      </header>
      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">My working method</span>
            <h2 className="sgrid__method-title" id="method-title">Clarify. Organize. Close.<br /><span>No vague ownership.</span></h2>
            <p className="sgrid__method-sub">Simple structure prevents avoidable delays and makes progress easy to verify.</p>
          </div>
          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
              <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
              <span className="sgrid__stage-icon" aria-hidden="true"><s.Icon size={22} weight="duotone" /></span>
              <h3 className="sgrid__stage-label">{s.label}.</h3>
              <p className="sgrid__stage-body">{s.body}</p>
              <ul className="sgrid__stage-chips" role="list">{s.chips.map((c) => <li key={c} className="sgrid__stage-chip">{c}</li>)}</ul>
            </li>)}
          </ol>
        </div>
        <div className="sgrid__offers">
          <div className="sgrid__offers-head"><h2 className="sgrid__offers-title">Where I can contribute.</h2><p className="sgrid__offers-sub">Focused on the work your team actually needs done.</p></div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => <li key={s.title} className="bento__card sgrid__service">
              <span className="bento__head"><span className="sgrid__service-top"><Marks logos={s.logos} /><span className="sgrid__service-index">{s.index} / 05</span></span><span className="bento__title">{s.title}</span><span className="bento__desc">{s.description}</span></span>
              <span className="sgrid__chip">{s.chip}</span>
              <ul className="sgrid__bullets" role="list">{s.bullets.map((b) => <li key={b} className="sgrid__bullet"><CheckCircle size={15} weight="duotone" /><span>{b}</span></li>)}</ul>
            </li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
