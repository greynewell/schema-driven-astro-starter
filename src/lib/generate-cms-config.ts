import { generateWebSiteConfig } from './schema-types';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// Generate the WebSite configuration
const websiteConfig = JSON.parse(generateWebSiteConfig());

// Create the CMS configuration
const cmsConfig = {
  local_backend: true,
  backend: {
    name: 'git-gateway',
    local_backend: true,
    auth: false
  },
  media_folder: 'public/images',
  media_library: {
    name: 'local',
    config: {
      endpoint: 'http://localhost:8080'
    }
  },
  collections: [
    {
      name: 'website',
      label: 'Website',
      create: false,
      delete: false,
      files: [
        {
          file: 'src/data/website/website.json',
          name: 'website',
          label: 'Website Configuration',
          fields: websiteConfig
        }
      ]
    }
  ]
};

// Write the configuration to config.yml
const configPath = path.join(process.cwd(), 'public', 'config.yml');
fs.writeFileSync(configPath, yaml.dump(cmsConfig)); 