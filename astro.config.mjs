import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jorisneblai.xyz',
  integrations: [tailwind(), sitemap()],
  output: 'server',
  adapter: netlify(),
});