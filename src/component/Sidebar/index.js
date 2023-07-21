import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoAsp from '../../assets/photos/infinity.logo-removebg-preview.png'
import inifinitylogo from '../../assets/photos/Anant_Sublogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser,faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub
  } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  

  return(
   <div className='nav-bar'>
    <Link className='logo' to='/'>
        <img className='' src={LogoAsp} alt="inifnity" />
        <img className = 'sub-logo'src={inifinitylogo} alt="logo" />

    </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact ="true" onClick={() => setShowNav(false)} activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact ="true" activeclassname="active" onClick={() => setShowNav(false)} className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact ="true" activeclassname="active"  onClick={() => setShowNav(false)}className="portfolio-link" to="/portfolio">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact ="true" activeclassname="active" onClick={() => setShowNav(false)} className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
        <FontAwesomeIcon
        onClick={() => setShowNav(false)}
        icon={faClose} 
        color='#ffd700'
        size="3x"
        className='close-icon'
        />
    </nav>
    <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/infiniteasp8/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/infiniteasp8"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        
      </ul>

      <FontAwesomeIcon 
       onClick={() => setShowNav(true)}
       icon={ faBars}
       color="#ffd700"
       size="3x"
       className='hamburger-icon'
       />
   </div>
)}

export default Sidebar;