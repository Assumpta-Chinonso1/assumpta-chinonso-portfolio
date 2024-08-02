import React from 'react'
import './Intro.css'
import bg from '../../assets/piff.png'
import { Link } from 'react-scroll'
import HireMe from '../../assets/sutttt.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
       <span className="hello"> Hello, </span> 
        <span className="introText">I'm <span className="introName">
        Assumpta Chinonso</span>  <br />A front-end developer</span>
       
       <p className="intropara">I am a skilled web developer with experience in 
        <br />creating  visual attractive User Interface.</p>
       <Link><button className="btn">
         <img src={HireMe} alt="Hire me" className='btnImg'/> Hire Me
        </button></Link>
        </div>
        
        <img src={bg} alt="profile" className='introImage' />
        
        </section>
  )
}

export default Intro