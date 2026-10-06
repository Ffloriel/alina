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

## Protected Storybook MCP On Vercel

The Vercel deploy also exposes the Storybook MCP server at `/mcp`.

For coding agents and other non-browser MCP clients, set this environment variable in Vercel:

- `STORYBOOK_MCP_TOKEN`

Then connect the MCP client to:

- `https://alina.full-human.com/mcp`

and send the token as a bearer token in the `Authorization` header.

Storybook access is currently restricted in app code to `floriel@full-human.com`.

## Design tokens

Tokens live in the `@theme` block of `styles/globals.css`. Each one is a CSS variable and a Tailwind utility.

- Brand: `brand-50` to `brand-950` (olive). Use `color="brand"` on `Button`, `Badge`, `Checkbox`, `Radio`, and `Switch`.
- Status: `informative-*`, `positive-*`, `notice-*`, and `negative-*`. Components that take a `tone` read from these.
- Surfaces: `bg-background`, `text-foreground`, and the default border color. Dark values are set on `.dark`.
- Focus: `outline-focus` and `ring-focus`. Every focusable element gets a 2px ring by default.
- Elevation: `shadow-float`, `shadow-panel`, `shadow-overlay`, and `shadow-selected`. The tint follows the theme.
- Radius: `rounded-sm` (2px) to `rounded-4xl` (12px). `rounded-full` is for circles only.

Components should not hard-code hex values, arbitrary shadows, or raw status palettes. Add or change a token instead.

Keep resets in `@layer base`. Unlayered CSS overrides every Tailwind utility.

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
