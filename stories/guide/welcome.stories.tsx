import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from '../../components/badge'
import { Button } from '../../components/button'
import { Heading } from '../../components/heading'
import { Text } from '../../components/text'
import { componentCatalog, principleCards } from '../support/design-system-data'
import { GuideCard, GuideCardGrid, GuideCallout, GuideHero, GuidePage, GuideSection } from '../support/guide'

const meta = {
  title: 'Guide/Welcome',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <GuidePage>
      <GuideHero
        eyebrow="Alina design system"
        title={<>Alina: Full Human design system</>}
        summary={
          <>
            Foundations, language, accessibility, patterns, and component behavior live together here.
            The guide and the preserved component library stay aligned so the system is easy to review, use, and evolve.
          </>
        }
        actions={
          <>
            <Button color="green">Start with the guide</Button>
            <Button outline>Browse the components</Button>
          </>
        }
        aside={
          <div className="space-y-4">
            <Badge color="green">Version 1.0.0</Badge>
            <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">
              Built on Next.js 16, React 19, Tailwind CSS 4, and the latest Storybook 10 framework package for Next.js.
            </p>
            <div className="grid gap-3">
              <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-4 dark:border-white/10 dark:bg-zinc-900/60">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Core principles</p>
                <p className="mt-1 text-lg font-medium text-zinc-950 dark:text-white">{principleCards.length}</p>
              </div>
              <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-4 dark:border-white/10 dark:bg-zinc-900/60">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Component groups</p>
                <p className="mt-1 text-lg font-medium text-zinc-950 dark:text-white">{componentCatalog.length}</p>
              </div>
            </div>
          </div>
        }
      />

      <GuideSection
        eyebrow="What this guide covers"
        title="From philosophy to shipped UI"
        summary="The structure mirrors the original design-system document so design decisions, writing rules, and implementation examples stay aligned."
      >
        <GuideCardGrid>
          <GuideCard title="Principles" eyebrow="Why" tone="accent">
            <p>Clear, human, and purposeful are the three filters every screen and component should pass.</p>
          </GuideCard>
          <GuideCard title="Foundations" eyebrow="How it looks">
            <p>Color, spacing, object styles, iconography, and motion define the shared visual language.</p>
          </GuideCard>
          <GuideCard title="Layout density" eyebrow="How it flows">
            <p>Most pages now stop at one or two columns so hierarchy stays calm and scanning stays immediate.</p>
          </GuideCard>
          <GuideCard title="Fonts" eyebrow="How it reads">
            <p>Geist, Instrument Serif, and Geist Mono each have a narrow role so the system stays readable and consistent.</p>
          </GuideCard>
          <GuideCard title="Content" eyebrow="How it sounds">
            <p>Voice, tone, grammar, and inclusive writing rules keep the experience direct, warm, and trustworthy.</p>
          </GuideCard>
          <GuideCard title="Accessibility" eyebrow="How it works">
            <p>WCAG-driven contrast, semantics, keyboard behavior, reduced motion, and responsive rules are built in.</p>
          </GuideCard>
          <GuideCard title="Components" eyebrow="What ships">
            <p>Live stories show how the preserved primitives combine into product-ready interfaces.</p>
          </GuideCard>
          <GuideCard title="Page examples" eyebrow="How it lands">
            <p>Concrete marketing, utility, and sign-in pages prove the system with real hierarchy, branding, and task flows.</p>
          </GuideCard>
          <GuideCard title="Tokens" eyebrow="What scales">
            <p>Semantic token mapping turns Tailwind values into a system language that can scale beyond the first version.</p>
          </GuideCard>
        </GuideCardGrid>
      </GuideSection>

      <GuideSection
        eyebrow="Implementation stance"
        title="Guide and implementation"
        summary="The guide and the component stories replace the old split between a narrative markdown spec and an implementation library."
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="rounded-3xl border border-zinc-950/10 bg-white/85 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-950/70">
            <div className="space-y-4">
              <Heading level={2} className="text-3xl font-extralight tracking-tight">
                Practical result
              </Heading>
              <Text className="max-w-2xl text-base/7">
                Designers get a readable design-system guide. Engineers get concrete implementations. The team avoids the
                usual split between an aspirational document and a drifting component library because the guide and the
                live stories move together.
              </Text>
            </div>
          </div>
          <GuideCallout title="Guiding rule" tone="notice">
            If a component story and a guide rule disagree, update them together immediately so the documented rule and
            the live implementation stay coupled.
          </GuideCallout>
        </div>
      </GuideSection>
    </GuidePage>
  ),
}
