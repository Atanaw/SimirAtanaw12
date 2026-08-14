# Dr. Simir Atanaw — Hydrologist Website

Static, framework-free personal research website prepared for GitHub and Cloudflare Pages.

## Repository structure

- `index.html` — semantic website markup
- `style.css` — responsive design and academic visual system
- `script.js` — mobile navigation, scroll progress, active navigation and reveal effects
- `assets/simir.png` — original portrait
- `assets/simir.webp` — optimized portrait used when supported
- `assets/hydrology-pattern.svg` — lightweight scientific hero background
- `documents/` — Industry and Academic CVs
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest` — SEO/PWA support
- `_redirects`, `_headers` — Cloudflare Pages routing and security/cache headers
- `favicon-*`, `favicon.ico`, `og-image.jpg` — branding and social sharing

## Cloudflare Pages deployment

- Framework preset: **None**
- Build command: **leave blank**
- Build output directory: **/** (repository root)
- Production branch: **main**

Connect the GitHub repository to Cloudflare Pages. Each push to `main` will redeploy the site.

## GitHub Pages

This site is also compatible with GitHub Pages because it is entirely static. If using GitHub Pages, `_headers` is ignored and `_redirects` is not needed.

## Google Search Console

After deployment:
1. Verify the `hydroclimlab.uk` Domain property.
2. Submit `https://hydroclimlab.uk/sitemap.xml`.
3. Inspect `https://hydroclimlab.uk/` and request indexing after major updates.

## Performance

The site avoids frameworks and large dependencies, uses an optimized WebP portrait with PNG fallback, includes explicit image dimensions, and keeps JavaScript minimal. Exact Lighthouse scores depend on hosting, browser, device and network conditions.
