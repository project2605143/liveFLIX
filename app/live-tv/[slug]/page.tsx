import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CountryPage, countrySlugs, getCountry } from '@/components/seo-page'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return countrySlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const country = getCountry(slug)
  if (!country) return {}
  return { title: `Live TV Channels in ${country.name} | Streamline`, description: country.description }
}

export default async function CountryRoute({ params }: Props) {
  const { slug } = await params
  if (!getCountry(slug)) notFound()
  return <CountryPage slug={slug} />
}
