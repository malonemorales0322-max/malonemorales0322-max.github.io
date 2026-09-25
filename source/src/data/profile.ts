/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
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
  role: 'Operations & Virtual Support',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'MBA and Information Technology graduate',
  email: 'malonemorales0322@gmail.com',
  location: 'Pampanga, Philippines',
  stats: [
    { value: '10+ yrs', label: 'Professional experience' },
    { value: 'MBA', label: 'Business leadership' },
    { value: 'UTC+8', label: 'Philippine time' },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Operations made clear.', line2: 'Work moved forward.' },
  hero: {
    body: 'I help growing teams stay organized through dependable administration, reporting, workflow support, and customer service.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Malone Morales monogram',
  },
  socials: [
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/malone-morales-6b0a92182', iconPath: '/icons/linkedin.svg' },
    { label: 'Email Malone', href: 'mailto:malonemorales0322@gmail.com', iconPath: '/icons/email.svg' },
    { label: 'Download résumé', href: '/Malone-Morales-Resume.pdf', iconPath: '/icons/resume.svg' },
  ],
}
