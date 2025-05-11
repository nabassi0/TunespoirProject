# Component Structure Guide

## Overview

This document outlines the recommended component structure for pages in the Tunespoir Project. Our goal is to maintain a clean, modular, and consistent codebase that is easy to navigate and maintain.

## Structure

Each page in the application should follow this structure:

```
src/
├── components/
│   ├── page-name/                 # Component folder named after the page
│   │   ├── ComponentA/            # Each component in its own folder
│   │   │   ├── ComponentA.jsx     # Component implementation
│   │   │   ├── ComponentA.scss    # Component-specific styles
│   │   │   └── index.js           # Optional: Export the component
│   │   ├── ComponentB/
│   │   │   ├── ComponentB.jsx
│   │   │   ├── ComponentB.scss
│   │   │   └── index.js
│   │   └── index.js               # Barrel file that exports all components
│   │
│   └── common/                    # Shared components used across multiple pages
│       └── ...
│
├── pages/
│   ├── PageName.jsx               # Page component that imports and composes components
│   └── ...
│
└── styles/
    ├── pages/                     # Page-specific styles
    │   ├── page-name.scss         # Global styles for the page
    │   └── ...
    └── ...
```

## Example

Look at the `Actualites` page for a reference implementation:

- `src/pages/Actualites.jsx`: Main page component that imports and composes smaller components
- `src/components/actualites/`: Contains all components specifically used in the Actualites page
- `src/components/actualites/index.js`: Exports all components for easy import in the page

## Guidelines

### Component Organization

1. **Component Naming**: Use PascalCase for component names and folders
2. **Component Modularity**: Each component should have a single responsibility
3. **Component File Structure**:
   - Component file (ComponentName.jsx)
   - Styles file (ComponentName.scss)
   - Index file (index.js) for barrel exports if needed

### Page Organization

1. **Page Logic**: Pages should mainly focus on:
   - State management
   - Data fetching
   - Component composition
   - Minimal UI logic

2. **Import Organization**: Group imports:
   ```jsx
   // React and third-party libraries
   import { useState, useEffect } from 'react';
   
   // Components
   import { ComponentA, ComponentB } from '../components/page-name';
   
   // Styles
   import '../styles/pages/page-name.scss';
   ```

### Styles Organization

1. **Component-Specific Styles**: Each component should have its own styles
2. **Global Page Styles**: Page-level styles in `src/styles/pages/`
3. **Shared Styles**: Common styles, variables, and mixins in `src/styles/common/`

## Benefits

- **Readability**: Easy to understand where code lives
- **Maintainability**: Small, focused components are easier to update
- **Reusability**: Components can be shared across pages
- **Scalability**: New features can be added without complex refactoring
- **Collaboration**: Team members can work on different components simultaneously 