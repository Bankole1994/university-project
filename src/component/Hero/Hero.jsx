import React from 'react'
import '../Hero/hero.css'

const Hero = () => {
  return (
    <div className='hero general-container'>
        <div className='hero-text'>
            <h1>We Ensure better education for a better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates expedita fugiat magni porro doloremque maiores quod nihil repellat, 
                pariatur cum perferendis, nulla assumenda quasi temporibus nostrum a dignissimos. 
                Tenetur, delectus!
            </p>
            <button className='btn-gen'>Explore more <i className="bi bi-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default Hero
