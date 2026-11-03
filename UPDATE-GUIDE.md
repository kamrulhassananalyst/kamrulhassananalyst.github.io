# Portfolio Update Guide (No Overwrite Workflow)

The portfolio is configured so future content updates can be made without editing `index.html`, `styles.css`, or `script.js`.

## Update the resume PDF
1. Upload the new PDF into `assets/documents/` with a **new unique filename**, for example `kamrul-resume-2027-04-15.pdf`.
2. Open `data/career.json`.
3. Change only the `resumeFile` value to the new path.
4. Commit both files. All Resume / Open Resume / Download Resume links will use the new PDF.
5. Keep the previous PDF in the repository as an archive. Do not delete or overwrite it.

## Update the profile picture
1. Upload the new optimized image into `assets/images/hero/` with a **new unique filename**.
2. Change only the `profileImage` value in `data/career.json`.
3. Commit both files. The hero portrait and its full-size lightbox will use the new image.
4. Keep the previous image in the repository as an archive.

## Add a new company
1. Open `data/career.json` and add a new object at the beginning of the `companies` array.
2. Copy the structure of an existing company object and update `company`, `category`, `designation`, `start` (`YYYY-MM`), `end` (`YYYY-MM` or `null` for current), `summary`, and `details`.
3. `media` is optional. Upload new images using unique filenames and list their paths in `media`.
4. `highlight` and `evidence` are optional. Keep claims and metrics consistent with verifiable career evidence.
5. Save the JSON. The career timeline is rendered from this file, and experience years are calculated from `experienceStart`.

## Important safeguards
- Use unique filenames for every new resume and profile image. Never overwrite an existing PDF or image.
- Keep `assets/documents/archive/` and older image files as historical backups.
- `resumeFile` and `profileImage` are paths relative to the repository root.
- `data/career.json` must remain valid JSON (double quotes around keys and text; no trailing commas).
- The current resume content is dated 2026-11-03. The original portfolio resume has been retained in `assets/documents/archive/`.
