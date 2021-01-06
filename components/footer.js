import Link from 'next/link'
import Container from './container'
import { BLOG_NAME } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 dark:bg-gray-800 dark:border-gray-600">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:flex lg:justify-center">
            <Link href={'/'}>
              <a>
                <h3 className="dark:text-gray-200 text-4xl lg:text-5xl font-bold text-center  mb-10 lg:mb-0">
                  { BLOG_NAME }
                </h3>
              </a>
            </Link>
          </div>
          <div className="flex justify-center lg:w-1/2">
              <a
                href="#"
                className="mx-3 bg-black dark:bg-white hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white border border-black text-white dark:text-black font-bold py-3 px-12 lg:px-8 duration-300 transition-colors"
              >
                Voltar para o Topo
              </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
