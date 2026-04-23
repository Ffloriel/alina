import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AlertBanner } from '../../components/alert-banner'
import { Button } from '../../components/button'
import { Heading } from '../../components/heading'
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
  title: 'Components/Feedback and overlays/Alert banner',
  component: AlertBanner,
  args: {
    title: 'Example alert banner',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A full-width banner for page-level messages that need to be visible immediately without opening a modal.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta<typeof AlertBanner>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Use alert banners for page-level notices that should stay visible until the reader has enough context to act.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Component"
        title="Alert banners keep page-level status explicit"
        summary="Use one banner at a time and keep the copy brief enough that it can be scanned before the rest of the page."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <AlertBanner
              tone="informative"
              title="Regional pricing was refreshed for Germany and France."
              actions={<Button outline>Review changes</Button>}
            >
              Readers can compare the updated shortlist without leaving the page they are already using.
            </AlertBanner>
          </GuideDemoFrame>
          <GuideDemoFrame>
            <AlertBanner
              tone="notice"
              title="Shipping estimates are temporarily longer this week."
              actions={<Button color="green">See current lead times</Button>}
            >
              Call attention to the change without interrupting the rest of the browsing flow.
            </AlertBanner>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Regional pricing was refreshed for Germany and France.')).toBeVisible()
  },
}

export const InUse: Story = {
  ...withStoryDescription('This page example shows the banner used as a real website message above editorial content.'),
  render: () => (
    <GuidePage>
      <section className="space-y-8">
        <AlertBanner
          tone="positive"
          title="Spring shortlist updated successfully."
          actions={<Button color="green">Compare the new picks</Button>}
        >
          Two cookware recommendations changed after this week’s availability and price review.
        </AlertBanner>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Editorial update</p>
              <Heading level={1} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                The shortlist stayed calm. The logic changed underneath.
              </Heading>
              <Text className="max-w-2xl text-base/7 text-zinc-600 dark:text-zinc-300">
                A banner works here because it updates the reader’s mental model before they compare articles, notes, and availability details further down the page.
              </Text>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-zinc-950/10 bg-white/75 p-6 dark:border-white/10 dark:bg-zinc-950/70">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">What changed</p>
                <p className="mt-3 text-lg font-medium text-zinc-950 dark:text-white">Two stainless-steel sets moved up after new stock checks.</p>
                <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">The page-level banner introduces the shift before the reader reaches the supporting detail cards.</p>
              </article>
              <article className="rounded-2xl border border-zinc-950/10 bg-white/75 p-6 dark:border-white/10 dark:bg-zinc-950/70">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Why it matters</p>
                <p className="mt-3 text-lg font-medium text-zinc-950 dark:text-white">Pricing stayed stable, but regional shipping got faster in three markets.</p>
                <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">That is large enough to reframe the whole editorial page, not just one card inside it.</p>
              </article>
            </div>

            <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">This week’s note</p>
              <p className="mt-3 max-w-3xl text-sm/7 text-zinc-600 dark:text-zinc-300">
                Use banners when the overall context of the page has changed. They should appear before the main content and give enough detail that the reader can reinterpret everything else that follows.
              </p>
            </div>
          </div>

          <div className="space-y-4 border-l border-zinc-950/10 pl-6 dark:border-white/10">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Next review window</p>
            <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">Friday, 09:00 CET</p>
            <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">Use banners when the entire page context has changed, not for small field-level issues.</p>
          </div>
        </div>
      </section>
    </GuidePage>
  ),
}