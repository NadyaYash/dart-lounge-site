import { defineConfig } from 'astro/config';

// SITE_BASE wird im GitHub-Actions-Build auf '/dart-lounge-site' gesetzt.
// Lokal und auf der echten Domain bleibt base '/'.
const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.dartloungemitte.at',
  base,
});
