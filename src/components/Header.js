// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <h1>Call a Friend</h1>
            <p>your friendly contact app</p>
            <hr/>
        </div>
    )
}

export default Header;