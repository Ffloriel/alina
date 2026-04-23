import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { typefaceRoles } from '../support/design-system-data'
import { GuideCallout, GuideCard, GuideCardGrid, GuideDemoFrame, GuideHero, GuidePage, GuideSection, GuideTable } from '../support/guide'

const meta = {
  title: 'Guide/Fonts',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const usageRows = [
  ['Geist', 'Default UI and reading surfaces', 'Guide pages, component stories, navbars, buttons, labels, forms, and most headings'],
  ['Instrument Serif', 'Editorial emphasis only', 'Hero moments, pull quotes, and occasional campaign-style accents'],
  ['Geist Mono', 'Technical or reference content', 'Code blocks, token references, specs, prices, and structured data snippets'],
] as const

const languageSamples = [
  {
    language: 'English',
    sans: 'Choose fewer, better things.',
    display: 'A quieter way to choose well.',
    mono: 'EUR 129.00 · FH-014',
  },
  {
    language: 'French',
    sans: 'Choisir moins, mais mieux.',
    display: 'Une façon plus calme de bien choisir.',
    mono: 'EUR 129,00 · FH-014',
  },
  {
    language: 'German',
    sans: 'Weniger Dinge, besser ausgewählt.',
    display: 'Eine ruhigere Art, gut zu wählen.',
    mono: 'EUR 129,00 · FH-014',
  },
  {
    language: 'Spanish',
    sans: 'Elegir menos cosas, pero mejores.',
    display: 'Una forma más serena de elegir bien.',
    mono: 'EUR 129,00 · FH-014',
  },
] as const

export const Overview: Story = {
  render: () => (
    <GuidePage>
      <GuideHero
        eyebrow="Fonts"
        title={<>Three font roles are enough when each one has a clear job.</>}
        summary="Full Human uses Geist for most reading and interface work, Instrument Serif for selective editorial emphasis, and Geist Mono for technical or reference content. The system works when those roles stay disciplined."
      />

      <GuideSection
        eyebrow="Roles"
        title="When to use each typeface"
        summary="The font system is intentionally narrow. Most surfaces should stay in Geist. Instrument Serif should be the exception, not the default."
      >
        <GuideTable columns={['Typeface', 'Primary role', 'Use it for']} rows={usageRows} />
        <GuideTable columns={['Typeface', 'Role', 'CSS variable', 'Fallbacks']} rows={typefaceRoles} />
        <GuideCardGrid columns={2}>
          <GuideCard title="Geist" eyebrow="Default sans" tone="accent">
            <p>Use for nearly every page, all component documentation, interface labels, buttons, body copy, and the majority of headings.</p>
          </GuideCard>
          <GuideCard title="Instrument Serif" eyebrow="Display accent">
            <p>Use when the page needs an editorial pause or a more expressive single moment. Do not use it for dense interface copy.</p>
          </GuideCard>
          <GuideCard title="Geist Mono" eyebrow="Reference layer">
            <p>Use only when the content is technical, tabular, or token-like enough that precision matters more than atmosphere.</p>
          </GuideCard>
        </GuideCardGrid>
      </GuideSection>

      <GuideSection
        eyebrow="Scale"
        title="See the selected fonts at different sizes"
        summary="This specimen view is the fastest way to check hierarchy before reaching for ad hoc font overrides."
      >
        <GuideDemoFrame>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Geist</p>
              <p className="font-sans text-sm text-zinc-600 dark:text-zinc-300">text-sm for compact UI and support copy</p>
              <p className="font-sans text-base text-zinc-950 dark:text-white">text-base for standard reading rhythm</p>
              <p className="font-sans text-2xl font-medium text-zinc-950 dark:text-white">text-2xl for section headings</p>
              <p className="font-sans text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">text-5xl for hero headings</p>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Instrument Serif</p>
              <p className="[font-family:var(--font-display)] text-2xl tracking-tight text-zinc-950 dark:text-white">Use sparingly for editorial contrast.</p>
              <p className="[font-family:var(--font-display)] text-4xl tracking-tight text-zinc-950 dark:text-white">One elegant phrase can carry a whole hero.</p>
              <p className="[font-family:var(--font-display)] text-6xl leading-none tracking-tight text-zinc-950 dark:text-white">Quiet, deliberate, human.</p>
            </div>
            <div className="space-y-4 md:col-span-2">
              <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Geist Mono</p>
              <p className="font-mono text-sm text-zinc-600 dark:text-zinc-300">text-sm for inline tokens and compact specs</p>
              <p className="font-mono text-base text-zinc-950 dark:text-white">SKU FH-014 · EUR 129.00</p>
              <p className="font-mono text-lg text-zinc-950 dark:text-white">--color-bg-page: #ffffff</p>
            </div>
          </div>
        </GuideDemoFrame>
      </GuideSection>

      <GuideSection
        eyebrow="Language samples"
        title="Check how the system reads across multiple languages"
        summary="The current font loading is tuned for the Latin-script content this guide currently demonstrates. Use this view to catch spacing, accent marks, and rhythm issues before rollout."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {languageSamples.map((sample) => (
            <div key={sample.language} className="space-y-4 border-t border-zinc-950/10 pt-5 dark:border-white/10">
              <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">{sample.language}</p>
              <p className="font-sans text-2xl font-extralight tracking-tight text-zinc-950 dark:text-white">{sample.sans}</p>
              <p className="[font-family:var(--font-display)] text-4xl tracking-tight text-zinc-950 dark:text-white">{sample.display}</p>
              <p className="font-mono text-sm text-zinc-600 dark:text-zinc-300">{sample.mono}</p>
            </div>
          ))}
        </div>
        <GuideCallout title="Language support note" tone="notice">
          These samples intentionally stay within languages covered by the current Latin-focused font loading. If the product needs broader script coverage, add the appropriate font files before treating those languages as first-class.
        </GuideCallout>
      </GuideSection>
    </GuidePage>
  ),
}