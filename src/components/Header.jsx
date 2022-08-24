import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
        <Link className='Header-link' to='/'><h1 className='Header-title'>La empanaderia</h1></Link>
    </div>
  )
}

export default Header