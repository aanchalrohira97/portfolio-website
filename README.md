# Aanchal Kumar Rohira — Portfolio

Dark editorial portfolio built with React + Vite + Framer Motion.

## Stack
- React 18 + Vite
- Framer Motion (scroll animations)
- react-intersection-observer (trigger on scroll)
- CSS Modules (no Tailwind dependency)

## Quick Start

```bash
npm install
npm run dev        # localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Customize

All resume data lives in **one file**: `src/data/resume.js`

Update name, roles, skills, projects there — everything re-renders automatically.

## Sections
1. Hero — name, tagline, key stats, CTA buttons
2. Experience — tabbed by company, animated highlights  
3. Skills — categorized hover-card grid
4. Projects — card grid + education
5. Contact — email / LinkedIn / GitHub links

## Design
- Fonts: Playfair Display + DM Mono + DM Sans
- Colors: #0a0a0a ink, #f4f0e8 paper, #e8a020 amber accent
- All CSS vars in src/index.css — edit once to retheme
