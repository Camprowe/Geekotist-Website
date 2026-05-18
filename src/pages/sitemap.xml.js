import movies from '../data/movies.json';
import { slugify } from '../utils/slugify.js';

const siteUrl = 'https://movies.srstudio-bd.com';

export async function GET() {
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/policy',
  ];

  // Get dynamic categories
  const categories = [...new Set(movies.map(m => m.category))];
  const categoryUrls = categories.map(cat => `/category/${slugify(cat)}`);

  // Get dynamic movie pages
  const movieUrls = movies.map(movie => `/movie/${slugify(movie.title)}`);

  const allUrls = [...staticPages, ...categoryUrls, ...movieUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `
  <url>
    <loc>${siteUrl}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${
      url === '' ? '1.0' : url.startsWith('/movie') ? '0.8' : '0.6'
    }</priority>
  </url>`
    )
    .join('')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
