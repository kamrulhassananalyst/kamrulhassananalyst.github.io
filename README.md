# Mohammad Kamrul Hassan — Premium Portfolio

A responsive, GitHub Pages-ready portfolio for:

- Business Sales & MIS Data Analyst
- Business Intelligence & Automation Specialist
- Business Solution Developer

## Included

- `index.html` — complete content and structure
- `styles.css` — premium responsive visual system
- `script.js` — navigation, reveal effects, active-menu state, media filters, gallery lightbox and video modal
- `assets/images` — optimized WebP images
- `assets/videos` — browser-ready MP4 project showcases
- `assets/documents` — resume and professional certificates
- `.nojekyll` — serves the static files directly on GitHub Pages

## Recommended GitHub identity

**Best username style:** `kamrulhassananalyst`  
Use this only if it is available. It is professional, searchable and consistent with the LinkedIn profile.

Other suitable styles:

- `mdkamrulhassan`
- `kamrulhassanbi`
- `kamrulmisbi`

Avoid random numbers, nicknames and unnecessary punctuation.

## Best repository choice

### Option A — Best professional URL

If the GitHub username is `kamrulhassananalyst`, create a repository named exactly:

```text
kamrulhassananalyst.github.io
```

The website URL will be:

```text
https://kamrulhassananalyst.github.io/
```

For a personal portfolio, this is the strongest option.

### Option B — Normal project repository

Repository name:

```text
kamrul-hassan-portfolio
```

Website URL:

```text
https://YOUR-USERNAME.github.io/kamrul-hassan-portfolio/
```

## Upload using the GitHub website

1. Sign in to GitHub.
2. Click the **+** menu in the upper-right corner.
3. Select **New repository**.
4. Enter the selected repository name.
5. Select **Public**.
6. Do not add a separate README, `.gitignore` or license because this package already contains the website files.
7. Click **Create repository**.
8. On the new repository page, select **Add file → Upload files**.
9. Open the extracted `kamrul-premium-portfolio` folder on the computer.
10. Upload the **contents inside the folder**, not the outer folder itself:
    - `index.html`
    - `styles.css`
    - `script.js`
    - `README.md`
    - `.nojekyll`
    - the complete `assets` folder
11. Enter a commit message such as:
    ```text
    Publish premium portfolio website
    ```
12. Click **Commit changes**.

All included individual files are below GitHub's 25 MiB browser-upload limit.

## Enable GitHub Pages

1. Open the repository.
2. Select **Settings**.
3. In the left menu, select **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select the `main` branch.
6. Select the `/(root)` folder.
7. Click **Save**.
8. Return to the Pages screen after deployment and open the published URL shown by GitHub.

The entry file, `index.html`, is already in the repository root as required.

## Upload using Git on a computer

Open Terminal, Command Prompt, PowerShell or Git Bash inside the extracted folder:

```bash
git init
git add .
git commit -m "Publish premium portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Then enable GitHub Pages from **Settings → Pages → Deploy from a branch → main → /(root)**.

## How to share the final website

Use the published GitHub Pages URL in:

- LinkedIn **Contact info**
- LinkedIn **Featured** section
- CV / resume header
- Email signature
- Job applications
- WhatsApp professional introduction
- QR code on a printed CV or business card

Recommended sharing line:

```text
Portfolio: https://YOUR-USERNAME.github.io/
```

## Important update notes

- Keep the current folder structure unchanged.
- Do not rename asset folders unless all matching paths in `index.html` are also updated.
- Replace a photo by keeping the same filename to avoid editing the code.
- The PPL app is intentionally positioned as a new value-added solution developed for T.K. Group.
- The Kormo period shown publicly follows the uploaded Google experience certificate: September 2017 to June 2022.
- Resume-reported impact ranges are clearly identified as such; no new achievement figures were invented.

## Safe content updates
See [`UPDATE-GUIDE.md`](UPDATE-GUIDE.md). Resume and profile picture paths, career history, and experience calculation are managed through `data/career.json`. Use a new unique filename for every replacement so older files remain available and no project assets are overwritten.
