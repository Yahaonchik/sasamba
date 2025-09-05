import { seoConfig } from '../utils/seoConfig'

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://remont-stiralok.vercel.app'
  const now = new Date()

  const routes = Object.keys(seoConfig)
    .filter((p) => typeof p === 'string' && p.startsWith('/'))

  const entries = routes.map((path) => {
    const url = `${base}${path === '/' ? '' : path}`
    let changeFrequency = 'weekly'
    let priority = 0.9
    if (path === '/') {
      changeFrequency = 'daily'
      priority = 1
    } else if (path === '/articles') {
      changeFrequency = 'weekly'
      priority = 0.8
    }
    return { url, lastModified: now, changeFrequency, priority }
  })

  return entries
}
