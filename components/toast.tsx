import clsx from 'clsx'
import type { ReactNode } from 'react'

type Tone = 'informative' | 'positive' | 'notice' | 'negative'

const toneClasses: Record<Tone, string> = {
  informative: 'border-sky-200/80 bg-white/95 text-zinc-950 dark:border-sky-900/50 dark:bg-zinc-950/92 dark:text-white',
  positive: 'border-emerald-200/80 bg-white/95 text-zinc-950 dark:border-emerald-900/50 dark:bg-zinc-950/92 dark:text-white',
  notice: 'border-amber-200/80 bg-white/95 text-zinc-950 dark:border-amber-900/50 dark:bg-zinc-950/92 dark:text-white',
  negative: 'border-rose-200/80 bg-white/95 text-zinc-950 dark:border-rose-900/50 dark:bg-zinc-950/92 dark:text-white',
}

const accentClasses: Record<Tone, string> = {
  informative: 'bg-sky-500',
  positive: 'bg-emerald-500',
  notice: 'bg-amber-500',
  negative: 'bg-rose-500',
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M5.22 5.22a.75.75 0 0 1 1.06 0L10 8.94l3.72-3.72a.75.75 0 1 1 1.06 1.06L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-3.72 3.72a.75.75 0 1 1-1.06-1.06L8.94 10 5.22 6.28a.75.75 0 0 1 0-1.06Z" />
    </svg>
  )
}

export function Toast({
  tone = 'informative',
  title,
  action,
  onDismiss,
  dismissLabel = 'Dismiss notification',
  children,
  className,
  ...props
}: {
  tone?: Tone
  title: string
  action?: ReactNode
  onDismiss?: () => void
  dismissLabel?: string
  children?: ReactNode
  className?: string
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>) {
  return (
    <div
      role={tone === 'negative' ? 'alert' : 'status'}
      {...props}
      className={clsx(
        className,
        'w-full max-w-sm rounded-xl border p-4 shadow-[0_20px_45px_-32px_rgba(23,23,23,0.45)] backdrop-blur-xl',
        toneClasses[tone]
      )}
    >
      <div className="flex items-start gap-3">
        <span className={clsx('mt-1 block h-2.5 w-2.5 shrink-0 rounded-full', accentClasses[tone])} aria-hidden="true" />
        <div className="min-w-0 flex-1 space-y-1.5">
          <p className="text-sm font-medium">{title}</p>
          {children ? <div className="text-sm/6 text-zinc-600 dark:text-zinc-300">{children}</div> : null}
        </div>
        {(action || onDismiss) && (
          <div className="flex shrink-0 items-start gap-1">
            {action ? <div className="shrink-0">{action}</div> : null}
            {onDismiss ? (
              <button
                type="button"
                aria-label={dismissLabel}
                onClick={onDismiss}
                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-950/5 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
              >
                <CloseIcon />
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}