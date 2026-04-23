import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Alert as AlertComponent, AlertActions, AlertBody, AlertDescription, AlertTitle } from '../../components/alert'
import { Button as ButtonComponent } from '../../components/button'
import { Dialog as DialogComponent, DialogActions, DialogBody, DialogDescription, DialogTitle } from '../../components/dialog'
import { expect, within } from 'storybook/test'
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
  title: 'Components/Feedback and overlays',
  component: AlertComponent,
  subcomponents: {
    Dialog: DialogComponent,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Focused overlay primitives for short, high-friction alerts and richer dialog-based review or task flows.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type AlertPlaygroundArgs = {
  open: boolean
  size: 'sm' | 'md' | 'lg'
  title: string
  description: string
  cancelLabel: string
  confirmLabel: string
}
type DialogPlaygroundArgs = {
  open: boolean
  size: 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  title: string
  description: string
  cancelLabel: string
  confirmLabel: string
}

function AlertExamples() {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <GuideSection
      eyebrow="Alerts"
      title="Alerts are for short, high-friction confirmation moments"
      summary="Keep the title decisive, keep the description brief, and make the next action obvious enough to scan immediately."
    >
      <GuideDemoFrame>
        <div className="space-y-4">
          <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">
            Alerts are for interruption or confirmation, not for long-form explanation.
          </p>
          <ButtonComponent color="green" onClick={() => setShowAlert(true)}>
            Open alert
          </ButtonComponent>
        </div>
      </GuideDemoFrame>

      <AlertComponent open={showAlert} onClose={setShowAlert} size="sm">
        <AlertTitle>Remove this preference set?</AlertTitle>
        <AlertDescription>This cannot be undone. Full Human will stop using these settings for regional recommendations.</AlertDescription>
        <AlertBody>
          <AlertActions>
            <ButtonComponent plain onClick={() => setShowAlert(false)}>
              Cancel
            </ButtonComponent>
            <ButtonComponent color="red" onClick={() => setShowAlert(false)}>
              Remove preferences
            </ButtonComponent>
          </AlertActions>
        </AlertBody>
      </AlertComponent>
    </GuideSection>
  )
}

function DialogExamples() {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <GuideSection
      eyebrow="Dialogs"
      title="Dialogs are for richer focused tasks or contextual review"
      summary="Use a dialog when the user needs more context than an alert can carry but the interaction still needs to stay tightly scoped."
    >
      <GuideDemoFrame>
        <div className="space-y-4">
          <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">
            Dialogs are appropriate when readers need a compact review of supporting detail before choosing the next step.
          </p>
          <ButtonComponent outline onClick={() => setShowDialog(true)}>
            Open dialog
          </ButtonComponent>
        </div>
      </GuideDemoFrame>

      <DialogComponent open={showDialog} onClose={setShowDialog} size="2xl">
        <DialogTitle>Recommendation summary</DialogTitle>
        <DialogDescription>
          This view is useful when readers need a compact review of why a product made the list before opening a full page.
        </DialogDescription>
        <DialogBody>
          <div className="space-y-4 rounded-xl border border-zinc-950/10 bg-zinc-50 p-5 dark:border-white/10 dark:bg-zinc-950/70">
            <p className="text-sm font-medium text-zinc-950 dark:text-white">Why this stands out</p>
            <ul className="space-y-2 text-sm/6 text-zinc-600 dark:text-zinc-300">
              <li>Balanced price-to-durability ratio for most households</li>
              <li>Materials age well and require minimal special care</li>
              <li>Availability is stable across key European regions</li>
            </ul>
          </div>
        </DialogBody>
        <DialogActions>
          <ButtonComponent plain onClick={() => setShowDialog(false)}>
            Close
          </ButtonComponent>
          <ButtonComponent color="green" onClick={() => setShowDialog(false)}>
            Continue review
          </ButtonComponent>
        </DialogActions>
      </DialogComponent>
    </GuideSection>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Compare the two overlay modes so interruption level, context depth, and action grouping stay intentional.'),
  args: {
    children: null,
    onClose: () => undefined,
    open: false,
  },
  render: () => (
    <GuidePage>
      <AlertExamples />
      <DialogExamples />
    </GuidePage>
  ),
}

export const Alert: StoryObj<AlertPlaygroundArgs> = {
  ...withStoryDescription('Alerts are for interruption or confirmation moments where the user needs a short message and an obvious next step.'),
  args: {
    open: true,
    size: 'sm',
    title: 'Remove this preference set?',
    description: 'This cannot be undone. Full Human will stop using these settings for regional recommendations.',
    cancelLabel: 'Cancel',
    confirmLabel: 'Remove preferences',
  },
  argTypes: {
    open: { control: 'boolean' },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    title: { control: 'text' },
    description: { control: 'text' },
    cancelLabel: { control: 'text' },
    confirmLabel: { control: 'text' },
  },
  render: ({ open, size, title, description, cancelLabel, confirmLabel }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Alert playground"
        summary="Adjust the interruption level, copy, and size directly from the controls panel."
      >
        <GuideDemoFrame>
          <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">
            Alerts should stay brief. Toggle the {`open`} control to inspect the dialog state inside Storybook.
          </p>
        </GuideDemoFrame>
        <AlertComponent open={open} onClose={() => undefined} size={size}>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
          <AlertBody>
            <AlertActions>
              <ButtonComponent plain>{cancelLabel}</ButtonComponent>
              <ButtonComponent color="red">{confirmLabel}</ButtonComponent>
            </AlertActions>
          </AlertBody>
        </AlertComponent>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const body = within(canvasElement.ownerDocument.body)
    await expect(body.getByText(args.title)).toBeVisible()
  },
}

export const Dialog: StoryObj<DialogPlaygroundArgs> = {
  ...withStoryDescription('Dialogs are for richer focused tasks or compact review flows that need more context than an alert can carry.'),
  args: {
    open: true,
    size: '2xl',
    title: 'Recommendation summary',
    description: 'Use dialogs when readers need a compact review of supporting detail before opening a full page.',
    cancelLabel: 'Close',
    confirmLabel: 'Continue review',
  },
  argTypes: {
    open: { control: 'boolean' },
    size: { control: 'select', options: ['md', 'lg', 'xl', '2xl', '3xl'] },
    title: { control: 'text' },
    description: { control: 'text' },
    cancelLabel: { control: 'text' },
    confirmLabel: { control: 'text' },
  },
  render: ({ open, size, title, description, cancelLabel, confirmLabel }) => (
    <GuidePage>
      <GuideSection
        eyebrow="Controls"
        title="Dialog playground"
        summary="Review richer overlay copy, width, and action grouping without leaving the controls panel."
      >
        <GuideDemoFrame>
          <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">
            Dialogs support more context than alerts. Toggle the {`open`} control to compare open and closed states.
          </p>
        </GuideDemoFrame>
        <DialogComponent open={open} onClose={() => undefined} size={size}>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <DialogBody>
            <div className="space-y-4 rounded-xl border border-zinc-950/10 bg-zinc-50 p-5 dark:border-white/10 dark:bg-zinc-950/70">
              <p className="text-sm font-medium text-zinc-950 dark:text-white">Why this stands out</p>
              <ul className="space-y-2 text-sm/6 text-zinc-600 dark:text-zinc-300">
                <li>Balanced price-to-durability ratio for most households</li>
                <li>Materials age well and require minimal special care</li>
                <li>Availability is stable across key European regions</li>
              </ul>
            </div>
          </DialogBody>
          <DialogActions>
            <ButtonComponent plain>{cancelLabel}</ButtonComponent>
            <ButtonComponent color="green">{confirmLabel}</ButtonComponent>
          </DialogActions>
        </DialogComponent>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement, args }) => {
    const body = within(canvasElement.ownerDocument.body)
    await expect(body.getByText(args.title)).toBeVisible()
  },
}