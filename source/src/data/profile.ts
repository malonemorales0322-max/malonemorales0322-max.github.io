/**
 * YOUR IDENTITY - start here.
 */

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Malone Morales',
  firstName: 'Malone',
  handle: '@malonemorales',
  role: 'Operations Manager | HubSpot & Process Improvement | Six Sigma Yellow Belt',
  avatarSrc: '/profile-photo.jpg',
  verifiedLabel: 'MBA and Information Technology graduate',
  email: 'malonemorales0322@gmail.com',
  location: 'Pampanga, Philippines',
  stats: [
    { value: '10+ yrs', label: 'Professional experience' },
    { value: 'MBA', label: 'Business leadership' },
    { value: 'UTC+8', label: 'Open to remote hours' },
  ],
  displayName: { line1: 'Remote ops, done clearly.', line2: 'Hire me across time zones.' },
  hero: {
    body: 'Remote operations, admin, and workflow support for teams that need a dependable counterpart across time zones.',
    portraitSrc: '/profile-photo.jpg',
    portraitAlt: 'Portrait of Malone Morales',
  },
  socials: [
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/malone-morales-6b0a92182', iconPath: '/icons/linkedin.svg' },
    { label: 'Email Malone', href: 'mailto:malonemorales0322@gmail.com', iconPath: '/icons/email.svg' },
    { label: 'Download résumé', href: '/Malone-Morales-Resume.pdf?v=20261001', iconPath: '/icons/resume.svg' },
  ],
}
