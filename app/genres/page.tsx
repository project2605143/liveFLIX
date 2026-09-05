import type { Metadata } from 'next'
import { HubPage } from '@/components/seo-page'

export const metadata: Metadata = {
  title: 'Live TV Channels by Genre | Streamline',
  description: 'Find live news, sports, kids, and music channels online with Streamline.',
}

export default function GenresPage() {
  return <HubPage type="genres" />
}
