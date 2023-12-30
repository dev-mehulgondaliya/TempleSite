import React, { useState } from 'react'
import headerImg from '../../Assets/services/krishna.jfif'
import magazineImg from '../../Assets/services/magazine.jpg'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Button from '../../Components/Button/Button'
import { RiArrowDownSLine } from 'react-icons/ri'


function MagazinePage() {

  const [isOpen, setIsOpen] = useState('')
  const [selectedLang, setSelectLang] = useState(null)




  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`} style={{ '--image-url': `url(${headerImg})` }}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          Magazine
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>

        <div className='flex gap-5 md:flex-row flex-col'>
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='w-[50%] md:w-[35%]'
          >
            <img src={magazineImg} alt="" className='border-4 border-light-red' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='flex w-full flex-col gap-3'
          >
            <div>
              <h1 className='text-start text-dark-brown font-lora font-semibold text-2xl'>Geeta With Multiple Languages</h1>
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
                  <div className='rounded-full text-sm p-2 px-3 w-full border-2 border-cream text-start bg-white text-gray flex items-center justify-between' onClick={() => { isOpen == 'lang' ? setIsOpen('') : setIsOpen('lang') }}>
                    <h1 className='text-sm'>{selectedLang == null ? 'Select Addition' : selectedLang}</h1>
                    <h1 className='text-xl'><RiArrowDownSLine /></h1>

                  </div>
                  <div className='overflow-hidden'>
                    <AnimatePresence   >
                      {isOpen == 'lang' &&
                        <motion.div
                          initial={{ y: '-100%' }}
                          animate={{ y: '0%' }}
                          exit={{ y: '-100%' }}
                          transition={{ duration: 0.3 }}

                        >
                          <ul className='flex flex-col text-start rounded-3xl overflow-hidden border-2 border-cream'>
                            <li className='p-2 px-5 text-dark-brown hover:text-light-red hover:bg-cream duration-500' onClick={() => { setSelectLang('Hindi'); setIsOpen('') }}>Hindi Addition</li>
                            <li className='p-2 px-5 text-dark-brown hover:text-light-red hover:bg-cream duration-500' onClick={() => { setSelectLang('English'); setIsOpen('') }}>English Addition</li>
                            <li className='p-2 px-5 text-dark-brown hover:text-light-red hover:bg-cream duration-500' onClick={() => { setSelectLang('Marathi'); setIsOpen('') }}>Marathi Addition</li>
                          </ul>
                        </motion.div>
                      }
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  <textarea className='w-full  border-2 border-cream rounded-3xl h-[150px] text-sm p-2 px-3' placeholder='Full Address*' style={{ resize: 'none' }}></textarea>
                </div>
                <div>
                  <Button name={'Purchase'} className={'bg-light-red shrink-0 text-dark-brown hover:text-white hover:bg-light-brown duration-500 flex justify-center items-center'} onClick={() => navigate(`/blogdetails/${BlogIndex}`)} />
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MagazinePage
