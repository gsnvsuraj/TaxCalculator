import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import {APP_NAME} from './Constants.jsx';

const Navbar = () => {

    const [theme, setTheme] = useState(() => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {APP_NAME}
            </div>
            <div className="navbar-actions">
                <button className="theme-toggle-btn" onClick={toggleTheme}>
                    {theme === 'dark' ? '🌞' : '🌙'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;