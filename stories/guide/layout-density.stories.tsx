import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from '../../components/badge'
import { Button } from '../../components/button'
import { Heading } from '../../components/heading'
import { Text } from '../../components/text'
import { ArrowTrendIcon } from '../support/icons'
import { GuideCallout, GuideDemoFrame, GuideDoDont, GuideHero, GuidePage, GuideSection, GuideTable } from '../support/guide'

const meta = {
  title: 'Guide/Layout density',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const layoutRows = [
  ['Marketing and editorial pages', '1 or 2 columns', 'Keep one lead area and one supporting area at most.'],
  ['Sign-in and account entry pages', '1 or 2 columns', 'Pair the form with one brand or trust block, not multiple competing panels.'],
  ['Metrics and supporting summaries', '2-up pairs', 'If a third item exists, let it wrap or span full width instead of forcing a third lane.'],
  ['Dense reference content', '2 columns by default', 'Only exceed two columns when comparison itself is the primary task.'],
] as const

const exceptionRows = [
  ['Token swatches and icon matrices', 'Small repeated items can use tighter grids because each unit is visually lightweight.'],
  ['Data tables', 'Column-based comparison belongs in tables rather than in multi-column page layouts.'],
  ['Footer utility navigation', 'A footer can use three short-link columns plus a newsletter column because the labels are brief and the whole block reads as low-priority utility navigation rather than competing content.'],
] as const

const supportingNotes = [
  'Lead with one dominant message or task per viewport.',
  'Use the second column for support, proof, or action grouping.',
  'If three equal blocks compete at once, reduce, merge, or stagger them.',
] as const

export const Overview: Story = {
  render: () => (
    <GuidePage>
      <GuideHero
        eyebrow="Layout density"
        title={<>Most pages should resolve in one or two columns.</>}
        summary="Three equal columns make Full Human pages feel busier than they need to. The default stance is now simpler: one column when possible, two columns when helpful, and three or more only for explicit reference work."
      />

      <GuideSection
        eyebrow="Default rule"
        title="Two columns is the practical ceiling"
        summary="Narrative pages, marketing sections, sign-in flows, and most supporting content should not ask the reader to split attention across three equal lanes."
      >
        <GuideTable columns={['Context', 'Preferred structure', 'Reason']} rows={layoutRows} />
        <GuideCallout title="Working rule" tone="notice">
          If the layout asks the reader to compare three equal-weight areas at once, simplify it. Most Full Human pages should scan in one pass from a clear lead area into one supporting area.
        </GuideCallout>
        <GuideCallout title="Footer exception" tone="accent">
          Footers are the main exception: three short-link columns plus one newsletter column are acceptable because the labels are brief, highly scannable, and clearly secondary to the page content above.
        </GuideCallout>
      </GuideSection>

      <GuideSection
        eyebrow="Do and do not"
        title="Use columns to support reading order, not to multiply choices"
        summary="Columns are a pacing tool. Their job is to clarify hierarchy, not to create more simultaneous decisions."
      >
        <GuideDoDont
          title="Marketing and editorial surfaces"
          doText="Use one lead column for the story and one supporting column for proof, navigation, or next steps."
          dontText="Split the hero or supporting sections into three equal panels that all fight for first attention."
        />
        <GuideDoDont
          title="Account and entry flows"
          doText="Pair the form with one brand, reassurance, or help surface so the task still feels focused."
          dontText="Surround the form with multiple side panels, stacked promos, or a third competing information lane."
        />
      </GuideSection>

      <GuideSection
        eyebrow="Live example"
        title="A two-column page still has room for atmosphere"
        summary="This composition keeps one clear lead area and one supporting rail. The page feels deliberate without becoming visually crowded."
      >
        <GuideDemoFrame>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_20rem] lg:items-end">
            <div className="space-y-5">
              <Badge color="green">Two-column default</Badge>
              <div className="space-y-4">
                <Heading level={2} className="max-w-3xl text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                  One dominant message. One supporting area. Less visual negotiation.
                </Heading>
                <Text className="max-w-2xl text-base/7 text-zinc-600 dark:text-zinc-300">
                  The main column carries the story and action. The supporting column handles notes, trust, or lightweight guidance. That is usually enough for Full Human pages.
                </Text>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border-t border-zinc-950/10 pt-4 dark:border-white/10">
                  <p className="text-sm font-medium text-zinc-950 dark:text-white">Lead column</p>
                  <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">Story, hierarchy, and the primary action stay together.</p>
                </div>
                <div className="border-t border-zinc-950/10 pt-4 dark:border-white/10">
                  <p className="text-sm font-medium text-zinc-950 dark:text-white">Supporting column</p>
                  <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">Proof points, secondary navigation, or concise guidance sit nearby without competing.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button color="green">
                  Keep the page focused
                  <ArrowTrendIcon data-slot="icon" className="stroke-current" />
                </Button>
                <Button outline>See the rule in the marketing page</Button>
              </div>
            </div>

            <aside className="space-y-3 border-l border-zinc-950/10 pl-6 dark:border-white/10">
              <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Supporting notes</p>
              <ul className="space-y-3 text-sm/6 text-zinc-600 dark:text-zinc-300">
                {supportingNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </aside>
          </div>
        </GuideDemoFrame>
        <GuideTable columns={['Exception', 'When it is acceptable']} rows={exceptionRows} />
      </GuideSection>
    </GuidePage>
  ),
}