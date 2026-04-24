'use server'

import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/server'
import { allowedAuthEmail, buildAuthPageHref, getSafeNextPath, isAllowedAuthEmail, normalizeEmail, restrictedSignUpMessage } from '@/lib/auth/access'

function redirectWithError(nextPath: string, message: string) {
  redirect(buildAuthPageHref('/auth/sign-up', nextPath, message))
}

export async function signUp(formData: FormData) {
  const nextPath = getSafeNextPath(formData.get('next'))
  const nameField = formData.get('name')
  const emailField = formData.get('email')
  const passwordField = formData.get('password')
  const name = typeof nameField === 'string' ? nameField.trim() : ''
  const email = normalizeEmail(emailField) || allowedAuthEmail
  const password = typeof passwordField === 'string' ? passwordField.trim() : ''

  if (!name || !password) {
    redirectWithError(nextPath, 'Name and password are required.')
  }

  if (!isAllowedAuthEmail(email)) {
    redirectWithError(nextPath, restrictedSignUpMessage)
  }

  const { error } = await auth.signUp.email({
    name,
    email,
    password,
  })

  if (error) {
    redirectWithError(nextPath, error.message || 'Failed to create the account. Try again.')
  }

  redirect(nextPath)
}
