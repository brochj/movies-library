import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import TagTitle from '../../components/tag-title'
import Navbar from '../../components/navbar/navbar'
import { getAllPostsFromTag, getAllTags } from '../../lib/api'
import { BLOG_NAME } from '../../lib/constants'

export default function Index({ taggedPosts, tag, tags }) {
  const router = useRouter()
	if(router.isFallback) {
		return <h1>Loading...</h1>
	}
	
	if(!taggedPosts){
		return <ErrorPage statusCode={404} />
	}
  return (
    <>
      <Layout>
        <Head>
          <title>{tag.charAt(0).toUpperCase() + tag.slice(1)} | {BLOG_NAME}</title>
        </Head>
        <Navbar tags={tags}/>
        <Container>
          <Intro />
          <TagTitle tag={tag}/>
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
    const tags = getAllTags()

    // By returning { props: taggedPosts }, the [tag].js component
  // will receive `taggedPosts` as a prop at build time
  return {
    props: { taggedPosts, tag: params.tag, tags },
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