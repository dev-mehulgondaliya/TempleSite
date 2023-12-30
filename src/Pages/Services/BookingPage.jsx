import React, {  useState } from 'react'
import headerImg from '../../Assets/services/krishna.jfif'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Button from '../../Components/Button/Button'
import { RiArrowDownSLine } from 'react-icons/ri'

function BookingPage() {



  const [isOpen, setIsOpen] = useState('')
  const [selctedItem, setSelectItem] = useState(null)
  const [selctedYear, setSelectYear] = useState(null)




  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`} style={{ '--image-url': `url(${headerImg})` }}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          Booking
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-start text-dark-brown font-lora font-semibold text-2xl'>Booking Now</h1>
          <form className='flex flex-col gap-2'>
            <div className='flex flex-col w-full md:flex-row gap-2'>
              <input type="text" className='rounded-full text-sm p-2 px-3 w-full border-2 border-cream' placeholder='Enter Full Name*' />
              <input type="email" className='rounded-full text-sm p-2 px-3 border-2 w-full border-cream' placeholder='Enter Email Address*' />
            </div>
            <div className='flex flex-col w-full md:flex-row gap-2'>
              <input type="tel" className='rounded-full text-sm p-2 px-3 w-full border-2 border-cream' placeholder='Enter Mobile Number*' />
              <input type="city" className='rounded-full text-sm p-2 px-3 border-2 w-full border-cream' placeholder='Enter Your City*' />
            </div>
            <div className='flex flex-col w-full  gap-2'>
              <h1 className='text-start text-[10px]  text-gray'>The flag of the Khodaldham temple is flagged twice daily. Devotees have to book in advance for the flaging.</h1>
              <div className='rounded-full text-sm p-2 px-3 w-full border-2 border-cream text-start bg-white text-gray flex items-center justify-between' onClick={() => { isOpen == 'booking' ? setIsOpen('') : setIsOpen('booking') }}>
                <h1 className='text-sm'>{selctedItem == null ? 'What do You Want Booking?*' : selctedItem}</h1>
                <h1 className='text-xl'><RiArrowDownSLine /></h1>

              </div>
              <div className='overflow-hidden'>
                <AnimatePresence   >
                  {isOpen == 'booking' &&
                    <motion.div
                      initial={{ y: '-100%' }}
                      animate={{ y: '0%' }}
                      exit={{ y: '-100%' }}
                      transition={{ duration: 0.3 }}

                    >
                      <ul className='flex flex-col text-start rounded-3xl overflow-hidden border-2 border-cream'>
                        <li className='p-2 px-5 text-dark-brown hover:text-light-red hover:bg-cream duration-500' onClick={() => { setSelectItem('dhaja'); setIsOpen('') }}>Dhaja</li>
                        <li className='p-2 px-5 text-dark-brown hover:text-light-red hover:bg-cream duration-500' onClick={() => { setSelectItem('prasad'); setIsOpen('') }}>prasad</li>
                        <li className='p-2 px-5 text-dark-brown hover:text-light-red hover:bg-cream duration-500' onClick={() => { setSelectItem('money'); setIsOpen('') }}>money</li>
                        <li className='p-2 px-5 text-dark-brown hover:text-light-red hover:bg-cream duration-500' onClick={() => { setSelectItem('dhaja'); setIsOpen('') }}>Dhaja</li>
                      </ul>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
            </div>
            <div className='flex flex-col w-full  gap-2'>
              <div className='rounded-full text-sm p-2 px-3 w-full border-2 border-cream text-start bg-white text-gray flex items-center justify-between' onClick={() => { isOpen == 'year' ? setIsOpen('') : setIsOpen('year') }}>
                <h1 className='text-sm'>{selctedYear == null ? 'Select Year' : selctedYear}</h1>
                <h1 className='text-xl'><RiArrowDownSLine /></h1>

              </div>
              <div className='overflow-hidden'>
                <AnimatePresence   >
                  {isOpen == 'year' &&
                    <motion.div
                      initial={{ y: '-100%' }}
                      animate={{ y: '0%' }}
                      exit={{ y: '-100%' }}
                      transition={{ duration: 0.3 }}

                    >
                      <ul className='flex flex-col text-start rounded-3xl overflow-hidden border-2 border-cream'>
                        <li className='p-2 px-5 text-dark-brown hover:text-light-red hover:bg-cream duration-500' onClick={() => { setSelectYear('2023'); setIsOpen('') }}>2023</li>
                        <li className='p-2 px-5 text-dark-brown hover:text-light-red hover:bg-cream duration-500' onClick={() => { setSelectYear('2024'); setIsOpen('') }}>2024</li>
                        <li className='p-2 px-5 text-dark-brown hover:text-light-red hover:bg-cream duration-500' onClick={() => { setSelectYear('2025'); setIsOpen('') }}>2025</li>
                      </ul>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
            </div>
            <div>
              <textarea className='w-full  border-2 border-cream rounded-3xl h-[150px] text-sm p-2 px-3' placeholder='Information*' style={{ resize: 'none' }}></textarea>
            </div>
            <div>
              <Button name={'Booking Now'} className={'bg-light-red shrink-0 text-dark-brown hover:text-white hover:bg-light-brown duration-500 flex justify-center items-center'} onClick={() => navigate(`/blogdetails/${BlogIndex}`)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingPage