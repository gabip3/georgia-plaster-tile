import { business, services, faqs } from './content';

export function jsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${business.url}/#business`,
    name: business.name,
    image: `${business.url}/og.jpg`,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    priceRange: '$$$',
    foundingDate: String(business.established),
    slogan: business.tagline,
    areaServed: business.cities.map((c) => ({ '@type': 'City', name: `${c}, GA` })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'East Cobb',
      addressRegion: 'GA',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 33.9926, longitude: -84.4499 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '16:00' },
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '120' },
    makesOffer: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.desc },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: business.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${business.url}/#services` },
      { '@type': 'ListItem', position: 3, name: 'Portfolio', item: `${business.url}/#portfolio` },
    ],
  };

  return [localBusiness, faqSchema, breadcrumb];
}
