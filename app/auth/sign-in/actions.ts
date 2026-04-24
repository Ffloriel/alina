'use server'

import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/server'
import { allowedAuthEmail, buildAuthPageHref, getSafeNextPath, isAllowedAuthEmail, normalizeEmail, restrictedAccessMessage } from '@/lib/auth/access'

function redirectWithError(nextPath: string, message: string) {
  redirect(buildAuthPageHref('/auth/sign-in', nextPath, message))
}

export async function signIn(formData: FormData) {
  const nextPath = getSafeNextPath(formData.get('next'))
  const emailField = formData.get('email')
  const passwordField = formData.get('password')
  const email = normalizeEmail(emailField) || allowedAuthEmail
  const password = typeof passwordField === 'string' ? passwordField.trim() : ''

  if (!password) {
    redirectWithError(nextPath, 'Password is required.')
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
