import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  accessibilityInContent,
  contentPrinciples,
  grammarMechanics,
  inclusiveWriting,
  internationalConsiderations,
  toneAdjustmentByContext,
  toneSpectrum,
  voiceTraits,
} from '../support/design-system-data'
import { GuideCallout, GuideCard, GuideCardGrid, GuideDoDont, GuideHero, GuideList, GuidePage, GuideSection, GuideTable } from '../support/guide'

const meta = {
  title: 'Guide/Content',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Content: Story = {
  render: () => (
    <GuidePage>
      <GuideHero
        eyebrow="Content"
        title={<>Words are part of the interface, not decoration around it.</>}
        summary="The design system treats language as a design surface. Copy should be direct, warm, specific, and transparent enough to build trust without sounding like marketing unless the page is explicitly marketing."
      />

      <GuideSection
        eyebrow="Voice and tone"
        title="Consistent voice, context-sensitive tone"
        summary="Full Human always sounds clear, friendly, simple, confident, and honest. Tone shifts with the moment, but the underlying voice stays stable."
      >
        <GuideCardGrid>
          {voiceTraits.map(([title, description]) => (
            <GuideCard key={title} title={title} tone="accent">
              <p>{description}</p>
            </GuideCard>
          ))}
        </GuideCardGrid>
        <GuideTable columns={['Tone', 'Attitude', 'When to use it']} rows={toneSpectrum} />
        <GuideTable columns={['Context', 'Lean toward', 'Lean away from']} rows={toneAdjustmentByContext} />
        <GuideCardGrid columns={2}>
          <GuideCard title="Voice rules" tone="accent">
            <GuideList
              items={[
                'Say what you mean in the fewest words possible.',
                'Use natural sentence structure and contractions where appropriate.',
                'Lead with the answer, not the explanation.',
                'Disclose trade-offs and methodology instead of overselling.',
              ]}
            />
          </GuideCard>
          <GuideCard title="Tone routing">
            <GuideList
              items={[
                'Marketing page: welcoming and persuasive.',
                'Homepage hero: welcoming and confident.',
                'Product recommendation: confident and helpful.',
                'Utility page: instructive and direct, never a pitch.',
                'Care instructions: instructive and neutral.',
                'Errors or empty states: reassuring and helpful.',
              ]}
            />
          </GuideCard>
        </GuideCardGrid>
        <GuideCallout title="Utility page rule" tone="notice">
          Outside marketing pages, every line of copy and every section must help the person complete the task. Remove filler, promotional framing, and support blocks that behave like a pitch instead of part of the workflow.
        </GuideCallout>
      </GuideSection>

      <GuideSection
        eyebrow="Content principles"
        title="Structure writing for scanning first"
        summary="The quickest way to keep product copy aligned with the system is to apply these six editorial rules to every paragraph, card, and recommendation."
      >
        <div className="space-y-4">
          {contentPrinciples.map((principle) => (
            <GuideDoDont key={principle.title} title={principle.title} doText={principle.doText} dontText={principle.dontText} />
          ))}
        </div>
      </GuideSection>

      <GuideSection
        eyebrow="Grammar and mechanics"
        title="Prefer clarity over flourish"
        summary="Grammar rules here are opinionated because consistency makes interfaces easier to scan, translate, and trust."
      >
        <GuideTable columns={['Topic', 'Rule']} rows={grammarMechanics} />
      </GuideSection>

      <GuideSection
        eyebrow="Inclusive writing"
        title="Write for broad understanding, translation, and assistive technology"
        summary="Inclusive writing here is not a soft guideline. It is part of how the system protects clarity across audiences, locales, and access needs."
      >
        <GuideCardGrid columns={2}>
          <GuideCard title="Language and inclusion" tone="notice">
            <GuideList items={inclusiveWriting} />
          </GuideCard>
          <GuideCard title="Accessibility in content" tone="accent">
            <GuideList items={accessibilityInContent} />
          </GuideCard>
          <GuideCard title="International considerations">
            <GuideList items={internationalConsiderations} />
          </GuideCard>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
}
