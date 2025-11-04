# Portfolio - Joris Neblai

Minimalist portfolio built with Astro, TypeScript, and TailwindCSS.

## Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/
│   └── icons/
│       └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Section.astro
│   │   └── ProjectCard.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── projects/
│   │       └── index.astro
│   ├── styles/
│   │   └── globals.css
│   └── data/
│       └── projects.ts
└── package.json
```
