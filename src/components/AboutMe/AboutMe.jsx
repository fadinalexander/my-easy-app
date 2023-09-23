import React from 'react';

import './AboutMe.css'
import { Outlet, Link, NavLink } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div>
            <h2>
                Эта страница с информацией обо мне
            </h2>
            <ul>
                <li style={{listStyle: 'none'}}>
                    <NavLink to='contacts'>Контактная информация</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default AboutMe