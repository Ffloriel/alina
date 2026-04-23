import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '../../components/button'
import { Heading } from '../../components/heading'
import { InlineAlert } from '../../components/inline-alert'
import { Input } from '../../components/input'
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
  title: 'Components/Feedback and overlays/In-line alert',
  component: InlineAlert,
  args: {
    title: 'Example in-line alert',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'An embedded alert for in-flow status, validation, or warnings that belong inside the current content area.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta<typeof InlineAlert>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Use in-line alerts inside the current reading flow when the message belongs to one section rather than the entire page.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Component"
        title="In-line alerts stay close to the affected content"
        summary="Keep them concise and attach them to the block, form, or step that actually needs attention."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <InlineAlert tone="notice" title="One shortlisted item is temporarily out of stock.">
              Keep it visible for comparison, but make the shortage explicit before the reader commits to it.
            </InlineAlert>
          </GuideDemoFrame>
          <GuideDemoFrame>
            <InlineAlert tone="negative" title="Your region is missing from this preference set.">
              Add a country or market before asking the system to compare availability.
            </InlineAlert>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('One shortlisted item is temporarily out of stock.')).toBeVisible()
  },
}

export const InUse: Story = {
  ...withStoryDescription('This page example shows an in-line alert used inside a live settings form.'),
  render: () => (
    <GuidePage>
      <section className="space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Settings</p>
            <Heading level={1} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Update your recommendation filters.
            </Heading>
            <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">
              This screen contains a live form, a review panel, and one embedded alert. The warning sits inside the section that needs attention instead of escalating to the whole page.
            </Text>
          </div>
          <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Unsaved changes</p>
            <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">2 fields edited since the last sync</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="space-y-6 rounded-2xl border border-zinc-950/10 bg-white/80 p-6 dark:border-white/10 dark:bg-zinc-950/70 lg:p-8">
            <InlineAlert tone="notice" title="One value still needs review before saving.">
              The budget field is using a previous import and may not match the current region.
            </InlineAlert>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-zinc-950 dark:text-white">Region</span>
                <Input aria-label="Region" type="text" placeholder="Germany" />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-zinc-950 dark:text-white">Budget</span>
                <Input aria-label="Budget" type="text" placeholder="EUR 250" />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-zinc-950 dark:text-white">Household size</span>
                <Input aria-label="Household size" type="text" placeholder="4 people" />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-zinc-950 dark:text-white">Priority</span>
                <Input aria-label="Priority" type="text" placeholder="Low-maintenance durability" />
              </label>
            </div>

            <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
              In-line alerts are useful here because the message belongs to the current form state, not to the page as a whole.
            </Text>

            <div className="flex flex-wrap gap-3">
              <Button color="green">Save changes</Button>
              <Button outline>Discard draft</Button>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Review</p>
            <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">Use an in-line alert when the problem affects one section and the rest of the page can keep working normally.</p>
            <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">If the whole page context changed, use a banner instead.</p>
          </div>
        </div>
      </section>
    </GuidePage>
  ),
}