import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Sitenin canlıdaki ana domain adresini buraya yazabilirsin
  const baseUrl = 'https://veyoeducation.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Eğer arama motorlarının taramasını istemediğin gizli veya yönetim paneli yolları varsa buraya ekleyebilirsin
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
