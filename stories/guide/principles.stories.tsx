import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { principleCards, principleTable } from '../support/design-system-data'
import { GuideCallout, GuideCard, GuideCardGrid, GuideHero, GuideList, GuidePage, GuideSection, GuideTable } from '../support/guide'

const meta = {
  title: 'Guide/Principles',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Principles: Story = {
  render: () => (
    <GuidePage>
      <GuideHero
        eyebrow="Principles"
        title={<>Three rules shape every design decision.</>}
        summary="Full Human’s system is opinionated in one specific way: every screen should be clear, human, and purposeful at the same time. If one of those drops out, the work is incomplete."
      />

      <GuideSection
        eyebrow="Core principles"
        title="Use these as design constraints, not poster copy"
        summary="Each principle has explicit behaviors it encourages and specific failure modes it should prevent."
      >
        <GuideCardGrid>
          {principleCards.map((principle) => (
            <GuideCard key={principle.name} title={principle.name} tone="accent">
              <p>{principle.summary}</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Do</p>
                  <div className="mt-2">
                    <GuideList items={principle.doList} />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Avoid</p>
                  <div className="mt-2">
                    <GuideList items={principle.dontList} />
                  </div>
                </div>
              </div>
            </GuideCard>
          ))}
        </GuideCardGrid>
        <GuideCallout title="Non-marketing page rule" tone="notice">
          Marketing pages can persuade. Utility, settings, reference, dashboard, quiz, and account pages cannot. Every section on those pages must directly help the person complete the task.
        </GuideCallout>
      </GuideSection>

      <GuideSection
        eyebrow="Principles in action"
        title="Translate values into product behavior"
        summary="The guide below is the fastest way to judge whether a proposed screen or component fits the system."
      >
        <GuideTable columns={['Principle', 'Means we...', 'Means we do not...']} rows={principleTable} />
      </GuideSection>
    </GuidePage>
  ),
}
