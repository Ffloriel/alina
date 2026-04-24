'use server'

import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/server'
import { buildAuthPageHref, getSafeNextPath, isAllowedAuthEmail, restrictedAccessMessage } from '@/lib/auth/access'

function redirectWithError(nextPath: string, message: string) {
  redirect(buildAuthPageHref('/auth/sign-in', nextPath, message))
}

export async function signIn(formData: FormData) {
  const nextPath = getSafeNextPath(formData.get('next'))
  const emailField = formData.get('email')
  const passwordField = formData.get('password')
  const email = typeof emailField === 'string' ? emailField.trim().toLowerCase() : ''
  const password = typeof passwordField === 'string' ? passwordField.trim() : ''

  if (!email || !password) {
    redirectWithError(nextPath, 'Email and password are required.')
  }

  if (!isAllowedAuthEmail(email)) {
    redirectWithError(nextPath, restrictedAccessMessage)
  }

  const { error } = await auth.signIn.email({
    email,
    password,
  })

  if (error) {
    redirectWithError(nextPath, error.message || 'Failed to sign in. Try again.')
  }

  redirect(nextPath)
}
