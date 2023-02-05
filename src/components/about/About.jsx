import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
/*
import {FaAward} from 'react-icons/fa'
import {FaAward} from 'react-icons/fa'
*/
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
         <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image"/>
          </div>
         </div>

         <div className='about_content'>
           <div className='about_cards'>

             <article className='about_card'>
             <FaAward className='about_icon'/>
               <h4>Clubbing</h4>
               <small>8+ Years Working</small>
             </article>

             <article className='about_card'>
             <FaAward className='about_icon'/>
               <h4>Portfolio</h4>
               <small>10+ projects </small>
             </article>

             <article className='about_card'>
             <FaAward className='about_icon'/>
               <h4>Languages</h4>
               <small>4 foreign language</small>
             </article>

           </div>

           <p>I am a hardworking and ambitious individual with a great passion for Engineering faculty. I have a clear, logical mind with a practical approach to problem solving and a drive to see things through to completion. I am eager to learn, I enjoy overcoming challenges and I have a genuine interest in Computer Science & Engineering. I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with others easily.
           </p>

           <a href="#contact" className='btn btn-primart'>Lets talk</a>
          
         </div>
        
      </div>
    </section>
  )
}

export default About