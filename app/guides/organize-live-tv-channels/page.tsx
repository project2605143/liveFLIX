import type { Metadata } from 'next'
import { ArticlePage } from '@/components/seo-page'

export const metadata: Metadata = { title: 'How to Organize Your Live TV Channels | Streamline', description: 'Learn how to organize live TV channels in one searchable place using country, genre, language, and favorites.' }

export default function OrganizeGuide() {
  return <ArticlePage eyebrow="Watching better" title="How to organize your live TV channels in one place" description="A useful live TV setup should help you find something quickly, not make you manage another complicated grid." sections={[{ heading: 'Start with the way you actually watch', body: 'Separate channels by the decisions you make most often. Country is useful when you want local coverage, genre helps when you know the kind of program you want, and language makes a large directory feel personal.' }, { heading: 'Keep a short list of reliable favorites', body: 'A long channel list is helpful for discovery, but a smaller favorites list is better for everyday viewing. Save the channels you return to and let the wider library remain available when you want to explore.' }, { heading: 'Check availability before settling in', body: 'Public streams can change, pause, or become unavailable. A useful guide makes status visible so you can move to another source without losing time.' }, { heading: 'Use Streamline as your starting point', body: 'Streamline brings those habits together with a searchable library, country and genre views, and favorites in one focused place.' }]} />
}
