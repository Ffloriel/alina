'use client'

import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { LayoutGroup, motion } from 'motion/react'
import React, { forwardRef, useId } from 'react'
import { TouchTarget } from './button'
import { Link } from './link'

export function Navbar({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav
      {...props}
      className={clsx(
        className,
        'flex w-full min-w-0 flex-col items-stretch gap-1.5 rounded-2xl border border-zinc-950/10 bg-white/80 p-1.5 font-sans shadow-[0_20px_45px_-32px_rgba(23,23,23,0.45)] backdrop-blur-xl md:flex-row md:items-center md:gap-2 md:rounded-xl dark:border-white/10 dark:bg-zinc-950/75 dark:shadow-[0_20px_45px_-32px_rgba(0,0,0,0.75)]'
      )}
    />
  )
}

export function NavbarDivider({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx(className, 'hidden h-8 w-px self-center bg-zinc-950/10 md:block dark:bg-white/10')} />
}

export function NavbarSection({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <LayoutGroup id={id}>
      <div {...props} className={clsx('flex min-w-0 flex-wrap items-stretch gap-1.5 md:items-center', className)} />
    </LayoutGroup>
  )
}

export function NavbarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx(className, 'hidden flex-1 md:block')} />
}

export const NavbarItem = forwardRef(function NavbarItem(
  {
    current,
    fullWidth,
    className,
    children,
    ...props
  }: { current?: boolean; fullWidth?: boolean; className?: string; children: React.ReactNode } & (
    | ({ href?: never } & Omit<Headless.ButtonProps, 'as' | 'className'>)
    | ({ href: string } & Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>)
  ),
  ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
  let classes = clsx(
    // Base
    'relative z-10 flex min-w-0 items-center justify-center gap-2.5 rounded-xl px-4 py-3 text-center font-sans text-sm/5 font-medium transition-colors md:justify-start md:rounded-lg md:px-4.5 md:py-2 md:text-left',
    // Leading icon/icon-only
    '*:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 md:*:data-[slot=icon]:size-4.5',
    // Trailing icon (down chevron or similar)
    '*:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-4.5 md:*:not-nth-2:last:data-[slot=icon]:size-4',
    // Avatar
    '*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] md:*:data-[slot=avatar]:size-6',
    fullWidth && 'w-full',
    current
      ? 'text-[#334019] *:data-[slot=icon]:fill-[#5a6a2e] dark:text-[#e7eccd] dark:*:data-[slot=icon]:fill-[#c4d38c]'
      : 'text-zinc-600 *:data-[slot=icon]:fill-zinc-500 data-hover:bg-white/70 data-hover:text-zinc-950 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-white/70 data-active:text-zinc-950 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-zinc-200 dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/8 dark:data-hover:text-white dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/8 dark:data-active:text-white dark:data-active:*:data-[slot=icon]:fill-white'
  )

  return (
    <span className={clsx('relative block min-w-0', fullWidth && 'w-full', className)}>
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="absolute inset-0 rounded-xl bg-[#eef2da] shadow-[0_14px_34px_-24px_rgba(90,106,46,0.8)] ring-1 ring-[#d2dba8] md:rounded-lg dark:bg-[#3c4724] dark:ring-[#677645]/70"
        />
      )}
      {typeof props.href === 'string' ? (
        <Link
          {...props}
          aria-current={current ? 'page' : undefined}
          className={classes}
          data-current={current ? 'true' : undefined}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        >
          <TouchTarget>{children}</TouchTarget>
        </Link>
      ) : (
        <Headless.Button
          {...props}
          aria-current={current ? 'page' : undefined}
          className={clsx('cursor-pointer', classes)}
          data-current={current ? 'true' : undefined}
          ref={ref}
        >
          <TouchTarget>{children}</TouchTarget>
        </Headless.Button>
      )}
    </span>
  )
})

export function NavbarLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={clsx(className, 'min-w-0 truncate font-sans')} />
}
