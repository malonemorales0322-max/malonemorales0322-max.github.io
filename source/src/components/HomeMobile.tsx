import { Link } from 'react-router-dom'
import { SealCheck, ArrowUpRight, Stack, Briefcase } from '@/components/slab'
import { profile } from '@/data/profile'
import ThemeButton from './ThemeButton'

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, verified mark, handle and the theme switch -
 *                the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats)
 *   HomeExplore  one tile per rail view in a snap row, then the first
 *                testimonial as a proof card
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">
          {profile.handle} · {profile.role}
        </span>
      </div>
      <ThemeButton className="hprofile__theme" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map((s, i) => (
        <li key={i}>
          <b>{s.value}</b>
          <span>{s.label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Projects', to: '/projects', title: 'Practical work samples', desc: 'Trackers, SOPs, and reconciliation workflows.', img: '/placeholders/project-1.jpg' },
  { n: '02', label: 'Services', to: '/services', title: 'Support that keeps work moving', desc: 'Administration, operations, data, and customer support.', Icon: Stack, dark: true },
  { n: '03', label: 'Experience', to: '/experience', title: '10+ years across industries', desc: 'Operations, technology, government, and banking.', Icon: Briefcase, dark: true, accent: true },
  { n: '04', label: 'About', to: '/about', title: `Hi, I'm ${profile.firstName}.`, desc: 'An MBA and IT graduate who brings structure to busy teams.', img: profile.avatarSrc },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
        <span className="hsec__aside">Swipe</span>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'dark' in t && t.dark ? ' htile--dark' : ''}${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              <span className="htile__n">{t.n} {t.label}</span>
              {'img' in t ? (
                <img className="htile__img" src={t.img} alt="" loading="lazy" />
              ) : (
                <span className="htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              )}
              <span className="htile__body">
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
              <span className="htile__go" aria-hidden="true"><ArrowUpRight size={16} weight="bold" /></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hsec">
        <h2 className="hsec__title">Professional focus</h2>
        <Link to="/experience" className="hsec__aside">View experience</Link>
      </div>
      <Link to="/experience" className="hproof">
        <span className="hproof__thumb"><Briefcase size={32} weight="duotone" /></span>
        <span className="hproof__copy">
          <span className="hproof__kicker">Operations · Administration · Systems</span>
          <span className="hproof__title">I turn scattered tasks and information into clear, dependable workflows.</span>
          <span className="hproof__meta">Available for remote opportunities</span>
        </span>
      </Link>
    </>
  )
}
