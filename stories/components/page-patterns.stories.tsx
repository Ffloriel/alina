import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from '../../components/badge'
import { Button } from '../../components/button'
import { Footer as FooterComponent } from '../../components/footer'
import { Heading } from '../../components/heading'
import { Input } from '../../components/input'
import { FullHumanLogo } from '../../components/logo'
import { Text } from '../../components/text'
import { expect, within } from 'storybook/test'
import { ArrowTrendIcon } from '../support/icons'
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
  title: 'Components/Page patterns',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Reusable page-level compositions built from the existing primitives so common surfaces like footers, section headers, newsletter bands, and FAQ blocks are documented as first-class Storybook patterns.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const categoryPatterns = [
  {
    title: 'Kitchen essentials',
    description: 'Editorial selection for cookware, knives, and durable prep tools.',
    tone: 'from-emerald-200/65 via-emerald-100/35 to-transparent dark:from-emerald-500/20 dark:via-emerald-400/10',
  },
  {
    title: 'Living materials',
    description: 'Lighting, textiles, and smaller objects that make a room feel considered.',
    tone: 'from-amber-200/65 via-orange-100/35 to-transparent dark:from-amber-500/20 dark:via-orange-400/10',
  },
  {
    title: 'Work setup',
    description: 'Objects for deeper focus, calmer desks, and fewer replacement cycles.',
    tone: 'from-sky-200/65 via-sky-100/35 to-transparent dark:from-sky-500/20 dark:via-sky-400/10',
  },
] as const

const faqRows = [
  {
    question: 'How much copy should sit above the fold?',
    answer: 'Enough to tell the reader what the page is for, why the recommendation is credible, and what action comes next.',
  },
  {
    question: 'When should a pattern become a component?',
    answer: 'When the same composition repeats often enough that consistency or implementation speed starts to matter more than one-off flexibility.',
  },
  {
    question: 'Why show a footer in Storybook?',
    answer: 'Because page furniture shapes the product experience just as much as buttons and inputs do, and it should be documented with the same rigor.',
  },
] as const

function SectionHeaderPattern() {
  return (
    <GuideDemoFrame>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="space-y-3">
          <Badge color="green">Pattern: section header</Badge>
          <Heading level={2} className="max-w-3xl text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">
            A short headline does the work. The surrounding rhythm makes it feel premium.
          </Heading>
          <Text className="max-w-2xl text-base/7 text-zinc-600 dark:text-zinc-300">
            Use one short paragraph, not three. Readers should understand the section in a few seconds and see the primary path without hunting for it.
          </Text>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button color="green">Explore the edit</Button>
          <Button outline>
            Read the rationale
            <ArrowTrendIcon data-slot="icon" className="stroke-current" />
          </Button>
        </div>
      </div>
    </GuideDemoFrame>
  )
}

