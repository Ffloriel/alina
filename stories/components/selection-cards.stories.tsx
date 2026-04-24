import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { SelectionCard, SelectionCardGroup } from '../../components/selection-card'
import { GuideCardGrid, GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'
import { withStoryDescription } from './story-helpers'

const meta = {
  title: 'Components/Choices/Selection cards',
  component: SelectionCard,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Attached card-based mutually exclusive choice pattern for cases where each option needs a short title and supporting description, while still reading as one related decision set.',
      },
    },
  },
} satisfies Meta<typeof SelectionCard>

export default meta

type Story = StoryObj<typeof meta>
type ConverterCategory = 'units' | 'portions' | 'cooking' | 'nutrition'

const categories = [
  { id: 'units', title: 'Units', description: 'Length, weight, volume, temperature, area, and speed.', badge: 'Core' },
  { id: 'portions', title: 'Portions', description: 'Kitchen measures with ingredient-aware weight and volume.', badge: 'Kitchen' },
  { id: 'cooking', title: 'Cooking', description: 'Rice, pasta, oils, and common ingredient weight rules.', badge: 'Prep' },
  { id: 'nutrition', title: 'Nutrition', description: 'Calories, kilojoules, and quick macro energy checks.', badge: 'Health' },
] as const

function SelectionCardExamples() {
  const [category, setCategory] = useState<ConverterCategory>('units')

  return (
    <GuidePage>
      <GuideSection
        eyebrow="Selection cards"
        title="Use selection cards when each option needs more than a short label"
        summary="They are useful for category switches, plans, or modes where supporting copy helps, but the options should still feel like one related set instead of disconnected floating cards."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <SelectionCardGroup
              value={category}
              onChange={(value) => setCategory(value as ConverterCategory)}
              className="grid gap-3 md:grid-cols-2"
            >
              {categories.map((item) => (
                <SelectionCard
                  key={item.id}
                  value={item.id}
                  title={item.title}
                  description={item.description}
                  badge={item.badge}
                />
              ))}
            </SelectionCardGroup>
          </GuideDemoFrame>
          <GuideDemoFrame dark>
            <SelectionCardGroup
              value={category}
              onChange={(value) => setCategory(value as ConverterCategory)}
              className="grid gap-3"
            >
              {categories.slice(0, 2).map((item) => (
                <SelectionCard key={`dark-${item.id}`} value={item.id} title={item.title} description={item.description} />
              ))}
            </SelectionCardGroup>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Use selection cards for category-level choices when each option needs enough context that a simple radio row or segmented control would feel too compressed, but keep the whole set visually grouped as one decision.'),
  args: {
    value: 'units',
    title: 'Units',
  },
  render: () => <SelectionCardExamples />,
}
