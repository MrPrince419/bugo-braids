# Bugo Braids - Development Guide

This document provides guidance for developers who want to work with or modify this website.

## Project Structure

```
/
├── index.html         # Main HTML file
├── style.css          # Main CSS styles
├── app.js             # JavaScript functionality
├── hair 1.jpg         # Background image
├── README.md          # Project information
├── DEPLOYMENT.md      # Deployment instructions
├── .gitignore         # Git ignore file
├── netlify.toml       # Netlify configuration
└── .github/           # GitHub Actions workflow
```

## Development Setup

This is a simple static website that doesn't require any build tools. You can start developing by:

1. Clone the repository to your local machine
2. Open the project folder in your favorite code editor (like VS Code)
3. Use a local server to preview changes (you can use VS Code's Live Server extension)

## Styling Approach

The website uses custom CSS with CSS variables for consistent theming:

- Color variables are defined in `:root` in the style.css file
- Layout uses a combination of CSS Grid and Flexbox
- Mobile-first responsive design with media queries for larger screens

## JavaScript Functionality

The JavaScript code in `app.js` handles:
- Mobile navigation menu toggle
- FAQ accordion functionality
- Smooth scrolling for navigation links

## Making Changes

When making changes to the website:

1. Keep the existing design language consistent
2. Test on multiple device sizes (mobile, tablet, desktop)
3. Ensure all links work correctly
4. If adding new images, optimize them for web use

## Deployment

See `DEPLOYMENT.md` for detailed instructions on how to deploy the website to GitHub and Netlify.