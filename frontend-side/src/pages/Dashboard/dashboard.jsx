import React from 'react'
import Navbar from '../components/TopMenu/Navbar'
import Sidebar from '../components/Sidebar-menu/Sidebar'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'

const dashboard = () => {
  return (
    <>
    < Navbar />
    <Sidebar />
    <Content />
    <Footer />
    </>
  )
}

export default dashboard