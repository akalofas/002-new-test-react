import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import siteLogo from '../../assets/images/vite.svg'
import { useRef } from 'react';
import { links } from './data';
import './navbar.css'


export default function Navbar() {
  const linksRef = useRef(null);
  return (    
    <nav>
      <img src={siteLogo} className="logo" alt="site logo" />
      <ul className='links' ref={linksRef}>
        {links.map((link) => {
            const { id, url, text } = link;
            return (
                <li key={id}>
                  <NavLink className="text-start btn btn-light mr-1" to={url}>{text}</NavLink>
                </li>
              );
            }
          )
        }
      </ul>
    </nav>
  )
}
