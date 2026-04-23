import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Avatar } from '../../components/avatar'
import {
  Dropdown as DropdownComponent,
  DropdownButton,
  DropdownDescription,
  DropdownDivider,
  DropdownHeader,
  DropdownHeading,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownSection,
  DropdownShortcut,
} from '../../components/dropdown'
import { Navbar as NavbarComponent, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '../../components/navbar'
import {
  Pagination as PaginationComponent,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '../../components/pagination'
import {
  Sidebar as SidebarComponent,
  SidebarBody,
  SidebarDivider,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '../../components/sidebar'
import { expect, userEvent, within } from 'storybook/test'
import { BellIcon, DotsIcon, HomeIcon, SettingsIcon, SparklesIcon } from '../support/icons'
import { GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'

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
  title: 'Components/Navigation',
  component: NavbarComponent,
  subcomponents: {
    Dropdown: DropdownComponent,
    Pagination: PaginationComponent,
    Sidebar: SidebarComponent,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Navigation primitives for top-level wayfinding, contextual actions, paginated sequences, and dense sidebar information architecture.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type NavbarSectionName = 'Overview' | 'Recommendations' | 'Updates' | 'Preferences'
type SidebarSectionName = 'Overview' | 'Foundations' | 'Feedback' | 'Preferences' | 'More actions'
type NavbarPlaygroundArgs = {
  currentSection: NavbarSectionName
}
type DropdownPlaygroundArgs = {
  menuLabel: string
  systemName: string
  primaryActionLabel: string
  secondaryActionLabel: string
}
type PaginationPlaygroundArgs = {
  currentPage: number
  totalPages: number
  previousLabel: string
  nextLabel: string
}
type SidebarPlaygroundArgs = {
  currentSection: SidebarSectionName
  showFooter: boolean
}

function buildPaginationItems(currentPage: number, totalPages: number) {
  const pages = new Set<number>([1, totalPages, currentPage - 1, currentPage, currentPage + 1].filter((page) => page >= 1 && page <= totalPages))
  const orderedPages = [...pages].sort((left, right) => left - right)

  return orderedPages.flatMap((page, index) => {
    const previousPage = orderedPages[index - 1]
    if (previousPage && page - previousPage > 1) {
      return ['gap' as const, page]
    }

    return [page]
  })
}

function NavbarExamples() {
  return (
    <GuideSection
      eyebrow="Navbars"
      title="Navbars anchor the primary sections without getting noisy"
      summary="Use navbars for the highest-level wayfinding and keep the item count disciplined enough to scan in one pass."
    >
      <GuideDemoFrame>
        <NavbarComponent>
          <NavbarSection>
            <NavbarItem href="#" current>
              <HomeIcon data-slot="icon" className="fill-current" />
              <NavbarLabel>Overview</NavbarLabel>
            </NavbarItem>
            <NavbarItem href="#">
              <SparklesIcon data-slot="icon" className="fill-current" />
              <NavbarLabel>Recommendations</NavbarLabel>
            </NavbarItem>
          </NavbarSection>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="#">
              <BellIcon data-slot="icon" className="fill-current" />
              <NavbarLabel>Updates</NavbarLabel>
            </NavbarItem>
            <NavbarDivider />
            <NavbarItem href="#">
              <SettingsIcon data-slot="icon" className="fill-current" />
              <NavbarLabel>Preferences</NavbarLabel>
            </NavbarItem>
          </NavbarSection>
        </NavbarComponent>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function DropdownExamples() {
  return (
    <GuideSection
      eyebrow="Dropdowns"
      title="Dropdowns should expose contextual actions, not mystery meat navigation"
      summary="Labels and supporting descriptions need to make the next action obvious, especially when the trigger itself is compact."
    >
      <GuideDemoFrame>
        <DropdownComponent>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-zinc-950 dark:text-white">Contextual actions</p>
              <p className="mt-1 text-sm/6 text-zinc-500 dark:text-zinc-400">Dropdowns should stay descriptive, not cryptic.</p>
            </div>
            <DropdownButton aria-label="Open menu">
              <DotsIcon data-slot="icon" className="fill-current" />
            </DropdownButton>
          </div>
          <DropdownMenu className="min-w-72">
            <DropdownHeader>
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Selected system</p>
              <div className="mt-2 flex items-center gap-3">
                <Avatar initials="FH" className="size-10 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" />
                <div>
                  <p className="text-sm font-medium text-zinc-950 dark:text-white">Full Human</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Editorial recommendations</p>
                </div>
              </div>
            </DropdownHeader>
            <DropdownDivider />
            <DropdownSection>
              <DropdownHeading>Actions</DropdownHeading>
              <DropdownItem href="#">
                <SparklesIcon data-slot="icon" className="fill-current" />
                <DropdownLabel>Refresh recommendations</DropdownLabel>
                <DropdownDescription>Re-evaluate pricing, availability, and scoring.</DropdownDescription>
                <DropdownShortcut keys="R" />
              </DropdownItem>
              <DropdownItem href="#">
                <SettingsIcon data-slot="icon" className="fill-current" />
                <DropdownLabel>Edit preferences</DropdownLabel>
                <DropdownDescription>Update locale, budget, and product constraints.</DropdownDescription>
                <DropdownShortcut keys={["⌘", "K"]} />
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </DropdownComponent>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function PaginationExamples() {
  return (
    <GuideSection
      eyebrow="Pagination"
      title="Pagination keeps long sequences navigable without overwhelming the reader"
      summary="Expose current position, preserve previous and next actions, and collapse large ranges only when the sequence is genuinely long."
    >
      <GuideDemoFrame>
        <PaginationComponent>
          <PaginationPrevious href="#">Previous set</PaginationPrevious>
          <PaginationList>
            <PaginationPage href="#">1</PaginationPage>
            <PaginationPage href="#" current>
              2
            </PaginationPage>
            <PaginationPage href="#">3</PaginationPage>
            <PaginationGap />
            <PaginationPage href="#">8</PaginationPage>
          </PaginationList>
          <PaginationNext href="#">Next set</PaginationNext>
        </PaginationComponent>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function SidebarExamples() {
  return (
    <GuideSection
      eyebrow="Sidebars"
      title="Sidebars are for dense information architecture, not overflow actions"
      summary="Use a sidebar when sections need persistent visibility and the screen can support a stable secondary column."
    >
      <GuideDemoFrame>
        <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-2 dark:border-white/10 dark:bg-zinc-900/60">
            <SidebarComponent>
              <SidebarHeader>
                <SidebarSection>
                  <SidebarHeading>Guide navigation</SidebarHeading>
                  <SidebarItem href="#" current>
                    <HomeIcon data-slot="icon" className="fill-current" />
                    <SidebarLabel>Overview</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="#">
                    <SparklesIcon data-slot="icon" className="fill-current" />
                    <SidebarLabel>Foundations</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              </SidebarHeader>
              <SidebarBody>
                <SidebarSection>
                  <SidebarHeading>Components</SidebarHeading>
                  <SidebarItem href="#">
                    <BellIcon data-slot="icon" className="fill-current" />
                    <SidebarLabel>Feedback</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="#">
                    <SettingsIcon data-slot="icon" className="fill-current" />
                    <SidebarLabel>Preferences</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
                <SidebarDivider />
                <SidebarSpacer />
              </SidebarBody>
              <SidebarFooter>
                <SidebarSection>
                  <SidebarItem href="#">
                    <DotsIcon data-slot="icon" className="fill-current" />
                    <SidebarLabel>More actions</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              </SidebarFooter>
            </SidebarComponent>
          </div>
          <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-8 dark:border-white/10 dark:bg-zinc-900/60">
            <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">
              Sidebars should expose dense navigation only when the information architecture truly needs it. Use them to keep primary sections stable, not to cram secondary actions into every screen.
            </p>
          </div>
        </div>
      </GuideDemoFrame>
    </GuideSection>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Review the full navigation stack, from primary bars to contextual menus and dense sidebars.'),
  args: {
    children: null,
  },
  render: () => (
    <GuidePage>
      <NavbarExamples />
      <DropdownExamples />
      <PaginationExamples />
      <SidebarExamples />
    </GuidePage>
  ),
}

export const Navbar: StoryObj<NavbarPlaygroundArgs> = {
  ...withStoryDescription('Use navbars for the highest-level sections and keep the item count disciplined enough to scan in one pass.'),
  args: {
    currentSection: 'Overview',
  },
  argTypes: {
    currentSection: { control: 'inline-radio', options: ['Overview', 'Recommendations', 'Updates', 'Preferences'] },
  },
  render: ({ currentSection }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Navbar playground"
        summary="Tune the current section and keep the top-level wayfinding compact enough to scan in a single pass."
      >
        <GuideDemoFrame>
          <NavbarComponent>
            <NavbarSection>
              <NavbarItem href="#" current={currentSection === 'Overview'}>
                <HomeIcon data-slot="icon" className="fill-current" />
                <NavbarLabel>Overview</NavbarLabel>
              </NavbarItem>
              <NavbarItem href="#" current={currentSection === 'Recommendations'}>
                <SparklesIcon data-slot="icon" className="fill-current" />
                <NavbarLabel>Recommendations</NavbarLabel>
              </NavbarItem>
            </NavbarSection>
            <NavbarSpacer />
            <NavbarSection>
              <NavbarItem href="#" current={currentSection === 'Updates'}>
                <BellIcon data-slot="icon" className="fill-current" />
                <NavbarLabel>Updates</NavbarLabel>
              </NavbarItem>
              <NavbarDivider />
              <NavbarItem href="#" current={currentSection === 'Preferences'}>
                <SettingsIcon data-slot="icon" className="fill-current" />
                <NavbarLabel>Preferences</NavbarLabel>
              </NavbarItem>
            </NavbarSection>
          </NavbarComponent>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('link', { name: args.currentSection })).toBeVisible()
  },
}

export const Dropdown: StoryObj<DropdownPlaygroundArgs> = {
  ...withStoryDescription('Dropdowns expose contextual actions when the trigger needs to stay compact but the choices still need clear labels.'),
  args: {
    menuLabel: 'Open menu',
    systemName: 'Full Human',
    primaryActionLabel: 'Refresh recommendations',
    secondaryActionLabel: 'Edit preferences',
  },
  argTypes: {
    menuLabel: { control: 'text' },
    systemName: { control: 'text' },
    primaryActionLabel: { control: 'text' },
    secondaryActionLabel: { control: 'text' },
  },
  render: ({ menuLabel, systemName, primaryActionLabel, secondaryActionLabel }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Dropdown playground"
        summary="Dropdowns should expose contextual actions clearly enough that even a compact trigger never feels cryptic."
      >
        <GuideDemoFrame>
          <DropdownComponent>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-zinc-950 dark:text-white">Contextual actions</p>
                <p className="mt-1 text-sm/6 text-zinc-500 dark:text-zinc-400">Dropdowns should stay descriptive, not cryptic.</p>
              </div>
              <DropdownButton aria-label={menuLabel}>
                <DotsIcon data-slot="icon" className="fill-current" />
              </DropdownButton>
            </div>
            <DropdownMenu className="min-w-72">
              <DropdownHeader>
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Selected system</p>
                <div className="mt-2 flex items-center gap-3">
                  <Avatar initials="FH" className="size-10 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" />
                  <div>
                    <p className="text-sm font-medium text-zinc-950 dark:text-white">{systemName}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Editorial recommendations</p>
                  </div>
                </div>
              </DropdownHeader>
              <DropdownDivider />
              <DropdownSection>
                <DropdownHeading>Actions</DropdownHeading>
                <DropdownItem href="#">
                  <SparklesIcon data-slot="icon" className="fill-current" />
                  <DropdownLabel>{primaryActionLabel}</DropdownLabel>
                  <DropdownDescription>Re-evaluate pricing, availability, and scoring.</DropdownDescription>
                  <DropdownShortcut keys="R" />
                </DropdownItem>
                <DropdownItem href="#">
                  <SettingsIcon data-slot="icon" className="fill-current" />
                  <DropdownLabel>{secondaryActionLabel}</DropdownLabel>
                  <DropdownDescription>Update locale, budget, and product constraints.</DropdownDescription>
                  <DropdownShortcut keys={["⌘", "K"]} />
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </DropdownComponent>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    await userEvent.click(canvas.getByRole('button', { name: args.menuLabel }))
    await expect(body.getByText(args.primaryActionLabel)).toBeVisible()
  },
}

export const Pagination: StoryObj<PaginationPlaygroundArgs> = {
  ...withStoryDescription('Pagination preserves orientation through long sequences by combining current position with previous and next actions.'),
  args: {
    currentPage: 2,
    totalPages: 8,
    previousLabel: 'Previous set',
    nextLabel: 'Next set',
  },
  argTypes: {
    currentPage: { control: { type: 'range', min: 1, max: 8, step: 1 } },
    totalPages: { control: { type: 'range', min: 3, max: 8, step: 1 } },
    previousLabel: { control: 'text' },
    nextLabel: { control: 'text' },
  },
  render: ({ currentPage, totalPages, previousLabel, nextLabel }) => {
    const safeCurrentPage = Math.min(currentPage, totalPages)
    const items = buildPaginationItems(safeCurrentPage, totalPages)

    return (
      <GuidePage>
        <GuideSection
          eyebrow="Controls"
          title="Pagination playground"
          summary="Keep long sequences oriented by exposing current position alongside clear previous and next actions."
        >
          <GuideDemoFrame>
            <PaginationComponent>
              <PaginationPrevious href={safeCurrentPage > 1 ? '#' : null}>{previousLabel}</PaginationPrevious>
              <PaginationList>
                {items.map((item, index) =>
                  item === 'gap' ? (
                    <PaginationGap key={`gap-${index}`} />
                  ) : (
                    <PaginationPage key={item} href="#" current={item === safeCurrentPage}>
                      {item}
                    </PaginationPage>
                  )
                )}
              </PaginationList>
              <PaginationNext href={safeCurrentPage < totalPages ? '#' : null}>{nextLabel}</PaginationNext>
            </PaginationComponent>
          </GuideDemoFrame>
        </GuideSection>
      </GuidePage>
    )
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByLabelText(`Page ${Math.min(args.currentPage, args.totalPages)}`)).toHaveAttribute('aria-current', 'page')
  },
}

export const Sidebar: StoryObj<SidebarPlaygroundArgs> = {
  ...withStoryDescription('Use sidebars when the information architecture needs a stable secondary column with persistent section visibility.'),
  args: {
    currentSection: 'Overview',
    showFooter: true,
  },
  argTypes: {
    currentSection: { control: 'inline-radio', options: ['Overview', 'Foundations', 'Feedback', 'Preferences', 'More actions'] },
    showFooter: { control: 'boolean' },
  },
  render: ({ currentSection, showFooter }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Sidebar playground"
        summary="Use sidebars when the screen can support a stable secondary column with persistent section visibility."
      >
        <GuideDemoFrame>
          <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-2 dark:border-white/10 dark:bg-zinc-900/60">
              <SidebarComponent>
                <SidebarHeader>
                  <SidebarSection>
                    <SidebarHeading>Guide navigation</SidebarHeading>
                    <SidebarItem href="#" current={currentSection === 'Overview'}>
                      <HomeIcon data-slot="icon" className="fill-current" />
                      <SidebarLabel>Overview</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="#" current={currentSection === 'Foundations'}>
                      <SparklesIcon data-slot="icon" className="fill-current" />
                      <SidebarLabel>Foundations</SidebarLabel>
                    </SidebarItem>
                  </SidebarSection>
                </SidebarHeader>
                <SidebarBody>
                  <SidebarSection>
                    <SidebarHeading>Components</SidebarHeading>
                    <SidebarItem href="#" current={currentSection === 'Feedback'}>
                      <BellIcon data-slot="icon" className="fill-current" />
                      <SidebarLabel>Feedback</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="#" current={currentSection === 'Preferences'}>
                      <SettingsIcon data-slot="icon" className="fill-current" />
                      <SidebarLabel>Preferences</SidebarLabel>
                    </SidebarItem>
                  </SidebarSection>
                  <SidebarDivider />
                  <SidebarSpacer />
                </SidebarBody>
                {showFooter || currentSection === 'More actions' ? (
                  <SidebarFooter>
                    <SidebarSection>
                      <SidebarItem href="#" current={currentSection === 'More actions'}>
                        <DotsIcon data-slot="icon" className="fill-current" />
                        <SidebarLabel>More actions</SidebarLabel>
                      </SidebarItem>
                    </SidebarSection>
                  </SidebarFooter>
                ) : null}
              </SidebarComponent>
            </div>
            <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-8 dark:border-white/10 dark:bg-zinc-900/60">
              <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">
                Sidebars should expose dense navigation only when the information architecture truly needs it.
              </p>
            </div>
          </div>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('link', { name: args.currentSection })).toBeVisible()
  },
}