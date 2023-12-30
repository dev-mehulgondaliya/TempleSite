import React, { useState } from 'react'
import headerImg from '../../Assets/about/campus.jpg'
import { AnimatePresence, motion } from 'framer-motion';
import { RiParkingFill, RiPlantFill } from 'react-icons/ri';
import { IoIosWater } from "react-icons/io";
import { MdFoodBank } from "react-icons/md";
import { TiPlusOutline } from "react-icons/ti";
import roadImg from '../../Assets/about/howtoreach/car.png'
import planeImg from '../../Assets/about/howtoreach/plane.png'
import trainImg from '../../Assets/about/howtoreach/train.png'

function HowToReachPage() {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isOpen, setIsOpen] = useState('')

  const data = [
    { icon: <RiParkingFill />, title: 'By Road', img: roadImg, text: "The distance is 14 km from Jetpur, 63 km from Rajkot, 48 km from Junagadh. Private vehicles and government buses are available to reach the temple. On the National Highway coming from Rajkot, turn from Kagavad village board on the National Highway to Kagvad. On coming from Junagadh, we should turn from Kagavad village board to Kagvad village, coming between Jetpur and Virpur. The distance from the National Highway to Khodaldham Temple is only 4 km." },
    { icon: <IoIosWater />, title: 'By Train', img: trainImg, text: "The distance is 14 km from Jetpur, 63 km from Rajkot, 48 km from Junagadh. Private vehicles and government buses are available to reach the temple. On the National Highway coming from Rajkot, turn from Kagavad village board on the National Highway to Kagvad. On coming from Junagadh, we should turn from Kagavad village board to Kagvad village, coming between Jetpur and Virpur. The distance from the National Highway to Khodaldham Temple is only 4 km." },
    { icon: <MdFoodBank />, title: 'By Plane', img: planeImg, text: "The distance is 14 km from Jetpur, 63 km from Rajkot, 48 km from Junagadh. Private vehicles and government buses are available to reach the temple. On the National Highway coming from Rajkot, turn from Kagavad village board on the National Highway to Kagvad. On coming from Junagadh, we should turn from Kagavad village board to Kagvad village, coming between Jetpur and Virpur. The distance from the National Highway to Khodaldham Temple is only 4 km." },
  ]

  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`}  style={{'--image-url': `url(${headerImg})`}}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          How To Reach
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>
        <div className='flex flex-col gap-2'>
          {
            data && data.map((item, i) => (
              <AnimatePresence>
                <div className={`${isOpen == item.title ? 'bg-light-red border-light-brown' : 'border-light-red bg-light-brown'} border-4 overflow-hidden`}>
                  <div className='flex p-3 gap-3  items-center ' onClick={() => { isOpen == item.title ? setIsOpen('') : setIsOpen(item.title) }}>
                    <div>
                      <div className={`w-[50px] h-[50px] text-2xl rounded-full flex justify-center items-center ${isOpen == item.title ? 'text-dark-brown' : 'text-cream'}`}>
                        <TiPlusOutline className={`${isOpen == item.title ? 'rotate-45' : 'rotate-0'} duration-500`} />
                      </div>
                    </div>
                    <h1 className={`text-start font-semibold  ${isOpen == item.title ? 'text-dark-brown' : 'text-cream'}`}>
                      {item.title}
                    </h1>
                  </div>
                  <AnimatePresence>
                    {item.title == isOpen &&
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <div className='flex md:flex-row flex-col gap-2 px-5 pb-5'>
                          <div className='w-[25%]'>
                            <img src={item.img} alt="img" className='w-full' />
                          </div>
                          <p className='text-start w-[70%] px-5 pb-3 text-dark-brown'>{item.text}</p>
                        </div>
                      </motion.div>
                    }
                  </AnimatePresence>
                </div>
              </AnimatePresence>
            ))
          }

        </div>
      </div>
    </div >
  )
}

export default HowToReachPage