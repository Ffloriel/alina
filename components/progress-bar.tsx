import clsx from 'clsx'

type Tone = 'neutral' | 'accent' | 'positive' | 'notice'

const toneClasses: Record<Tone, string> = {
  neutral: 'bg-zinc-950 dark:bg-white',
  accent: 'bg-[#8b9a48]',
  positive: 'bg-emerald-500',
  notice: 'bg-amber-500',
}

function clampProgress(value: number, max: number) {
  if (max <= 0) return 0
  return Math.min(Math.max((value / max) * 100, 0), 100)
}

export function ProgressBar({
  value,
  max = 100,
  tone = 'accent',
  label,
  showValue = true,
  className,
  ...props
}: {
  value: number
  max?: number
  tone?: Tone
  label?: string
  showValue?: boolean
  className?: string
} & React.ComponentPropsWithoutRef<'div'>) {
  const percentage = clampProgress(value, max)

  return (
    <div {...props} className={clsx(className, 'space-y-2')}>
      {(label || showValue) && (
        <div className="flex items-center justify-between gap-3 text-xs font-light uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
          <span>{label}</span>
          {showValue ? <span>{Math.round(percentage)}%</span> : null}
        </div>
      )}
      <div
        aria-label={label ?? 'Progress'}
        aria-valuemax={max}
        aria-valuemin={0}
        aria-valuenow={Math.min(Math.max(value, 0), max)}
        role="progressbar"
        className="h-2.5 overflow-hidden rounded-full bg-zinc-950/8 dark:bg-white/10"
      >
        <div className={clsx('h-full rounded-full transition-[width] duration-300', toneClasses[tone])} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}