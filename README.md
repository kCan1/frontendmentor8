# Article Preview Card

A responsive Article Preview Card built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This project is based on a Frontend Mentor challenge and demonstrates modern UI techniques, accessibility, and best practices in React development.

## Features

- Responsive design for mobile and desktop
- Interactive share options with smooth transitions
- Accessible markup and keyboard navigation
- Clean, maintainable code structure
- ESLint integration for code quality

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the development server:**

   ```sh
   npm run dev
   ```

3. **Build for production:**

   ```sh
   npm run build
   ```

4. **Preview production build:**
   ```sh
   npm run preview
   ```

## Folder Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── style-guide.md
│   ├── components/
│   │   ├── Card.tsx
│   │   └── card/
│   │       └── Footer.tsx
│   ├── constants/
│   │   └── data.ts
│   ├── declarations/
│   │   └── declarations.d.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Accessibility & Style Guide

- Follows [Frontend Mentor Style Guide](src/assets/style-guide.md)
- Uses [Manrope](https://fonts.google.com/specimen/Manrope) font family
- WCAG-compliant color palette and font sizes

## Linting & Code Quality

- ESLint is configured for React and TypeScript.
- See [`eslint.config.js`](eslint.config.js) for details.
- Recommended to expand ESLint rules for production (see below).

## Expanding ESLint Configuration

For production, enable type-aware lint rules and consider adding [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom).

## License

This project is for educational purposes and based on a Frontend Mentor challenge.

---

**Demo:**  
Feel free to fork, modify, and use this template for your
