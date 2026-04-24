'use client'

import * as Headless from '@headlessui/react'
import React from 'react'

function OpenNavigationIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 5.75C2 5.33579 2.33579 5 2.75 5H17.25C17.6642 5 18 5.33579 18 5.75C18 6.16421 17.6642 6.5 17.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75ZM2 10C2 9.58579 2.33579 9.25 2.75 9.25H17.25C17.6642 9.25 18 9.58579 18 10C18 10.4142 17.6642 10.75 17.25 10.75H2.75C2.33579 10.75 2 10.4142 2 10ZM2.75 13.5C2.33579 13.5 2 13.8358 2 14.25C2 14.6642 2.33579 15 2.75 15H11.25C11.6642 15 12 14.6642 12 14.25C12 13.8358 11.6642 13.5 11.25 13.5H2.75Z" />
    </svg>
  )
}

function CloseNavigationIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" {...props}>
      <path d="m5.5 5.5 9 9m0-9-9 9" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ExpandChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor">
      <path d="m5.5 8 4.5 4.5L14.5 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MobileSidebarSheet({
  open,
  onOpen,
  onClose,
  title = 'Workspace menu',
  description = 'Tap to expand the navigation and browse sections.',
  children,
}: React.PropsWithChildren<{
  open: boolean
  onOpen: () => void
  onClose: () => void
  title?: string
  description?: string
}>) {
  return (
    <>
      {!open ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.7)_42%,rgba(255,255,255,0.96))] dark:bg-[linear-gradient(180deg,rgba(5,5,5,0),rgba(5,5,5,0.72)_42%,rgba(5,5,5,0.97))] lg:hidden"
          />
          <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] lg:hidden">
            <Headless.Button
              aria-controls="mobile-sidebar-sheet"
              aria-expanded={open}
              aria-haspopup="dialog"
              onClick={onOpen}
              className="mx-auto flex w-full max-w-xl flex-col rounded-[1.5rem] border border-zinc-950/10 bg-white/90 px-4 py-3 text-left shadow-[0_24px_60px_-38px_rgba(23,23,23,0.48)] backdrop-blur-xl transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-white active:translate-y-0 dark:border-white/10 dark:bg-zinc-950/84 dark:hover:bg-zinc-950"
            >
              <span aria-hidden="true" className="mx-auto h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <div className="mt-3 flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#eef2da] text-[#5a6a2e] dark:bg-[#334019]/75 dark:text-[#c4d38c]">
                  <OpenNavigationIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-zinc-950 dark:text-white">{title}</p>
                  <p className="mt-0.5 text-xs/5 uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Tap to expand</p>
                </div>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-950/5 text-zinc-500 dark:bg-white/8 dark:text-zinc-300">
                  <ExpandChevronIcon />
                </span>
              </div>
            </Headless.Button>
          </div>
        </>
      ) : null}

      <Headless.Dialog open={open} onClose={onClose} className="lg:hidden">
        <Headless.DialogBackdrop
          transition
          className="fixed inset-0 bg-zinc-950/34 backdrop-blur-sm transition data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
          <Headless.DialogPanel
            id="mobile-sidebar-sheet"
            transition
            className="mx-auto flex w-full max-w-xl flex-col overflow-hidden rounded-[1.85rem] border border-zinc-950/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,244,245,0.95))] shadow-[0_34px_90px_-48px_rgba(23,23,23,0.58)] transition duration-300 ease-out data-closed:translate-y-10 data-closed:opacity-0 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(24,24,27,0.98),rgba(10,10,10,0.98))] dark:shadow-[0_34px_90px_-48px_rgba(0,0,0,0.78)]"
          >
            <div className="border-b border-zinc-950/10 px-4 pb-3 pt-4 dark:border-white/10">
              <span aria-hidden="true" className="mx-auto block h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <div className="mt-4 flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <Headless.DialogTitle className="text-sm font-medium text-zinc-950 dark:text-white">{title}</Headless.DialogTitle>
                  <p className="mt-1 text-sm/6 text-zinc-600 dark:text-zinc-300">{description}</p>
                </div>
                <Headless.CloseButton
                  aria-label="Close navigation"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-950/10 bg-white/72 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-white hover:text-zinc-950 dark:border-white/10 dark:bg-white/8 dark:text-zinc-200 dark:hover:bg-white/12 dark:hover:text-white"
                >
                  <CloseNavigationIcon className="size-4" />
                  <span>Close</span>
                </Headless.CloseButton>
              </div>
            </div>
            <div
              className="max-h-[min(70vh,34rem)] overflow-y-auto p-2 pb-4 [&_[data-slot=sidebar-root]]:overflow-visible [&_[data-slot=sidebar-root]]:rounded-none [&_[data-slot=sidebar-root]]:border-0 [&_[data-slot=sidebar-root]]:bg-transparent [&_[data-slot=sidebar-root]]:shadow-none [&_[data-slot=sidebar-header]]:bg-transparent"
            >
              {children}
            </div>
          </Headless.DialogPanel>
        </div>
      </Headless.Dialog>
    </>
  )
}
