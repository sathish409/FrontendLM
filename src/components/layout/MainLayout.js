import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({children}) => {
  return (
    <div>
       {/* Header */}
       <Header/>
       {/* main page dynamic */}
       <main className="main" > {children}</main>

       {/* Footer */}
       <Footer/>
    </div>
  )
}

export default MainLayout