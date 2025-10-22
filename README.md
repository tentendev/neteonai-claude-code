# Neteon AI - Edge AI Computing Platform Website

A production-ready Next.js website for Neteon AI, showcasing industrial edge AI computing platforms with modern design, comprehensive product catalogs, and technical content.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Dark/Light Theme**: System-aware theme switching with smooth transitions
- **Performance Optimized**: Server components, image optimization, and code splitting
- **Accessibility**: WCAG AA compliant with proper semantic HTML and ARIA labels
- **Form Validation**: React Hook Form + Zod for robust form handling
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Type Safety**: Full TypeScript coverage with strict mode enabled

## 📁 Project Structure

```
neteon-ai-website/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── page.tsx             # Home page
│   │   ├── products/            # Product listing & detail pages
│   │   ├── technologies/        # Core technologies pages
│   │   ├── case-studies/        # Customer success stories
│   │   ├── contact/             # Contact form with validation
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   └── globals.css          # Global styles and CSS variables
│   ├── components/              # React components
│   │   ├── ui/                  # shadcn/ui components (Button, Card, etc.)
│   │   ├── navbar.tsx           # Main navigation
│   │   ├── footer.tsx           # Site footer
│   │   ├── theme-provider.tsx  # Theme context provider
│   │   └── theme-toggle.tsx    # Dark/light mode switcher
│   ├── data/                    # Static data files
│   │   ├── products.ts          # Product catalog
│   │   ├── technologies.ts      # Core technologies
│   │   └── case-studies.ts      # Customer case studies
│   ├── lib/                     # Utility functions
│   │   ├── utils.ts             # Helper functions (cn, formatDate, etc.)
│   │   └── constants.ts         # Site-wide constants
│   └── types/                   # TypeScript type definitions
│       └── index.ts
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🛠️ Tech Stack

### Core
- **Next.js 14.2+** - React framework with App Router
- **React 18.3+** - UI library
- **TypeScript 5.3+** - Type safety

### Styling
- **Tailwind CSS 3.4+** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Conditional class names

### UI Components
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Re-usable components
- **Lucide React** - Icon library
- **Framer Motion 11+** - Animation library

### Forms & Validation
- **React Hook Form 7.51+** - Form state management
- **Zod 3.22+** - Schema validation
- **@hookform/resolvers** - Form resolver integration

### Theme
- **next-themes 0.2+** - Dark/light mode management

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest & React Testing Library** - Testing framework

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd neteon-ai-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 🎨 Design System

### Color Tokens

The design system uses CSS variables for theming:

```css
/* Light Mode */
--background: 0 0% 99%
--foreground: 222 14% 12%
--primary: 217 91% 60%    /* #3B82F6 */
--accent: 142 71% 45%     /* #22C55E */

/* Dark Mode */
--background: 222 14% 10%
--foreground: 0 0% 100%
--primary: 217 91% 60%    /* #3B82F6 */
--accent: 142 71% 45%     /* #22C55E */
```

### Typography

- **Font Family**: Inter (via Google Fonts)
- **Heading Scale**: Responsive with `clamp()` for fluid sizing
- **Body Text**: 16px base with 1.7 line height

### Spacing

- **8pt Grid System**: Consistent spacing using Tailwind's default scale
- **Container**: Max-width 1280px with responsive padding

### Components

All UI components are built with:
- Radix UI primitives for accessibility
- Tailwind CSS for styling
- TypeScript for type safety
- Framer Motion for animations (optional, reduced for prefers-reduced-motion)

## 📄 Pages & Routes

### Main Pages

- `/` - Home page with hero, features, stats, and CTAs
- `/products` - Product catalog with category filtering
- `/products/[slug]` - Individual product detail pages
- `/technologies` - Core technologies overview
- `/technologies/[slug]` - Individual technology deep dives
- `/case-studies` - Customer success stories
- `/case-studies/[slug]` - Individual case study details
- `/contact` - Contact form with validation

### Content Structure

All content is stored in `/src/data/` as TypeScript files:
- **Products**: 5+ products across 4 categories
- **Technologies**: 4 core technology innovations
- **Case Studies**: 5 real-world deployment examples

## 🔧 Extending the Design System

### Adding New Components

1. Create component in `/src/components/ui/` or `/src/components/`
2. Follow existing patterns:
   - Use TypeScript interfaces for props
   - Include `className` prop for style overrides
   - Use `cn()` utility for conditional classes
   - Add proper ARIA labels for accessibility

```typescript
// Example component
import { cn } from "@/lib/utils";

interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent";
}

export function MyComponent({ className, variant = "default", ...props }: MyComponentProps) {
  return (
    <div
      className={cn(
        "base-styles",
        variant === "accent" && "accent-styles",
        className
      )}
      {...props}
    />
  );
}
```

### Adding New Colors

1. Update `/src/app/globals.css` with new CSS variables
2. Add to `tailwind.config.ts` theme extension
3. Use in components via Tailwind classes

### Adding New Pages

1. Create route folder in `/src/app/`
2. Add `page.tsx` for the route
3. Update navigation in `/src/lib/constants.ts`

## 🧪 Testing

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm test -- --coverage
```

Example test (create in `__tests__/` directories):

```typescript
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders hero heading", () => {
    render(<HomePage />);
    expect(screen.getByText(/Leading the Future/i)).toBeInTheDocument();
  });
});
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next/`.

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure build settings:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy

### Environment Variables

Create `.env.local` for local development:

```env
# Example variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📝 Content Management

### Updating Products

Edit `/src/data/products.ts`:

```typescript
{
  id: "product-id",
  name: "Product Name",
  category: "edge-ai-computing",
  slug: "product-slug",
  shortDescription: "...",
  fullDescription: "...",
  features: ["..."],
  specifications: [...],
  applications: ["..."],
  image: "/images/products/product.jpg"
}
```

### Updating Technologies

Edit `/src/data/technologies.ts` following the same pattern.

### Updating Case Studies

Edit `/src/data/case-studies.ts` with new customer success stories.

## 🎯 Performance Optimizations

- **Server Components**: Default for static content
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting
- **Font Optimization**: Google Fonts with `next/font`
- **Caching**: Proper cache headers for static assets

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast meets WCAG AA standards
- Screen reader friendly

## 🔒 Security

- TypeScript for type safety
- Zod validation for form inputs
- No external API calls (all data local)
- Sanitized user inputs
- CSP headers (configure in production)

## 📞 Support

For questions or issues:
- Technical issues: support@neteon-ai.com
- Sales inquiries: sales@neteon-ai.com
- General: contact@neteon-ai.com

## 📄 License

Copyright © 2025 Neteon AI. All rights reserved.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
