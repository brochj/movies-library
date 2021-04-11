import { useState } from 'react'
import Head from 'next/head'

import { BLOG_NAME } from '../../../lib/constants'
import { config } from '../../../lib/config'
import { getAllMovies } from '../../../lib/movies'
import { imdbRatingsObject } from '../../../lib/imdb'

import CloudTag from '../../../components/cloud-tag'
import Container from '../../../components/container'
import Layout from '../../../components/layout'
import MoreStories from '../../../components/more-stories'

export default function Index({ allMovies }) {
  
  const notes = imdbRatingsObject().reverse()

  const [ rateNum, setRateNum] = useState(40); 
  function handleMoreNotes() {
    setRateNum(prevPostNum => prevPostNum + 40) 
  }

  return (
    <Layout>
      <Head>
        <title>Melhores Filmes | {BLOG_NAME}</title>
      </Head>
      <Container>
        <h2 className="mt-8 mb-6 font-bold text-2xl lg:text-3xl xl:text-4xl dark:text-dark-onPrimary">Filmes filtrado por notas</h2>

        <CloudTag className="my-5"
          url="/filmes/imdb/" tags={notes.slice(0, rateNum)} 
        />
        {notes.length > rateNum &&
          <div className="mb-5 flex justify-center items-center">
            <button className="py-2 px-4 text-sm lg:text-base rounded-sm font-semibold tracking-wide dark:bg-transparent dark:text-gray-400  dark:hover:text-white transition-colors" onClick={handleMoreNotes}>
              Carregar mais notas
            </button>
          </div>
        }
        <h1 className="mb-6 font-bold text-2xl lg:text-3xl xl:text-4xl dark:text-dark-onPrimary">{config.posts_per_page} Melhores Filmes IMDb</h1>

        {allMovies.length > 0 && <MoreStories movies={allMovies} />}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allMovies = getAllMovies([
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
  const pagination = {
    current: 1,
    pages: Math.ceil(allMovies.length / config.posts_per_page),
  };

  return {
    props: { 
      allMovies: allMovies.sort((a, b) => (parseFloat(a.imdb.rating) <= parseFloat(b.imdb.rating)) ? 1 : -1).slice(0, config.posts_per_page),
      pagination
    },
  }
}
