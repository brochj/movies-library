import Image from 'next/image'

export default function MovieCover({ title, src, height, width }) {
  return (
    <div className="sm:mx-0">
      <Image
        src={src}
        alt={`Imagem da capa do filme ${title}`}
        className='shadow-sm hover:opacity-80 transition-opacity duration-200 rounded-t-md'
        layout="intrinsic"
        width={width || 272}
        height={height || 390}
      />
    </div>
  )
}
