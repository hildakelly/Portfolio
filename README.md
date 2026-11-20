# Hilda Kelly Portfolio · Clickable Project Pages

A static website for GitHub Pages, built with HTML and CSS. No dependencies or build process are required.

## Open locally

Open `index.html` in a browser or use VS Code Live Server.

## What's new in this version?

- Each homepage project card is clickable, including its title and image.
- Each project now has its own HTML page, with a link back to `index.html#work` and links to the previous/next project.
- Clicking the wordmark in the header returns to the homepage.
- The first **Sirens Against Waste** page still has its original starter layout. The other six pages are editable case-study templates, not finished project write-ups.

## Project pages

| Project | File |
| --- | --- |
| Sirens Against Waste | `sirens.html` |
| Heritage Haven | `heritage-haven.html` |
| Puppy Calendar | `puppy-calendar.html` |
| Preflight Poster | `preflight.html` |
| The Paper Court | `paper-court.html` |
| Digital Image Adjustment | `retouching.html` |
| Harvest Bites | `harvest-bites.html` |

### How a homepage link works

```html
<article class="project-card">
  <a class="project-card-link" href="puppy-calendar.html">
    <img src="assets/puppy-calendar.jpg" alt="Puppy calendar design">
    <div class="project-meta"><h4>Puppy Calendar</h4><p>Illustration / Print</p></div>
  </a>
</article>
```

`href="puppy-calendar.html"` opens a file in the same folder. The page's `href="index.html#work"` returns to the homepage at the Selected Work section. These **relative links** work both locally and on GitHub Pages, including under a repository project URL.

## Replacing the placeholders

The thumbnails are crops from your provided screenshots. Replace these with high-resolution original exports, then fill in the project brief, role, tools, decisions, and additional images on each case-study page. The generic starter copy is not intended as final portfolio content.

## Upload to GitHub Pages

Upload all `.html` files, `style.css`, `.nojekyll`, and the `assets/` folder to the **root** of the repository. If you already uploaded the first starter, this version **replaces** `index.html`, `sirens.html`, `style.css`, and `README.md`, and **adds** the six new HTML files. Keep the existing asset files.

Then in GitHub repository **Settings → Pages**, use **Deploy from a branch**, `main`, `/(root)`.

## Color palette

| Color | Hex |
| --- | --- |
| Blush pink | `#FBE5F3` |
| Warm cream | `#FAF9EE` |
| Forest green | `#245037` |
| Leaf green | `#93B84B` |
| Dusty rose | `#E9B8C7` |
| Soft charcoal | `#343D36` |
