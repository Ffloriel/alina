import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Avatar } from '../../components/avatar'
import { Badge } from '../../components/badge'
import { Button } from '../../components/button'
import { Heading } from '../../components/heading'
import { Text } from '../../components/text'
import {
  breadcrumbsHtmlSnippet,
  categoryCardSpec,
  componentCatalog,
  componentInventory,
  footerSpec,
  imageGallerySpec,
  itemCardSpec,
  loadingStateHtmlSnippet,
  navigationSpec,
  preferenceControlSpec,
  productCardSpec,
} from '../support/design-system-data'
import { GuideCallout, GuideCard, GuideCardGrid, GuideCodeBlock, GuideDemoFrame, GuideHero, GuideList, GuidePage, GuideSection, GuideTable } from '../support/guide'

const meta = {
  title: 'Guide/Components',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const buttonAndLinkSnippet = `<a class="inline-flex items-center justify-center gap-2 rounded-lg border border-[#9cab56] bg-[#b9c86f] px-6 py-3 text-sm font-medium text-[#334019] transition-colors hover:bg-[#c7d686]">
  Explore categories
</a>

<a class="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white/80 px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-50 dark:border-white/15 dark:bg-zinc-900/70 dark:text-white dark:hover:bg-zinc-900">
  Browse categories
</a>

<a class="inline-block text-xs font-light tracking-[0.2em] uppercase underline-offset-4 transition-[color,text-decoration-color] duration-300 hover:underline">
  Explore
</a>

<a class="text-xs font-light tracking-[0.15em] uppercase text-neutral-600 underline-offset-4 transition-[color,text-decoration-color] duration-300 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-white">
  Category name
</a>`

export const Components: Story = {
  render: () => (
    <GuidePage>
      <GuideHero
        eyebrow="Component architecture"
        title={<>The components inherit the same system rules as the pages that use them.</>}
        summary="The preserved component library encodes the interaction primitives, and this guide documents the higher-level patterns they support. Together they form the design system record."
      />

      <GuideSection
        eyebrow="Catalogue"
        title="Five groups describe the system"
        summary="Use the groups below to find the component examples in Storybook and to understand the role each primitive plays in the broader design language."
      >
        <GuideCardGrid>
          {componentCatalog.map((group) => (
            <GuideCard key={group.group} title={group.group} tone="accent">
              <p>{group.rationale}</p>
              <GuideList items={group.items.map((item) => item.replace(/-/g, ' '))} />
            </GuideCard>
          ))}
        </GuideCardGrid>
        <GuideTable columns={['Component', 'Role', 'Documented in']} rows={componentInventory} />
      </GuideSection>

      <GuideSection
        eyebrow="Pattern guidance"
        title="The guide also covers the higher-level patterns described by the system"
        summary="Some elements in the specification are product patterns rather than standalone files in the components directory. They still need explicit documentation because they define how the primitives should be combined."
      >
        <GuideTable columns={['Navigation property', 'Value']} rows={navigationSpec} />
        <GuideTable columns={['Category card property', 'Value']} rows={categoryCardSpec} />
        <GuideTable columns={['Item card property', 'Value']} rows={itemCardSpec} />
        <GuideTable columns={['Product card property', 'Value']} rows={productCardSpec} />
      </GuideSection>

      <GuideSection
        eyebrow="Supporting patterns"
        title="Controls, galleries, footers, and loading states have their own rules"
        summary="These patterns are not incidental. They shape how the UI scales from a simple recommendation card to a complete product flow."
      >
        <GuideCodeBlock language="html" code={buttonAndLinkSnippet} />
        <GuideTable columns={['Preference control state', 'Style']} rows={preferenceControlSpec} />
        <GuideTable columns={['Image gallery element', 'Style']} rows={imageGallerySpec} />
        <GuideTable columns={['Footer property', 'Value']} rows={footerSpec} />
        <GuideCardGrid columns={2}>
          <GuideCodeBlock language="html" code={breadcrumbsHtmlSnippet} />
          <GuideCodeBlock language="html" code={loadingStateHtmlSnippet} />
        </GuideCardGrid>
        <GuideCallout title="Pattern rule" tone="notice">
          If a pattern appears in the guide, treat it as part of the design system even when it is composed from smaller primitives rather than exported as a single file.
        </GuideCallout>
      </GuideSection>

      <GuideSection
        eyebrow="Live composition"
        title="Component styling should feel calm, direct, and tactile"
        summary="The example below is intentionally simple. It shows the visual grammar the component stories should preserve across buttons, badges, avatars, and text."
      >
        <GuideDemoFrame>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div className="space-y-4">
              <Badge color="green">Recommendation</Badge>
              <Heading level={2} className="text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                Components are not isolated artwork.
              </Heading>
              <Text className="max-w-2xl text-base/7 text-zinc-600 dark:text-zinc-300">
                They should expose enough structure to be composed flexibly while keeping the system’s core rhythm,
                hierarchy, accessibility, and tone intact.
              </Text>
              <div className="flex flex-wrap gap-3">
                <Button color="green">Primary action</Button>
                <Button outline>Secondary action</Button>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-zinc-950/10 bg-white/75 p-5 dark:border-white/10 dark:bg-zinc-900/70">
              <Avatar initials="FH" className="size-14 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" />
              <div>
                <p className="text-sm font-medium text-zinc-950 dark:text-white">Alina system</p>
                <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">Accessible, restrained, and purposeful by default.</p>
              </div>
            </div>
          </div>
        </GuideDemoFrame>
      </GuideSection>
    </GuidePage>
  ),
}
