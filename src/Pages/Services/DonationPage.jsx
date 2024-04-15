import React, { useEffect, useRef, useState } from 'react'
import headerImg from '../../Assets/services/temple.jpg'
import templeImg from '../../Assets/services/donation.jpg'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import DonationForm from '../../Components/Donation/DonationForm'

function DonationPage() {
  const donation = useRef()
  const event = useRef()

  const isInViewDonation = useInView(donation)
  const isInViewEvent = useInView(event)
  const [showdonation, setShowdonation] = useState(false)

  useEffect(() => {
    if (isInViewDonation) {
      setShowdonation(true)
    }
    if (isInViewEvent) {
      setShowEvent(true)
    }
  }, [isInViewDonation, isInViewEvent])

  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`} style={{ '--image-url': `url(${headerImg})` }}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          Donation
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>
        <div className='flex flex-col gap-5'>
          <motion.div
            initial={{ opacity: 0  }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}

          >
            <div className='w-full h-[300px]'>
              <img src={templeImg} alt="" className='object-cover w-full h-full' />
            </div>
          </motion.div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-2'>
            <div ref={donation}>
              <AnimatePresence>
                {showdonation &&
                  <motion.div
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: '0' }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}

                  >
                    <div className='text-start'>
                      <h1 className='text-light-red font-bold tracking-wider'>DONATIONS</h1>
                      <p className='text-4xl leading-snug font-lora text-dark-brown font-black'>Khodaldham Temple Donation</p>
                      <div className=' text-start text-light-brown mt-5'>
                        <p>Dakshina is an ancient tradition of those who practice yoga, and it is a display of generosity – a private contribution to the financial support of the teacher and their teachings.</p>
                        <br />
                        <p>When we experience a pure inner impulse caused by a higher purpose to help others, to express our unconditional gratefulness, it is called Dakshina. We are being guided by our feelings, and, in this case, the amount we give is irrelevant as long as we gain our own true self</p>
                      </div>
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
            <div ref={donation}>
              <AnimatePresence>
                {showdonation &&
                  <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: '0' }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  >
                    <div className='md:p-5 mb-10'>
                      <DonationForm />
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationPage