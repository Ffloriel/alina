import clsx from 'clsx'
import type { ReactNode } from 'react'

type Tone = 'informative' | 'positive' | 'notice' | 'negative'

const toneClasses: Record<Tone, string> = {
  informative: 'border-sky-200/80 bg-sky-50/90 text-sky-950 dark:border-sky-900/50 dark:bg-sky-950/35 dark:text-sky-100',
  positive: 'border-emerald-200/80 bg-emerald-50/90 text-emerald-950 dark:border-emerald-900/50 dark:bg-emerald-950/35 dark:text-emerald-100',
  notice: 'border-amber-200/80 bg-amber-50/90 text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/35 dark:text-amber-100',
  negative: 'border-rose-200/80 bg-rose-50/90 text-rose-950 dark:border-rose-900/50 dark:bg-rose-950/35 dark:text-rose-100',
}

export function AlertBanner({
  tone = 'informative',
  title,
  actions,
  children,
  className,
  ...props
}: {
  tone?: Tone
  title: string
  actions?: ReactNode
  children?: ReactNode
  className?: string
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>) {
  return (
    <div
      role={tone === 'negative' ? 'alert' : 'status'}
      {...props}
      className={clsx(className, 'rounded-xl border px-4 py-3 sm:px-5 sm:py-4', toneClasses[tone])}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 space-y-1.5">
          <p className="text-sm font-medium">{title}</p>
          {children ? <div className="max-w-3xl text-sm/6 opacity-90">{children}</div> : null}
        </div>
        {actions ? <div className="flex shrink-0 flex-wrap gap-3">{actions}</div> : null}
      </div>
    </div>
  )
}