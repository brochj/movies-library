import Link from 'next/link'
import { BLOG_NAME, DESCRIPTION } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href="/">
        <h1 className="cursor-pointer dark:text-white text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          {BLOG_NAME}
        </h1>
      </Link>
      <h4 className="text-center dark:text-white text-lg md:text-xl lg:text-2xl md:text-left mt-5 md:pl-8">
        {DESCRIPTION}
      </h4>
    </section>
  )
}
