import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ContentShell } from '@/components/seo-page'

export const metadata: Metadata = {
  title: 'Live TV Guides and Viewing Tips | Streamline',
  description: 'Practical guides for finding, organizing, and watching live TV channels online from around the world.',
}

const guides = [
  { href: '/guides/organize-live-tv-channels', title: 'How to organize your live TV channels in one place', description: 'A calmer way to build a channel list that is easy to search, revisit, and share.' },
  { href: '/guides/best-live-tv-channels-by-country', title: 'Best live TV channels to watch by country', description: 'A starting point for exploring news, entertainment, and public broadcasts from five popular regions.' },
  { href: '/guides/live-tv-vs-cable-2026', title: 'Live TV vs. traditional cable: what is changing in 2026', description: 'Compare the habits, tradeoffs, and flexibility shaping the way people watch television.' },
  { href: '/guides/find-live-news-worldwide', title: 'How to find live news coverage from around the world', description: 'Use country, language, and genre filters to follow a story from more than one perspective.' },
]

export default function GuidesPage() {
  return <ContentShell><main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Streamline guides</p><h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Better ways to watch live TV</h1><p className="mt-6 text-lg leading-8 text-zinc-400">Helpful, plain-language guides for discovering channels and building a live TV routine that works for you.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2">{guides.map((guide) => <Link key={guide.href} href={guide.href} className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-teal-400/50"><div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">Guide</span><ArrowRight className="size-4 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-teal-300" /></div><h2 className="mt-8 text-xl font-medium leading-8 text-zinc-100">{guide.title}</h2><p className="mt-3 text-sm leading-6 text-zinc-500">{guide.description}</p></Link>)}</div></main></ContentShell>
}
