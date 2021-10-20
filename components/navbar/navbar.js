import React, { useState } from 'react';
import Link from 'next/link'
import SearchIcon from '@material-ui/icons/Search'
import SearchModal from '../../components/search-modal'
import { BLOG_NAME } from '../../lib/constants'


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <div className="dark:bg-primary-600">
        <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide dark:text-white uppercase">
                {BLOG_NAME}
              </span>
            </a>
            <ul className="hidden lg:flex items-center space-x-8">
              <li>
                <Link href="/filmes">
                  <a
                    aria-label="Ver todos os Filmes"
                    title="Ver todos os Filmes"
                    className="px-2 py-1 rounded-md font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:bg-primary-900"
                  >
                    Filmes
                  </a>
                </Link>
              </li>
              
              <li>
                <Link href="/filmes/imdb">
                  <a
                    aria-label="Ver Melhores Filmes"
                    title="Ver Melhores Filmes"
                    className="px-2 py-1 rounded-md font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:bg-primary-900"
                  >
                    Melhores Filmes
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="#">
                  <a
                    aria-label="Ver Melhores Filmes"
                    title="Ver Melhores Filmes"
                    className="px-2 py-1 rounded-md font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:bg-primary-900"
                  >
                    Séries (Em breve)
                  </a>
                </Link>
              </li> */}

            </ul>
            <div className="cursor-pointer">
              <SearchIcon onClick={() => setIsModalOpen(true)} fontSize="large" style={{color: '#FFF', marginTop: '1px'}}/>
              <SearchModal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)}/>
            </div>
            <div className="lg:hidden">
               
              <button
                aria-label="Abrir Menu"
                title="Abrir Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setOpen(true)}
              >
                <svg className="w-6 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {open && (
                <div className="z-10 absolute top-0 left-0 w-full">
                  <div className="p-5 dark:bg-dark-background rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <span className="ml-2 text-xl font-bold tracking-wide text-primary uppercase">
                            {BLOG_NAME}
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Fechar Menu"
                          title="Fechar Menu"
                          className="p-2 transition duration-200 rounded hover:bg-primary"
                          onClick={() => setOpen(false)}
                        >
                          <svg className="w-6 text-white" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4 flex flex-col justify-center">
                      <li>
                        <Link href="/filmes" >
                          <a
                            aria-label="Ver todos os Filmes"
                            title="Ver todos os Filmes"
                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-white"
                          >
                            Filmes
                          </a>
                        </Link>
                      </li>
                      
                      <li>
                        <Link href="/filmes/imdb" >
                          <a
                            aria-label="Ver Melhores Filmes"
                            title="Ver Melhores Filmes"
                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-white"
                          >
                            Melhores Filmes
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" >
                          <a
                            aria-label="Ver Melhores Filmes"
                            title="Ver Melhores Filmes"
                            className="cursor-not-allowed font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-white"
                          >
                            Séries (Em breve)
                          </a>
                        </Link>
                      </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
