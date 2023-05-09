import React from 'react';
import {NavLink, BrowserRouter}from 'react-router-dom';


const Header = () => {
    return ( 
        <div>
            <h1> Benjamin Kerby </h1>
            <nav>
                <BrowserRouter>
                <NavLink to='/'>AboutMe</NavLink>
                <NavLink to='/Portfolio'>Portolio</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
                <NavLink to ='/Resume'>Resume</NavLink>
                </BrowserRouter>
            </nav>
        </div>
    )
} 

export default Header;