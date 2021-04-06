// import DateFormatter from '../../components/date-formatter'
// import Tag from "../../components/tag";
import CoverCard from './cover-card'
import Link from 'next/link'

export default function MovieCard({
  title,
  // date,
  // synopsis,
  // quality,
  audio,
  images,
  imdb,
  releaseDate,
  // genre,
  // tags,
  slug,
}) {
  return (
    <div className="bg-surface dark:bg-dark-surface rounded-md hover:shadow-xl">
      <div className="relative">
        <CoverCard
          slug={slug}
          title={title}
          src={images.cover}
          height={200}
          width={140}
        />
      
      <div className="flex absolute top-0 left-0 ">
        <p className="px-3 py-1 mr-1 text-onPrimary dark:text-dark-onPrimary bg-primary-700 rounded-lg text-sm font-semibold leading-snug tracking-wide">
          {audio}
        </p>
        <p className="px-3 py-1 text-onPrimary dark:text-dark-onPrimary bg-primary-700 rounded-lg text-sm font-semibold leading-snug tracking-wide">
          {releaseDate.substr(0, 4)}
        </p>
      </div>
      <div className="px-2 flex absolute bottom-0 right-0 bg-uniques-imdb rounded-md">
        <p className="mr-2 text-onSecondary dark:text-dark-black  text-md sm:text-sm font-extrabold leading-normal tracking-tighter">
          IMDb
        </p>
        <p className="text-onSecondary dark:text-dark-black text-md sm:text-sm font-bold tracking-wide">
          {imdb.rating}
        </p>
      </div>      
      </div>
      <p className="ml-3 my-2 text-onSecondary dark:text-dark-onSecondary text-lg leading-snug">
          <Link as={`/filme/${slug}`} href="/filme/[slug]">
            <a className="hover:no-underline">{title.length > 25 ? title.substr(0, 25)+'...' : title}</a>
          </Link>
        </p>
    </div>
  )
}
