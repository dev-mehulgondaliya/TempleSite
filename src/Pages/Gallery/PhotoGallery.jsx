import React, { useState } from 'react'
import headerImg from '../../Assets/media/photo.jpg'
import Button from '../../Components/Button/Button'
import { motion } from 'framer-motion'

function PhotoGallery() {

  const [numberOfIndex, setNumberOfIndex] = useState(6)


  const data = [
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },
    { img: headerImg },


  ]

  const moreImage = () => {
    setNumberOfIndex(numberOfIndex + 6)
  }



  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`} style={{ '--image-url': `url(${headerImg})` }}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          Photo Gallery
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='grid grid-cols-4 gap-2'>
            {
              data && data.slice(0, numberOfIndex).map((item, i) => (
                i % 3 == 0 ?
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-red border  shrink-0 aspect-square w-full col-span-2 row-span-2`}
                  >
                    <img src={item.img} alt="photo" className='w-full h-full object-cover' />
                  </motion.div>
                  :
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='bg-red border  shrink-0 aspect-square'
                  >
                    <img src={item.img} alt="photo" className='w-full h-full object-cover' />
                  </motion.div>
              ))
            }
          </div>
        </motion.div>
        <div className='mt-5'>
          {data && data.length <= numberOfIndex ?
            <h1 >No More Image</h1> :
            <Button name={'More Image'} className={'bg-light-brown text-cream hover:bg-light-red duration-500 hover:text-dark-brown'} onClick={moreImage} />
          }
        </div>
      </div >
    </div >
  )
}

export default PhotoGallery