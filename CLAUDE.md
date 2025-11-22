# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Idioma / Language

**IMPORTANTE**: Siempre responder y preguntar en español. Este es el proyecto "XPP Copiapoa" y toda la comunicación debe ser en español.

## Project Overview

This is an Astro project named "XPP Copiapoa" with Tailwind CSS v4 integration. The project uses Biome for linting and Prettier for formatting.

## Development Commands

```bash
# Start development server (runs on localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro [command]
```

## Tech Stack

- **Framework**: Astro 5.16.0
- **Styling**: Tailwind CSS 4.1.17 (integrated via Vite plugin)
- **Linting**: Biome 0.3.3
- **Formatting**: Prettier 3.6.2 with prettier-plugin-astro
- **TypeScript**: Strict mode enabled (extends astro/tsconfigs/strict)

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro       # Base layout with global CSS import
├── pages/
│   └── index.astro        # Homepage
└── styles/
    └── global.css         # Tailwind CSS import
```

## Styling Configuration

- **Tailwind CSS v4**: Configured via Vite plugin in `astro.config.mjs`
- Global styles are imported in `Layout.astro` via `src/styles/global.css`
- The global CSS file uses the new v4 syntax: `@import "tailwindcss";`

## Code Quality Tools

### Biome Configuration
- Linting enabled with recommended rules
- Formatter disabled (Prettier handles formatting)
- CSS linting enabled
- Enforces strict rules: `useConst`, `noParameterAssign`, `useTemplate`
- Console statements allowed: `warn` and `error` only

### Prettier Configuration
- Tab width: 4 spaces
- Print width: 100
- Double quotes
- Semicolons required
- Trailing commas: all
- Astro plugin configured for `.astro` files

## SendGrid Email Integration

The repository contains a `SENDGRID.md` file with comprehensive setup instructions for SendGrid integration (note: this document may be from another project and should be reviewed before use).

**Key environment variables required:**
```env
SENDGRID_API_KEY=          # Your SendGrid API key
SENDGRID_FROM_EMAIL=       # Verified sender email
SENDGRID_TO_EMAIL=         # Recipient email for contact form submissions
```

**Implementation files:**
- Contact form endpoint: `src/pages/api/contact.ts` (to be implemented)
- Contact form component: `src/components/ContactForm.astro` (to be implemented)

## Important Notes

- The project is set to Spanish locale (`lang="es"` in Layout.astro)
- TypeScript strict mode is enabled
- Git status shows several deleted welcome/example files from the Astro starter template
- No test runner is currently configured