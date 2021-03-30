import MovieCard from '../components/movie/movie-card'

export default function MoreStories({ movies }) {
  return (
    <section>
      <div className="mb-14 grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-10 2xl:grid-cols-4 2xl:gap-x-10">
        {movies.map((movie) => (
          <MovieCard
            key={movie.slug}
            audio={movie.audio}
            author={movie.author}
            date={movie.date}
            genre={movie.genre}
            images={movie.images}
            quality={movie.quality}
            slug={movie.slug}
            synopsis={movie.synopsis}
            tags={movie.tags}
            title={movie.title}
          />
        ))}
      </div>
    </section>
  )
}
