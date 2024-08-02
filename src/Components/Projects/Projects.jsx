import React from 'react'
import './Projects.css'
import Portfolio1 from '../../assets/portfolio 1.png'
import Portfolio3 from '../../assets/portfolio 3.png'
import Portfolio4 from '../../assets/portfolio 4.png'
import Portfolio5 from '../../assets/portfolio 5.png'
import Portfolio6 from '../../assets/portfolio 6.png'
import Portfolio7 from '../../assets/portfolio 8.png'



const Projects = () => {
  return (
    <section id='projects'>

       <h2 className="projectsTitle">My Projects</h2>
       <span className="projectsDes"> 
       I'm a front-end developer who creates the visual and interactive 
        parts of websites, using HTML, CSS, JavaScript, React.js,
         and tools like Next.js, React Native,
       </span>
     <div className="projectsImgs">
       <img src={Portfolio1} alt="" className="projectsImg" />
       <img src={Portfolio3} alt="" className="projectsImg" />
       <img src={Portfolio4} alt="" className="projectsImg" />
       <img src={Portfolio5} alt="" className="projectsImg" />
       <img src={Portfolio6} alt="" className="projectsImg" />
       <img src={Portfolio7} alt="" className="projectsImg" />
       

     </div>
     <button className="projectsBtn">see More</button>
    </section>
  )
}

export default Projects