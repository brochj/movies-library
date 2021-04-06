import Head from "next/head";
import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Layout from "../../../../components/layout";
import Container from '../../../../components/container'
import MoreStories from '../../../../components/more-stories'
import Intro from '../../../../components/intro'
// import Navbar from '../../../../components/navbar/navbar'
import Pagination from '../../../../components/pagination'
import { BLOG_NAME } from '../../../../lib/constants'
import { config } from "../../../../lib/config";
import { getAllMovies } from '../../../../lib/movies'


export default function Page({ allMovies, genre, pagination, page }) {
	const router = useRouter()
	if(router.isFallback) {
		return <h1>Loading...</h1>
	}
	
	if(!allMovies){
		return <ErrorPage statusCode={404} />
	}

  return (
    <>
    <Layout>
      <Head>
        <title>{BLOG_NAME} | Página {page}</title>
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
              as: (page) => (page === 1 ? null : `/filmes/genero/${genre}/page/${page}`),
            }}
          />
      </Container>
    </Layout>
  </>
  );
}

export async function getStaticProps({ params }) {
  // const tags = getAllTags()
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
  const page = parseInt(params.page);
  const pagination = {
    current: page,
    pages: Math.ceil(allMovies.length / config.posts_per_page),
	};
	const startPostIndex = (page - 1) * config.posts_per_page
	const endPostIndex = startPostIndex + config.posts_per_page
	
  return {
    props: {
      page,
      allMovies: allMovies.slice(startPostIndex, endPostIndex),
      pagination,
      // tags,
    },
  };
};

export async function getStaticPaths() {
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
	const numberOfPages = Math.ceil(allMovies.length / config.posts_per_page);
	let pages = Array.from(Array(numberOfPages+1).keys()).slice(1)
  return {
    paths: pages.map((page) => {
			return {
				params: {
					page: page.toString(),
				},
			}
		}),
    fallback: true,
  };
};
