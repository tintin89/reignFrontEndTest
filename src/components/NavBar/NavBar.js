import React from 'react';
import './NavBar.css';
import TitleBar from './TitleBar/TitleBar';

function NavBar() {
    return (
        <header className="navBar">
            <TitleBar/>
            <nav>
                <ul>
                    <li>All</li>
                    <li>My faves</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
