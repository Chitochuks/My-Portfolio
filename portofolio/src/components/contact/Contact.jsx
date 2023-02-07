import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3h8pvdo', 'template_rb8r23t', form.current, '5jD7ZIjZfVo61F8BL')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>fayveechuks@gmail.com</h5>
            <a href="mailto:fayveechuks@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillTwitterCircle className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>CHITO</h5>
            <a href="https://twiiter.com/cleo_manroe" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+23490******</h5>
            <a href="https://api.whatsapp.com/send?phone+2348029259970" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact