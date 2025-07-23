import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='nav'>
        <Link to="/home">Home</Link>
        <Link><input type="text" placeholder='search' /></Link>
    </div>
  )
}

export default Header