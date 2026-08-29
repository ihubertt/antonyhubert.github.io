# What to upload — current state

**Everything now lives in `site/`.** One upload action, not several.

---

## The one action

1. Open the `site` folder. Press **Ctrl + H** to show hidden files.
2. Click inside, press **Ctrl + A** to select all **16 items** (11 files + the `assets`, `css` and `js` folders + two dotfiles).
3. On your repo page: **Add file** → **Upload files** → drag the selection in.
4. Commit message: `Add figures, hero, process strip and build video slot`
5. **Commit changes.**

Files with the same name overwrite the old ones. Folders merge. That is what you want.

⚠ Drag the **contents** of `site`, not the `site` folder itself — `index.html` must
land at the top level of the repo.

---

## What changed since the first version

**Five HTML/CSS/JS files were edited — all of them must be re-uploaded:**

| File | What changed |
|---|---|
| `index.html` | Hero image restored (specimen mount, rotated so the label reads); portrait added beside the executive summary; card alt text corrected |
| `projects.html` | Real figures wired in; captions rewritten to match the actual images; **new VID-F build-video slot** in Project 02; new "Manufacture" row in the results table |
| `research.html` | Figures wired in |
| `expertise.html` | **New FIG-02 process-chain figure** added above Languages |
| `cv.html` | Circular portrait added to the page header |
| `css/style.css` | Hero still-image layer, portrait and avatar styles, mobile table stacking rebuilt |
| `js/site.js` | Hero falls back to the still instead of collapsing; video slots probed by HEAD request |

**Sixteen new images in `assets/img/`:**

```
hero.webp           hero-mobile.webp    portrait.webp      portrait-square.webp
fig-02.webp         fig-03.webp         fig-04.webp        fig-05.webp
fig-06.webp         fig-07.webp         fig-08.webp        fig-09.webp
fig-12.webp         fig-13.webp         fig-14.webp
```

---

## Videos — a second upload, later

Not built yet. `ffmpeg` is still missing:

```bash
sudo apt install ffmpeg
```

```bash
"/home/mich/Claude Ai_Local folder/20260827_Portfolio_Creation_docs/UPLOAD-TO-GITHUB/make-videos.sh"
```

That writes six videos into `site/assets/video/` and five poster frames into
`site/assets/img/`. Then repeat the one action above — or just upload the two changed
folders:

- `site/assets/video/` → repo `assets/video/`
- `site/assets/img/` → repo `assets/img/` (the new `vid-*-poster.jpg` files)

| Video | Source | Where it appears |
|---|---|---|
| `hero.mp4` | Smoke test, 8 s from 0:08 | Home hero, overlays the still |
| `vid-b-remelting.mp4` | `VID-02_Remelting 1.mp4`, first 18 s | Project 01 |
| `vid-c-cyclic.mp4` | `VID-02_Cyclic remelting.mp4`, full | Project 01 banner |
| `vid-d-smoketest.mp4` | `VID-03_Smoke_Test_LIVE.mp4`, full 26 s | Project 02, validation |
| `vid-e-process.mp4` | `VID-01.mp4`, full | Research |
| `vid-f-printing.mp4` | `FIIG2/5A_during_print.mp4`, full 19.8 s | **Project 02, manufacture** |

Until they exist each slot shows a labelled placeholder. The site is complete and
presentable without them.

---

## Before you commit

- [ ] **The repo is public.** Clear the lab and machine photography with Prof. Riegel —
      that includes the specimen-mount hero, the process strip, and the build footage.
- [ ] `.nojekyll` must be in the upload. It is hidden; Ctrl + H shows it. Without it
      GitHub runs Jekyll and breaks the site.
- [ ] Do not upload raw footage. Only the compressed outputs from the script.
