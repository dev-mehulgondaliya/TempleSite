import { AnimatePresence, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'



function Card({ img, title, desc, text }) {
  const card = useRef()
  const isInViewCard = useInView(card)
  const [showCard, setShowCard] = useState(false)


  useEffect(() => {
    if (isInViewCard) {
      setShowCard(true)
    }
  }, [isInViewCard])

  return (
    <div ref={card} className='overflow-hidden'>
      <AnimatePresence>
        {showCard &&
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: '0' }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className='duration-500 hover:shadow-light-red hover:shadow-[0px_5px_25px] min-w-[300px] min-h-[270px] h-[100%] p-5 bg-white '>
              <div className='h-[150px] w-full flex justify-center items-center'>
                <img src={img} alt='icon' className='w-[100px] h-[100px]' />
              </div>
              <div className='font-lora font-bold text-2xl text-dark-brown px-2'>{title}</div>
              <div className='text-light-brown mt-1 text-sm'>{desc && desc}</div>
              <div className='text-light-brown mt-1 text-sm'>
                {text && text.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default Card