// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL: set to the final domain before going live (used for sitemap, RSS and social previews).
export default defineConfig({
  site: process.env.SITE_URL || 'https://rushfox.co.za',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/insights/category/') && !page.includes('/404') })],
});
