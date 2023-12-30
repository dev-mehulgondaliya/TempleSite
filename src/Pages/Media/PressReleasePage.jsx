import React, { useState } from 'react'
import headerImg from '../../Assets/media/news.jpg'
import { motion } from 'framer-motion'
import Button from '../../Components/Button/Button'

function PressReleasePage() {
  const [numberOfIndex, setNumberOfIndex] = useState(4)

  const data = [
    { title: 'celebration of republic day' },
    { title: 'celebration of republic day' },
    { title: 'celebration of republic day' },
    { title: 'celebration of republic day' },
    { title: 'celebration of republic day' },
  ]

  const moreImage = () => {
    setNumberOfIndex(numberOfIndex + 4)
  }


  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`} style={{ '--image-url': `url(${headerImg})` }}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          Press Release
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>
        <div className='grid grid-cols-2 gap-5'>
          {data && data.slice(0, numberOfIndex).map((item, i) => (
            <motion.div
              initial={{ opacity: 0, x: i % 2 == 0 ? '-100%' : '100%' }}
              animate={{ opacity: 1, x: '0%' }}
              transition={{ duration: 0.5 }}
              key={i}
              className='w-full shrink-0 aspect-square border-2 border-light-red shadow-[5px_5px] shadow-dark-brown'>
              <h1 className='w-full h-[100px] bg-white flex justify-center items-center'>celebration of republic day</h1>
              <img src={headerImg} alt="news" className='w-full h-full object-cover' />
            </motion.div>
          ))
          }
        </div>
        <div className='mt-5'>
          {data && data.length <= numberOfIndex ?
            <h1 >No More Image</h1> :
            <Button name={'More Image'} className={'bg-light-brown text-cream hover:bg-light-red duration-500 hover:text-dark-brown'} onClick={moreImage} />
          }
        </div>
      </div>
    </div>
  )
}

export default PressReleasePage