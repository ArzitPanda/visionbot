import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

const Layout = ({sideBar,children}) => {
  return (
    <div>
        <NavBar/>
        {sideBar && <SideBar/>}
        {children}
    </div>
  )
}

export default Layout