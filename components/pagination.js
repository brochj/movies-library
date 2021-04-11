import { generatePagination } from "../lib/pagination";
import Link from "next/link";
import cn from 'classnames'

export default function Pagination({ current, pages, link }) {
  const pagination = generatePagination(current, pages);
  return (
    <ul className="flex flex-wrap justify-center mb-2 space-x-3">
      {pagination.map((it, i) => (
        <li 
          key={i}
          className="flex dark:text-gray-100 text-2xl"
        >
          {it.excerpt ? (
            <p className="px-2 py-2">...</p>
          ) : (
            <Link href={link.href(it.page)}>
              <a 
                className={
                  cn(it.page === current ? "active" : null, 
                  "px-4 py-2 rounded-md hover:bg-primary hover:text-gray-50 transition-colors"
                  )
                }>
                {it.page}
              </a>
            </Link>
          )}
        </li>
      ))}
      <style jsx>{`

        a.active {
          color: #fff;
          font-weight: bold;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </ul>
  );
}
