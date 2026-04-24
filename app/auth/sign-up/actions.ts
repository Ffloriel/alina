'use server'

import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/server'
import { buildAuthPageHref, getSafeNextPath, isAllowedAuthEmail, restrictedSignUpMessage } from '@/lib/auth/access'

function redirectWithError(nextPath: string, message: string) {
  redirect(buildAuthPageHref('/auth/sign-up', nextPath, message))
}

export async function signUp(formData: FormData) {
  const nextPath = getSafeNextPath(formData.get('next'))
  const nameField = formData.get('name')
  const emailField = formData.get('email')
  const passwordField = formData.get('password')
  const name = typeof nameField === 'string' ? nameField.trim() : ''
  const email = typeof emailField === 'string' ? emailField.trim().toLowerCase() : ''
  const password = typeof passwordField === 'string' ? passwordField.trim() : ''

  if (!name || !email || !password) {
    redirectWithError(nextPath, 'Name, email, and password are required.')
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
