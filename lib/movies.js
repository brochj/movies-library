import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { stringToSlug } from '../utils/string-formatter'

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

export function getAllGenres() {
  /* 
  movieGenres = [{genres:[...]}, {genres:[...]}, {genres:[...]}]
  array_genres = [['genre', 'genre1'], ['genre1']]
  flatten_genres = ['genre','genre1', 'genre1]
  genres = ['genre', 'genre1']
  */
  const movieGenres = getAllMovies(['genre']);
  const array_genres = movieGenres.map(({ genre }) => genre );
  const flatten_genres = [].concat.apply([], array_genres);
  const genres = [...new Set(flatten_genres)];

  const formattedGenres =  genres.map((genre) => genre.trim() );

  return formattedGenres;
}

export function getAllMoviesFromGenre(genre) {
  const movieGenres = getAllMovies([
    'title',
    'date',
    'synopsis',
    'quality',
    'audio',
    'images',
    'genre',
    'imdb',
    'releaseDate',
    'tags',
    'slug',
  ])
  console.log("TOTAL de filmes: " +  movieGenres.length);

  const matchedPosts = []

  movieGenres.forEach((elem, index)=>{ 
    // if (elem.genre.length > 0 && elem.genre.includes(genre)){
    //   matchedPosts.push(movieGenres[index])
    // }
    if (elem.genre.length > 0 ) {
      elem.genre.forEach((postGenre, i) => {
        if (stringToSlug(postGenre) == genre){
          matchedPosts.push(movieGenres[index])
        }
      })
    }
  })
  console.log("TOTAL de filmes de " + genre + " : " +  matchedPosts.length);

  return matchedPosts;
}

export function getAllMoviesFromImdb(imdb) {
  const movieGenres = getAllMovies([
    'title',
    'date',
    'synopsis',
    'quality',
    'audio',
    'images',
    'genre',
    'imdb',
    'releaseDate',
    'tags',
    'slug',
  ])
  const matchedPosts = []

  movieGenres.forEach((elem, index)=>{ 
    if (elem.imdb.rating.length > 0 && parseFloat(elem.imdb.rating) === parseFloat(imdb)) {
    // if (elem.imdb.rating.length > 0 && parseFloat(elem.imdb.rating) >= parseFloat(imdb)) {
      matchedPosts.push(movieGenres[index])
    }
  })
  console.log("TOTAL de filmes de imdb " + imdb + " : " +  matchedPosts.length);

  return matchedPosts.sort((a, b) => (parseFloat(a.imdb.rating) > parseFloat(b.imdb.rating)) ? 1 : -1);
}