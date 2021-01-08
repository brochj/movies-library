import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      {/* <h2 className="dark:text-gray-100 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Mais Posts
      </h2> */}
      <div className="mb-14 grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-10 2xl:grid-cols-4 2xl:gap-x-10">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  )
}
