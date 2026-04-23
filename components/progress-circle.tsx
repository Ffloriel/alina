import clsx from 'clsx'

type Tone = 'neutral' | 'accent' | 'positive' | 'notice'

const toneClasses: Record<Tone, string> = {
  neutral: 'stroke-zinc-950 dark:stroke-white',
  accent: 'stroke-[#8b9a48]',
  positive: 'stroke-emerald-500',
  notice: 'stroke-amber-500',
}

const trackClasses: Record<Tone, string> = {
  neutral: 'stroke-zinc-950/10 dark:stroke-white/10',
  accent: 'stroke-[#8b9a48]/20',
  positive: 'stroke-emerald-500/20',
  notice: 'stroke-amber-500/20',
}

export function LoadingCircle({
  size = 72,
  strokeWidth = 8,
  tone = 'accent',
  label = 'Loading',
  className,
  children,
  ...props
}: {
  size?: number
  strokeWidth?: number
  tone?: Tone
  label?: string
  className?: string
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<'div'>) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const arcLength = circumference * 0.32

  return (
    <div {...props} role="status" aria-live="polite" className={clsx(className, 'inline-flex flex-col items-center gap-3')}>
      <div
        aria-busy="true"
        className="relative inline-grid place-items-center"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90 motion-safe:animate-spin motion-reduce:animate-none">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className={trackClasses[tone]}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength} ${circumference - arcLength}`}
            strokeDashoffset={0}
            strokeLinecap="round"
            className={toneClasses[tone]}
          />
        </svg>
        <span className="sr-only">{label}</span>
      </div>
      <div className="space-y-1 text-center">
        <p className="text-sm font-medium text-zinc-950 dark:text-white">{label}</p>
        {children ? <div className="text-sm/6 text-zinc-600 dark:text-zinc-300">{children}</div> : null}
      </div>
    </div>
  )
}

export { LoadingCircle as ProgressCircle }