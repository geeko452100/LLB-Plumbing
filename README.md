# LLB Plumbing

Static marketing website for LLB Plumbing. Built from a Tailwind CSS starter template — a small production CSS file is committed for fast first loads, while the Tailwind build setup stays available for edits.

## Status

The site currently still has placeholder content from the starter template (business name shows "ACME Drywall", phone number is a placeholder). Swap these out in `index.html` before shipping — see Customize below.

## Files

- `index.html` — page structure and content sections.
- `assets/css/styles.css` — optimized production CSS used by the page.
- `assets/js/main.js` — mobile menu, current year, field validation, and mailto contact form.
- `tailwind.config.js` and `src/input.css` — used to rebuild styles with Tailwind.

## Customize

Update the company name, phone number, email, service area, project photos, and copy in `index.html`.

The form currently opens the visitor's email app with a prefilled message. For production, connect it to a service such as Formspree, Netlify Forms, or a custom backend endpoint.

## Preview

Open `index.html` directly in a browser, or run:

```
npm run dev
```

then visit `http://localhost:4173`.

## Build CSS

After editing `src/input.css` or Tailwind classes in `index.html`, rebuild the production CSS:

```
npm run build:css
```

## Performance Notes

The site avoids third-party runtime scripts, remote images, layout-shifting media, and blocking JavaScript. Keep images local and compressed, preserve explicit image dimensions, and test with Lighthouse after replacing placeholder content.
