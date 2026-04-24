import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, Field, Label } from '../../components/fieldset'
import { Textarea } from '../../components/textarea'
import { GuideCardGrid, GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'
import { withStoryDescription } from './story-helpers'

const meta = {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Long-form input for constraints, notes, and nuanced text that does not fit inside a single line.',
      },
    },
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Use textareas when readers need space to explain intent, constraints, or context in their own words.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Textarea"
        title="Long-form input should feel open, not heavy"
        summary="Give the field enough height for the task, and keep the surrounding copy specific enough that the person knows what kind of detail belongs there."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <Field>
              <Label htmlFor="textarea-constraints">What matters most?</Label>
              <Description>Use a textarea when the answer benefits from nuance.</Description>
              <Textarea
                id="textarea-constraints"
                rows={5}
                defaultValue="Durability matters more than novelty. I prefer materials that age well and are easy to maintain."
              />
            </Field>
          </GuideDemoFrame>
          <GuideDemoFrame dark>
            <Field>
              <Label htmlFor="textarea-dark">Dark surface textarea</Label>
              <Description>The field should remain distinct from the page background.</Description>
              <Textarea id="textarea-dark" rows={4} defaultValue="Avoid oversized pieces and coatings that scratch easily." />
            </Field>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
}
