import Head from 'next/head'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPostsFromTag, getAllTags } from '../../lib/api'
import { BLOG_NAME } from '../../lib/constants'

export default function Index({ taggedPosts, tag }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME} | {tag.charAt(0).toUpperCase() + tag.slice(1)}</title>
        </Head>
        <Container>
          <Intro />
          
          {taggedPosts.length > 0 && <MoreStories posts={taggedPosts} />}
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
    const taggedPosts = getAllPostsFromTag(params.tag)

    // By returning { props: taggedPosts }, the [tag].js component
  // will receive `taggedPosts` as a prop at build time
  return {
    props: { taggedPosts, tag: params.tag },
  }
}

export async function getStaticPaths() {
    const tags = getAllTags()
 
    return {
      // Create all static routes for each tag
      paths: tags.map((tag) => {
        return {
          params: {
            tag: tag,
          },
        }
      }),
      fallback: false,
    }
  }