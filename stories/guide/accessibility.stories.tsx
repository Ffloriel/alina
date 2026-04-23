import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  accessibilityChecklist,
  accessibilityContrast,
  breakpoints,
  currentCssVariableRows,
  focusCssSnippet,
  keyboardNavigationRules,
  reducedMotionCssSnippet,
  responsiveNavigation,
  responsivePatterns,
  screenReaderRules,
  semanticHtmlRules,
  semanticTokens,
  tokenArchitecture,
  tokenNamingExamples,
} from '../support/design-system-data'
import { GuideCallout, GuideCodeBlock, GuideDemoFrame, GuideHero, GuideList, GuidePage, GuideSection, GuideTable } from '../support/guide'

const meta = {
  title: 'Guide/Accessibility',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const currentCssVariablesSnippet = `:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #000000;
    --foreground: #fafafa;
  }
}`

export const Accessibility: Story = {
  render: () => (
    <GuidePage>
      <GuideHero
        eyebrow="Accessibility and resilience"
        title={<>Accessibility is a starting constraint, not a QA checklist.</>}
        summary="The written system targets WCAG 2.1 AA as a floor. That means contrast, semantics, keyboard support, reduced motion, and responsive behavior are built into component decisions from the beginning."
      />

      <GuideSection
        eyebrow="Accessibility baseline"
        title="Six things every shipped surface must satisfy"
        summary="These checks apply equally to a landing page, a filter control, a dialog, or a documentation card in Storybook."
      >
        <GuideTable columns={['Area', 'Requirement']} rows={accessibilityChecklist} />
        <GuideTable columns={['Element', 'Minimum ratio', 'Standard']} rows={accessibilityContrast} />
        <GuideDemoFrame>
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Focus example</p>
            <button className="rounded-lg border border-zinc-950/10 bg-white/75 px-4 py-2 text-sm text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:border-white/15 dark:bg-zinc-900 dark:text-white dark:focus-visible:outline-emerald-400">
              Visible focus is required
            </button>
          </div>
        </GuideDemoFrame>
        <GuideCodeBlock language="css" code={focusCssSnippet} />
        <div className="grid gap-6 md:grid-cols-2">
          <GuideCallout title="Semantic HTML" tone="accent">
            <GuideList items={semanticHtmlRules} />
          </GuideCallout>
          <GuideCallout title="Keyboard navigation" tone="notice">
            <GuideList items={keyboardNavigationRules} />
          </GuideCallout>
          <div className="md:col-span-2">
            <GuideCallout title="Screen readers">
              <GuideList items={screenReaderRules} />
            </GuideCallout>
          </div>
        </div>
        <GuideCodeBlock language="css" code={reducedMotionCssSnippet} />
      </GuideSection>

      <GuideSection
        eyebrow="Responsive design"
        title="Mobile-first layout rules"
        summary="The design system prefers stacking on small screens and widening progressively. Touch targets must remain at least 44 by 44 pixels on mobile."
      >
        <GuideTable columns={['Breakpoint', 'Min width', 'Typical device']} rows={breakpoints} />
        <GuideTable columns={['Pattern', 'Mobile', 'Tablet', 'Desktop']} rows={responsivePatterns} />
        <GuideTable columns={['State', 'Behavior']} rows={responsiveNavigation} />
        <GuideCallout title="Touch targets" tone="notice">
          All interactive elements should expose a minimum 44 by 44 pixel touch target on mobile.
        </GuideCallout>
      </GuideSection>

      <GuideSection
        eyebrow="Design tokens"
        title="Semantic mapping keeps the system scalable"
        summary="The current implementation uses Tailwind utility classes directly, but the written system already defines the semantic aliases the team should converge on as it grows."
      >
        <GuideTable columns={['Token tier', 'Definition']} rows={tokenArchitecture} />
        <GuideCodeBlock language="css" code={currentCssVariablesSnippet} />
        <GuideTable columns={['CSS variable', 'Light value', 'Dark value', 'Usage']} rows={currentCssVariableRows} />
        <GuideTable columns={['Semantic token', 'Light value', 'Dark value', 'Usage']} rows={semanticTokens} />
        <GuideTable columns={['Example', 'Meaning']} rows={tokenNamingExamples} />
        <GuideCallout title="Token strategy" tone="notice">
          Use semantic token names when discussing behavior and intent. Use raw Tailwind values when you need the exact implementation detail. Mixing those levels in the same conversation slows down design reviews.
        </GuideCallout>
      </GuideSection>
    </GuidePage>
  ),
}