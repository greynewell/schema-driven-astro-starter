---
title: Schema-Driven Astro Starter - Complete Guide
description: A comprehensive guide to getting started with our schema-driven website template built with Astro
---

# Schema-Driven Astro Starter: Your Complete Guide

Welcome to the Schema-Driven Astro Starter! This powerful template combines the flexibility of Astro with the structure of schema-driven development to create maintainable, type-safe, and scalable websites. Let's dive into what makes this starter special and how to get started.

## What is Schema-Driven Development?

Schema-driven development is a modern approach to web development that uses structured schemas to define your content and components. This approach offers several key benefits:

- **Type Safety**: Catch errors at build time rather than runtime
- **Consistency**: Ensure your content follows predefined structures
- **Developer Experience**: Get autocomplete and validation in your IDE
- **Maintainability**: Make changes with confidence knowing your schema will catch issues

## Why Choose This Starter?

This starter template is designed to help you build websites faster while maintaining high quality standards. Here's what makes it special:

- **Astro-Powered**: Leverage Astro's excellent performance and developer experience
- **Schema-First**: Define your content structure once, use it everywhere
- **TypeScript Support**: Full type safety throughout your project
- **Markdown Content**: Easy content management with markdown files
- **SEO Optimized**: Built-in SEO features and best practices
- **Accessible**: Follows accessibility guidelines by default

## Getting Started

### Prerequisites

Before you begin, make sure you have:
- Node.js 18+ installed
- A code editor (VS Code recommended)
- Basic knowledge of TypeScript and Markdown

### Installation

1. Clone the repository:
```bash
git clone https://github.com/greynewell/schema-driven-astro-starter.git
cd schema-driven-astro-starter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Understanding the Project Structure

The project follows a schema-driven architecture:

```
src/
├── content/          # Your markdown content
├── components/       # Reusable UI components
├── schemas/         # Content schemas
└── layouts/         # Page layouts
```

## Git-Based CMS: Content Management Made Developer-Friendly

One of the standout features of this starter is its git-based CMS approach. This means your content is managed through Git, making it perfect for developer teams and technical content creators.

### Accessing the Admin Interface

1. Navigate to `/admin` in your browser when running the development server
2. You'll see a clean, user-friendly interface for managing your content
3. The admin interface is automatically generated based on your schemas

### Benefits of Git-Based CMS

- **Version Control**: Track all content changes in Git
- **Collaboration**: Multiple team members can work on content simultaneously
- **Review Process**: Use pull requests for content review
- **Rollback Capability**: Easily revert content changes
- **Developer Workflow**: Content management fits naturally into the development process

### Using the Admin Interface

The admin interface provides several powerful features:

1. **Content Creation**
   - Create new pages and posts with a visual editor
   - Form fields are automatically generated from your schemas
   - Real-time validation ensures content follows your defined structure

2. **Content Editing**
   - Edit existing content with a markdown editor
   - Preview changes before publishing
   - Automatic schema validation as you type

3. **Media Management**
   - Upload and manage images and other media
   - Automatic optimization of uploaded assets
   - Organized media library with Git-based versioning

4. **Content Organization**
   - Create and manage content collections
   - Organize content with tags and categories
   - Filter and search through your content

### Developer Workflow with Git-Based CMS

1. **Local Development**
   ```bash
   # Start the development server with admin interface
   npm run dev
   ```

2. **Content Creation**
   - Use the admin interface at `/admin`
   - Create and edit content
   - Changes are saved as markdown files in your `content` directory

3. **Version Control**
   ```bash
   # Review your content changes
   git status
   
   # Commit your content changes
   git add .
   git commit -m "Update content: [description]"
   ```

4. **Collaboration**
   - Push changes to your repository
   - Create pull requests for content review
   - Merge approved changes

### Best Practices for Content Management

1. **Content Organization**
   - Keep content files organized in appropriate directories
   - Use consistent naming conventions
   - Follow the schema structure strictly

2. **Collaboration**
   - Use feature branches for content changes
   - Write clear commit messages
   - Review content changes before merging

3. **Media Management**
   - Optimize images before uploading
   - Use descriptive filenames
   - Keep media files organized in appropriate directories

### Key Concepts

1. **Content Schemas**
   - Define your content structure in `src/schemas/`
   - Use TypeScript interfaces to ensure type safety
   - Automatically validate content against schemas

2. **Markdown Content**
   - Write content in markdown files
   - Frontmatter follows your defined schemas
   - Easy to maintain and update

3. **Components**
   - Build reusable UI components
   - Components are schema-aware
   - Type-safe props and content

## Creating Your First Page

1. Create a new markdown file in `src/content/pages/`:
```markdown
---
title: My New Page
description: A page created with schema-driven development
---

