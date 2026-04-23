import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AvatarGroup } from '../../components/avatar-group'
import { Badge } from '../../components/badge'
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

const reviewTeam = [
  { initials: 'AM', alt: 'Aline Martin', href: '#' },
  { initials: 'JR', alt: 'Jules Roche', href: '#' },
  { initials: 'NS', alt: 'Nina Solberg', href: '#' },
  { initials: 'LF', alt: 'Lucie Fournier', href: '#' },
  { initials: 'DV', alt: 'Dario Vogel', href: '#' },
] as const

const publishTeam = [
  { initials: 'AM', alt: 'Aline Martin' },
  { initials: 'JR', alt: 'Jules Roche' },
  { initials: 'NS', alt: 'Nina Solberg' },
] as const

const meta = {
  title: 'Components/Data display/Avatar group',
  component: AvatarGroup,
  args: {
    items: [{ initials: 'EX', alt: 'Example person' }],
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A compact cluster of related avatars for teams, authors, reviewers, or shared ownership states.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta<typeof AvatarGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Use avatar groups when the relationship between people matters more than each person’s full profile card.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Component"
        title="Avatar groups keep shared ownership compact"
        summary="Use them for contributors, reviewers, and participants when the page needs to acknowledge the group without giving each person a full card."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <div className="space-y-4">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Review team</p>
              <AvatarGroup items={reviewTeam.map((person) => ({ ...person }))} />
            </div>
          </GuideDemoFrame>
          <GuideDemoFrame>
            <div className="space-y-4">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Compact byline</p>
              <AvatarGroup items={publishTeam.map((person) => ({ ...person }))} size="lg" limit={2} />
            </div>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Review team')).toBeVisible()
  },
}

export const InUse: Story = {
  ...withStoryDescription('This page shows avatar groups embedded inside a real editorial review screen with shared ownership and publish decisions.'),
  render: () => (
    <GuidePage>
      <section className="space-y-10">
        <div className="grid gap-8 border-b border-zinc-950/10 pb-8 dark:border-white/10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Editorial review</p>
            <Heading level={1} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Publish the spring cookware update with the right people in the loop.
            </Heading>
            <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">
              Avatar groups help the page show who owns the decision, who is reviewing it, and who still needs to sign off without turning that metadata into a grid of individual profile cards.
            </Text>
          </div>
          <div className="space-y-3 rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Publish window</p>
            <p className="text-sm/6 text-zinc-950 dark:text-white">Friday, 10:00 CET</p>
            <AvatarGroup items={publishTeam.map((person) => ({ ...person }))} />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="space-y-6 rounded-2xl border border-zinc-950/10 bg-white/78 p-6 dark:border-white/10 dark:bg-zinc-950/68 lg:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge color="green">Ready for sign-off</Badge>
              <AvatarGroup items={reviewTeam.map((person) => ({ ...person }))} limit={4} />
            </div>

            <div className="space-y-4">
              <Heading level={2} className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                Spring cookware recommendations
              </Heading>
              <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
                The update narrows the shortlist to three pans, clarifies the maintenance trade-offs, and reframes regional availability notes where shipping remains inconsistent.
              </Text>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Lead editor</p>
                <div className="mt-3 flex items-center gap-3">
                  <AvatarGroup items={[publishTeam[0]]} size="lg" />
                  <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">Aline owns the final recommendation language.</p>
                </div>
              </article>
              <article className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Review circle</p>
                <div className="mt-3 space-y-3">
                  <AvatarGroup items={reviewTeam.map((person) => ({ ...person }))} limit={3} />
                  <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">Use the grouped pattern when the relationship matters more than each individual card.</p>
                </div>
              </article>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button color="green">Approve copy</Button>
              <Button outline>Request changes</Button>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Pattern note</p>
            <Text className="text-sm/6 text-zinc-600 dark:text-zinc-300">
              Avatar groups are best when the page needs to acknowledge a cluster of related people quickly. If each person needs their own actions or biography, break the group into fuller cards.
            </Text>
          </div>
        </div>
      </section>
    </GuidePage>
  ),
}