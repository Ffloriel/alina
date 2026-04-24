import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, ErrorMessage, Field, FieldGroup, Fieldset as FieldsetComponent, Label, Legend } from '../../components/fieldset'
import { Input as InputComponent, InputGroup } from '../../components/input'
import { Select as SelectComponent } from '../../components/select'
import { Slider as SliderComponent } from '../../components/slider'
import { Textarea as TextareaComponent } from '../../components/textarea'
import { expect, within } from 'storybook/test'
import { SearchIcon } from '../support/icons'
import { GuideCardGrid, GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'

function withStoryDescription(story: string) {
  return {
    parameters: {
      docs: {
        description: {
          story,
        },
      },
    },
  }
}

const meta = {
  title: 'Components/Forms',
  component: InputComponent,
  subcomponents: {
    Fieldset: FieldsetComponent,
    Input: InputComponent,
    Select: SelectComponent,
    Slider: SliderComponent,
    Textarea: TextareaComponent,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Core form primitives that share one grammar for labels, helper text, validation, spacing, and entry state. Use this page as the overview, then work on the dedicated pages for text, number, date, range slider, select, and textarea inputs.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type FieldsetPlaygroundArgs = {
  legend: string
  helperText: string
  recipientName: string
  requestNotes: string
  invalid: boolean
  errorMessage: string
}
type InputPlaygroundArgs = {
  label: string
  type: 'text' | 'email' | 'search' | 'url'
  value: string
  placeholder: string
  showIcon: boolean
  invalid: boolean
  disabled: boolean
}
type SelectPlaygroundArgs = {
  label: string
  value: 'budget' | 'smart-value' | 'premium'
  disabled: boolean
}
type TextareaPlaygroundArgs = {
  label: string
  value: string
  placeholder: string
  rows: number
  disabled: boolean
}

function FieldsetExamples() {
  return (
    <GuideSection
      eyebrow="Fieldsets"
      title="Fieldsets give related inputs one shared frame of reference"
      summary="Legends name the decision, descriptions frame the task, and fields stay consistently spaced so the user never has to guess where one group ends and the next begins."
    >
      <GuideCardGrid columns={2}>
        <GuideDemoFrame>
          <FieldsetComponent>
            <Legend>Shipping preferences</Legend>
            <p className="mt-1 text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
              Use clear labels, one idea per field, and concise helper text.
            </p>
            <FieldGroup className="mt-8">
              <Field>
                <Label htmlFor="recipient-name">Recipient name</Label>
                <Description>Shown on packing slips and email notifications.</Description>
                <InputComponent id="recipient-name" defaultValue="Avery Stone" />
              </Field>
              <Field>
                <Label htmlFor="store-search">Preferred store</Label>
                <Description>Search is useful when options are long or frequently changing.</Description>
                <InputGroup>
                  <SearchIcon data-slot="icon" className="stroke-current" />
                  <InputComponent id="store-search" type="search" placeholder="Search retailers" />
                </InputGroup>
              </Field>
            </FieldGroup>
          </FieldsetComponent>
        </GuideDemoFrame>
        <GuideDemoFrame>
          <FieldsetComponent>
            <Legend>Recommendation request</Legend>
            <p className="mt-1 text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
              Validation and supporting copy should remain inside the same structural system.
            </p>
            <FieldGroup className="mt-8">
              <Field>
                <Label htmlFor="problem-field">Problem field</Label>
                <InputComponent id="problem-field" aria-invalid defaultValue="Too vague" />
                <ErrorMessage>Ask for one specific use case so the recommendation can stay direct.</ErrorMessage>
              </Field>
              <Field>
                <Label htmlFor="notes-fieldset">What matters most?</Label>
                <TextareaComponent
                  id="notes-fieldset"
                  rows={4}
                  defaultValue="Durability matters more than novelty. I prefer materials that age well and are easy to maintain."
                />
              </Field>
            </FieldGroup>
          </FieldsetComponent>
        </GuideDemoFrame>
      </GuideCardGrid>
    </GuideSection>
  )
}

function InputExamples() {
  return (
    <GuideSection
      eyebrow="Inputs"
      title="Text inputs stay neutral until they need to communicate state"
      summary="A plain input handles the common case. Input groups add only the minimum context needed for search, filtering, or inline affordances."
    >
      <GuideCardGrid columns={2}>
        <GuideDemoFrame>
          <div className="space-y-6">
            <Field>
              <Label htmlFor="email-address">Email address</Label>
              <InputComponent id="email-address" type="email" placeholder="Email address" />
            </Field>
            <Field>
              <Label htmlFor="recommendation-search">Search recommendations</Label>
              <InputGroup>
                <SearchIcon data-slot="icon" className="stroke-current" />
                <InputComponent id="recommendation-search" type="search" placeholder="Find a category, brand, or material" />
              </InputGroup>
            </Field>
          </div>
        </GuideDemoFrame>
        <GuideDemoFrame dark>
          <div className="space-y-6 text-white">
            <Field>
              <Label htmlFor="dark-mode-query">Dark surface input</Label>
              <InputComponent id="dark-mode-query" defaultValue="Regional pricing enabled" />
            </Field>
            <Field>
              <Label htmlFor="input-invalid">Inline validation</Label>
              <InputComponent id="input-invalid" aria-invalid defaultValue="Unclear request" />
            </Field>
          </div>
        </GuideDemoFrame>
      </GuideCardGrid>
    </GuideSection>
  )
}

function SelectExamples() {
  return (
    <GuideSection
      eyebrow="Selects"
      title="Selects work best when the option set is stable and easy to scan"
      summary="Use selects for bounded choices with predictable labels. If users need search, context, or richer comparison, step up to a combobox or listbox."
    >
      <GuideCardGrid columns={2}>
        <GuideDemoFrame>
          <div className="space-y-6">
            <Field>
              <Label htmlFor="budget-tier">Budget tier</Label>
              <SelectComponent id="budget-tier" defaultValue="smart-value">
                <option value="budget">Budget</option>
                <option value="smart-value">Smart value</option>
                <option value="premium">Premium</option>
              </SelectComponent>
            </Field>
            <Field>
              <Label htmlFor="delivery-region">Delivery region</Label>
              <SelectComponent id="delivery-region" defaultValue="eu-central">
                <option value="eu-central">Central Europe</option>
                <option value="eu-west">Western Europe</option>
                <option value="eu-north">Northern Europe</option>
              </SelectComponent>
            </Field>
          </div>
        </GuideDemoFrame>
        <GuideDemoFrame>
          <FieldsetComponent>
            <Legend>When to use a select</Legend>
            <p className="mt-1 text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
              Keep labels short, avoid long prose in option rows, and make the default state explicit.
            </p>
          </FieldsetComponent>
        </GuideDemoFrame>
      </GuideCardGrid>
    </GuideSection>
  )
}

function TextareaExamples() {
  return (
    <GuideSection
      eyebrow="Textareas"
      title="Textareas invite detail without feeling heavy"
      summary="Use textareas when the user needs room to describe intent, constraints, or nuances that structured controls cannot capture."
    >
      <GuideCardGrid columns={2}>
        <GuideDemoFrame>
          <div className="space-y-6">
            <Field>
              <Label htmlFor="product-notes">What matters most?</Label>
              <TextareaComponent
                id="product-notes"
                rows={5}
                defaultValue="Durability matters more than novelty. I prefer materials that age well and are easy to maintain."
              />
            </Field>
          </div>
        </GuideDemoFrame>
        <GuideDemoFrame>
          <div className="space-y-6">
            <Field>
              <Label htmlFor="avoidances">What should we avoid?</Label>
              <TextareaComponent id="avoidances" rows={4} placeholder="Examples: non-repairable items, coatings that scratch easily, oversized pieces..." />
            </Field>
          </div>
        </GuideDemoFrame>
      </GuideCardGrid>
    </GuideSection>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Walk through the shared structure that ties fieldsets, inputs, selects, and textareas together.'),
  render: () => (
    <GuidePage>
      <FieldsetExamples />
      <InputExamples />
      <SelectExamples />
      <TextareaExamples />
    </GuidePage>
  ),
}

export const Fieldset: StoryObj<FieldsetPlaygroundArgs> = {
  ...withStoryDescription('Use fieldsets when related inputs need a shared legend, helper text, and validation context.'),
  args: {
    legend: 'Recommendation request',
    helperText: 'Group related inputs under one legend so the reader understands the decision frame before scanning individual controls.',
    recipientName: 'Avery Stone',
    requestNotes: 'Durability matters more than novelty. I prefer materials that age well and are easy to maintain.',
    invalid: false,
    errorMessage: 'Ask for one specific use case so the recommendation can stay direct.',
  },
  argTypes: {
    legend: { control: 'text' },
    helperText: { control: 'text' },
    recipientName: { control: 'text' },
    requestNotes: { control: 'text' },
    invalid: { control: 'boolean' },
    errorMessage: { control: 'text' },
  },
  render: ({ legend, helperText, recipientName, requestNotes, invalid, errorMessage }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Fieldset playground"
        summary="Adjust the legend, supporting copy, and inline validation to review how grouped form structure holds together."
      >
        <GuideDemoFrame>
          <FieldsetComponent>
            <Legend>{legend}</Legend>
            <p className="mt-1 text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">{helperText}</p>
            <FieldGroup className="mt-8">
              <Field>
                <Label htmlFor="fieldset-recipient-control">Recipient name</Label>
                <Description>Shown on packing slips and email notifications.</Description>
                <InputComponent id="fieldset-recipient-control" value={recipientName} onChange={() => undefined} />
              </Field>
              <Field>
                <Label htmlFor="fieldset-request-control">What matters most?</Label>
                <TextareaComponent id="fieldset-request-control" rows={4} value={requestNotes} onChange={() => undefined} />
                {invalid ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
              </Field>
            </FieldGroup>
          </FieldsetComponent>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.legend)).toBeVisible()
  },
}

export const Input: StoryObj<InputPlaygroundArgs> = {
  ...withStoryDescription('Review neutral text-input behavior, grouped search inputs, and inline invalid-state treatment.'),
  args: {
    label: 'Search recommendations',
    type: 'search',
    value: 'stainless steel pan',
    placeholder: 'Find a category, brand, or material',
    showIcon: true,
    invalid: false,
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'search', 'url'] },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    showIcon: { control: 'boolean' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  render: ({ label, type, value, placeholder, showIcon, invalid, disabled }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Input playground"
        summary="Tune the label, value, field type, and inline state without leaving the controls panel."
      >
        <GuideDemoFrame>
          <Field>
            <Label htmlFor="input-control">{label}</Label>
            {showIcon ? (
              <InputGroup>
                <SearchIcon data-slot="icon" className="stroke-current" />
                <InputComponent
                  id="input-control"
                  type={type}
                  value={value}
                  placeholder={placeholder}
                  disabled={disabled}
                  aria-invalid={invalid || undefined}
                  onChange={() => undefined}
                />
              </InputGroup>
            ) : (
              <InputComponent
                id="input-control"
                type={type}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                aria-invalid={invalid || undefined}
                onChange={() => undefined}
              />
            )}
          </Field>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByLabelText(args.label)).toHaveValue(args.value)
  },
}

export const Select: StoryObj<SelectPlaygroundArgs> = {
  ...withStoryDescription('Inspect bounded-choice select usage for stable option sets that do not need search.'),
  args: {
    label: 'Budget tier',
    value: 'smart-value',
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'inline-radio', options: ['budget', 'smart-value', 'premium'] },
    disabled: { control: 'boolean' },
  },
  render: ({ label, value, disabled }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Select playground"
        summary="Review bounded-choice selection for short, stable option sets that do not need search or richer comparison content."
      >
        <GuideDemoFrame>
          <Field>
            <Label htmlFor="select-control">{label}</Label>
            <SelectComponent id="select-control" value={value} disabled={disabled} onChange={() => undefined}>
              <option value="budget">Budget</option>
              <option value="smart-value">Smart value</option>
              <option value="premium">Premium</option>
            </SelectComponent>
          </Field>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByLabelText(args.label)).toHaveValue(args.value)
  },
}

export const Textarea: StoryObj<TextareaPlaygroundArgs> = {
  ...withStoryDescription('Use textareas when readers need space to describe constraints, intent, or nuance in their own words.'),
  args: {
    label: 'What should we avoid?',
    value: 'Non-repairable items, coatings that scratch easily, and products that are hard to source in Europe.',
    placeholder: 'Examples: non-repairable items, coatings that scratch easily, oversized pieces...',
    rows: 4,
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    rows: { control: { type: 'range', min: 3, max: 8, step: 1 } },
    disabled: { control: 'boolean' },
  },
  render: ({ label, value, placeholder, rows, disabled }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Textarea playground"
        summary="Give longer-form input room to breathe while tuning copy density and field height from the controls panel."
      >
        <GuideDemoFrame>
          <Field>
            <Label htmlFor="textarea-control">{label}</Label>
            <TextareaComponent
              id="textarea-control"
              rows={rows}
              value={value}
              placeholder={placeholder}
              disabled={disabled}
              onChange={() => undefined}
            />
          </Field>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByLabelText(args.label)).toHaveValue(args.value)
  },
}
