// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://geekotist.com',
  outDir: "./docs",
  build: {  assets: 'assets' }
});
