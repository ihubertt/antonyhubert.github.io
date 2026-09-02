# Upload sheet

Everything is in this `site` folder: **54 files, 12 MB, 17 top-level items.**
Verified before packaging: 7 pages, 44 local references, **zero missing**, zero unused
assets, no phone number on any page, "73430 Aalen" on all 7 pages, and 5 live hyperlinks
in each of the three CV PDFs.

---

## The upload

1. Open the `site` folder. Press **Ctrl + H** so hidden files appear. Count **17 items**.
2. Click inside, press **Ctrl + A**.
3. On your repository page: **Add file** → **Upload files**, drag the selection in.
4. Commit message: `German pages, result bands, clickable CV links`
5. **Commit changes.**

> Drag the **contents** of `site`, not the folder itself. `index.html` must land at the
> top level of the repository.

**Note the new `de` folder.** It contains the two German pages and must upload with the
rest. It is a normal folder, not hidden, so Ctrl + A will pick it up.

**If the upload stalls**, split it in two: everything except `assets/video` first, then
open `assets/video` in the repo and upload the six MP4s separately. Video is 8.5 MB of
the 12 MB.

---

## What is in it

```
index.html  projects.html  research.html  expertise.html  cv.html
de/index.html  de/cv.html                    German home page and CV page
css/style.css   js/site.js
.nojekyll  .gitignore  robots.txt  sitemap.xml
assets/    3 CVs + 1 Word file · 21 images · 5 poster frames · 6 videos
README.md  PUBLISH.md  UPLOAD-VIA-BROWSER.md  CHANGES-TO-UPLOAD.md   (notes, not the site)
```

---

## Changed this round

**Home page**
- Three hero figures removed from the top of the site.
- They now sit as **result bands inside the work they describe**. Project 01 carries
  ~60% / 0.152% / Procedia CIRP. Co-Cr carries 2.8% / 10x / 9 of 27. The gas system
  carries 4 m/s / <200 ppm / CAD to CFD to built. The thermal project carries
  30 / 300 °C / 400 °C. Research gets a four-figure publication band.
- Location reads **73430 Aalen, Germany** everywhere.
- **Phone number removed from all five English pages.** Kept on the CVs.

**German pages, new**
- `de/index.html` and `de/cv.html`, with a **DE / EN switch in the header of all seven
  pages**. Projects, Research and Expertise stay in English.
- Both German pages state the language position openly:
  *"Ein offenes Wort zu meinem Deutsch: derzeit B1, die B2-Prüfung ist für Dezember 2026
  angesetzt. Fachliche Gespräche führe ich sicher auf Englisch und arbeite mich im
  deutschsprachigen Umfeld konsequent weiter ein."*
- `hreflang` tags both ways; both pages added to `sitemap.xml`.

**Figures**
- FIG-15 middle panel rotated 180°.
- Zoom hint now reads **"Click on the image to enlarge"**.
- Source references with clickable [7], [8], [13], [14] links on the Research page.

**CVs**
- All three carry **live hyperlinks**: LinkedIn, portfolio URL, publication DOI, email
  and phone are real PDF link annotations.
- Phone kept. The website is public and gets scraped; a CV goes to one named employer,
  where a missing number can cost you the call.

| File | Use it for |
|---|---|
| `Antony_Hubert_CV_2026.pdf` | **Primary.** No photo. Every online portal. |
| `Antony_Hubert_CV_2026.docx` | Portals that prefer Word |
| `Antony_Hubert_CV_2026_Photo.pdf` | Direct email and speculative applications |
| `Antony_Hubert_Lebenslauf_2026.pdf` | German-language applications |

---

## After it goes live

Check these seven pages, click one figure to confirm the enlarge overlay opens, and use
the DE / EN switch once in each direction:

```
/                /projects.html   /research.html   /expertise.html   /cv.html
/de/index.html   /de/cv.html
```

---

## Two things before you commit

- **The repository is public.** Clear the lab and machine material with Prof. Riegel:
  the specimen photographs, the process strip, the ALC2 and TruPrint footage, the
  smoke-test rig, and the SmartPro diagram, which is Hochschule Aalen material.
- **`.nojekyll` must be in the upload.** It is hidden, so press Ctrl + H before selecting.
  If your browser refuses to upload it: Add file → Create new file → name it `.nojekyll`
  → put a `#` in the body → commit.
