import React from 'react';
import './headermenu.css';
import { NavLink } from "react-router-dom";

const Headermenu = () => {
    return(
        <>
        
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/api">API</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
} 

export default Headermenu;