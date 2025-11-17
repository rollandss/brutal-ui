# 🚀 Deployment Guide

## GitHub Pages Deployment

### Prerequisites

- GitHub account
- Git installed locally

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `brutal-ui` (or any name you prefer)
3. Don't initialize with README (we already have one)

### Step 2: Push Your Code

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "feat: brutal ui component library with 39 components"

# Set main branch
git branch -M main

# Add your repository
git remote add origin https://github.com/rollandss/brutal-ui.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save changes

### Step 4: Wait for Deployment

- GitHub Actions will automatically build and deploy
- Check the **Actions** tab to see progress
- Usually takes 2-3 minutes
- Your site will be live at: `https://rollandss.github.io/brutal-ui/`

### Step 5: Done!

All URLs are already configured for `rollandss/brutal-ui`.
If you change the repository name, update `basePath` in `next.config.mjs`.

### Troubleshooting

**Site shows 404:**

- Make sure GitHub Pages source is set to "GitHub Actions"
- Check Actions tab for build errors
- Ensure `basePath` in `next.config.mjs` matches your repo name

**Build fails:**

- Check Actions tab for error logs
- Make sure all dependencies are in package.json
- Try running `npm run build` locally first

**CSS not loading:**

- The `.nojekyll` file in `/public` prevents this
- Make sure it's committed to git

### Manual Build (Optional)

To test the production build locally:

```bash
# Build the library
npm run build:lib

# Build Next.js site
npm run build

# Preview (the 'out' folder contains static files)
npx serve out
```

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in `/public` with your domain:

   ```
   yourdomain.com
   ```

2. In your domain DNS settings, add a CNAME record:

   - Name: `www` or `@`
   - Value: `YOUR_USERNAME.github.io`

3. In GitHub repo settings → Pages → Custom domain, enter your domain

---

## Alternative: Vercel Deployment

Vercel is even simpler:

```bash
npm install -g vercel
vercel
```

Follow the prompts - that's it! ✨

---

## Alternative: Netlify Deployment

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Deploy!

---

Your Brutal UI documentation site is now live! 🎉
