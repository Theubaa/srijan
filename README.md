# Srijan Academy Website

A modern, responsive static website for Srijan Academy, Balconagar, Korba, Chhattisgarh.

## Preview locally

- Open `index.html` directly in your browser, or
- Use a lightweight server for proper routing:
  - Python: `python -m http.server 8000`
  - Node: `npx serve .`

Then visit `http://localhost:8000`.

## Structure

- `index.html` – Homepage
- `about.html` – Our story, mission & vision, team, infrastructure
- `courses.html` – Courses by class group with features
- `gallery.html` – Photos and optional videos
- `admissions.html` – Process, eligibility, documents, fee info, inquiry form
- `contact.html` – Contact info, Google map, contact form
- `assets/css/style.css` – Global styles with purple theme
- `assets/js/main.js` – Mobile nav, simple form validation
- `assets/img/logo.svg` – Tree-based logo symbolizing growth & education

## Customization

- Replace images with your own photos in `gallery.html` and `about.html` infrastructure section.
- Update the Formspree action URLs in forms or connect to your own backend.
- Adjust colors in `assets/css/style.css` under the `:root` CSS variables.
- Replace the placeholder YouTube video in `gallery.html`.

## Credits

- Icons are emoji-based for simplicity; replace with SVGs if desired.
- Stock photos are loaded from Unsplash and can be replaced anytime.
