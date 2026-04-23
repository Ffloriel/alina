import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Checkbox as CheckboxComponent, CheckboxField, CheckboxGroup } from '../../components/checkbox'
import { Combobox as ComboboxComponent, ComboboxDescription, ComboboxLabel, ComboboxOption } from '../../components/combobox'
import { Description, Fieldset as FieldsetComponent, Label, Legend } from '../../components/fieldset'
import { Listbox as ListboxComponent, ListboxDescription, ListboxLabel, ListboxOption } from '../../components/listbox'
import { Radio as RadioComponent, RadioField, RadioGroup } from '../../components/radio'
import { Switch as SwitchComponent, SwitchField, SwitchGroup } from '../../components/switch'
import { expect, userEvent, within } from 'storybook/test'
import { GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'

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
  title: 'Components/Choices',
  component: CheckboxComponent,
  subcomponents: {
    Radio: RadioComponent,
    Switch: SwitchComponent,
    Combobox: ComboboxComponent,
    Listbox: ListboxComponent,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Selection primitives for independent toggles, mutually exclusive choices, immediate preference state, and richer pickers.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type Tier = 'budget' | 'smart-value' | 'premium'
type Material = { id: string; label: string; description: string }
type Region = { id: string; label: string; description: string }
type ChoiceColor =
  | 'dark/zinc'
  | 'dark/white'
  | 'white'
  | 'dark'
  | 'zinc'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
type CheckboxPlaygroundArgs = {
  label: string
  description: string
  checked: boolean
  indeterminate: boolean
  disabled: boolean
  color: ChoiceColor
}
type RadioPlaygroundArgs = {
  selection: Tier
  color: ChoiceColor
}
type SwitchPlaygroundArgs = {
  label: string
  description: string
  checked: boolean
  disabled: boolean
  color: ChoiceColor
}
type ComboboxPlaygroundArgs = {
  valueId: Material['id']
  placeholder: string
  anchor: 'top' | 'bottom'
}
type ListboxPlaygroundArgs = {
  valueId: Region['id']
  placeholder: string
}

const materials: Material[] = [
  { id: 'steel', label: 'Brushed steel', description: 'Durable, low-fuss, and easy to keep clean.' },
  { id: 'walnut', label: 'Walnut', description: 'Warm, tactile, and best when patina is welcome.' },
  { id: 'linen', label: 'Linen', description: 'Breathable, relaxed, and ideal for soft texture.' },
]

const regions: Region[] = [
  { id: 'ch', label: 'Switzerland', description: 'Swiss pricing and delivery context.' },
  { id: 'de', label: 'Germany', description: 'German retailers and shipping norms.' },
  { id: 'fr', label: 'France', description: 'French market and tax assumptions.' },
]

const choiceColorOptions: ChoiceColor[] = [
  'dark/zinc',
  'dark/white',
  'white',
  'dark',
  'zinc',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

const tierLabels: Record<Tier, string> = {
  budget: 'Budget',
  'smart-value': 'Smart value',
  premium: 'Premium',
}

function CheckboxExamples() {
  const [newsletter, setNewsletter] = useState(true)
  const [affiliateFree, setAffiliateFree] = useState(true)

  return (
    <GuideSection
      eyebrow="Checkboxes"
      title="Checkboxes work when each option can stand on its own"
      summary="Use checkboxes for independent commitments. Each row needs a clear label and a concise description when the choice has downstream effects."
    >
      <GuideDemoFrame>
        <FieldsetComponent>
          <Legend>Independent settings</Legend>
          <p className="mt-1 text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
            Checkboxes are appropriate when users can say yes to any number of options.
          </p>
          <CheckboxGroup className="mt-8">
            <CheckboxField>
              <CheckboxComponent checked={newsletter} onChange={setNewsletter} color="green" />
              <Label>Send release notes</Label>
              <Description>Monthly summary of updated recommendations and methodology changes.</Description>
            </CheckboxField>
            <CheckboxField>
              <CheckboxComponent checked={affiliateFree} onChange={setAffiliateFree} color="green" />
              <Label>Only show affiliate-free products</Label>
              <Description>Useful when trust and editorial independence are the main decision drivers.</Description>
            </CheckboxField>
          </CheckboxGroup>
        </FieldsetComponent>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function RadioExamples() {
  const [tier, setTier] = useState<Tier>('smart-value')

  return (
    <GuideSection
      eyebrow="Radio groups"
      title="Radios are for mutually exclusive decisions"
      summary="Use radios when the user must choose exactly one tier, mode, or path and the options benefit from brief explanatory copy."
    >
      <GuideDemoFrame>
        <FieldsetComponent>
          <Legend>Recommendation tier</Legend>
          <p className="mt-1 text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
            Radios keep the trade-offs obvious because the available set is visible at once.
          </p>
          <RadioGroup className="mt-8" value={tier} onChange={(value) => setTier(value as Tier)}>
            <RadioField>
              <RadioComponent value="budget" color="green" />
              <Label>Budget</Label>
              <Description>Prioritize dependable value over premium finishes.</Description>
            </RadioField>
            <RadioField>
              <RadioComponent value="smart-value" color="green" />
              <Label>Smart value</Label>
              <Description>Best balance of cost, longevity, and day-to-day performance.</Description>
            </RadioField>
            <RadioField>
              <RadioComponent value="premium" color="green" />
              <Label>Premium</Label>
              <Description>Use when finishing details and top-end materials materially improve the experience.</Description>
            </RadioField>
          </RadioGroup>
        </FieldsetComponent>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function SwitchExamples() {
  const [regionalPricing, setRegionalPricing] = useState(true)

  return (
    <GuideSection
      eyebrow="Switches"
      title="Switches are for immediate on or off preference state"
      summary="Use switches when the change takes effect right away and the label alone can explain the outcome."
    >
      <GuideDemoFrame>
        <FieldsetComponent>
          <Legend>Preference state</Legend>
          <p className="mt-1 text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
            Switches should not be used for submitting a form later. They are best when the setting updates instantly.
          </p>
          <SwitchGroup className="mt-8">
            <SwitchField>
              <Label>Use regional pricing</Label>
              <Description>Adjust price comparisons and retailer availability to the visitor’s region.</Description>
              <SwitchComponent checked={regionalPricing} onChange={setRegionalPricing} color="green" />
            </SwitchField>
          </SwitchGroup>
        </FieldsetComponent>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function ComboboxExamples() {
  const [material, setMaterial] = useState<Material>(materials[0])

  return (
    <GuideSection
      eyebrow="Comboboxes"
      title="Comboboxes help when users benefit from search or a longer option set"
      summary="A combobox works when labels alone are insufficient and the user needs to filter or scan a denser list."
    >
      <GuideDemoFrame>
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">Material family</p>
            <ComboboxComponent
              aria-label="Material family"
              options={materials}
              value={material}
              onChange={(value) => {
                if (value) {
                  setMaterial(value)
                }
              }}
              displayValue={(value) => value?.label}
            >
              {(option) => (
                <ComboboxOption key={option.id} value={option}>
                  <ComboboxLabel>{option.label}</ComboboxLabel>
                  <ComboboxDescription>{option.description}</ComboboxDescription>
                </ComboboxOption>
              )}
            </ComboboxComponent>
          </div>
        </div>
      </GuideDemoFrame>
    </GuideSection>
  )
}

function ListboxExamples() {
  const [region, setRegion] = useState<Region>(regions[0])

  return (
    <GuideSection
      eyebrow="Listboxes"
      title="Listboxes expose the full set when users need richer option context"
      summary="Use listboxes when scanning the current set is more valuable than typing to filter it."
    >
      <GuideDemoFrame>
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">Primary region</p>
            <ListboxComponent value={region} onChange={setRegion} aria-label="Primary region">
              {regions.map((option) => (
                <ListboxOption key={option.id} value={option}>
                  <ListboxLabel>{option.label}</ListboxLabel>
                  <ListboxDescription>{option.description}</ListboxDescription>
                </ListboxOption>
              ))}
            </ListboxComponent>
          </div>
        </div>
      </GuideDemoFrame>
    </GuideSection>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Compare the full selection family so the choice of control matches the shape of the decision.'),
  render: () => (
    <GuidePage>
      <CheckboxExamples />
      <RadioExamples />
      <SwitchExamples />
      <ComboboxExamples />
      <ListboxExamples />
    </GuidePage>
  ),
}

export const Checkbox: StoryObj<CheckboxPlaygroundArgs> = {
  ...withStoryDescription('Checkboxes are for independent commitments where users may say yes to any number of options.'),
  args: {
    label: 'Only show affiliate-free products',
    description: 'Useful when trust and editorial independence are the main decision drivers.',
    checked: true,
    indeterminate: false,
    disabled: false,
    color: 'green',
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    color: { control: 'select', options: choiceColorOptions },
  },
  render: ({ label, description, checked, indeterminate, disabled, color }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Checkbox playground"
        summary="Use the controls panel to tune standalone checkbox state, color, and descriptive copy."
      >
        <GuideDemoFrame>
          <CheckboxGroup>
            <CheckboxField>
              <CheckboxComponent
                checked={indeterminate ? true : checked}
                indeterminate={indeterminate}
                disabled={disabled}
                onChange={() => undefined}
                color={color}
              />
              <Label>{label}</Label>
              <Description>{description}</Description>
            </CheckboxField>
          </CheckboxGroup>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('checkbox', { name: args.label })).toBeVisible()
  },
}

export const Radio: StoryObj<RadioPlaygroundArgs> = {
  ...withStoryDescription('Radio groups are for mutually exclusive paths that benefit from brief explanatory copy.'),
  args: {
    selection: 'smart-value',
    color: 'green',
  },
  argTypes: {
    selection: { control: 'inline-radio', options: ['budget', 'smart-value', 'premium'] },
    color: { control: 'select', options: choiceColorOptions },
  },
  render: ({ selection, color }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Radio playground"
        summary="Keep mutually exclusive tiers visible together so the trade-offs remain easy to scan."
      >
        <GuideDemoFrame>
          <FieldsetComponent>
            <Legend>Recommendation tier</Legend>
            <p className="mt-1 text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
              Radios keep the trade-offs obvious because the available set is visible at once.
            </p>
            <RadioGroup className="mt-8" value={selection} onChange={() => undefined}>
              <RadioField>
                <RadioComponent value="budget" color={color} />
                <Label>Budget</Label>
                <Description>Prioritize dependable value over premium finishes.</Description>
              </RadioField>
              <RadioField>
                <RadioComponent value="smart-value" color={color} />
                <Label>Smart value</Label>
                <Description>Best balance of cost, longevity, and day-to-day performance.</Description>
              </RadioField>
              <RadioField>
                <RadioComponent value="premium" color={color} />
                <Label>Premium</Label>
                <Description>Use when finishing details and top-end materials materially improve the experience.</Description>
              </RadioField>
            </RadioGroup>
          </FieldsetComponent>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('radio', { name: tierLabels[args.selection] })).toBeVisible()
  },
}

export const Switch: StoryObj<SwitchPlaygroundArgs> = {
  ...withStoryDescription('Switches are for immediate on-or-off preference changes that take effect as soon as they are toggled.'),
  args: {
    label: 'Use regional pricing',
    description: 'Adjust price comparisons and retailer availability to the visitor’s region.',
    checked: true,
    disabled: false,
    color: 'green',
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    color: { control: 'select', options: choiceColorOptions },
  },
  render: ({ label, description, checked, disabled, color }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Switch playground"
        summary="Use switches for immediate preference changes that apply as soon as the state moves."
      >
        <GuideDemoFrame>
          <SwitchGroup>
            <SwitchField>
              <Label>{label}</Label>
              <Description>{description}</Description>
              <SwitchComponent checked={checked} disabled={disabled} onChange={() => undefined} color={color} />
            </SwitchField>
          </SwitchGroup>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('switch', { name: args.label })).toBeVisible()
  },
}

export const Combobox: StoryObj<ComboboxPlaygroundArgs> = {
  ...withStoryDescription('Use a combobox when the option set is long enough that search or filtering materially helps selection.'),
  args: {
    valueId: 'steel',
    placeholder: 'Choose a material family',
    anchor: 'bottom',
  },
  argTypes: {
    valueId: { control: 'inline-radio', options: materials.map((option) => option.id) },
    placeholder: { control: 'text' },
    anchor: { control: 'inline-radio', options: ['top', 'bottom'] },
  },
  render: ({ valueId, placeholder, anchor }) => {
    const value = materials.find((option) => option.id === valueId) ?? materials[0]

    return (
      <GuidePage>
        <GuideSection
          eyebrow="Controls"
          title="Combobox playground"
          summary="Use a combobox when readers benefit from filtering or when the option set grows beyond a short static list."
        >
          <GuideDemoFrame>
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">Material family</p>
                <ComboboxComponent
                  aria-label="Material family"
                  anchor={anchor}
                  options={materials}
                  value={value}
                  onChange={() => undefined}
                  placeholder={placeholder}
                  displayValue={(option) => option?.label}
                >
                  {(option) => (
                    <ComboboxOption key={option.id} value={option}>
                      <ComboboxLabel>{option.label}</ComboboxLabel>
                      <ComboboxDescription>{option.description}</ComboboxDescription>
                    </ComboboxOption>
                  )}
                </ComboboxComponent>
              </div>
            </div>
          </GuideDemoFrame>
        </GuideSection>
      </GuidePage>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('combobox', { name: 'Material family' })).toHaveValue('Brushed steel')
  },
}

export const Listbox: StoryObj<ListboxPlaygroundArgs> = {
  ...withStoryDescription('Use a listbox when scanning the visible option set is more useful than typing to filter it.'),
  args: {
    valueId: 'ch',
    placeholder: 'Choose a region',
  },
  argTypes: {
    valueId: { control: 'inline-radio', options: regions.map((option) => option.id) },
    placeholder: { control: 'text' },
  },
  render: ({ valueId, placeholder }) => {
    const value = regions.find((option) => option.id === valueId) ?? regions[0]

    return (
      <GuidePage>
        <GuideSection
          eyebrow="Controls"
          title="Listbox playground"
          summary="Use a listbox when the full option set should stay easy to scan without needing text input."
        >
          <GuideDemoFrame>
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">Primary region</p>
                <ListboxComponent value={value} onChange={() => undefined} aria-label="Primary region" placeholder={placeholder}>
                  {regions.map((option) => (
                    <ListboxOption key={option.id} value={option}>
                      <ListboxLabel>{option.label}</ListboxLabel>
                      <ListboxDescription>{option.description}</ListboxDescription>
                    </ListboxOption>
                  ))}
                </ListboxComponent>
              </div>
            </div>
          </GuideDemoFrame>
        </GuideSection>
      </GuidePage>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    await userEvent.click(canvas.getByRole('button', { name: 'Primary region' }))
    await expect(body.getByText('German retailers and shipping norms.')).toBeVisible()
  },
}