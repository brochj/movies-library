import DateFormatter from '../../components/date-formatter'
import Tag from "../../components/tag";
import CoverImage from '../../components/cover-image'
import Link from 'next/link'

export default function MovieCard({
  title,
  date,
  synopsis,
  quality,
  audio,
  images,
  genre,
  tags,
  slug,
}) {
  return (
    <div className="dark:bg-gray-700 pb-3 rounded-md hover:shadow-xl">
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={images.cover}
          height={300}
          width={210}
        />
      </div>
      <div className="px-3">
        <h3 className="text-onSecondary dark:text-dark-onSecondary text-3xl mb-3 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:no-underline">{title}</a>
          </Link>
        </h3>
        {/* <p className="text-onSecondary dark:text-dark-onSecondary text-justify text-lg leading-relaxed mb-4">
          {synopsis.length > 250 ? synopsis.substr(0, 250)+'...' : synopsis}
        </p> */}
        <div className="flex flex-wrap">
          {tags.length > 0 && (
                  tags.map((tag)=> (
                    <div key={tag} className="mb-2 mr-2">
                    <Tag tag={tag}/>
                    </div>
                    ))
                  )
                }
        </div>
      </div>
    </div>
  )
}
