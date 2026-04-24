import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, Field, Label } from '../../components/fieldset'
import { Input } from '../../components/input'
import { GuideCardGrid, GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'
import { withStoryDescription } from './story-helpers'

const meta = {
  title: 'Components/Forms/Number input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Numeric entry for quantities, counts, prices, and measured values that should remain editable directly from the keyboard.',
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Use number inputs when the reader needs direct numeric entry rather than a slider or a bounded choice. Keep units and labels explicit.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Number input"
        title="Numbers need labels, units, and room to scan"
        summary="Use number inputs when precise entry matters. Put the meaning of the value in the label or helper text instead of expecting the placeholder to do all the work."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <div className="space-y-6">
              <Field>
                <Label htmlFor="number-servings">Servings</Label>
                <Description>Whole-number portion target for the recipe.</Description>
                <Input id="number-servings" type="number" defaultValue="4" min={1} step={1} />
              </Field>
              <Field>
                <Label htmlFor="number-budget">Budget ceiling</Label>
                <Description>Maximum spend in CHF.</Description>
                <Input id="number-budget" type="number" defaultValue="180" min={0} step={5} />
              </Field>
            </div>
          </GuideDemoFrame>
          <GuideDemoFrame dark>
            <div className="space-y-6 text-white">
              <Field>
                <Label htmlFor="number-threshold">Threshold</Label>
                <Description>Dark surfaces still need enough contrast around numeric entry.</Description>
                <Input id="number-threshold" type="number" defaultValue="72" min={0} max={100} />
              </Field>
              <Field>
                <Label htmlFor="number-invalid">Inline validation</Label>
                <Input id="number-invalid" type="number" aria-invalid defaultValue="-5" />
              </Field>
            </div>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
}
