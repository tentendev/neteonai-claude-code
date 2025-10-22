# Quick Start Guide

Get the Neteon AI website running in under 5 minutes.

## Prerequisites

- **Node.js 18+** installed ([Download](https://nodejs.org/))
- **npm 9+** (comes with Node.js)
- A code editor (VS Code recommended)

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages (~2-3 minutes).

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at **http://localhost:3000**

### 3. View the Site

Open your browser and navigate to:
- **Home**: http://localhost:3000
- **Products**: http://localhost:3000/products
- **Technologies**: http://localhost:3000/technologies
- **Case Studies**: http://localhost:3000/case-studies
- **Contact**: http://localhost:3000/contact

## What's Included

✅ **5 Main Pages**
- Home with hero, features, stats
- Products catalog with 5+ products
- Core technologies (4 innovations)
- Case studies (5 real examples)
- Contact form with validation

✅ **Design Features**
- Dark/Light theme toggle
- Fully responsive (mobile-first)
- Smooth animations
- Professional UI components

✅ **Technical Stack**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Form validation (Zod)

## Making Changes

### Update Site Content

**Edit Products**: `/src/data/products.ts`
**Edit Technologies**: `/src/data/technologies.ts`
**Edit Case Studies**: `/src/data/case-studies.ts`

### Change Colors

Edit `/src/app/globals.css` and `/tailwind.config.ts`

### Add New Pages

Create folders in `/src/app/` (see README for details)

## Building for Production

```bash
# Create optimized build
npm run build

# Test production build locally
npm start
```

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Run production server
npm run lint     # Check code quality
npm run format   # Format code with Prettier
npm test         # Run tests
```

## Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

**Dependencies not installing?**
```bash
# Clear npm cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Next Steps

1. Read the full **README.md** for detailed documentation
2. Explore the codebase structure
3. Customize content in `/src/data/`
4. Modify design system in `/src/app/globals.css`
5. Add your own components in `/src/components/`

## Need Help?

- Check the README.md for comprehensive documentation
- Review component examples in `/src/components/ui/`
- Look at data structure in `/src/data/`
- Examine page implementations in `/src/app/`

## Deployment

### Deploy to Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

That's it! Your site will be live in ~2 minutes.

---

**Ready to build?** Start with `npm run dev` and happy coding! 🚀
