# Copilot instructions

## Architecture & data flow
- Eleventy copies the `public` and `admin` folders into `_site` while reading `content` as the input, using `../_includes` for layouts and `../_data` for site metadata, so treat `public/` as the static asset root and build fresh output under `_site` instead of editing it directly ([eleventy config](eleventy.config.js#L11-L17), [eleventy config](eleventy.config.js#L424-L442)).
- The image pipeline watches `content/**/*.{svg,webp,png,jpeg}`, and the template engine only processes `md`, `njk`, `html`, and `liquid` files (all routed through Nunjucks), so add new assets and content inside those folders to trigger rebuilds automatically ([eleventy config](eleventy.config.js#L36-L47), [eleventy config](eleventy.config.js#L408-L422)).
- Markdown rendering is backed by `markdown-it` plus anchors, `currentBuildDate`, `allHeadings`, and the `extractHeadings` shortcode, so keep table-of-contents data on the source page (using `toc`/`tocSimple`) and rely on those helpers when adding new long-form content ([eleventy config](eleventy.config.js#L291-L398)).

## Templates & data hooks
- The [base layout](_includes/layouts/base.njk#L1-L49) always burns in the localized label for the first `tags` entry (via `_data/media.js`), renders the standard banner blocks, and lets you drop `customScript` when a page needs extra JavaScript, so align tags with `_data/media.js` whenever you add a new content type ([media data](_data/media.js#L1-L15)).
- The campaign menu only shows entries for `learning`, `newsletters`, or `podcasts` once there are locale-matched items, thanks to the `localeMatch` filter, and the visible text per locale lives in `_data/menu.js`, so update both the filter logic and the menu data when introducing new sections ([menu partial](_includes/partials/menu.njk#L1-L34), [menu data](_data/menu.js#L1-L41), [eleventy config](eleventy.config.js#L286-L289)).
- Event-aware filters like `filterByUpcomingEvents`, `filterByPastEvents`, and `filterByNoDateEvents` all expect the `eventDetails`, `eventDate`, and locale-specific `en`/`fr` fields defined by the CMS, so keep CMS front matter and template filters in sync when those fields change ([eleventy config](eleventy.config.js#L140-L274), [admin config](admin/config.yml#L42-L175)).

## Workflows & CMS
- Use `npm run build` for production builds, `npm run start` to serve locally, `npm run start:cms` to run Eleventy and the Decap CMS proxy in parallel, and `decap` on its own when you only need the CMS backend; `debug`/`debugstart` add `DEBUG=Eleventy*` to log builder internals, while `benchmark` turns on `Eleventy:Benchmark*` if you need perf data ([package scripts](package.json#L5-L14)).
- Netlify CMS is configured for DecapBridge-backed Git Gateway, `multiple_folders` i18n, and the `learning`, `newsletters`, and `podcasts` collections under `content/`; it stores uploads under `/public/docs` and exposes them as `/docs`, so keep both the CMS form definitions and your source content aligned with that directory layout ([admin config](admin/config.yml#L1-L175)).
- The asynchronous `fileInfo` filter walks `public/<path>` (including `.docx` zips via `yauzl`) to compute sizes and dates for downloads, so make downloadable assets available in `public/docs` before passing paths to the filter ([fileInfo filter](scripts/filters/fileInfo.js#L1-L95)).

## Deployment & redirects
- Netlify builds run `npm run build`, publish `_site`, and serve functions from `netlify/functions`, while redirects keep aaact/aatia domains and `/en`/`/fr` aliases in sync with the new learning/formation sections, so update `netlify.toml` whenever those routes or functions change ([netlify config](netlify.toml#L1-L54)).
- The same `netlify.toml` file includes a commented Lighthouse plugin block; follow that snippet if you want to opt into `@netlify/plugin-lighthouse` and its thresholds for performance/accessibility/SEO ([netlify config](netlify.toml#L56-L73)).
