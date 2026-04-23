import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Breadcrumbs } from '../../components/breadcrumbs'
import { Heading } from '../../components/heading'
import { Text } from '../../components/text'
import { expect, within } from 'storybook/test'
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
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    items: [{ label: 'Example', current: true }],
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A lightweight location trail for hierarchical navigation and wayfinding.',
      },
    },
  },
  tags: ['test'],
} satisfies Meta<typeof Breadcrumbs>

export default meta

type Story = StoryObj<typeof meta>

const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Kitchen', href: '#' },
  { label: 'Cookware', href: '#' },
  { label: 'Stainless steel pan', current: true },
]

export const Overview: Story = {
  ...withStoryDescription('Use breadcrumbs when the content is part of a clear hierarchy and the reader benefits from a quick way back up.'),
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Component"
        title="Breadcrumbs keep hierarchy visible without dominating the header"
        summary="They should stay lightweight and sit above the main heading, not compete with it."
      >
        <GuideDemoFrame>
          <Breadcrumbs items={breadcrumbItems} />
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Stainless steel pan')).toBeVisible()
  },
}

export const InUse: Story = {
  ...withStoryDescription('This page example shows breadcrumbs used in a realistic product-detail header.'),
  render: () => (
    <GuidePage>
      <section className="space-y-10">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="grid gap-8 border-t border-zinc-950/10 pt-5 dark:border-white/10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-3">
              <Heading level={1} className="text-5xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                Stainless steel pan
              </Heading>
              <Text className="max-w-2xl text-base/7 text-zinc-600 dark:text-zinc-300">
                Breadcrumbs work here because the reader may want to step back from the product detail to the wider cookware category without relying on the browser back button.
              </Text>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-950/10 bg-white/75 p-5 dark:border-white/10 dark:bg-zinc-950/70">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Tier</p>
                <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">Smart value</p>
              </div>
              <div className="rounded-2xl border border-zinc-950/10 bg-white/75 p-5 dark:border-white/10 dark:bg-zinc-950/70">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Material</p>
                <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">3-layer stainless steel</p>
              </div>
              <div className="rounded-2xl border border-zinc-950/10 bg-white/75 p-5 dark:border-white/10 dark:bg-zinc-950/70">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Best for</p>
                <p className="mt-2 text-sm/6 text-zinc-950 dark:text-white">Daily high-heat cooking</p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
              <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-white/75 p-6 dark:border-white/10 dark:bg-zinc-950/70">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Editorial summary</p>
                <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
                  This pan earns its place because it balances steady heat, manageable weight, and easy upkeep. The product page can hold long-form detail, but the breadcrumbs keep the wider shopping path visible.
                </Text>
              </div>
              <div className="rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Pattern note</p>
                <p className="mt-3 text-sm/6 text-zinc-600 dark:text-zinc-300">Use breadcrumbs for clear hierarchies like category, subcategory, and item detail. Skip them when the page is flat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GuidePage>
  ),
}