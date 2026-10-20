import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thebstar.com'
  
  const projects = [
    'suvi',
    'numen',
    'shipreel',
    'houseware',
    'orangehealth',
    'ai-experiments'
  ]

  const projectUrls = projects.map((id) => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/labs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projectUrls,
  ]
}
