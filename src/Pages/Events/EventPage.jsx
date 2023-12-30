import React, { useEffect, useState } from 'react'
import headerImg from '../../Assets/event/header.jpg'
import Button from '../../Components/Button/Button'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import dayjs from 'dayjs'

function EventPage() {

  const [isActive, setIsActive] = useState('list')
  const [data] = useState([
    { date: '23-12-2024', start: '8:00 AM', end: '8:00 PM', title: '1Pran Prathista Mahotsav', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae eum, quos eaque velit doloremque doloribus nostrum deserunt nobis! Aut!' },
    { date: '23-12-2025', start: '8:00 AM', end: '8:00 PM', title: '2Pran Prathista Mahotsav', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae eum, quos eaque velit doloremque doloribus nostrum deserunt nobis! Aut!' },
    { date: '23-12-2025', start: '8:00 AM', end: '8:00 PM', title: '3Pran Prathista Mahotsav', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae eum, quos eaque velit doloremque doloribus nostrum deserunt nobis! Aut!' },
    { date: '23-12-2026', start: '8:00 AM', end: '8:00 PM', title: '4Pran Prathista Mahotsav', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae eum, quos eaque velit doloremque doloribus nostrum deserunt nobis! Aut!' },
  ])


  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-top flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`} style={{ '--image-url': `url(${headerImg})` }}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          Events
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>
        {/* searchbar */}
        <div className='flex items-center w-full gap-2 bg-white rounded-full overflow-hidden my-5'>
          <input type="text" placeholder='Search...' className='w-full focus:outline-none focus:shadow-none p-4' />
          <div className='shrink-0 pe-5'>
            <Button name={'Find Event'} className={'bg-red shrink-0 text-cream hover:text-white hover:bg-dark-brown duration-500 flex justify-center items-center'} onClick={() => navigate(`/blogdetails/${BlogIndex}`)} />
          </div>
          <div className='flex gap-5 pe-10 self-stretch'>
            <button className={`${isActive == 'list' && 'text-red border-b-2 border-b-red'} hover:text-light-red`} onClick={() => setIsActive('list')}>List</button>
            <button className={`${isActive == 'month' && 'text-red border-b-2 border-b-red'} hover:text-light-red`} onClick={() => setIsActive('month')}>Month</button>
          </div>
        </div>

        {/* pagination */}
        <div className='my-5'>
          <div className='shrink-0 pe-5 flex gap-2 items-center'>
            <Button name={<RiArrowLeftSLine className='text-2xl flex justify-center items-center' />} className={'bg-red shrink-0 text-cream hover:text-white hover:bg-dark-brown duration-500 text-xl flex justify-center items-center'} />
            <Button name={<RiArrowRightSLine className='text-2xl flex justify-center items-center' />} className={'bg-red shrink-0 text-cream hover:text-white hover:bg-dark-brown duration-500 text-xl flex justify-center items-center'} />

          </div>
        </div>

        {/* eventlist */}
        <div className='flex flex-col text-dark-brown gap-5'>
          {data && data.map((item, i) => (
            <div key={i} className='flex flex-col gap-5'>
              { i == 0 &&
                <div className='flex items-center gap-2'>
                  <h1 className='font-lora shrink-0 '>{dayjs((item.date).split('-').reverse().join('-')).format('MMM YYYY')}</h1><hr className='w-full border border-x-dark-brown' />
                </div>
              }
              { i > 0 && data[i-1].date != item.date &&
                <div className='flex items-center gap-2'>
                  <h1 className='font-lora shrink-0 '>{dayjs((item.date).split('-').reverse().join('-')).format('MMM YYYY')}</h1><hr className='w-full border border-x-dark-brown' />
                </div>
              }

              <div className='flex gap-2'>
                <div className='shrink-0 px-3 md:w-[100px]'>
                  <h1>TUE</h1>
                  <h1 className='font-bold'>16</h1>
                </div>
                <div className='text-start'>
                  <h1>16 Apr 2024 @ 8:00 am - 29 Aug 2024 @ 5:00 pm</h1>
                  <h1 className='font-bold'>{item.title}</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae eum, quos eaque velit doloremque doloribus nostrum deserunt nobis! Aut!</p>
                </div>
                <div className='shrink-0 md:block hidden md:w-[300px] aspect-video overflow-hidden'>
                  <img src={headerImg} alt="event" className='w-full h-full object-cover border-2 border-light-red hover:scale-125 duration-300' />
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default EventPage