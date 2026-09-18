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
    "/entertainement/assassins-creed-ii" : {
      status: 301,
      destination: "/entertainment/assassins-creed-ii/"
    },
    "/entertainement/fallout" : {
      status: 301,
      destination: "/entertainment/fallout/"
    },
    "/entertainement/halo-3" : {
      status: 301,
      destination: "/entertainment/halo-3/"
    },
    "/entertainement/grand-theft-auto-v" : {
      status: 301,
      destination: "/entertainment/grand-theft-auto-v/"
    },
    "/?p=/fact/4apgKuSTXIjUTinnDkaGD9" : {
      status: 301,
      destination: "/"
    },
    "/?search={search_term_string}" : {
      status: 301,
      destination: "/"
    },
  }
});
