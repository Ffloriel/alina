import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from '../../components/badge'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { FullHumanLogo } from '../../components/logo'
import { Text } from '../../components/text'
import { GuidePage } from '../support/guide'

const meta = {
  title: 'Examples/Sign in',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const trustRows = [
  {
    title: 'Saved shortlists',
    description: 'Return to previous recommendation sets without rebuilding your context from scratch.',
  },
  {
    title: 'Regional alerts',
    description: 'Keep availability and pricing updates tied to the places that matter to you.',
  },
] as const

export const Overview: Story = {
  render: () => (
    <GuidePage>
      <section className="overflow-hidden rounded-3xl border border-zinc-950/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(243,244,236,0.94))] shadow-[0_30px_80px_-50px_rgba(23,23,23,0.28)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(10,10,10,0.98),rgba(28,32,20,0.96))]">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_32rem]">
          <div className="order-2 relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-12 xl:order-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(185,200,111,0.28),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(90,106,46,0.14),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(185,200,111,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(185,200,111,0.10),transparent_30%)]" />
            <div className="relative space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FullHumanLogo className="h-10 w-auto text-zinc-950 dark:text-white" />
                  <div>
                    <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Full Human</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">Designed sign-in example</p>
                  </div>
                </div>
                <Badge color="green">Sign in page</Badge>
                <div className="space-y-4">
                  <h1 className="max-w-2xl text-5xl font-extralight tracking-tight text-zinc-950 sm:text-6xl dark:text-white">
                    Return to a calmer workspace.
                  </h1>
                  <Text className="max-w-xl text-lg/8 text-zinc-600 dark:text-zinc-300">
                    This page shows how Full Human can handle account entry with the same editorial restraint as the rest of the system: clear hierarchy, subtle atmosphere, and one obvious next step.
                  </Text>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {trustRows.map((row) => (
                  <div key={row.title} className="rounded-2xl border border-zinc-950/10 bg-white/72 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/55">
                    <p className="text-sm font-medium text-zinc-950 dark:text-white">{row.title}</p>
                    <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">{row.description}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl bg-zinc-950/95 p-6 text-white dark:bg-black/70">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-400">Why it works</p>
                <p className="mt-3 max-w-lg [font-family:var(--font-display)] text-3xl tracking-tight text-white">
                  One brand surface. One form surface. Enough warmth to feel intentional.
                </p>
                <p className="mt-4 max-w-lg text-sm/6 text-zinc-300">
                  The supporting side builds confidence and tone, while the form side stays compact and task-focused. Nothing extra competes with the sign-in action.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 p-3 lg:p-5 xl:order-2">
            <div className="h-full rounded-3xl border border-white/70 bg-white/88 p-6 shadow-[0_24px_60px_-42px_rgba(23,23,23,0.35)] backdrop-blur-xl xl:p-8 dark:border-white/10 dark:bg-zinc-950/86 dark:shadow-[0_24px_60px_-42px_rgba(0,0,0,0.7)]">
              <div className="mb-6 flex items-center gap-3 xl:hidden">
                <FullHumanLogo className="h-8 w-auto text-zinc-950 dark:text-white" />
                <div>
                  <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Full Human</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">Account access</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Account access</p>
                <h2 className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">Sign in</h2>
                <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
                  Use the same account for recommendations, saved edits, and regional alerts.
                </Text>
              </div>

              <div className="mt-8 space-y-4">
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-zinc-950 dark:text-white">Work email</span>
                  <Input aria-label="Work email" type="email" placeholder="hello@full-human.com" />
                </label>
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-zinc-950 dark:text-white">Password</span>
                  <Input aria-label="Password" type="password" placeholder="Enter your password" />
                </label>
              </div>

              <div className="mt-6 space-y-3">
                <Button color="green" className="w-full justify-center">
                  Continue
                </Button>
                <Button outline className="w-full justify-center">
                  Email me a magic link
                </Button>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-zinc-950/10 pt-4 text-sm sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
                <a className="text-zinc-600 underline-offset-4 transition-[color,text-decoration-color] hover:text-zinc-950 hover:underline dark:text-zinc-300 dark:hover:text-white" href="#forgot-password">
                  Forgot password?
                </a>
                <a className="text-zinc-600 underline-offset-4 transition-[color,text-decoration-color] hover:text-zinc-950 hover:underline dark:text-zinc-300 dark:hover:text-white" href="#request-access">
                  Request access
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GuidePage>
  ),
}