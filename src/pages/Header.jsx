import React from 'react';
import NavListItem from '@/component/NavListItem';
import navListData from '@/data/navListData';
import "./header.css"
import Search from '@/component/Search';
import Button from '@/component/Button';


const Header = () => {
  return (
    <header>
        <a href="/" className="logo">
            Film<span>finity</span>
        </a>
        <ul className="nav">
            {
                navListData.map(nav => (
                    <NavListItem key={nav._id} nav={nav}/>
                ))
            } 
        </ul>
        <Search />
        <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='SIGN IN'/>
    </header>
  )
}

export default Header
