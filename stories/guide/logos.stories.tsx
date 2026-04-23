import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FullHumanLogo } from '../../components/logo'
import { GuideCallout, GuideCodeBlock, GuideHero, GuidePage, GuideSection } from '../support/guide'

const meta = {
  title: 'Guide/Logos',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const usageSnippet = `<FullHumanLogo className="h-10 w-auto text-zinc-950 dark:text-white" />`

export const Overview: Story = {
  render: () => (
    <GuidePage>
      <GuideHero
        eyebrow="Logos"
        title={<>Brand marks should be documented as system assets, not scattered implementation details.</>}
        summary="This page starts the logo library with the Full Human mark. More product logos can be added here later, but the structure is now in place and the primary brand mark is already wired into the footer pattern."
      />

      <GuideSection
        eyebrow="Primary mark"
        title="Full Human"
        summary="The first logo entry uses the mark from full-human.com and is rendered as an SVG component so it stays crisp and color-adaptable across Storybook surfaces."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-zinc-950/10 bg-white px-8 py-10 dark:border-white/10 dark:bg-zinc-950/40">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">On light</p>
            <FullHumanLogo className="mt-6 h-20 w-auto text-zinc-950" />
          </div>
          <div className="border border-white/10 bg-zinc-950 px-8 py-10">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-400">On dark</p>
            <FullHumanLogo className="mt-6 h-20 w-auto text-white" />
          </div>
        </div>
        <GuideCallout title="Next step" tone="notice">
          Add the remaining product logos to this page later using the same structure so the design system becomes the single place where brand assets are previewed and reviewed.
        </GuideCallout>
        <GuideCodeBlock language="tsx" code={usageSnippet} />
      </GuideSection>

      <GuideSection
        eyebrow="Library scaffolding"
        title="Ready for more product marks"
        summary="The layout below is intentionally simple: one current logo, followed by reserved slots for future products."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border border-zinc-950/10 px-6 py-8 dark:border-white/10">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Available now</p>
            <p className="mt-3 text-xl font-medium text-zinc-950 dark:text-white">Full Human</p>
            <FullHumanLogo className="mt-6 h-12 w-auto text-zinc-950 dark:text-white" />
          </div>
          <div className="border border-dashed border-zinc-950/20 px-6 py-8 dark:border-white/20">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Future slot</p>
            <p className="mt-3 text-xl font-medium text-zinc-950 dark:text-white">Product logo</p>
            <p className="mt-6 text-sm/6 text-zinc-600 dark:text-zinc-300">Add the next product mark here when it is ready.</p>
          </div>
          <div className="border border-dashed border-zinc-950/20 px-6 py-8 dark:border-white/20 md:col-span-2">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Future slot</p>
            <p className="mt-3 text-xl font-medium text-zinc-950 dark:text-white">Product logo</p>
            <p className="mt-6 text-sm/6 text-zinc-600 dark:text-zinc-300">Use the same presentation rules so the library stays consistent.</p>
          </div>
        </div>
      </GuideSection>
    </GuidePage>
  ),
}