import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // Block API routes from indexing
          '/admin/',         // Block admin pages if you have any
          '/*?*utm_*',       // Block URLs with UTM parameters
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
        crawlDelay: 2,     // Bing respects crawl delay (Google ignores it)
      },
    ],
    sitemap: 'https://c-com.ai/sitemap.xml',
  }
}
