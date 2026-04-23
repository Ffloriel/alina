import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { AvatarGroup } from '../../components/avatar-group'
import { DropZone } from '../../components/drop-zone'
import { Heading } from '../../components/heading'
import { Text } from '../../components/text'
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

type UploadRow = {
  name: string
  size: string
}

const reviewTeam = [
  { initials: 'AM', alt: 'Aline Martin' },
  { initials: 'JR', alt: 'Jules Roche' },
  { initials: 'NS', alt: 'Nina Solberg' },
] as const

const starterAssets: UploadRow[] = [
  { name: 'spring-kitchen-brief.pdf', size: '2.4 MB' },
  { name: 'market-notes-germany.csv', size: '418 KB' },
] as const

function UploadList({ files }: { files: UploadRow[] }) {
  return (
    <div className="rounded-2xl border border-zinc-950/10 bg-white/72 p-4 dark:border-white/10 dark:bg-zinc-950/60">
      <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Current files</p>
      <div className="mt-3 space-y-3">
        {files.map((file) => (
          <div key={file.name} className="flex items-center justify-between gap-4 border-t border-zinc-950/10 pt-3 text-sm dark:border-white/10">
            <span className="font-medium text-zinc-950 dark:text-white">{file.name}</span>
            <span className="text-zinc-500 dark:text-zinc-400">{file.size}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function DropZoneWorkspaceDemo() {
  const [files, setFiles] = useState<UploadRow[]>([...starterAssets])

  return (
    <GuidePage>
      <section className="space-y-10">
        <div className="grid gap-8 border-b border-zinc-950/10 pb-8 dark:border-white/10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Asset intake</p>
            <Heading level={1} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Add reference assets before the review starts.
            </Heading>
            <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">
              The drop zone belongs inside a real working page. It should feel like one part of a broader upload and review flow, not a floating utility dropped into empty space.
            </Text>
          </div>
          <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Review owners</p>
            <AvatarGroup items={reviewTeam.map((person) => ({ ...person }))} />
            <p className="text-sm/6 text-zinc-600 dark:text-zinc-300">Three editors are waiting on the supporting source material.</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="space-y-6 rounded-2xl border border-zinc-950/10 bg-white/78 p-6 dark:border-white/10 dark:bg-zinc-950/68 lg:p-8">
            <DropZone
              title="Add reference assets"
              description="Drop photography, pricing tables, reviewer notes, or supplier exports into the upload queue."
              hint="PDF, CSV, PNG, and JPG accepted."
              onFilesChange={(incomingFiles) => {
                setFiles(
                  incomingFiles.map((file) => ({
                    name: file.name,
                    size: formatBytes(file.size),
                  }))
                )
              }}
            >
              <UploadList files={files} />
            </DropZone>
          </div>

          <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Pattern note</p>
            <Text className="text-sm/6 text-zinc-600 dark:text-zinc-300">
              The upload target should stay visible, explicit, and easy to scan. Pair it with a live file list so people can confirm what the system has accepted.
            </Text>
            <Text className="text-sm/6 text-zinc-600 dark:text-zinc-300">
              Click the browse button or drop files to replace the current list in this demo.
            </Text>
          </div>
        </div>
      </section>
    </GuidePage>
  )
}

const meta = {
  title: 'Components/Forms/Drop zone',
  component: DropZone,
  args: {
    title: 'Example drop zone',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A drag-and-drop upload target with a browse fallback for one or multiple files.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta<typeof DropZone>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  ...withStoryDescription('Use drop zones when uploading is central to the task and people benefit from a clear, generous target rather than a hidden file input.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Component"
        title="Drop zones make uploads explicit and easy to target"
        summary="Use them when files are central to the task and the page needs to acknowledge both drag-and-drop and browse-first behavior."
      >
        <GuideCardGrid columns={2}>
          <GuideDemoFrame>
            <DropZone title="Drop source material" description="Add reference files, reviewer notes, or pricing exports before the weekly edit begins.">
              <UploadList files={[...starterAssets]} />
            </DropZone>
          </GuideDemoFrame>
          <GuideDemoFrame>
            <DropZone
              title="Add one hero image"
              description="Use a more focused prompt when only one asset belongs in the flow."
              hint="PNG or JPG up to 10 MB."
              multiple={false}
            />
          </GuideDemoFrame>
        </GuideCardGrid>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Drop source material')).toBeVisible()
  },
}

export const InUse: Story = {
  ...withStoryDescription('This page shows the drop zone inside a real asset-intake screen with context, ownership, and a live file list.'),
  render: () => <DropZoneWorkspaceDemo />,
}