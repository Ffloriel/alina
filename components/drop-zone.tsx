'use client'

import clsx from 'clsx'
import React, { useId, useRef, useState } from 'react'
import { Button } from './button'

function UploadIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 stroke-current" fill="none">
      <path d="M10 13.75V4.75M10 4.75l-3 3M10 4.75l3 3M4.75 13.25v.75A1.25 1.25 0 0 0 6 15.25h8A1.25 1.25 0 0 0 15.25 14v-.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function DropZone({
  title = 'Drop files here',
  description = 'Drag and drop one or more files, or browse from your computer.',
  hint = 'PDF, CSV, JPG, or PNG up to 25 MB each.',
  browseLabel = 'Browse files',
  accept,
  multiple = true,
  disabled = false,
  onFilesChange,
  children,
  className,
  ...props
}: {
  title?: string
  description?: React.ReactNode
  hint?: React.ReactNode
  browseLabel?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
  onFilesChange?: (files: File[]) => void
  children?: React.ReactNode
  className?: string
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>) {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const dragDepthRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

  const emitFiles = (fileList: FileList | null) => {
    if (!fileList || disabled) {
      return
    }

    onFilesChange?.(Array.from(fileList))
  }

  return (
    <div {...props} className={clsx(className, 'space-y-4')}>
      <div
        aria-disabled={disabled || undefined}
        aria-labelledby={`${inputId}-title`}
        className={clsx(
          'rounded-2xl border border-dashed p-6 transition-colors duration-300 motion-reduce:transition-none lg:p-8',
          disabled && 'cursor-not-allowed border-zinc-950/10 bg-zinc-950/3 opacity-60 dark:border-white/10 dark:bg-white/3',
          !disabled && !isDragging && 'border-zinc-950/15 bg-white/72 dark:border-white/12 dark:bg-zinc-950/62',
          !disabled && isDragging && 'border-[#8b9a48]/70 bg-[#eef2da]/70 dark:border-[#b9c86f]/70 dark:bg-[#334019]/30'
        )}
        onDragEnter={(event) => {
          if (disabled) {
            return
          }

          event.preventDefault()
          dragDepthRef.current += 1
          setIsDragging(true)
        }}
        onDragOver={(event) => {
          if (disabled) {
            return
          }

          event.preventDefault()
          event.dataTransfer.dropEffect = 'copy'
        }}
        onDragLeave={(event) => {
          if (disabled) {
            return
          }

          event.preventDefault()
          dragDepthRef.current = Math.max(dragDepthRef.current - 1, 0)
          if (dragDepthRef.current === 0) {
            setIsDragging(false)
          }
        }}
        onDrop={(event) => {
          if (disabled) {
            return
          }

          event.preventDefault()
          dragDepthRef.current = 0
          setIsDragging(false)
          emitFiles(event.dataTransfer.files)
        }}
      >
        <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-950/10 bg-zinc-50 text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <UploadIcon />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <p id={`${inputId}-title`} className="text-lg font-medium text-zinc-950 dark:text-white">
                {title}
              </p>
              <div className="text-sm/6 text-zinc-600 dark:text-zinc-300">{description}</div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button plain onClick={() => inputRef.current?.click()} disabled={disabled}>
                {browseLabel}
              </Button>
              <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">{hint}</p>
            </div>
          </div>
        </div>

        <input
          ref={inputRef}
          id={inputId}
          type="file"
          className="sr-only"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={(event) => {
            emitFiles(event.currentTarget.files)
            event.currentTarget.value = ''
          }}
        />
      </div>

      {children ? <div className="space-y-3">{children}</div> : null}
    </div>
  )
}