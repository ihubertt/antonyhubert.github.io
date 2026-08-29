# What to upload — current state

**Everything is in `site/`.** It is complete: 5 pages, 16 figures, 6 videos, 5 poster
frames, CV in PDF and Word. Total **11 MB**. Nothing is missing.

---

## The one action

1. Open the `site` folder. Press **Ctrl + H** to show hidden files.
2. Click inside, press **Ctrl + A** — **16 items**.
3. Repo page → **Add file** → **Upload files** → drag the selection in.
4. Commit message: `Figures, videos, CV and build-video slot`
5. **Commit changes.**

Same-named files overwrite. Folders merge. Drag the **contents** of `site`, not the
folder itself — `index.html` must land at the repo root.

> GitHub's web uploader takes up to 100 files / 25 MB per commit. This is 30 asset files plus 10 at root
> and 11 MB, so it fits in one go.

---

## Everything that changed

**Seven code files edited — all must go up:**

| File | Change |
|---|---|
| `index.html` | Hero (still + video layers), portrait beside the summary, corrected alt text |
| `projects.html` | All figures wired; captions rewritten to match the real images; **VID-F build-video slot** added to Project 02; new "Manufacture" results row |
| `research.html` | Figures wired; FIG-13 caption rewritten to explain the dashed reference lines |
| `expertise.html` | **FIG-02 process-chain figure** added |
| `cv.html` | Portrait avatar; **Word download button** added alongside the PDF |
| `css/style.css` | Hero layering, portrait and avatar styles, mobile table stacking rebuilt |
| `js/site.js` | Hero falls back to the still; video slots probed by HEAD request |

**`assets/` — 30 files:**

```
assets/
├── Antony_Hubert_CV_2026.pdf      2 pages, A4, with portrait
├── Antony_Hubert_CV_2026.docx     same, Word format
├── Antony_Hubert_CV_2026_ATS.pdf  same, no portrait — for automated portals
├── img/    17 figures + 6 poster frames  (2.7 MB)
└── video/  6 videos                      (8.5 MB)
```

---

## Hero: resolved

The video stays. Your own 12.9 s edit of the smoke test is now the hero, re-encoded to
web spec (1.7 MB, 30 fps, audio stripped, faststart).

The specimen photographs are no longer buried behind it — they are now **FIG-15** on the
Projects page, immediately before the verification section of Project 01: the labelled
FeSi6.5 sample matrix, the sectioned samples in resin, and the mounts prepared for
microscopy. That is a better home for them than a hero anyway; there they are evidence,
not decoration.

---

## Videos in place

| File | Duration | Size | Where |
|---|---|---|---|
| `hero.mp4` | 12.9 s | 1.7 MB | Home hero, muted loop *(your edit)* |
| `vid-b-remelting.mp4` | 34.6 s | 320 KB | Project 01, method explainer *(your replacement)* |
| `vid-c-cyclic.mp4` | 6.5 s | 41 KB | Project 01, banner strip |
| `vid-d-smoketest.mp4` | 26.1 s | 3.8 MB | Project 02, validation |
| `vid-e-process.mp4` | 8.9 s | 143 KB | Research, PBF-LB/M explainer |
| `vid-f-printing.mp4` | 19.8 s | 2.6 MB | Project 02, manufacture step |

---

## The CV

`Antony_Hubert_CV_2026.pdf` — 2 pages, A4, built for ATS parsing:

- Single column, no tables, no text boxes, no graphics, no header/footer
- Standard section headings (PROFESSIONAL SUMMARY, CORE COMPETENCIES, PROFESSIONAL
  EXPERIENCE, EDUCATION, PUBLICATION, CERTIFICATIONS, LANGUAGES)
- Contact details as plain text in the body, where parsers look for them
- Dates in MM/YYYY – MM/YYYY throughout
- Arial / Liberation Sans, embedded, fully selectable — 98 lines extract cleanly
- Keyword density verified: PBF-LB/M ×7, ANSYS ×4, CATIA ×3, SEM ×3, Taguchi ×2,
  Minitab ×2, Siemens NX ×2

The `.docx` is the same document. Some ATS still parse Word more reliably than PDF —
send the `.docx` when a portal offers the choice, the PDF when emailing a human.

The editable source is `Antony_Hubert_CV_2026.fodt` in the project root. Edit it, then:

```bash
soffice --headless --convert-to pdf --outdir . Antony_Hubert_CV_2026.fodt
```

---

## Before you commit

- [ ] **Clear the lab and machine material with Prof. Riegel.** The repo is public and
      it now includes the specimen-mount hero, the process strip, the ALC2 build
      footage and the smoke-test rig.
- [ ] `.nojekyll` must be in the upload. It is hidden — Ctrl + H.
- [ ] Do not add raw footage. Only the compressed files already in `assets/video/`.
