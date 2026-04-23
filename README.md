# Full Human Design System

This repository is a fresh Next.js 16 and Storybook 10 workspace centered on the preserved `components` directory, with Storybook as the source of truth for the Full Human design system.

## Commands

- `npm install`
- `npm run storybook`
- `npm run dev`
- `npm run build-storybook`
- `npm run build:vercel`
- `npm run typecheck`

## Structure

- `components/` holds the reusable UI primitives.
- `stories/` holds the Storybook guide and component stories.
- `app/` provides a minimal Next.js shell for local development.
- `stories/guide/` is the canonical design-system reference.

## Protected Storybook On Vercel

The Vercel deploy now serves Storybook from `/storybook` through the Next.js app instead of exposing the static `storybook-static` output directly.

To protect that route, configure these Vercel environment variables:

- `STORYBOOK_AUTH_USER`
- `STORYBOOK_AUTH_PASSWORD`

The proxy fails closed. If those variables are missing, `/storybook` returns `503` instead of exposing the Storybook publicly.