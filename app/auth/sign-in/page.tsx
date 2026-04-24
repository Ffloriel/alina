import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { StorybookAuthShell } from '@/components/storybook-auth-shell'
import { allowedAuthEmail, buildAuthPageHref, getSafeNextPath, isAllowedAuthEmail, restrictedAccessMessage } from '@/lib/auth/access'
import { auth } from '@/lib/auth/server'
import { signOut } from '../sign-out/actions'
import { signIn } from './actions'

export const dynamic = 'force-dynamic'

type SearchParams = Promise<{
  error?: string
  next?: string
}>

export default async function SignInPage({ searchParams }: { searchParams: SearchParams }) {
  const { error, next } = await searchParams
  const nextPath = getSafeNextPath(next)
  const signUpHref = buildAuthPageHref('/auth/sign-up', nextPath)
  const { data: session } = await auth.getSession()
  const sessionEmail = session?.user?.email?.trim().toLowerCase() ?? ''
  const hasUnauthorizedSession = Boolean(sessionEmail) && !isAllowedAuthEmail(sessionEmail)

  if (sessionEmail && isAllowedAuthEmail(sessionEmail)) {
    redirect(nextPath)
  }

  const errorMessage = error ?? (hasUnauthorizedSession ? restrictedAccessMessage : undefined)

  return (
    <StorybookAuthShell
      badgeLabel="Alina Storybook"
      heroTitle="Sign in to Alina."
      heroDescription="Review guide pages, components, and examples."
      panelEyebrow="Account"
      panelTitle="Sign in"
      panelDescription="Enter your password to continue."
      error={errorMessage}
      footer={
        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <Link className="text-zinc-600 underline-offset-4 transition-[color,text-decoration-color] hover:text-zinc-950 hover:underline dark:text-zinc-300 dark:hover:text-white" href={signUpHref}>
            Create account
          </Link>
          {hasUnauthorizedSession ? (
            <form action={signOut}>
              <Button outline type="submit" className="w-full justify-center sm:w-auto">
                Sign out
              </Button>
            </form>
          ) : null}
        </div>
      }
    >
      <form action={signIn} className="space-y-4">
        <input type="hidden" name="next" value={nextPath} />
        <input type="hidden" name="email" value={allowedAuthEmail} />
        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-950 dark:text-white">Password</span>
          <Input aria-label="Password" name="password" type="password" placeholder="Enter your password" />
        </label>
        <div className="pt-2">
          <Button color="green" type="submit" className="w-full justify-center">
            Sign in
          </Button>
        </div>
      </form>
    </StorybookAuthShell>
  )
}
