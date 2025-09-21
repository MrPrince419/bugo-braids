# Bugo Braids - GitHub and Netlify Setup Guide

Follow these steps to deploy your website to GitHub and Netlify:

## 1. Initialize Git Repository

Open your terminal (PowerShell in Windows) and navigate to your project directory:

```powershell
cd c:\Users\uwagb\Documents\Prince\Personal\codes\bugobraiders
```

Initialize a new Git repository:

```powershell
git init
```

## 2. Add and Commit Your Files

Add all your files to Git:

```powershell
git add .
```

Commit your changes:

```powershell
git commit -m "Initial commit for Bugo Braids website"
```

## 3. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "bugo-braids-website")
4. Leave it as a public repository if you're okay with others seeing your code
5. Do NOT initialize with README, .gitignore, or license (since we already created these)
6. Click "Create repository"

## 4. Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands to push an existing repository.
Run these commands:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/bugo-braids-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## 5. Deploy to Netlify

### Option 1: Deploy through Netlify UI

1. Go to [Netlify](https://app.netlify.com/) and sign up or log in
2. Click "New site from Git"
3. Select GitHub as your Git provider
4. Authorize Netlify to access your repositories
5. Select your "bugo-braids-website" repository
6. In the deploy settings:
   - Build command: (Leave empty since this is a static site)
   - Publish directory: `/` (root directory)
7. Click "Deploy site"

### Option 2: Connect to Netlify through GitHub Actions

To use the GitHub workflow we created:

1. Go to your Netlify account and get your:
   - Site ID (found in Site settings > General > Site details)
   - Personal access token (create one in User settings > Applications)
2. Go to your GitHub repository settings > Secrets
3. Add two secrets:
   - NETLIFY_SITE_ID: your-site-id
   - NETLIFY_AUTH_TOKEN: your-access-token

## 6. Custom Domain (Optional)

1. In Netlify, go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to set up your domain

## That's it!

Your Bugo Braids website is now live at [https://bugo-braids.netlify.app/](https://bugo-braids.netlify.app/) with automatic deployments whenever you push changes to your GitHub repository.