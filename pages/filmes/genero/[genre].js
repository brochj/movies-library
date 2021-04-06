import Head from 'next/head'
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

export default function Genre({ allMovies, genre, pagination }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        {/* <Navbar tags={tags}/> */}
        <Container>
          <Intro />
          {allMovies.length > 0 && <MoreStories movies={allMovies} />}
          <Pagination 
            current={pagination.current}
            pages={pagination.pages}
            link={{
              href: (page) => (page === 1 ? "/" : `/filmes/genero/${genre}/page/${page}`),
              as: (page) =>  (page === 1 ? null : `/filmes/genero/${genre}/page/${page}`),
            }}
          />
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

    const pagination = {
      current: 1,
      pages: Math.ceil(allMoviesFromGenre.length / config.posts_per_page),
    };

  return {
    props: { 
      allMovies: allMoviesFromGenre.slice(0, config.posts_per_page),
      genre: params.genre,
      pagination,
    },
  }
}

export async function getStaticPaths() {
  // console.log("entrou no getStaticPaths()");
  const allGenres = getAllGenres()
  return {
    paths: allGenres.map((genre) => {
      console.log(genre, stringToSlug(genre));
      return {
        params: {
          genre: stringToSlug(genre), // [genre].js é necessário ser genre: 
        },
      }
    }),
    fallback: false,
  }
}

