# Portfolio - Joris Neblai

Modern dark-themed portfolio built with Astro, TypeScript, and TailwindCSS.

## Features

- 🎨 **Light/Dark mode** with smooth toggle and localStorage persistence
- 📱 **Fully responsive** design with burger menu on mobile
- ⚡ **Fast static site** generation with Astro
- 🎯 **TypeScript** for type safety
- 📧 **Backend contact form** with Resend email API
- 🔗 **Social media links** with icons
- 🖼️ **Profile photo** in header
- 🎭 **Smooth animations** without hydration flashes
- ✅ **No flicker** on page load (theme applied before render)

## Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling
- **Resend** - Transactional email API

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add:
   ```env
   PUBLIC_EMAIL=your@email.com
   RESEND_API_KEY=your_resend_api_key_here
   ```

   **Get a Resend API key:**
   - Sign up at [resend.com](https://resend.com)
   - Go to API Keys section
   - Create a new API key
   - Add it to your `.env` file

3. **Replace profile photo (optional)**

   Replace `/public/self-pic-cropped.jpg` with your own photo:
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

- **About section**: Edit `src/pages/index.astro`
- **Experience section**: Edit `src/pages/index.astro`
- **Contact page**: Edit `src/pages/contact.astro`
- **Social links**: Update in both `index.astro` and `contact.astro`

### Styling

- **Colors**: Edit `tailwind.config.mjs` or use Tailwind classes
- **Global styles**: Edit `src/styles/globals.css`
- **Dark theme**: Background color is `#121212` (default)
- **Light theme**: White background with dark text
- Theme preference is saved in `localStorage`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repo on [Vercel](https://vercel.com)
3. Add environment variables:
   - `PUBLIC_EMAIL=your@email.com`
   - `RESEND_API_KEY=your_resend_api_key`
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repo on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables:
   - `PUBLIC_EMAIL=your@email.com`
   - `RESEND_API_KEY=your_resend_api_key`

### Cloudflare Pages

1. Push your code to GitHub
2. Create new project on [Cloudflare Pages](https://pages.cloudflare.com)
3. Build command: `npm run build`
4. Build output: `dist`
5. Add environment variables in Settings

## Project Structure

```
/
├── public/
│   ├── icons/
│   │   └── favicon.svg
│   └── self-pic-cropped.jpg  # Profile photo
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navigation with theme toggle & mobile menu
│   │   ├── Footer.astro      # Footer component
│   │   ├── Section.astro     # Reusable section with gradient titles
│   │   └── ProjectCard.astro # Project card with hover effects
│   ├── layouts/
│   │   └── BaseLayout.astro  # Base layout with theme initialization
│   ├── pages/
│   │   ├── index.astro       # Home page (About, Experiences, CTA)
│   │   ├── contact.astro     # Contact page with form
│   │   ├── projects/
│   │   │   └── index.astro   # Projects page
│   │   └── api/
│   │       └── contact.ts    # Backend email API endpoint
│   ├── styles/
│   │   └── globals.css       # Global styles with dark mode
│   └── data/
│       └── projects.ts       # Projects data
├── .env                      # Environment variables (local, not in git)
├── .env.example              # Environment variables template
└── package.json
```

## Contact Form

The contact form uses a backend API endpoint that sends emails via Resend:

- **Endpoint**: `/api/contact` (POST)
- **Validation**: Client-side and server-side
- **Email service**: Resend
- **Features**:
  - Loading state while sending
  - Success message with animation
  - Error handling with specific messages
  - No page reload
  - Auto-hide messages after 5 seconds

## License

MIT
