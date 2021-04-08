import MovieCard from '../components/movie/movie-card'

export default function MoreStories({ movies }) {
  return (
    <section>
      <div className="mb-14 grid 
      grid-cols-2 gap-x-3 gap-y-3 
      sm:grid-cols-3 sm:gap-x-4 sm:gap-y-4
      md:grid-cols-4 md:gap-x-5 md:gap-y-5
      lg:grid-cols-5 lg:gap-x-5 
      2xl:grid-cols-6 2xl:gap-x-5">

        {movies.map((movie) => (
          <MovieCard
            key={movie.slug}
            audio={movie.audio}
            author={movie.author}
            date={movie.date}
            genre={movie.genre}
            images={movie.images}
            imdb={movie.imdb}
            releaseDate={movie.releaseDate}
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
