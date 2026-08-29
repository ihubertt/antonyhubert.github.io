# antonyhubert.github.io

Static portfolio site. Five pages, one stylesheet, no build step, no dependencies.

## Deploy

```bash
git add -A && git commit -m "Update portfolio" && git push
```

Live in ~30 seconds. That is the whole process.

**First-time setup:** name the GitHub repo exactly `antonyhubert.github.io`, then
**Settings → Pages → Source: Deploy from a branch → main → / (root)**.

## Files

```
index.html      Home        — hero, three numbers, summary, value table, project cards
projects.html   Projects    — three projects at full depth + further work
research.html   Research    — Masterarbeit deep-dive + publication
expertise.html  Expertise   — six competency tables, sticky sub-nav
cv.html         CV          — chronology + PDF download
css/style.css   All styling. Light + dark, responsive, print stylesheet included.
js/site.js      Asset fallbacks only. ~40 lines.
.nojekyll       Skips the Jekyll build. Do not delete.
robots.txt      Allows all crawlers.
sitemap.xml     Update the domain if you buy one.
```

## Adding assets — no HTML editing required

Every image and video slot is already wired up. Until a file exists the page shows a
labelled placeholder instead of a broken image. **Drop the file in with the exact
filename below and it appears.**

### Images → `assets/img/`

**Already added** (generated from your originals):

| Filename | Content | Used on |
|---|---|---|
| `portrait.webp` | Headshot, 820×1093 | Home, beside the executive summary |
| `portrait-square.webp` | Square crop, 600×600 | CV page circular avatar |

**Still to add:**

| Filename | Slot | Content | Used on |
|---|---|---|---|
| `fig-03.webp` | FIG-03 | As-built vs cyclically remelted surface, side by side | Home card, Projects |
| `fig-04.webp` | FIG-04 | Etched cross-sections, cyclic vs non-remelted, 20×/50× | Projects |
| `fig-05.webp` | FIG-05 | Co-Cr AFM pore maps, best (2.8%) vs worst (27.06%) | Home card, Projects |
| `fig-06.webp` | FIG-06 | Minitab S/N main effects plot | Projects |
| `fig-07.webp` | FIG-07 | ANSYS velocity streamlines — **middle panel only** | Projects |
| `fig-08.webp` | FIG-08 | Printed nozzle hardware beside its CAD model | Home card, Projects |
| `fig-09.webp` | FIG-09 | Lamination schematic, alternating Material A/B | Research |
| `fig-12.webp` | FIG-12 | Stamping / sheet-stacking limitations | Research |
| `fig-13.webp` | FIG-13 | Roughness charts, Keyence + MarSurf | Research |
| `fig-14.webp` | FIG-14 | Edge deposition vs power intensity | Research |

⚠ **`fig-07.webp` must be the middle panel only** of the CFD video. The top and bottom
panels show velocity legends of 2.5 × 10¹¹ and 3.5 × 10⁶ m/s — both non-physical.
See `MEDIA-PLAN.md` §2.

### Videos → `assets/video/` (plus poster images → `assets/img/`)

| Filename | Poster | Source clip | Used on |
|---|---|---|---|
| `hero.mp4` | *(uses `hero.webp`)* | Smoke test, best 8 s, muted loop. Overlays the still; if absent the still shows. | Home hero |
| `vid-b-remelting.mp4` | `vid-b-poster.jpg` | `VID-02_Remelting 1.mp4`, trimmed to ~18 s | Projects |
| `vid-c-cyclic.mp4` | `vid-c-poster.jpg` | `VID-02_Cyclic remelting.mp4`, banner strip | Projects |
| `vid-d-smoketest.mp4` | `vid-d-poster.jpg` | Smoke test, full 26 s cut | Projects |
| `vid-e-process.mp4` | `vid-e-poster.jpg` | `VID-01.mp4`, PBF-LB/M explainer | Research |

The hero currently renders as a clean text block — no image. Adding `hero.mp4` turns it
into a full-bleed video hero automatically, with no HTML editing.

**Publishing:** [`UPLOAD-VIA-BROWSER.md`](UPLOAD-VIA-BROWSER.md) for the drag-and-drop
route (no terminal), or [`PUBLISH.md`](PUBLISH.md) for the git command-line route.

### CV → `assets/`

`Antony_Hubert_CV_2026.pdf` — linked from every footer and twice on the CV page.

Compression commands for all of the above are in `MEDIA-PLAN.md` §4.
Install ffmpeg first: `sudo apt install ffmpeg`

## Custom domain

1. Buy the domain (INWX, Netcup, Namecheap).
2. `A` records for `@` → `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`
3. `CNAME` for `www` → `antonyhubert.github.io`
4. Add a `CNAME` file to this repo containing just the domain, then
   **Settings → Pages → Custom domain**, and tick **Enforce HTTPS**.
5. Update the URLs in `sitemap.xml`, `robots.txt` and the `<link rel="canonical">` in `index.html`.

## Editing content

`PORTFOLIO.md` in the parent folder is the single source of truth. Edit it first,
then propagate to the HTML — otherwise the two drift and you eventually send someone
the stale version.

## Notes

- The repo is public. Do not commit thesis drafts or unpublished LAZ data.
- Clear machine photography and unpublished micrographs with Prof. Riegel before pushing.
- Never `git add` raw video. Git history keeps large files forever, even after deletion.
- Test on a phone over mobile data before sending the link to anyone.
