import { Badge } from '../components/badge'
import { Button } from '../components/button'
import { Heading } from '../components/heading'
import { Text } from '../components/text'

const highlights = [
  {
    title: 'Storybook-first documentation',
    description: 'Foundations, content standards, accessibility rules, and component examples live in one place.',
  },
  {
    title: 'Built on the preserved component library',
    description: 'The existing Full Human primitives power the guide directly while Storybook defines the canonical system rules.',
  },
  {
    title: 'Modern stack',
    description: 'Next.js 16, React 19, Tailwind CSS 4, and Storybook 10 keep the system current and maintainable.',
  },
]

const storybookHref = process.env.NODE_ENV === 'development' ? 'http://localhost:6006' : '/storybook'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-16 px-6 py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <div className="space-y-6">
            <Badge color="green">Full Human</Badge>
            <div className="space-y-5">
              <p className="text-xs font-light uppercase tracking-[0.22em] text-zinc-500">Design system</p>
              <Heading level={1} className="max-w-4xl text-5xl font-extralight tracking-tight text-zinc-950 sm:text-6xl dark:text-white">
                A fresh Next.js and Storybook workspace for the Full Human system.
              </Heading>
              <Text className="max-w-2xl text-lg/8 text-zinc-600 dark:text-zinc-300">
                Use Storybook as the primary guide. The design foundations, writing standards, and component examples are
                now organized there so the site and system can evolve together.
              </Text>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button href={storybookHref} color="green">
                Open Storybook
              </Button>
              <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">Storybook is now the source of truth for the Full Human design system.</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-zinc-950/10 bg-white/75 p-8 shadow-[0_20px_60px_rgba(23,23,23,0.08)] backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
            <p className="text-xs font-light uppercase tracking-[0.22em] text-zinc-500">Included</p>
            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <div key={item.title} className="space-y-1 border-b border-zinc-950/5 pb-4 last:border-b-0 last:pb-0 dark:border-white/10">
                  <h2 className="text-lg font-medium text-zinc-950 dark:text-white">{item.title}</h2>
                  <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}