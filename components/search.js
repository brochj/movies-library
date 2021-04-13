import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'

export default function Search() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
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

  return (
    <div
      className="relative"
      ref={searchRef}
    >
      <input
        className="p-3 rounded-md w-full cursor-pointer text-lg"
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Pesquisar Filmes'
        type='text'
        value={query}
      />
      {query.length > 0 && 
        <button
          aria-label="Limpar"
          title="Limpar"
          className="p-2 absolute top-1 left-3/4 transition duration-200 rounded hover:bg-primary"
          onClick={() => setQuery('')}
        >
          <svg className="w-7 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
            />
          </svg>
        </button>
      }
      { active && results.length > 0 && (
        <ul className="mx-3 top-full left-0 right-0">
          {results.map(({ slug, title }) => (
            <li 
              className="dark:text-dark-onBackground p-4 text-lg" 
              key={slug}
            >
              <Link href={`/filme/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) }
    </div>
  )
}