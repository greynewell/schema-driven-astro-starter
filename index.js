#!/usr/bin/env node

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create project directory
const projectName = process.argv[2];
if (!projectName) {
  console.error('Please provide a project name');
  console.error('Example: npx create-schema-driven-astro my-project');
  process.exit(1);
}

// Create project directory
const projectDir = join(process.cwd(), projectName);
if (fs.existsSync(projectDir)) {
  console.error(`Directory ${projectName} already exists`);
  process.exit(1);
}

// Copy template files
fs.mkdirSync(projectDir);
[
  'src',
  'public',
  'astro.config.mjs',
  'package.json',
  'tsconfig.json',
  'tsconfig.node.json',
  '.eslintrc.cjs'
].forEach(file => {
  fs.cpSync(join(__dirname, file), join(projectDir, file), { recursive: true });
});

// Ensure content directory exists
const contentDir = join(projectDir, 'src', 'content');
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// Initialize git repository
execSync('git init', { cwd: projectDir });

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { cwd: projectDir, stdio: 'inherit' });

// Generate content types
console.log('Generating content types...');
execSync('npx astro sync', { cwd: projectDir, stdio: 'inherit' });

console.log(`
🎉 Success! Created ${projectName} at ${projectDir}

Inside that directory, you can run several commands:

  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm run preview
    Locally preview the production build.

We suggest that you begin by typing:

  cd ${projectName}
  npm run dev

Happy coding! 🚀
`); 