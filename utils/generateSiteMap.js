const fs = require('fs')
const globby = require('globby')

async function generateSiteMap() {
  const time = new Date().toISOString()

  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[slug].js',
    '!pages/**/[tag].js',
    '!pages/**/[page].js',
    '!pages/api',
    '_posts/*.md'
  ])

  const sitemap = 
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(page => {
        const path = page
          .replace('_posts', 'posts')
          .replace('pages', '')
          .replace('.js', '')
          .replace('.md', '')
        const route = path === '/index' ? '' : path
        return `
  <url>
    <loc>${`https://download-cursos.vercel.app/${route}`}</loc>
    <lastmod>${time}</lastmod>
  </url>
            `
      })
      .join('')}
</urlset>
`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()