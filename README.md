# Tunespoir Project

A modern web application built with React, featuring a component-based architecture and a comprehensive design system.

## Project Structure

This project follows a modular component-based architecture with clear separation of concerns:

```
src/
├── assets/               # Static assets
│   ├── images/           # Images and graphics
│   ├── icons/            # Icon files 
│   └── fonts/            # Custom fonts
│
├── components/           # React components
│   ├── common/           # Shared components used across features
│   ├── layout/           # Layout components (Container, Section, etc.)
│   ├── ui/               # UI components (Button, Card, etc.)
│   ├── forms/            # Form-related components
│   └── sections/         # Page section components
│
├── pages/                # Page components
│   ├── Home.jsx          # Home page
│   ├── NousDecouvrir.jsx # About page
│   └── ...               # Other pages
│
├── styles/               # Stylesheets
│   ├── abstracts/        # Variables, mixins, functions
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   ├── base/             # Base styles, typography, reset
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/       # Component-specific styles
│   │   ├── _buttons.scss
│   │   └── _cards.scss
│   ├── layout/           # Layout styles
│   │   ├── _grid.scss
│   │   ├── _header.scss
│   │   └── _footer.scss
│   ├── pages/            # Page-specific styles
│   ├── utils/            # Utility classes
│   │   └── _utilities.scss
│   └── main.scss         # Main stylesheet that imports all others
│
├── App.jsx               # Main App component
└── main.jsx              # Entry point
```

## CSS Naming Convention

This project follows a modified BEM (Block, Element, Modifier) naming convention:

- **Block**: The main component (e.g., `.card`, `.button`)
- **Element**: A part of the block (e.g., `.card-header`, `.card-body`)
- **Modifier**: A variant of the block or element (e.g., `.card-bordered`, `.button-large`)

Examples:
- `.card` (Block)
- `.card-header` (Element)
- `.card-body` (Element)
- `.card-hoverable` (Modifier)
- `.btn-primary` (Block with Modifier)

## Component Structure

Components follow a consistent pattern:

1. **Functional Components**: All components are functional components with hooks
2. **Props**: Clear prop definitions with default values
3. **PropTypes**: All components use PropTypes for type checking
4. **CSS**: Each component has its own SCSS file
5. **Documentation**: Components include JSDoc comments

## Design System

The design system includes:

- **Colors**: Primary, secondary, and neutral color palettes
- **Typography**: Font families, sizes, weights
- **Spacing**: Consistent spacing scale
- **Shadows**: Shadow levels for depth
- **Borders**: Border radius and styles
- **Breakpoints**: Standard responsive breakpoints

## Utility Classes

Utility classes follow a consistent pattern:

- Margin: `.m-{size}`, `.mt-{size}`, `.mb-{size}`, etc.
- Padding: `.p-{size}`, `.pt-{size}`, `.pb-{size}`, etc.
- Display: `.d-flex`, `.d-block`, `.d-none`, etc.
- Flex: `.flex-row`, `.flex-column`, `.justify-content-center`, etc.
- Text: `.text-center`, `.text-primary`, `.font-bold`, etc.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint