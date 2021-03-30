import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Navbar from '../components/navbar/navbar'
import Pagination from '../components/pagination'
import { getAllMovies } from '../lib/movies'
import { config } from '../lib/config'
import Head from 'next/head'
import { BLOG_NAME } from '../lib/constants'

export default function Index({ allMovies, tags, pagination }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        {/* <Navbar tags={tags}/> */}
        <Container>
          <Intro />
          {/* {heroPost && (
            <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            />
            )} */}
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
    </>
  )
}

export async function getStaticProps() {
  // const tags = getAllTags()
  // console.log('allMovies');
  const allMovies = getAllMovies([
    'title',
    'date',
    'synopsis',
    'quality',
    'audio',
    'images',
    'genre',
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
      // tags,
      pagination
    },
  }
}
