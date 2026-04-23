'use client'

import * as Headless from '@headlessui/react'
import React, { useState } from 'react'
import { NavbarItem } from './navbar'

function OpenMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
    </svg>
  )
}

function CloseMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  )
}

function MobileSidebar({ open, close, children }: React.PropsWithChildren<{ open: boolean; close: () => void }>) {
  return (
    <Headless.Dialog open={open} onClose={close} className="lg:hidden">
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 bg-zinc-950/32 backdrop-blur-sm transition data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <Headless.DialogPanel
        transition
        className="fixed inset-y-0 left-0 w-full max-w-[21rem] p-3 transition duration-300 ease-in-out data-closed:-translate-x-full"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-950/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,244,245,0.94))] shadow-[0_30px_80px_-46px_rgba(23,23,23,0.45)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(24,24,27,0.98),rgba(10,10,10,0.96))]">
          <div className="-mb-3 px-4 pt-4">
            <Headless.CloseButton as={NavbarItem} aria-label="Close navigation">
              <CloseMenuIcon />
            </Headless.CloseButton>
          </div>
          {children}
        </div>
      </Headless.DialogPanel>
    </Headless.Dialog>
  )
}

export function SidebarLayout({
  navbar,
  sidebar,
  children,
}: React.PropsWithChildren<{ navbar: React.ReactNode; sidebar: React.ReactNode }>) {
  let [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="relative isolate flex min-h-svh w-full max-lg:flex-col bg-[radial-gradient(circle_at_top_left,rgba(185,200,111,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,1),rgba(244,244,245,0.94))] dark:bg-[radial-gradient(circle_at_top_left,rgba(185,200,111,0.08),transparent_24%),linear-gradient(180deg,rgba(10,10,10,1),rgba(24,24,27,0.96))]">
      {/* Sidebar on desktop */}
      <div className="fixed inset-y-0 left-0 w-[19rem] px-4 py-4 max-lg:hidden">{sidebar}</div>

      {/* Sidebar on mobile */}
      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        {sidebar}
      </MobileSidebar>

      {/* Navbar on mobile */}
      <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-zinc-950/10 bg-white/82 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/72 lg:hidden">
        <div>
          <NavbarItem onClick={() => setShowSidebar(true)} aria-label="Open navigation">
            <OpenMenuIcon />
          </NavbarItem>
        </div>
        <div className="min-w-0 flex-1">{navbar}</div>
      </header>

      {/* Content */}
      <main className="flex flex-1 flex-col pb-4 lg:min-w-0 lg:pl-[20rem] lg:pr-4 lg:pt-4">
        <div className="grow px-4 pb-4 pt-6 lg:rounded-2xl lg:border lg:border-zinc-950/10 lg:bg-white/88 lg:px-8 lg:pb-10 lg:pt-8 lg:shadow-[0_30px_80px_-52px_rgba(23,23,23,0.28)] lg:backdrop-blur-xl dark:lg:border-white/10 dark:lg:bg-zinc-950/78 dark:lg:shadow-[0_30px_80px_-52px_rgba(0,0,0,0.72)]">
          <div className="mx-auto max-w-[72rem]">{children}</div>
        </div>
      </main>
    </div>
  )
}
