import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';


const FooterNavBar = () => {

    const location = useLocation()

    return (
        <>
            <div className='w-full'>
                <ul className='flex gap-5 md:gap-16 flex-col md:flex-row justify-center items-center'>
                    <li className='w-[50px] flex justify-center'>
                        <NavLink to='/' className={`${location.pathname == '/' ? 'text-cream' : 'text-light-red'}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className='w-[50px] flex justify-center'>
                        <NavLink to='/abouttemple' className={`${location.pathname == '/abouttemple' ? 'text-cream' : 'text-light-red'}`}>
                            Temple
                        </NavLink>
                    </li>
                    <li className='w-[50px] flex justify-center'>
                        <NavLink to='/events' className={`${location.pathname == '/events' ? 'text-cream' : 'text-light-red'}`}>
                            Event
                        </NavLink>
                    </li>
                    <li className='w-[50px] flex justify-center'>
                        <img
                            className='w-[50px] h-[50px] object-cover'
                            src='https://cdn-icons-png.flaticon.com/128/256/256661.png'
                            alt=''
                        />
                    </li>
                    <li className='w-[50px] flex justify-center'>
                        <NavLink to='/donation' className={`${location.pathname == '/donation' ? 'text-cream' : 'text-light-red'}`}>
                            Donation
                        </NavLink>
                    </li>
                    <li className='w-[50px] flex justify-center'>
                        <NavLink to='/download' className={`${location.pathname == '/download' ? 'text-cream' : 'text-light-red'}`}>
                            Download
                        </NavLink>
                    </li>
                    <li className='w-[50px] flex justify-center'>
                        <NavLink to='/contact' className={`${location.pathname == '/contact' ? 'text-cream' : 'text-light-red'}`}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default FooterNavBar;
