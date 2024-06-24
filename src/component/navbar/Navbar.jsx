import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-scroll';
import '../navbar/navbar.css'
import Logo from '../../assets/‫image/Logo.png'

 export const Navbar = () => {
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 300 ? setSticky(true) : setSticky(false)
        })
    }, [])
    
    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current.style.right="0"
    }

    const closeMenu = () => {
        menuRef.current.style.right="-180px"
    }
    
  return (
      <nav className={`general-container ${sticky? 'dark-nav' : '' }`}>
        <img className='logo' src={Logo} alt="" />
        <i onClick={openMenu} className="bi bi-list"/>
        <ul ref={menuRef} className='nav-menu'>
            <i onClick={closeMenu} class="bi bi-x-circle-fill"/>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn-gen'>Contact Us</button></Link></li>
        </ul>
      </nav>
  )
}


