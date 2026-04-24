import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Description, Fieldset, Label, Legend } from '../../components/fieldset'
import { Radio, RadioField, RadioGroup } from '../../components/radio'
import { GuideCardGrid, GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'
import { withStoryDescription } from './story-helpers'

const meta = {
  title: 'Components/Choices/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Mutually exclusive choice controls for one clear path among a small visible set.',
      },
    },
  },
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof meta>
type Tier = 'budget' | 'smart-value' | 'premium'

function RadioExamples() {
  const [tier, setTier] = useState<Tier>('smart-value')

  return (
    <GuidePage>
      <GuideSection
        eyebrow="Radio"
        title="Radios should keep the trade-offs visible together"
        summary="Use radios when the reader must choose exactly one option and benefits from comparing short explanatory copy side by side in one group."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <Fieldset>
              <Legend>Recommendation tier</Legend>
              <p className="mt-1 text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">All options should remain visible together.</p>
              <RadioGroup className="mt-8" value={tier} onChange={(value) => setTier(value as Tier)}>
                <RadioField>
                  <Radio value="budget" color="green" />
                  <Label>Budget</Label>
                  <Description>Prioritize dependable value over premium finishes.</Description>
                </RadioField>
                <RadioField>
                  <Radio value="smart-value" color="green" />
                  <Label>Smart value</Label>
                  <Description>Balance cost, longevity, and day-to-day performance.</Description>
                </RadioField>
                <RadioField>
                  <Radio value="premium" color="green" />
                  <Label>Premium</Label>
                  <Description>Use when the top-end finish materially improves the experience.</Description>
                </RadioField>
              </RadioGroup>
            </Fieldset>
          </GuideDemoFrame>
          <GuideDemoFrame dark>
            <Fieldset>
              <Legend>Dark surface radios</Legend>
              <p className="mt-1 text-base/6 text-zinc-400 sm:text-sm/6">The control shell should stay visible above the background.</p>
              <RadioGroup className="mt-8" value={tier} onChange={(value) => setTier(value as Tier)}>
                <RadioField>
                  <Radio value="budget" color="dark/white" />
                  <Label>Budget</Label>
                  <Description>Simple, direct, and high-contrast.</Description>
                </RadioField>
                <RadioField>
                  <Radio value="smart-value" color="dark/white" />
                  <Label>Smart value</Label>
                  <Description>Good default when one option should feel current but not loud.</Description>
                </RadioField>
              </RadioGroup>
            </Fieldset>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Radio groups are for mutually exclusive choices that benefit from visible comparison and short explanatory copy.'),
  args: {
    value: 'budget',
    color: 'green',
  },
  render: () => <RadioExamples />,
}
