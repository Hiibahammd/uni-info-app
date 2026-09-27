# Free & Instant Deployment / Upload Guide

Here are the 3 best, completely free ways to upload your **UniCompass PK** app so other students can visit it online from any phone or computer.

---

## Method 1: Netlify Drop (Easiest — 30 Seconds, No Terminal)

Netlify allows you to publish the site live without writing any commands.

1. Open your browser and go to: **[app.netlify.com/drop](https://app.netlify.com/drop)** (Sign in with a free account if prompted).
2. Open Windows File Explorer and navigate to:
   ```
   C:\Users\Hamd\.gemini\antigravity\scratch
   ```
3. **Drag and drop** the `uni-info-app` folder directly onto the dashed upload box on the Netlify web page.
4. Netlify will deploy it in seconds and give you a free live link like:
   `https://unicompass-pk.netlify.app`
5. You can share this URL with anyone immediately!

---

## Method 2: GitHub Pages (Permanent & Professional)

Your project repository is already initialized with Git on the `main` branch!

1. Go to **[github.com](https://github.com/)** and log in.
2. Click **New Repository** (`+` icon at top right).
3. Name it `uni-info-app` (keep it Public) and click **Create repository**.
4. In your terminal / command prompt, run:
   ```powershell
   cd C:\Users\Hamd\.gemini\antigravity\scratch\uni-info-app
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/uni-info-app.git
   git push -u origin main
   ```
5. On your GitHub repository page:
   - Click **Settings** (top tab) -> **Pages** (left sidebar).
   - Under **Build and deployment > Branch**, select `main` and `/ (root)`.
   - Click **Save**.
6. In about 60 seconds, your site will be live at:
   `https://YOUR_GITHUB_USERNAME.github.io/uni-info-app/`

---

## Method 3: Vercel (Fastest Global CDN)

1. Go to **[vercel.com](https://vercel.com/)** and sign up with GitHub.
2. Click **Add New... > Project**.
3. Import your GitHub repository `uni-info-app`.
4. Click **Deploy**.
5. Vercel automatically assigns a fast HTTPS domain (e.g. `uni-info-app.vercel.app`).
