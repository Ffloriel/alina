import clsx from 'clsx'
import type { ReactNode } from 'react'

type Tone = 'neutral' | 'accent' | 'informative'

const toneClasses: Record<Tone, string> = {
  neutral: 'border-zinc-950/10 bg-white/85 text-zinc-950 dark:border-white/10 dark:bg-zinc-950/70 dark:text-white',
  accent: 'border-brand-300 bg-brand-50 text-brand-900 dark:border-brand-600/70 dark:bg-brand-950 dark:text-brand-100',
  informative: 'border-informative-200/80 bg-informative-50/85 text-informative-950 dark:border-informative-900/50 dark:bg-informative-950/35 dark:text-informative-100',
}

export function ContextualHelp({
  tone = 'neutral',
  eyebrow = 'Contextual help',
  title,
  action,
  children,
  className,
  ...props
}: {
  tone?: Tone
  eyebrow?: string
  title: string
  action?: ReactNode
  children?: ReactNode
  className?: string
} & Omit<React.ComponentPropsWithoutRef<'aside'>, 'children'>) {
  return (
    <aside
      {...props}
      className={clsx(className, 'rounded-xl border p-4 sm:p-5', toneClasses[tone])}
    >
      <p className="text-xs font-light uppercase tracking-[0.16em] opacity-80">{eyebrow}</p>
      <p className="mt-2 text-sm font-medium">{title}</p>
      {children ? <div className="mt-2 text-sm/6 opacity-90">{children}</div> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </aside>
  )
}