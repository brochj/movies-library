import Head from "next/head";
import {useRouter} from 'next/router'
import ErrorPage from 'next/error'

import { config } from "../../../lib/config";
import { getAllMovies } from '../../../lib/movies'
import Container from '../../../components/container'
import Layout from "../../../components/layout";
import MoreStories from '../../../components/more-stories'
import Pagination from '../../../components/pagination'


export default function Page({ allMovies, pagination, page }) {
	const router = useRouter()
	if(router.isFallback) {
		return <h1>Loading...</h1>
	}
	
	if(!allMovies){
		return <ErrorPage statusCode={404} />
	}

  return (
    <Layout>
      <Head>
        <title>Filmes | Página {page}</title>
      </Head>
      <Container>
      <h1 className="mt-8 mb-6 font-bold text-2xl lg:text-3xl xl:text-4xl dark:text-dark-onPrimary">Últimos Filmes Adicionados - Página {page}</h1>
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
  );
}

export async function getStaticProps({ params }) {
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
