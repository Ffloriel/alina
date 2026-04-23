import clsx from 'clsx'
import type { ReactNode } from 'react'

type Side = 'top' | 'right' | 'bottom' | 'left'

const sideClasses: Record<Side, string> = {
  top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  right: 'top-1/2 left-full ml-2 -translate-y-1/2',
  bottom: 'top-full left-1/2 mt-2 -translate-x-1/2',
  left: 'top-1/2 right-full mr-2 -translate-y-1/2',
}

export function Tooltip({
  content,
  side = 'top',
  open = false,
  className,
  panelClassName,
  children,
}: {
  content: ReactNode
  side?: Side
  open?: boolean
  className?: string
  panelClassName?: string
  children: ReactNode
}) {
  return (
    <span className={clsx(className, 'group/tooltip relative inline-flex')}>
      {children}
      <span
        role="tooltip"
        className={clsx(
          'pointer-events-none absolute z-20 w-max max-w-60 rounded-lg border border-zinc-950/10 bg-zinc-950 px-3 py-2 text-xs/5 text-white shadow-[0_18px_40px_-28px_rgba(23,23,23,0.65)] transition duration-150 dark:border-white/10',
          sideClasses[side],
          open
            ? 'opacity-100'
            : 'opacity-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100',
          panelClassName
        )}
      >
        {content}
      </span>
    </span>
  )
}