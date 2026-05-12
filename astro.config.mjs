import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  adapter: vercel(),
  site: 'https://tirzah-portfolio.vercel.app',
});
