import React from 'react'
import '../campus/campus.css'
import campus1 from '../../assets/‫image/campus1.jpg';
import campus2 from '../../assets/‫image/campus2.jpg';
import campus3 from '../../assets/‫image/campus3.jpg';
import campus4 from '../../assets/‫image/campus4.jpg';

export function Campus() {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={campus1}alt="" />
            <img src={campus2}alt="" />
            <img src={campus3}alt="" />
            <img src={campus4}alt="" />
        </div>
        <button className='btn-gen dark-btn'>See more here <i className="bi bi-arrow-right"></i></button>
      
    </div>
  )
}

