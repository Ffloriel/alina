import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Heading } from '../../components/heading'
import { LoadingCircle } from '../../components/progress-circle'
import { Text } from '../../components/text'
import { expect, within } from 'storybook/test'
import { GuideCardGrid, GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'

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
  title: 'Components/Feedback and overlays/Loading circle',
  component: LoadingCircle,
  args: {
    label: 'Loading',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A circular loading indicator for moments when the system is working in the background and the final result is not ready yet.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta<typeof LoadingCircle>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Use a loading circle for short waiting states when the system is actively working but cannot yet report a meaningful percentage.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Component"
        title="Loading circles signal active work without inventing false precision"
        summary="Use them for searching, syncing, or preparing a result when a percentage would imply certainty you do not actually have yet."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <LoadingCircle label="Loading regional pricing">Refreshing courier and warehouse estimates.</LoadingCircle>
          </GuideDemoFrame>
          <GuideDemoFrame>
            <LoadingCircle tone="notice" label="Preparing comparison view">Organizing the shortlist before the table appears.</LoadingCircle>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Loading regional pricing')).toBeVisible()
  },
}

export const InUse: Story = {
  ...withStoryDescription('This page example shows a loading circle holding the main content area while a recommendation workspace finishes building the next view.'),
  render: () => (
    <GuidePage>
      <section className="space-y-10">
        <div className="grid gap-8 border-b border-zinc-950/10 pb-8 dark:border-white/10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Recommendation workspace</p>
            <Heading level={1} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Preparing your spring cookware shortlist
            </Heading>
            <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">
              The system is comparing availability, maintenance tolerance, and total cost before the next screen renders. This is a real loading state, not a score.
            </Text>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-zinc-950/10 bg-white/75 p-4 dark:border-white/10 dark:bg-zinc-950/70">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Filters</p>
              <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">Germany, stainless steel, dishwasher-safe</p>
            </div>
            <div className="rounded-2xl border border-zinc-950/10 bg-white/75 p-4 dark:border-white/10 dark:bg-zinc-950/70">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Candidates</p>
              <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">126 products under review</p>
            </div>
            <div className="rounded-2xl border border-zinc-950/10 bg-white/75 p-4 dark:border-white/10 dark:bg-zinc-950/70">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Updated</p>
              <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">12 seconds ago</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
          <aside className="space-y-4 rounded-2xl border border-zinc-950/10 bg-white/75 p-6 dark:border-white/10 dark:bg-zinc-950/70">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Active inputs</p>
            <div className="space-y-3 text-sm/6 text-zinc-600 dark:text-zinc-300">
              <p>Budget ceiling: EUR 220</p>
              <p>Primary use: Daily family cooking</p>
              <p>Avoid: Uncoated cast iron</p>
              <p>Priority: Low-maintenance durability</p>
            </div>
          </aside>

          <div className="rounded-2xl border border-zinc-950/10 bg-white/80 p-6 dark:border-white/10 dark:bg-zinc-950/70 lg:p-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center">
              <div className="flex min-h-[24rem] items-center justify-center rounded-2xl border border-dashed border-zinc-950/10 bg-zinc-50/80 p-8 dark:border-white/10 dark:bg-white/5">
                <LoadingCircle size={88} label="Building recommendations">
                  Comparing price history, repairability, and shipping coverage for the saved markets.
                </LoadingCircle>
              </div>
              <div className="space-y-5 border-l border-zinc-950/10 pl-6 dark:border-white/10">
                <div>
                  <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Current stage</p>
                  <p className="mt-2 text-sm font-medium text-zinc-950 dark:text-white">Checking market-specific availability</p>
                </div>
                <div>
                  <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Queued next</p>
                  <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">Reweighting durability notes and assembling the side-by-side comparison table.</p>
                </div>
                <div>
                  <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Why this pattern</p>
                  <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">The page can stay informative while the main result area holds a clear loading state instead of a misleading numeric score.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GuidePage>
  ),
}