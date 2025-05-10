import React, { useContext, useEffect, useRef, useState } from 'react';
import './Header.css';

const Header = () => {

	return (
        <div className='header-container'>
            <div className='header-logo'>
                <img src='/images/logo.png' alt='Logo' />
            </div>
            <div className='header-menu'>
                <div className='header-menu-option'>ACTUALITÉS</div>
            </div>
        </div>
	);
};

export default Header;
