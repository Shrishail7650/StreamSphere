# StreamSphere OTT UI

StreamSphere is a React and Vite based OTT streaming interface built as a modern landing page experience. It includes a cinematic hero section, trending titles, movie cards, language filters, continue-watching cards, subscription plans, and a profile avatar in the navbar.

## Features

- Responsive OTT-style homepage built with React 19 and Vite
- Tailwind CSS utility styling for fast UI iteration
- Local asset-driven content cards and hero banners
- Modular component structure for easy updates
- Clean production build and lint setup

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint

## Project Structure

```text
OTT/
|-- public/
|   |-- favicon.svg
|   `-- icons.svg
|-- src/
|   |-- assets/
|   |-- components/
|   |-- data/
|   |   `-- content.js
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- package.json
`-- README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the optimized production build
- `npm run preview` previews the built app locally
- `npm run lint` runs ESLint checks

## Content and Asset Management

All homepage content is managed from:

- `src/data/content.js`

This file controls:

- featured hero content
- trending titles
- popular movie cards
- continue watching items
- language chips
- subscription plans

Image assets are currently stored in:

- `src/assets/`

To replace posters or banners:

1. Add your image files to `src/assets/`
2. Update the imports inside `src/data/content.js`
3. Replace the content objects with your own movie names, genres, ratings, and images

## Main Components

- `Navbar.jsx` handles branding, search, and profile avatar
- `Hero.jsx` renders the featured banner section
- `Movie_row.jsx` shows the horizontal trending row
- `Movies.jsx` renders the popular movie grid
- `Languages.jsx` displays browse-by-language pills
- `ContinueWatching.jsx` shows watch progress cards
- `Subscription.jsx` displays pricing plans
- `Footer.jsx` renders the footer section

## Customization Ideas

- connect content to an API or CMS
- add routing for movie detail pages
- add authentication and user profiles
- replace the inline avatar with a real profile image
- add hover trailers and watchlist actions

## Status

The project is currently lint-clean and builds successfully for production.
```
