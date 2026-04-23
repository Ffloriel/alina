import clsx from 'clsx'
import { Avatar } from './avatar'
import { Link } from './link'

export type AvatarGroupItem = {
  src?: string | null
  initials?: string
  alt: string
  href?: string
  square?: boolean
}

const sizeClasses = {
  sm: 'size-8 text-[11px]',
  md: 'size-10 text-xs',
  lg: 'size-12 text-sm',
} as const

const overflowTextClasses = {
  sm: 'text-[11px]',
  md: 'text-xs',
  lg: 'text-sm',
} as const

export function AvatarGroup({
  items = [],
  limit = 4,
  size = 'md',
  square = false,
  className,
  ...props
}: {
  items?: AvatarGroupItem[]
  limit?: number
  size?: keyof typeof sizeClasses
  square?: boolean
  className?: string
} & React.ComponentPropsWithoutRef<'div'>) {
  const visibleItems = items.slice(0, Math.max(limit, 0))
  const overflowCount = Math.max(items.length - visibleItems.length, 0)

  return (
    <div {...props} role="list" className={clsx(className, 'flex items-center -space-x-3')}>
      {visibleItems.map((item, index) => {
        const avatar = (
          <Avatar
            src={item.src}
            initials={item.initials}
            alt={item.alt}
            square={item.square ?? square}
            className={clsx(sizeClasses[size], 'ring-2 ring-white dark:ring-zinc-950')}
          />
        )

        return (
          <div key={`${item.alt}-${index}`} role="listitem" className="relative">
            {item.href ? (
              <Link
                href={item.href}
                aria-label={item.alt}
                className="inline-flex rounded-full focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {avatar}
              </Link>
            ) : (
              avatar
            )}
          </div>
        )
      })}

      {overflowCount > 0 ? (
        <span
          role="listitem"
          aria-label={`${overflowCount} more people`}
          className={clsx(
            sizeClasses[size],
            overflowTextClasses[size],
            'relative inline-flex items-center justify-center rounded-full border border-zinc-950/10 bg-zinc-50 font-medium text-zinc-600 ring-2 ring-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:ring-zinc-950'
          )}
        >
          +{overflowCount}
        </span>
      ) : null}
    </div>
  )
}