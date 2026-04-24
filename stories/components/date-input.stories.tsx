import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, Field, Label } from '../../components/fieldset'
import { Input } from '../../components/input'
import { GuideCardGrid, GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'
import { withStoryDescription } from './story-helpers'

const meta = {
  title: 'Components/Forms/Date input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Date and time fields for scheduled events, reporting ranges, and other calendar-bound input.',
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Use date and time inputs when the browser picker helps the task and the value format should stay structured.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Date input"
        title="Calendar fields should stay structured and low-friction"
        summary="Use native date and time controls when the value is truly calendar-like and the browser picker reduces effort."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <div className="space-y-6">
              <Field>
                <Label htmlFor="date-publish">Publish date</Label>
                <Description>Schedule the update for the desired day.</Description>
                <Input id="date-publish" type="date" defaultValue="2026-04-24" />
              </Field>
              <Field>
                <Label htmlFor="date-review-time">Review time</Label>
                <Input id="date-review-time" type="time" defaultValue="09:30" />
              </Field>
            </div>
          </GuideDemoFrame>
          <GuideDemoFrame dark>
            <div className="space-y-6 text-white">
              <Field>
                <Label htmlFor="date-window">Reporting month</Label>
                <Description>Month and week pickers should stay legible on dark surfaces too.</Description>
                <Input id="date-window" type="month" defaultValue="2026-04" />
              </Field>
              <Field>
                <Label htmlFor="date-deadline">Deadline</Label>
                <Input id="date-deadline" type="datetime-local" defaultValue="2026-04-24T16:30" />
              </Field>
            </div>
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
}
