// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jorale0505.github.io',
  base: '/patinando_hacia_el_futuro',
  output: 'static',
  build: {
    format: 'directory'
  }
});
