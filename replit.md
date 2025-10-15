# Elton Chipuka Portfolio

## Overview

This is a personal portfolio website for Elton Chipuka, a software developer based in Harare, Zimbabwe. The site showcases professional experience, technical skills, featured projects, and contact information. Built as a static portfolio site with modern design principles inspired by Linear, Vercel, and contemporary developer portfolios, it emphasizes clean typography, subtle interactions, and a minimalist aesthetic that balances professionalism with personality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **TanStack Query (React Query)** for server state management and data fetching
- **Tailwind CSS** for utility-first styling with custom design system

**Component Structure:**
- **shadcn/ui** component library (New York style variant) providing pre-built, accessible UI primitives
- Radix UI primitives for unstyled, accessible component foundations
- Custom portfolio components (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`, `Footer`, `Navigation`, `ThemeToggle`)
- Reusable hooks: `useScrollAnimation` for intersection observer-based animations, `use-toast` for notifications, `use-mobile` for responsive behavior

**Design System:**
- Custom color palette supporting both light and dark modes with HSL-based theming
- Typography hierarchy using Google Fonts: Inter (body), Space Grotesk (headings/display), JetBrains Mono (code)
- Consistent spacing primitives using Tailwind's 4-based scale
- Custom CSS properties for elevation, borders, and theme-aware interactions

**State Management:**
- React Query for API state (configured with custom query functions)
- Local React state for UI interactions (theme toggle, mobile menu, animations)
- No complex global state management needed for static portfolio content

### Backend Architecture

**Server Setup:**
- **Express.js** server with TypeScript
- Vite middleware integration for development with HMR support
- Static file serving for production builds
- Request/response logging middleware for API routes

**Data Strategy:**
- Static portfolio data defined in `client/src/data/portfolio-data.ts`
- Zod schemas in `shared/schema.ts` for type validation of portfolio entities (work experience, projects, skills, education, contact info)
- No database required - content is statically defined and type-checked
- In-memory storage implementation (`MemStorage`) provided as extensibility pattern

**API Design:**
- Routes registered via `server/routes.ts` with `/api` prefix convention
- Storage interface (`IStorage`) defines CRUD contract for potential future database integration
- Error handling middleware with status code and message formatting

### Data Storage Solutions

**Current Approach:**
- **Static TypeScript data** - All portfolio content stored in type-safe TS objects
- No persistence layer needed for current scope

**Database Configuration (Prepared but Unused):**
- Drizzle ORM configured for PostgreSQL with Neon serverless
- Schema definitions and migrations structure in place
- Environment variable `DATABASE_URL` expected if database features are activated

**Rationale:**
- Portfolio content is static and doesn't require dynamic updates
- Type safety through TypeScript provides validation
- Eliminates database complexity for read-only content
- Database infrastructure ready for future dynamic features (blog, CMS, contact form submissions)

### Authentication and Authorization

**Current State:**
- No authentication implemented - public portfolio site
- No protected routes or user management

**Prepared Infrastructure:**
- User schema defined in `shared/schema.ts` with username/password fields
- Session management dependencies installed (`connect-pg-simple` for PostgreSQL sessions)
- Storage interface includes user CRUD methods

### External Dependencies

**UI Component Libraries:**
- **Radix UI** - Comprehensive set of unstyled, accessible React primitives (@radix-ui/react-*)
- **shadcn/ui** - Pre-styled component system built on Radix UI
- **Lucide React** - Icon library for consistent iconography
- **cmdk** - Command menu component
- **Embla Carousel** - Carousel/slider functionality
- **Vaul** - Drawer component library

**Styling & Utilities:**
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **class-variance-authority (CVA)** - Variant-based component styling
- **clsx & tailwind-merge** - Conditional class name management

**Data & Forms:**
- **Zod** - Schema validation library
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Zod resolver for form validation
- **Drizzle ORM & Drizzle Zod** - Database ORM with Zod integration

**Database:**
- **@neondatabase/serverless** - Neon PostgreSQL serverless driver
- **connect-pg-simple** - PostgreSQL session store for Express

**Development Tools:**
- **@replit/vite-plugin-*** - Replit-specific development plugins (runtime error overlay, cartographer, dev banner)
- **TypeScript** - Type safety across full stack
- **ESBuild** - Fast JavaScript bundler for production builds

**Fonts (Google Fonts CDN):**
- Inter (weights: 300, 400, 500, 600, 700)
- Space Grotesk (weights: 500, 600, 700)
- JetBrains Mono (weights: 400, 500)

**Key Architectural Decisions:**
1. **Monorepo Structure** - Client, server, and shared code in single repository with path aliases
2. **Type Safety First** - TypeScript across entire stack with strict configuration
3. **Static Content Strategy** - Portfolio data as typed constants rather than database queries
4. **Prepared for Growth** - Database and auth infrastructure in place but not active
5. **Modern DX** - Vite for fast HMR, Tailwind for rapid styling, React Query for future API needs
6. **Accessibility** - Radix UI primitives ensure WCAG compliance
7. **Performance** - Lazy loading, code splitting, optimized font loading with preconnect