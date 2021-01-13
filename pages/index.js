import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Navbar from '../components/navbar/navbar'
import Pagination from '../components/pagination'
import { getAllPosts, getAllTags } from '../lib/api'
import { config } from '../lib/config'
import Head from 'next/head'
import { BLOG_NAME } from '../lib/constants'

export default function Index({ allPosts, tags, pagination }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Navbar tags={tags}/>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            />
            )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
  const tags = getAllTags()
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags'
  ])
  const pagination = {
    current: 1,
    pages: Math.ceil(allPosts.length / config.posts_per_page),
  };

  return {
    props: { 
      allPosts: allPosts.slice(0, config.posts_per_page),
      tags,
      pagination
    },
  }
}
