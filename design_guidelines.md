# Design Guidelines: Elton Chipuka Portfolio

## Design Approach
**Selected Approach**: Reference-Based, inspired by **Linear + Vercel + modern developer portfolios**

Drawing from Linear's clean typography and subtle interactions, Vercel's minimalist elegance, and top-tier developer portfolios that balance professionalism with personality. The design should communicate technical competence while remaining approachable and memorable.

## Core Design Elements

### A. Color Palette

**Dark Mode Primary** (Default):
- Background: 220 15% 8% (deep charcoal)
- Surface: 220 15% 12% (elevated cards/sections)
- Primary Accent: 210 100% 60% (vibrant blue - represents tech/innovation)
- Text Primary: 0 0% 98% (near white)
- Text Secondary: 220 10% 65% (muted gray)
- Border: 220 15% 20% (subtle dividers)

**Light Mode**:
- Background: 0 0% 100% (pure white)
- Surface: 220 15% 97% (light gray cards)
- Primary Accent: 210 100% 50% (deeper blue)
- Text Primary: 220 20% 15% (near black)
- Text Secondary: 220 10% 45% (medium gray)

**Strategic Accent Colors**:
- Success Green: 145 65% 50% (for metrics/achievements)
- Highlight Yellow: 45 95% 60% (sparingly for emphasis)

### B. Typography

**Font Families** (via Google Fonts):
- Primary: 'Inter' - clean, modern sans-serif for body text
- Display: 'Space Grotesk' - geometric sans for headings, distinctive character

**Hierarchy**:
- Hero Title: 4xl-6xl, Space Grotesk, font-bold (72-96px desktop)
- Section Headers: 3xl-4xl, Space Grotesk, font-semibold (48-60px)
- Subsection Headers: xl-2xl, Space Grotesk, font-medium (24-32px)
- Body Text: base-lg, Inter, font-normal (16-18px)
- Captions/Metadata: sm, Inter, font-medium (14px)
- Code/Technical: 'JetBrains Mono', monospace for technical details

### C. Layout System

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16, 20** for consistency
- Component padding: p-6, p-8
- Section spacing: py-16, py-20, py-24 (desktop), py-12 (mobile)
- Element gaps: gap-4, gap-6, gap-8
- Container max-width: max-w-6xl (1152px) for content, max-w-7xl for full sections

**Grid System**:
- Skills grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Project cards: grid-cols-1 md:grid-cols-2 gap-8
- Experience timeline: Single column with left-aligned timeline indicator

### D. Component Library

**Navigation**:
- Fixed top nav with blur backdrop (backdrop-blur-lg bg-background/80)
- Logo/name on left, navigation links center/right
- Smooth scroll behavior with active section indicators
- Mobile: Hamburger menu with slide-in drawer

**Hero Section**:
- Full viewport height (min-h-screen) with centered content
- Large heading with gradient text effect on name
- Professional subtitle (current role)
- CTA buttons: "View Work" (primary) + "Download Resume" (outline)
- Subtle geometric pattern background or gradient mesh
- Profile image: Optional circular frame, 200-300px, subtle border

**About Section**:
- Two-column layout: Professional summary (left) + Education highlight (right)
- Pull quote style for key achievements
- Subtle card elevation with rounded corners (rounded-xl)

**Experience Timeline**:
- Vertical timeline with connecting line
- Card-based entries with company logo placeholders
- Achievement bullets with metric highlights in accent color
- Expandable details on hover/click
- Date badges with subtle background

**Skills Section**:
- Categorized grid (Frontend, Backend, Databases, Tools)
- Each category as a distinct card with icon header
- Tech stack displayed as tags/pills with subtle hover states
- Proficiency indicators optional via visual weight

**Projects Showcase**:
- Featured projects in card grid
- Each card: Project title, tech stack tags, key metrics, brief description
- Hover effect: Subtle lift (translate-y-2) with enhanced shadow
- "View Details" CTA that could expand inline or link
- Screenshots/mockups as card backgrounds with gradient overlays

**Contact Section**:
- Centered layout with clear hierarchy
- Email and phone with copy-to-clipboard functionality
- LinkedIn and GitHub links with branded icons
- Optional contact form with modern input styling

**Footer**:
- Minimal design with copyright, social links, "Back to Top" link
- Subtle border-top separator

### E. Interactions & Animations

**Principles**: Use very sparingly, focus on polish not distraction

**Approved Animations**:
- Smooth scroll with offset for fixed nav
- Fade-in on scroll for section reveals (subtle, fast)
- Card hover: transform scale(1.02) + shadow enhancement (150ms ease)
- Button hover: slight brightness shift (100ms)
- Link underline expand on hover (200ms ease-out)

**Avoid**: Excessive parallax, looping animations, bouncing elements

## Images

**Hero Background**:
- Abstract geometric pattern or gradient mesh (not a photo)
- Subtle, low-contrast to keep focus on text
- Alternative: Clean dark background with subtle grid lines

**Profile Photo** (Optional but Recommended):
- Professional headshot, circular crop
- Place in hero section, right-aligned or centered above text
- Size: 200-300px diameter, subtle border matching accent color

**Project Screenshots** (If Available):
- Use as card backgrounds with gradient overlays for text readability
- Aspect ratio: 16:9 or 4:3, maintain consistency
- Fallback: Colorful abstract illustrations representing each project type

**Company Logos**:
- City Parking Pvt Ltd and MorniPac Consultants logos in experience timeline
- Grayscale or monochrome on dark, full color on light mode
- Placeholder: Use company initials in styled circles if logos unavailable

**Visual Strategy**: Images enhance but don't dominate. The portfolio is content-focused with strategic visual accents. Large hero image is NOT required - geometric patterns and typography create impact.

## Layout Sections (Vertical Flow)

1. **Hero** (full viewport, centered)
2. **About** (py-20, two-column on desktop)
3. **Experience** (py-20, timeline layout)
4. **Projects** (py-24, grid showcase)
5. **Skills** (py-20, categorized grid)
6. **Contact** (py-24, centered)
7. **Footer** (py-12, minimal)

**Critical**: Each section uses natural height based on content. No forced 100vh constraints except hero. Consistent vertical rhythm with py-20/py-24 on desktop, py-12/py-16 on mobile.