import Sidebar from './sidebar';

import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Link from 'next/link'
import {BLOG_NAME} from '../../lib/constants'

function HideOnScroll(props) {
  const { children } = props;
    const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}



export default function Navbar({tags, ...props}) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
        <Sidebar open={open} setOpen={setOpen}/>
          <Toolbar className="flex justify-between">
            <Link href="/">
              <p className="px-4 py-2 rounded-md font-bold uppercase text-white text-xl cursor-pointer hover:bg-white hover:bg-opacity-20 transition-opacity">
                {BLOG_NAME}
              </p>
            </Link>
            <div onClick={() => setOpen(true)} 
            className="flex items-center px-3 py-1 rounded hover:bg-white hover:bg-opacity-20 transition-opacity cursor-pointer"
            >
              <p className="text-white font-bold text-xl hidden md:block">MENU</p>
              <div className="p-2">
                <div className="w-7 h-1 mb-1 rounded-md bg-white"/>
                <div className="w-7 h-1 mb-1 rounded-md bg-white"/>
                <div className="w-7 h-1 rounded-md bg-white"/>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Container>
       
      </Container>
    </React.Fragment>
  );
}
