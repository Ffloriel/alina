import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { quickReferenceTree, techStackRows } from '../support/design-system-data'
import { GuideCallout, GuideCodeBlock, GuideHero, GuidePage, GuideSection, GuideTable } from '../support/guide'

const meta = {
  title: 'Guide/Reference',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Reference: Story = {
  render: () => (
    <GuidePage>
      <GuideHero
        eyebrow="Quick reference"
        title={<>Operational details live here, not in a separate markdown spec.</>}
        summary="This page holds the structural and technical reference that used to sit at the bottom of the standalone design-system document."
      />

      <GuideSection
        eyebrow="Workspace structure"
        title="The repository layout mirrors the guide"
        summary="Guide pages explain the system, component stories demonstrate it, and the preserved components implement it."
      >
        <GuideCodeBlock language="txt" code={quickReferenceTree} />
      </GuideSection>

      <GuideSection
        eyebrow="Tech stack"
        title="Current implementation stack"
        summary="These versions describe the operating environment for the current design system workspace."
      >
        <GuideTable columns={['Layer', 'Technology']} rows={techStackRows} />
        <GuideCallout title="Source of truth" tone="notice">
          Storybook is the design-system source of truth. Update these guide pages and the component stories whenever the implementation or the system rules change.
        </GuideCallout>
      </GuideSection>
    </GuidePage>
  ),
}