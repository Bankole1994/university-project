import React, { useRef } from 'react'
import '../testimonial/testimonial.css'
import next from '../../assets/‫image/forward-icon.png';
import back from '../../assets/‫image/back-icon.png';
import user1 from '../../assets/‫image/user1.jpg';
import user2 from '../../assets/‫image/user2.jpg';
import user3 from '../../assets/‫image/user3.jpg';
import user4 from '../../assets/‫image/user4.jpg';



export function Testimonial() {

    const slider = useRef()
    let tx = 0;

     
    const slideForward = () => {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform =`translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0 ) {
            tx += 25;
        }
        slider.current.style.transform =`translateX(${tx}%)`
    }
   
  return (
    <div className='testimonials'>
         <img onClick={slideBackward} className='back-icon' src={back}alt="" />
         <img onClick={slideForward} className='next-icon' src={next}alt="" />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user1}alt="" />
                        <div>
                            <h3>Aminat Sulu</h3>
                            <span>Victoria Island, Lagos</span>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Similique repellat non perferendis nulla ab voluptatum 
                        accusantium, necessitatibus qui enim corrupti. Iure omnis 
                        ad dolorem reprehenderit officia magni distinctio sed porro?
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user2}alt="" />
                        <div>
                            <h3>John Micheal</h3>
                            <span>Victoria Island, Lagos</span>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Similique repellat non perferendis nulla ab voluptatum 
                        accusantium, necessitatibus qui enim corrupti. Iure omnis 
                        ad dolorem reprehenderit officia magni distinctio sed porro?
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user3}alt="" />
                        <div>
                            <h3>Mustapha Bankole</h3>
                            <span>Victoria Island, Lagos</span>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Similique repellat non perferendis nulla ab voluptatum 
                        accusantium, necessitatibus qui enim corrupti. Iure omnis 
                        ad dolorem reprehenderit officia magni distinctio sed porro?
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user4}alt="" />
                        <div>
                            <h3>Nifemi Balogun</h3>
                            <span>Victoria Island, Lagos</span>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Similique repellat non perferendis nulla ab voluptatum 
                        accusantium, necessitatibus qui enim corrupti. Iure omnis 
                        ad dolorem reprehenderit officia magni distinctio sed porro?
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

