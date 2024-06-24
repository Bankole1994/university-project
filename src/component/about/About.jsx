import React from 'react'
import '../about/about.css'
import about from '../../assets/‫image/about.jpg';

export function About() {
  return (
    <div className='about'>
       <div className="left-about">
         <img className='about-image' src={about} alt="" />
       </div>
       <div className="right-about">
         <h3>ABOUT UNIVERSITY</h3>
         <h2>Nurturing Tomorrow's Leaders Today</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptatibus unde eos quam dolorum reprehenderit rerum 
            olorem nostrum magnam, ea placeat illo nisi distinctio 
            veniam tempore eaque corporis molestias perferendis cumque!
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptatibus unde eos quam dolorum reprehenderit rerum 
            olorem nostrum magnam, ea placeat illo nisi distinctio 
            veniam tempore eaque corporis molestias perferendis cumque!
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptatibus unde eos quam dolorum reprehenderit rerum 
            olorem nostrum magnam, ea placeat illo nisi distinctio 
            veniam tempore eaque corporis molestias perferendis cumque!
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptatibus unde eos quam dolorum reprehenderit rerum 
            olorem nostrum magnam, ea placeat illo nisi distinctio 
            veniam tempore eaque corporis molestias perferendis cumque!
        </p>
       </div>
    </div>
  )
}


