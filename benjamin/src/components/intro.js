import React from 'react';
import './styles/style.css';
import Typewriter from 'typewriter-effect'
import { useState, useEffect} from 'react';

const Intro = () => {

useEffect(() => {
    setTimeout(() => {
        document.querySelector("#hello").classList.add('fade');
    }, 11500)
})

    return (
        
            <div className='' id='hello'>
            <Typewriter
            options={{cursor: '|'}}
            onInit={(typewriter) => {
                typewriter
                .pauseFor(1000)
                .changeDelay(75)
                .typeString('Hello!')
                .pauseFor(700)
                .deleteChars(6)
                .changeDeleteSpeed(20)
                .changeDelay(75)
                .typeString('I appreciate your time')
                // .pauseFor(500)
                // .deleteChars(29)
                // .changeDeleteSpeed(20)
                // .deleteChars(7)
                // .changeDelay(75)
                // .typeString('I appreciate you...')
                .pauseFor(1000)
                .deleteChars(22)
                .changeDeleteSpeed(20)
                .deleteChars(10)
                .changeDelay(75)
                // .typeString("Thanks for looking")
                // .pauseFor(500)
                // .deleteChars(18)
                // .changeDeleteSpeed(20)
                // .changeDelay(50)
                .typeString('( ˘ ³˘)♥')
                .pauseFor(1000)
                .deleteChars(8)
                .start()

            }}
            />
        </div>

       

    )
};

export default Intro;