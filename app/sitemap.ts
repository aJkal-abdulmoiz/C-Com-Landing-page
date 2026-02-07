import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://c-com.ai'
  
  return [
    // Homepage
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // AI Knowledge Hub - CRITICAL FOR AI CRAWLERS
    {
      url: `${baseUrl}/ai`,
      lastModified: new Date('2026-02-07'),
      changeFrequency: 'weekly', // Changed to weekly for freshness
      priority: 1.0, // Maximum priority
    },
    
    // Add future AI subpages with high priority
    // {
    //   url: `${baseUrl}/ai/moments-of-meaning`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
  ]
}
