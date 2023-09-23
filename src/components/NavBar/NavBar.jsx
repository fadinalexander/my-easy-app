import React from 'react';

import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{display: 'flex', flexDirection: 'column'}}>
            <NavLink to='/' className={({isActive}) => `menu__link ${isActive ? 'menu__link_active' : ''}`}>Домой</NavLink>
            <NavLink to='/about-me' className={({isActive}) => `menu__link ${isActive ? 'menu__link_active' : ''}`}>Немного обо мне</NavLink>
            <NavLink to='/friends' className={({isActive}) => `menu__link ${isActive ? 'menu__link_active' : ''}`}>Мои друзья</NavLink>
        </nav >
    )
}

export default NavBar