import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import DownloadButton from '../../components/download-button'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts, getAllTags } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Navbar from '../../components/navbar/navbar'
import { BLOG_NAME, HOME_URL } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview, tags }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Navbar tags={tags}/>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | {BLOG_NAME}
                </title>
                <meta name="title" content={post.title} key="title" />
                <meta name="description" content={post.excerpt} key="description" />
                {/* OPEN GRAPH DATA */}
                <meta property="og:title" content={post.title} key="og:title"/>
                <meta property="og:description" content={post.excerpt} key="og:description"/>
                <meta property="og:type" content="article" key="og:type"/>
                <meta property="og:image" content={`${HOME_URL}${post.ogImage.url}`} key="og:image" />
                {/* <meta property="og:url" content={`${HOME_URL}/posts/${post.slug}`} key="og:url" /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                tags={post.tags}
              />
              <PostBody content={post.content} />
              <DownloadButton url={post.download.url} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const tags = getAllTags()

  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'download',
    'tags'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      tags,
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
