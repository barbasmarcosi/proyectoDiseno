import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logo.jpg'

const Header = () => {
  return (
    <div className='Header'>
      
      <div className="Header-content">
        <Link className='Header-link' to='/'>
          <img className='Logo-image' src={Logo} alt="Imagen del Logo" />
        </Link>
        <h1 className='Header-title'>La empanaderia</h1>
      </div>
      <div className='burger'>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Header