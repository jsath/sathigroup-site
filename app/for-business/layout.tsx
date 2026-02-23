import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Automation Solutions - Never Miss a Follow-Up Again',
  description: 'Stop working evenings and weekends. We set up a digital employee that handles your admin, follow-ups, and operations 24/7. Get back 40+ hours per week.',
  openGraph: {
    title: 'Your Business Runs Itself - Even When You\'re Not There',
    description: 'Stop working evenings and weekends. Never miss another follow-up. Digital employee handles admin and operations 24/7.',
  },
}

export default function ForBusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}