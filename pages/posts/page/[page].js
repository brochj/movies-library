import Head from "next/head";
import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Layout from "../../../components/layout";
import Container from '../../../components/container'
import MoreStories from '../../../components/more-stories'
import Intro from '../../../components/intro'
import Navbar from '../../../components/navbar/navbar'
import Pagination from '../../../components/pagination'
import { BLOG_NAME } from '../../../lib/constants'
import { config } from "../../../lib/config";
import { getAllPosts, getAllTags } from '../../../lib/api'


export default function Page({ posts, tags, pagination, page }) {
	const router = useRouter()
	if(router.isFallback) {
		return <h1>Loading...</h1>
	}
	
	if(!posts){
		return <ErrorPage statusCode={404} />
	}

  return (
    <>
    <Layout>
      <Head>
        <title>{BLOG_NAME} | Página {page}</title>
      </Head>
      <Navbar tags={tags}/>
      <Container>
			<Intro />
        {posts.length > 0 && <MoreStories posts={posts} />}
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
  );
}

export async function getStaticProps({ params }) {
  const tags = getAllTags()
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags'
  ])
  const page = parseInt(params.page);
  const pagination = {
    current: page,
    pages: Math.ceil(posts.length / config.posts_per_page),
	};
	const startPostIndex = (page - 1)*config.posts_per_page
	const endPostIndex = startPostIndex + config.posts_per_page
	
  return {
    props: {
      page,
      posts: posts.slice(startPostIndex, endPostIndex),
      pagination,
      tags,
    },
  };
};

export async function getStaticPaths() {
	const allPosts = getAllPosts([
			'title',
			'date',
			'slug',
			'author',
			'coverImage',
			'excerpt',
			'tags'
		])
	const numberOfPages = Math.ceil(allPosts.length / config.posts_per_page);
	let pages = Array.from(Array(numberOfPages+1).keys()).slice(1)
	console.log(numberOfPages);
	console.log(pages);   
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
