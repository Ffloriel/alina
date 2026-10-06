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
          'grid gap-px overflow-hidden rounded-xl border border-zinc-950/10 bg-zinc-950/10 p-px shadow-float dark:border-white/15 dark:bg-white/10'
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
              className="absolute inset-0 bg-brand-100 shadow-selected ring-1 ring-inset ring-brand-300 dark:bg-brand-200 dark:ring-brand-50/25"
            />
          ) : null}
          <span
            className={clsx(
              'relative z-10 flex min-h-[7.5rem] w-full select-none items-start justify-between gap-4 px-4 py-4 sm:px-5 sm:py-4.5',
              'text-zinc-950 transition-colors duration-150 ease-out motion-reduce:transition-none',
              'group-data-checked:text-brand-900 dark:text-white dark:group-data-checked:text-brand-950',
              'group-data-focus:outline group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-focus',
              'group-data-disabled:opacity-50'
            )}
          >
            <span className="space-y-1.5">
              <span className="block text-sm font-medium">{title}</span>
              {description ? (
                <span className="block text-sm/6 text-zinc-600 group-data-checked:text-brand-800 dark:text-zinc-300 dark:group-data-checked:text-brand-800">
                  {description}
                </span>
              ) : null}
            </span>
            {badge ? (
              <span
                className={clsx(
                  'shrink-0 rounded-md border border-zinc-950/8 bg-white/60 px-2.5 py-1 text-[11px] font-light uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/8 dark:text-zinc-300',
                  'group-data-checked:border-brand-300 group-data-checked:bg-brand-200 group-data-checked:text-brand-800',
                  'dark:group-data-checked:border-brand-50/20 dark:group-data-checked:bg-brand-100/45 dark:group-data-checked:text-brand-950'
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
