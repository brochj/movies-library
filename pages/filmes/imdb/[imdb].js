import Head from 'next/head'
import { useState } from 'react'

import { BLOG_NAME } from '../../../lib/constants'
import { getAllMoviesFromImdb } from '../../../lib/movies'
import { imdbRatingsSlug, imdbRatingsObject } from '../../../lib/imdb'
import CloudTag from '../../../components/cloud-tag'
import Container from '../../../components/container'
import Layout from '../../../components/layout'
import MoreStories from '../../../components/more-stories'

export default function Genre({ allMovies, imdb }) {
  const notes = imdbRatingsObject().reverse()

  const [ postNum, setPostNum] = useState(30); // Default number of posts displayed
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 30) // 30 is the number of posts you want to load per click
  }

  const [ rateNum, setRateNum] = useState(40); 
  function handleMoreNotes() {
    setRateNum(prevPostNum => prevPostNum + 40) 
  }

  return (
    <Layout>
      <Head>
        <title>Filmes com IMDb {imdb.replace("-", ".")} | {BLOG_NAME}</title>
      </Head>
      <Container>
        <h1 className="mt-8 mb-6 font-bold text-2xl lg:text-3xl xl:text-4xl dark:text-dark-onPrimary">Filmes com IMDb: {imdb.replace("-", ".")}</h1>
        {allMovies.length > 0 && <MoreStories movies={allMovies.slice(0, postNum)} /> }
        {allMovies.length > postNum &&
          <div className="my-5 flex justify-center items-center">
            <button className="py-2 px-5 text-lg rounded-sm font-semibold tracking-wide border border-dark-primary-500 dark:bg-dark-primary-500 dark:text-white dark:hover:bg-transparent transition-colors" onClick={handleClick}>Carregar mais</button>
          </div>
        }
        {allMovies.length < postNum && allMovies.length != 0 &&
          <p className="mb-5 flex justify-center items-center text-2xl font-semibold uppercase dark:text-gray-500">FIM</p>
        }
        {allMovies.length === 0 &&
          <p className="mb-5 flex justify-center items-center text-2xl font-semibold uppercase dark:text-gray-500">Nenhum Filme encontrado</p>
        }
        <CloudTag className="mt-5 mb-2"
          url="/filmes/imdb/" tags={notes.slice(0, rateNum)} 
        />
        {notes.length > rateNum &&
          <div className="mb-5 flex justify-center items-center">
            <button className="py-2 px-4 text-sm lg:text-base rounded-sm font-semibold tracking-wide dark:bg-transparent dark:text-gray-400  dark:hover:text-white transition-colors" onClick={handleMoreNotes}>
              Carregar mais notas
            </button>
          </div>
        }
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const allMoviesFromGenre = getAllMoviesFromImdb(params.imdb.replace("-", "."))
  
  return {
    props: { 
      allMovies: allMoviesFromGenre,
      imdb: params.imdb,
    },
  }
}

export async function getStaticPaths() {
  const notes = imdbRatingsSlug()

  return {
    paths: notes.map((imdb) => {
      return {
        params: {
          imdb: imdb, // [imdb].js é necessário ser imdb: 
        },
      }
    }),
    fallback: false,
  }
}

