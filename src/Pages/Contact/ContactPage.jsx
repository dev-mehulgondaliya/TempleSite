import React, { useState } from 'react'
import headerImg from '../../Assets/contact/contact.png'
import mapImg from '../../Assets/contact/map.jpg'
import mapIcon from '../../Assets/icon/map.png'
import emialIcon from '../../Assets/icon/email.png'
import timeIcon from '../../Assets/icon/time.png'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Button from '../../Components/Button/Button'
import { RiArrowDownSLine } from 'react-icons/ri'
import Card from '../../Components/Card/Card'


function ContactPage() {

  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-top flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`} style={{ '--image-url': `url(${headerImg})` }}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          Contact
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>
        <div className='md:py-5'>
          <img src={mapImg} alt="photo" className='w-full aspect-video border-2 border-light-red' />
        </div>
        <div className='flex flex-col lg:flex-row justify-center w-full gap-5  my-5 '>
          <div className='justify-self-center'>
            <Card img={mapIcon} title={'Address'}  text={`100 Warren St.Jersey, \nCity, NJ 07302`}/>
          </div>
          <div className='justify-self-center'>
            <Card img={emialIcon} title={'Mail'} text={`info@example.com \nvolunteer@example.com`}/>
          </div>
          <div className='justify-self-center'>
            <Card img={timeIcon} title={'Hour'} text={`Monday - Saturday \n8:00 AM - 8:30 PM`} />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-start text-dark-brown font-lora font-semibold text-2xl'>Contact Now</h1>
          <form className='flex flex-col gap-2'>
            <div className='flex flex-col w-full md:flex-row gap-2'>
              <input type="text" className='rounded-full text-sm p-2 px-3 w-full border-2 border-cream' placeholder='Enter Full Name*' />
              <input type="email" className='rounded-full text-sm p-2 px-3 border-2 w-full border-cream' placeholder='Enter Email Address*' />
            </div>
            <div className='flex flex-col w-full md:flex-row gap-2'>
              <input type="tel" className='rounded-full text-sm p-2 px-3 w-full border-2 border-cream' placeholder='Enter Mobile Number*' />
              <input type="city" className='rounded-full text-sm p-2 px-3 border-2 w-full border-cream' placeholder='Enter Your City*' />
            </div>

            <div>
              <textarea className='w-full  border-2 border-cream rounded-3xl h-[150px] text-sm p-2 px-3' placeholder='Information*' style={{ resize: 'none' }}></textarea>
            </div>
            <div>
              <Button name={'Send Application'} className={'bg-light-red shrink-0 text-dark-brown hover:text-white hover:bg-light-brown duration-500 flex justify-center items-center'} onClick={() => navigate(`/blogdetails/${BlogIndex}`)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage