import Link from 'next/link'

const links = [
  { href: '/countries', label: 'Countries' },
  { href: '/genres', label: 'Genres' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function PublicNavigation() {
  return <nav aria-label="Explore Streamline" className="border-b border-zinc-800/80 bg-zinc-950/95 px-6 py-3 text-xs text-zinc-400 backdrop-blur lg:px-10"><div className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto whitespace-nowrap"><span className="font-semibold uppercase tracking-[0.18em] text-teal-300">Explore</span>{links.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-zinc-100">{link.label}</Link>)}</div></nav>
}
