import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Tag from '../components/tag'

export default function PostHeader({ title, coverImage, date, tags }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
        <div className="max-w-2xl mx-auto dark:text-gray-300 text-lg">
          <DateFormatter dateString={date} />
      </div>
        <div className="max-w-2xl mx-auto flex flex-wrap">
          {tags.length > 0 && (
            tags.map((tag)=> (
              <div key={tag}className="mt-2 mr-2">
                <Tag tag={tag}/>
              </div>
            ))
          )}
        </div>
    </>
  )
}
