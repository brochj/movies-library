import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Link from 'next/link'

export default function Sidebar({ tags, open, setOpen }) {
  const sortedTags = tags.sort()

  const list = () => (
    <div
      className="mx-2 mt-2 mb-12 w-auto"
    >
      <p className="px-4 py-2 text-center rounded-md font-bold uppercase text-black text-xl">
        Todas as Tags
      </p>
      <hr className="mt-2 mb-3"/>
      <ul>
      {sortedTags.map((text) => (
          <Link key={text} href={`/tag/${text}`}>
            <div onClick={() => setOpen(false)}key={text}
              className="mb-2 px-10 py-2 border-2 rounded-md hover:bg-blue-400 hover:text-gray-50 transition-colors cursor-pointer"
            >
              <a className="h-14 text-md font-semibold ">
                {text.charAt(0).toUpperCase() + text.slice(1)}
              </a>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
        <React.Fragment>
          <SwipeableDrawer
            anchor='right'
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <div className="flex justify-center py-1 bg-blue-500 shadow-lg">
              <Link href="/">
                <a className="px-9 py-3 text-gray-50 font-bold uppercase text-xl ">
                  Página Inicial
                </a>
              </Link>
            </div>
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
