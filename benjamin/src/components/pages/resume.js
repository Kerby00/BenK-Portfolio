import React from 'react';

const Resume = () => {
    return (
        <div className='d-flex justify-content-center page-pos'>
            <div className='d-inline-flex p-2 pages'>
                <div className='summary'>
                    <h4>Summary</h4>
                    <p> I'm a Jr. Developer looking to get into the coding industry. I've just finished up some schooling and looking to leave my current position at 'Toasters'. I'm extremely hard working and adaptable. I'm always looking for ways to learn and do more. My most desired position would be one that allows me strengthen my current skills. Learn new skills, and grow in a company/network. </p>
                </div>
                <div className='p-5'>
                    <div className='text-light'>
                        <h4>Work History</h4>
                        <div className='p-2'>
                            <h5>&#9749; Toasters</h5>
                            <p>Deli Assistant || April 2021 - Current</p>
                            <h5>&#128181; Kroger</h5>
                            <p> E-Commerce || February 2020 - March 2021 </p>
                            <h5>&#129386; Subway</h5>
                            <p>Assistant Manager || December 2018 - June 2019 </p>
                        </div>
                    </div>
                    <div className='educate text-light'>
                        <h4>Education</h4>
                        <div className='educate'>
                            <h5> &#127891; University of Utah: Coding bootcamp Certifaction</h5>
                            <div className='skills'>
                                <div className='gen skills'>
                                    <h6>General Skills:</h6>
                                    <ul className='text-light gen'>
                                        <li>
                                            <p>Friendly</p>
                                            <p>Outgoing</p>
                                            <p>Hard Working</p>
                                            <p>Optimistic</p>
                                            <p>Resilient</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className='code'>
                                    <h6 className='code'>Coding Skills:</h6>
                                    <ul  className='code wrap'>
                                        <li>
                                            <p>React</p>
                                            <p>CSS/Bootstrap</p>
                                            <p>HandleBars</p>
                                            <p>SQL/ MongoDB</p>
                                            <p>Sequalize/Mongoose</p>
                                        </li>
                                        <li>
                                            <p>Express</p>
                                            <p>Node</p>
                                            <p>MERN</p>
                                            <p>OOP</p>
                                            <p>Git</p>
                                        </li>
                                        <li>
                                            <p>Debugging</p>
                                            <p>Pyhton</p>
                                            <p>JQuery</p>
                                            <p>Apollo</p>
                                            <p>GitHub</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Resume;