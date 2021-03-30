import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_movies')

export function getMovieSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getMovieBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllMovies(fields = []) {
  const slugs = getMovieSlugs()
  const movies = slugs
    .map((slug) => getMovieBySlug(slug, fields))
    // sort movies by date in descending order
    .sort((post1, post2) => (post1.update > post2.update ? '-1' : '1'))
  return movies;
}

// export function getAllTags() {
//   /* 
//   postsTags = [{tags:[...]}, {tags:[...]}, {tags:[...]}]
//   array_tags = [['tag', 'tag1'], ['tag1']]
//   flatten_tags = ['tag','tag1', 'tag1]
//   tags = ['tag', 'tag1']
//   */
//   const postsTags = getAllMovies(['tags']);
//   const array_tags = postsTags.map(({tags})=>tags );
//   const flatten_tags = [].concat.apply([], array_tags);
//   const tags = [...new Set(flatten_tags)];
//   return tags;
// }

// export function getAllMoviesFromTag(tag) {
//   const taggedPosts = []
//   const postsTags = getAllMovies([
//     'title',
//     'coverImage',
//     'date',
//     'author',
//     'slug',
//     'excerpt',
//     'tags'
//   ])
  
//   postsTags.forEach((elem, index)=>{ 
//     if (elem.tags.includes(tag)){
//       taggedPosts.push(postsTags[index])
//     }
//   })

//   return taggedPosts;
// }