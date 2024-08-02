import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logos.png';
import ContactImg from '../assets/contactt.png';
import { Link } from 'react-scroll';
import menu from '../../src/assets/navIcon-removebg-preview.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState (false)
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo'/>

      <div className="desktopMenu">
        <Link 
          activeClass='active'
          to='intro' 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="desktopMenuListItems"
        >
          Home
        </Link>

        <Link 
          activeClass='active'
          to='skills' 
          spy={true} 
          smooth={true}
          offset={-100} 
          duration={500} 
          className="desktopMenuListItems"
        >
          About
        </Link>

        <Link 
          activeClass='active'
          to='projects' 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="desktopMenuListItems"
        >
          Portfolio
        </Link>

        <Link 
          activeClass='active'
          to='contactPage' 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="desktopMenuListItems"
        >
          Contact
        </Link>
      </div>

      <button 
        className="desktopMenuBtn"
        onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
      >
        <img src={ContactImg} alt="Contact me" className="desktopMenuImg" />
        Contact Me
      </button>

      
      <img src={menu} alt="logo" className='MobileMenu' onClick={()=> setShowMenu(!showMenu)}/>

      <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
        <Link 
          activeClass='active'
          to='intro' 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="listItems"
          onClick={()=>setShowMenu(false)}
        >
          Home
        </Link>

        <Link 
          activeClass='active'
          to='skills' 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="listItems"
          onClick={()=>setShowMenu(false)}
        >
          About
        </Link>

        <Link 
          activeClass='active'
          to='projects' 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="listItems"
          onClick={()=>setShowMenu(false)}
        >
          Portfolio
        </Link>

        <Link 
          activeClass='active'
          to='contactPage' 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="listItems"
          onClick={()=>setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    


    </nav>
  );
}

export default Navbar;

