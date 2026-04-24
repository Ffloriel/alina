'use client'

import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { LayoutGroup, motion } from 'motion/react'
import React, { forwardRef, useId } from 'react'
import { TouchTarget } from './button'
import { Link } from './link'

export function Sidebar({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>) {
  return <nav {...props} data-slot="sidebar-root" className={clsx('flex h-full min-h-0 flex-col', className)} />
}

export function SidebarHeader({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      data-slot="sidebar-header"
      className={clsx(
        'flex flex-col border-b border-zinc-950/5 p-4 dark:border-white/5 sm:p-5 [&>[data-slot=section]+[data-slot=section]]:mt-3 sm:[&>[data-slot=section]+[data-slot=section]]:mt-4',
        className
      )}
    />
  )
}

export function SidebarBody({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      data-slot="sidebar-body"
      className={clsx(
        'flex flex-1 flex-col overflow-y-auto p-4 sm:p-5 [&>[data-slot=section]+[data-slot=section]]:mt-8 sm:[&>[data-slot=section]+[data-slot=section]]:mt-10',
        className
      )}
    />
  )
}

export function SidebarFooter({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      data-slot="sidebar-footer"
      className={clsx(
        'flex flex-col border-t border-zinc-950/5 p-4 dark:border-white/5 sm:p-5 [&>[data-slot=section]+[data-slot=section]]:mt-3 sm:[&>[data-slot=section]+[data-slot=section]]:mt-4',
        className
      )}
    />
  )
}

export function SidebarSection({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <LayoutGroup id={id}>
      <div {...props} data-slot="section" className={clsx('flex flex-col gap-1', className)} />
    </LayoutGroup>
  )
}

export function SidebarDivider({ className, ...props }: React.ComponentPropsWithoutRef<'hr'>) {
  return <hr {...props} className={clsx('my-3 border-t border-zinc-950/5 sm:my-4 lg:-mx-4 dark:border-white/5', className)} />
}

export function SidebarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx('mt-6 flex-1 sm:mt-8', className)} />
}

export function SidebarHeading({ className, ...props }: React.ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3
      {...props}
      data-slot="sidebar-heading"
      className={clsx(
        'mb-1.5 px-2.5 text-[10px]/5 font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 sm:mb-2 sm:px-3 sm:text-[11px]/6',
        className
      )}
    />
  )
}

export const SidebarItem = forwardRef(function SidebarItem(
  {
    current,
    className,
    children,
    ...props
  }: { current?: boolean; className?: string; children: React.ReactNode } & (
    | ({ href?: never } & Omit<Headless.ButtonProps, 'as' | 'className'>)
    | ({ href: string } & Omit<Headless.ButtonProps<typeof Link>, 'as' | 'className'>)
  ),
  ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
  let classes = clsx(
    // Base
    'relative z-10 flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-left text-sm/5 font-medium transition-colors sm:gap-3.5 sm:rounded-xl sm:px-3 sm:py-3',
    // Leading icon/icon-only
    '*:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500',
    // Trailing icon (down chevron or similar)
    '*:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-4.5 sm:*:last:data-[slot=icon]:size-4',
    // Avatar
    '*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:size-7',
    // Hover
    'data-hover:bg-zinc-950/4 data-hover:*:data-[slot=icon]:fill-zinc-950',
    // Active
    'data-active:bg-zinc-950/6 data-active:*:data-[slot=icon]:fill-zinc-950',
    // Current
    'data-current:text-[#334019] data-current:*:data-[slot=icon]:fill-[#5a6a2e]',
    // Dark mode
    'dark:text-white dark:*:data-[slot=icon]:fill-zinc-400',
    'dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white',
    'dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white',
    'dark:data-current:text-[#e7eccd] dark:data-current:*:data-[slot=icon]:fill-[#c4d38c]'
  )

  return (
    <span data-slot="sidebar-item" className={clsx('relative', className)}>
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="absolute inset-0 rounded-lg bg-[#eef2da] shadow-[0_14px_34px_-24px_rgba(90,106,46,0.8)] ring-1 ring-[#d2dba8] sm:rounded-xl dark:bg-[#334019]/70 dark:ring-[#5a6a2e]/60"
        />
      )}
      {typeof props.href === 'string' ? (
        <Headless.CloseButton
          as={Link}
          {...props}
          aria-current={current ? 'page' : undefined}
          className={classes}
          data-current={current ? 'true' : undefined}
          ref={ref}
        >
          <TouchTarget>{children}</TouchTarget>
        </Headless.CloseButton>
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

export function SidebarLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={clsx('truncate', className)} />
}
