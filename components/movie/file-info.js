
export default function FileInfo({ 
  quality,
  format,
  audio,
  subtitle,
  size,
  audioQuality,
  videoQuality,
 }) {
  return(
    <div>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary">Qualidade: </span>{quality}</p>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary">Formato: </span>{format}</p>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary">Áudio: </span>{audio}</p>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary">Legenda: </span>{subtitle}</p>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary">Tamanho: </span>{size}</p>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary">Qualidade de Áudio: </span>{audioQuality}</p>
      <p className="font-bold dark:text-dark-onPrimary"><span className="font-normal dark:text-dark-onPrimary">Qualidade de Video: </span>{videoQuality}</p>
    </div>
  )
}