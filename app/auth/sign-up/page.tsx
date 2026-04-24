import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { StorybookAuthShell } from '@/components/storybook-auth-shell'
import { allowedAuthEmail, buildAuthPageHref, getSafeNextPath, isAllowedAuthEmail, restrictedSignUpMessage } from '@/lib/auth/access'
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
      badgeLabel="Private Storybook"
      heroTitle="Create the approved account for Storybook access."
      heroDescription="Set up the current Alina Storybook account and keep the design system review flow inside the approved access list."
      panelEyebrow="Account setup"
      panelTitle="Create account"
      panelDescription="Complete the account once, then use it to sign in and review the private Storybook in future sessions."
      notice={
        <p>
          Account creation is currently limited to <span className="font-medium">{allowedAuthEmail}</span>.
        </p>
      }
      error={error}
      footer={
        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <Link className="text-zinc-600 underline-offset-4 transition-[color,text-decoration-color] hover:text-zinc-950 hover:underline dark:text-zinc-300 dark:hover:text-white" href={signInHref}>
            Already have an account?
          </Link>
          <span className="text-zinc-500 dark:text-zinc-400">{restrictedSignUpMessage}</span>
        </div>
      }
    >
      <form action={signUp} className="space-y-4">
        <input type="hidden" name="next" value={nextPath} />
        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-950 dark:text-white">Full name</span>
          <Input aria-label="Full name" name="name" type="text" placeholder="Floriel" />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-950 dark:text-white">Approved email</span>
          <Input aria-label="Approved email" defaultValue={allowedAuthEmail} name="email" type="email" placeholder={allowedAuthEmail} />
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
