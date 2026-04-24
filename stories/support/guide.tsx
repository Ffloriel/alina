import clsx from 'clsx'
import type { ReactNode } from 'react'

type Tone = 'neutral' | 'accent' | 'positive' | 'notice'

export function GuidePage({
  children,
  className,
  mobileBleed = false,
}: {
  children: ReactNode
  className?: string
  mobileBleed?: boolean
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)]">
      <div
        className={clsx(
          'mx-auto flex w-full max-w-[88rem] flex-col gap-14 md:gap-20 lg:gap-24',
          mobileBleed ? 'px-0 py-0 sm:px-6 sm:py-12 lg:px-14 lg:py-20 xl:px-16' : 'px-4 py-10 sm:px-6 sm:py-12 lg:px-14 lg:py-20 xl:px-16',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function GuideHero({
  eyebrow,
  title,
  summary,
  actions,
  aside,
}: {
  eyebrow: string
  title: ReactNode
  summary: ReactNode
  actions?: ReactNode
  aside?: ReactNode
}) {
  return (
    <section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end lg:gap-16">
      <div className="space-y-8">
        <p className="text-xs font-light uppercase tracking-[0.22em] text-zinc-500">{eyebrow}</p>
        <div className="space-y-6">
          <h1 className="max-w-5xl font-sans text-5xl font-extralight tracking-tight text-zinc-950 sm:text-6xl dark:text-white">
            {title}
          </h1>
          <p className="max-w-3xl text-lg/8 text-zinc-600 dark:text-zinc-300">{summary}</p>
        </div>
        {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
      </div>
      {aside && <div className="border-t border-zinc-950/10 pt-6 dark:border-white/10 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">{aside}</div>}
    </section>
  )
}

export function GuideSection({
  eyebrow,
  title,
  summary,
  children,
}: {
  eyebrow?: string
  title: string
  summary?: ReactNode
  children: ReactNode
}) {
  return (
    <section className="space-y-8 lg:space-y-10">
      <div className="space-y-4 lg:space-y-5">
        {eyebrow && <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">{eyebrow}</p>}
        <h2 className="font-sans text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">{title}</h2>
        {summary && <p className="max-w-3xl text-base/7 text-zinc-600 dark:text-zinc-300">{summary}</p>}
      </div>
      {children}
    </section>
  )
}

export function GuideCardGrid({ children, columns = 2 }: { children: ReactNode; columns?: 2 | 3 | 4 }) {
  return (
    <div
      className={clsx(
        'grid gap-6 lg:gap-8 xl:gap-10',
        columns === 2 && 'md:grid-cols-2',
        columns === 3 && 'md:grid-cols-2 xl:grid-cols-3',
        columns === 4 && 'md:grid-cols-2 xl:grid-cols-4'
      )}
    >
      {children}
    </div>
  )
}

export function GuideCard({
  eyebrow,
  title,
  children,
  tone = 'neutral',
}: {
  eyebrow?: string
  title: string
  children: ReactNode
  tone?: Tone
}) {
  return (
    <article className={clsx('border-t pt-6 lg:pt-7', toneClasses[tone])}>
      <div className="space-y-4">
        {eyebrow && <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">{eyebrow}</p>}
        <h3 className="font-sans text-xl font-medium text-zinc-950 dark:text-white">{title}</h3>
        <div className="space-y-3 text-sm/6 text-zinc-600 dark:text-zinc-300">{children}</div>
      </div>
    </article>
  )
}

export function GuideTable({
  columns,
  rows,
}: {
  columns: string[]
  rows: ReadonlyArray<ReadonlyArray<ReactNode>>
}) {
  return (
    <div className="overflow-hidden border-y border-zinc-950/10 dark:border-white/10">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-950/10 text-left dark:divide-white/10">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-4 py-3 text-xs font-light uppercase tracking-[0.16em] text-zinc-500">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-950/5 dark:divide-white/5">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 align-top text-sm/6 text-zinc-700 dark:text-zinc-200">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function GuideList({ items }: { items: ReadonlyArray<string> }) {
  return (
    <ul className="space-y-2 text-sm/6 text-zinc-600 dark:text-zinc-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-zinc-400" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function GuideDoDont({ title, doText, dontText }: { title: string; doText: string; dontText: string }) {
  return (
    <article className="border-t border-zinc-950/10 pt-6 lg:pt-7 dark:border-white/10">
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-zinc-950 dark:text-white">{title}</h3>
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
          <div className="border-l-2 border-emerald-500/35 pl-4">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">Do</p>
            <p className="mt-2 text-sm/6 text-zinc-700 dark:text-zinc-200">{doText}</p>
          </div>
          <div className="border-l-2 border-red-500/35 pl-4">
            <p className="text-xs font-light uppercase tracking-[0.16em] text-red-700 dark:text-red-300">Do not</p>
            <p className="mt-2 text-sm/6 text-zinc-700 dark:text-zinc-200">{dontText}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export function GuideCallout({ title, children, tone = 'neutral' }: { title: string; children: ReactNode; tone?: Tone }) {
  return (
    <div className={clsx('border-l-2 pl-5 lg:pl-6', toneClasses[tone])}>
      <p className="text-sm font-medium text-zinc-950 dark:text-white">{title}</p>
      <div className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-300">{children}</div>
    </div>
  )
}

export function GuideDemoFrame({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={clsx(
        'text-zinc-950',
        dark
          ? 'dark rounded-2xl bg-zinc-950 p-6 text-zinc-100 lg:p-8 xl:p-10'
          : 'py-1 text-zinc-950 dark:text-zinc-100'
      )}
    >
      {children}
    </div>
  )
}

export function GuideCodeBlock({ code, language = 'txt' }: { code: string; language?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-zinc-950 dark:border-white/10">
      <div className="border-b border-white/10 px-4 py-3 text-xs font-light uppercase tracking-[0.16em] text-zinc-400">{language}</div>
      <pre className="overflow-x-auto p-4 font-mono text-sm/6 text-zinc-100">
        <code>{code}</code>
      </pre>
    </div>
  )
}

const toneClasses: Record<Tone, string> = {
  neutral: 'border-zinc-950/10 dark:border-white/10',
  accent: 'border-emerald-500/35',
  positive: 'border-emerald-500/35',
  notice: 'border-amber-500/35',
}
