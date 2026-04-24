import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Avatar } from '../../components/avatar'
import { Badge } from '../../components/badge'
import { Button } from '../../components/button'
import { Footer } from '../../components/footer'
import { Heading } from '../../components/heading'
import { FullHumanLogo } from '../../components/logo'
import { Navbar, NavbarItem, NavbarLabel, NavbarSection } from '../../components/navbar'
import { Text } from '../../components/text'
import { ArrowTrendIcon } from '../support/icons'
import { GuidePage } from '../support/guide'

const meta = {
  title: 'Examples/Marketing page',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const categoryCards = [
  {
    name: 'Kitchen',
    description: 'Cookware, knives, and durable tools chosen for daily use rather than novelty.',
    accent: 'from-emerald-200/70 via-emerald-100/40 to-transparent dark:from-emerald-500/20 dark:via-emerald-400/10',
  },
  {
    name: 'Living',
    description: 'Lighting, textiles, and objects that soften a room without adding clutter.',
    accent: 'from-amber-200/70 via-orange-100/40 to-transparent dark:from-amber-500/20 dark:via-orange-400/10',
  },
  {
    name: 'Work',
    description: 'Desk essentials that reward long attention spans and age well over time.',
    accent: 'from-sky-200/70 via-sky-100/40 to-transparent dark:from-sky-500/20 dark:via-sky-400/10',
  },
] as const

const editorialHighlights = [
  'Every recommendation explains the trade-off, not just the winner.',
  'Regional pricing and sourcing details stay visible where they matter.',
  'Materials, upkeep, and longevity are treated as first-class information.',
] as const

const heroStats = [
  {
    label: 'Categories reviewed',
    value: '18',
  },
  {
    label: 'Average shortlist',
    value: '3 items',
  },
  {
    label: 'Reader goal',
    value: 'One clear choice',
  },
] as const

const recommendationSteps = [
  {
    title: 'Start from real constraints',
    description: 'Budget, maintenance tolerance, and room context shape the shortlist before aesthetics do.',
  },
  {
    title: 'Compare the quiet details',
    description: 'We care about finish, weight, material behavior, and whether the object gets better with use.',
  },
  {
    title: 'Explain the recommendation plainly',
    description: 'Readers should understand the reasoning in one pass, including what they give up by choosing it.',
  },
] as const

const journalCards = [
  {
    eyebrow: 'Journal',
    title: 'How to buy one pan instead of three mediocre ones',
    description: 'What changes when you compare heat behavior, maintenance friction, and actual weekday use.',
  },
  {
    eyebrow: 'Field notes',
    title: 'The materials that still feel good five years later',
    description: 'A practical view on patina, repairability, and why some finishes age with more dignity than others.',
  },
] as const

export const Overview: Story = {
  render: () => (
    <GuidePage mobileBleed>
      <section className="border-b border-zinc-950/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(244,244,245,0.92))] pb-8 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(10,10,10,0.98),rgba(24,24,27,0.92))]">
        <header className="flex flex-col gap-5 px-4 pt-4 sm:px-6 sm:pt-5 lg:flex-row lg:items-center lg:px-8">
          <div className="flex items-center gap-4">
            <FullHumanLogo className="h-9 w-auto text-zinc-950 dark:text-white" />
            <div>
              <p className="text-xs font-light uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Full Human</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">A concrete landing-page example built from the system</p>
            </div>
          </div>
          <Navbar className="lg:ml-auto lg:max-w-fit lg:flex-none">
            <NavbarSection className="grid w-full grid-cols-3 md:flex md:w-auto">
              <NavbarItem fullWidth href="#categories">
                <NavbarLabel>Categories</NavbarLabel>
              </NavbarItem>
              <NavbarItem fullWidth href="#method">
                <NavbarLabel>Method</NavbarLabel>
              </NavbarItem>
              <NavbarItem fullWidth href="#journal">
                <NavbarLabel>Journal</NavbarLabel>
              </NavbarItem>
            </NavbarSection>
          </Navbar>
        </header>

        <div className="grid gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16 lg:px-8 lg:py-12">
          <div className="space-y-10">
            <div className="space-y-6">
              <Badge color="green">Concrete page example</Badge>
              <div className="space-y-4">
                <h1 className="max-w-4xl font-sans text-5xl font-extralight tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl dark:text-white">
                  A calmer way to choose what deserves a place in your home.
                </h1>
                <Text className="max-w-2xl text-lg/8 text-zinc-600 dark:text-zinc-300">
                  This page shows how the Full Human system can move beyond principles and into a real editorial marketing surface: clear hierarchy, restrained atmosphere, practical proof, and enough personality to feel deliberate.
                </Text>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button color="green" href="#categories">
                  Explore the spring edit
                  <ArrowTrendIcon data-slot="icon" className="stroke-current" />
                </Button>
                <Button outline href="#method">
                  Read the method
                </Button>
              </div>
            </div>

            <div className="grid gap-6 lg:gap-8 sm:grid-cols-2">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`border-t border-zinc-950/10 pt-4 dark:border-white/10 ${index === heroStats.length - 1 ? 'sm:col-span-2 md:max-w-sm' : ''}`}
                >
                  <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">{stat.label}</p>
                  <p className="mt-2 text-3xl font-extralight text-zinc-950 dark:text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-5 border-t border-zinc-950/10 pt-6 dark:border-white/10 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Seasonal direction</p>
            <Heading level={2} className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Warm materials, sharp reasoning, less visual noise.
            </Heading>
            <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
              The landing surface can feel editorial and tactile without losing the system’s insistence on clarity.
            </Text>
            <ul className="space-y-3">
              {editorialHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm/6 text-zinc-700 dark:text-zinc-200">
                  <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-[#8b9a48]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="categories" className="space-y-8 px-4 sm:px-6 lg:px-8 lg:space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Curated categories</p>
          <Heading level={2} className="text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">
            The system supports editorial merchandising without turning into lifestyle theater.
          </Heading>
          <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
            Each category block can carry atmosphere, but the copy and calls to action still lead with function and decision-making value.
          </Text>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {categoryCards.map((card, index) => (
            <article
              key={card.name}
              className={`group space-y-5 transition-transform hover:-translate-y-0.5 ${index === categoryCards.length - 1 ? 'md:col-span-2 md:grid md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:items-start md:gap-6 md:space-y-0' : ''}`}
            >
              <div className={`h-44 rounded-2xl bg-gradient-to-br ${card.accent} ${index === categoryCards.length - 1 ? 'md:h-full md:min-h-44' : ''}`} />
              <div className="space-y-4 border-t border-zinc-950/10 pt-5 dark:border-white/10">
                <Heading level={3} className="text-2xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                  {card.name}
                </Heading>
                <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">{card.description}</Text>
                <a className="inline-flex items-center gap-2 text-xs font-light uppercase tracking-[0.16em] text-zinc-500 underline-offset-4 transition-[color,text-decoration-color] hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-white" href="#journal">
                  Browse recommendations
                  <ArrowTrendIcon className="size-4 stroke-current" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="method" className="grid gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:px-8">
        <div className="space-y-8 lg:space-y-10">
          <div className="rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.22),transparent_45%),linear-gradient(160deg,rgba(250,250,249,1),rgba(244,244,245,1))] p-5 dark:bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.18),transparent_45%),linear-gradient(160deg,rgba(24,24,27,1),rgba(10,10,10,1))]">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Featured recommendation</p>
            <Heading level={3} className="mt-3 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              One kitchen setup that does not ask for upgrading in six months.
            </Heading>
            <Text className="mt-3 text-base/7 text-zinc-600 dark:text-zinc-300">
              A concrete marketing page can frame the recommendation emotionally while still surfacing the practical rationale that makes the brand trustworthy.
            </Text>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Why it works</p>
            {recommendationSteps.map((step) => (
              <div key={step.title} className="border-t border-zinc-950/10 pt-4 dark:border-white/10">
                <p className="text-sm font-medium text-zinc-950 dark:text-white">{step.title}</p>
                <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-zinc-950 p-6 text-white dark:bg-zinc-900 lg:p-8">
          <div className="space-y-5">
            <Badge color="blue">Editorial proof</Badge>
            <blockquote className="[font-family:var(--font-display)] text-4xl tracking-tight text-white">
              “The page feels warm, but the decision still lands on evidence rather than decoration.”
            </blockquote>
            <div className="flex items-center gap-3">
              <Avatar initials="AL" className="size-12 bg-white/10 text-white" />
              <div>
                <p className="text-sm font-medium text-white">Aline Martin</p>
                <p className="text-sm text-zinc-400">Content design review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="journal" className="grid gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10 lg:px-8">
        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Journal and follow-through</p>
            <Heading level={2} className="text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Marketing pages should still open a path into deeper editorial content.
            </Heading>
          </div>
          <div className="space-y-6 lg:space-y-8">
            {journalCards.map((card) => (
              <article key={card.title} className="border-t border-zinc-950/10 pt-5 dark:border-white/10">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">{card.eyebrow}</p>
                <p className="mt-3 text-xl font-medium text-zinc-950 dark:text-white">{card.title}</p>
                <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">{card.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-[linear-gradient(180deg,rgba(74,222,128,0.12),rgba(255,255,255,0.92))] p-6 dark:bg-[linear-gradient(180deg,rgba(74,222,128,0.12),rgba(24,24,27,0.92))] lg:p-8">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Next step</p>
          <Heading level={3} className="mt-3 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
            Keep the page generous. Keep the decision sharp.
          </Heading>
          <Text className="mt-3 text-base/7 text-zinc-600 dark:text-zinc-300">
            The point of this example is not the exact copy. It is the proof that the system can support a page with real merchandising weight while staying recognizably Full Human.
          </Text>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button color="green">Browse page patterns</Button>
            <Button plain href="#categories">
              Return to categories
            </Button>
          </div>
        </div>
      </section>

      <Footer className="pt-14" />
    </GuidePage>
  ),
}
