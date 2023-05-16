import React from 'react';
import '../styles/style.css';
import stunna from '../../images/stunna.JPG';
import stunna2 from '../../images/stunna2.jpg';


const AboutMe = () => {
    return (
        <div className='d-flex justify-content-center page-pos'>

            <div className='d-inline-flex p-2 pages '>
                <div className='text-light about'>
                    
                <p className='text-light aboutP'>Hi! I'm a 22-year-old, circa 2000, who lives and works in the heart of downtown Salt Lake City, Utah. I have a beautiful Siamese named Giuseppe, whom I love dearly. I'm music-oriented, artistically obsessed, and know how to make a mean cup of Joe! I enjoy spending my days on spontaneous adventures, hanging with friends, playing fighting games, or laying back and reading manga. I would consider myself extremely well-rounded. An enjoyer in countless walks of life. Holding high value in myself and my loved ones, I always try to do my best for my inner circle.</p>
                
            </div>
            <div className='d-inline-flex p-2 pics '>
            <div className='pfp1'>
                    <img className='pic1' src={stunna} alt='' />
                </div>
                <div className='pfp2'>
                    <img className='pic2' src={stunna2} alt='' />
                </div>
                </div>
                <div>
                    <ul className='hobs'>
                        <h4>Hobbies</h4>
                        <li>
                        <p>Fishing/Hiking</p>
                        <p>Painting/Illustration</p>
                        <p>Tattoos</p>
                        <p>Guilty Gear, Street Fighter (FGC)</p>
                        <p>Manga/Anime</p>
                        <p>Cooking</p>
                        <p>Music/Instruments</p>
                        <p>Thrifting</p>
                        <p>Coffee/Tea</p>

                        </li>
                    </ul>
                </div>
                </div>
        </div>
    )
}

export default AboutMe;
