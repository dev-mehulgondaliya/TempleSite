import React, { useRef } from 'react'
import headerImg from '../../Assets/about/abouttemple.jpg'
import { AnimatePresence, motion, useInView } from 'framer-motion';
import trust from '../../Assets/about/temple.jpg'
import { NavLink } from 'react-router-dom';

function AboutTemplePage() {
  const abouttrust = useRef()
  const isInViewabouttrust = useInView(abouttrust)

  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`}  style={{'--image-url': `url(${headerImg})`}}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          About Temple
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 '>
          <div ref={abouttrust}>
            <AnimatePresence>
              {isInViewabouttrust &&
                <motion.div
                  initial={{ opacity: 0, x: '-100%' }}
                  animate={{ opacity: 1, x: '0' }}
                  exit={{ opacity: 0, x: '-100%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <div className='h-full'>
                    <img src={trust} alt="trust" className='object-cover border-4  h-full border-light-red' />
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>
          <div ref={abouttrust}>
            <AnimatePresence>
              {isInViewabouttrust &&
                <motion.div
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: '0' }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}

                >
                  <div className='text-start'>
                    <h1 className='text-light-red font-bold tracking-wider uppercase'>WELCOME</h1>
                    <p className='text-4xl leading-snug font-lora text-dark-brown font-black'>Khodaldham Temple</p>
                    <div className=' text-start text-light-brown mt-2'>
                      <p>Shri Khodaldham Trust-Kagavad was established on 08-03-2010. In order to strengthen the organization of the Leuva Patidar society and to make the unity of all the society through this organization.</p>
                    </div>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>

        </div>

        <div className='flex gap-4 justify-center flex-wrap mt-5'>
          <NavLink to='/abouttemple' className='capitalize bg-cream text-light-brown hover:bg-transparent hover:text-light-red p-2 px-3 rounded-full duration-500'>About temple</NavLink>
          <NavLink to='/history' className='capitalize bg-cream text-light-brown hover:bg-transparent hover:text-light-red p-2 px-3 rounded-full duration-500'>history</NavLink>
          <NavLink to='/events' className='capitalize bg-cream text-light-brown hover:bg-transparent hover:text-light-red p-2 px-3 rounded-full duration-500'>event</NavLink>
          <NavLink to='/campusfacility' className='capitalize bg-cream text-light-brown hover:bg-transparent hover:text-light-red px-3 p-2 rounded-full duration-500'>campus facility</NavLink>
        </div>

      </div>
    </div>
  )
}

export default AboutTemplePage