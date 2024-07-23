import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../sidebar/SideBar'

const UserLayout = ({children, title}) => {
  return (
    <div className='d-flex'>
            <div className='side-menu bg-dark text-light'>
                <SideBar/>
            </div>
            <div className='right-content w-100'>
            <Header/>
            <div className="p-3">
                <h4>{title}</h4>
                <hr />
            </div>
    
    <main className="main" > {children}</main>


    <Footer/>
            </div>
      
      
    </div>
  )
}

export default UserLayout;