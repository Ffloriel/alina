import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { Link } from './link'

const styles = {
  base: [
    // Base
    'relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border font-sans text-base/6 font-medium',
    // Sizing
    'px-[calc(--spacing(5)-1px)] py-[calc(--spacing(3)-1px)] sm:px-[calc(--spacing(4.5)-1px)] sm:py-[calc(--spacing(2)-1px)] sm:text-sm/6',
    // Motion
    'transition-[transform,background-color,color,border-color,box-shadow] duration-150 ease-out motion-reduce:transition-none motion-safe:active:scale-[0.985]',
    // Focus
    'focus:not-data-focus:outline-hidden data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500',
    // Disabled
    'data-disabled:opacity-50',
    // Icon
    '*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText]',
  ],
  solid: [
    // Optical border, implemented as the button background to avoid corner artifacts
    'border-transparent bg-(--btn-border)',
    // Dark mode: border is rendered on `after` so background is set to button background
    'dark:bg-(--btn-bg)',
    // Button background, implemented as foreground layer to stack on top of pseudo-border layer
    'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg)',
    // Drop shadow, applied to the inset `before` layer so it blends with the border
    'before:shadow-sm',
    // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
    'dark:before:hidden',
    // Dark mode: Subtle white outline is applied using a border
    'dark:border-white/5',
    // Shim/overlay, inset to match button foreground and used for hover state + highlight shadow
    'after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)]',
    // Inner highlight shadow
    'after:shadow-[inset_0_1px_--theme(--color-white/15%)]',
    // White overlay on hover
    'data-active:after:bg-(--btn-hover-overlay) data-hover:after:bg-(--btn-hover-overlay)',
    // Dark mode: `after` layer expands to cover entire button
    'dark:after:-inset-px dark:after:rounded-lg',
    // Disabled
    'data-disabled:before:shadow-none data-disabled:after:shadow-none',
  ],
  outline: [
    // Base
    'border-zinc-950/10 text-zinc-950 data-active:bg-zinc-950/2.5 data-hover:bg-zinc-950/2.5',
    // Dark mode
    'dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-active:bg-white/5 dark:data-hover:bg-white/5',
    // Icon
    '[--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]',
  ],
  plain: [
    // Base
    'border-transparent text-zinc-950 data-active:bg-zinc-950/5 data-hover:bg-zinc-950/5',
    // Dark mode
    'dark:text-white dark:data-active:bg-white/10 dark:data-hover:bg-white/10',
    // Icon
    '[--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:[--btn-icon:var(--color-zinc-500)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]',
  ],
  colors: {
    'dark/zinc': [
      'text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10',
      'dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:var(--color-white)]/5',
      '[--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)]',
    ],
    light: [
      'text-zinc-950 [--btn-bg:white] [--btn-border:var(--color-zinc-950)]/10 [--btn-hover-overlay:var(--color-zinc-950)]/2.5 data-active:[--btn-border:var(--color-zinc-950)]/15 data-hover:[--btn-border:var(--color-zinc-950)]/15',
      'dark:text-white dark:[--btn-hover-overlay:var(--color-white)]/5 dark:[--btn-bg:var(--color-zinc-800)]',
      '[--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:[--btn-icon:var(--color-zinc-500)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]',
    ],
    'dark/white': [
      'text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10',
      'dark:text-zinc-950 dark:[--btn-bg:white] dark:[--btn-hover-overlay:var(--color-zinc-950)]/5',
      '[--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)] dark:[--btn-icon:var(--color-zinc-500)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]',
    ],
    dark: [
      'text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10',
      'dark:[--btn-hover-overlay:var(--color-white)]/5 dark:[--btn-bg:var(--color-zinc-800)]',
      '[--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)]',
    ],
    white: [
      'text-zinc-950 [--btn-bg:white] [--btn-border:var(--color-zinc-950)]/10 [--btn-hover-overlay:var(--color-zinc-950)]/2.5 data-active:[--btn-border:var(--color-zinc-950)]/15 data-hover:[--btn-border:var(--color-zinc-950)]/15',
      'dark:[--btn-hover-overlay:var(--color-zinc-950)]/5',
      '[--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-500)] data-hover:[--btn-icon:var(--color-zinc-500)]',
    ],
    zinc: [
      'text-zinc-950 [--btn-hover-overlay:var(--color-white)]/30 [--btn-bg:var(--color-zinc-200)] [--btn-border:var(--color-zinc-300)]/90',
      'dark:text-zinc-950 dark:[--btn-bg:var(--color-zinc-100)] dark:[--btn-hover-overlay:var(--color-white)]/40',
      '[--btn-icon:var(--color-zinc-700)] data-active:[--btn-icon:var(--color-zinc-900)] data-hover:[--btn-icon:var(--color-zinc-900)]',
    ],
    indigo: [
      'text-indigo-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-indigo-200)] [--btn-border:var(--color-indigo-300)]/90',
      '[--btn-icon:var(--color-indigo-700)] data-active:[--btn-icon:var(--color-indigo-900)] data-hover:[--btn-icon:var(--color-indigo-900)]',
    ],
    cyan: [
      'text-cyan-950 [--btn-bg:var(--color-cyan-200)] [--btn-border:var(--color-cyan-300)]/85 [--btn-hover-overlay:var(--color-white)]/35',
      '[--btn-icon:var(--color-cyan-700)] data-active:[--btn-icon:var(--color-cyan-900)] data-hover:[--btn-icon:var(--color-cyan-900)]',
    ],
    red: [
      'text-red-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-red-200)] [--btn-border:var(--color-red-300)]/90',
      '[--btn-icon:var(--color-red-700)] data-active:[--btn-icon:var(--color-red-900)] data-hover:[--btn-icon:var(--color-red-900)]',
    ],
    orange: [
      'text-orange-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-orange-200)] [--btn-border:var(--color-orange-300)]/90',
      '[--btn-icon:var(--color-orange-700)] data-active:[--btn-icon:var(--color-orange-900)] data-hover:[--btn-icon:var(--color-orange-900)]',
    ],
    amber: [
      'text-amber-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-amber-200)] [--btn-border:var(--color-amber-300)]/85',
      '[--btn-icon:var(--color-amber-700)] data-active:[--btn-icon:var(--color-amber-900)] data-hover:[--btn-icon:var(--color-amber-900)]',
    ],
    yellow: [
      'text-yellow-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-yellow-200)] [--btn-border:var(--color-yellow-300)]/85',
      '[--btn-icon:var(--color-yellow-700)] data-active:[--btn-icon:var(--color-yellow-900)] data-hover:[--btn-icon:var(--color-yellow-900)]',
    ],
    lime: [
      'text-lime-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-lime-200)] [--btn-border:var(--color-lime-300)]/85',
      '[--btn-icon:var(--color-lime-700)] data-active:[--btn-icon:var(--color-lime-900)] data-hover:[--btn-icon:var(--color-lime-900)]',
    ],
    green: [
      '!text-[#334019] dark:!text-[#334019] [--btn-hover-overlay:rgba(255,255,255,0.18)] [--btn-bg:#b9c86f] [--btn-border:#9cab56]',
      '[--btn-icon:#5a6a2e] data-active:[--btn-icon:#334019] data-hover:[--btn-icon:#334019] dark:[--btn-icon:#5a6a2e] dark:data-active:[--btn-icon:#334019] dark:data-hover:[--btn-icon:#334019]',
    ],
    emerald: [
      'text-emerald-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-emerald-200)] [--btn-border:var(--color-emerald-300)]/90',
      '[--btn-icon:var(--color-emerald-700)] data-active:[--btn-icon:var(--color-emerald-900)] data-hover:[--btn-icon:var(--color-emerald-900)]',
    ],
    teal: [
      'text-teal-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-teal-200)] [--btn-border:var(--color-teal-300)]/90',
      '[--btn-icon:var(--color-teal-700)] data-active:[--btn-icon:var(--color-teal-900)] data-hover:[--btn-icon:var(--color-teal-900)]',
    ],
    sky: [
      'text-sky-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-sky-200)] [--btn-border:var(--color-sky-300)]/90',
      '[--btn-icon:var(--color-sky-700)] data-active:[--btn-icon:var(--color-sky-900)] data-hover:[--btn-icon:var(--color-sky-900)]',
    ],
    blue: [
      'text-blue-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-blue-200)] [--btn-border:var(--color-blue-300)]/90',
      '[--btn-icon:var(--color-blue-700)] data-active:[--btn-icon:var(--color-blue-900)] data-hover:[--btn-icon:var(--color-blue-900)]',
    ],
    violet: [
      'text-violet-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-violet-200)] [--btn-border:var(--color-violet-300)]/90',
      '[--btn-icon:var(--color-violet-700)] data-active:[--btn-icon:var(--color-violet-900)] data-hover:[--btn-icon:var(--color-violet-900)]',
    ],
    purple: [
      'text-purple-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-purple-200)] [--btn-border:var(--color-purple-300)]/90',
      '[--btn-icon:var(--color-purple-700)] data-active:[--btn-icon:var(--color-purple-900)] data-hover:[--btn-icon:var(--color-purple-900)]',
    ],
    fuchsia: [
      'text-fuchsia-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-fuchsia-200)] [--btn-border:var(--color-fuchsia-300)]/90',
      '[--btn-icon:var(--color-fuchsia-700)] data-active:[--btn-icon:var(--color-fuchsia-900)] data-hover:[--btn-icon:var(--color-fuchsia-900)]',
    ],
    pink: [
      'text-pink-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-pink-200)] [--btn-border:var(--color-pink-300)]/90',
      '[--btn-icon:var(--color-pink-700)] data-active:[--btn-icon:var(--color-pink-900)] data-hover:[--btn-icon:var(--color-pink-900)]',
    ],
    rose: [
      'text-rose-950 [--btn-hover-overlay:var(--color-white)]/35 [--btn-bg:var(--color-rose-200)] [--btn-border:var(--color-rose-300)]/90',
      '[--btn-icon:var(--color-rose-700)] data-active:[--btn-icon:var(--color-rose-900)] data-hover:[--btn-icon:var(--color-rose-900)]',
    ],
  },
}

type ButtonProps = (
  | { color?: keyof typeof styles.colors; outline?: never; plain?: never }
  | { color?: never; outline: true; plain?: never }
  | { color?: never; outline?: never; plain: true }
) & { className?: string; children: React.ReactNode } & (
    | ({ href?: never } & Omit<Headless.ButtonProps, 'as' | 'className'>)
    | ({ href: string } & Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>)
  )

export const Button = forwardRef(function Button(
  { color, outline, plain, className, children, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  let classes = clsx(
    className,
    styles.base,
    outline ? styles.outline : plain ? styles.plain : clsx(styles.solid, styles.colors[color ?? 'dark/zinc'])
  )

  return typeof props.href === 'string' ? (
    <Link {...props} className={classes} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  ) : (
    <Headless.Button {...props} className={clsx(classes, 'cursor-default')} ref={ref}>
      <TouchTarget>{children}</TouchTarget>
    </Headless.Button>
  )
})

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
export function TouchTarget({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  )
}
