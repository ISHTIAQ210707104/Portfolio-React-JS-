import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/leetcode.png'
import AVTR2 from '../../assets/codeforces.png'
import AVTR3 from '../../assets/github.jpg'
import {FaLaptopCode} from 'react-icons/fa'




const Testimonials = () => {
  return (
    <section id='testimonials'>

    <h5>My Coding Areas</h5>
      <div className='container testimonials_container'>
        <article className='portfolios'>
        <div className="portfolio-item">
            <div className="image">
            <img src={AVTR1}/>
            </div>
            <div className="hover-items">
                <h3>Source</h3>
                <div className="icons">
                    
                    <a href="https://leetcode.com/Ishtiaq_Ahmed/" className="icon" target='_blank'>
                        <FaLaptopCode id='i'/>
                    </a>
                </div>
            </div>
        </div>
        <div className="portfolio-item">
            <div className="image">
              <img src={AVTR2}/>
            </div>
            <div className="hover-items">
                <h3>Source</h3>
                <div className="icons">
                    
                    <a href="https://codeforces.com/profile/Ishtiaq_Ahmed" className="icon" target='_blank'>
                     <FaLaptopCode id='i'/>
                    </a>
                </div>
            </div>
        </div>
        <div className="portfolio-item">
            <div className="image">
            <img src={AVTR3}/>
            </div>
            <div className="hover-items">
                <h3>Source</h3>
                <div className="icons">
                    <a href="https://github.com/ISHTIAQ210707104" className="icon" target='_blank'>
                     <FaLaptopCode id='i'/>
                    </a>
                
                </div>
            </div>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials