# JCM Pics: portfolio website

A fast, dark, photo-first portfolio. It's plain HTML/CSS/JS with no build step, ready for GitHub Pages.

## Edit the content

**Everything you'd want to change is in [`js/content.js`](js/content.js):** tagline, bio, gallery photos, categories, services, booking text, email and Instagram.

Lines marked `[VERIFY]` were inferred from your Pixieset page. Lines marked `[PLACEHOLDER]` were made up. Check both before you publish.

Colors and fonts are at the top of `css/style.css` (`:root`).

## Add photos

1. Put the full-size photo in `photos/`. Originals are never modified.
2. Make the fast-loading copies (macOS):
   ```sh
   sh tools/make-web-images.sh
   ```
   This writes `photos/web/` (≤1600px, used in the lightbox) and `photos/thumb/` (≤720px, used in the grid).
3. Add a line to the `photos` list in `js/content.js`:
   ```js
   { file: "my-photo.jpg", title: "Game Title", category: "football", date: "Nov 1, 2026", link: "https://jcmpics.pixieset.com/..." },
   ```
   `category` must match an `id` in `categories`. Filters with no photos are hidden automatically.

## Preview locally

Open `index.html` in a browser, or run a local server:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Publish free on GitHub Pages

1. Create a new GitHub repo (for example `jcmpics`) and upload this folder's contents.
2. Go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then pick `main` and `/ (root)`.
3. Your site will be live at `https://<your-username>.github.io/jcmpics/` within a minute or two.

## Files

```
index.html               page structure
css/style.css            styles
js/content.js            ✏️ all editable content
js/main.js               gallery, filters, lightbox, animations
photos/                  original photos (untouched)
photos/web, photos/thumb generated web-sized copies
tools/make-web-images.sh resizes photos
```

The gallery shows 75 selects in `photos/selects/`, picked from all 124 of your Pixieset collections and downloaded at 1600px. The older files in `photos/` (gallery covers) and `photos/portfolio/` are no longer used by the site; delete them if you don't need them.
