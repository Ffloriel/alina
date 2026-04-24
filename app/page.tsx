import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/server'
import { buildAuthPageHref, isAllowedAuthEmail } from '@/lib/auth/access'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const { data: session } = await auth.getSession()
  const sessionEmail = session?.user?.email?.trim().toLowerCase() ?? ''

  if (sessionEmail && isAllowedAuthEmail(sessionEmail)) {
    redirect('/storybook')
  }

  redirect(buildAuthPageHref('/auth/sign-in', '/storybook'))
}