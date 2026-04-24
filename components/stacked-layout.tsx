'use client'

import React, { useState } from 'react'
import { MobileSidebarSheet } from './mobile-sidebar-sheet'

export function StackedLayout({
  navbar,
  sidebar,
  children,
}: React.PropsWithChildren<{ navbar: React.ReactNode; sidebar: React.ReactNode }>) {
  let [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="relative isolate flex min-h-svh w-full flex-col bg-[radial-gradient(circle_at_top_left,rgba(185,200,111,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,1),rgba(244,244,245,0.94))] dark:bg-[radial-gradient(circle_at_top_left,rgba(185,200,111,0.08),transparent_24%),linear-gradient(180deg,rgba(10,10,10,1),rgba(24,24,27,0.96))]">
      {/* Sidebar on mobile */}
      <MobileSidebarSheet open={showSidebar} onOpen={() => setShowSidebar(true)} onClose={() => setShowSidebar(false)}>
        {sidebar}
      </MobileSidebarSheet>

      {/* Navbar */}
      <header className="sticky top-0 z-30 px-4 pt-5 backdrop-blur-xl">
        <div className="min-w-0">{navbar}</div>
      </header>

      {/* Content */}
      <main className="flex flex-1 flex-col px-4 pb-28 pt-2 lg:pb-4">
        <div className="grow px-2 py-6 lg:rounded-2xl lg:border lg:border-zinc-950/10 lg:bg-white/88 lg:px-8 lg:py-8 lg:shadow-[0_30px_80px_-52px_rgba(23,23,23,0.28)] lg:backdrop-blur-xl dark:lg:border-white/10 dark:lg:bg-zinc-950/78 dark:lg:shadow-[0_30px_80px_-52px_rgba(0,0,0,0.72)]">
          <div className="mx-auto max-w-[72rem]">{children}</div>
        </div>
      </main>
    </div>
  )
}
