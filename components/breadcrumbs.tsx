import clsx from 'clsx'
import { Link } from './link'

export type BreadcrumbItem = {
  label: string
  href?: string
  current?: boolean
}

export function Breadcrumbs({
  items,
  className,
  ...props
}: {
  items: BreadcrumbItem[]
  className?: string
} & React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav aria-label="Breadcrumb" {...props} className={clsx(className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
        {items.map((item, index) => {
          const current = item.current ?? index === items.length - 1

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !current ? (
                <Link
                  href={item.href}
                  className="underline-offset-4 transition-[color,text-decoration-color] hover:text-zinc-950 hover:underline dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={current ? 'page' : undefined} className="text-zinc-950 dark:text-white">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 ? <span aria-hidden="true">/</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}