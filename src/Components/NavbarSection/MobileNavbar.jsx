import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import { motion } from 'framer-motion';
import { RiArrowDownSLine, RiCloseLine, RiMenuFill } from "react-icons/ri";

function MobileNavbar() {
    const [isActive, setIsActive] = useState('Home')
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='bg-dark-brown flex items-center justify-between p-5 fixed z-10 right-0 left-0'>
                <img
                    className='w-[50px] h-[50px] object-cover'
                    src='https://cdn-icons-png.flaticon.com/128/256/256661.png'
                    alt=''
                />
                <button className='text-cream text-2xl' onClick={() => setIsOpen(true)}><RiMenuFill /></button>
            </div>
            <motion.div
                initial={{ translateY: -1000 }}
                animate={{ translateY: isOpen ? 0 : -1000 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="fixed z-10 inset-0 max-h-[100vh] "
            >
                <div className='bg-light-cream h-[100vh] overflow-y-auto'>
                    <ul className='flex flex-col gap-5 justify-center items-center p-5'>
                        <li className='w-full flex justify-end text-2xl'>
                            <button onClick={() => { setIsOpen(false); setIsActive('') }}><RiCloseLine /></button>
                        </li>
                        <li className='w-[50px] flex justify-center mb-5'>
                            <img
                                className='w-[50px] h-[50px] object-cover'
                                src='https://cdn-icons-png.flaticon.com/128/256/256661.png'
                                alt=''
                            />
                        </li>
                        <li className='w-full flex justify-between'>
                            <NavLink onClick={(e) => { setIsActive(e.target.id); setIsOpen(false) }} id='Home' to='/' className={`${isActive === 'Home' ? 'text-light-brown' : 'text-dark-brown'}`}>
                                Home
                            </NavLink>
                        </li>
                        <li className='w-full flex justify-between'>
                            <NavLink onClick={(e) => { setIsActive(e.target.id); setIsOpen(false) }} id='Event' to='/events' className={`${isActive === 'Event' ? 'text-light-brown' : 'text-dark-brown'}`}>
                                Event
                            </NavLink>
                        </li>
                        <li className='w-full flex flex-col  justify-between'>
                            <button onClick={(e) => { isActive === 'Services' ? setIsActive('') : setIsActive(e.target.id) }} id='Services' className={`${isActive === 'Services' ? 'text-light-brown' : 'text-dark-brown w-full'} flex justify-between items-center`}>
                                Services
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: isActive === 'Services' ? 0 : 1 }}
                                    exit={{ y: 1 }}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                >
                                    {isActive === 'Services' ? null : <RiArrowDownSLine />}
                                </motion.div>
                            </button>
                            <Transition
                                show={isActive === 'Services' ? true : false}
                                enter="transition-transform duration-100 ease-out"
                                enterFrom="transform translate-y-full"
                                enterTo="transform translate-y-0"
                                leave="transition-transform duration-100 ease-in"
                                leaveFrom="transform translate-y-0"
                                leaveTo="transform translate-y-full"
                            >
                                <div className="bg-gray-200  mt-2">
                                    <ul className='flex flex-col gap-5  justify-center items-end'>
                                        <li className='flex'>
                                            <NavLink onClick={() => { setIsActive(''); setIsOpen(false) }} to='/donation' className='text-dark-brown hover:text-light-brown' >
                                                Donation
                                            </NavLink>
                                        </li>
                                        <li className='flex'>
                                            <NavLink onClick={() => { setIsActive(''); setIsOpen(false) }} to='/booking' className='text-dark-brown hover:text-light-brown' >
                                                Booking
                                            </NavLink>
                                        </li>
                                        <li className='flex'>
                                            <NavLink onClick={() => { setIsActive(''); setIsOpen(false) }} to='/magazine' className='text-dark-brown hover:text-light-brown' >
                                                Magazine
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </Transition>
                        </li>

                        <li className='w-full flex flex-col justify-between'>
                            <div onClick={(e) => { isActive === 'Media' ? setIsActive('') : setIsActive(e.target.id) }} id='Media' className={`${isActive === 'Media' ? 'text-light-brown' : 'text-dark-brown w-full'} flex justify-between items-center`}>
                                Media
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: isActive === 'Services' ? 0 : 1 }}
                                    exit={{ y: 1 }}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                >
                                    {isActive === 'Media' ? null : <RiArrowDownSLine />}
                                </motion.div>
                            </div>
                            <Transition
                                show={isActive === 'Media' ? true : false}
                                enter="transition-transform duration-100 ease-out"
                                enterFrom="transform translate-y-full"
                                enterTo="transform translate-y-0"
                                leave="transition-transform duration-100 ease-in"
                                leaveFrom="transform translate-y-0"
                                leaveTo="transform translate-y-full"
                            >
                                <div className="bg-gray-200 mt-2">
                                    <ul className='flex flex-col gap-5 justify-center items-end '>
                                        <li className=''>
                                            <NavLink onClick={() => { setIsActive(''); setIsOpen(false) }} to='/blog' className='text-dark-brown hover:text-light-brown' >
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li className=''>
                                            <NavLink onClick={() => { setIsActive(''); setIsOpen(false) }} to='/download' className='text-dark-brown hover:text-light-brown' >
                                                Download
                                            </NavLink>
                                        </li>
                                        {/* <li className=''>
                                            <NavLink onClick={() => {setIsActive('');setIsOpen(false)}} to='/photogallery' className='text-dark-brown hover:text-light-brown' >
                                                Photos
                                            </NavLink>
                                        </li>
                                        <li className=''>
                                            <NavLink onClick={() => {setIsActive('');setIsOpen(false)}} to='/videogallery' className='text-dark-brown hover:text-light-brown' >
                                                Videos
                                            </NavLink>
                                        </li> */}
                                        <li className=''>
                                            <NavLink onClick={() => { setIsActive(''); setIsOpen(false) }} to='/pressrelease' className='text-dark-brown hover:text-light-brown' >
                                                Press Release
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </Transition>
                        </li>
                        <li className='w-full flex flex-col justify-between'>
                            <div onClick={(e) => { isActive === 'AboutUs' ? setIsActive('') : setIsActive(e.target.id) }} id='AboutUs' className={`${isActive === 'AboutUs' ? 'text-light-brown' : 'text-dark-brown w-full'} flex justify-between items-center`}>
                                About Us
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: isActive === 'Services' ? 0 : 1 }}
                                    exit={{ y: 1 }}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                >
                                    {isActive === 'AboutUs' ? null : <RiArrowDownSLine />}
                                </motion.div>
                            </div>
                            <Transition
                                show={isActive === 'AboutUs' ? true : false}
                                enter="transition-transform duration-300 ease-out"
                                enterFrom="transform translate-y-full"
                                enterTo="transform translate-y-0"
                                leave="transition-transform duration-100 ease-in"
                                leaveFrom="transform translate-y-0"
                                leaveTo="transform translate-y-full"
                            >
                                <div className="bg-gray-200 mt-2">
                                    <ul className='flex flex-col gap-5 justify-center items-end '>
                                        <li className=''>
                                            <NavLink onClick={() => { setIsActive(''); setIsOpen(false) }} to='/abouttrust' className='text-dark-brown hover:text-light-brown' >
                                                About Trust
                                            </NavLink>
                                        </li>
                                        <li className=''>
                                            <NavLink onClick={() => { setIsActive(''); setIsOpen(false) }} to='/abouttemple' className='text-dark-brown hover:text-light-brown' >
                                                About Temple
                                            </NavLink>
                                        </li>
                                        <li className=''>
                                            <NavLink onClick={() => { setIsActive(''); setIsOpen(false) }} to='/campusfacility' className='text-dark-brown hover:text-light-brown' >
                                                Campus Facility
                                            </NavLink>
                                        </li>
                                        <li className=''>
                                            <NavLink onClick={() => { setIsActive(''); setIsOpen(false) }} to='/history' className='text-dark-brown hover:text-light-brown' >
                                                History
                                            </NavLink>
                                        </li>
                                        <li className=''>
                                            <NavLink onClick={() => { setIsActive(''); setIsOpen(false) }} to='/howtoreach' className='text-dark-brown hover:text-light-brown' >
                                                How to reach
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </Transition>
                        </li>
                        <li className='w-full flex justify-between'>
                            <NavLink onClick={(e) => { setIsActive(e.target.id); setIsOpen(false) }} id='Contact' to='/contact' className={`${isActive === 'Contact' ? 'text-light-brown' : 'text-dark-brown'}`}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </motion.div >
        </>
    )
}

export default MobileNavbar