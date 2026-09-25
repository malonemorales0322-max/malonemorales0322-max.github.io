export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I support growing teams with administration, operations coordination, reporting, data validation, workflow troubleshooting, customer service, and clear documentation.',
  },
  {
    q: 'How fast can you start?',
    a: 'I can usually begin after a one-week transition. I am based in the Philippines and can adjust to US, Australian, or local working hours when the role requires it.',
  },
  {
    q: 'Which tools do you use?',
    a: 'My working toolkit includes Microsoft 365, Google Workspace, Excel, Slack, Jira, Hubstaff, airSlate, Xero, QuickBooks, and AI-assisted productivity tools.',
  },
  {
    q: 'Where are you based?',
    a: 'I am based in Pampanga, Philippines (UTC+8), with a dedicated quiet workspace, reliable primary internet, and backup connectivity.',
  },
  {
    q: 'What happens after I write?',
    a: 'Tell me what is falling behind, what tools you use, and what a good result looks like. I will reply with focused questions and a practical next step.',
  },
]
