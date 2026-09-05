import type { Metadata } from 'next'
import { HubPage } from '@/components/seo-page'

export const metadata: Metadata = {
  title: 'Live TV Channels by Country | Streamline',
  description: 'Browse live TV channels by country, including India, the UK, the USA, Canada, Australia, and Germany.',
}

export default function CountriesPage() {
  return <HubPage type="countries" />
}
