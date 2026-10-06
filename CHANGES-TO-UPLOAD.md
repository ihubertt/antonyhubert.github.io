# Upload instructions — 06 October 2026

Everything from today's work, as one list. **16 files to add or replace, 4 to delete.**

---

## 1. Delete these 4 files from `assets/`

The CV files were renamed to put your name in the same order as the site and your
publication. The old ones must go, or visitors will download a stale CV.

```
assets/Antony_Hubert_CV_2026.pdf
assets/Antony_Hubert_CV_2026_Photo.pdf
assets/Antony_Hubert_Lebenslauf_2026.pdf
assets/Antony_Hubert_CV_2026.docx
```

On github.com: open each file → the **⋯** menu top right → **Delete file** → commit.

> **Before you delete:** any application you already sent containing a link to
> `Antony_Hubert_CV_2026.pdf` will stop working. If you have sent such links recently
> and want them to keep resolving, skip this step for now — the site itself no longer
> points at the old files either way.

## 2. Upload 4 files into `assets/` — folder `3_PUT-IN_assets`

```
Hubert_Antony_CV_2026.pdf          English CV, 2 pages, ATS format
Hubert_Antony_CV_2026_Photo.pdf    English CV with photo
Hubert_Antony_Lebenslauf_2026.pdf  German CV, 2 pages
Hubert_Antony_CV_2026.docx         English CV, Word
```

## 3. Upload 6 files to the repository root — folder `4_PUT-IN_root`

`index.html` · `projects.html` · `research.html` · `expertise.html` · `cv.html` · `sitemap.xml`

## 4. Upload 3 files into `de/` — folder `5_PUT-IN_de`

`index.html` · `cv.html` · **`projekte.html` (new file)**

Drag the whole `de` folder so the paths are preserved.

## 5. Upload the stylesheet and script — folder `6_PUT-IN_css-js`

`css/style.css` · `js/site.js`

Drag both folders so the paths are preserved.

---

## How to upload on github.com

1. Open the repository.
2. `Add file` → `Upload files`.
3. Drag in the contents of folders 3 to 6, keeping the folder structure.
4. Commit to `main`. GitHub Pages redeploys in about a minute.
5. Then do the four deletions in step 1.
6. Hard-refresh the live site with **Ctrl+Shift+R** to get past the browser cache.

---

## What changed

### Structure and design
- **Home:** four-number proof strip under the hero (~60% · 0.152% · 2024 *Procedia CIRP* · 100+), so the headline results are visible without scrolling. "What I deliver" is now a two-column grid.
- **Projects:** sticky project rail, an at-a-glance strip on each project (role, period, outcome, three numbers), the method detail folded into collapsible sections, a mid-page contact prompt. 23.8 → 19.5 screens.
- **Research → Publication:** re-scoped around the paper — citation and DOI first, then a plain-language summary, the four findings, and where it applies. The experimental method moved to the project page, removing the largest duplication on the site. The file is still `research.html`, so old links work.
- **Expertise:** every self-assigned level removed. 42 capabilities in a two-column evidence grid, plus 26 machines and software titles as tag chips. 9.4 → 6.9 screens; on a phone, 19.8 → 10.2.
- **German:** `de/projekte.html` added — all five projects in full German.
- Scroll-reveal animation throughout, disabled for anyone who has reduced motion switched on.

### Accuracy corrections
- **SEM removed everywhere.** It was listed as a capability and inside your Master's thesis description.
- **SLM 280HL** now reads "one supervised session"; ALC2 and TRUMPF TruPrint 1000 read "operated regularly".
- **AFM and micro-CT** moved out of your personal instrument list. The Co-Cr measurements remain in the project, described as externally measured; your analysis of that data is still credited to you.
- **Minitab restored** as the tool for Taguchi S/N and ANOVA.
- **CAD and simulation reordered:** CATIA V5, PTC Creo, Siemens NX, ANSYS Mechanical, ANSYS Fluent, AutoCAD, Minitab.
- **Name order** corrected to Hubert Antony in the CV documents and filenames.
- **Visa wording:** "Residence permit under § 20 AufenthG with permission to work. I apply for the EU Blue Card myself after signing — no employer sponsorship required."
- **References line** added: academic and professional references, and *Arbeitszeugnisse*, available on request.

### Technical
- `canonical`, Open Graph and `hreflang` tags on all eight pages — previously the home page only. This controls what appears when the link is pasted into LinkedIn, email or WhatsApp.
- JSON-LD `Person` on both home pages and `ScholarlyArticle` on the Publication page, so a recruiter searching your name finds you rather than a namesake.
- Lazy loading on 33 below-fold images; intrinsic width and height on all 38 so nothing jumps while loading.
- Videos set to load only when wanted.
- Sitemap updated with the new German page and language pairs.

### Phone number
The phone number and street address are on the CV documents only, not on the website —
a public page gets scraped by bots, a PDF sent with an application does not.

---

## Still open

- Delete `assets/img/portrait.webp` and `assets/img/portrait-square.webp` — superseded by the `-v2` files.
- Confirm `.nojekyll` is present at the repository root.
- Clear the lab and machine photography, and the SmartPro diagram, with Prof. Riegel — the repository is public.
