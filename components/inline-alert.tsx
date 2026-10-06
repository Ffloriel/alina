import clsx from 'clsx'
import type { ReactNode } from 'react'

type Tone = 'informative' | 'positive' | 'notice' | 'negative'

const toneClasses: Record<Tone, string> = {
  informative: 'border-informative-200/80 bg-informative-50/80 text-informative-950 dark:border-informative-900/50 dark:bg-informative-950/30 dark:text-informative-100',
  positive: 'border-positive-200/80 bg-positive-50/80 text-positive-950 dark:border-positive-900/50 dark:bg-positive-950/30 dark:text-positive-100',
  notice: 'border-notice-200/80 bg-notice-50/80 text-notice-950 dark:border-notice-900/50 dark:bg-notice-950/30 dark:text-notice-100',
  negative: 'border-negative-200/80 bg-negative-50/80 text-negative-950 dark:border-negative-900/50 dark:bg-negative-950/30 dark:text-negative-100',
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