import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Badge } from '../../components/badge'
import { Button } from '../../components/button'
import { Footer } from '../../components/footer'
import { Heading } from '../../components/heading'
import { Navbar, NavbarItem, NavbarLabel, NavbarSection } from '../../components/navbar'
import { ProgressBar } from '../../components/progress-bar'
import { Text } from '../../components/text'
import { ArrowTrendIcon } from '../support/icons'
import { GuidePage } from '../support/guide'

const meta = {
  title: 'Examples/German Vocabulary',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const vocabularyCategories = [
  { id: 'nouns', label: 'Nouns', count: 803, description: 'Concrete things, people, and abstract ideas.' },
  { id: 'verbs', label: 'Verbs', count: 595, description: 'Action words and common sentence-building patterns.' },
  { id: 'adjectives', label: 'Adjectives', count: 404, description: 'Qualities, comparisons, and descriptive language.' },
  { id: 'adverbs', label: 'Adverbs', count: 152, description: 'Frequency, degree, and sentence nuance.' },
  { id: 'prepositions', label: 'Prepositions', count: 50, description: 'Core connectors for direction, place, and time.' },
  { id: 'conjunctions', label: 'Conjunctions', count: 40, description: 'Sentence links and clause-building essentials.' },
  { id: 'pronouns', label: 'Pronouns', count: 56, description: 'Reference words for people, things, and ownership.' },
  { id: 'phrases', label: 'Phrases', count: 156, description: 'Useful expressions for more natural B2-level responses.' },
] as const

const choiceOptions = [3, 4, 5] as const

const sectionLinks = [
  { href: '#categories', label: 'Categories' },
  { href: '#progress', label: 'Progress' },
  { href: '#statistics', label: 'Statistics' },
] as const

const selectedControlClasses =
  'border-[#d2dba8] bg-[#eef2da] text-[#334019] dark:border-[#9cab56] dark:bg-[#b9c86f] dark:text-[#334019]'

const selectedCardClasses =
  'border-[#d2dba8] bg-[#eef2da]/70 text-[#334019] shadow-[0_14px_34px_-24px_rgba(90,106,46,0.45)] dark:border-[#9cab56] dark:bg-[#b9c86f]/88 dark:text-[#334019]'

const selectedMutedTextClasses = 'text-[#4f5f24] dark:text-[#334019]'

const selectedBadgeClasses = 'bg-[#dbe4b4] text-[#4f5f24] dark:bg-[#a8ba63]/55 dark:text-[#334019]'

const totalWords = vocabularyCategories.reduce((sum, category) => sum + category.count, 0)
const learnedWords = 0
const inProgressWords = 0
const notStartedWords = totalWords - learnedWords - inProgressWords

function GermanVocabularyHomePage() {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>(vocabularyCategories.map((category) => category.id))
  const [choiceCount, setChoiceCount] = useState<(typeof choiceOptions)[number]>(4)

  const allCategoriesSelected = selectedCategoryIds.length === vocabularyCategories.length
  const selectedWordCount = vocabularyCategories
    .filter((category) => selectedCategoryIds.includes(category.id))
    .reduce((sum, category) => sum + category.count, 0)

  const toggleCategory = (categoryId: string) => {
    setSelectedCategoryIds((current) =>
      current.includes(categoryId) ? current.filter((id) => id !== categoryId) : [...current, categoryId]
    )
  }

  const toggleAllCategories = () => {
    setSelectedCategoryIds(allCategoriesSelected ? [] : vocabularyCategories.map((category) => category.id))
  }

  return (
    <GuidePage mobileBleed>
      <section className="border-b border-zinc-950/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(244,244,245,0.92))] pb-8 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(10,10,10,0.98),rgba(24,24,27,0.92))]">
        <header className="px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <div className="space-y-1">
              <p className="text-xs font-light uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Floriel.dev</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">German vocabulary practice</p>
            </div>
            <Navbar className="md:ml-auto md:max-w-fit md:flex-none">
              <NavbarSection className="grid w-full grid-cols-3 md:flex md:w-auto">
                {sectionLinks.map((link) => (
                  <NavbarItem key={link.href} fullWidth href={link.href}>
                    <NavbarLabel>{link.label}</NavbarLabel>
                  </NavbarItem>
                ))}
              </NavbarSection>
            </Navbar>
          </div>
        </header>

        <div className="grid gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14 lg:px-8 lg:py-12">
          <div className="space-y-10">
            <div className="space-y-6">
              <Badge color="green">B2 practice session</Badge>
              <div className="space-y-4">
                <h1 className="max-w-4xl font-sans text-5xl font-extralight tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl dark:text-white">
                  German Vocabulary Quiz
                </h1>
                <Text className="max-w-2xl text-lg/8 text-zinc-600 dark:text-zinc-300">
                  Learn and practice B2 level German vocabulary with custom category mixes, quick multiple-choice rounds, and visible progress across every session.
                </Text>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button color="green" href="#categories">
                  Start quiz
                  <ArrowTrendIcon data-slot="icon" className="stroke-current" />
                </Button>
                <Button outline href="#progress">
                  Review progress
                </Button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="border-t border-zinc-950/10 pt-4 dark:border-white/10">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Total words</p>
                <p className="mt-2 text-3xl font-extralight text-zinc-950 dark:text-white">{totalWords}</p>
              </div>
              <div className="border-t border-zinc-950/10 pt-4 dark:border-white/10">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Categories</p>
                <p className="mt-2 text-3xl font-extralight text-zinc-950 dark:text-white">{vocabularyCategories.length}</p>
              </div>
              <div className="border-t border-zinc-950/10 pt-4 dark:border-white/10">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Choices per round</p>
                <p className="mt-2 text-3xl font-extralight text-zinc-950 dark:text-white">{choiceCount}</p>
              </div>
            </div>
          </div>

          <aside className="space-y-5 border-t border-zinc-950/10 pt-6 dark:border-white/10 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Session summary</p>
            <Heading level={2} className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Build one focused practice round.
            </Heading>
            <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
              Start with the categories you want, keep the number of choices realistic, and let the quiz stay narrow enough to build momentum.
            </Text>
            <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-white/75 p-5 dark:border-white/10 dark:bg-zinc-950/68">
              <div>
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Selected categories</p>
                <p className="mt-2 text-2xl font-extralight text-zinc-950 dark:text-white">{selectedCategoryIds.length || 0}</p>
              </div>
              <div>
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Words in scope</p>
                <p className="mt-2 text-2xl font-extralight text-zinc-950 dark:text-white">{selectedWordCount}</p>
              </div>
              <div>
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Learning rule</p>
                <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">Words are marked as learned after five correct answers in a row.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="categories" className="grid gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Select categories</p>
            <Heading level={2} className="text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Choose the vocabulary set you want to practice.
            </Heading>
            <Text className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">
              Keep all categories selected for a broad session, or narrow the round to the parts of speech you want to reinforce today.
            </Text>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={toggleAllCategories}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                allCategoriesSelected
                  ? selectedControlClasses
                  : 'border-zinc-950/10 bg-white/70 text-zinc-950 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950/60 dark:text-white dark:hover:bg-white/5'
              }`}
            >
              All categories
              <span className={allCategoriesSelected ? selectedMutedTextClasses : 'text-zinc-500 dark:text-zinc-400'}>
                {totalWords}
              </span>
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {vocabularyCategories.map((category) => {
              const isSelected = selectedCategoryIds.includes(category.id)

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  className={`rounded-2xl border p-5 text-left transition-colors ${
                    isSelected
                      ? selectedCardClasses
                      : 'border-zinc-950/10 bg-white/75 text-zinc-950 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950/65 dark:text-white dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-medium">{category.label}</p>
                      <p className={`mt-2 text-sm/6 ${isSelected ? selectedMutedTextClasses : 'text-zinc-600 dark:text-zinc-300'}`}>
                        {category.description}
                      </p>
                    </div>
                    <span
                      className={`rounded-md px-2 py-1 text-xs font-light uppercase tracking-[0.12em] ${
                        isSelected
                          ? selectedBadgeClasses
                          : 'bg-zinc-950/8 text-zinc-600 dark:bg-white/10 dark:text-zinc-300'
                      }`}
                    >
                      {category.count}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-6 dark:border-white/10 dark:bg-white/5">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Number of choices</p>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {choiceOptions.map((option) => {
              const isSelected = option === choiceCount

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setChoiceCount(option)}
                  className={`rounded-xl border px-4 py-4 text-left transition-colors ${
                    isSelected
                      ? selectedControlClasses
                      : 'border-zinc-950/10 bg-white/70 text-zinc-950 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950/60 dark:text-white dark:hover:bg-white/5'
                  }`}
                >
                  <span className="text-2xl font-extralight tracking-tight">{option}</span>
                  <p className={`mt-2 text-xs font-light uppercase tracking-[0.14em] ${isSelected ? selectedMutedTextClasses : 'text-zinc-500 dark:text-zinc-400'}`}>
                    Choices
                  </p>
                </button>
              )
            })}
          </div>
          <Button color="green" className="w-full justify-center" disabled={selectedCategoryIds.length === 0}>
            Start quiz
          </Button>
        </div>
      </section>

      <section id="progress" className="grid gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Learning progress</p>
            <Heading level={2} className="text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Track your learning progress.
            </Heading>
          </div>

          <div className="rounded-2xl border border-zinc-950/10 bg-white/78 p-6 dark:border-white/10 dark:bg-zinc-950/68 lg:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Overall progress</p>
                <p className="mt-2 text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">0%</p>
              </div>
              <Button outline>Reset progress</Button>
            </div>
            <ProgressBar className="mt-6" value={learnedWords} max={totalWords} label="Learning progress" />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-950/10 bg-zinc-50/70 p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-light uppercase tracking-[0.14em] text-zinc-500">Learned</p>
                <p className="mt-2 text-2xl font-extralight text-zinc-950 dark:text-white">{learnedWords}</p>
              </div>
              <div className="rounded-xl border border-zinc-950/10 bg-zinc-50/70 p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-light uppercase tracking-[0.14em] text-zinc-500">In progress</p>
                <p className="mt-2 text-2xl font-extralight text-zinc-950 dark:text-white">{inProgressWords}</p>
              </div>
              <div className="rounded-xl border border-zinc-950/10 bg-zinc-50/70 p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-light uppercase tracking-[0.14em] text-zinc-500">Not started</p>
                <p className="mt-2 text-2xl font-extralight text-zinc-950 dark:text-white">{notStartedWords}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 border-t border-zinc-950/10 pt-6 dark:border-white/10 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Learning rule</p>
          <Text className="text-sm/6 text-zinc-600 dark:text-zinc-300">
            Words are marked as learned after five correct answers in a row. Until then, the homepage keeps the status explicit so the next session feels grounded instead of abstract.
          </Text>
        </div>
      </section>

      <section id="statistics" className="space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Vocabulary statistics</p>
          <Heading level={2} className="text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">
            Vocabulary statistics
          </Heading>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {vocabularyCategories.map((category) => (
            <article key={category.id} className="rounded-2xl border border-zinc-950/10 bg-white/75 p-5 dark:border-white/10 dark:bg-zinc-950/65">
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">{category.label}</p>
              <p className="mt-3 text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">{category.count}</p>
              <p className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer className="pt-14" />
    </GuidePage>
  )
}

export const Overview: Story = {
  render: () => <GermanVocabularyHomePage />,
}
