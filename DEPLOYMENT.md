# Portfolio Deployment Guide

Complete guide to deploying your portfolio to GitHub Pages with automatic updates.

## 🚀 Quick Start (5 minutes)

### 1. Set Up GitHub Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Select scope: `public_repo`
4. Copy the token and save it safely

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio setup with GitHub auto-sync"
git branch -M main
git remote add origin https://github.com/rose1996iv/portfolio.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository Settings
2. Navigate to **Pages** section
3. Select **GitHub Actions** as source
4. Your portfolio will auto-deploy!

### 4. Add GitHub Token (for higher API rates)

1. Go to repository Settings → Secrets and variables → Actions
2. Create new secret: `GITHUB_TOKEN` = your token from step 1
3. Workflows will now use the token for faster updates

## 📋 Complete Setup Steps

### Prerequisites

- Node.js 18+ installed
- GitHub account
- Git installed

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Environment Configuration

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your GitHub token:
   ```bash
   GITHUB_TOKEN=ghp_xxxxxxxxxxxxx
   ```

3. (Optional) Add Google Analytics:
   ```bash
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
   ```

### Build & Test

```bash
# Create production build
npm run build

# Test production build locally
npm start

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## 🔄 GitHub Pages Deployment

### Method 1: GitHub Actions (Recommended)

The repository includes automatic workflows:

#### Deploy on Push (`deploy.yml`)
- Triggered when you push to `main`
- Builds and deploys to GitHub Pages
- Includes linting and type checking

#### Scheduled Updates (`update.yml`)
- Runs every 12 hours
- Fetches latest GitHub data
- Auto-commits changes if data updated

**Setup:**
1. Push code to `main` branch
2. GitHub Actions automatically builds and deploys
3. Portfolio live at: `https://rose1996iv.github.io/portfolio/`

### Method 2: Vercel (Alternative)

1. Sign up at https://vercel.com
2. Connect your GitHub repository
3. Add environment variables in Vercel dashboard:
   - `GITHUB_TOKEN` = your token
4. Deploy with one click
5. Auto-deploys on push to `main`

### Method 3: Netlify

1. Sign up at https://netlify.com
2. Connect GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables
5. Deploy!

## 📊 Auto-Update System

### How It Works

1. **Scheduled Refresh** (`update.yml`)
   - Runs every 12 hours
   - Fetches latest repos from GitHub
   - Detects changes and auto-commits

2. **On-Demand Refresh**
   - Use GitHub Actions "Run workflow" button
   - Updates immediately

3. **On Push**
   - Any code push triggers rebuild
   - Portfolio reflects latest changes

### Manual Trigger

To manually trigger a portfolio update:

```bash
# Using GitHub CLI
gh workflow run update.yml
```

Or use GitHub web interface:
1. Go to Actions tab
2. Select "Update Portfolio on GitHub Changes"
3. Click "Run workflow"

## 🔐 Security

### Protecting Secrets

- ✅ `.env.local` is git-ignored
- ✅ Tokens stored in GitHub Secrets
- ✅ No secrets in code or git history
- ✅ API calls cached server-side

### GitHub Token Permissions

Your token needs only:
- `public_repo` scope
- Read access to public repositories
- No write permissions to other repos

### Rotating Tokens

If token is compromised:

```bash
# 1. Delete old token at github.com/settings/tokens
# 2. Generate new token
# 3. Update in GitHub Secrets
# 4. Update local .env.local
```

## 🛠️ Troubleshooting

### Deploy fails with "page build failure"

**Solution:**
1. Check GitHub Actions logs
2. Ensure `.env` variables are set
3. Verify GITHUB_TOKEN is correct
4. Check for TypeScript errors: `npm run type-check`

### GitHub data not updating

**Solution:**
1. Verify GITHUB_TOKEN in Secrets
2. Check `update.yml` workflow runs
3. Verify API rate limits not exceeded
4. Manual trigger: use Actions tab

### API Rate Limit Exceeded

**Solution:**
1. Add GITHUB_TOKEN (increases from 60 to 5000 requests/hour)
2. Add to `.env.local` locally
3. Add to GitHub Secrets for CI/CD

### Portfolio not live

**Check:**
1. Repository is public
2. GitHub Pages enabled (Settings → Pages)
3. Using "GitHub Actions" as source
4. Workflow completed successfully

## 📈 Monitoring

### Check Deployment Status

1. Go to repository Actions tab
2. View workflow history
3. Check individual run logs
4. See build output and errors

### View Live Site

- Main site: `https://rose1996iv.github.io/portfolio/`
- Check GitHub Pages settings for custom domain

## 🎯 Optimization Tips

### Improve Build Speed

```bash
# Use npm ci instead of npm install in CI
npm ci

# Cache dependencies
uses: actions/setup-node@v4
with:
  cache: 'npm'
```

### Reduce Bundle Size

```bash
# Check bundle size
npm build

# Analyze JavaScript
npm install --save-dev @next/bundle-analyzer
```

### Image Optimization

- Use WebP format for images
- Lazy load images below fold
- Optimize image sizes
- Use Next.js Image component

## 🔄 Update Portfolio Content

### Add New Project

1. Edit `lib/profile.ts`:
   ```typescript
   projects: [
     {
       name: "My New Project",
       repo: "https://github.com/rose1996iv/my-project",
       description: "Project description",
       language: "TypeScript",
       stars: 0,
       updated: new Date().toISOString(),
     }
   ]
   ```

2. Or just push to GitHub and let auto-sync fetch it!

### Update Skills

1. Edit `lib/profile.ts` and update `skills` array
2. Or add GitHub topics to your repos
3. Auto-sync will extract skills from repos

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  emeraldx: '#22c55e',
  cyanx: '#06b6d4',
}
```

### Custom Domain

1. Add `CNAME` file in `public/` with your domain
2. Configure DNS records
3. Enable "Enforce HTTPS" in Settings

## 📞 Support & Help

### Common Issues

- **Deploy fails**: Check `.env` setup
- **API errors**: Verify GITHUB_TOKEN
- **Styling broken**: Clear `.next` cache
- **Old version live**: Hard refresh browser (Ctrl+Shift+R)

### Get Help

- Check GitHub Issues
- Review workflow logs
- Check Next.js docs: https://nextjs.org/docs
- Email: josephsaimonn@gmail.com

## 🎓 Learning Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions](https://docs.github.com/en/actions)
- [GitHub Pages](https://pages.github.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Version:** 1.0.0  
**Last Updated:** April 2026
