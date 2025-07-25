import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>DefaultLayout

      {/* children */}
      <Outlet />
    </div>
  )
}

export default DefaultLayout