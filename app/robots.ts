import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule - explicitly allow /ai
      {
        userAgent: '*',
        allow: ['/', '/ai', '/ai/*'],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
      },
      
      // Google Search + AI
      {
        userAgent: 'Googlebot',
        allow: ['/', '/ai', '/ai/*'],
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/ai', '/ai/*'],  // Explicit /ai access
      },
      {
        userAgent: 'GoogleOther',
        allow: ['/', '/ai', '/ai/*'],
      },
      
      // Bing + Copilot
      {
        userAgent: 'Bingbot',
        allow: ['/', '/ai', '/ai/*'],
        disallow: ['/api/', '/admin/'],
        crawlDelay: 1,
      },
      
      // OpenAI (ChatGPT) - CRITICAL
      {
        userAgent: 'GPTBot',
        allow: ['/', '/ai', '/ai/*'],  // Explicit /ai access
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/ai', '/ai/*'],  // Browsing mode
      },
      
      // Anthropic (Claude)
      {
        userAgent: 'Claude-Web',
        allow: ['/', '/ai', '/ai/*'],
      },
      {
        userAgent: 'claudebot',
        allow: ['/', '/ai', '/ai/*'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/', '/ai', '/ai/*'],
      },
      
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/ai', '/ai/*'],
      },
      
      // Common Crawl (used by many AI models)
      {
        userAgent: 'CCBot',
        allow: ['/', '/ai', '/ai/*'],
      },
      
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: ['/', '/ai', '/ai/*'],
      },
      
      // Meta AI
      {
        userAgent: 'FacebookBot',
        allow: ['/', '/ai', '/ai/*'],
      },
      {
        userAgent: 'Meta-ExternalAgent',
        allow: ['/', '/ai', '/ai/*'],
      },
      
      // Additional AI crawlers
      {
        userAgent: 'Diffbot',
        allow: ['/', '/ai', '/ai/*'],
      },
      {
        userAgent: 'ImagesiftBot',
        allow: ['/', '/ai', '/ai/*'],
      },
    ],
    sitemap: 'https://c-com.ai/sitemap.xml',
  }
}
