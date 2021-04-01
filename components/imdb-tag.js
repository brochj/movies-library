
export default function ImdbTag({ imdb }) {
  return (
    <div className="px-2 flex w-24 bg-uniques-imdb rounded-md">
        <p className="mr-2 text-onSecondary dark:text-dark-black text-md md:text-lg font-extrabold leading-normal tracking-tighter">
          IMDb
        </p>
        <p className="text-onSecondary dark:text-dark-black text-md md:text-lg font-bold tracking-wide">
          {imdb.rating}
        </p>
    </div> 
  )
}