// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://geekotist.com',
  outDir: "./docs",
  build: {  assets: 'assets' },
  redirects: {
    "/entertainment/assassins-creed-2/" : {
      status: 301,
      destination: "/entertainment/assassins-creed-ii"
    },
    "/entertainment/${movie.slug}" : {
      status: 301,
      destination: "/entertainment"
    },
  }
});
