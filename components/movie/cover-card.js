import Link from 'next/link'

export default function CoverCard({ title, src, slug, height, width }) {
  const image = (
    <img
      src={src}
      alt={`Imagem da capa do filme ${title}`}
      className="w-full"
      width={width.toString()}
      height={height.toString()}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/filme/${slug}`} href="/filme/[movie]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
