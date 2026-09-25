import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import {SERVICE_SEO, SITE_URL} from './src/data/serviceSeo.ts';

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Tras compilar, crea dist/<ruta>/index.html para cada servicio con su propio
 * título, descripción y canonical (visibles para Google sin ejecutar JS),
 * y genera dist/sitemap.xml.
 */
const servicePagesSeo = (): Plugin => ({
  name: 'airsens-service-pages-seo',
  apply: 'build',
  closeBundle() {
    const dist = path.resolve('dist');
    const baseHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

    for (const page of SERVICE_SEO) {
      const url = `${SITE_URL}${page.path}`;
      const title = escapeHtml(page.title);
      const description = escapeHtml(page.description);
      const html = baseHtml
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`);

      const dir = path.join(dist, page.path);
      fs.mkdirSync(dir, {recursive: true});
      fs.writeFileSync(path.join(dir, 'index.html'), html);
    }

    const urls = [SITE_URL, ...SERVICE_SEO.map((p) => `${SITE_URL}${p.path}`)];
    const sitemap = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...urls.map((u) => `  <url><loc>${u}</loc></url>`),
      '</urlset>',
      '',
    ].join('\n');
    fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), servicePagesSeo()],
    resolve: {
      alias: {
        '@': path.resolve('.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
