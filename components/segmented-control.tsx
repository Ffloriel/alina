'use client'

import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { LayoutGroup, motion, useReducedMotion } from 'motion/react'
import type React from 'react'
import { useId } from 'react'

const selectedIndicatorTransition = {
  type: 'spring',
  stiffness: 420,
  damping: 36,
  mass: 0.78,
} as const

export function SegmentedControl({
  className,
  ...props
}: { className?: string } & Omit<Headless.RadioGroupProps, 'as' | 'className'>) {
  const id = useId()

  return (
    <LayoutGroup id={id}>
      <Headless.RadioGroup
        data-slot="control"
        {...props}
        className={clsx(
          className,
          'flex w-full flex-wrap items-stretch gap-px overflow-hidden rounded-xl border border-zinc-950/10 bg-zinc-950/[0.05] p-px shadow-[0_20px_45px_-36px_rgba(23,23,23,0.28)] backdrop-blur-sm dark:border-white/15 dark:bg-white/[0.08] dark:shadow-[0_20px_45px_-36px_rgba(0,0,0,0.72)]'
        )}
      />
    </LayoutGroup>
  )
}

export function SegmentedControlOption({
  children,
  className,
  fullWidth = false,
  ...props
}: {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
} & Omit<Headless.RadioProps, 'as' | 'className'>) {
  const reduceMotion = useReducedMotion()

  return (
    <Headless.Radio
      data-slot="control"
      {...props}
      className={clsx(
        className,
        'group relative flex min-w-[7.25rem] flex-1 basis-[7.25rem] cursor-default select-none focus:outline-hidden group-data-disabled:cursor-not-allowed',
        fullWidth && 'min-w-0 basis-0'
      )}
    >
      {({ checked }) => (
        <span className="relative flex w-full items-center justify-center">
          <span className="absolute inset-0 rounded-lg bg-white/0 transition-colors duration-150 ease-out group-data-hover:bg-white/72 group-data-active:bg-white/88 dark:group-data-hover:bg-white/[0.08] dark:group-data-active:bg-white/[0.12] motion-reduce:transition-none" />
          {checked ? (
            <motion.span
              layoutId="current-indicator"
              transition={reduceMotion ? { duration: 0 } : selectedIndicatorTransition}
              className="absolute inset-0 rounded-lg bg-[#eef2da] shadow-[0_14px_34px_-24px_rgba(90,106,46,0.55)] ring-1 ring-[#d2dba8] dark:bg-[#dbe4b4] dark:shadow-[0_18px_38px_-28px_rgba(0,0,0,0.8)] dark:ring-[#f4f8e1]/25"
            />
          ) : null}
          <span
            className={clsx(
              'relative z-10 flex w-full select-none items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-center text-sm/5 font-medium transition-colors duration-150 ease-out motion-reduce:transition-none',
              '*:data-[slot=icon]:size-4.5 *:data-[slot=icon]:shrink-0',
              'text-zinc-600 group-data-hover:text-zinc-950 group-data-active:text-zinc-950 group-data-checked:text-[#334019]',
              'dark:text-zinc-300 dark:group-data-hover:text-white dark:group-data-active:text-white dark:group-data-checked:text-[#273112]',
              'group-data-focus:outline group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-blue-500',
              'group-data-disabled:opacity-50'
            )}
          >
            {children}
          </span>
        </span>
      )}
    </Headless.Radio>
  )
}
