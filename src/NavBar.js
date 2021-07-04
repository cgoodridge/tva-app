import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (

    <div class="container">
        <div class="logo">
            <Link to="/">
                <img src="images/tva-logo.png" alt="TVA logo" width="130"/>
            </Link>
        </div>
        <nav className="topnav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/members">Members</Link>
                </li>
                <li>
                    <Link to="/timeline">Timeline</Link>
                </li>
                <li>
                    <Link to="/threat-list">Threat List</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>   
            </ul>
        </nav>
    </div>
)

export default NavBar;