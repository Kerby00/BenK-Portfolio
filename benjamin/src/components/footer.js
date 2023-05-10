import React from 'react';
import './styles/style.css'

const Footer = () => {
    return (
<div className='footer d-flex justify-content-center'>
    <ul className="ul-foot">
        <li>
            <a href="https://github.com/Kerby00">
            <button className='links rounded-pill'>GitHub</button>
            </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/benjamin-kerby/">
            <button className=' links rounded-pill'>LinkedIn</button>
            </a>
        </li>
        <li>
        <a href="https://twitter.com/kerby3000">
            <button className='links rounded-pill'>Twitter</button>
            </a>
        </li>
    </ul>
</div>

    )
}

export default Footer;