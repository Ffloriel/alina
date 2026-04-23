import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Heading } from '../../components/heading'
import { Tooltip } from '../../components/tooltip'
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
  title: 'Components/Feedback and overlays/Tooltip',
  component: Tooltip,
  args: {
    content: 'Example tooltip content',
    children: 'Trigger',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A short on-demand overlay for clarifying a nearby control or label without introducing a larger help surface.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

function HelpTrigger({ label = '?' }: { label?: string }) {
  return (
    <button className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-950/10 bg-white text-sm font-medium text-zinc-950 dark:border-white/10 dark:bg-zinc-900 dark:text-white">
      {label}
    </button>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Tooltips should carry only short clarifications and should never be the only place critical information exists.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Component"
        title="Tooltips explain one nearby detail"
        summary="If the explanation is more than a sentence or contains actions, move it into contextual help or a larger panel instead."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <div className="flex items-center gap-3">
              <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">Recommendation confidence</p>
              <Tooltip open content="A higher confidence score means the shortlist had fewer trade-offs between price, quality, and availability.">
                <HelpTrigger />
              </Tooltip>
            </div>
          </GuideDemoFrame>
          <GuideDemoFrame>
            <div className="flex items-center gap-3">
              <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">Region lock</p>
              <Tooltip open side="right" content="This filter keeps the shortlist limited to items regularly shipped to the selected market.">
                <HelpTrigger label="i" />
              </Tooltip>
            </div>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Recommendation confidence')).toBeVisible()
  },
}

export const InUse: Story = {
  ...withStoryDescription('This page example shows a tooltip attached to a real score label inside a comparison page.'),
  render: () => (
    <GuidePage>
      <section className="space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Comparison</p>
            <Heading level={1} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Compare the final shortlist.
            </Heading>
            <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">
              Tooltips carry one nearby clarification for labels that are otherwise self-explanatory. They should not become mini help centers.
            </Text>
          </div>
          <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Shortlist size</p>
            <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">4 products under review</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-2xl border border-zinc-950/10 bg-white/75 p-6 dark:border-white/10 dark:bg-zinc-950/70">
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium text-zinc-950 dark:text-white">Durability score</p>
              <Tooltip content="This score weighs material resilience, repairability, and how likely the item is to age well under normal use.">
                <HelpTrigger />
              </Tooltip>
            </div>
            <p className="mt-4 text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">8.9</p>
            <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">Strong materials and low-fuss upkeep across the tested markets.</p>
          </article>
          <article className="rounded-2xl border border-zinc-950/10 bg-white/75 p-6 dark:border-white/10 dark:bg-zinc-950/70">
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium text-zinc-950 dark:text-white">Regional fit</p>
              <Tooltip content="Regional fit reflects shipping reliability, stock stability, and how often prices stay within the local budget ceiling.">
                <HelpTrigger label="i" />
              </Tooltip>
            </div>
            <p className="mt-4 text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">7.6</p>
            <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">Reliable in Germany and the Netherlands, less stable in southern Europe this week.</p>
          </article>
          <article className="rounded-2xl border border-zinc-950/10 bg-white/75 p-6 dark:border-white/10 dark:bg-zinc-950/70">
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium text-zinc-950 dark:text-white">Repair outlook</p>
              <Tooltip content="Repair outlook estimates how likely the item is to stay useful over time based on spare-part access and failure patterns.">
                <HelpTrigger />
              </Tooltip>
            </div>
            <p className="mt-4 text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">High</p>
            <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">Replacement handles and lids remain consistently available through the core distributors.</p>
          </article>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="rounded-2xl border border-zinc-950/10 bg-white/75 p-6 dark:border-white/10 dark:bg-zinc-950/70">
            <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
              A tooltip works here because each score label needs one extra definition, not a separate help card or article. The surrounding comparison page stays dense with content, while the clarification remains on demand.
            </Text>
          </div>
          <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Pattern note</p>
            <p className="mt-3 text-sm/6 text-zinc-600 dark:text-zinc-300">If the explanation needs actions, multiple paragraphs, or visuals, move it out of a tooltip.</p>
          </div>
        </div>
      </section>
    </GuidePage>
  ),
}