import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio2.jpg'
import IMG2 from '../../assets/portfolio3.jpg'
import IMG3 from '../../assets/portfolio4.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>Crypto Currency</h3>
          <div  className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <h3>Cheetos Pizza</h3>
          <div  className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div  className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        {/* <div className='container portfolio_container'>
          {
            data.map(({id, image, title, Github, LiveDemo}) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                <div  className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={LiveDemo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
                </article>
              )
            })
          }
        </div> */}
      </div>
    </section>
  )
}

export default Portfolio