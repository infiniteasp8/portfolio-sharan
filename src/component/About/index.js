import './index.scss';
import {useEffect, useState} from 'react';
import React from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 , faReact, faNodeJs,faGitAlt,faCss3,faJsSquare} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
const About = () => {
    const [letterClass, setLetterClass] = React.useState('text-animate')
    useEffect(() => {

        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    return(
        <>
         <div className='container about-page'>
         <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A','b','o','u','t',' ', 'M','e']} 
                idx={15}
                /> 
            </h1>
                <p>
                Coding and development are my passion. I find joy in crafting efficient and elegant solutions to complex problems.
                </p>
                <p>
                I am confident in my coding skills and regular work task. I believe that everything can be learnt  practice.
                </p>
                <p>
                I approach my work with a humble and professional attitude.
                </p>
                  
         </div>

         <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                   <FontAwesomeIcon icon={faReact} color="#DD0031" /> 
                </div>
                <div className="face2">
                   <FontAwesomeIcon icon={faHtml5} color="#F06529" /> 
                </div>
                <div className="face3">
                   <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> 
                </div>
                <div className="face4">
                   <FontAwesomeIcon icon={faNodeJs} color="#5ED4F4" /> 
                </div>
                <div className="face5">
                   <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> 
                </div>
                <div className="face6">
                   <FontAwesomeIcon icon={faGitAlt} color="#EC4d28" /> 
                </div>
                
            </div>
         </div>
         </div>
         <Loader type="pacman"/>
         </>
    )
}

export default About