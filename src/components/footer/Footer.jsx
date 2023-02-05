import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <section id='footer'>
      <a href="#" className='footer_logo'>Ishtiaq</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://linkedin.com"><FaLinkedin/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; ISHTIAQ AHMED. All rights reserved.</small>
      </div>
    </section>
  )
}

export default Footer