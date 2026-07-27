# Dale College Boys' High School Website

A modern, responsive website redesign for Dale College Boys' High School built using React and Vite. The project demonstrates how a traditional school website can be modernised while preserving the school's history, traditions and identity.
Live Demo: https://taphexta.github.io/school-site-dale/ 
---

## Overview

Many school websites become outdated over time. Information is difficult to update, pages are inconsistent, and content such as news articles often has to be manually added into the page markup.

This project addresses those problems by building a component-driven website that separates data from presentation. Most of the site's content is driven by JSON files, making it easier to maintain and expand without modifying the application's code.

The website focuses on usability, responsive design and maintainability while reflecting the heritage and values of Dale College.

---

## Problem Statement

The traditional approach to school websites often results in:

- Static pages that require editing HTML or JSX whenever content changes.
- Inconsistent layouts across different pages.
- Poor scalability as new pages and articles are added.
- Difficult maintenance due to repeated code.
- Limited responsiveness across different screen sizes.
- Navigation that becomes harder to manage as the website grows.

These issues make it harder for schools to keep information current and increase development time whenever new content is published.

---

## Solution

This project introduces a reusable React architecture where components are responsible for displaying information while JSON files provide the data.

Instead of creating a separate page for every news article, sport or culture activity, the application dynamically renders content from structured data files.

The result is a website that is:

- Easier to maintain
- Easier to scale
- Responsive across devices
- Consistent throughout every page
- Simple to update by non-developers with minimal technical knowledge

---

## Project Scope

The project includes:

- Home page
- About page
- Academics page
- Sport page
- Culture page
- Boarding page
- Admissions page
- News page
- Individual news article pages
- Responsive navigation
- Responsive footer
- Dynamic routing
- JSON-driven content
- Reusable UI components

The project demonstrates a complete front-end implementation rather than a backend content management system.

---

## Features

- Built with React and Vite
- React Router based navigation
- Component-based architecture
- Responsive layouts
- Dynamic news articles
- Reusable checkerboard section component
- JSON-driven navigation
- JSON-driven news articles
- Responsive mobile menu
- Image galleries for articles
- Previous and next article navigation
- Related article recommendations
- Consistent styling using reusable CSS

---

## Technologies Used

- React
- React Router
- Vite
- JavaScript
- HTML5
- CSS3
- JSON

---

## Project Structure

```
src/
│
├── components/
├── data/
├── layouts/
├── pages/
├── router.jsx
└── main.jsx

public/
└── assets/
    └── images/
```

The project separates reusable components from page-specific layouts while keeping all editable content inside JSON files.

---

## Design Approach

The design was centred around preserving Dale College's identity while introducing modern web development practices.

Key design decisions included:

- Consistent typography
- Reusable page layouts
- Large hero sections
- Responsive checkerboard layouts
- Newspaper-inspired news page
- School colour palette
- Smooth transitions and hover animations
- Mobile-first responsive behaviour

---

## Challenges Faced

### Deploying to GitHub Pages

One of the biggest challenges was deploying a React application using Vite to GitHub Pages.

Initially the application returned multiple 404 errors because GitHub Pages attempted to load the source files instead of the production build.

The deployment process required:

- configuring the Vite base path
- generating a production build
- publishing the build files instead of the source files

---

### React Router and GitHub Pages

Routing worked perfectly during development but failed after deployment.

GitHub Pages serves static files and does not understand client-side routes, resulting in:

```
No routes matched location "/school-site-dale/"
```

After investigating the routing configuration and deployment process, the project was migrated to a hash-based router for GitHub Pages compatibility.

---

### Creating Reusable Components

Initially several sections were written specifically for individual pages.

During development these were redesigned into reusable components that could display different content based on JSON data.

Examples include:

- Checkerboard sections
- Navigation
- News cards
- Article layouts

This reduced repeated code and made the application easier to extend.

---

### Data Organisation

Early versions contained hardcoded text and images throughout the JSX.

The project was refactored so that:

- navigation is driven by JSON
- news articles are driven by JSON
- page content is separated from presentation

This significantly improved maintainability.

---

### Responsive Navigation

The navigation bar required several iterations to ensure consistent behaviour across screen sizes.

Challenges included:

- aligning navigation links
- active page styling
- transparent and solid header states
- mobile menu behaviour
- button alignment
- page-specific header colours

---

### Asset Management

External image URLs and font imports were gradually replaced with locally hosted assets to improve reliability and reduce third-party dependencies.

Fonts were imported directly into the project while images were organised inside the public assets directory.

---

## Lessons Learned

This project reinforced several important software engineering principles:

- Build reusable components instead of repeating code.
- Separate application data from presentation.
- Design for scalability from the beginning.
- Test deployment environments early.
- Keep routing simple and predictable.
- Organise assets consistently.
- Prioritise maintainability over quick solutions.

---

## Future Improvements

Possible future enhancements include:

- Backend CMS integration
- Search functionality
- Event calendar
- Online admissions portal
- Authentication for administrators
- Image optimisation
- Lazy loading
- Dark mode
- Accessibility improvements
- SEO optimisation
- News filtering and categorisation

---

## Author

Oyama Mbatani

BCom Information Systems & Economics

Front-End Developer | React Developer