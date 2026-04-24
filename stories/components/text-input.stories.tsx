import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, Field, Label } from '../../components/fieldset'
import { Input, InputGroup } from '../../components/input'
import { SearchIcon } from '../support/icons'
import { GuideCardGrid, GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'
import { withStoryDescription } from './story-helpers'

const meta = {
  title: 'Components/Forms/Text input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Single-line text entry for short labels, names, search, and other lightweight copy.',
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Use text inputs for short strings. Keep surrounding context light, and only add icons or validation when they materially help the task.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Text input"
        title="Short text entry should feel quiet and obvious"
        summary="The field should hold the text clearly, stay neutral by default, and only pick up extra structure when the task genuinely needs it."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <div className="space-y-6">
              <Field>
                <Label htmlFor="text-name">Project name</Label>
                <Description>Use a short, human-readable label.</Description>
                <Input id="text-name" type="text" defaultValue="Kitchen shortlist" />
              </Field>
              <Field>
                <Label htmlFor="text-search">Search</Label>
                <InputGroup>
                  <SearchIcon data-slot="icon" className="stroke-current" />
                  <Input id="text-search" type="search" placeholder="Find a material, category, or retailer" />
                </InputGroup>
              </Field>
            </div>
          </GuideDemoFrame>
          <GuideDemoFrame dark>
            <div className="space-y-6 text-white">
              <Field>
                <Label htmlFor="text-dark">Dark surface</Label>
                <Description>Inputs should stay distinct from the page background in dark mode.</Description>
                <Input id="text-dark" type="text" defaultValue="Regional pricing enabled" />
              </Field>
              <Field>
                <Label htmlFor="text-invalid">Inline validation</Label>
                <Input id="text-invalid" type="text" aria-invalid defaultValue="Too broad" />
              </Field>
            </div>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
}
