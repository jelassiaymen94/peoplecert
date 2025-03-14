# PeopleCert HTML/CSS Developer Assessment

## Overview

This project replicates a provided Figma design for a landing page using HTML and CSS, adhering to best practices for accessibility, responsiveness, and code organization.

## Setup Instructions

1. Clone this repository.
2. Open `index.html` in a browser to view the desktop version.
3. Assets (e.g., SVGs, logos) are located in the `assets/` folder.

## Decisions

- Consolidated all styles into a single `styles.css` file for simplicity and maintainability.
- Applied BEM methodology for CSS class naming.
- Used semantic HTML (`<header>`, `<nav>`, `<ul>`) for better structure and accessibility.
- Added `aria-label` to the navigation for screen readers.
- Deferred JavaScript implementation until the slider section.
- Implemented smooth hover effects on links and language selector for improved interactivity.
- Adjusted font weight of right menu items to `400` (regular) to match the Figma design.
- Removed `max-width: 1200px` from the navigation container to align with the Figma design, ensuring the menu spans the full width (minus padding) as shown.

## Status

- Desktop version: Completed
- Tablet/Mobile versions: Completed
