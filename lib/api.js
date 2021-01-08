import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
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

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

export function getAllTags() {
  /* 
  postsTags = [{tags:[...]}, {tags:[...]}, {tags:[...]}]
  array_tags = [['tag', 'tag1'], ['tag1']]
  flatten_tags = ['tag','tag1', 'tag1]
  tags = ['tag', 'tag1']
  */
  const postsTags = getAllPosts(['tags']);
  const array_tags = postsTags.map(({tags})=>tags );
  const flatten_tags = [].concat.apply([], array_tags);
  const tags = [...new Set(flatten_tags)];
  return tags;
}

// export function getAllPostsFromTag(tag) {
//   const taggedPosts = []
//   const postsTags = getAllPosts(['slug','tags'])
//   console.log(postsTags);
//   for(const tags in postsTags){
//     if (tags.includes(tag)) {
//       taggedPosts.push(postsTags.slug)
//     }
//   }
//   return taggedPosts
// }