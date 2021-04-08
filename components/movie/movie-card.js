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
        <p className="hidden 2xl:block px-3 py-1 mr-1 text-onPrimary dark:text-dark-onPrimary bg-black bg-opacity-60 rounded-tl-md rounded-br-md text-sm font-semibold leading-snug tracking-wide">
          {audio}
        </p>

      </div>
        <p className="absolute px-3 py-1 top-0 right-0 text-xs lg:text-sm text-onPrimary dark:text-dark-onPrimary bg-opacity-50 bg-black rounded-tr-md rounded-bl-md font-semibold leading-snug tracking-wide">
          {releaseDate.substr(0, 4)}
        </p>
      <div className="px-2 flex absolute bottom-0 right-0 bg-uniques-imdb rounded-tl-md rounded-br-md">
        <p className="hidden lg:block mr-2 text-onSecondary dark:text-dark-black  text-sm lg:text-base font-extrabold leading-normal tracking-tighter">
          IMDb
        </p>
        <p className="text-onSecondary dark:text-dark-black text-sm lg:text-base font-bold tracking-wide">
          {imdb.rating}
        </p>
      </div>      
      </div>
      {/* <p className="ml-3 my-2 hidden lg:block text-base text-onSecondary dark:text-gray-400 leading-snug">
          <Link as={`/filme/${slug}`} href="/filme/[slug]">
            <a className="hover:no-underline">{title.length > 25 ? title.substr(0, 20)+' ...' : title}</a>
          </Link>
        </p> */}
    </div>
  )
}
