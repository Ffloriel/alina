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
  mass: 0.8,
} as const

export function SelectionCardGroup({
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
          'grid gap-px overflow-hidden rounded-xl border border-zinc-950/10 bg-zinc-950/10 p-px shadow-[0_20px_45px_-34px_rgba(23,23,23,0.22)] dark:border-white/15 dark:bg-white/10 dark:shadow-[0_20px_45px_-34px_rgba(0,0,0,0.62)]'
        )}
      />
    </LayoutGroup>
  )
}

export function SelectionCard({
  title,
  description,
  badge,
  className,
  ...props
}: {
  title: React.ReactNode
  description?: React.ReactNode
  badge?: React.ReactNode
  className?: string
} & Omit<Headless.RadioProps, 'as' | 'className'>) {
  const reduceMotion = useReducedMotion()

  return (
    <Headless.Radio
      data-slot="control"
      {...props}
      className={clsx(className, 'group relative inline-flex w-full cursor-default select-none text-left focus:outline-hidden group-data-disabled:cursor-not-allowed')}
    >
      {({ checked }) => (
        <span className="relative flex h-full w-full">
          <span className="absolute inset-0 bg-white/[0.82] transition-colors duration-150 ease-out group-data-hover:bg-white dark:bg-white/[0.06] dark:group-data-hover:bg-white/[0.1] motion-reduce:transition-none" />
          {checked ? (
            <motion.span
              layoutId="current-indicator"
              transition={reduceMotion ? { duration: 0 } : selectedIndicatorTransition}
              className="absolute inset-0 bg-[#eef2da] shadow-[0_16px_38px_-30px_rgba(90,106,46,0.48)] ring-1 ring-inset ring-[#d2dba8] dark:bg-[#dbe4b4] dark:shadow-[0_18px_42px_-30px_rgba(0,0,0,0.76)] dark:ring-[#f4f8e1]/25"
            />
          ) : null}
          <span
            className={clsx(
              'relative z-10 flex min-h-[7.5rem] w-full select-none items-start justify-between gap-4 px-4 py-4 sm:px-5 sm:py-4.5',
              'text-zinc-950 transition-colors duration-150 ease-out motion-reduce:transition-none',
              'group-data-checked:text-[#334019] dark:text-white dark:group-data-checked:text-[#273112]',
              'group-data-focus:outline group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-blue-500',
              'group-data-disabled:opacity-50'
            )}
          >
            <span className="space-y-1.5">
              <span className="block text-sm font-medium">{title}</span>
              {description ? (
                <span className="block text-sm/6 text-zinc-600 group-data-checked:text-[#4f5f24] dark:text-zinc-300 dark:group-data-checked:text-[#3d4a20]">
                  {description}
                </span>
              ) : null}
            </span>
            {badge ? (
              <span
                className={clsx(
                  'shrink-0 rounded-md border border-zinc-950/8 bg-white/60 px-2.5 py-1 text-[11px] font-light uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/8 dark:text-zinc-300',
                  'group-data-checked:border-[#c6d48c] group-data-checked:bg-[#dbe4b4] group-data-checked:text-[#4f5f24]',
                  'dark:group-data-checked:border-[#f4f8e1]/20 dark:group-data-checked:bg-[#eef4d6]/45 dark:group-data-checked:text-[#273112]'
                )}
              >
                {badge}
              </span>
            ) : null}
          </span>
        </span>
      )}
    </Headless.Radio>
  )
}
