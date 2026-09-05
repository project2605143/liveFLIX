'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

export default function AdsenseBanner({ slot = '3821512233' }: { slot?: string }) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    } catch {
      initialized.current = false
    }
  }, [])

  return (
    <div className="mx-auto min-h-[100px] w-full max-w-7xl px-6 py-8 lg:px-10" aria-label="Advertisement">
      <ins
        className="adsbygoogle block min-h-[100px] w-full"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9603074308935425"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

export function AdsenseSideAd() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    } catch {
      initialized.current = false
    }
  }, [])

  return (
    <aside
      className="group/side-ad fixed right-0 top-1/2 z-30 hidden w-[min(320px,calc(100vw-1rem))] -translate-y-1/2 translate-x-[calc(100%-2.25rem)] transition-transform duration-300 ease-out hover:translate-x-0 md:block"
      aria-label="Advertisement"
    >
      <div className="min-h-[280px] rounded-l-2xl border border-r-0 border-zinc-800 bg-zinc-900/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-sm">
        <ins
          className="adsbygoogle block min-h-[260px] w-full"
          style={{ display: 'block' }}
          data-ad-format="autorelaxed"
          data-ad-client="ca-pub-9603074308935425"
          data-ad-slot="3358477800"
        />
      </div>
    </aside>
  )
}
