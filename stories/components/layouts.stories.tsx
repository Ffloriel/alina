import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from '../../components/badge'
import { Button } from '../../components/button'
import { Heading } from '../../components/heading'
import { FullHumanLogo } from '../../components/logo'
import { Navbar, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '../../components/navbar'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from '../../components/sidebar'
import { SidebarLayout as SidebarLayoutComponent } from '../../components/sidebar-layout'
import { StackedLayout as StackedLayoutComponent } from '../../components/stacked-layout'
import { Text } from '../../components/text'
import { expect, within } from 'storybook/test'
import { BellIcon, HomeIcon, SettingsIcon, SparklesIcon } from '../support/icons'

function withStoryDescription(story: string) {
  return {
    parameters: {
      docs: {
        description: {
          story,
        },
      },
    },
  }
}

const meta = {
  title: 'Components/Layouts',
  component: SidebarLayoutComponent,
  args: {
    navbar: null,
    sidebar: null,
  },
  subcomponents: {
    StackedLayout: StackedLayoutComponent,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Application shell primitives for working screens. They should feel calm, architectural, and deliberately secondary to the content they frame, with desktop sidebars collapsing into an expandable bottom-sheet shelf on mobile.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type CurrentLocation = 'Overview' | 'Editorial' | 'Signals' | 'Settings'
type ShellPlaygroundArgs = {
  title: string
  description: string
  currentLocation: CurrentLocation
}

const overviewCards = [
  {
    title: 'Stable navigation',
    description: 'Navigation stays predictable while the main surface changes state, detail, and emphasis.',
  },
  {
    title: 'Breathing room',
    description: 'The shell supports the page with atmosphere and structure instead of boxing every element in.',
  },
  {
    title: 'Clear hierarchy',
    description: 'The active page still owns the main heading, calls to action, and the majority of the visual weight.',
  },
] as const

const sidebarQueue = [
  {
    title: 'Germany cookware shortlist needs a pricing review',
    description: 'Three supplier feeds changed after the morning sync, and the recommendation rationale now needs a fresh pass.',
  },
  {
    title: 'Editorial note added for the spring maintenance guide',
    description: 'The draft now includes a stronger explanation of when seasoning effort is worth the trade-off.',
  },
  {
    title: 'Portugal shipping signals remain unstable',
    description: 'Keep the market visible in the queue, but downrank it until availability becomes predictable again.',
  },
] as const

const stackedStories = [
  {
    title: 'The spring kitchen edit tightened around fewer, better picks',
    description: 'A broader editorial screen benefits from top navigation because the content is wide, thematic, and less queue-driven.',
  },
  {
    title: 'Regional alerts now appear inside the comparison flow',
    description: 'The stacked shell keeps the top-level sections available while the body shifts between writing, reviewing, and publishing.',
  },
] as const

function CompactSidebarNavbar({ currentLocation }: { currentLocation: CurrentLocation }) {
  const labels: Record<CurrentLocation, string> = {
    Overview: 'Overview',
    Editorial: 'Editorial review',
    Signals: 'Regional signals',
    Settings: 'Workspace settings',
  }

  return (
    <div className="flex min-w-0 items-center gap-3">
      <FullHumanLogo className="h-8 w-auto shrink-0 text-zinc-950 dark:text-white" />
      <div className="min-w-0">
        <p className="text-[11px] font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Full Human</p>
        <p className="truncate text-sm text-zinc-600 dark:text-zinc-300">{labels[currentLocation]}</p>
      </div>
    </div>
  )
}

function ExampleNavbar({ currentLocation }: { currentLocation: CurrentLocation }) {
  return (
    <div className="flex min-w-0 items-center gap-4">
      <div className="hidden min-w-0 lg:block">
        <p className="text-[11px] font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Full Human</p>
        <p className="truncate text-sm text-zinc-600 dark:text-zinc-300">Editorial workspace</p>
      </div>
      <Navbar className="min-w-0 flex-1">
        <NavbarSection>
          <NavbarItem href="#" current={currentLocation === 'Overview'}>
            <HomeIcon data-slot="icon" className="fill-current" />
            <NavbarLabel>Overview</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#" current={currentLocation === 'Editorial'}>
            <SparklesIcon data-slot="icon" className="fill-current" />
            <NavbarLabel>Editorial</NavbarLabel>
          </NavbarItem>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection>
          <NavbarItem href="#" current={currentLocation === 'Signals'}>
            <BellIcon data-slot="icon" className="fill-current" />
            <NavbarLabel>Signals</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#" current={currentLocation === 'Settings'}>
            <SettingsIcon data-slot="icon" className="fill-current" />
            <NavbarLabel>Settings</NavbarLabel>
          </NavbarItem>
        </NavbarSection>
      </Navbar>
    </div>
  )
}

function ExampleStackedNavbar({ currentLocation }: { currentLocation: CurrentLocation }) {
  const labels: Record<CurrentLocation, string> = {
    Overview: 'Overview',
    Editorial: 'Editorial review',
    Signals: 'Regional signals',
    Settings: 'Workspace settings',
  }

  return (
    <div className="flex min-w-0 items-center gap-4">
      <div className="flex min-w-0 items-center gap-3 pl-1">
        <FullHumanLogo className="h-8 w-auto shrink-0 text-zinc-950 dark:text-white" />
        <div className="min-w-0">
          <p className="text-[11px] font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Full Human</p>
          <p className="truncate text-sm text-zinc-600 dark:text-zinc-300">{labels[currentLocation]}</p>
        </div>
      </div>
      <Navbar className="hidden min-h-[4.5rem] min-w-0 flex-1 px-2.5 lg:flex">
        <NavbarSection>
          <NavbarItem href="#" current={currentLocation === 'Overview'}>
            <HomeIcon data-slot="icon" className="fill-current" />
            <NavbarLabel>Overview</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#" current={currentLocation === 'Editorial'}>
            <SparklesIcon data-slot="icon" className="fill-current" />
            <NavbarLabel>Editorial</NavbarLabel>
          </NavbarItem>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection>
          <NavbarItem href="#" current={currentLocation === 'Signals'}>
            <BellIcon data-slot="icon" className="fill-current" />
            <NavbarLabel>Signals</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#" current={currentLocation === 'Settings'}>
            <SettingsIcon data-slot="icon" className="fill-current" />
            <NavbarLabel>Settings</NavbarLabel>
          </NavbarItem>
        </NavbarSection>
      </Navbar>
    </div>
  )
}

function ExampleSidebar({ currentLocation }: { currentLocation: CurrentLocation }) {
  return (
    <Sidebar className="overflow-hidden rounded-2xl border border-zinc-950/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,244,245,0.94))] shadow-[0_30px_80px_-46px_rgba(23,23,23,0.28)] max-lg:rounded-none max-lg:border-0 max-lg:bg-transparent max-lg:shadow-none dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(24,24,27,0.98),rgba(10,10,10,0.96))] dark:shadow-[0_30px_80px_-46px_rgba(0,0,0,0.68)]">
      <SidebarHeader className="border-zinc-950/10 bg-white/45 max-lg:bg-transparent dark:border-white/10 dark:bg-white/5 dark:max-lg:bg-transparent">
        <div className="flex items-center gap-3 px-1.5 pb-2 sm:px-2 sm:pb-3">
          <FullHumanLogo className="h-8 w-auto text-zinc-950 dark:text-white" />
          <div className="min-w-0">
            <p className="text-[11px] font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Workspace</p>
            <p className="truncate text-sm text-zinc-600 dark:text-zinc-300">Spring review board</p>
          </div>
        </div>
        <SidebarSection>
          <SidebarHeading>Browse</SidebarHeading>
          <SidebarItem href="#" current={currentLocation === 'Overview'}>
            <HomeIcon data-slot="icon" className="fill-current" />
            <SidebarLabel>Overview</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#" current={currentLocation === 'Editorial'}>
            <SparklesIcon data-slot="icon" className="fill-current" />
            <SidebarLabel>Editorial</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          <SidebarHeading>Workspace</SidebarHeading>
          <SidebarItem href="#" current={currentLocation === 'Signals'}>
            <BellIcon data-slot="icon" className="fill-current" />
            <SidebarLabel>Signals</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#" current={currentLocation === 'Settings'}>
            <SettingsIcon data-slot="icon" className="fill-current" />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter className="hidden border-zinc-950/10 lg:flex dark:border-white/10">
        <div className="rounded-2xl bg-zinc-950 p-4 text-white dark:bg-black/70">
          <Badge color="green">Live review</Badge>
          <p className="mt-3 text-sm font-medium text-white">Seven markets changed this morning.</p>
          <p className="mt-2 text-sm/6 text-zinc-300">Keep the queue visible while the main surface carries the reasoning and next action.</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

function ShellOverviewBody({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 border-b border-zinc-950/10 pb-8 dark:border-white/10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
        <div className="space-y-4">
          <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Layout overview</p>
          <Heading level={2} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
            {title}
          </Heading>
          <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">{description}</Text>
        </div>
        <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Shell rule</p>
          <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">The layout should feel intentional, but the page should still own the story.</p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {overviewCards.map((item) => (
          <article key={item.title} className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
            <p className="text-sm font-medium text-zinc-950 dark:text-white">{item.title}</p>
            <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_18rem] xl:items-start">
        <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-white/70 p-6 dark:border-white/10 dark:bg-zinc-950/65">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">How it should read</p>
          <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
            Good layouts make the system feel composed before any single component appears. The framing should support wayfinding, rhythm, and calm without burying the content under ornamental structure.
          </Text>
        </div>
        <div className="space-y-4 border-l border-zinc-950/10 pl-6 dark:border-white/10">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Use when</p>
          <Text className="text-sm/6 text-zinc-600 dark:text-zinc-300">Choose sidebar layouts for longer-lived workspaces and stacked layouts for broader overview screens with more thematic content.</Text>
        </div>
      </section>
    </div>
  )
}

function SidebarLayoutInUsePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 border-b border-zinc-950/10 pb-8 dark:border-white/10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
        <div className="space-y-4">
          <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Signals workspace</p>
          <Heading level={2} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
            Monitor regional changes without losing the review queue.
          </Heading>
          <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">
            Sidebar layouts work best when navigation needs to stay visible for the whole session and the main surface keeps changing between detail, review, and action.
          </Text>
          <div className="flex flex-wrap gap-3">
            <Button color="green">Create watchlist</Button>
            <Button outline>Export report</Button>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Active review</p>
          <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">7 markets flagged this morning</p>
          <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">2 need editorial copy updates, 5 need availability checks.</p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Queued reviews</p>
          <p className="mt-2 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">12</p>
        </article>
        <article className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">High-risk markets</p>
          <p className="mt-2 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">3</p>
        </article>
        <article className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Published today</p>
          <p className="mt-2 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">5 updates</p>
        </article>
      </section>

      <section className="grid gap-8 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] xl:items-start">
        <div className="space-y-6 rounded-2xl border border-zinc-950/10 bg-white/70 p-6 dark:border-white/10 dark:bg-zinc-950/65">
          <div className="space-y-2">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Queue requiring review</p>
            <Text className="text-sm/6 text-zinc-600 dark:text-zinc-300">The sidebar holds the stable destinations while the main pane carries the active list, rationale, and next action.</Text>
          </div>
          <div className="space-y-5">
            {sidebarQueue.map((item) => (
              <article key={item.title} className="border-t border-zinc-950/10 pt-5 dark:border-white/10">
                <p className="text-sm font-medium text-zinc-950 dark:text-white">{item.title}</p>
                <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Team note</p>
            <p className="mt-3 text-sm/6 text-zinc-600 dark:text-zinc-300">Keep the sidebar steady for workspaces where people revisit the same destinations all day and need a persistent sense of place.</p>
          </div>
          <div className="rounded-2xl bg-zinc-950 p-6 text-white dark:bg-black/70">
            <Badge color="blue">Why this shell</Badge>
            <p className="mt-4 [font-family:var(--font-display)] text-3xl tracking-tight text-white">Persistent navigation makes the queue feel calmer, not heavier.</p>
            <p className="mt-4 text-sm/6 text-zinc-300">The main surface can change substantially while the reader always knows where they are and where the adjacent work lives.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

function StackedLayoutInUsePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 border-b border-zinc-950/10 pb-8 dark:border-white/10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
        <div className="space-y-4">
          <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Editorial overview</p>
          <Heading level={2} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
            Review the week without losing the broader system view.
          </Heading>
          <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">
            Stacked layouts fit broad screens where top-level navigation should stay visible but the content is more thematic and less tied to one persistent utility rail.
          </Text>
        </div>
        <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">This week</p>
          <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">9 stories reviewed, 3 component specs revised, 1 launch page queued.</p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Stories in flight</p>
          <p className="mt-2 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">9</p>
        </article>
        <article className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Components touched</p>
          <p className="mt-2 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">6</p>
        </article>
        <article className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Pending approvals</p>
          <p className="mt-2 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">2</p>
        </article>
      </section>

      <section className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] xl:items-start">
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-6 dark:border-white/10 dark:bg-zinc-950/65">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Research snapshot</p>
            <Heading level={3} className="mt-3 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              The spring kitchen edit is getting narrower, clearer, and easier to trust.
            </Heading>
            <Text className="mt-3 text-base/7 text-zinc-600 dark:text-zinc-300">
              The stacked shell gives the overview page a broader horizon. Navigation stays present across the top while the body can move between editorial blocks, summaries, and next steps.
            </Text>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {stackedStories.map((story) => (
              <article key={story.title} className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
                <p className="text-sm font-medium text-zinc-950 dark:text-white">{story.title}</p>
                <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">{story.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Next publish window</p>
            <p className="mt-3 text-sm font-medium text-zinc-950 dark:text-white">Thursday, 14:00 CET</p>
            <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">Use the broader top navigation when the page is less about one queue and more about scanning multiple thematic surfaces.</p>
          </div>
          <div className="rounded-2xl bg-zinc-950 p-6 text-white dark:bg-black/70">
            <Badge color="green">Best fit</Badge>
            <p className="mt-4 [font-family:var(--font-display)] text-3xl tracking-tight text-white">Top navigation works when the body is the main stage.</p>
            <p className="mt-4 text-sm/6 text-zinc-300">This shell keeps major destinations available without creating a persistent second column that the page does not need.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export const SidebarLayout: StoryObj<ShellPlaygroundArgs> = {
  ...withStoryDescription('Use the sidebar layout when navigation needs a persistent column next to a working surface that changes state throughout the session. On mobile, the rail should collapse into a clear bottom shelf that expands into a sheet.'),
  args: {
    title: 'Layouts should support atmosphere and wayfinding without turning into chrome for its own sake.',
    description: 'The shell should feel composed, editorial, and calm while giving the active page clear ownership of the main narrative.',
    currentLocation: 'Overview',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    currentLocation: { control: 'inline-radio', options: ['Overview', 'Editorial', 'Signals', 'Settings'] },
  },
  render: ({ title, description, currentLocation }) => (
    <SidebarLayoutComponent navbar={<CompactSidebarNavbar currentLocation={currentLocation} />} sidebar={<ExampleSidebar currentLocation={currentLocation} />}>
      <ShellOverviewBody title={title} description={description} />
    </SidebarLayoutComponent>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.title)).toBeVisible()
  },
}

export const SidebarLayoutInUse: Story = {
  ...withStoryDescription('This page shows the sidebar layout used as a real monitoring workspace with persistent navigation and a changing review surface, plus the mobile bottom-sheet version of that navigation rail.'),
  render: () => (
    <SidebarLayoutComponent navbar={<CompactSidebarNavbar currentLocation="Signals" />} sidebar={<ExampleSidebar currentLocation="Signals" />}>
      <SidebarLayoutInUsePage />
    </SidebarLayoutComponent>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Monitor regional changes without losing the review queue.')).toBeVisible()
  },
}

export const StackedLayout: StoryObj<ShellPlaygroundArgs> = {
  ...withStoryDescription('Use the stacked layout when top navigation should stay present while the page body remains the dominant surface. Any supporting sidebar content should collapse into the same mobile bottom-sheet shelf pattern.'),
  args: {
    title: 'Stacked layouts work when the page needs breadth more than a persistent utility rail.',
    description: 'This shell is useful for overview pages, editorial dashboards, and broader review screens where the content can take a wider shape.',
    currentLocation: 'Editorial',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    currentLocation: { control: 'inline-radio', options: ['Overview', 'Editorial', 'Signals', 'Settings'] },
  },
  render: ({ title, description, currentLocation }) => (
    <StackedLayoutComponent navbar={<ExampleStackedNavbar currentLocation={currentLocation} />} sidebar={<ExampleSidebar currentLocation={currentLocation} />}>
      <ShellOverviewBody title={title} description={description} />
    </StackedLayoutComponent>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.title)).toBeVisible()
  },
}

export const StackedLayoutInUse: Story = {
  ...withStoryDescription('This page shows the stacked layout used as a broader editorial overview screen with top-level navigation, a wide content body, and the shared mobile sidebar shelf pattern.'),
  render: () => (
    <StackedLayoutComponent navbar={<ExampleStackedNavbar currentLocation="Editorial" />} sidebar={<ExampleSidebar currentLocation="Editorial" />}>
      <StackedLayoutInUsePage />
    </StackedLayoutComponent>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Review the week without losing the broader system view.')).toBeVisible()
  },
}
