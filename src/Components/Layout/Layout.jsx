import React from 'react'
import Navbar from '../NavbarSection/navbar'
import Footer from '../FooterSection/Footer'

function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className='content'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout