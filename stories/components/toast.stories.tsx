import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useRef, useState } from 'react'
import { Button } from '../../components/button'
import { Heading } from '../../components/heading'
import { Toast } from '../../components/toast'
import { Text } from '../../components/text'
import { expect, userEvent, within } from 'storybook/test'
import { GuideDemoFrame, GuidePage, GuideSection } from '../support/guide'

type ToastTone = 'informative' | 'positive' | 'notice' | 'negative'

type ToastEntry = {
  id: number
  tone: ToastTone
  title: string
  body: string
  actionLabel?: string
}

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
  title: 'Components/Feedback and overlays/Toast',
  component: Toast,
  args: {
    title: 'Example toast',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A compact transient status surface for save confirmations and lightweight updates that should not block the workflow.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta<typeof Toast>

export default meta

type Story = StoryObj<typeof meta>

function ToastWorkspaceDemo() {
  const [toasts, setToasts] = useState<ToastEntry[]>([])
  const nextIdRef = useRef(1)

  const removeToast = (id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }

  const showToast = (entry: Omit<ToastEntry, 'id'>) => {
    const id = nextIdRef.current
    nextIdRef.current += 1

    setToasts((current) => [{ id, ...entry }, ...current].slice(0, 3))
  }

  return (
    <GuidePage>
      <section className="relative overflow-hidden rounded-2xl border border-zinc-950/10 bg-white/80 dark:border-white/10 dark:bg-zinc-950/70">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-end p-4 lg:p-6">
          <div className="pointer-events-auto flex w-full max-w-sm flex-col gap-3">
            {toasts.map((toast) => (
              <Toast
                key={toast.id}
                tone={toast.tone}
                title={toast.title}
                onDismiss={() => removeToast(toast.id)}
                action={toast.actionLabel ? <Button plain>{toast.actionLabel}</Button> : undefined}
              >
                {toast.body}
              </Toast>
            ))}
          </div>
        </div>

        <div className="space-y-10 p-6 lg:p-8">
          <div className="grid gap-8 border-b border-zinc-950/10 pb-8 dark:border-white/10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div className="space-y-4">
              <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Workspace</p>
              <Heading level={1} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                Recommendations dashboard
              </Heading>
              <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">
                Toasts belong above the working interface. Trigger them from real page actions, keep them brief, and let people dismiss them when they no longer matter.
              </Text>
            </div>
            <div className="space-y-3 rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Today</p>
              <p className="text-sm/6 text-zinc-950 dark:text-white">4 shortlist changes synced</p>
              <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">2 exports generated</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Tracked markets</p>
              <p className="mt-2 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">12</p>
            </div>
            <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Live alerts</p>
              <p className="mt-2 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">3</p>
            </div>
            <div className="rounded-2xl border border-zinc-950/10 bg-white/70 p-5 dark:border-white/10 dark:bg-zinc-950/65">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Pending review</p>
              <p className="mt-2 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">8 items</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="space-y-6 rounded-2xl border border-zinc-950/10 bg-white/70 p-6 dark:border-white/10 dark:bg-zinc-950/65">
              <div className="space-y-4">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Actions that trigger notifications</p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    color="green"
                    onClick={() =>
                      showToast({
                        tone: 'positive',
                        title: 'Shortlist updated',
                        body: 'Two items moved after the latest regional availability check.',
                        actionLabel: 'View',
                      })
                    }
                  >
                    Save shortlist
                  </Button>
                  <Button
                    outline
                    onClick={() =>
                      showToast({
                        tone: 'informative',
                        title: 'Export ready',
                        body: 'The comparison CSV is ready without interrupting the dashboard.',
                        actionLabel: 'Download',
                      })
                    }
                  >
                    Export report
                  </Button>
                  <Button
                    plain
                    onClick={() =>
                      showToast({
                        tone: 'notice',
                        title: 'Market sync still running',
                        body: 'Availability in Spain and Portugal is still refreshing in the background.',
                      })
                    }
                  >
                    Sync markets
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <article className="border-t border-zinc-950/10 pt-4 dark:border-white/10">
                  <p className="text-sm font-medium text-zinc-950 dark:text-white">Amsterdam cookware set moved into the smart-value tier.</p>
                  <p className="mt-1 text-sm/6 text-zinc-600 dark:text-zinc-300">Availability stabilized across Germany and the Netherlands after this morning’s refresh.</p>
                </article>
                <article className="border-t border-zinc-950/10 pt-4 dark:border-white/10">
                  <p className="text-sm font-medium text-zinc-950 dark:text-white">Two export bundles were generated for the editorial team.</p>
                  <p className="mt-1 text-sm/6 text-zinc-600 dark:text-zinc-300">The notification confirms background work without replacing the page with a modal.</p>
                </article>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Why this pattern</p>
              <Text className="text-sm/6 text-zinc-600 dark:text-zinc-300">
                Notifications should arrive at the edge of the viewport, remain brief, and let the dashboard stay fully usable underneath.
              </Text>
              <Text className="text-sm/6 text-zinc-600 dark:text-zinc-300">
                A close button is useful when the message is transient but might outlive the reader’s attention.
              </Text>
            </div>
          </div>
        </div>
      </section>
    </GuidePage>
  )
}

export const Overview: Story = {
  ...withStoryDescription('Toasts should confirm or update, not carry complex decision-making or long instructions.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Component"
        title="Toasts acknowledge a result without blocking the page"
        summary="Keep the message short and avoid stacking multiple unrelated toasts at the same time."
      >
        <GuideDemoFrame>
          <div className="flex flex-col gap-4 sm:max-w-sm">
            <Toast tone="positive" title="Preferences saved" action={<Button plain>Undo</Button>}>
              The recommendation logic will use the updated filters on your next visit.
            </Toast>
            <Toast tone="informative" title="Comparison export ready">
              Your CSV is ready to download from the reports panel.
            </Toast>
          </div>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Preferences saved')).toBeVisible()
  },
}

export const InUse: Story = {
  ...withStoryDescription('This page example shows toast notifications appearing over the page in the corner where people expect transient updates to land.'),
  render: () => <ToastWorkspaceDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Save shortlist' }))
    await expect(canvas.getByText('Shortlist updated')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Dismiss notification' }))
    await expect(canvas.queryByText('Shortlist updated')).not.toBeInTheDocument()
  },
}