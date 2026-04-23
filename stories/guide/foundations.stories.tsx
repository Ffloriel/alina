import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from '../../components/badge'
import { Button } from '../../components/button'
import {
  accentScale,
  animationSpecs,
  borderRadiusScale,
  borderStyles,
  colorStateExamples,
  colorUsageRules,
  darkModeSurfaceMap,
  emojiUsageRows,
  fontWeights,
  gapPatterns,
  gridPatterns,
  headerNavigationSpec,
  iconSpecifications,
  layoutWidths,
  lineHeights,
  microInteractions,
  motionPrinciples,
  neutralScale,
  opacityPatterns,
  pagePadding,
  sectionSpacingPattern,
  semanticColors,
  shadowStates,
  spacingScale,
  standardIcons,
  textTransforms,
  trackingScale,
  transitionSpecs,
  typeScale,
  typefaceRoles,
  tierColors,
  transparentBackgrounds,
  typographyGuidelines,
  selectionCssSnippet,
  fadeInCssSnippet,
} from '../support/design-system-data'
import {
  GuideCallout,
  GuideCard,
  GuideCardGrid,
  GuideCodeBlock,
  GuideDemoFrame,
  GuideHero,
  GuideList,
  GuidePage,
  GuideSection,
  GuideTable,
} from '../support/guide'

