import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe2, Mail, Play, Search, ShieldCheck } from 'lucide-react'
import { channels, countries, genres, getCountryCount, type Channel } from '@/lib/channels'

const countryDetails: Record<string, { name: string; slug: string; description: string; languages: string[] }> = {
  india: { name: 'India', slug: 'india', description: 'Watch live TV channels from India, including national news, business, entertainment, and regional broadcasts.', languages: ['Hindi', 'English', 'Malayalam', 'Tamil', 'Telugu'] },
  uk: { name: 'United Kingdom', slug: 'uk', description: 'Explore live UK television, rolling news, public affairs, and channels serving viewers across the United Kingdom.', languages: ['English'] },
  usa: { name: 'United States', slug: 'usa', description: 'Find live TV channels from the United States, from breaking news and business coverage to culture and entertainment.', languages: ['English'] },
  canada: { name: 'Canada', slug: 'canada', description: 'Browse live Canadian channels and discover news, local programming, and international coverage in one place.', languages: ['English', 'French'] },
  australia: { name: 'Australia', slug: 'australia', description: 'Watch live Australian television with an organized guide to news, current affairs, and public broadcasts.', languages: ['English'] },
  germany: { name: 'Germany', slug: 'germany', description: 'Explore live German television and international channels serving viewers across Germany.', languages: ['German', 'English'] },
}

const genreDetails: Record<string, { name: string; description: string; keywords: string[] }> = {
  news: { name: 'News', description: 'Watch live news channels online and follow trusted coverage from India and around the world.', keywords: ['Breaking news', 'World news', 'Business news', 'Regional news'] },
  sports: { name: 'Sports', description: 'Find live sports channels and keep up with matches, analysis, highlights, and sporting events.', keywords: ['Live matches', 'Sports news', 'Analysis', 'Highlights'] },
  kids: { name: 'Kids', description: 'Discover live kids channels with family-friendly programming, cartoons, learning, and entertainment.', keywords: ['Cartoons', 'Learning', 'Family viewing', 'Entertainment'] },
  music: { name: 'Music', description: 'Listen and watch live music channels featuring videos, performances, charts, and culture from around the world.', keywords: ['Music videos', 'Live performances', 'Charts', 'Culture'] },
}

export function getCountry(slug: string) { return countryDetails[slug] }
export function getGenre(slug: string) { return genreDetails[slug] }
export const countrySlugs = Object.keys(countryDetails)
export const genreSlugs = Object.keys(genreDetails)

function Logo() {
  return <Link href="/" className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-xl bg-teal-400 text-zinc-950"><Play className="size-4 fill-current" /></span><span><span className="block font-semibold tracking-tight text-zinc-100">Streamline</span><span className="block text-[10px] uppercase tracking-[0.24em] text-zinc-500">Live TV, organized.</span></span></Link>
}

export function ContentShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-zinc-950 text-zinc-100"><header className="border-b border-zinc-800/80"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"><Logo /><nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex"><Link href="/countries" className="hover:text-zinc-100">Countries</Link><Link href="/genres" className="hover:text-zinc-100">Genres</Link><Link href="/guides" className="hover:text-zinc-100">Guides</Link><Link href="/about" className="hover:text-zinc-100">About</Link></nav><Link href="/" className="rounded-xl bg-teal-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-teal-300">Start watching</Link></div></header>{children}<footer className="border-t border-zinc-800/80"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>Streamline · Live TV, organized.</p><div className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/faq" className="hover:text-zinc-200">FAQ</Link><Link href="/contact" className="hover:text-zinc-200">Contact</Link><Link href="/about" className="hover:text-zinc-200">About</Link></div></div></footer></div>
}

function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">{eyebrow}</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">{title}</h1><p className="mt-6 text-lg leading-8 text-zinc-400">{description}</p></div>
}

