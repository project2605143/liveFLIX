import { NextResponse } from 'next/server'
import { loadPlaylist, parseM3U, playlistSources } from '@/lib/channels'

export const revalidate = 900

export async function GET() {
  try {
    const content = await loadPlaylist(playlistSources.india)
    const entries = parseM3U(content)
    return NextResponse.json({
      channels: entries.map((entry) => ({ name: entry.name, url: entry.url, group: entry.group, logo: entry.logo, language: entry.language })),
      checkedAt: new Date().toISOString(),
    }, { headers: { 'Cache-Control': 's-maxage=900, stale-while-revalidate=3600' } })
  } catch (error) {
    console.error('[v0] stream playlist fetch failed', error)
    return NextResponse.json({ error: 'Live stream sources are temporarily unavailable.', channels: [] }, { status: 503 })
  }
}
