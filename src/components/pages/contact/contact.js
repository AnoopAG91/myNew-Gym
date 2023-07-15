import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import './contact.css'
function Contact() {
  return (
    <div>
        <Header/>
        <div className='contact-wrapper'>
          <div className='contact-header'>
            <h1>Contact Us</h1>
            </div>
            <h1>Touch To Connect With Us</h1>
          <div className='contact-main'>
          
            <div className='map'></div>
            <div className='form'>
              <form action='https://formspree.io/f/xaygyakb' method='POST'>
              <input type='email' name='email' placeholder='enter email'></input> 
              <input type='mobile' name='mobile' placeholder='enter mobile'></input>
              <input type='password' name='password' placeholder='enter password'></input> 
              <textarea name='message' placeholder='Type Your Message'></textarea>
              <button type='submit'>Send Message</button>  
              </form>
            </div>  
           
          </div>  
        </div>

        <Footer/>
    </div>
  )
}

export default Contact