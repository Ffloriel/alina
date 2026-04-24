import type React from 'react'
import { Badge } from './badge'
import { FullHumanLogo } from './logo'
import { Text } from './text'

const accessHighlights = [
  {
    title: 'Private system review',
    description: 'Keep the current components, foundations, and examples accessible to the internal team without exposing the whole library publicly.',
  },
  {
    title: 'Single source of reference',
    description: 'Use one protected Storybook to review design rules, implementation details, and in-use examples together.',
  },
] as const

type StorybookAuthShellProps = {
  badgeLabel: string
  heroTitle: string
  heroDescription: string
  panelEyebrow: string
  panelTitle: string
  panelDescription: string
  notice?: React.ReactNode
  error?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export function StorybookAuthShell({
  badgeLabel,
  heroTitle,
  heroDescription,
  panelEyebrow,
  panelTitle,
  panelDescription,
  notice,
  error,
  children,
  footer,
}: StorybookAuthShellProps) {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-6 sm:px-6 lg:px-8">
        <section className="w-full overflow-hidden rounded-3xl border border-zinc-950/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(243,244,236,0.94))] shadow-[0_30px_80px_-50px_rgba(23,23,23,0.28)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(10,10,10,0.98),rgba(28,32,20,0.96))]">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_32rem]">
            <div className="order-2 relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-12 xl:order-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(185,200,111,0.28),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(90,106,46,0.14),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(185,200,111,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(185,200,111,0.10),transparent_30%)]" />
              <div className="relative space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <FullHumanLogo className="h-10 w-auto text-zinc-950 dark:text-white" />
                    <div>
                      <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Full Human</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">Private Storybook access</p>
                    </div>
                  </div>
                  <Badge color="green">{badgeLabel}</Badge>
                  <div className="space-y-4">
                    <h1 className="max-w-2xl text-5xl font-extralight tracking-tight text-zinc-950 sm:text-6xl dark:text-white">
                      {heroTitle}
                    </h1>
                    <Text className="max-w-xl text-lg/8 text-zinc-600 dark:text-zinc-300">{heroDescription}</Text>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {accessHighlights.map((row) => (
                    <div key={row.title} className="rounded-2xl border border-zinc-950/10 bg-white/72 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/55">
                      <p className="text-sm font-medium text-zinc-950 dark:text-white">{row.title}</p>
                      <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">{row.description}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl bg-zinc-950/95 p-6 text-white dark:bg-black/70">
                  <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-400">Current access policy</p>
                  <p className="mt-3 max-w-lg [font-family:var(--font-display)] text-3xl tracking-tight text-white">
                    Protected access for the current Full Human design system workspace.
                  </p>
                  <p className="mt-4 max-w-lg text-sm/6 text-zinc-300">
                    Sign in to review the latest guide pages, components, and examples. Access is intentionally limited while the system is still being refined.
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
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">Storybook access</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">{panelEyebrow}</p>
                  <h2 className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">{panelTitle}</h2>
                  <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">{panelDescription}</Text>
                </div>

                {notice ? <div className="mt-6 rounded-2xl border border-[#d2dba8] bg-[#eef2da] px-4 py-3 text-sm/6 text-[#334019] dark:border-[#9cab56] dark:bg-[#b9c86f] dark:text-[#334019]">{notice}</div> : null}

                {error ? (
                  <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm/6 text-red-900 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-100">
                    {error}
                  </div>
                ) : null}

                <div className="mt-8">{children}</div>

                {footer ? <div className="mt-8 border-t border-zinc-950/10 pt-4 dark:border-white/10">{footer}</div> : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
