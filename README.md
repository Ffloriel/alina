# Full Human Design System

This repository is a fresh Next.js 16 and Storybook 10 workspace centered on the preserved `components` directory, with Storybook as the source of truth for the Full Human design system.

## Commands

- `npm install`
- `npm run storybook`
- `npm run dev`
- `npm run build-storybook`
- `npm run build:vercel`
- `npm run typecheck`

## Neon Auth

The private Storybook is now protected by a normal app sign-in flow built on Neon Auth.

Required environment variables:

- `NEON_AUTH_BASE_URL`
- `NEON_AUTH_COOKIE_SECRET`

Storybook access is currently restricted in app code to `floriel@full-human.com`.

## Structure

- `components/` holds the reusable UI primitives.
- `stories/` holds the Storybook guide and component stories.
- `app/` provides a minimal Next.js shell for local development.
- `stories/guide/` is the canonical design-system reference.

## Protected Storybook On Vercel

The Vercel deploy serves Storybook from `/storybook` through the Next.js app instead of exposing the raw static build directly. The app route checks the Neon Auth session before serving any Storybook files.

Set the same Neon Auth environment variables in Vercel before deploying:

- `NEON_AUTH_BASE_URL`
- `NEON_AUTH_COOKIE_SECRET`
