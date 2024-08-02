import React from 'react'
import './Skills.css'
import Basic from '../../assets/HTML&CSS.png'
import adanvaced from '../../assets/JAVASC.png'
import Manga from '../../assets/manag.png'
import Comni from '../../assets/coum.png'
import Reacts from '../../assets/REACTTT.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillSub">My Skils</span>
        <span className="skilldecs">
        I'm a front-end developer who creates the visual and interactive 
        parts of websites, using HTML, CSS, JavaScript, React.js,
         and tools like Next.js, React Native, 
         and Create React App to build user interfaces that look good 
         and work well on any device. 
        I also have skills in good communication and time management.

        </span>

        <div className="skillsList">
            <div className="skillListImg">
                <img src={Basic} alt="HMTL$CSS" className='basic' />
                <div className="skillListText">
                    <h2>HTML/CSS</h2>
                    <p> I use HTML (HyperText Markup Language) and  CSS (Cascading Style Sheets)  
                        to define the structure 
                        content of web pages, and to control the visual appearance and layout of UI to 
                        a create well-structured and visually appealing
                         websites that are both functional and aesthetically pleasing. </p>
                </div>
            </div>

            <div className="skillListImg">
                <img src={adanvaced} alt="adanvaced" className='basic' />
                <div className="skillListText">
                    <h2>JavaScript</h2>
                    <p>JavaScript (JS) is a programming language I use to make websites interactive. It works in web browsers and can also be used for server-side programming and mobile apps.</p>
                </div>
            </div>

            <div className="skillListImg">
             <img src={Reacts} alt="React" className='basic' />
                <div className="skillListText">
                    <h2>React.js/Next.js/React Native</h2>
                 <p>React is a JavaScript library I use to build user interfaces 
                        for websites and mobile apps. It helps create interactive 
                        elements and manage data efficiently. Tools like Next.js,
                         React Native, and Create React App extend its capabilities
                          for server-side rendering,
                         mobile development, and quick project setup, respectively.</p>
                </div>
            </div>

            <div className="skillListImg">
                <img src={Manga} alt="Manga" className='basic' />
                <div className="skillListText">
                    <h2>Time Management</h2>
                    <p>Time management is also one skill that i possess which is so 
                         important for a frontend developer working with teams. 
                         I prioritize tasks, use tools to work efficiently, 
                         and communicate regularly with teammates to stay on schedule.</p>
                </div>
            </div>

            <div className="skillListImg">
                <img src={Comni} alt="Comni" className='basic' />
                <div className="skillListText">
                    <h2>Good Comunication</h2>
                    <p>I use good communication skills to work well with teams as a frontend developer.
                         I ensure my ideas are clear, 
                         listen carefully to others, 
                         and collaborate effectively to keep projects running smoothly.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills