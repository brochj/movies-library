import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function SearchModal({ isOpen, handleClose }) {

  if (isOpen === false) return null

  const searchInputRef = useRef(null)
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    setLoading(true)
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results.slice(0, 12))
        })
    } else {
      setResults([])
    }
    setLoading(false)
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(()=>{searchInputRef.current.focus();}, [isOpen])

  return (
    <div
      className="fixed z-10 pt-5 px-5 left-0 top-0 w-full h-full bg-black bg-opacity-90"
      ref={searchRef}
    >
      <div className="relative md:w-1/2 m-auto">

        <input
          className="p-3 rounded-md w-full cursor-pointer text-lg focus:outline-none focus:ring focus:border-primary"
          onChange={onChange}
          onFocus={onFocus}
          placeholder='Pesquisar Filmes'
          type='text'
          value={query}
          ref={searchInputRef}
        />
        {query.length > 0 && 
          <button
            aria-label="Limpar"
            title="Limpar"
            className="p-2 absolute top-1 right-4 transition duration-200 rounded-full hover:bg-primary "
            onClick={() => setQuery('')}
          >
            <svg className="w-7 text-gray-600 hover:text-onPrimary" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
              />
            </svg>
          </button>
        }
      </div>
      {loading && 
        <p className="dark:text-onBackground text-8xl">Carregando...</p>
      }
      { active && results.length > 0 && (
        <ul className="md:w-1/2 md:mx-auto">
          {results.map(({ slug, title }) => (
            <Link href={`/filme/${slug}`}
              key={slug}
            >
              <li 
                className="cursor-pointer dark:text-dark-onBackground p-4 text-lg trasition transform duration-300 hover:translate-x-2 hover:bg-primary-500" 
              >
                <a>{title}</a>
              </li>
            </Link>
          ))}
        </ul>
      ) }
      <button
        aria-label="Fechar Pesquisa"
        title="Fechar Pesquisa"
        className="p-2 absolute bottom-5 right-5 md:right-1/2 rounded-full bg-primary "
        onClick={() => handleClose()}
      >
        <svg className="w-10 text-onPrimary transition duration-200 hover:text-white" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
          />
        </svg>
      </button>
    </div>
  )
}