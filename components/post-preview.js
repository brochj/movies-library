import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  // author,
  slug,
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
        <div className="dark:text-gray-400 text-gray-600 text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="dark:text-white text-justify text-lg leading-relaxed mb-4">{excerpt}</p>
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
    </div>
  )
}
