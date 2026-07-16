# 🎬 SR Studio - Premium Dark Cinematic Astro Theme

Welcome to **SR Studio**, a state-of-the-art, high-end dark cinematic theme built on Astro. Designed from the ground up for film studios, curated directories, and movie enthusiasts, this theme combines rich glassmorphic details, glowing gradients, responsive layouts, and smooth animations.

---

## ✨ Features

- **Instant Search Dropdown**: Interactive client-side live-filtering movie search engine built directly into [Header.astro](file:///home/rakib/Documents/antigravity/src/components/Header.astro).
- **Glassmorphic Storytelling**: Premium narrative and philosophy layouts styled inside the [About Us](file:///home/rakib/Documents/antigravity/src/pages/about.astro) page.
- **Pure-CSS Floating-Label Form**: Extremely responsive contact gateway inside [Contact Us](file:///home/rakib/Documents/antigravity/src/pages/contact.astro), featuring custom vector SVGs and an interactive frontend green success toast.
- **Dynamic Tabbed Legal Center**: Sidebar-driven document navigator inside [Privacy Policy](file:///home/rakib/Documents/antigravity/src/pages/policy.astro) that transitions between Privacy, Terms, and Cookies using CSS fade keyframes.
- **Interactive Multi-Column Footer**: Responsive footer in [Footer.astro](file:///home/rakib/Documents/antigravity/src/components/Footer.astro) hosting navigation columns, dynamic genre directories, and glowing social handles for Facebook, X (formerly Twitter), and YouTube.

---

## 📁 Key Project Structure

```text
/
├── public/                  # Static assets (images, fonts, site icons)
├── src/
│   ├── components/
│   │   ├── Header.astro     # Global navigation header with Live Search
│   │   └── Footer.astro     # Fully response company directory & social links
│   ├── data/
│   │   └── movies.json      # Central database JSON of movie objects
│   ├── layouts/
│   │   └── Layout.astro     # Core layout containing shared HTML headers, SEO, and fonts
│   ├── pages/
│   │   ├── index.astro      # Homepage movie directory
│   │   ├── about.astro      # Glassmorphic curation and stats page
│   │   ├── contact.astro    # Contact portal with floating-input controls
│   │   ├── policy.astro     # Tabbed legal agreements center
│   │   ├── category/        # Dynamic category listing directory
│   │   └── movie/           # Dynamic detail layout generated for each movie object
│   └── utils/
│       └── slugify.js       # Utility to build valid slugs from text titles
├── package.json             # NPM dependencies and scripts config
└── astro.config.mjs         # Astro compiler settings
```

---

## 🚀 Commands & Getting Started

Run all terminal commands from the root directory:

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server (live hot-reloading at http://localhost:4321)
npm run dev

# 3. Build the production-ready optimized bundle in ./dist/
npm run build

# 4. Preview the static production build locally before deployment
npm run preview
```

---

## 🛠️ Theme Customization Guide

### 1. Customizing the Brand Name
To rebrand the site, change the logo and text titles inside the following key files:
- **Header Navigation**: Edit [Header.astro](file:///home/rakib/Documents/antigravity/src/components/Header.astro) logo layout (lines 12-14).
- **Footer Section**: Edit [Footer.astro](file:///home/rakib/Documents/antigravity/src/components/Footer.astro) logo brand block (lines 11-14) and copyright declaration.
- **Global SEO Title**: Edit the template title properties in [Layout.astro](file:///home/rakib/Documents/antigravity/src/layouts/Layout.astro) or specific page files.

### 2. Modifying the Movie Directory (Database)
The entire site is data-driven. To add, edit, or remove movies, simply open [movies.json](file:///home/rakib/Documents/antigravity/src/data/movies.json) and follow this object structure:

```json
{
  "title": "Spirited Away",
  "year": 2001,
  "rating": 8.6,
  "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
  "category": "Animation",
  "director": "Hayao Miyazaki",
  "cast": ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
  "duration": "2h 5m",
  "imageUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
  "bgUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1920&auto=format&fit=crop",
  "trailerUrl": "https://www.youtube.com/embed/ByXuk9QqQkk"
}
```
*The category paths and dynamic details pages are instantly created from these entries upon building.*

### 3. Modifying Style Tokens & Color Accents
The premium aesthetic is driven by a deep dark color palette and bright accents. Standard colors are defined globally or at the top of components:
- **Accent Color (`--accent-color`)**: `#FFA500` (Neon Red).
- **Backgrounds**: Cinematic Deep Black (`#000000`) and Obsidian (`#111111`) are used to create layers.
- To change the accent glow, simply update the CSS variable or change the color hex value inside your layout and component style tags.

### 4. Editing Policy Documents
The legal files are cleanly integrated as static sections inside [policy.astro](file:///home/rakib/Documents/antigravity/src/pages/policy.astro). To change your terms, open the file and adjust the HTML blocks within `<div class="policy-tab-content">`.

---

## 🎨 Design Rules & Guidelines

- **Typography**: Uses modern standard sans-serif weights powered by **Inter** and **Outfit** for clean legibility.
- **Glassmorphism**: When creating cards, use background alpha masks with fine border strokes:
  ```css
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  ```
- **Transitions**: Apply smooth, consistent cubic-bezier offsets for hover cards and buttons to make the site feel alive:
  ```css
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  ```
# sr_stodio
# SR_Stodio
