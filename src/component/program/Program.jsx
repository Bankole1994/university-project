 import React from 'react'
 import '../program/Program.css'
 import undergraduate from '../../assets/‫image/undergraduate.jpg'
 import master from '../../assets/‫image/Master.jpg'
 import phd from '../../assets/‫image/PHD.jpg'

 import undergra from '../../assets/‫image/under-icon.png'
 import masterDe from '../../assets/‫image/master-icon.png'
 import phdICON from '../../assets/‫image/phd-icon.png'

 export const Program = () => {
   return (
     <div className='programs'> 
     <div className="program">
        <img src={undergraduate} alt="" />
        <div className="caption">
            <img src={undergra} alt="" />
            <p>Undergraduate Program</p>
        </div>
     </div>

     <div className="program">
        <img src={master} alt="" />
        <div className="caption">
            <img src={masterDe} alt="" />
            <p>Master Degree Program</p>
        </div>
     </div>

     <div className="program">
        <img src={phd} alt="" />
        <div className="caption">
            <img src={phdICON} alt="" />
            <p>Phd Program</p>
        </div>
     </div>
       
     </div>
   )
 }
 

 