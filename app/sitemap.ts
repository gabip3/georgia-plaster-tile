import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date('2026-07-09'), changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/#services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/#portfolio`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/#materials`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/#contact`, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
