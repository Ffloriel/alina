import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, Field, Label } from '../../components/fieldset'
import { Select } from '../../components/select'
import { GuideCardGrid, GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'
import { withStoryDescription } from './story-helpers'

const meta = {
  title: 'Components/Forms/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Native select styling for short, bounded choices that remain easy to scan without search.',
      },
    },
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Use selects for short, stable lists where readers benefit from the browser-native pattern and do not need search or richer option context.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Select"
        title="Selects work best for short bounded choices"
        summary="They should stay readable at a glance, with clear labels and option text that does not depend on surrounding prose."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <div className="space-y-6">
              <Field>
                <Label htmlFor="select-budget">Budget tier</Label>
                <Description>Use short, stable option labels.</Description>
                <Select id="select-budget" defaultValue="smart-value">
                  <option value="budget">Budget</option>
                  <option value="smart-value">Smart value</option>
                  <option value="premium">Premium</option>
                </Select>
              </Field>
              <Field>
                <Label htmlFor="select-region">Delivery region</Label>
                <Select id="select-region" defaultValue="eu-central">
                  <option value="eu-central">Central Europe</option>
                  <option value="eu-west">Western Europe</option>
                  <option value="eu-north">Northern Europe</option>
                </Select>
              </Field>
            </div>
          </GuideDemoFrame>
          <GuideDemoFrame dark>
            <div className="space-y-6 text-white">
              <Field>
                <Label htmlFor="select-dark">Dark surface select</Label>
                <Description>The closed field should stay distinct from the background.</Description>
                <Select id="select-dark" defaultValue="length">
                  <option value="length">Length</option>
                  <option value="weight">Weight</option>
                  <option value="volume">Volume</option>
                </Select>
              </Field>
            </div>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
}
