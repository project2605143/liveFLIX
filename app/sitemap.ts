import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://streamline-sand.vercel.app'
  const paths = [
    '/',
    '/countries',
    '/genres',
    '/about',
    '/faq',
    '/contact',
    '/guides',
    '/live-tv/india',
    '/live-tv/uk',
    '/live-tv/usa',
    '/live-tv/canada',
    '/live-tv/australia',
    '/live-tv/germany',
    '/genre/news',
    '/genre/sports',
    '/genre/kids',
    '/genre/music',
    '/guides/organize-live-tv-channels',
    '/guides/best-live-tv-channels-by-country',
    '/guides/live-tv-vs-cable-2026',
    '/guides/find-live-news-worldwide',
  ]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.split('/').length === 2 ? 0.8 : 0.7,
  }))
}
