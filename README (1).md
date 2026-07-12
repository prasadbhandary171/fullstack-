# Week 1 Portfolio — Maya Chen

A responsive, accessible personal portfolio site built with plain HTML, CSS,
and vanilla JavaScript — no build step or framework required.

**Concept:** a technical draftsman's field notebook — a dark "blueprint"
canvas, parchment-style project sheets, and drafting-inspired typography
(Space Grotesk, Source Serif 4, IBM Plex Mono).

## Structure

```
week1-portfolio/
│── index.html
│── css/
│   ├── variables.css     # design tokens: color, type, spacing (load first)
│   ├── style.css         # base styles, layout, and components
│   └── responsive.css    # media queries (load last)
│── js/
│   └── navigation.js     # mobile nav toggle + contact form validation
│── images/
│   ├── profile.jpg       # placeholder headshot — replace with your own
│   ├── project1.jpg      # placeholder project screenshot — replace with your own
│   └── icons/            # social link icons (github, linkedin, twitter, mail)
│── README.md
└── .gitignore
```

The stylesheets are linked in `index.html` in this order so the cascade
works correctly:

```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/responsive.css">
```

## Getting started

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve the folder locally for a closer-to-production setup, e.g.:
  ```bash
  npx serve .
  # or
  python3 -m http.server 8000
  ```

## Customizing

- **Content:** edit the placeholder text, name, bio, and links directly in
  `index.html`.
- **Images:** swap `images/profile.jpg` and `images/project1.jpg` for your
  own photo and screenshots (same filenames, or update the `src` attributes
  in `index.html`). Add more project images as `project2.jpg`, `project3.jpg`,
  etc.
- **Colors & fonts:** all design tokens live in `css/variables.css` — change
  a value there and it updates everywhere.
- **Contact form:** the form validates client-side but doesn't send
  anywhere yet. Wire it up to a form backend (e.g. Formspree, a serverless
  function, or your own API) inside the `submit` handler in
  `js/navigation.js`.

## Features

- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`)
- Responsive layout with CSS Grid and Flexbox, mobile-first media queries
- Accessible mobile navigation (hamburger toggle, `aria-expanded`, focus
  styles, closes on Escape or link selection)
- Contact form with inline, accessible validation (`aria-live`, `role="alert"`)
- Respects `prefers-reduced-motion`

## Browser support

Tested against current versions of Chrome, Firefox, Safari, and Edge. Uses
modern CSS (`clamp()`, `aspect-ratio`, custom properties) which is supported
in all evergreen browsers.
