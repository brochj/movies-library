import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import markdownToHtml from '../lib/markdownToHtml'
import { getAllMovies, getMovieBySlug } from '../lib/movies'
import { BLOG_NAME, HOME_URL } from '../lib/constants'
import Container from '../components/container'
import DownloadMovie from '../components/movie/download-movie'
import FileInfo from '../components/movie/file-info'
import Header from '../components/header'
import Layout from '../components/layout'
import MovieCover from '../components/movie/movie-cover'
import MovieInfo from '../components/movie/movie-info'
import TrailerModal from '../components/movie/trailer-modal'


export default function Post({ movie, preview }) {
  const router = useRouter()
  if (!router.isFallback && !movie?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
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
            <h1 className="mb-6 font-bold text-2xl lg:text-3xl xl:text-4xl dark:text-dark-onPrimary">{movie.title}</h1>

            <div className="my-3 flex flex-col items-center md:flex-row">
              <div className="md:">
                <MovieCover title={movie.title} src={movie.images.cover}/>
                <TrailerModal videoId={movie.trailer.urls[0]}/>
              </div>
              <MovieInfo 
                className="mt-5 md:ml-6 md:w-2/3" 
                title={movie.title}
                synopsis={movie.synopsis}
                originalTitle={movie.originalTitle}
                releaseDate={movie.releaseDate}
                imdb={movie.imdb}
                duration={movie.duration}
                trailer={movie.trailer}
                tags={movie.tags}
                genre={movie.genre}
              />
            </div>
            <FileInfo 
              className="md:flex md:flex-col md:justify-center md:items-center"
              quality={movie.quality}
              format={movie.format}
              audio={movie.audio}
              subtitle={movie.subtitle}
              size={movie.size}
              audioQuality={movie.audioQuality}
              videoQuality={movie.videoQuality}
            />
            <DownloadMovie download={movie.download}/>
            
          </article>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  // const tags = getAllTags()

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
  const posts = getAllMovies(['slug'])

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