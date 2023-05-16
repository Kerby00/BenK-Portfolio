import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import './styles/style.css'



const Header = () => {
    return (
        <div className='header'>
            <div className='d-flex justify-content-center '>
            <h1 className="links d-inline-flex p-3 rounded-pill"> Benjamin M. Kerby </h1>
            </div>
            <nav className="navbar">
                <div className="container-fluid navbar-brand d-flex justify-content-evenly">
                    <NavLink to='/'><button className='links rounded-pill bold'>AboutMe</button></NavLink>
                    <NavLink to='/Portfolio'><button className='links rounded-pill'>Portolio</button></NavLink>
                    <NavLink to='/Contact'><button className='links rounded-pill'>Contact</button></NavLink>
                    <NavLink to='/Resume'><button className='links rounded-pill'>Resume</button></NavLink>
                </div>
            </nav>
        </div>)
}

export default Header;