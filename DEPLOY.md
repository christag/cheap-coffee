# Deployment Guide for Cheap Coffee

This guide explains how to deploy cheap-coffee.com to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (free tier works)
2. Git installed locally
3. Node.js installed (optional, for CLI deployment)

## Method 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Workers & Pages" → "Create application" → "Pages"
   - Select "Connect to Git"
   - Authorize Cloudflare to access your GitHub account
   - Select the `cheap-coffee` repository (or your repo name)

3. **Configure Build Settings**:
   - **Project name**: cheap-coffee
   - **Production branch**: main
   - **Build command**: (leave empty - static site)
   - **Build output directory**: /
   - Click "Save and Deploy"

4. **Your site will be available at**:
   - `https://cheap-coffee.pages.dev`
   - Your custom domain: `https://cheap-coffee.com`

## Method 2: Direct Upload via Dashboard

1. **Build the project locally** (no build needed for this static site)

2. **Upload to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Workers & Pages" → "Create application" → "Pages"
   - Select "Upload assets"
   - Drag and drop or select all files:
     - `index.html`
     - `_headers`
     - `_redirects`
   - Click "Deploy site"

## Method 3: Deploy via Wrangler CLI

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Login to Cloudflare**:
   ```bash
   npx wrangler login
   ```

3. **Deploy the site**:
   ```bash
   npm run deploy
   ```
   Or directly:
   ```bash
   npx wrangler pages deploy . --project-name=cheap-coffee
   ```

## Custom Domain Setup

1. **In Cloudflare Pages dashboard**:
   - Go to your project → "Custom domains"
   - Click "Set up a custom domain"
   - Enter your domain: `cheap-coffee.com`
   - Follow DNS configuration instructions

2. **DNS will automatically be configured** if domain is on Cloudflare
   - Otherwise, add the provided CNAME record to your DNS provider

## Environment Variables

This static site doesn't require environment variables, but if needed in future:
- Go to Settings → Environment variables
- Add variables for production/preview environments

## Automatic Deployments

With GitHub integration:
- **Production**: Every push to `main` branch auto-deploys
- **Preview**: Every pull request gets a preview URL
- **Rollback**: Available in deployment history

## Build Configuration Files

- **`_headers`**: Security headers and caching rules
- **`_redirects`**: URL redirect rules
- **`wrangler.toml`**: Cloudflare Pages configuration

## Local Development

Run locally before deploying:
```bash
npm run serve
# Visit http://localhost:8000
```

## Deployment Checklist

- [ ] Test site locally
- [ ] Commit all changes to Git
- [ ] Push to GitHub
- [ ] Verify deployment in Cloudflare dashboard
- [ ] Test the live site
- [ ] Configure custom domain (optional)

## Troubleshooting

1. **Build fails**: Check build logs in Cloudflare dashboard
2. **404 errors**: Ensure `index.html` is at root level
3. **Caching issues**: Purge cache in Cloudflare dashboard
4. **Domain not working**: Verify DNS settings and SSL certificate

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)