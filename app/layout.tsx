import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HabitStreak — Daily Habit Tracking with Social Accountability',
  description: 'Track daily habits, get check-in reminders, share progress with accountability partners, and recover streaks faster. $5/mo.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="17e86e31-c99c-48ed-871c-189124a480b2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
