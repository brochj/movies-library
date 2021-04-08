import Head from 'next/head'
import { useState } from 'react'
import Container from '../../../components/container'
import MoreStories from '../../../components/more-stories'
import Intro from '../../../components/intro'
import Layout from '../../../components/layout'
// import Navbar from '../../../components/navbar/navbar'
import Pagination from '../../../components/pagination'
import { getAllGenres, getAllMoviesFromGenre } from '../../../lib/movies'
import { config } from '../../../lib/config'
import { BLOG_NAME } from '../../../lib/constants'
import { stringToSlug } from '../../../utils/string-formatter'

export default function Genre({ allMovies, genre }) {
  const [ postNum, setPostNum] = useState(30); // Default number of posts displayed

  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 30) // 3 is the number of posts you want to load per click
  }
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        {/* <Navbar tags={tags}/> */}
        <Container>
          <Intro />
          {allMovies.length > 0 && <MoreStories movies={allMovies.slice(0, postNum)} /> }
          {allMovies.length > postNum &&
            <div className="my-5 flex justify-center items-center">
              <button className="py-2 px-5 text-lg rounded-sm font-semibold tracking-wide border border-dark-primary-500 dark:bg-dark-primary-500 dark:text-white dark:hover:bg-transparent transition-colors" onClick={handleClick}>Carregar mais</button>
            </div>
          }
          {allMovies.length <= postNum &&
            <p className="mb-5 flex justify-center items-center text-2xl font-semibold uppercase dark:text-gray-500">Acabou os Filmes</p>
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
    const allMoviesFromGenre = getAllMoviesFromGenre(params.genre)

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
      genre: params.genre,
      // pagination,
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

