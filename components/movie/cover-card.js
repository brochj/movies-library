import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverCard({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`Imagem da capa do filme ${title}`}
      className={cn('shadow-sm', {
        'hover:opacity-60 transition-opacity duration-200': slug,
      }, 'rounded-md')}
      layout="responsive"
      width={width}
      height={height}
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
