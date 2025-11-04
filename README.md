# Portfolio - Joris Neblai

Modern dark-themed portfolio built with Astro, TypeScript, and TailwindCSS.

## Features

- 🎨 Dark theme with indigo/purple gradient accents
- 📱 Fully responsive design
- ⚡ Fast static site generation with Astro
- 🎯 TypeScript for type safety
- 📧 Working contact form with mailto integration
- 🔗 Social media links with icons
- 🖼️ Profile photo in header
- 🎭 Smooth animations and hover effects

## Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and set your email:
   ```
   PUBLIC_EMAIL=your@email.com
   ```

3. **Replace profile photo (optional)**

   Replace `/public/profile.svg` with your own photo:
   - Supported formats: `.jpg`, `.png`, `.svg`, `.webp`
   - Recommended size: 200x200px or larger
   - Update the path in `src/components/Header.astro` if needed

## Development

```bash
# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run astro check
```

## Customization

### Add Projects

Edit `src/data/projects.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    title: "My Awesome Project",
    description: "A brief description of your project.",
    url: "https://github.com/username/project"
  }
];
```

### Update Content

- **About section**: Edit `src/pages/index.astro` (lines 12-26)
- **Experience section**: Edit `src/pages/index.astro` (lines 28-79)
- **Social links**: Edit `src/pages/index.astro` (lines 127-162)

### Styling

- **Colors**: Edit `tailwind.config.mjs` or use Tailwind classes
- **Global styles**: Edit `src/styles/globals.css`
- **Dark theme**: Background color is `#121212`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repo on [Vercel](https://vercel.com)
3. Add environment variable: `PUBLIC_EMAIL=your@email.com`
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repo on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variable in Site settings

### Cloudflare Pages

1. Push your code to GitHub
2. Create new project on [Cloudflare Pages](https://pages.cloudflare.com)
3. Build command: `npm run build`
4. Build output: `dist`

## Project Structure

```
/
├── public/
│   ├── icons/
│   │   └── favicon.svg
│   └── profile.svg          # Your profile photo
├── src/
│   ├── components/
│   │   ├── Header.astro     # Navigation with profile
│   │   ├── Footer.astro     # Footer component
│   │   ├── Section.astro    # Reusable section
│   │   └── ProjectCard.astro # Project card
│   ├── layouts/
│   │   └── BaseLayout.astro # Base page layout
│   ├── pages/
│   │   ├── index.astro      # Home page
│   │   └── projects/
│   │       └── index.astro  # Projects page
│   ├── styles/
│   │   └── globals.css      # Global styles
│   └── data/
│       └── projects.ts      # Projects data
├── .env                     # Environment variables (local)
├── .env.example             # Environment variables template
└── package.json
```

## License

MIT
