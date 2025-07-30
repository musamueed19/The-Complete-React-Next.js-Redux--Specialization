import React from 'react'
import { Outlet } from "react-router-dom"

import Header from "./components/Header"

const RootLayout = () => {
  return (
    <div>

      <Header />
      


      {/* children */}
      <Outlet />
    </div>
  )
}

export default RootLayout