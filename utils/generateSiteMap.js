const fs = require('fs')
const globby = require('globby')

async function generateSiteMap() {
  const time = new Date().toISOString()

  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[page].js',
    '!pages/**/[movie].js',
    '!pages/**/[genre].js',
    '!pages/**/[imdb].js',
    '!pages/[movie].js',
    '!pages/api',
  ])

  const movies = await globby([
    '!pages/**/*.js',
    '_movies/*.md',
  ])

  const sitemap = 
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(page => {
      const path = page
        .replace('pages/', '')
        .replace('.js', '')
        .replace('/index', '')
        .replace('index', '')
      return `
  <url>
    <loc>${`https://bibliotecafilmes.netlify.app/${path}`}</loc>
    <lastmod>${time}</lastmod>
  </url>
          `
    })
    .join('')}
    ${movies
      .map(page => {
        const path = page
          .replace('_movies/', '')
          .replace('.md', '')
        return `
  <url>
    <loc>${`https://bibliotecafilmes.netlify.app/filme/${path}`}</loc>
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