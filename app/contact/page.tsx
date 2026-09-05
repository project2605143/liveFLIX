import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { ContentShell } from '@/components/seo-page'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = { title: 'Contact Streamline | Suggest a Channel', description: 'Contact the Streamline team with questions, channel suggestions, source reports, or feedback.' }

export default function ContactPage() {
  return <ContentShell><main className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-24"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Get in touch</p><h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Help make the guide better.</h1><p className="mt-6 text-lg leading-8 text-zinc-400">Found a broken source, have a channel suggestion, or want to tell us what would make Streamline more useful? Send a note.</p><a href="mailto:hello@streamline.tv" className="mt-8 inline-flex items-center gap-3 text-sm text-teal-300 hover:text-teal-200"><Mail className="size-4" />hello@streamline.tv</a></div><ContactForm /></main></ContentShell>
}
