import LogoTitle from '../../assets/photos/Aletter.png';
import { Link } from 'react-router-dom';
import './index.scss';
import React, {useState,useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['n','a','n','t',' ','S','h','a','r','a','n','  ','P','a','n','d','e','y']
    const jobArray = ['W','e','b',' ', 'D','e','v','e','l','o','p','e','r','.']
    
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    
        return () => clearTimeout(idTimeOut);
      }, [])
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br /> 
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                
                </h1> 
                <h2> Frontend Developer / Coder  </h2>
                <Link to ="/contact" className='flat-button'>Contact me</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
    );
}
export default Home;