import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../contact/contact.css'
import email from '../../assets/‫image/email.png';
import { ContactHtml } from './ContactHtml';

export function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
 

    try {
      const response = await fetch('https://formspree.io/f/xpwaawnw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
         
        setFormData({ name: '', phone: '', message: '' });
        toast.success('Form submitted successfully!')
      } else {
         toast.error('Form submission failed. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='contact-col'>
      <ContactHtml
         email={email}
         ToastContainer={ToastContainer}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         formData={formData}
         isSubmitting={isSubmitting}
      />
    </div>
  )
}


