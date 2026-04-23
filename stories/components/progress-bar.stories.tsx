import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '../../components/button'
import { Heading } from '../../components/heading'
import { ProgressBar } from '../../components/progress-bar'
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
  title: 'Components/Data display/Progress bar',
  component: ProgressBar,
  args: {
    value: 50,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A linear progress indicator for onboarding, completion, loading, and other stepwise feedback.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta<typeof ProgressBar>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Progress bars work best when the task moves along a clear sequence or completion path.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Component"
        title="Progress bars make long tasks legible"
        summary="Use them when the reader benefits from seeing how much of a sequence, upload, or setup is already complete."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <ProgressBar value={68} label="Recommendation profile" />
          </GuideDemoFrame>
          <GuideDemoFrame>
            <ProgressBar value={32} tone="notice" label="Importing saved filters" />
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Recommendation profile')).toBeVisible()
  },
}

export const InUse: Story = {
  ...withStoryDescription('This page example shows a progress bar used inside an onboarding flow.'),
  render: () => (
    <GuidePage>
      <section className="space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Onboarding</p>
            <Heading level={1} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Finish the setup in one pass.
            </Heading>
            <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">
              Three of five steps are complete. A progress bar works here because the reader is moving through a finite sequence with a known end.
            </Text>
          </div>
          <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Estimated time left</p>
            <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">About 4 minutes</p>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-950/10 bg-white/80 p-6 dark:border-white/10 dark:bg-zinc-950/70 lg:p-8">
          <ProgressBar value={3} max={5} label="Onboarding progress" />

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="space-y-4">
              <article className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Completed</p>
                <p className="mt-2 text-sm font-medium text-zinc-950 dark:text-white">Profile, region, and budget are saved.</p>
              </article>
              <article className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Current step</p>
                <p className="mt-2 text-sm font-medium text-zinc-950 dark:text-white">Delivery preferences</p>
                <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">Choose where the shortlist should favor local stock and which shipping window still counts as acceptable.</p>
              </article>
              <article className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Next</p>
                <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">Notification preferences and final review.</p>
              </article>
            </div>

            <div className="space-y-4 border-l border-zinc-950/10 pl-6 dark:border-white/10">
              <Text className="text-sm/6 text-zinc-600 dark:text-zinc-300">
                A progress bar belongs in structured flows like onboarding because the reader benefits from knowing how much sequence remains.
              </Text>
              <Button color="green">Continue to delivery preferences</Button>
            </div>
          </div>
        </div>
      </section>
    </GuidePage>
  ),
}