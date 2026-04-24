import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { StorybookAuthShell } from '@/components/storybook-auth-shell'
import { allowedAuthEmail, buildAuthPageHref, getSafeNextPath, isAllowedAuthEmail } from '@/lib/auth/access'
import { auth } from '@/lib/auth/server'
import { signUp } from './actions'

export const dynamic = 'force-dynamic'

type SearchParams = Promise<{
  error?: string
  next?: string
}>

export default async function SignUpPage({ searchParams }: { searchParams: SearchParams }) {
  const { error, next } = await searchParams
  const nextPath = getSafeNextPath(next)
  const signInHref = buildAuthPageHref('/auth/sign-in', nextPath)
  const { data: session } = await auth.getSession()
  const sessionEmail = session?.user?.email?.trim().toLowerCase() ?? ''

  if (sessionEmail && isAllowedAuthEmail(sessionEmail)) {
    redirect(nextPath)
  }

  return (
    <StorybookAuthShell
      badgeLabel="Alina Storybook"
      heroTitle="Create your Alina account."
      heroDescription="Set your name and password to continue."
      panelEyebrow="Account"
      panelTitle="Create account"
      panelDescription="Create the account once, then sign in when needed."
      error={error}
      footer={
        <div className="text-sm">
          <Link className="text-zinc-600 underline-offset-4 transition-[color,text-decoration-color] hover:text-zinc-950 hover:underline dark:text-zinc-300 dark:hover:text-white" href={signInHref}>
            Already have an account?
          </Link>
        </div>
      }
    >
      <form action={signUp} className="space-y-4">
        <input type="hidden" name="next" value={nextPath} />
        <input type="hidden" name="email" value={allowedAuthEmail} />
        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-950 dark:text-white">Full name</span>
          <Input aria-label="Full name" name="name" type="text" />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-950 dark:text-white">Password</span>
          <Input aria-label="Password" name="password" type="password" placeholder="Create a password" />
        </label>
        <div className="pt-2">
          <Button color="green" type="submit" className="w-full justify-center">
            Create account
          </Button>
        </div>
      </form>
    </StorybookAuthShell>
  )
}
