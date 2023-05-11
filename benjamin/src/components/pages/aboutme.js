import React from 'react';
import '../styles/style.css';
import pfp from '../../images/pfppfpfp.jpg';


const AboutMe = () => {
    return (
        <div className='d-flex justify-content-center page-pos'>
            <div className='d-inline-flex p-2 pages '>
                <ul className='text-light about'>
                    <li>
                <p className='text-light about'>Hi! I'm a 22-year-old, circa 2000, who lives and works in the heart of downtown Salt Lake City, Utah. I have a beautiful Siamese named Giuseppe, whom I love dearly. I'm music-oriented, artistically obsessed, and know how to make a mean cup of Joe! I enjoy spending my days on spontaneous adventures, hanging with friends, playing fighting games, or laying back and reading manga. I would consider myself extremely well-rounded. An enjoyer in countless walks of life. Holding high value in myself and my loved ones, I always try to do my best for my inner circle. Goofy Goober Rock</p>
                </li>
                </ul>
                {/* <div className='pfp'>
                    <img className='pic' src={pfp} alt='' />
                </div>
                <div className='pfp'>
                    <img className='pic' src={pfp} alt='' />
                </div> */}
            </div>
            <div className='pfp'>
                    <img className='pic' src={pfp} alt='' />
                </div>
                <div className='pfp'>
                    <img className='pic' src={pfp} alt='' />
                </div>
        </div>
    )
}

export default AboutMe;
