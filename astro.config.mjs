// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/schema-driven-astro-starter/',
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