const meta = {
  title: 'Guide/Foundations',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const typographyComponentSnippet = `<h2 class="text-xs font-light tracking-[0.2em] uppercase text-neutral-400">
  Section title
</h2>

<h1 class="text-4xl lg:text-5xl font-extralight tracking-tight">
  Page title
</h1>

<h1 class="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight">
  Hero heading
</h1>

<p class="text-base font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
  Body paragraph text goes here.
</p>

<span class="text-xs font-light tracking-[0.15em] uppercase text-neutral-400">
  Label text
</span>

<span class="font-mono text-sm">EUR 49.99</span>`

export const Foundations: Story = {
  render: () => (
    <GuidePage>
      <GuideHero
        eyebrow="Foundations"
        title={<>A restrained visual language with enough range to scale.</>}
        summary="The original specification defines a calm brand accent, an extensive neutral system, editorial typography, generous spacing, sharp structural surfaces, and subtle motion. This page turns those rules into a quick operational reference."
      />

      <GuideSection
        eyebrow="Color"
        title="Neutrals do the structural work. Accent and semantic colors carry meaning."
        summary="Most of the interface should remain neutral. Accent green is reserved for hierarchy and brand emphasis, while semantic colors communicate product state."
      >
        <GuideCardGrid columns={4}>
          {accentScale.slice(0, 4).map(([token, tailwindClass, hex, usage]) => (
            <GuideCard key={token} title={token} eyebrow={tailwindClass} tone="accent">
              <div className="h-20 rounded-2xl border border-black/5" style={{ backgroundColor: hex }} />
              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{hex}</p>
              <p>{usage}</p>
            </GuideCard>
          ))}
        </GuideCardGrid>
        <GuideTable columns={['Accent token', 'Tailwind', 'Hex', 'Usage']} rows={accentScale} />
        <GuideTable columns={['Neutral token', 'Tailwind', 'Hex', 'Usage']} rows={neutralScale} />
        <GuideTable columns={['Semantic', 'Tailwind', 'Hex', 'Usage']} rows={semanticColors} />
        <GuideTable columns={['State', 'Light mode', 'Dark mode']} rows={colorStateExamples} />
        <GuideTable columns={['Tier', 'Light mode', 'Dark mode']} rows={tierColors} />
        <GuideTable columns={['Element', 'Light mode', 'Dark mode']} rows={darkModeSurfaceMap} />
        <GuideCardGrid>
          {colorUsageRules.map(([title, doText, dontText]) => (
            <GuideCard key={title} title={title} tone="notice">
              <p>
                <strong>Do:</strong> {doText}
              </p>
              <p>
                <strong>Do not:</strong> {dontText}
              </p>
            </GuideCard>
          ))}
        </GuideCardGrid>
        <GuideCallout title="Color rule" tone="notice">
          Keep brand and semantic colors distinct. Success is emerald, not the hero accent. Structural borders and body
          copy should stay neutral.
        </GuideCallout>
        <GuideCodeBlock language="css" code={selectionCssSnippet} />
      </GuideSection>

      <GuideSection
        eyebrow="Typography"
        title="Editorial lightness with strong scanning cues"
        summary="Geist handles the system’s core reading surfaces, Geist Mono carries technical content, and Instrument Serif is used sparingly for expressive moments."
      >
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <GuideDemoFrame>
            <div className="space-y-6">
              <p className="text-xs font-light uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Type preview</p>
              <p className="[font-family:var(--font-display)] text-5xl leading-none tracking-tight text-zinc-950 dark:text-white">
                Curated essentials for modern living.
              </p>
              <p className="max-w-2xl text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-300">
                Body copy should feel calm, direct, and readable. Labels and navigation use uppercase with generous
                tracking to build rhythm without relying on heavier weights.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button color="green">Explore categories</Button>
                <Badge color="zinc">tracking-[0.15em]</Badge>
              </div>
            </div>
          </GuideDemoFrame>
          <GuideCard title="Typography rules" tone="accent">
            <ul className="space-y-3 text-sm/6 text-zinc-600 dark:text-zinc-300">
              <li>Use the defined type scale. Do not invent custom sizes.</li>
              <li>Default to font-light for body copy.</li>
              <li>Keep paragraphs between 50 and 80 characters wide.</li>
              <li>Always pair uppercase labels with at least tracking-[0.1em].</li>
            </ul>
          </GuideCard>
        </div>
        <GuideTable columns={['Typeface', 'Role', 'CSS variable', 'Fallbacks']} rows={typefaceRoles} />
        <GuideTable columns={['Token', 'Size', 'Usage']} rows={typeScale} />
        <GuideTable columns={['Weight', 'Numeric value', 'Usage']} rows={fontWeights} />
        <GuideTable columns={['Tracking', 'Value', 'Usage']} rows={trackingScale} />
        <GuideTable columns={['Context', 'Multiplier', 'Tailwind', 'Usage']} rows={lineHeights} />
        <GuideTable columns={['Transform', 'Tailwind', 'Usage']} rows={textTransforms} />
        <GuideCodeBlock language="html" code={typographyComponentSnippet} />
        <GuideCard title="Typography usage guidelines" tone="accent">
          <GuideList items={typographyGuidelines} />
        </GuideCard>
      </GuideSection>

      <GuideSection
        eyebrow="Spacing and layout"
        title="Generous spacing is part of the brand voice"
        summary="Full Human uses Tailwind’s 4px-based spacing scale, but applies it with noticeably more vertical room than a typical application UI."
      >
        <GuideTable columns={['Token', 'Value', 'Common usage']} rows={spacingScale} />
        <GuideTable columns={['Max width', 'Value', 'Usage']} rows={layoutWidths} />
        <GuideTable columns={['Context', 'Tailwind', 'Usage']} rows={pagePadding} />
        <GuideTable columns={['Grid', 'Tailwind', 'Usage']} rows={gridPatterns} />
        <GuideTable columns={['Context', 'Tailwind', 'Value']} rows={gapPatterns} />
        <GuideTable columns={['Property', 'Value']} rows={headerNavigationSpec} />
        <GuideCard title="Section spacing pattern" tone="accent">
          <GuideList items={sectionSpacingPattern} />
        </GuideCard>
      </GuideSection>

      <GuideSection
        eyebrow="Object styles"
        title="Corners stay restrained and deliberate"
        summary="Most surfaces stay in a tight 4px to 8px radius range. Full rounding is reserved for truly circular controls such as avatars, radios, switches, and progress dots."
      >
        <GuideTable columns={['Token', 'Value', 'Usage']} rows={borderRadiusScale} />
        <GuideTable columns={['Context', 'Tailwind', 'Usage']} rows={borderStyles} />
        <GuideTable columns={['State', 'Tailwind', 'Usage']} rows={shadowStates} />
        <GuideTable columns={['Element', 'Tailwind', 'Usage']} rows={transparentBackgrounds} />
        <GuideTable columns={['Context', 'Tailwind', 'Usage']} rows={opacityPatterns} />
      </GuideSection>

      <GuideSection
        eyebrow="Iconography"
        title="Icons should stay minimal, legible, and supportive"
        summary="The icon system is intentionally restrained: outline icons, round joins, small sizes, and text labels whenever meaning might otherwise be ambiguous."
      >
        <GuideTable columns={['Property', 'Value']} rows={iconSpecifications} />
        <GuideTable columns={['Icon', 'SVG path', 'Usage']} rows={standardIcons} />
        <GuideTable columns={['Context', 'Example', 'Note']} rows={emojiUsageRows} />
      </GuideSection>

      <GuideSection
        eyebrow="Motion"
        title="Motion exists to clarify state change, not to decorate it"
        summary="The system uses restrained timing, short travel distances, and explicit reduced-motion fallbacks."
      >
        <GuideTable columns={['Property', 'Duration', 'Easing', 'Tailwind', 'Usage']} rows={transitionSpecs} />
        <GuideTable columns={['Animation', 'Duration', 'Easing', 'Usage']} rows={animationSpecs} />
        <GuideTable columns={['Element', 'Behavior', 'Tailwind']} rows={microInteractions} />
        <GuideCard title="Motion principles" tone="accent">
          <GuideList items={motionPrinciples} />
        </GuideCard>
        <GuideCodeBlock language="css" code={fadeInCssSnippet} />
      </GuideSection>
    </GuidePage>
  ),
}