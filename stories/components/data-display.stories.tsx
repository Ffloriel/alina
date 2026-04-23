import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Avatar as AvatarComponent } from '../../components/avatar'
import { DescriptionDetails, DescriptionList as DescriptionListComponent, DescriptionTerm } from '../../components/description-list'
import { Divider as DividerComponent } from '../../components/divider'
import { Heading as HeadingComponent, Subheading } from '../../components/heading'
import { Table as TableComponent, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/table'
import { Code, Strong, Text as TextComponent, TextLink } from '../../components/text'
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
  title: 'Components/Data display',
  component: TableComponent,
  subcomponents: {
    Heading: HeadingComponent,
    Text: TextComponent,
    Avatar: AvatarComponent,
    DescriptionList: DescriptionListComponent,
    Divider: DividerComponent,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Display primitives for hierarchy, identity cues, fact pairs, separators, and comparison tables that reward scanning.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type HeadingPlaygroundArgs = {
  title: string
  subheading: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}
type TextPlaygroundArgs = {
  body: string
  emphasis: string
  codeToken: string
  linkLabel: string
  href: string
}
type AvatarPlaygroundArgs = {
  initials: string
  alt: string
  square: boolean
}
type DescriptionListPlaygroundArgs = {
  material: string
  maintenance: string
  bestFor: string
  priceBand: string
}
type DividerPlaygroundArgs = {
  soft: boolean
  before: string
  after: string
}
type TablePlaygroundArgs = {
  striped: boolean
  grid: boolean
  dense: boolean
  bleed: boolean
}

function HeadingExamples() {
  return (
    <GuideSection
      eyebrow="Headings"
      title="Headings establish hierarchy without carrying ornamental weight"
      summary="Use headings to create scanning rhythm. Pair them with subheadings when readers need just enough context before committing to a section."
    >
      <GuideDemoFrame>
        <div className="space-y-4">
          <HeadingComponent level={1} className="text-5xl font-extralight tracking-tight">
            Durable kitchen essentials
          </HeadingComponent>
          <Subheading>Editorial recommendation</Subheading>
          <HeadingComponent level={2} className="text-3xl font-extralight tracking-tight">
            Why this tier works
          </HeadingComponent>
        </div>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function TextExamples() {
  return (
    <GuideSection
      eyebrow="Text"
      title="Text primitives should carry tone and semantics without shouting"
      summary="The text layer handles body copy, inline emphasis, technical tokens, and quiet links while keeping reading rhythm steady."
    >
      <GuideDemoFrame>
        <TextComponent className="max-w-2xl text-base/7">
          Use <Strong>strong emphasis</Strong> for the few words that matter most. Reserve <Code>Code</Code> for tokens,
          pricing logic, or implementation details, and keep <TextLink href="#">text links</TextLink> quiet enough that the
          surrounding sentence still does most of the work.
        </TextComponent>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function AvatarExamples() {
  return (
    <GuideSection
      eyebrow="Avatars"
      title="Avatars should add identity cues, not decoration"
      summary="Use avatars for authorship, ownership, or accountability when names alone are not enough."
    >
      <GuideDemoFrame>
        <div className="flex flex-wrap items-center gap-4">
          <AvatarComponent initials="FH" className="size-12 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" />
          <AvatarComponent initials="AB" className="size-14 bg-zinc-950/5 text-zinc-700 dark:bg-white/10 dark:text-zinc-200" />
          <AvatarComponent initials="ML" className="size-16 bg-amber-500/10 text-amber-700 dark:text-amber-300" />
        </div>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function DescriptionListExamples() {
  return (
    <GuideSection
      eyebrow="Description lists"
      title="Description lists work when the user needs compact fact pairs"
      summary="Use them for specs, attributes, or metadata where the label-value structure matters more than narrative flow."
    >
      <GuideDemoFrame>
        <DescriptionListComponent>
          <DescriptionTerm>Material</DescriptionTerm>
          <DescriptionDetails>3-layer stainless steel</DescriptionDetails>
          <DescriptionTerm>Maintenance</DescriptionTerm>
          <DescriptionDetails>Hand wash and dry immediately</DescriptionDetails>
          <DescriptionTerm>Best for</DescriptionTerm>
          <DescriptionDetails>Daily use when low-fuss upkeep matters most</DescriptionDetails>
          <DescriptionTerm>Price band</DescriptionTerm>
          <DescriptionDetails>
            <Code>EUR 80–120</Code>
          </DescriptionDetails>
        </DescriptionListComponent>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function DividerExamples() {
  return (
    <GuideSection
      eyebrow="Dividers"
      title="Dividers separate ideas when spacing alone stops being enough"
      summary="Prefer whitespace first. Use dividers when adjacent content blocks start to blur together or need a stronger transition."
    >
      <GuideDemoFrame>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-zinc-950 dark:text-white">Primary recommendation</p>
            <p className="mt-1 text-sm/6 text-zinc-500 dark:text-zinc-400">The strongest all-round choice for most households.</p>
          </div>
          <DividerComponent />
          <div>
            <p className="text-sm font-medium text-zinc-950 dark:text-white">Alternative route</p>
            <p className="mt-1 text-sm/6 text-zinc-500 dark:text-zinc-400">Better when maintenance tolerance is low and durability matters most.</p>
          </div>
          <DividerComponent soft />
          <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">Use the soft variant when the separation should stay quieter.</p>
        </div>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function TableExamples() {
  return (
    <GuideSection
      eyebrow="Tables"
      title="Tables should reward scanning, not force re-reading"
      summary="Use tables when comparisons matter and each row answers the same question structure."
    >
      <GuideDemoFrame>
        <TableComponent striped grid>
          <TableHead>
            <tr>
              <TableHeader>Tier</TableHeader>
              <TableHeader>Best for</TableHeader>
              <TableHeader>Trade-off</TableHeader>
            </tr>
          </TableHead>
          <TableBody>
            <TableRow href="#" title="Budget tier details">
              <TableCell>
                <Strong>Budget</Strong>
              </TableCell>
              <TableCell>Reliable essentials with strong value.</TableCell>
              <TableCell>Finishing and tactility are more restrained.</TableCell>
            </TableRow>
            <TableRow href="#" title="Smart value tier details">
              <TableCell>
                <Strong>Smart value</Strong>
              </TableCell>
              <TableCell>Best balance of cost, longevity, and day-to-day performance.</TableCell>
              <TableCell>May skip luxury-grade materials or detailing.</TableCell>
            </TableRow>
            <TableRow href="#" title="Premium tier details">
              <TableCell>
                <Strong>Premium</Strong>
              </TableCell>
              <TableCell>Best when premium materials materially improve the experience.</TableCell>
              <TableCell>Price only makes sense when the use case is consistent and demanding.</TableCell>
            </TableRow>
          </TableBody>
        </TableComponent>
      </GuideDemoFrame>
    </GuideSection>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Survey the content and data layer that shapes reading rhythm, metadata presentation, and structured comparison.'),
  args: {
    children: null,
  },
  render: () => (
    <GuidePage>
      <HeadingExamples />
      <TextExamples />
      <AvatarExamples />
      <DescriptionListExamples />
      <DividerExamples />
      <TableExamples />
    </GuidePage>
  ),
}

export const Heading: StoryObj<HeadingPlaygroundArgs> = {
  ...withStoryDescription('Use headings and subheadings to create clear scanning rhythm before the surrounding content does any heavier work.'),
  args: {
    title: 'Durable kitchen essentials',
    subheading: 'Editorial recommendation',
    level: 2,
  } satisfies HeadingPlaygroundArgs,
  argTypes: {
    title: { control: 'text' },
    subheading: { control: 'text' },
    level: { control: 'inline-radio', options: [1, 2, 3, 4, 5, 6] },
  },
  render: ({ title, subheading, level }: HeadingPlaygroundArgs) => (
    <GuidePage>
      <GuideSection eyebrow="Controls" title="Heading playground" summary="Adjust the semantic level and supporting subheading text from the controls panel.">
        <GuideDemoFrame>
          <div className="space-y-4">
            <HeadingComponent level={level} className="text-5xl font-extralight tracking-tight">
              {title}
            </HeadingComponent>
            <Subheading>{subheading}</Subheading>
          </div>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.title)).toBeVisible()
  },
}

export const Text: StoryObj<TextPlaygroundArgs> = {
  ...withStoryDescription('Review body copy, emphasis, inline code, and quiet text-link usage within the shared editorial rhythm.'),
  args: {
    body: 'Use the text primitives to maintain an editorial rhythm that stays readable without over-styling the interface.',
    emphasis: 'editorial rhythm',
    codeToken: 'EUR 80–120',
    linkLabel: 'Read the methodology',
    href: '#',
  },
  argTypes: {
    body: { control: 'text' },
    emphasis: { control: 'text' },
    codeToken: { control: 'text' },
    linkLabel: { control: 'text' },
    href: { control: 'text' },
  },
  render: ({ body, emphasis, codeToken, linkLabel, href }) => (
    <GuidePage>
      <GuideSection eyebrow="Controls" title="Text playground" summary="Tune the body copy, inline emphasis, code token, and text-link copy from the controls panel.">
        <GuideDemoFrame>
          <TextComponent className="max-w-2xl text-base/7">
            {body} <Strong>{emphasis}</Strong>. Compare pricing with <Code>{codeToken}</Code> and <TextLink href={href}>{linkLabel}</TextLink> when additional detail is needed.
          </TextComponent>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.linkLabel)).toBeVisible()
  },
}

export const Avatar: StoryObj<AvatarPlaygroundArgs> = {
  ...withStoryDescription('Avatars add lightweight identity and ownership cues when names alone are not enough.'),
  args: {
    initials: 'FH',
    alt: 'Full Human',
    square: false,
  },
  argTypes: {
    initials: { control: 'text' },
    alt: { control: 'text' },
    square: { control: 'boolean' },
  },
  render: ({ initials, alt, square }) => (
    <GuidePage>
      <GuideSection eyebrow="Controls" title="Avatar playground" summary="Adjust the identity cue and shape treatment for the avatar primitive.">
        <GuideDemoFrame>
          <AvatarComponent initials={initials} alt={alt} square={square} className="size-16 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" />
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTitle(args.alt)).toBeVisible()
  },
}

export const DescriptionList: StoryObj<DescriptionListPlaygroundArgs> = {
  ...withStoryDescription('Description lists are best for compact fact pairs where label-to-value structure matters more than narrative flow.'),
  args: {
    material: '3-layer stainless steel',
    maintenance: 'Hand wash and dry immediately',
    bestFor: 'Daily use when low-fuss upkeep matters most',
    priceBand: 'EUR 80–120',
  },
  argTypes: {
    material: { control: 'text' },
    maintenance: { control: 'text' },
    bestFor: { control: 'text' },
    priceBand: { control: 'text' },
  },
  render: ({ material, maintenance, bestFor, priceBand }) => (
    <GuidePage>
      <GuideSection eyebrow="Controls" title="Description list playground" summary="Swap the fact-pair content to see how the definition layout holds up across different metadata values.">
        <GuideDemoFrame>
          <DescriptionListComponent>
            <DescriptionTerm>Material</DescriptionTerm>
            <DescriptionDetails>{material}</DescriptionDetails>
            <DescriptionTerm>Maintenance</DescriptionTerm>
            <DescriptionDetails>{maintenance}</DescriptionDetails>
            <DescriptionTerm>Best for</DescriptionTerm>
            <DescriptionDetails>{bestFor}</DescriptionDetails>
            <DescriptionTerm>Price band</DescriptionTerm>
            <DescriptionDetails>
              <Code>{priceBand}</Code>
            </DescriptionDetails>
          </DescriptionListComponent>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.material)).toBeVisible()
  },
}

export const Divider: StoryObj<DividerPlaygroundArgs> = {
  ...withStoryDescription('Use dividers when whitespace alone stops being enough to separate adjacent ideas or content blocks.'),
  args: {
    soft: false,
    before: 'Primary recommendation',
    after: 'Alternative route',
  },
  argTypes: {
    soft: { control: 'boolean' },
    before: { control: 'text' },
    after: { control: 'text' },
  },
  render: ({ soft, before, after }) => (
    <GuidePage>
      <GuideSection eyebrow="Controls" title="Divider playground" summary="Toggle the divider strength while changing the adjacent copy blocks it separates.">
        <GuideDemoFrame>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-zinc-950 dark:text-white">{before}</p>
            </div>
            <DividerComponent soft={soft} />
            <div>
              <p className="text-sm font-medium text-zinc-950 dark:text-white">{after}</p>
            </div>
          </div>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.before)).toBeVisible()
    await expect(canvas.getByText(args.after)).toBeVisible()
  },
}

export const Table: StoryObj<TablePlaygroundArgs> = {
  ...withStoryDescription('Use tables when every row answers the same question structure and comparison is more important than narrative sequence.'),
  args: {
    striped: true,
    grid: true,
    dense: false,
    bleed: false,
  },
  argTypes: {
    striped: { control: 'boolean' },
    grid: { control: 'boolean' },
    dense: { control: 'boolean' },
    bleed: { control: 'boolean' },
  },
  render: ({ striped, grid, dense, bleed }) => (
    <GuidePage>
      <GuideSection eyebrow="Controls" title="Table playground" summary="Toggle density, grid lines, striping, and edge bleed to review how the comparison table behaves across density modes.">
        <GuideDemoFrame>
          <TableComponent striped={striped} grid={grid} dense={dense} bleed={bleed}>
            <TableHead>
              <tr>
                <TableHeader>Tier</TableHeader>
                <TableHeader>Best for</TableHeader>
                <TableHeader>Trade-off</TableHeader>
              </tr>
            </TableHead>
            <TableBody>
              <TableRow href="#" title="Budget tier details">
                <TableCell>
                  <Strong>Budget</Strong>
                </TableCell>
                <TableCell>Reliable essentials with strong value.</TableCell>
                <TableCell>Finishing and tactility are more restrained.</TableCell>
              </TableRow>
              <TableRow href="#" title="Smart value tier details">
                <TableCell>
                  <Strong>Smart value</Strong>
                </TableCell>
                <TableCell>Best balance of cost, longevity, and day-to-day performance.</TableCell>
                <TableCell>May skip luxury-grade materials or detailing.</TableCell>
              </TableRow>
            </TableBody>
          </TableComponent>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('table')).toBeVisible()
  },
}