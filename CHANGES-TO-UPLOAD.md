# Changes to upload — 05 September 2026

Two changes: Chennai, India named in the Executive summary, and languages reordered to
German, English, Tamil everywhere.

## HTML files to replace (7)

| Repository path | What changed |
|---|---|
| `index.html` | Executive summary now says "two industry roles in Chennai, India". Footer language order. |
| `de/index.html` | "zwei Jahre Industrieerfahrung in Chennai, Indien". Footer language order. |
| `cv.html` | Languages row reordered: German, English, Tamil. Footer language order. |
| `de/cv.html` | Sprachen row reordered: Deutsch, Englisch, Tamil. Footer language order. |
| `expertise.html` | Languages table rows reordered: German, English, Tamil. Footer language order. |
| `projects.html` | Footer language order only. |
| `research.html` | Footer language order only. |

## CV files to replace (4)

| Repository path |
|---|
| `assets/Antony_Hubert_CV_2026.pdf` |
| `assets/Antony_Hubert_CV_2026_Photo.pdf` |
| `assets/Antony_Hubert_Lebenslauf_2026.pdf` |
| `assets/Antony_Hubert_CV_2026.docx` |

All four now list **German first**, then English, then Tamil. Nothing else in the CVs changed.

## How to upload

1. Open the repository on github.com.
2. `Add file` → `Upload files`, drag the 7 HTML files in (keep `de/index.html` and
   `de/cv.html` inside the `de` folder — drag the whole `de` folder to preserve the path).
3. Repeat for the 4 files into `assets/`.
4. Commit to `main`. GitHub Pages redeploys in about a minute.

The CV filenames are unchanged, so anyone holding an old link still gets the new file.
Browsers may cache the PDFs — force-refresh with Ctrl+Shift+R to confirm.

## Still open from earlier rounds

- Delete `assets/img/portrait.webp` and `assets/img/portrait-square.webp` (superseded by the `-v2` files).
- Confirm `.nojekyll` is present at the repository root.
