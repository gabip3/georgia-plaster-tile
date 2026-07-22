import type { MetadataRoute } from 'next';
import { business } from '@/lib/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: business.url, lastModified: new Date('2026-07-09'), changeFrequency: 'monthly', priority: 1 },
    { url: `${business.url}/#services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${business.url}/#portfolio`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${business.url}/#materials`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${business.url}/#contact`, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
