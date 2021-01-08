import DateFormatter from '../components/date-formatter'
import Tag from "../components/tag";
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  // author,
  slug,
  tags
}) {
  return (
    <div className="dark:bg-gray-700 pb-3 rounded-md hover:shadow-xl">
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <div className="px-3">
        <h3 className="dark:text-white text-3xl mb-3 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:no-underline">{title}</a>
          </Link>
        </h3>
          <div className="flex mb-4 dark:text-gray-400 text-gray-600 text-lg ">
            <DateFormatter dateString={date} />
          </div>
        <p className="dark:text-white text-justify text-lg leading-relaxed mb-4">{excerpt}</p>
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
