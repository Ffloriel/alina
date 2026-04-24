import clsx from 'clsx'
import React, { forwardRef } from 'react'

export const Slider = forwardRef(function Slider(
  { className, ...props }: { className?: string } & Omit<React.ComponentPropsWithoutRef<'input'>, 'type'>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      type="range"
      data-slot="control"
      {...props}
      className={clsx(
        className,
        'block w-full appearance-none bg-transparent focus:outline-hidden disabled:opacity-50',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500',
        '[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-zinc-950/10 dark:[&::-webkit-slider-runnable-track]:bg-white/14',
        '[&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:border-none [&::-moz-range-track]:bg-zinc-950/10 dark:[&::-moz-range-track]:bg-white/14',
        '[&::-moz-range-progress]:h-2 [&::-moz-range-progress]:rounded-full [&::-moz-range-progress]:bg-[#b9c86f]/70 dark:[&::-moz-range-progress]:bg-[#dbe4b4]/60',
        '[&::-webkit-slider-thumb]:mt-[-6px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-[#9cab56] [&::-webkit-slider-thumb]:bg-[#b9c86f] [&::-webkit-slider-thumb]:shadow-[0_6px_18px_-10px_rgba(90,106,46,0.65)]',
        '[&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-[#9cab56] [&::-moz-range-thumb]:bg-[#b9c86f] [&::-moz-range-thumb]:shadow-[0_6px_18px_-10px_rgba(90,106,46,0.65)]'
      )}
    />
  )
})
