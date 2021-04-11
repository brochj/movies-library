import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import Pagination from '../components/pagination'
import { BLOG_NAME } from '../lib/constants'
import { config } from '../lib/config'
import { getAllMovies } from '../lib/movies'

export default function Index({ allMovies, pagination }) {
  return (
    <Layout>
      <Head>
        <title>{BLOG_NAME}</title>
      </Head>
      <Container>
        <h1 className="mt-8 mb-6 font-bold text-2xl lg:text-3xl xl:text-4xl dark:text-dark-onPrimary">Últimos Filmes Adicionados</h1>

        {allMovies.length > 0 && <MoreStories movies={allMovies} />}
        <Pagination 
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/" : "/filmes/page/" + page),
            as: (page) => (page === 1 ? null : "/filmes/page/" + page),
          }}
        />
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
      allMovies: allMovies.slice(0, config.posts_per_page),
      pagination
    },
  }
}
