import Link from 'next/link'

function Tag({ url, tagString, slug }){
  return(
      <Link href={url}>
          <a className="m-2 px-4 py-1 rounded-xl bg-secondary-800 text-white text-base font-semibold hover:bg-gray-100 hover:text-secondary-800  transition-colors cursor-pointer hover:shadow-md">
              { tagString }
          </a>
      </Link>
  )
}

export default function CloudTag({url, tags, ...props}) {
  return (
        <div {...props}>
          <nav className="flex flex-wrap justify-center">
            {tags.length > 0 && tags.map((elem) =>(
              <Tag key={elem.slug} url={url + elem.slug} tagString={elem.tag} slug={elem.slug}/>
            ))}
         </nav>
        </div>
  )
}