export function HubPage({ type }: { type: 'countries' | 'genres' }) {
  const isCountries = type === 'countries'
  return <ContentShell><main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"><PageIntro eyebrow={isCountries ? 'Browse by place' : 'Browse by interest'} title={isCountries ? 'Live TV channels by country' : 'Live TV channels by genre'} description={isCountries ? 'Explore a focused guide to live television from different countries. Find local news, regional voices, and international coverage without sorting through a noisy program guide.' : 'Find the kind of live programming you want to watch. Streamline organizes news, sports, kids, and music channels into simple, searchable starting points.'} /><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{isCountries ? countries.map((country) => { const slug = country === 'United States' ? 'usa' : country === 'United Kingdom' ? 'uk' : country.toLowerCase(); return <Link key={country} href={`/live-tv/${slug}`} className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-teal-400/50"><div className="flex items-center justify-between"><Globe2 className="size-5 text-teal-300" /><ArrowRight className="size-4 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-teal-300" /></div><h2 className="mt-8 text-xl font-medium text-zinc-100">Live TV in {country}</h2><p className="mt-2 text-sm leading-6 text-zinc-500">{getCountryCount(country)} channels available</p></Link> }) : Object.entries(genreDetails).map(([slug, genre]) => <Link key={slug} href={`/genre/${slug}`} className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-teal-400/50"><div className="flex items-center justify-between"><span className="text-2xl text-teal-300">{slug === 'news' ? 'N' : slug === 'sports' ? 'S' : slug === 'kids' ? 'K' : 'M'}</span><ArrowRight className="size-4 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-teal-300" /></div><h2 className="mt-8 text-xl font-medium text-zinc-100">{genre.name} channels</h2><p className="mt-2 text-sm leading-6 text-zinc-500">{genre.description}</p></Link>)}</div><div className="mt-16 rounded-2xl border border-teal-400/20 bg-teal-400/5 p-6 sm:p-8"><p className="text-sm leading-7 text-zinc-300">Looking for the full library? <Link href="/" className="font-medium text-teal-300 hover:text-teal-200">Open Streamline</Link> to search channels by country, genre, language, and status.</p></div></main></ContentShell>
}

function ChannelList({ items }: { items: Channel[] }) {
  return <div className="grid gap-3 sm:grid-cols-2">{items.map((channel) => <div key={channel.id} className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white" style={{ backgroundColor: channel.accent }}>{channel.logo}</span><div className="min-w-0"><h3 className="truncate font-medium text-zinc-100">{channel.name}</h3><p className="mt-1 text-xs text-zinc-500">{channel.category} · {channel.language} · {channel.status === 'live' ? 'Live now' : 'Availability varies'}</p></div></div>)}</div>
}

export function CountryPage({ slug }: { slug: string }) {
  const country = countryDetails[slug]
  const localChannels = channels.filter((channel) => country.name === 'India' ? channel.region !== 'World' : channel.region === country.name)
  return <ContentShell><main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"><PageIntro eyebrow="Country guide" title={`Live TV channels in ${country.name}`} description={country.description} /><div className="mt-10 flex flex-wrap gap-2">{country.languages.map((language) => <span key={language} className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400">{language}</span>)}</div><section className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_.7fr]"><div><div className="mb-5 flex items-end justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Channel directory</p><h2 className="mt-2 text-2xl font-semibold">Popular channels from {country.name}</h2></div><span className="text-sm text-zinc-500">{getCountryCount(country.name)} indexed</span></div>{localChannels.length ? <ChannelList items={localChannels} /> : <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-sm leading-7 text-zinc-400">The directory for {country.name} is growing. Open the main library to explore the currently available international streams.</div>}</div><aside className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"><Search className="size-5 text-teal-300" /><h2 className="mt-5 text-xl font-medium">Search the whole guide</h2><p className="mt-3 text-sm leading-6 text-zinc-500">Filter by language, region, and channel status in the Streamline app.</p><Link href="/" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200">Browse all channels <ArrowRight className="size-4" /></Link></aside></section></main></ContentShell>
}

export function GenrePage({ slug }: { slug: string }) {
  const genre = genreDetails[slug]
  const genreChannels = channels.filter((channel) => channel.category.toLowerCase() === slug)
  return <ContentShell><main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"><PageIntro eyebrow="Genre guide" title={`Watch ${genre.name.toLowerCase()} channels online`} description={genre.description} /><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{genre.keywords.map((keyword) => <div key={keyword} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-300"><CheckCircle2 className="mb-3 size-4 text-teal-300" />{keyword}</div>)}</div><section className="mt-14"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Featured directory</p><h2 className="mt-2 text-2xl font-semibold">{genre.name} channels on Streamline</h2><div className="mt-6">{genreChannels.length ? <ChannelList items={genreChannels} /> : <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-sm leading-7 text-zinc-400">More {genre.name.toLowerCase()} channels are being indexed. Visit the app to search the wider public playlist directory.</div>}</div></section></main></ContentShell>
}

export function ArticlePage({ title, description, eyebrow, sections }: { title: string; description: string; eyebrow: string; sections: Array<{ heading: string; body: string }> }) {
  return <ContentShell><main className="mx-auto max-w-3xl px-6 py-16 lg:py-24"><PageIntro eyebrow={eyebrow} title={title} description={description} /><article className="mt-14 space-y-10">{sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-semibold text-zinc-100">{section.heading}</h2><p className="mt-4 text-base leading-8 text-zinc-400">{section.body}</p></section>)}</article><div className="mt-14 border-t border-zinc-800 pt-8"><Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200">Explore the live channel library <ArrowRight className="size-4" /></Link></div></main></ContentShell>
}

export { countryDetails, genreDetails }
