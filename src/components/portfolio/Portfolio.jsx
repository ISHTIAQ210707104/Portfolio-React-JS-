import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/social.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Portfolio (React JS)',
    github: "https://github.com/ISHTIAQ210707104"
  },
  {
    id:2,
    image: IMG2,
    title: 'Portfolio (JavaScript)',
    github: "https://github.com/ISHTIAQ210707104/Portfolio-Vanila-JavaScript-"
  },
  {
    id:3,
    image: IMG8,
    title: 'Social Media',
    github: "https://github.com/ISHTIAQ210707104/Social-Media"
  },
  {
    id:4,
    image: IMG3,
    title: 'Netflix clone',
    github: "https://github.com/ISHTIAQ210707104/Netflix-clone-"
  },
  {
    id:5,
    image: IMG4,
    title: 'Zomato colnet',
    github: "https://github.com/ISHTIAQ210707104/Zomato-clone-"
  },
  {
    id:6,
    image: IMG5,
    title: 'Sudoku Solver',
    github: "https://github.com/ISHTIAQ210707104/Sudoku"
  },
  {
    id:7,
    image: IMG6,
    title: 'Rock Paper Scissors',
    github: "https://github.com/ISHTIAQ210707104/Rock_Paper_Scissors"
  },
  {
    id:8,
    image: IMG7,
    title: 'Tic Tac Toe',
    github: "https://github.com/ISHTIAQ210707104/Tic_Tac_Toe"
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
       {
        data.map(({id, image, title, github})=>{
          return(
            <article key={id} className='portfolio_item'>
             <div className='portfolio_item-image'>
              <img src={image} alt="title"/>
             </div>
            <h3>{title}</h3>
            <a href={github} className='btn btn-primary' target='_blank'>Github</a>
       </article>
          )
        })
       }      
      </div>
    </section>
  )
}

export default Portfolio