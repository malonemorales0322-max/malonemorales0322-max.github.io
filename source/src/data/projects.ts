export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  imageSrc?: string
  imagePosition?: string
  accentColor: string
  stats: AppStat[]
  badge: string
}

export type MobileApp = AppProject

export const mobileApps: MobileApp[] = [
  {
    name: 'Daily operations tracker',
    tagline: 'One list for owners, tasks, and due dates.',
    description:
      'A working sample of how I keep daily operations visible: owners, status, and the next action. Built for teams that outgrow scattered chat threads.',
    imageSrc: '/placeholders/app-1.jpg',
    imagePosition: '50% 30%',
    accentColor: '#15283F',
    stats: [
      { value: '1 view', label: 'Source of truth' },
      { value: 'Daily', label: 'Review cadence' },
      { value: 'Clear', label: 'Next action' },
    ],
    badge: 'Operations',
  },
  {
    name: 'SOP library',
    tagline: 'Current procedures, easy to find.',
    description:
      'A simple structure for storing the live version of a process: title, owner, last review date, and the steps the team actually follows.',
    imageSrc: '/placeholders/app-2.jpg',
    accentColor: '#1B4F72',
    stats: [
      { value: 'Owner', label: 'Named on each SOP' },
      { value: 'Versioned', label: 'Last-reviewed date' },
      { value: 'Searchable', label: 'By team or task' },
    ],
    badge: 'Documentation',
  },
  {
    name: 'Support queue',
    tagline: 'Requests in, resolutions out.',
    description:
      'A request queue layout I use to capture the issue, the tool involved, and the resolution so the same problem is not solved twice.',
    imageSrc: '/placeholders/app-3.jpg',
    accentColor: '#0E7C66',
    stats: [
      { value: 'Logged', label: 'Every request' },
      { value: 'Owned', label: 'Named responder' },
      { value: 'Closed', label: 'With a note' },
    ],
    badge: 'Support',
  },
]

export const webApps: AppProject[] = [
  {
    name: 'Weekly reporting pack',
    tagline: 'What moved. What is blocked. What needs a decision.',
    description:
      'A reporting format for founders and managers who need a short, honest picture of the week without a long meeting.',
    accentColor: '#15283F',
    stats: [
      { value: '1 page', label: 'Owner brief' },
      { value: 'Exceptions', label: 'Called out first' },
      { value: 'Weekly', label: 'Cadence' },
    ],
    badge: 'Reporting',
  },
  {
    name: 'airSlate runbook',
    tagline: 'How the workflow is supposed to behave.',
    description:
      'A troubleshooting and setup note I write after diagnosing a document automation issue: expected path, common breaks, and the fix.',
    accentColor: '#2563EB',
    stats: [
      { value: 'Setup', label: 'Documented' },
      { value: 'Breaks', label: 'Named' },
      { value: 'Fix', label: 'Recorded' },
    ],
    badge: 'Workflow',
  },
  {
    name: 'Handoff kit',
    tagline: 'So coverage does not depend on memory.',
    description:
      'A compact kit I leave when work changes hands: logins inventory, current priorities, open vendor threads, and the next three deadlines.',
    accentColor: '#B45309',
    stats: [
      { value: 'Access', label: 'Listed' },
      { value: 'Open work', label: 'Prioritized' },
      { value: 'Dates', label: 'Visible' },
    ],
    badge: 'Admin',
  },
]
