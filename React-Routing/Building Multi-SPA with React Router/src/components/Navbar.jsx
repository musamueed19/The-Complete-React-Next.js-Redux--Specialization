import React from 'react'
import { Link } from 'react-router-dom'


import {navItems} from '../constants/constant'

const Navbar = () => {
  return (
      <nav>
          <div className='flex gap-x-3'>
              {
                  navItems?.map((item, index) => (
                      <Link key={index} to={item.to} className='navLink'>{item.title}</Link>
                  ))
              }
              
        </div>
          
    </nav>

  )
}

export default Navbar