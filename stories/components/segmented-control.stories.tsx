import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { SegmentedControl, SegmentedControlOption } from '../../components/segmented-control'
import { GuideCardGrid, GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'
import { withStoryDescription } from './story-helpers'

const meta = {
  title: 'Components/Choices/Segmented control',
  component: SegmentedControl,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Attached mutually exclusive choice control for short labels such as modes, tabs, and unit families, with one shared frame and a moving selected indicator.',
      },
    },
  },
} satisfies Meta<typeof SegmentedControl>

export default meta

type Story = StoryObj<typeof meta>
type UnitFamily = 'length' | 'weight' | 'volume' | 'temperature'

function SegmentedControlExamples() {
  const [family, setFamily] = useState<UnitFamily>('length')
  const [cookingMode, setCookingMode] = useState<'rice' | 'pasta' | 'oils'>('rice')

  return (
    <GuidePage>
      <GuideSection
        eyebrow="Segmented control"
        title="Use segmented controls for short mode switches"
        summary="They work when the set is small, the labels are compact, and the options should read as one grouped control rather than separate floating buttons."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-medium text-zinc-950 dark:text-white">Unit family</p>
                <SegmentedControl value={family} onChange={(value) => setFamily(value as UnitFamily)}>
                  <SegmentedControlOption value="length">Length</SegmentedControlOption>
                  <SegmentedControlOption value="weight">Weight</SegmentedControlOption>
                  <SegmentedControlOption value="volume">Volume</SegmentedControlOption>
                  <SegmentedControlOption value="temperature">Temperature</SegmentedControlOption>
                </SegmentedControl>
              </div>
            </div>
          </GuideDemoFrame>
          <GuideDemoFrame dark>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-medium text-white">Dark surface mode switch</p>
                <SegmentedControl value={cookingMode} onChange={(value) => setCookingMode(value as 'rice' | 'pasta' | 'oils')}>
                  <SegmentedControlOption value="rice">Rice</SegmentedControlOption>
                  <SegmentedControlOption value="pasta">Pasta</SegmentedControlOption>
                  <SegmentedControlOption value="oils">Oils</SegmentedControlOption>
                </SegmentedControl>
              </div>
            </div>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Use segmented controls for compact mutually exclusive switches such as “length / weight / volume”, keeping every option attached inside one clearly grouped control.'),
  render: () => <SegmentedControlExamples />,
}
