import React from 'react';
import './styles/style.css';
import Typewriter from 'typewriter-effect'

const Intro = () => {
    return (
        
            <div className='hello'>
            <Typewriter
            options={{cursor: '|'}}
            onInit={(typewriter) => {
                typewriter
                .pauseFor(1000)
                .changeDelay(75)
                .typeString('Hello')
                .pauseFor(500)
                .deleteChars(5)
                .changeDeleteSpeed(20)
                .changeDelay(75)
                .typeString('My name is Ben')
                .pauseFor(500)
                .deleteChars(7)
                .changeDeleteSpeed(20)
                .deleteChars(7)
                .changeDelay(75)
                .typeString('This is my Portfolio')
                .pauseFor(500)
                .deleteChars(10)
                .changeDeleteSpeed(20)
                .deleteChars(10)
                .changeDelay(75)
                .typeString("Thanks for looking")
                .pauseFor(500)
                .deleteChars(18)
                .changeDeleteSpeed(20)
                .changeDelay(50)
                .typeString('( ˘ ³˘)♥')
                .pauseFor(1500)
                .deleteChars(8)
                .start()

            }}
            />
        </div>

       

    )
};

export default Intro;