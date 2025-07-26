import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
      <Link to={'/'} className='h-full'>
          <img src={"/logo/logo.svg"} className='h-8 sm:h-12' alt="logo img" />
    </Link>
  )
}

export default Logo