import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '../../components/button'
import { LoadingCircle } from '../../components/progress-circle'
import {
  animationSpecs,
  buttonPressCssSnippet,
  fadeInCssSnippet,
  microInteractions,
  motionPrinciples,
  reducedMotionCssSnippet,
  transitionSpecs,
} from '../support/design-system-data'
import { GuideCallout, GuideCardGrid, GuideCodeBlock, GuideDemoFrame, GuideHero, GuideList, GuidePage, GuideSection, GuideTable } from '../support/guide'

const meta = {
  title: 'Guide/Animations',
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
        eyebrow="Guide"
        title="Animations should clarify interaction, not compete with it."
        summary="Motion in Full Human is brief, quiet, and functional. It should help people feel state change, understand system activity, and keep their place without adding spectacle."
        aside={
          <GuideCallout title="Reduced motion is part of the baseline">
            Every animation and transition needs a reduced-motion fallback. If the motion does not survive that constraint, it probably was not doing enough useful work.
          </GuideCallout>
        }
      />

      <GuideSection
        eyebrow="Principles"
        title="Use motion where it improves comprehension"
        summary="The system prefers short durations, low travel distances, and predictable easing so animations feel like confirmation rather than decoration."
      >
        <GuideTable columns={['Property', 'Duration', 'Easing', 'Tailwind', 'Usage']} rows={transitionSpecs} />
        <GuideTable columns={['Animation', 'Duration', 'Easing', 'Usage']} rows={animationSpecs} />
        <GuideTable columns={['Element', 'Behavior', 'Tailwind']} rows={microInteractions} />
        <GuideCallout title="Motion rules">
          <GuideList items={motionPrinciples} />
        </GuideCallout>
      </GuideSection>

      <GuideSection
        eyebrow="Examples"
        title="The interaction should feel slightly more alive at the point of action"
        summary="Button press feedback and indeterminate loading are the two most common animation surfaces in the system. Both should feel immediate, restrained, and easy to ignore once they have done their job."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <div className="space-y-5">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Button press feedback</p>
              <div className="flex flex-wrap gap-3">
                <Button color="green">Save changes</Button>
                <Button outline>Preview update</Button>
                <Button plain>Dismiss note</Button>
              </div>
              <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">Press and hold the buttons. The movement is slight on purpose: enough to acknowledge the action, not enough to pull focus from the page.</p>
            </div>
          </GuideDemoFrame>
          <GuideDemoFrame dark>
            <div className="space-y-5 text-white">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-400">Loading state</p>
              <div className="flex justify-center py-4">
                <LoadingCircle label="Refreshing shortlist">Checking the latest regional availability before the comparison view appears.</LoadingCircle>
              </div>
              <p className="text-sm/6 text-zinc-300">Indeterminate loading states should feel active and stable. Use a loading animation when the system is working, but the final percentage would be false precision.</p>
            </div>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>

      <GuideSection
        eyebrow="Implementation"
        title="Document the pattern in code, not just in taste"
        summary="These snippets show the core motion rules behind the system: button press feedback, page-level fade-in, and reduced-motion fallback."
      >
        <GuideCardGrid columns={2}>
          <GuideCodeBlock language="tsx" code={buttonPressCssSnippet} />
          <GuideCodeBlock language="css" code={fadeInCssSnippet} />
        </GuideCardGrid>
        <GuideCodeBlock language="css" code={reducedMotionCssSnippet} />
      </GuideSection>
    </GuidePage>
  ),
}