import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  FlowArrow,
  Medal,
  Stack,
  Quotes,
  FunnelSimple,
  Gear,
  AddressBook,
  Globe,
  AppWindow,
  SealCheck,
} from '@/components/slab'
import { gymFunnel, bookingFunnel, websiteFunnel, type Funnel } from '@/data/funnels'

const thumbSrc = (f: Funnel) =>
  `/home/${f.dir ?? 'funnels'}-${f.file.replace('.html', '.jpeg')}`

const PROJECT_SHOTS = [gymFunnel[0], bookingFunnel[0], websiteFunnel[0], gymFunnel[1]].filter(Boolean)

const OFFERS = [
  { Icon: AddressBook, title: 'Administrative Support', note: 'Records, documents, scheduling' },
  { Icon: Gear, title: 'Operations Coordination', note: 'Tasks, SOPs, follow-through' },
  { Icon: FunnelSimple, title: 'Data & Reporting', note: 'Tracking, checks, summaries' },
  { Icon: FlowArrow, title: 'Workflow Support', note: 'airSlate setup and troubleshooting' },
  { Icon: Globe, title: 'Customer Support', note: 'Clear, professional assistance' },
] as const

const CLIENTS = [
  { name: 'Halara Coffee Club', role: 'Operations Manager', work: 'Operations · People · Service', logo: '/icons/resume.svg' },
  { name: 'Private Client', role: 'airSlate Workflow Support', work: 'Automation · Troubleshooting · Documentation', logo: '/icons/airslate.svg' },
  { name: 'The Real Bank', role: 'Marketing & ATM Operations', work: 'Banking · Reconciliation · Client Service', logo: '/icons/resume.svg' },
]

const WORKFLOW_ITEMS = [
  { id: 'tracking', name: 'Task tracking', status: 'live', Icon: Gear },
  { id: 'sops', name: 'SOPs', status: 'live', Icon: AddressBook },
  { id: 'reporting', name: 'Reporting', status: 'live', Icon: AppWindow },
  { id: 'airslate', name: 'airSlate', status: 'live', Icon: FlowArrow },
  { id: 'support', name: 'Customer support', status: 'live', Icon: Globe },
  { id: 'data', name: 'Data checks', status: 'live', Icon: FunnelSimple },
]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(WORKFLOW_ITEMS.length / 2)
  const toolRows = [WORKFLOW_ITEMS.slice(0, half), WORKFLOW_ITEMS.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="Three short case studies: trackers, SOPs, and live workflow support." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((f, i) => (
              <span key={i} className="bento__shot">
                <img src={thumbSrc(f)} alt="" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="An operations professional with business and IT training." />
        <p className="bento__about-line">People. Systems. Follow-through.</p>
      </Link>

      <Link to="/projects" className="bento__card bento__card--ai">
        <CardHead Icon={FlowArrow} title="Workflow Support" desc="Automation, technical support, and clear documentation." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.id}-${i}`} className="bento__chip" data-status={n.status}>
                    <n.Icon size={15} weight="duotone" />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="MBA, BSIT, and HubSpot Sales and Service Hub certifications." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <img src="/placeholders/badge.svg" alt="" width={72} height={72} />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            MBA + BSIT
          </span>
        </div>
      </Link>

      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="Reliable support for teams that need structure and follow-through." />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      <Link to="/experience" className="bento__card bento__card--quotes">
        <CardHead Icon={Quotes} title="Experience" desc="Real roles across operations, technology, government, and banking." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  {c.logo ? (
                    <img src={c.logo} alt="" width={18} height={18} />
                  ) : (
                    <Quotes size={14} weight="fill" />
                  )}
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