function CategoryGridPattern() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {categoryPatterns.map((pattern, index) => (
        <div
          key={pattern.title}
          className={`overflow-hidden rounded-3xl border border-zinc-950/10 bg-white/80 shadow-sm dark:border-white/10 dark:bg-zinc-950/70 ${index === categoryPatterns.length - 1 ? 'md:col-span-2' : ''}`}
        >
          <div className={`h-40 bg-gradient-to-br ${pattern.tone}`} />
          <div className="space-y-4 p-6">
            <Heading level={3} className="text-2xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              {pattern.title}
            </Heading>
            <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">{pattern.description}</Text>
            <a className="inline-flex items-center gap-2 text-xs font-light uppercase tracking-[0.16em] text-zinc-500 underline-offset-4 transition-[color,text-decoration-color] hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-white" href="#footer-pattern">
              View recommendations
              <ArrowTrendIcon className="size-4 stroke-current" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

function NewsletterBandPattern() {
  return (
    <GuideDemoFrame>
      <div className="rounded-3xl border border-zinc-950/10 bg-[linear-gradient(135deg,rgba(74,222,128,0.10),rgba(255,255,255,0.92))] p-6 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(74,222,128,0.10),rgba(24,24,27,0.92))] lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <div className="space-y-3">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Pattern: newsletter callout</p>
            <Heading level={2} className="text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Get the next recommendation set without getting sold to.
            </Heading>
            <Text className="max-w-2xl text-base/7 text-zinc-600 dark:text-zinc-300">
              Promise one thing only: useful updates when the shortlist meaningfully changes. That keeps the sign-up aligned with the rest of the brand tone.
            </Text>
          </div>
          <div className="space-y-3">
            <Input aria-label="Email address" type="email" placeholder="Email address" />
            <div className="flex flex-wrap gap-3">
              <Button color="green">Join the newsletter</Button>
              <Button plain>Read the archive</Button>
            </div>
          </div>
        </div>
      </div>
    </GuideDemoFrame>
  )
}

function FaqBlockPattern() {
  return (
    <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-12 xl:gap-x-16">
      {faqRows.map((row, index) => (
        <div key={row.question} className={`border-t border-zinc-950/10 pt-6 dark:border-white/10 ${index === faqRows.length - 1 ? 'md:col-span-2' : ''}`}>
          <p className="text-sm font-medium text-zinc-950 dark:text-white">{row.question}</p>
          <p className="mt-3 text-sm/6 text-zinc-600 dark:text-zinc-300">{row.answer}</p>
        </div>
      ))}
    </div>
  )
}

function FooterPattern() {
  return <FooterComponent id="footer-pattern" className="mt-6" />
}

export const Overview: Story = {
  ...withStoryDescription('Review the current set of reusable page-level patterns as individual Storybook stories rather than a guide-only page.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Pattern library"
        title="Common page patterns live alongside the component stories"
        summary="These patterns are composed from the existing primitives, but they deserve dedicated Storybook coverage because they recur across marketing and editorial surfaces."
      >
        <SectionHeaderPattern />
      </GuideSection>

      <GuideSection
        eyebrow="Category grid"
        title="Editorial browse cards"
        summary="Use this layout when a page needs atmosphere without hiding the user’s next click."
      >
        <CategoryGridPattern />
      </GuideSection>

      <GuideSection
        eyebrow="Newsletter band"
        title="Email capture with the same editorial calm"
        summary="Keep the copy honest and the form minimal."
      >
        <NewsletterBandPattern />
      </GuideSection>

      <GuideSection
        eyebrow="FAQ block"
        title="Support content with the same system rhythm"
        summary="Utility content should still obey the same spacing and hierarchy as the rest of the product."
      >
        <FaqBlockPattern />
      </GuideSection>

      <GuideSection
        eyebrow="Footer"
        title="Footer pattern"
        summary="Page furniture is part of the system too, so it should be visible on its own."
      >
        <FooterPattern />
      </GuideSection>
    </GuidePage>
  ),
}

export const SectionHeader: Story = {
  ...withStoryDescription('A reusable section header pattern for campaign blocks, category introductions, and editorial landing sections.'),
  render: () => (
    <GuidePage>
      <GuideSection eyebrow="Pattern" title="Section header" summary="Lead with a clear promise, then give the user one obvious action.">
        <SectionHeaderPattern />
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('A short headline does the work. The surrounding rhythm makes it feel premium.')).toBeVisible()
  },
}

export const CategoryGrid: Story = {
  ...withStoryDescription('A three-up category merchandising pattern that balances atmosphere with explicit navigation cues.'),
  render: () => (
    <GuidePage>
      <GuideSection eyebrow="Pattern" title="Category grid" summary="Use this layout for browse surfaces that need mood without losing clarity.">
        <CategoryGridPattern />
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Kitchen essentials')).toBeVisible()
  },
}

export const NewsletterBand: Story = {
  ...withStoryDescription('A newsletter callout pattern that stays aligned with the product tone rather than drifting into generic conversion UI.'),
  render: () => (
    <GuidePage>
      <GuideSection eyebrow="Pattern" title="Newsletter band" summary="Treat email capture as an invitation, not a trap.">
        <NewsletterBandPattern />
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByLabelText('Email address')).toBeVisible()
  },
}

export const FaqBlock: Story = {
  ...withStoryDescription('A frequently asked questions pattern for support and trust-building sections.'),
  render: () => (
    <GuidePage>
      <GuideSection eyebrow="Pattern" title="FAQ block" summary="Keep utility content inside the same spacing and hierarchy system as the rest of the page.">
        <FaqBlockPattern />
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('How much copy should sit above the fold?')).toBeVisible()
  },
}

export const Footer: Story = {
  ...withStoryDescription('A standalone footer pattern so common site furniture can be reviewed independently from larger page examples.'),
  render: () => (
    <GuidePage>
      <GuideSection eyebrow="Pattern" title="Footer" summary="Close the page cleanly and give utility links an intentional home.">
        <FooterPattern />
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Subscribe on Full Human')).toBeVisible()
  },
}