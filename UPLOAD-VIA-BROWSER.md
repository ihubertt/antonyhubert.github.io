# Publishing from the browser — no terminal, no git

You already have the repository open. This uploads the site through GitHub's web
interface and turns on Pages. Five minutes.

---

## Step 1 — Make hidden files visible on your computer

Two files start with a dot, so your file manager hides them by default. One of them
(`.nojekyll`) is **required** — without it GitHub runs Jekyll over the site and
silently breaks things.

Open the folder:

```
/home/mich/Claude Ai_Local folder/20260827_Portfolio_Creation_docs/site
```

Press **Ctrl + H** to show hidden files. You should now see `.nojekyll` and
`.gitignore` alongside the others — **17 items total**.

---

## Step 2 — Upload

1. On your repository page, click **Add file** → **Upload files**.
   (If the repo is completely empty, there is also an
   *"uploading an existing file"* link in the middle of the page — same thing.)

2. Select the **contents** of the `site` folder — click inside it, press **Ctrl + A**,
   then drag the selection into the browser window.

   ⚠ **Drag the contents, not the `site` folder itself.** If you drag the folder,
   everything lands under `site/` inside the repo and `index.html` will not be at the
   root — the site will not load. You want `index.html` sitting at the top level of
   the repo.

3. Wait for all files to finish uploading. You should see the five `.html` files,
   `css/`, `js/`, `assets/`, plus `.nojekyll`, `.gitignore`, `robots.txt`,
   `sitemap.xml` and the three `.md` files.

4. In the commit box at the bottom, type something like
   `Portfolio site — five pages` and click **Commit changes**.

### If `.nojekyll` refuses to upload

Some browsers skip dotfiles. Create it directly on GitHub instead:

**Add file** → **Create new file** → type `.nojekyll` as the filename → put anything
in the body (a `#` comment is fine) → **Commit changes**.

---

## Step 3 — Turn on Pages

**Settings** (top of the repo) → **Pages** (left sidebar)

- **Source:** Deploy from a branch
- **Branch:** `main`, folder **`/ (root)`**
- **Save**

---

## Step 4 — Open it

Wait 1–2 minutes for the first build. The address depends on what your repository
is called:

| Repository name | Your site address |
|---|---|
| `USERNAME.github.io` | `https://USERNAME.github.io` |
| anything else, e.g. `portfolio` | `https://USERNAME.github.io/portfolio/` |

**Both work.** Every link in the site is relative, so it runs correctly from a
subfolder without any changes.

A green tick beside your commit means the deploy finished. A 404 usually just means
it is still building — give it another minute.

Then click through all five pages: Home, Projects, Research, Expertise, CV.

---

## If your repo is *not* named `USERNAME.github.io`

The site works as-is. Three cosmetic files still point at the root domain, and it is
worth fixing them so search engines index the right URLs. Edit each on GitHub with
the ✏️ pencil icon:

- `sitemap.xml` — replace all five `https://antonyhubert.github.io/` with your real address
- `robots.txt` — same, on the Sitemap line
- `index.html` — the `<link rel="canonical">` near the top

Not urgent. The site is fully functional without it.

---

## Making changes later

**Edit one file:** open it on GitHub, click the ✏️ pencil, edit, **Commit changes**.
Live in ~30 seconds.

**Add images or videos:** navigate into `assets/img/` (or `assets/video/`) →
**Add file** → **Upload files** → drag them in → commit. The filenames in
[`README.md`](README.md) are already wired to their slots, so a correctly-named file
appears on the page with no HTML editing at all.

**Edit several files at once:** press the **`.`** key anywhere on the repo page. That
opens github.dev — a full editor in the browser, no install. Make your changes, then
use the Source Control panel on the left to commit.

---

## Before you commit — two checks

- [ ] **The repository is public.** Every file and every commit message is visible to
      anyone. No thesis drafts, no unpublished LAZ data.
- [ ] **Do not upload raw video.** The compressed web versions only. GitHub rejects
      files over 100 MB, and anything you upload stays in the repository history
      permanently even after deletion.

---

## What is uploading

```
index.html  projects.html  research.html  expertise.html  cv.html
css/style.css              js/site.js
assets/img/portrait.webp   assets/img/portrait-square.webp
.nojekyll  .gitignore  robots.txt  sitemap.xml
README.md  PUBLISH.md  UPLOAD-VIA-BROWSER.md
```

384 KB total. The `.md` files are notes for you — they do not appear on the site, and
GitHub will render `README.md` on the repository home page.
