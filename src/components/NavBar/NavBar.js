import React from 'react';
import './NavBar.css';
import TitleBar from './TitleBar/TitleBar';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <header className="navBar">
            <TitleBar/>
            <div className="nav">
                <ul>                    
                    <li><NavLink exact to="/">All</NavLink></li>
                    <li><NavLink to="/faves">Faves</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar
