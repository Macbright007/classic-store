import React from 'react'
// import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from '../subcomponents/Header'

const Main = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Header />

        <Outlet />

        <Footer />
    </div>
  )
}

export default Main