# My New Page

This is my first page using the Schema-Driven Astro Starter!
```

2. The page will automatically be available at `/my-new-page`

## Best Practices

1. **Schema Design**
   - Keep schemas simple and focused
   - Use inheritance for shared properties
   - Document your schemas thoroughly

2. **Content Management**
   - Follow the schema structure
   - Use markdown for content
   - Keep content separate from presentation

3. **Component Development**
   - Make components schema-aware
   - Use TypeScript for type safety
   - Follow accessibility guidelines

## Advanced Features

### Custom Schemas

Create custom schemas in `src/schemas/`:

```typescript
export interface BlogPost {
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
}
```

### Schema Validation

The starter includes automatic schema validation:

- Validates content at build time
- Provides helpful error messages
- Ensures content consistency

### SEO Optimization

Built-in SEO features:

- Automatic meta tags
- Schema.org markup
- Sitemap generation
- Robots.txt configuration

## Structured Data and SEO Optimization

The Schema-Driven Astro Starter takes SEO to the next level with built-in support for structured data using JSON-LD and schema.org standards.

### JSON-LD Implementation

JSON-LD (JavaScript Object Notation for Linked Data) is implemented throughout the site to provide search engines with rich, structured information about your content:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Your Website Name",
  "url": "https://yourwebsite.com",
  "description": "Your website description"
}
```

### Benefits of Structured Data

1. **Enhanced Search Results**
   - Rich snippets in search results
   - Knowledge graph integration
   - Improved click-through rates

2. **Better Content Understanding**
   - Search engines better understand your content
   - More accurate indexing
   - Improved relevance in search results

3. **Automated Schema Generation**
   - Schemas automatically generate appropriate JSON-LD
   - Type-safe structured data
   - Consistent implementation across the site

### Schema.org Integration

The starter is built around the [WebSite](https://schema.org/WebSite) schema as its foundation, providing a robust structure for your site's content and metadata. This core implementation ensures that search engines understand your website's basic structure and purpose.

#### Core Implementation

The WebSite schema is automatically generated for your site, including:
- Site name and description
- URL structure
- Search functionality
- Social media profiles
- Copyright information

This foundation makes it easy to extend your site with additional schema.org types as needed.

#### Extending with Additional Schemas

While the starter provides the WebSite schema implementation out of the box, you can easily extend your content with other schema.org types. Here are some popular additions you might consider:

1. **Content Types**
   - [Article](https://schema.org/Article): For blog posts and news articles
   - [WebPage](https://schema.org/WebPage): For standard pages
   - [BreadcrumbList](https://schema.org/BreadcrumbList): For navigation structure

2. **Organization Types**
   - [Organization](https://schema.org/Organization): For company information
   - [Person](https://schema.org/Person): For team members and authors

3. **E-commerce Types** (if needed)
   - [Product](https://schema.org/Product): For product listings
   - [Offer](https://schema.org/Offer): For pricing information
   - [Review](https://schema.org/Review): For customer feedback

The schema-driven architecture makes it simple to add these additional types by extending your content schemas. Each new schema type you add will automatically generate the appropriate JSON-LD markup.

### Testing Structured Data

The starter includes tools to validate your structured data:

1. **Google Rich Results Test**
   - Validate your JSON-LD implementation
   - Preview how your content appears in search results
   - Identify and fix structured data issues

2. **Schema.org Validator**
   - Ensure compliance with schema.org standards
   - Verify property usage
   - Check for missing required fields

### Best Practices

1. **Schema Selection**
   - Choose the most specific schema type for your content
   - Use nested schemas when appropriate
   - Follow schema.org guidelines

2. **Implementation**
   - Keep structured data up to date
   - Validate changes before deployment
   - Monitor search console for issues

3. **Maintenance**
   - Regular validation of structured data
   - Update schemas as content changes
   - Monitor search performance

## Deployment

Deploy your schema-driven website to any static hosting service:

1. Build your site:
```bash
npm run build
```

2. Deploy the `dist` directory to your hosting service

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Support

Need help? Here are some resources:

- [README.md](https://github.com/greynewell/schema-driven-astro-starter/blob/main/README.md) - Project documentation and setup guide
- [GitHub Issues](https://github.com/greynewell/schema-driven-astro-starter/issues) - Report bugs or request features
- [Developer's Website](https://greynewell.com) - Learn more about the developer

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Ready to start building your schema-driven website? [Clone this repository](https://github.com/greynewell/schema-driven-astro-starter) and follow this guide to create something amazing! 