import clsx from 'clsx'
import type { ReactNode } from 'react'

type Tone = 'informative' | 'positive' | 'notice' | 'negative'

const toneClasses: Record<Tone, string> = {
  informative: 'border-informative-200/80 bg-informative-50/90 text-informative-950 dark:border-informative-900/50 dark:bg-informative-950/35 dark:text-informative-100',
  positive: 'border-positive-200/80 bg-positive-50/90 text-positive-950 dark:border-positive-900/50 dark:bg-positive-950/35 dark:text-positive-100',
  notice: 'border-notice-200/80 bg-notice-50/90 text-notice-950 dark:border-notice-900/50 dark:bg-notice-950/35 dark:text-notice-100',
  negative: 'border-negative-200/80 bg-negative-50/90 text-negative-950 dark:border-negative-900/50 dark:bg-negative-950/35 dark:text-negative-100',
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