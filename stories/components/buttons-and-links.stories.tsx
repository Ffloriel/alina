import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge as BadgeComponent, BadgeButton } from '../../components/badge'
import { Button as ButtonComponent } from '../../components/button'
import { Link as LinkComponent } from '../../components/link'
import { Text, TextLink } from '../../components/text'
import { expect, within } from 'storybook/test'
import { ArrowTrendIcon, SparklesIcon } from '../support/icons'
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
  title: 'Components/Buttons and links',
  component: ButtonComponent,
  subcomponents: {
    Badge: BadgeComponent,
    BadgeButton,
    Link: LinkComponent,
    TextLink,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Action primitives for dominant calls to action, compact status badges, and routing-friendly inline links.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type ButtonColor =
  | 'dark/zinc'
  | 'light'
  | 'dark/white'
  | 'dark'
  | 'white'
  | 'zinc'
  | 'indigo'
  | 'cyan'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'sky'
  | 'blue'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
type BadgeColor =
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
  | 'zinc'
type ButtonPlaygroundArgs = {
  children: string
  color: ButtonColor
  outline: boolean
  plain: boolean
  href: string
  disabled: boolean
}
type BadgePlaygroundArgs = {
  label: string
  color: BadgeColor
  interactive: boolean
  href: string
}
type LinkPlaygroundArgs = {
  children: string
  href: string
  underline: boolean
}

const buttonColorOptions: ButtonColor[] = [
  'dark/zinc',
  'light',
  'dark/white',
  'dark',
  'white',
  'zinc',
  'indigo',
  'cyan',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'sky',
  'blue',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

const badgeColorOptions: BadgeColor[] = [
  'zinc',
  'green',
  'emerald',
  'blue',
  'amber',
  'rose',
  'red',
  'orange',
  'yellow',
  'lime',
  'teal',
  'cyan',
  'sky',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
]

const emphasisColors = ['zinc', 'green', 'sky'] as const

function ButtonExamples() {
  return (
    <GuideSection
      eyebrow="Actions"
      title="Buttons express hierarchy through weight, not noise"
      summary="Full Human buttons keep the shape calm and use an olive accent, lighter type, spacing, and restrained motion to establish hierarchy without feeling harsh."
    >
      <GuideCardGrid columns={2}>
        <GuideDemoFrame>
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Primary hierarchy</p>
            <div className="flex flex-wrap gap-3">
              {emphasisColors.map((color) => (
                <ButtonComponent key={color} color={color}>
                  <SparklesIcon data-slot="icon" className="fill-current" />
                  {color}
                </ButtonComponent>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonComponent outline>Secondary action</ButtonComponent>
              <ButtonComponent plain>
                View details
                <ArrowTrendIcon data-slot="icon" className="stroke-current" />
              </ButtonComponent>
            </div>
          </div>
        </GuideDemoFrame>
        <GuideDemoFrame dark>
          <div className="space-y-4 text-white">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-400">Dark surface</p>
            <div className="flex flex-wrap gap-3">
              <ButtonComponent color="green">Confirm selection</ButtonComponent>
              <ButtonComponent color="white">Preview theme</ButtonComponent>
              <ButtonComponent outline>More options</ButtonComponent>
            </div>
          </div>
        </GuideDemoFrame>
      </GuideCardGrid>
    </GuideSection>
  )
}

function BadgeExamples() {
  return (
    <GuideSection
      eyebrow="Inline emphasis"
      title="Badges clarify status without stealing the hierarchy"
      summary="Use badges for compact status, taxonomy, or metadata. Badge buttons are for lightweight actions that still need to feel obviously interactive."
    >
      <GuideCardGrid columns={2}>
        <GuideDemoFrame>
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Status tokens</p>
            <div className="flex flex-wrap gap-2">
              <BadgeComponent color="green">Recommended</BadgeComponent>
              <BadgeComponent color="blue">Informative</BadgeComponent>
              <BadgeComponent color="amber">Pending</BadgeComponent>
              <BadgeComponent color="rose">Limited run</BadgeComponent>
            </div>
          </div>
        </GuideDemoFrame>
        <GuideDemoFrame>
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Interactive badge</p>
            <div className="flex flex-wrap gap-3">
              <BadgeButton color="emerald">Refine selection</BadgeButton>
              <BadgeButton color="blue" href="#">
                Linked badge
              </BadgeButton>
            </div>
          </div>
        </GuideDemoFrame>
      </GuideCardGrid>
    </GuideSection>
  )
}

function LinkExamples() {
  return (
    <GuideSection
      eyebrow="Links"
      title="Links stay explicit, lightweight, and router-friendly"
      summary="The base link primitive is intentionally minimal. It exists so the app can supply routing-aware behavior while the composition layer supplies the visual treatment, including underline on hover for textual links."
    >
      <GuideCardGrid columns={2}>
        <GuideDemoFrame>
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Base primitive</p>
            <LinkComponent
              href="#"
              className="inline-flex items-center gap-2 text-sm font-light tracking-[0.08em] uppercase text-zinc-950 underline-offset-4 transition-[color,text-decoration-color] hover:underline dark:text-white"
            >
              Read the recommendation rationale
              <ArrowTrendIcon data-slot="icon" className="stroke-current" />
            </LinkComponent>
            <p className="max-w-xl text-sm/6 text-zinc-600 dark:text-zinc-300">
              Use the shared primitive when the consuming framework needs to swap in client-side navigation without changing the rest of the component tree.
            </p>
          </div>
        </GuideDemoFrame>
        <GuideDemoFrame>
          <Text className="max-w-2xl text-base/7">
            Narrative copy can still use <TextLink href="#">TextLink</TextLink> when the surrounding sentence already carries the context and the action should feel quieter.
          </Text>
        </GuideDemoFrame>
      </GuideCardGrid>
    </GuideSection>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Survey the full action layer, from dominant buttons to quieter inline links and status badges.'),
  args: {
    children: 'Action',
  },
  render: () => (
    <GuidePage>
      <ButtonExamples />
      <BadgeExamples />
      <LinkExamples />
    </GuidePage>
  ),
}

export const Button: StoryObj<ButtonPlaygroundArgs> = {
  ...withStoryDescription('Review hierarchy, color treatments, and dark-surface behavior for primary and secondary buttons.'),
  args: {
    children: 'Explore categories',
    color: 'green',
    outline: false,
    plain: false,
    href: '',
    disabled: false,
  } satisfies ButtonPlaygroundArgs,
  argTypes: {
    children: { control: 'text' },
    color: { control: 'select', options: buttonColorOptions },
    outline: { control: 'boolean' },
    plain: { control: 'boolean' },
    href: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  render: ({ children, color, outline, plain, href, disabled }: ButtonPlaygroundArgs) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Button playground"
        summary="Adjust the button hierarchy, target type, and visual emphasis directly from the controls panel."
      >
        <GuideDemoFrame>
          <div className="flex flex-wrap gap-4">
            <ButtonComponent
              {...(href ? { href } : disabled ? { disabled: true } : {})}
              {...(outline ? { outline: true } : plain ? { plain: true } : { color })}
            >
              <SparklesIcon data-slot="icon" className="fill-current" />
              {children}
            </ButtonComponent>
          </div>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children)).toBeVisible()
  },
}

export const Badge: StoryObj<BadgePlaygroundArgs> = {
  ...withStoryDescription('Inspect compact status tokens and badge buttons used for lightweight actions.'),
  args: {
    label: 'Recommended',
    color: 'green',
    interactive: false,
    href: '',
  },
  argTypes: {
    label: { control: 'text' },
    color: { control: 'select', options: badgeColorOptions },
    interactive: { control: 'boolean' },
    href: { control: 'text' },
  },
  render: ({ label, color, interactive, href }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Badge playground"
        summary="Switch between passive status treatment and interactive badge-button usage."
      >
        <GuideDemoFrame>
          {interactive ? (
            <BadgeButton color={color} {...(href ? { href } : {})}>
              {label}
            </BadgeButton>
          ) : (
            <BadgeComponent color={color}>{label}</BadgeComponent>
          )}
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.label)).toBeVisible()
  },
}

export const Link: StoryObj<LinkPlaygroundArgs> = {
  ...withStoryDescription('See the base router-friendly link primitive alongside quieter inline text-link usage.'),
  args: {
    children: 'Read the recommendation rationale',
    href: '#',
    underline: true,
  },
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
    underline: { control: 'boolean' },
  },
  render: ({ children, href, underline }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Link playground"
        summary="Use the shared link primitive for router-aware navigation while preserving the system’s quiet inline rhythm and underline-on-hover treatment."
      >
        <GuideDemoFrame>
          <div className="space-y-4">
            <LinkComponent
              href={href}
              className={underline ? 'inline-flex items-center gap-2 text-sm font-light uppercase tracking-[0.08em] text-zinc-950 underline decoration-current/50 underline-offset-4 transition-[color,text-decoration-color] hover:decoration-current dark:text-white dark:decoration-white/50 dark:hover:decoration-white' : 'inline-flex items-center gap-2 text-sm font-light uppercase tracking-[0.08em] text-zinc-950 underline-offset-4 transition-[color,text-decoration-color] hover:text-zinc-700 hover:underline dark:text-white dark:hover:text-zinc-200'}
            >
              {children}
              <ArrowTrendIcon data-slot="icon" className="stroke-current" />
            </LinkComponent>
          </div>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('link', { name: args.children })).toBeVisible()
  },
}