import Head from 'next/head'
import { useState } from 'react'
import Container from '../../../components/container'
import MoreStories from '../../../components/more-stories'
import Intro from '../../../components/intro'
import Layout from '../../../components/layout'
// import Navbar from '../../../components/navbar/navbar'
import Pagination from '../../../components/pagination'
import {  getAllMoviesFromImdb } from '../../../lib/movies'
import { config } from '../../../lib/config'
import { BLOG_NAME } from '../../../lib/constants'
import { imdbRatingsSlug, imdbRatingsObject } from '../../../lib/imdb'
import CloudTag from '../../../components/cloud-tag'

export default function Genre({ allMovies, imdb }) {
  const notes = imdbRatingsObject().reverse()

  const [ postNum, setPostNum] = useState(30); // Default number of posts displayed
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 30) // 3 is the number of posts you want to load per click
  }

  const [ rateNum, setRateNum] = useState(40); 
  function handleMoreNotes() {
    setRateNum(prevPostNum => prevPostNum + 40) 
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Filmes com IMDb: {imdb.replace("-", ".")} | {BLOG_NAME}</title>
        </Head>
        {/* <Navbar tags={tags}/> */}
        <Container>
          <Intro />
          <h1 className="mb-6 font-bold text-2xl lg:text-3xl xl:text-4xl dark:text-dark-onPrimary">Filmes com IMDb: {imdb.replace("-", ".")}</h1>
          {allMovies.length > 0 && <MoreStories movies={allMovies.slice(0, postNum)} /> }
          {allMovies.length > postNum &&
            <div className="my-5 flex justify-center items-center">
              <button className="py-2 px-5 text-lg rounded-sm font-semibold tracking-wide border border-dark-primary-500 dark:bg-dark-primary-500 dark:text-white dark:hover:bg-transparent transition-colors" onClick={handleClick}>Carregar mais</button>
            </div>
          }
          {allMovies.length < postNum && allMovies.length != 0 &&
            <p className="mb-5 flex justify-center items-center text-2xl font-semibold uppercase dark:text-gray-500">Acabou os Filmes</p>
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
    </>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. 
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log(typeof(params.imdb.replace("-", ".")));
  console.log(params.imdb);
    const allMoviesFromGenre = getAllMoviesFromImdb(params.imdb.replace("-", "."))

    // const pagination = {
    //   current: 1,
    //   pages: Math.ceil(allMoviesFromGenre.length / config.posts_per_page),
    // };
    // console.log("params: ", JSON.stringify(params));
    // const page = parseInt(params.page) || 2;
    // const pagination = {
    //   current: page,
    //   pages: Math.ceil(allMoviesFromGenre.length / config.posts_per_page),
    // };
    // const startPostIndex = (page - 1) * config.posts_per_page
    // const endPostIndex = startPostIndex + config.posts_per_page

    

  return {
    props: { 
      allMovies: allMoviesFromGenre,
      // allMovies: allMoviesFromGenre.slice(startPostIndex, endPostIndex),
      // allMovies: allMoviesFromGenre.slice(0, config.posts_per_page),
      imdb: params.imdb,
      // pagination,
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

