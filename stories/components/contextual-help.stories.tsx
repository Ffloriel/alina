import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '../../components/button'
import { ContextualHelp } from '../../components/contextual-help'
import { Heading } from '../../components/heading'
import { Input } from '../../components/input'
import { Text } from '../../components/text'
import { expect, within } from 'storybook/test'
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
  title: 'Components/Feedback and overlays/Contextual help',
  component: ContextualHelp,
  args: {
    title: 'Example contextual help',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A nearby help surface for clarifying the current decision without forcing the reader to leave the task.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta<typeof ContextualHelp>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Contextual help should sit close to the decision it supports and stay brief enough to read in one glance.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Component"
        title="Contextual help explains the current decision"
        summary="Use it when the reader needs a little more guidance than helper text can carry, but not a modal or a full help article."
      >
        <GuideDemoFrame>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-zinc-950 dark:text-white">Budget ceiling</span>
              <Input aria-label="Budget ceiling" type="text" placeholder="EUR 250" />
            </label>
            <ContextualHelp title="Why ask for a ceiling?" tone="accent">
              A ceiling is more useful than a range here because it helps Full Human remove options that would never be considered realistic.
            </ContextualHelp>
          </div>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Why ask for a ceiling?')).toBeVisible()
  },
}

export const InUse: Story = {
  ...withStoryDescription('This page example shows contextual help attached to a real preference-setting interface.'),
  render: () => (
    <GuidePage>
      <section className="space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Preference profile</p>
            <Heading level={1} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Set the filters that matter. Ignore the rest.
            </Heading>
            <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">
              This page helps the reader shape the shortlist without forcing them into a long setup wizard. Contextual help sits beside the decision point and explains the current choice.
            </Text>
          </div>
          <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Saved profile</p>
            <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">3 markets, 1 budget ceiling, 2 material exclusions</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="space-y-6 rounded-2xl border border-zinc-950/10 bg-white/80 p-6 dark:border-white/10 dark:bg-zinc-950/70 lg:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-zinc-950 dark:text-white">Preferred region</span>
                <Input aria-label="Preferred region" type="text" placeholder="Germany" />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-zinc-950 dark:text-white">Maximum budget</span>
                <Input aria-label="Maximum budget" type="text" placeholder="EUR 250" />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-zinc-950 dark:text-white">Primary use</span>
                <Input aria-label="Primary use" type="text" placeholder="Daily family meals" />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-zinc-950 dark:text-white">Avoid materials</span>
                <Input aria-label="Avoid materials" type="text" placeholder="Uncoated cast iron" />
              </label>
            </div>

            <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">How these answers shape the page</p>
              <p className="mt-3 text-sm/6 text-zinc-600 dark:text-zinc-300">The saved values change ranking, trade-off explanations, and which comparisons stay visible in the next step.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button color="green">Save preferences</Button>
              <Button outline>Preview shortlist</Button>
            </div>
          </div>

          <div className="space-y-6">
            <ContextualHelp title="How preferences are used" tone="informative" action={<Button outline>Read the scoring method</Button>}>
              These values narrow the shortlist and change how trade-offs are explained. They do not automatically exclude items unless they clearly fall outside your stated limit.
            </ContextualHelp>
            <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Pattern note</p>
              <p className="mt-3 text-sm/6 text-zinc-600 dark:text-zinc-300">Contextual help belongs close to a live decision. It should support the form, not replace the page.</p>
            </div>
          </div>
        </div>
      </section>
    </GuidePage>
  ),
}