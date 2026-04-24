const defaultStorybookPath = '/storybook'

export const allowedAuthEmail = 'floriel@full-human.com'
export const restrictedAccessMessage = 'Use the correct account to continue.'
export const restrictedSignUpMessage = 'Unable to create that account.'

export function normalizeEmail(value: FormDataEntryValue | string | null | undefined) {
  return typeof value === 'string' ? value.trim().toLowerCase() : ''
}

export function isAllowedAuthEmail(value: FormDataEntryValue | string | null | undefined) {
  return normalizeEmail(value) === allowedAuthEmail
}

export function getSafeNextPath(value: FormDataEntryValue | string | null | undefined, fallback = defaultStorybookPath) {
  if (typeof value !== 'string') {
    return fallback
  }

  const trimmedValue = value.trim()

  if (!trimmedValue.startsWith('/') || trimmedValue.startsWith('//')) {
    return fallback
  }

  return trimmedValue
}

export function buildAuthPageHref(path: '/auth/sign-in' | '/auth/sign-up', nextPath?: string, error?: string) {
  const searchParams = new URLSearchParams()

  if (nextPath) {
    searchParams.set('next', getSafeNextPath(nextPath))
  }

  if (error) {
    searchParams.set('error', error)
  }

  const queryString = searchParams.toString()

  return queryString ? `${path}?${queryString}` : path
}
