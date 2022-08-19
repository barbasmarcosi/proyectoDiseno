import React from 'react'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'

const Layout = ({ children }) => {
    return (
        <div className='Layout'>
            <Header />
            <NavBar />
            <div className="Main">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout