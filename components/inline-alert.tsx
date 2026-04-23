import clsx from 'clsx'
import type { ReactNode } from 'react'

type Tone = 'informative' | 'positive' | 'notice' | 'negative'

const toneClasses: Record<Tone, string> = {
  informative: 'border-sky-200/80 bg-sky-50/80 text-sky-950 dark:border-sky-900/50 dark:bg-sky-950/30 dark:text-sky-100',
  positive: 'border-emerald-200/80 bg-emerald-50/80 text-emerald-950 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-100',
  notice: 'border-amber-200/80 bg-amber-50/80 text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100',
  negative: 'border-rose-200/80 bg-rose-50/80 text-rose-950 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-100',
}

export function InlineAlert({
  tone = 'informative',
  title,
  children,
  className,
  ...props
}: {
  tone?: Tone
  title: string
  children?: ReactNode
  className?: string
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>) {
  return (
    <div
      role={tone === 'negative' ? 'alert' : 'status'}
      {...props}
      className={clsx(className, 'rounded-xl border border-l-[3px] px-4 py-3', toneClasses[tone])}
    >
      <p className="text-sm font-medium">{title}</p>
      {children ? <div className="mt-1.5 text-sm/6 opacity-90">{children}</div> : null}
    </div>
  )
}