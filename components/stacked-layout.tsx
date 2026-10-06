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
    <div className="relative isolate flex min-h-svh w-full flex-col bg-[radial-gradient(circle_at_top_left,--alpha(var(--color-brand-400)_/_14%),transparent_26%),linear-gradient(180deg,rgba(255,255,255,1),rgba(244,244,245,0.94))] dark:bg-[radial-gradient(circle_at_top_left,--alpha(var(--color-brand-400)_/_8%),transparent_24%),linear-gradient(180deg,rgba(10,10,10,1),rgba(24,24,27,0.96))]">
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
        <div className="grow px-2 py-6 lg:rounded-2xl lg:border lg:border-zinc-950/10 lg:bg-white/88 lg:px-8 lg:py-8 lg:shadow-panel lg:backdrop-blur-xl dark:lg:border-white/10 dark:lg:bg-zinc-950/78">
          <div className="mx-auto max-w-[72rem]">{children}</div>
        </div>
      </main>
    </div>
  )
}
