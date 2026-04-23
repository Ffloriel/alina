import clsx from 'clsx'
import { Button } from './button'
import { FullHumanLogo } from './logo'

export type FooterLink = {
  label: string
  href: string
}

export type FooterColumn = {
  heading: string
  links: FooterLink[]
}

export const defaultFooterColumns: FooterColumn[] = [
  {
    heading: 'Work',
    links: [
      { label: 'Full Human Health', href: 'https://full-human.com/work/full-human-health' },
      { label: 'Orphos', href: 'https://full-human.com/work/orphos' },
      { label: 'PurgeCSS', href: 'https://full-human.com/work/purgecss' },
      { label: 'See all ->', href: 'https://full-human.com/work' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Blog', href: 'https://medium.com/full-human' },
      { label: 'Contact us', href: 'mailto:contact@full-human.com' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/FullHuman/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/full-human/' },
    ],
  },
] as const

export function Footer({
  columns = defaultFooterColumns,
  newsletterTitle = 'Sign up for our newsletter',
  newsletterDescription = 'Subscribe to get the latest news about Full Human.',
  subscribeLabel = 'Subscribe on Full Human',
  subscribeHref = 'https://full-human.com',
  homeHref = 'https://full-human.com',
  copyright = '© Full Human 2026',
  className,
  ...props
}: {
  columns?: FooterColumn[]
  newsletterTitle?: string
  newsletterDescription?: string
  subscribeLabel?: string
  subscribeHref?: string
  homeHref?: string
  copyright?: string
  className?: string
} & React.ComponentPropsWithoutRef<'footer'>) {
  const subscribeIsExternal = subscribeHref.startsWith('http')
  const homeIsExternal = homeHref.startsWith('http')

  return (
    <footer
      {...props}
      className={clsx(
        'mx-auto w-full max-w-screen-xl border-t border-zinc-950/10 px-4 pb-12 pt-12 md:px-6 dark:border-white/10',
        className
      )}
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(16rem,1.2fr)] lg:gap-12 xl:gap-16">
        <nav className="lg:col-span-3">
          <ul className="grid grid-cols-2 gap-8 text-sm lg:grid-cols-3 lg:gap-10">
            {columns.map((column) => (
              <li key={column.heading}>
                <p className="font-medium uppercase tracking-[0.1em] text-zinc-900 dark:text-zinc-100">{column.heading}</p>
                <ul className="mt-4 space-y-3 font-light text-zinc-700 dark:text-zinc-300">
                  {column.links.map((link) => {
                    const isExternal = link.href.startsWith('http')

                    return (
                      <li key={link.label}>
                        <a
                          className="underline-offset-4 transition-[color,text-decoration-color] hover:text-zinc-950 hover:underline dark:hover:text-white"
                          href={link.href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noreferrer' : undefined}
                        >
                          {link.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:justify-self-end lg:pl-2">
          <div className="max-w-sm">
            <h2 className="text-sm font-medium uppercase tracking-[0.1em] text-zinc-900 dark:text-zinc-100">{newsletterTitle}</h2>
            <p className="mt-4 text-sm font-light text-zinc-700 dark:text-zinc-300">{newsletterDescription}</p>
            <Button
              className="mt-6 !text-zinc-950 dark:!text-zinc-950"
              color="green"
              href={subscribeHref}
              target={subscribeIsExternal ? '_blank' : undefined}
              rel={subscribeIsExternal ? 'noreferrer' : undefined}
            >
              {subscribeLabel}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-end justify-between gap-4 border-t border-zinc-950/10 pt-8 text-sm dark:border-white/10 lg:mt-16">
        <a
          href={homeHref}
          target={homeIsExternal ? '_blank' : undefined}
          rel={homeIsExternal ? 'noreferrer' : undefined}
          aria-label="Full Human home"
        >
          <FullHumanLogo className="h-10 w-auto text-zinc-950 transition hover:text-zinc-700 dark:text-white dark:hover:text-zinc-200" />
        </a>
        <p className="font-light text-zinc-700 dark:text-zinc-300">{copyright}</p>
      </div>
    </footer>
  )
}