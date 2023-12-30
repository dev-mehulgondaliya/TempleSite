import { Fragment, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AboutMenu from './AboutMenu';
import ServicesMenu from './ServicesMenu';
import MediaMenu from './MediaMenu';
import MobileNavbar from './MobileNavbar';


const Navbar = () => {

  const location = useLocation()
  const [isActive, setIsActive] = useState(location.pathname)

  return (
    <>
      <div className='hidden md:block p-5 absolute z-10 top-0 right-0 left-0'>
        <ul className='flex gap-16 justify-center items-center'>
          <li className='w-[50px] flex justify-center'>
            <NavLink  to='/' className={`${location.pathname == '/' ? 'text-cream' : 'text-light-red'}`}>
              Home
            </NavLink>
          </li>
          <li className='w-[50px] flex justify-center'>
            <AboutMenu setIsActive={setIsActive} isActive={isActive} />
          </li>
          <li className='w-[50px] flex justify-center'>
            <NavLink  to='/events' className={`${location.pathname == '/events' ? 'text-cream' : 'text-light-red'}`}>
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
            <ServicesMenu setIsActive={setIsActive} isActive={isActive} />
          </li>
          <li className='w-[50px] flex justify-center'>
            <MediaMenu setIsActive={setIsActive} isActive={isActive} />
          </li>
          <li className='w-[50px] flex justify-center'>
            <NavLink  to='/contact' className={`${location.pathname == '/contact' ? 'text-cream' : 'text-light-red'}`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='md:hidden'>
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;
