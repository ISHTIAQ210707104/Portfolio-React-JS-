import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l8czpvc', 'template_q7x04wf', form.current, 'hAs--9csmRvENUXVG')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>

          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>ishtiaq.ahmed181034@gmail.com</h5>
            <a href="mailto:ishtiaq.ahmed181034@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Facebook</h4>
            <h5>Ishtiaq Ahmed</h5>
            <a href="https://m.me/ishtiaq.ahmed181034" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>BsWhatsapp</h4>
            <h5>Ishtiaq</h5>
            <a href="https://api.whatsapp.com/send?phone+905510975390" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact