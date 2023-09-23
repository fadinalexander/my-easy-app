import React from 'react';

import './Header.css'

import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: 30, alignItems: 'center'}}>
            <h1>Это Хэдэр</h1>
            <NavBar />
        </div>
        <hr />
        </>
    )
}

export default Header