'use client'

import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) return <div className="rounded-2xl border border-teal-400/30 bg-teal-400/5 p-6 text-sm leading-7 text-zinc-300">Thanks for reaching out. Your message is ready to be connected to the Streamline inbox.</div>

  return <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8"><label className="grid gap-2 text-sm text-zinc-400">Name<input required name="name" className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-teal-400" /></label><label className="grid gap-2 text-sm text-zinc-400">Email<input required type="email" name="email" className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-teal-400" /></label><label className="grid gap-2 text-sm text-zinc-400">Message<textarea required name="message" rows={5} className="resize-y rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-teal-400" /></label><button type="submit" className="rounded-xl bg-teal-400 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-teal-300">Send message</button></form>
}
