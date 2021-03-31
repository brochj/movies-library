export default function MovieInfo({
  title,
  synopsis,
  originalTitle,
  releaseDate,
  imdb,
  duration,
  trailer,
  tags,
  genre,
}) {
  return (
    <div>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary"></span>{title}</p>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary">Título Original: </span>{originalTitle}</p>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary">Data de Lançamento: </span>{releaseDate}</p>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary">IMDb: </span>{imdb.rating}</p>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary">Duração: </span>{duration}</p>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary"></span>{synopsis}</p>
    </div>
  )
}