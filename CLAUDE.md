# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Neteon AI is a production-ready Next.js 14 website showcasing industrial edge AI computing platforms. The project uses the App Router, TypeScript, Tailwind CSS, and shadcn/ui components. It features a comprehensive product catalog with 61 Neousys products, core technologies, case studies, and a validated contact form.

## Development Commands

### Core Development Workflow
```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Code Quality & Testing
```bash
# Lint code with Next.js ESLint
npm run lint

# Format code with Prettier
npm run format

# Run tests with Jest
npm test

# Run tests in watch mode (for active development)
npm run test:watch

# Generate test coverage report
npm test -- --coverage
```

### Single Test Execution
```bash
# Run a specific test file
npm test -- path/to/test-file.test.tsx

# Run tests matching a pattern
npm test -- --testNamePattern="component name"
```

## Architecture & Code Structure

### Data-Driven Architecture
All content is stored in `/src/data/` as TypeScript files with full type safety:
- **Products** (`products.ts`): 61 Neousys products with scraped metadata, specifications, and features
- **Technologies** (`technologies.ts`): 4 core technology innovations with detailed technical specs
- **Case Studies** (`case-studies.ts`): Real-world deployment examples with metrics

**Key Pattern**: Data files export typed arrays that are consumed by pages via imports. Product categories, technologies, and case studies are filtered and rendered dynamically using TypeScript types defined in `/src/types/index.ts`.

### App Router Structure
The project uses Next.js 14 App Router with file-based routing:
- **Static Routes**: `/`, `/products`, `/technologies`, `/case-studies`, `/contact`
- **Dynamic Routes**: `/products/[slug]`, `/technologies/[slug]`, `/case-studies/[slug]`

**Important**: All pages use Server Components by default. Only components requiring client-side interactivity (navbar scroll effects, theme toggle, forms) are marked with `"use client"` directive.

### Component Architecture

**UI Components** (`/src/components/ui/`):
- Built on Radix UI primitives with Tailwind CSS styling
- Follow shadcn/ui patterns for consistency
- All components accept `className` prop for style overrides
- Use `cn()` utility from `/src/lib/utils.ts` for conditional class merging

**Layout Components**:
- **Navbar**: Client component with scroll effects, mobile menu, and theme toggle
- **Footer**: Server component with comprehensive link sections
- **ThemeProvider**: Wraps entire app in `/src/app/layout.tsx` with next-themes

### Path Aliases
The project uses `@/` alias for all imports:
```typescript
import { Product } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```
Configured in `tsconfig.json` with `"@/*": ["./src/*"]`

### Type System
All types are centralized in `/src/types/index.ts`:
- `Product`: Core product interface with specifications as `Record<string, string>`
- `Technology`: Technology innovations with technical details
- `CaseStudy`: Customer success stories with results array
- `ContactFormData`: Form validation types used with Zod

**Type Safety Pattern**: Data files import types, pages consume typed data. No type assertions or `any` types should be used.

### Form Validation Pattern
Forms use React Hook Form + Zod for schema validation:
1. Define Zod schema (e.g., in contact page)
2. Create form with `useForm` hook and `zodResolver`
3. Handle submission with error states
4. Display validation errors inline using `formState.errors`

### Theme System
- **CSS Variables**: Defined in `/src/app/globals.css` with light/dark variants
- **Theme Toggle**: Uses next-themes for system preference detection and persistence
- **Default Theme**: Set to "dark" in root layout (`/src/app/layout.tsx`)
- **Theme-Aware Components**: Use Tailwind's dark: prefix for dark mode styles

### Constants & Configuration
Site-wide configuration in `/src/lib/constants.ts`:
- `SITE_CONFIG`: Site metadata, contact emails, URLs
- `NAV_LINKS`: Main navigation structure
- `PRODUCT_CATEGORIES`: Product category definitions (4 categories)
- `CORE_TECHNOLOGIES`: Technology page structure (4 technologies)
- `FOOTER_LINKS`: Footer navigation hierarchy

**Usage Pattern**: Import constants instead of hardcoding values to maintain single source of truth.

## Development Patterns

### Adding New Products
1. Add product object to `/src/data/products.ts` following `Product` interface
2. Ensure `slug` matches URL structure (used in dynamic routes)
3. Add product image to `/public/images/products/`
4. Product will automatically appear in listings and detail pages

### Adding New Pages
1. Create folder in `/src/app/` (e.g., `/src/app/about/`)
2. Add `page.tsx` with default export
3. Update `NAV_LINKS` in `/src/lib/constants.ts` if adding to main nav
4. Add metadata export for SEO

### Creating New Components
Follow this pattern for consistency:
```typescript
import { cn } from "@/lib/utils";

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent";
}

export function Component({ className, variant = "default", ...props }: ComponentProps) {
  return (
    <div
      className={cn("base-styles", variant === "accent" && "accent-styles", className)}
      {...props}
    />
  );
}
```

### Testing Pattern
Tests live in `__tests__/` directories alongside components:
- Use React Testing Library for component testing
- Import `@testing-library/jest-dom` for DOM matchers
- Follow pattern: describe → it → render → expect

## Important Implementation Details

### Product Data Source
Products were scraped from Neousys website on 2025-10-22. Each product includes:
- Scraped title and description
- Detailed features array
- Technical specifications object
- Industry applications
- Product category for filtering

### Image Handling
- Product images stored in `/public/images/products/`
- Next.js Image component used for optimization
- Images referenced in data files should match public directory structure

### Build Warnings
The build process may show warnings about missing product images. These are expected if image files haven't been added to `/public/images/products/` yet. The site will still build successfully.

### TypeScript Strict Mode
Project uses TypeScript strict mode (`strict: true` in tsconfig.json). All code must:
- Have explicit return types for exported functions
- Avoid implicit `any` types
- Handle null/undefined cases explicitly

### Styling Conventions
- Use Tailwind utility classes directly in JSX
- Follow mobile-first responsive design (default → sm: → md: → lg:)
- Use CSS variables for theme colors (avoid hardcoded hex values)
- Maintain 8pt spacing system using Tailwind's default scale

## Deployment Notes

### Vercel Deployment (Recommended)
1. Project configured for Vercel with optimized Next.js settings
2. Build command: `npm run build`
3. Output directory: `.next`
4. No environment variables required for static content

### Build Output
- Static pages pre-rendered at build time
- Dynamic routes use Server Components by default
- All routes are edge-ready with minimal runtime overhead

## Important Files to Understand

- `/src/app/layout.tsx`: Root layout with theme provider and metadata
- `/src/lib/constants.ts`: All site-wide configuration
- `/src/types/index.ts`: Complete type definitions
- `/src/data/products.ts`: Product catalog (61 products)
- `/src/components/navbar.tsx`: Main navigation with scroll effects
- `tailwind.config.ts`: Design system tokens and theme configuration
