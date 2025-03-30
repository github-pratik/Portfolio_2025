# Personal Portfolio

A modern, responsive portfolio website built with Svelte and TypeScript. This portfolio features a clean, Vercel-like design with dark/light mode support and showcases your skills, experience, projects, education, and certifications.

## Features

- **Modern UI Design**: Clean, responsive interface with Vercel-inspired styling
- **Multiple Sections**: Showcase your experience, education, projects, skills, and certifications
- **Markdown Support**: Content sections support Markdown for rich formatting
- **Responsive Layout**: Optimized for all device sizes
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Search Functionality**: Search across all portfolio content
- **TypeScript Support**: Fully typed codebase for better development experience
- **Fast Performance**: Built with Svelte for optimal speed and interactivity

## Technologies Used

- **Svelte/SvelteKit**: Frontend framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and development server
- **SCSS**: Styling with Sass preprocessor
- **UnoCSS**: Atomic CSS engine
- **Marked**: Markdown parsing
- **DOMPurify**: Sanitize HTML content
- **PrismJS**: Code syntax highlighting
- **Day.js**: Date formatting

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Installation

1. Clone this repository:

```bash
git clone <your-repo-url> portfolio
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5174` (or the port shown in your terminal)

## Customization

### Personal Information

Update the following files in `src/lib/data/` to customize your portfolio:

- `app.ts`: General application settings
- `home.ts`: Home page content and contact information
- `navbar.ts`: Navigation bar links
- `experience.ts`: Work experience entries
- `education.ts`: Educational background
- `projects.ts`: Portfolio projects with descriptions and links
- `skills.ts`: Technical skills and proficiency levels
- `certifications.ts`: Professional certifications
- `resume.ts`: Resume/CV information

### Styling

- Update `src/lib/index.scss` for custom styling
- Replace `static/favicon.ico` to customize the browser tab icon
- Modify theme colors in the SCSS variables

### Assets

- Add your logos and images to the `static/logos/` directory
- Reference them in your data files through the `assets.ts` file

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Deployment

This portfolio can be deployed to any static hosting service like GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

For GitHub Pages deployment, follow these steps:

1. Update the `base` variable in `svelte.config.js` to match your repository name
2. Push your changes to GitHub
3. Enable GitHub Pages in your repository settings

## License

This project is based on the [slick-portfolio-svelte](https://github.com/RiadhAdrani/slick-portfolio-svelte) template.

## Known Issues

- Svelte no longer supports Node.js v14, use a newer version instead.
