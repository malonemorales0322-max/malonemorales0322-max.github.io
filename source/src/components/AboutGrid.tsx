import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const SLACK = { src: '/icons/ai/slack-color.svg', name: 'Slack' }
const M365 = { src: '/icons/microsoft365.svg', name: 'Microsoft 365' }
const EXCEL = { src: '/icons/excel.svg', name: 'Excel' }
const XERO = { src: '/icons/xero.svg', name: 'Xero' }
const QUICKBOOKS = { src: '/icons/quickbooks.svg', name: 'QuickBooks' }
const AIRSLATE = { src: '/icons/airslate.svg', name: 'airSlate' }
const JIRA = { src: '/icons/jira.svg', name: 'Jira' }
const HUBSTAFF = { src: '/icons/hubstaff.svg', name: 'Hubstaff' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Administrative support',
    marks: [M365, GWS, SLACK],
  },
  {
    index: '02',
    title: 'Reporting and data control',
    marks: [EXCEL, XERO, QUICKBOOKS],
  },
  {
    index: '03',
    title: 'Workflow and technical support',
    marks: [AIRSLATE, JIRA, HUBSTAFF],
  },
  {
    index: '04',
    title: 'Customer and team coordination',
    marks: [GWS, SLACK, M365],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          I bring order, ownership, and follow-through to the work behind a growing business.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I am an operations professional who understands both people and systems.
            <span> My job is to make the details easier to manage.</span>
          </p>

          <p className="agrid__note">
            With an <strong>MBA</strong>, a BS in Information Technology, and more than a
            decade across operations, banking, government, technical support, and small
            business, I can see both the process and the person depending on it.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/icons/resume.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">MBA + BS Information Technology</span>
                <span className="agrid__cell-meta">Business leadership · Systems foundation</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">UTC+8 · Flexible remote schedule</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="/Malone-Morales-Resume.pdf" target="_blank" rel="noreferrer">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/icons/resume.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Download my résumé</span>
                <span className="agrid__cell-meta">Full experience, education, and training</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
