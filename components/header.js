import Link from 'next/link'
import { BLOG_NAME } from '../lib/constants'

export default function Header() {
  return (
    <h2 className="dark:text-gray-100 text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-3">
      <Link href="/">
        <a>{BLOG_NAME}</a>
      </Link>
    </h2>
  )
}
