import clsx from 'clsx'
import type { ReactNode } from 'react'

type Tone = 'neutral' | 'accent' | 'informative'

const toneClasses: Record<Tone, string> = {
  neutral: 'border-zinc-950/10 bg-white/85 text-zinc-950 dark:border-white/10 dark:bg-zinc-950/70 dark:text-white',
  accent: 'border-[#c8d39a] bg-[#f5f8e8] text-[#334019] dark:border-[#667347]/70 dark:bg-[#1b2110] dark:text-[#e5ecc4]',
  informative: 'border-sky-200/80 bg-sky-50/85 text-sky-950 dark:border-sky-900/50 dark:bg-sky-950/35 dark:text-sky-100',
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
      <p className="text-xs font-light uppercase tracking-[0.16em] opacity-70">{eyebrow}</p>
      <p className="mt-2 text-sm font-medium">{title}</p>
      {children ? <div className="mt-2 text-sm/6 opacity-90">{children}</div> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </aside>
  )
}