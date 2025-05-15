# Schema-Driven Astro Starter Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/greynewell/schema-driven-astro-starter?style=social)](https://github.com/greynewell/schema-driven-astro-starter/stargazers)
[![npm version](https://img.shields.io/npm/v/schema-driven-astro-starter)](https://www.npmjs.com/package/schema-driven-astro-starter)
[![Publish Package](https://github.com/greynewell/schema-driven-astro-starter/actions/workflows/build.yml/badge.svg)](https://github.com/greynewell/schema-driven-astro-starter/actions/workflows/build.yml)

A production-ready starter kit that brings structured data, SEO optimization, and schema-driven development to your Astro projects. Built for developers who want to ship fast, maintainable, and search-engine friendly websites.

## 🎯 Why This Starter Kit?

- **Schema-First Development**: Define your data structures once, use them everywhere. No more prop drilling or type mismatches.
- **Decap CMS Integration**: Git-based content management with a user-friendly admin interface. Edit content directly in your browser, commit changes to your repository.
- **Accessibility-First Design**: First-class accessibility controls for high contrast mode, keyboard navigation, screen reader support and more!
- **SEO Optimized**: Built-in structured data and meta tags that search engines love.
- **Type Safety**: Full TypeScript support with generated types from your schemas.
- **Performance**: Astro's zero JavaScript by default approach means your site loads instantly.
- **Developer Experience**: Hot reloading, type checking, and intuitive development workflow.

## 🚀 Quick Start

```bash
# Create a new project using this template
npm create astro@latest my-project -- --template https://github.com/greynewell/schema-driven-astro-starter

# Navigate to your project
cd my-project

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📚 Documentation & Tutorials

- [Getting Started Guide](https://greynewell.github.io/schema-driven-astro-starter/)
- [Schema Definition](https://schema.org/WebSite)
- [Deployment Guide](https://github.com/withastro/action)

## 🏗️ Project Structure

```text
/
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route components
│   ├── schemas/        # Your data schemas
│   └── utils/          # Helper functions
├── public/             # Static assets
└── astro.config.mjs    # Astro configuration
```

## 🚢 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Enable GitHub Pages in your repository settings
3. Set the build command to `npm run build`
4. Set the output directory to `dist`

```bash
# Build your site
npm run build

# Preview the production build
npm run preview
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Type check your code |
| `npm run format` | Format your code |

## 🤝 Contributing

Found a bug? Have a feature request? We'd love to hear from you! Please open an issue or submit a pull request.

## 📄 License

MIT License - feel free to use this starter kit for any project, commercial or personal.

## 🔗 Links

- [Astro Documentation](https://docs.astro.build)
- [Schema.org](https://schema.org)
- [JAMstack](https://jamstack.org)
