# taylormcintire.com

Plain static site (HTML + CSS + a few lines of vanilla JS). No build step, no dependencies.
Fonts load from Google Fonts (Playfair Display + Source Serif 4) with Georgia as fallback.

## Structure

```
index.html              Home: hero, about, experience, skills, certifications/education, volunteering, contact
resume.html             Printable resume (use the "Print / Save as PDF" button)
blog/index.html         Blog listing (currently shows a "coming soon" empty state)
blog/post-template.html Reusable post layout with placeholder text (NOT a real post; noindex)
404.html                Not-found page (uses root-absolute links so it works at any URL depth)
CNAME                   Custom domain for GitHub Pages: taylormcintire.com
robots.txt, sitemap.xml SEO basics (update sitemap.xml when you add posts)
assets/css/style.css    Shared styles (colors/fonts are CSS variables at the top)
assets/css/resume.css   Resume layout + print stylesheet
assets/js/main.js       Mobile menu toggle + Formspree AJAX submit
assets/img/favicon.svg  "TM" monogram favicon
assets/img/og-image.png 1200x630 social preview image
```

## Preview locally

```
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Before going live (to do)

1. **Contact form (Formspree):** create a free form at https://formspree.io, then in `index.html`
   the form posts to `https://formspree.io/f/xrpeqvow` (delivers to contact@taylormcintire.com). To change it, replace the ID in index.html.
   Until that's done, the form shows a friendly "not connected yet" message instead of sending.
   The hidden `_gotcha` field is a honeypot for spam bots; leave it in place.
2. **Headshot:** save a square photo (at least 460x460) as `assets/img/headshot.jpg`, then in
   `index.html` find the `HEADSHOT PLACEHOLDER` comment and swap the `<div class="monogram">`
   for the `<img class="headshot" ...>` tag shown in the comment.
3. **Hosting + domain:** upload the contents of this folder to GitHub Pages, Netlify, or
   Cloudflare Pages, then point the Squarespace DNS for taylormcintire.com at the host
   (each host gives the exact A/CNAME records). `CNAME` is only used by GitHub Pages and is harmless elsewhere.

## Adding a blog post

1. Copy `blog/post-template.html` to `blog/your-post-slug.html` (lowercase, hyphens).
2. In the new file:
   - Update `<title>`, the meta description, `canonical`, and the `og:` tags (title, description, url, published_time).
   - **Delete** the `<meta name="robots" content="noindex">` line and the yellow "Template" banner.
   - Replace the category, title, date (`<time datetime="YYYY-MM-DD">`), read time, and body content.
     Use `<p>`, `<h2>`, `<ul>`, `<blockquote>`, and `<pre><code>` as in the template.
3. In `blog/index.html`:
   - Remove the `<div class="empty-state">...</div>` block (first post only).
   - Uncomment the `<ol class="post-list">` block and add one `<li>` per post, newest first,
     linking to your new file with its date, title, and a one-line summary.
4. Optionally add the post URL to `sitemap.xml`.

## Privacy

The site intentionally contains no email address or phone number. Visitors reach out
via the contact form or LinkedIn (https://www.linkedin.com/in/taylormcintire).
