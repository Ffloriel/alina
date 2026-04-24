import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Description, Field, Label } from '../../components/fieldset'
import { Slider } from '../../components/slider'
import { Text } from '../../components/text'
import { GuideCardGrid, GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'
import { withStoryDescription } from './story-helpers'

const meta = {
  title: 'Components/Forms/Range slider',
  component: Slider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A slider built on the native range input for fast value adjustment across a bounded numeric span.',
      },
    },
  },
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

function SliderExamples() {
  const [budget, setBudget] = useState(180)
  const [confidence, setConfidence] = useState(72)

  return (
    <GuidePage>
      <GuideSection
        eyebrow="Slider"
        title="Sliders help when rough adjustment is faster than typing"
        summary="Use a slider when the value lives inside a visible range and the person benefits from feeling out the threshold before committing to a precise number."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <Field>
              <Label htmlFor="slider-budget">Budget ceiling</Label>
              <Description>Adjust the shortlist ceiling without typing.</Description>
              <div className="mt-4 space-y-3">
                <Slider
                  id="slider-budget"
                  min={50}
                  max={400}
                  step={10}
                  value={budget}
                  onChange={(event) => setBudget(Number(event.target.value))}
                />
                <Text className="text-sm/6 text-zinc-600 dark:text-zinc-300">CHF {budget}</Text>
              </div>
            </Field>
          </GuideDemoFrame>
          <GuideDemoFrame dark>
            <Field>
              <Label htmlFor="slider-confidence">Confidence threshold</Label>
              <Description>The track and thumb should remain legible on dark surfaces.</Description>
              <div className="mt-4 space-y-3">
                <Slider
                  id="slider-confidence"
                  min={0}
                  max={100}
                  step={1}
                  value={confidence}
                  onChange={(event) => setConfidence(Number(event.target.value))}
                />
                <Text className="text-sm/6 text-zinc-300">{confidence}%</Text>
              </div>
            </Field>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Use sliders when approximate adjustment is the main interaction and the numeric span is bounded enough to feel meaningful on a track.'),
  render: () => <SliderExamples />,
}
