import { useState } from 'react'
import Head from 'next/head'

import { BLOG_NAME } from '../../../lib/constants'
import { getAllGenres, getAllMoviesFromGenre } from '../../../lib/movies'
import { stringToSlug, genreSlugToString } from '../../../utils/string-formatter'

import Container from '../../../components/container'
import Layout from '../../../components/layout'
import MoreStories from '../../../components/more-stories'

export default function Genre({ allMovies, genre }) {
  const [ postNum, setPostNum] = useState(30); // Default number of posts displayed

  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 30) // 30 is the number of posts you want to load per click
  }
  return (
    <Layout>
      <Head>
        <title>{BLOG_NAME}</title>
      </Head>
      <Container>
        <h1 className="mt-8 mb-6 font-bold text-2xl lg:text-4xl xl:text-5xl dark:text-dark-onPrimary">
          Filmes de {genre.string}
        </h1>
        {allMovies.length > 0 && <MoreStories movies={allMovies.slice(0, postNum)} /> }
        {allMovies.length > postNum &&
          <div className="my-5 flex justify-center items-center">
            <button className="py-2 px-5 text-lg rounded-sm font-semibold tracking-wide border border-dark-primary-500 dark:bg-dark-primary-500 dark:text-white dark:hover:bg-transparent transition-colors" onClick={handleClick}>Carregar mais</button>
          </div>
        }
        {allMovies.length <= postNum && allMovies.length != 0 &&
          <p className="mb-5 flex justify-center items-center text-2xl font-semibold uppercase dark:text-gray-500">FIM</p>
        }
        {allMovies.length === 0 &&
          <p className="mb-5 flex justify-center items-center text-2xl font-semibold uppercase dark:text-gray-500">Nenhum Filme encontrado</p>
        }

      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
    const allMoviesFromGenre = getAllMoviesFromGenre(params.genre)

  return {
    props: { 
      allMovies: allMoviesFromGenre,
      // genre: params.genre
      genre: { slug: params.genre, string: genreSlugToString(params.genre) }
    },
  }
}

export async function getStaticPaths() {
  const allGenres = getAllGenres()
  return {
    paths: allGenres.map((genre) => {
      return {
        params: {
          genre: stringToSlug(genre), // [genre].js é necessário ser genre: 
        },
      }
    }),
    fallback: false,
  }
}

