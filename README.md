# Dr. Simir Birihan Atanaw — Professional Portfolio

Static professional portfolio for Dr. Simir Birihan Atanaw — hydrologist and water resources
researcher — built for GitHub + Cloudflare Pages (and GitHub Pages-compatible).

No frameworks, no build step: plain HTML5, CSS3 and vanilla JavaScript.

## Repository structure

```
Simir-Atanaw-Portfolio/
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
├── _redirects
├── .gitignore
├── favicon.ico
├── favicon-48x48.png
├── favicon-192x192.png
├── favicon-512x512.png
├── og-image.jpg
├── assets/
│   └── simir-atanaw.jpg
└── documents/
    ├── Simir_Atanaw_Industry_CV.pdf
    └── Simir_Atanaw_Academic_CV.pdf
```

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, then select the repo.
3. Framework preset: **None**
4. Build command: *(leave blank)*
5. Build output directory: **/**
6. Production branch: **main**
7. Deploy. Once live, open the Pages project's **Custom domains** tab and add `hydroclimlab.uk`
   (and `www.hydroclimlab.uk` if desired), then follow Cloudflare's DNS instructions.

## Deploy to GitHub Pages (alternative)

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Source: **Deploy from a branch** → branch `main`, folder `/ (root)`.
4. Save — GitHub will publish at `https://<username>.github.io/<repo>/`.

## Google Search Console

Once the domain is live, verify ownership in Search Console and submit
`https://hydroclimlab.uk/sitemap.xml` for indexing.

## Updating content

All copy — the hero, experience timeline, publications, project cards and links — lives inline in
`index.html`. To update a CV, replace the corresponding file in `documents/` and keep the same
filename (or update the matching `href` in `index.html` if you rename it).
