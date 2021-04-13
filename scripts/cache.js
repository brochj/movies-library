const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function getMovies() {
  const postDirectory = path.join(process.cwd(), '_movies')
  const fileNames = fs.readdirSync(postDirectory)
  const posts = fileNames.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const fullPath = path.join(postDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterResult = matter(fileContents)
    return {
      slug,
      title: matterResult.data.title
    }
  })
  return JSON.stringify(posts)
}

const fileContents = `export const posts = ${getMovies()}`

try {
  fs.readdirSync('cache')
} catch (error) {
  fs.mkdirSync('cache')
}

fs.writeFile('cache/movies.js', fileContents, function (err) {
  if (err) return console.log("CAN'T CREATE MOVIES.JS FILE: ", err);
  console.log('Movies posts cached');
})
