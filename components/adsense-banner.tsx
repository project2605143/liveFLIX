'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

export default function AdsenseBanner() {
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
        data-ad-slot="3821512233"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
