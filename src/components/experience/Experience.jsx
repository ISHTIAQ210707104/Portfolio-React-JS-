import React from 'react'
import './experience.css'
import {FaUserCheck} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Website Development</h3>
          <div className='experience_content'>

            <article className='experience_details'>
              <FaUserCheck className='experience_details-icon'/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <FaUserCheck className='experience_details-icon'/>
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className='experience_details'>
              <FaUserCheck className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <FaUserCheck className='experience_details-icon'/>
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        <div className='experience_backend'>
        <h3>Programming Languages</h3>
        <div className='experience_content'>


      <article className='experience_details'>
        <FaUserCheck className='experience_details-icon'/>
        <div>
          <h4>C</h4>
          <small className='text-light'>Experienced</small>
        </div>
      </article>

      <article className='experience_details'>
              <FaUserCheck className='experience_details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
      </article>

      <article className='experience_details'>
              <FaUserCheck className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
      </article>

      <article className='experience_details'>
              <FaUserCheck className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
      </article>

      

        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience