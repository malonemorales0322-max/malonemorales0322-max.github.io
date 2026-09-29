export type FunnelTag = 'Lead Capture' | 'Booking' | 'Checkout' | 'Website'

export type Funnel = {
  file: string
  label: string
  tag: FunnelTag
  desc: string
  dir?: 'funnels' | 'samples'
}

const page = (
  file: string,
  label: string,
  tag: FunnelTag,
  desc: string,
  dir?: 'funnels' | 'samples',
): Funnel => ({ file, label, tag, desc, dir })

export const gymFunnel: Funnel[] = [
  page(
    'placeholder-funnel-01.html',
    'Client intake desk',
    'Lead Capture',
    'A clean intake page that captures request type, tools in use, and urgency so work starts with the right context.',
  ),
  page(
    'placeholder-funnel-02.html',
    'Weekly operations brief',
    'Checkout',
    'A one-page brief format for owners: what moved, what is blocked, and what needs a decision.',
  ),
  page(
    'placeholder-funnel-03.html',
    'Support request form',
    'Lead Capture',
    'A structured request form that replaces scattered chat messages with a trackable handoff.',
  ),
]

export const bookingFunnel: Funnel[] = [
  page(
    'placeholder-funnel-04.html',
    'Handoff scheduler',
    'Booking',
    'A scheduling screen for weekly check-ins, onboarding calls, and review slots.',
  ),
  page(
    'placeholder-funnel-05.html',
    'Shift coverage request',
    'Booking',
    'A coverage request flow used to collect availability, role, and reason without extra back-and-forth.',
  ),
  page(
    'placeholder-funnel-06.html',
    'Vendor follow-up desk',
    'Booking',
    'A simple follow-up tracker so vendor replies, invoices, and delivery dates stay visible.',
  ),
]

export const websiteFunnel: Funnel[] = [
  page(
    'placeholder-site-01.html',
    'Operations landing page',
    'Website',
    'A concise service page that states the offer, the tools, and how to start working together.',
    'samples',
  ),
  page(
    'placeholder-site-02.html',
    'SOP library home',
    'Website',
    'A documentation home that groups procedures so a team can find the current version quickly.',
    'samples',
  ),
  page(
    'placeholder-site-03.html',
    'Team status board',
    'Website',
    'A status board layout for open tasks, owners, and due dates.',
    'samples',
  ),
  page(
    'placeholder-site-04.html',
    'Reporting pack cover',
    'Website',
    'A cover page for weekly packs: KPIs, exceptions, and notes for the owner.',
    'samples',
  ),
  page(
    'placeholder-site-05.html',
    'Customer reply desk',
    'Website',
    'A lightweight desk for common replies, escalation rules, and tone guidelines.',
    'samples',
  ),
  page(
    'placeholder-site-06.html',
    'Onboarding checklist',
    'Website',
    'A first-week checklist that walks a new teammate through access, tools, and first deliverables.',
    'samples',
  ),
]

export const tagColors: Record<FunnelTag, string> = {
  'Lead Capture': '#1B4F72',
  Booking: '#0E7C66',
  Checkout: '#B45309',
  Website: '#15283F',
}
