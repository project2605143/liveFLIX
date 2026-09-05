import type { Metadata } from 'next'
import { ArticlePage } from '@/components/seo-page'

export const metadata: Metadata = { title: 'Best Live TV Channels by Country | Streamline', description: 'Explore the best starting points for live TV channels from India, the United Kingdom, the United States, Canada, and Australia.' }

export default function CountryGuide() {
  return <ArticlePage eyebrow="Country guide" title="Best live TV channels to watch from around the world" description="Country-based browsing is one of the fastest ways to find coverage that feels relevant, local, and easy to return to." sections={[{ heading: 'India', body: 'India is a strong starting point for live news, business, entertainment, and regional language programming. Browse Hindi, English, Malayalam, Tamil, and Telugu channels together.' }, { heading: 'United Kingdom', body: 'UK channels are useful for public affairs, current events, and English-language coverage with a distinct regional perspective.' }, { heading: 'United States', body: 'Explore US channels for breaking news, business coverage, culture, and the stories driving conversation across the country.' }, { heading: 'Canada and Australia', body: 'Canadian and Australian channels add local context to international viewing, with English-language news and public programming that complement a global lineup.' }]} />
}
