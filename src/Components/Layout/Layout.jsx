import React from 'react'
import Navbar from '../NavbarSection/navbar'
import Footer from '../FooterSection/Footer'
import FloatingButton from '../FloatingButton/FloatingButton'

function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className='content'>
                {children}
            </div>
            <Footer />
            <FloatingButton />
        </div>
    )
}

export default Layout