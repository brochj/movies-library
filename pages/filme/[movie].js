import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import DownloadButton from '../../components/download-button'
import Layout from '../../components/layout'
// import { getPostBySlug, getAllPosts, getAllTags } from '../../lib/api'
import { getAllMovies, getMovieBySlug } from '../../lib/movies'
import PostTitle from '../../components/post-title'
// import Navbar from '../../components/navbar/navbar'
import { BLOG_NAME, HOME_URL } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ movie, preview, tags }) {
  console.log('ENTRO NO COMPONENTE\n\n\n');
  const router = useRouter()
  if (!router.isFallback && !movie?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      {/* <Navbar tags={tags}/> */}
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {movie.title} | {BLOG_NAME}
                </title>
                <meta name="title" content={movie.title} key="title" />
                <meta name="description" content={movie.synopsis} key="description" />
                {/* OPEN GRAPH DATA */}
                <meta property="og:title" content={movie.title} key="og:title"/>
                <meta property="og:description" content={movie.synopsis} key="og:description"/>
                <meta property="og:type" content="article" key="og:type"/>
                <meta property="og:image" content={`${HOME_URL}${movie.images.cover}`} key="og:image" />
                {/* <meta property="og:url" content={`${HOME_URL}/movies/${movie.slug}`} key="og:url" /> */}
              </Head>
              {/* <PostHeader
                title={movie.title}
                coverImage={movie.images.cover}
                date={movie.date}
                author={movie.title}
                // tags={movie.tags}
              /> */}
              {/* <PostBody content={movie.content} />
              <DownloadButton url={movie.download.url} /> */}
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  console.log('getStaticProps ENTROOOOOOOOOOOOOOOOOOO');
  // const tags = getAllTags()
  console.log(params);
  const movie = getMovieBySlug(params.movie, [
    'id',
    'type',
    'title',
    'synopsis',
    'originalTitle',
    'date',
    'update',
    'releaseDate',
    'imdb',
    'duration',
    'trailer',
    'tags',
    'genre',
    'quality',
    'format',
    'audio',
    'subtitle',
    'size',
    'audioQuality',
    'videoQuality',
    'directors',
    'cast',
    'writers',
    'maturityRating',
    'download',
    'images',
    'content',
    'slug',
  ])
  const content = await markdownToHtml(movie.content || '')

  return {
    props: {
      // tags,
      movie: {
        ...movie,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  console.log('ENTRO NO getStaticPaths');
  const posts = getAllMovies(['slug'])
  console.log(posts);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          movie: post.slug,
        },
      }
    }),
    fallback: false,
  }
}