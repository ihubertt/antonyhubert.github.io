# Publishing to GitHub Pages — exact steps

Your machine: **git 2.43.0 installed**, `gh` CLI not installed, git identity not yet set.
These steps assume that. Nothing else needs installing.

Everything below is run from the `site/` folder.

---

## Step 0 — Set your git identity (once, ever)

```bash
git config --global user.name "Antony Hubert"
```

```bash
git config --global user.email "antonyhubert03@gmail.com"
```

---

## Step 1 — Create the repository on GitHub

In the browser, not the terminal.

1. Go to **https://github.com/new**
2. **Repository name:** `antonyhubert.github.io`
   ⚠ It must match your GitHub username exactly — `USERNAME.github.io`. If your
   username is not `antonyhubert`, use *your* username. This exact name is what makes
   the site publish at the root domain with no extra configuration.
3. **Public** (required for Pages on the free plan)
4. **Do not tick** "Add a README", ".gitignore", or "license" — leave the repo
   completely empty, or the first push will be rejected as a conflict.
5. **Create repository**

Leave that page open. You will need the URL it shows you.

---

## Step 2 — Initialise and commit locally

```bash
cd "/home/mich/Claude Ai_Local folder/20260827_Portfolio_Creation_docs/site"
```

```bash
git init && git branch -M main
```

```bash
git add -A && git commit -m "Portfolio site: five pages, hero and portrait"
```

Check what you are about to publish — worth doing once:

```bash
git status --short && git ls-files | wc -l
```

---

## Step 3 — Connect to GitHub and push

Replace `antonyhubert` with your username if it differs.

```bash
git remote add origin https://github.com/antonyhubert/antonyhubert.github.io.git
```

```bash
git push -u origin main
```

### Authentication — the step everyone gets stuck on

GitHub removed password authentication. When the push asks for credentials:

- **Username:** your GitHub username
- **Password:** *not* your GitHub password — a **Personal Access Token**

**To create one:**
GitHub → click your avatar → **Settings** → scroll to **Developer settings** (bottom
of the left sidebar) → **Personal access tokens** → **Tokens (classic)** →
**Generate new token (classic)** → give it a note like "portfolio", set an expiry,
tick the **`repo`** scope → **Generate token** → **copy it immediately** (it is shown
only once). Paste it as the password.

To avoid re-entering it on every push:

```bash
git config --global credential.helper store
```

Honest caveat: `store` writes the token to `~/.git-credentials` in **plain text**. On a
personal machine that is a normal trade-off. If you would rather not, skip this and
paste the token each time, or use SSH instead — see the appendix at the bottom.

---

## Step 4 — Turn on Pages

For a repo named `USERNAME.github.io`, GitHub usually enables this automatically.
Confirm it:

**Your repo → Settings → Pages**

- **Source:** Deploy from a branch
- **Branch:** `main`, folder `/ (root)`
- **Save**

---

## Step 5 — Check it is live

Wait 1–2 minutes for the first build, then open:

**https://antonyhubert.github.io**

The green tick next to your commit on the repo home page means the deploy finished.
If you get a 404, give it another minute — the very first publish is the slowest.

Check all five pages and click through the nav:

```
/                /projects.html    /research.html
/expertise.html  /cv.html
```

---

## Updating the site later

Three commands, every time:

```bash
git add -A && git commit -m "Add FIG-03 and FIG-04" && git push
```

Live in about 30 seconds.

---

## Custom domain (optional, ~€10/year)

`antonyhubert.de` reads considerably better on an application than a `github.io` URL.

1. Buy the domain — INWX, Netcup and Namecheap all handle `.de`.
2. At your registrar, add four **A** records for `@`:
   `185.199.108.153` · `185.199.109.153` · `185.199.110.153` · `185.199.111.153`
3. Add a **CNAME** record for `www` → `antonyhubert.github.io`
4. In the repo: **Settings → Pages → Custom domain**, enter it, **Save**.
5. Wait for the certificate, then tick **Enforce HTTPS**. Can take up to 24 hours.
6. Update the URLs in `sitemap.xml`, `robots.txt` and the `<link rel="canonical">`
   in `index.html`.

GitHub writes a `CNAME` file into the repo when you do step 4. Run `git pull` before
your next push or it will conflict.

---

## Before you push — three checks

- [ ] **Clear the lab photo and any unpublished LAZ material with Prof. Riegel.**
      The hero image shows the ALC2 and TRUMPF hardware. The repo is public.
- [ ] **The repo is public** — every file and every commit message is visible.
      No thesis drafts, no unpublished build data.
- [ ] **Never `git add` raw footage.** A `.gitignore` is already in place blocking
      `.MOV`, `.AVI`, `.mkv` and `raw/` folders, but check `git status` before
      committing anyway. Git history keeps large files forever.

---

## Appendix — SSH instead of a token

Cleaner if you push often, and no plaintext secret on disk.

```bash
ssh-keygen -t ed25519 -C "antonyhubert03@gmail.com"
```

Press Enter three times to accept the defaults. Then:

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy that whole line. On GitHub: **Settings → SSH and GPG keys → New SSH key**,
paste, save. Then point the repo at the SSH URL:

```bash
git remote set-url origin git@github.com:antonyhubert/antonyhubert.github.io.git
```

```bash
ssh -T git@github.com
```

Answer `yes` to the fingerprint prompt. A message saying you have successfully
authenticated means it worked. Push as normal after that — no token, no prompt.
