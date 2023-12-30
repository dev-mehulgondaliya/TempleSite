import React from 'react'
import headerImg from '../../Assets/about/campus.jpg'
import {  motion } from 'framer-motion';
import { RiParkingFill, RiPlantFill } from 'react-icons/ri';
import { IoIosWater } from "react-icons/io";
import { MdFoodBank } from "react-icons/md";

function CampusFacilityPage() {

  const data = [
    { icon: <RiParkingFill />, text: 'Huge RCC parking has been made for vehicle parking in which up to 350 two-wheeler and up to 350 four-wheeler vehicles can be parked.' },
    { icon: <IoIosWater />, text: 'Pure cold water facilities.' },
    { icon: <MdFoodBank />, text: 'Breakfast canteens feature self-catering fast-food fast food. Snack foods include cold drinks, hot snacks, snacks, etc. Fast-food is available.' },
    { icon: <RiPlantFill />, text: 'A large lawn area has been set up for the devotees to sit quietly in which the colorful flowers, plants have been grown.' },
  ]

  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`}  style={{'--image-url': `url(${headerImg})`}}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          Campus Facility
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>
        <div className='flex flex-col gap-2'>
          {
            data && data.map((item, i) => (
              <motion.div
                initial = {{opacity : 0, x : `${i % 2 == 0 ? '-100%' : '100%'}`}}
                animate = {{opacity : 1, x : '0%'}}
                transition={{duration : 1, ease : 'easeOut'}}
              >
                <div className='flex p-3 gap-5 border-4 items-center border-light-red bg-light-brown'>
                  <div>
                    <div className='bg-white w-[50px] h-[50px] text-2xl rounded-full flex justify-center items-center text-light-red'>
                      {item.icon}
                    </div>
                  </div>
                  <h1 className='text-start text-cream'>
                    {item.text}
                  </h1>
                </div>
              </motion.div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default CampusFacilityPage