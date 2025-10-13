# GitHub Copilot Instructions for VFLMUNESCO-Site

## Project Overview

This is a Nuxt 3 website for the VFLMUNESCO (Validebağ Model UNESCO Conference) using TypeScript, Tailwind CSS v4, and DaisyUI for components. The site has a specific dark theme brand with red/burgundy accents.

## Key Architecture Patterns

### Component Structure
- Components use Pascal case naming: `CommitteeCard.vue`, `TeamCard.vue`
- Props are defined with TypeScript using `defineProps()` with explicit types
- Use `NuxtImg` for optimized images, not regular `<img>` tags
- Component styling uses scoped styles with DaisyUI classes

### Styling Conventions
- **Temporary dark theme**: Color mode logic is temporarily disabled (`isDark = true`) for annual theme consistency
- **CSS variables**: Colors defined in DaisyUI theme variables in `assets/app.css`, not hard-coded hex values
- **DaisyUI integration**: Uses custom dark theme configuration with Tailwind v4 syntax
- **Future theming**: Commented code shows dynamic theming will be restored (`colorMode.value === 'dark'`)

### Routing & Pages
- Standard Nuxt file-based routing with nested directories (`committees/`, `team/`, `legal/`)
- Route rules in `nuxt.config.ts`: `/apply` redirects to `/applications-closed`
- Commission pages are prerendered for performance

### Maintenance Mode System
- **Global middleware**: `middleware/maintenance.global.ts` checks both server and client-side
- **Runtime config**: `maintenance` flag in `nuxt.config.ts` (default: 'false')
- **API endpoint**: `server/api/maintenance.ts` returns maintenance status
- **Dual check**: Server-side uses runtime config, client-side calls API

### SEO & Meta Configuration
- **Site-wide config** in `nuxt.config.ts`: URL, title templates, robots.txt rules
- **Schema.org**: Uses `useSchemaOrg` in layouts for structured data
- **Anti-AI directives**: `noai, noimageai` meta tags in default layout
- **Blocked paths**: Disallows crawling of `/maintenance`, `/legal`, `/img`

## Development Patterns

### Dependencies Management
- **Package manager**: pnpm (specified in packageManager field)
- **Key modules**: @nuxt/image, @nuxtjs/seo, @nuxtjs/color-mode, daisyui
- **Build dependencies**: Uses onlyBuiltDependencies for sharp, @parcel/watcher, esbuild

### Content Organization
- **Images**: Store team photos in `/public/img/team/`, commission images in `/public/img/committees/`
- **Logos**: Multiple format variants in `/public/` (svg, png) for different contexts
- **Brand assets**: Use `vmun-cream.png` for header logo (consistent with dark theme)

### TypeScript Integration
- Composition API with `<script setup lang="ts">`
- Type-safe props with explicit interfaces
- Server-side types in `server/tsconfig.json`

## Common Tasks

### Adding New Pages
1. Create `.vue` file in appropriate `pages/` subdirectory
2. Add navigation links in `Header.vue` dropdown menus
3. Consider adding to prerender rules in `nuxt.config.ts` if static content

### Component Development
- Use DaisyUI classes: `btn`, `card`, `navbar`, `hero`, `dropdown`
- Reference CSS variables from DaisyUI theme rather than hard-coded colors
- Include proper TypeScript prop definitions
- Use `NuxtLink` for internal navigation, `NuxtImg` for images

### Maintenance Mode
- Toggle via runtime config: set `maintenance: 'true'` in `nuxt.config.ts`
- Middleware automatically redirects all traffic to `/maintenance` page
- Test both server and client-side behavior

## File References
- Main layout: `layouts/default.vue`
- Navigation: `components/Header.vue`
- Styling: `assets/app.css` (DaisyUI theme customization)
- Config: `nuxt.config.ts` (modules, routing, SEO)
- Maintenance: `middleware/maintenance.global.ts`, `server/api/maintenance.ts`