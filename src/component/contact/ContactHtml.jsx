import React from 'react'

export const ContactHtml = ({email, ToastContainer, handleChange,handleSubmit, formData, isSubmitting}) => {
  return (
    <div className='contact'>
    <div className="contact-col">
       <h3>Send us a message <img src={email} alt=""/></h3>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequatur 
         odio laboriosam nemo quasi ducimus blanditiis ut fugiat animi sint? Et 
         incidunt libero, at molestiae officia consequatur natus corporis assumenda.
       </p>
       <ul>
         <li><i className="bi bi-envelope-open-fill"></i>Contact@MustabUniversity.org</li>
         <li><i className="bi bi-phone-vibrate-fill"></i>+2348 124 837 041</li>
         <li><i className="bi bi-geo-alt-fill"></i>274, Lekki Epe Express Way, Lagos, Nigeria</li>
       </ul>

     </div>
     <div className="contact-col">
     <ToastContainer theme="dark"/>   
     <form onSubmit={handleSubmit} className="contact-form">
     <label htmlFor="name">Your name</label>
     <input
       type="text"
       name="name"
       value={formData.name}
       placeholder="Enter your name"
       onChange={handleChange}
       required
     />

     <label htmlFor="phone">Phone Number</label>
     <input
       type="tel"
       name="phone"
       value={formData.phone}
       placeholder="Enter your mobile number"
       onChange={handleChange}
       required
     />

     <label htmlFor="message">Enter your message</label>
     <textarea
       name="message"
       rows="6"
       value={formData.message}
       placeholder="Enter your message"
       onChange={handleChange}
       required
     />

     <button type="submit" className="btn-gen dark-btn" disabled={isSubmitting}>
       {isSubmitting ? 'Submitting...' : 'Submit Now'}
     </button>
   </form>
     </div>
   
 </div>
  )
}


