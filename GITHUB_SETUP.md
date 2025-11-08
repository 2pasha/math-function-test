# GitHub Deployment Setup

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `math-function-test`)
3. **Don't** initialize with README, .gitignore, or license
4. Click "Create repository"

## Step 2: Configure Your Repository Name

Update `vite.config.js` - uncomment and replace `repo-name`:

```javascript
base: '/math-function-test/',  // Use YOUR repository name
```

## Step 3: Connect and Push

```bash
cd /Users/vatra/Desktop/my_prjcts/math_function_test

# Add your GitHub repository (replace with YOUR username and repo name)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build the production version
- Deploy to `gh-pages` branch
- Your site will be live in ~1 minute!

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Source: Deploy from branch
4. Branch: `gh-pages` / `root`
5. Click **Save**

## Your Site URL

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## Quick Commands

```bash
# Make changes, then:
git add .
git commit -m "Your message"
git push

# Deploy to GitHub Pages:
npm run deploy
```

---

**Note:** After first push, go to Settings > Pages and select `gh-pages` branch!

