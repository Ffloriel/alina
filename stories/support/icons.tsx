import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function HomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M10 2.75 2.75 8.5V17h4.5v-4.5h5.5V17h4.5V8.5L10 2.75Z" />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" {...props}>
      <circle cx="8.5" cy="8.5" r="5.5" strokeWidth="1.5" />
      <path d="m13 13 4 4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M10 2.5 11.9 7l4.6 1.9-4.6 1.9L10 15.5l-1.9-4.7L3.5 8.9 8.1 7 10 2.5Zm5.25 9.5.9 2.35 2.35.9-2.35.9-.9 2.35-.9-2.35-2.35-.9 2.35-.9.9-2.35ZM4.5 12.25l.7 1.55 1.55.7-1.55.7-.7 1.55-.7-1.55-1.55-.7 1.55-.7.7-1.55Z" />
    </svg>
  )
}

export function SettingsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor" {...props}>
      <path d="m8.6 1.8.55 1.95a6.57 6.57 0 0 1 1.7 0l.55-1.95 2.35.85-.55 2a6.67 6.67 0 0 1 1.2 1.2l2-.55.85 2.35-1.95.55a6.58 6.58 0 0 1 0 1.7l1.95.55-.85 2.35-2-.55a6.67 6.67 0 0 1-1.2 1.2l.55 2-2.35.85-.55-1.95a6.57 6.57 0 0 1-1.7 0l-.55 1.95-2.35-.85.55-2a6.67 6.67 0 0 1-1.2-1.2l-2 .55-.85-2.35 1.95-.55a6.58 6.58 0 0 1 0-1.7L2 7.65l.85-2.35 2 .55a6.67 6.67 0 0 1 1.2-1.2l-.55-2 2.35-.85ZM10 7.1A2.9 2.9 0 1 0 10 12.9 2.9 2.9 0 0 0 10 7.1Z" />
    </svg>
  )
}

export function BellIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M10 2.5a4.75 4.75 0 0 0-4.75 4.75v2.32c0 .88-.29 1.73-.82 2.43L3 13.75h14l-1.43-1.75a3.87 3.87 0 0 1-.82-2.43V7.25A4.75 4.75 0 0 0 10 2.5Zm0 15a2.25 2.25 0 0 0 2.12-1.5H7.88A2.25 2.25 0 0 0 10 17.5Z" />
    </svg>
  )
}

export function DotsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M4.5 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    </svg>
  )
}

export function ArrowTrendIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" {...props}>
      <path d="M3 14.5 8 9.5l3 3 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6.5h4v4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}