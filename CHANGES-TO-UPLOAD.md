# Upload sheet

Everything lives in this `site` folder. It is complete and self-contained:
**51 files, 12 MB.** Nothing is missing, and every image, video, stylesheet and
download referenced by the pages has been checked to exist.

---

## CV rebuilt for ATS screening

Three files replace the previous two. All single column, no tables, no graphics in the
text flow, UTF-8 PDF, MM/YYYY dates with en-dash, no unexplained gaps.

| File | Use it for |
|---|---|
| `Antony_Hubert_CV_2026.pdf` | **Primary.** No photo. Upload this to every online portal. |
| `Antony_Hubert_CV_2026.docx` | Same content in Word, for portals that prefer .docx |
| `Antony_Hubert_CV_2026_Photo.pdf` | Direct email and speculative applications |
| `Antony_Hubert_Lebenslauf_2026.pdf` | German-language applications |

Positioning widened from additive-manufacturing specialist to **Development, Process
Engineering, Design and Simulation**, matching the roles you are actually applying to.
Keyword density checked: CATIA 6, ANSYS 6, CAM 7, CFD 5, PBF-LB/M 5, PTC Creo 4, CNC 4,
Siemens NX 3, FEA 3, Fluent 3.

Removed: Minitab, the colleague's name on the thermal project, and
"AI-assisted engineering (Anthropic Claude)". Corrected: 60% roughness reduction and
0.152% porosity, replacing the 99% density and 38% figures.

Added as short project lines: thermal expansion of AlSi10Mg, the shielding-gas system,
the camera mounting bracket, sustainable product development, and the ASBC concept
vehicle. Plus volunteering and the student coordinator role.

The German Lebenslauf uses the headings German recruiters and parsers expect:
Profil, Kenntnisse, Berufserfahrung, Ausbildung, Projekte, Publikation, Sprachen,
Weiterbildungen und Zertifikate, Ehrenamt und Engagement. Language levels are given as
Verhandlungssicher, Gute Kenntnisse and Muttersprache.

## Site changes

- "Open to relocation worldwide" is now **"Open to Relocation"**, 19 instances across
  all five pages.
- `sitemap.xml`, `robots.txt` and the canonical tag now point at your live address,
  `https://ihubertt.github.io/antonyhubert.github.io/`, instead of a root domain you do
  not own. An `og:url` tag was added to match.
- The CV page now offers four downloads instead of three.

## The upload

1. Open the `site` folder. Press **Ctrl + H** so hidden files appear.
   You should count **16 items**.
2. Click inside the folder, press **Ctrl + A**.
3. On your repository page: **Add file** → **Upload files**, then drag the selection in.
4. Commit message: `Full portfolio: 5 projects, figures, videos, CV`
5. **Commit changes.**

Same-named files overwrite the old ones. Folders merge. That is what you want.

> **Drag the contents of `site`, not the `site` folder itself.** `index.html` has to land
> at the top level of the repository or nothing loads.

**If the upload stalls**, do it in two commits. Videos are 8.5 MB of the 12 MB total:
> First commit: everything except `assets/video`
> Second commit: open `assets/video` in the repo, then Add file → Upload files

---

## What you are uploading

**Pages and code (10 items)**

```
index.html  projects.html  research.html  expertise.html  cv.html
css/style.css      all styling, light and dark, print stylesheet
js/site.js         asset fallbacks and click-to-enlarge
.nojekyll          required. Hidden file. Without it GitHub breaks the site.
.gitignore  robots.txt  sitemap.xml
```

**assets/ (35 files)**

| Group | Count | Notes |
|---|---|---|
| `assets/*.pdf` and `.docx` | 3 | CV with photo, Word version, photo-free ATS version |
| `assets/img/*.webp` | 20 | 17 figures, hero, hero-mobile, 2 portraits |
| `assets/img/vid-*.jpg` | 5 | poster frames for the click-to-play videos |
| `assets/video/*.mp4` | 6 | hero loop plus five project videos |

**Notes for you (3 files)** — these do not appear on the site. GitHub will render
`README.md` on the repository home page.

```
README.md   PUBLISH.md   UPLOAD-VIA-BROWSER.md
```

---

## Latest corrections included

- Project 05 figures: the furnace and dilatometer photographs were stored rotated 90°
  anticlockwise and are now upright.
- The two thermal expansion charts are no longer cropped. Titles, y-axis labels and all
  tick values are visible, and the caption now notes that the two charts use different
  y-axis scales.
- The ATS explanation line has been removed from the CV page.
- `hero-poster.jpg` deleted. The hero video already uses `hero.webp` as its poster, so
  the file was doing nothing.

---

## After it goes live

Check these five pages and click one figure to confirm the enlarge overlay works:

```
/                /projects.html    /research.html
/expertise.html  /cv.html
```

A green tick next to your commit means the deploy finished. A 404 usually means it is
still building; give it another minute.

---

## Two things before you commit

- **The repository is public.** Clear the lab and machine material with Prof. Riegel
  first: the specimen photographs, the process strip, the ALC2 and TruPrint footage, the
  smoke-test rig, and the SmartPro programme diagram, which is Hochschule Aalen material
  rather than yours.
- **`.nojekyll` must be in the upload.** It is hidden, so press Ctrl + H before selecting.
  If your browser refuses to upload it, create it directly on GitHub: Add file → Create
  new file → name it `.nojekyll` → put a `#` in the body → commit.
