import React from 'react';
import musinion from '../../images/musinion.png';
import MDGen from '../../images/MDGen.png';
import Rainy from '../../images/rainy.jpg';
import ecommerce from '../../images/ecommerce.png';
import tracker from '../../images/tracker.png';
import note from '../../images/Note.png';
import { GoMarkGithub } from 'react-icons/go';


const Portfolio = () => {
    return (
        <div className='d-flex justify-content-center page-pos'>
            <div className='d-inline-flex p-2 pages flex-column'>
                <div className='projs'>
                    <div>
                        <img className='projsCap' src={musinion} alt='' />
                        <a href='https://github.com/Teaom/Musinion' target='blank' ><h1 className='projsP' ><GoMarkGithub /></h1></a>
                    </div>
                    <div>
                        <img className='projsCap' src={MDGen} alt='' />
                        <a href='https://github.com/Kerby00/README-generator' target='blank' ><h1 className='projsP' ><GoMarkGithub /></h1></a>
                    </div>
                    <div>
                        <img className='projsCap' src={Rainy} alt='' />
                        <a href='https://github.com/Kerby00/rainy-day' target='blank' ><h1 className='projsP' ><GoMarkGithub /></h1></a>
                    </div>
                </div>
                <div className='projs'>
                    <div>
                        <img className='projsCap' src={ecommerce} alt='' />
                        <a href='https://github.com/Kerby00/ecommerce-back-end' target='blank' ><h1 className='projsP' ><GoMarkGithub /></h1></a>
                    </div>
                    <div>
                        <img className='projsCap' src={tracker} alt='' />
                        <a href='https://github.com/Kerby00/Employee-Tracker' target='blank' ><h1 className='projsP' ><GoMarkGithub /></h1></a>
                    </div>
                    <div>
                        <img className='projsCap' src={note} alt='' />

                        <a href='https://github.com/Kerby00/NOTETAKER' target='blank' ><h1 className='projsP' ><GoMarkGithub /></h1></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;