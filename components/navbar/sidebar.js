import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

export default function Sidebar({ tags, open, setOpen }) {
  // const [open, setOpen] = useState(false);

  const exemplos = ['trader', 'programacao', 'financeiro', 'ti', 'marketing', 'produtividade', 'framework', 'vendas', 'eletronica']
  const sorted = exemplos.sort()

  const list = () => (
    <div
      className="mx-2 mt-10 w-auto"
    >
      <ul>
      {sorted.map((text) => (
          <Link key={text} href={`/tag/${text}`}>
            <div onClick={() => setOpen(false)}key={text}
              className="mb-2 px-20 py-3 rounded-md hover:bg-blue-400 hover:text-gray-50 transition-colors cursor-pointer"
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
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
