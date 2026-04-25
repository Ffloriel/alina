import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { GuideCallout, GuideCard, GuideCardGrid, GuideCodeBlock, GuidePage, GuideSection } from '../support/guide'

const meta = {
  title: 'Components/Installation',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Distribution guidance for teams adopting the Alina design system components in other projects.',
      },
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const installationSnippet = `This design system is not on npm at the moment.

To use the components in another project:
1. Copy the component source you need from this repository.
2. Copy any directly imported local primitives or utilities that component depends on.
3. Integrate the copied files into the consuming project's structure.
4. Adapt routing, data fetching, and app-specific logic locally.
5. Keep the copied version aligned with Storybook when the design system changes.`

export const Overview: Story = {
  render: () => (
    <GuidePage>
      <GuideSection
        eyebrow="Getting started"
        title="Install by copying component source"
        summary="Alina components are not published as an npm package right now. Projects using the design system should copy the component source from this repository into their own codebase, then maintain that local copy as the system evolves."
      >
        <GuideCardGrid>
          <GuideCard title="Source of truth" tone="accent">
            <p>This repository is the canonical implementation. Storybook documents how the copied components should look and behave.</p>
          </GuideCard>
          <GuideCard title="Distribution model">
            <p>Use source-copy adoption for now rather than expecting a package manager install flow.</p>
          </GuideCard>
        </GuideCardGrid>
        <GuideCodeBlock language="txt" code={installationSnippet} />
        <GuideCallout title="Important" tone="notice">
          Copy only the components you need, but make sure you also bring over the local dependencies they import from this repository.
        </GuideCallout>
      </GuideSection>
    </GuidePage>
  ),
}