import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GenrePage, genreSlugs, getGenre } from '@/components/seo-page'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return genreSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const genre = getGenre(slug)
  if (!genre) return {}
  return { title: `Watch ${genre.name} Channels Online | Streamline`, description: genre.description }
}

export default async function GenreRoute({ params }: Props) {
  const { slug } = await params
  if (!getGenre(slug)) notFound()
  return <GenrePage slug={slug} />
}
