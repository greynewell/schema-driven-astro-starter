import type { WithContext, WebSite } from 'schema-dts';

// Helper type to get all property names from a type
type PropertyNames<T> = {
  [K in keyof T]: K extends string ? K : never;
}[keyof T];

// Get all property names from WebSite type
type WebSiteProperties = PropertyNames<WebSite>;

// Helper function to map JSON-LD types to Decap CMS widget types
function mapTypeToWidget(type: string): string {
  switch (type) {
    case 'Text':
    case 'URL':
      return 'string';
    case 'Integer':
    case 'Number':
      return 'number';
    case 'Date':
    case 'DateTime':
      return 'datetime';
    case 'Boolean':
      return 'boolean';
    default:
      return 'object';
  }
}

// Generate Decap CMS YAML configuration for WebSite type
export function generateWebSiteConfig(): string {
  const fields = [
    {
      name: '@context',
      widget: 'hidden',
      default: 'https://schema.org'
    },
    {
      name: '@type',
      widget: 'hidden',
      default: 'WebSite'
    },
    {
      name: 'name',
      label: 'Name',
      widget: 'string',
      required: true
    },
    {
      name: 'url',
      label: 'URL',
      widget: 'string',
      required: true,
      pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
    },
    {
      name: 'description',
      label: 'Description',
      widget: 'text'
    },
    {
      name: 'potentialAction',
      label: 'Potential Actions',
      widget: 'list',
      fields: [
        {
          name: '@type',
          label: 'Action Type',
          widget: 'select',
          options: ['SearchAction']
        },
        {
          name: 'target',
          label: 'Target URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'inLanguage',
      label: 'Language',
      widget: 'string'
    },
    {
      name: 'version',
      label: 'Version',
      widget: 'string'
    },
    {
      name: 'author',
      label: 'Author',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'url',
          label: 'URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'publisher',
      label: 'Publisher',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'url',
          label: 'URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'datePublished',
      label: 'Date Published',
      widget: 'datetime'
    },
    {
      name: 'dateModified',
      label: 'Date Modified',
      widget: 'datetime'
    },
    {
      name: 'keywords',
      label: 'Keywords',
      widget: 'list',
      field: {
        name: 'keyword',
        label: 'Keyword',
        widget: 'string'
      }
    },
    {
      name: 'license',
      label: 'License',
      widget: 'string'
    },
    {
      name: 'isAccessibleForFree',
      label: 'Is Accessible For Free',
      widget: 'boolean'
    },
    {
      name: 'accessibilityFeature',
      label: 'Accessibility Features',
      widget: 'list',
      field: {
        name: 'feature',
        label: 'Feature',
        widget: 'string'
      }
    },
    {
      name: 'accessibilityHazard',
      label: 'Accessibility Hazards',
      widget: 'list',
      field: {
        name: 'hazard',
        label: 'Hazard',
        widget: 'string'
      }
    },
    {
      name: 'accessibilityAPI',
      label: 'Accessibility API',
      widget: 'string'
    },
    {
      name: 'accessibilityControl',
      label: 'Accessibility Controls',
      widget: 'list',
      field: {
        name: 'control',
        label: 'Control',
        widget: 'string'
      }
    },
    {
      name: 'accessibilitySummary',
      label: 'Accessibility Summary',
      widget: 'text'
    },
    {
      name: 'aggregateRating',
      label: 'Aggregate Rating',
      widget: 'object',
      fields: [
        {
          name: 'ratingValue',
          label: 'Rating Value',
          widget: 'number'
        },
        {
          name: 'bestRating',
          label: 'Best Rating',
          widget: 'number'
        },
        {
          name: 'worstRating',
          label: 'Worst Rating',
          widget: 'number'
        },
        {
          name: 'ratingCount',
          label: 'Rating Count',
          widget: 'number'
        },
        {
          name: 'reviewCount',
          label: 'Review Count',
          widget: 'number'
        }
      ]
    },
    {
      name: 'sameAs',
      label: 'Social Media Links',
      widget: 'list',
      field: {
        name: 'url',
        label: 'URL',
        widget: 'string',
        pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
      },
      hint: 'Add links to your social media profiles (e.g., Twitter, LinkedIn, GitHub)'
    },
    {
      name: 'audience',
      label: 'Audience',
      widget: 'object',
      fields: [
        {
          name: 'audienceType',
          label: 'Audience Type',
          widget: 'string'
        }
      ]
    },
    {
      name: 'award',
      label: 'Awards',
      widget: 'list',
      field: {
        name: 'award',
        label: 'Award',
        widget: 'string'
      }
    },
    {
      name: 'character',
      label: 'Characters',
      widget: 'list',
      field: {
        name: 'character',
        label: 'Character',
        widget: 'string'
      }
    },
    {
      name: 'comment',
      label: 'Comments',
      widget: 'list',
      field: {
        name: 'comment',
        label: 'Comment',
        widget: 'text'
      }
    },
    {
      name: 'contentLocation',
      label: 'Content Location',
      widget: 'string'
    },
    {
      name: 'contentRating',
      label: 'Content Rating',
      widget: 'string'
    },
    {
      name: 'contributor',
      label: 'Contributors',
      widget: 'list',
      field: {
        name: 'contributor',
        label: 'Contributor',
        widget: 'string'
      }
    },
    {
      name: 'copyrightHolder',
      label: 'Copyright Holder',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'url',
          label: 'URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'copyrightYear',
      label: 'Copyright Year',
      widget: 'number'
    },
    {
      name: 'creator',
      label: 'Creator',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'url',
          label: 'URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'editor',
      label: 'Editor',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'url',
          label: 'URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'funder',
      label: 'Funder',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'url',
          label: 'URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'genre',
      label: 'Genres',
      widget: 'list',
      field: {
        name: 'genre',
        label: 'Genre',
        widget: 'string'
      }
    },
    {
      name: 'hasPart',
      label: 'Has Part',
      widget: 'list',
      field: {
        name: 'part',
        label: 'Part',
        widget: 'string'
      }
    },
    {
      name: 'headline',
      label: 'Headline',
      widget: 'string'
    },
    {
      name: 'interactionStatistic',
      label: 'Interaction Statistics',
      widget: 'list',
      field: {
        name: 'statistic',
        label: 'Statistic',
        widget: 'string'
      }
    },
    {
      name: 'isPartOf',
      label: 'Is Part Of',
      widget: 'string'
    },
    {
      name: 'learningResourceType',
      label: 'Learning Resource Type',
      widget: 'string'
    },
    {
      name: 'locationCreated',
      label: 'Location Created',
      widget: 'string'
    },
    {
      name: 'mainEntity',
      label: 'Main Entity',
      widget: 'object',
      fields: [
        {
          name: '@type',
          label: 'Type',
          widget: 'string'
        },
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        }
      ]
    },
    {
      name: 'material',
      label: 'Materials',
      widget: 'list',
      field: {
        name: 'material',
        label: 'Material',
        widget: 'string'
      }
    },
    {
      name: 'mentions',
      label: 'Mentions',
      widget: 'list',
      field: {
        name: 'mention',
        label: 'Mention',
        widget: 'string'
      }
    },
    {
      name: 'offers',
      label: 'Offers',
      widget: 'list',
      field: {
        name: 'offer',
        label: 'Offer',
        widget: 'string'
      }
    },
    {
      name: 'position',
      label: 'Position',
      widget: 'number'
    },
    {
      name: 'producer',
      label: 'Producer',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'url',
          label: 'URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'provider',
      label: 'Provider',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'url',
          label: 'URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'publication',
      label: 'Publication',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'datePublished',
          label: 'Date Published',
          widget: 'datetime'
        }
      ]
    },
    {
      name: 'publishingPrinciples',
      label: 'Publishing Principles',
      widget: 'string'
    },
    {
      name: 'recordedAt',
      label: 'Recorded At',
      widget: 'string'
    },
    {
      name: 'releasedEvent',
      label: 'Released Event',
      widget: 'string'
    },
    {
      name: 'review',
      label: 'Reviews',
      widget: 'list',
      field: {
        name: 'review',
        label: 'Review',
        widget: 'text'
      }
    },
    {
      name: 'schemaVersion',
      label: 'Schema Version',
      widget: 'string'
    },
    {
      name: 'sourceOrganization',
      label: 'Source Organization',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'url',
          label: 'URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'spatialCoverage',
      label: 'Spatial Coverage',
      widget: 'string'
    },
    {
      name: 'sponsor',
      label: 'Sponsor',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'url',
          label: 'URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'temporalCoverage',
      label: 'Temporal Coverage',
      widget: 'string'
    },
    {
      name: 'text',
      label: 'Text',
      widget: 'text'
    },
    {
      name: 'thumbnailUrl',
      label: 'Thumbnail URL',
      widget: 'string',
      pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
    },
    {
      name: 'timeRequired',
      label: 'Time Required',
      widget: 'string'
    },
    {
      name: 'translator',
      label: 'Translator',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Name',
          widget: 'string'
        },
        {
          name: 'url',
          label: 'URL',
          widget: 'string',
          pattern: ['^https?://.+', 'Must be a valid URL starting with http:// or https://']
        }
      ]
    },
    {
      name: 'typicalAgeRange',
      label: 'Typical Age Range',
      widget: 'string'
    },
    {
      name: 'video',
      label: 'Videos',
      widget: 'list',
      field: {
        name: 'video',
        label: 'Video',
        widget: 'string'
      }
    },
    {
      name: 'workExample',
      label: 'Work Examples',
      widget: 'list',
      field: {
        name: 'workExample',
        label: 'Work Example',
        widget: 'string'
      }
    }
  ];

  return JSON.stringify(fields, null, 2);
} 