import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
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
        <Intro />

        {allMovies.length > 0 && <MoreStories movies={allMovies} />}
        <Pagination 
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/" : "/posts/page/" + page),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
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
