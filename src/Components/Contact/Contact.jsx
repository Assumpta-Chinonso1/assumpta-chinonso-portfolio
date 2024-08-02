import React, { useRef } from 'react'
import './Contact.css'
import FB from '../../assets/facebook-removebg-preview.png'
import TW from '../../assets/twitter-removebg-preview.png'
import LD from '../../assets/LinkedLin-removebg-preview.png'
import IG from '../../assets/instagram-removebg-preview.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fs7mweg', 'template_ydlbdnr', form.current, {
        publicKey:'rN3A4LWwFZNp9XtWf5Xq4',
      })
      .then ((result) => {
          console.log(result.text);
          e.target.reset()
          alert('Email sent!')
        },
        (error) => {
          console.log( error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
        <div id="contact">
        <h1 className="contactPageTitle">
          Contact Me
        </h1>
        <span className="contactDecs">
          Please fill in the form to discuss any work opportunity with me
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your name' name='your_name' />
          <input type="text" className="email" placeholder='Your Email' name='your_email'/>
          <textarea className='msg' name="message" cols="5" placeholder='Your Message'></textarea>
          <button type='submit' value="send" className="submitBtn">Submit</button>
             <div className="links">
              <img src={FB} alt="" className="link" />
              <img src={TW} alt="" className="link" />
              <img src={LD} alt="" className="link" />
              <img src={IG} alt="" className="link" />
             </div>
        </form>
        </div>

    </section>
  )
}

export default Contact