import React, { useContext, useEffect, useRef, useState } from 'react'
import activityImg from '../../Assets/icon/activity.png'
import donateImg from '../../Assets/icon/donate.png'
import templeImg from '../../Assets/icon/temple.png'

import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import Card from '../../Components/Card/Card';
import TimeLine from '../../Components/Timeline/TimeLine';
import myContext from '../../Context/StateData/myContext';
import Button from '../../Components/Button/Button';
import DonationForm from '../../Components/Donation/DonationForm';
// import ReactPlayer from 'react-player';
import ReactPlayer from 'react-player/youtube'
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { getAllRingTone } from '../../Context/ApiData/getAllRingTone';


function HomePage() {
  const { DailyTimelineData, BlogData } = useContext(myContext)
  const donation = useRef()
  const event = useRef()

  const isInViewDonation = useInView(donation)
  const isInViewEvent = useInView(event)
  const [showdonation, setShowdonation] = useState(false)
  const [showevent, setShowEvent] = useState(false)


  useEffect(() => {
    if (isInViewDonation) {
      setShowdonation(true)
    }
    if (isInViewEvent) {
      setShowEvent(true)
    }
  }, [isInViewDonation, isInViewEvent])

  useEffect(()=>{
    const fetchData = async () => {
      const newData = await getAllRingTone()
      console.log(newData)
    }
    fetchData()

  },[])

  return (
    <div className=''>
      <div className='bg-gradient-to-b from-dark-brown to-light-brown md:pt-[100px]  h-[50vh] md:h-[70vh] w-full'>
        <div className='flex justify-center h-[50vh] md:h-[70vh] md:w-[90vw]  mx-auto'>
          <ImageSlider />
        </div>
      </div>
      <div className='flex flex-col gap-10 justify-center items-center py-10 md:mt-[100px] overflow-hidden mx-auto'>
        {/* card section */}
        <div className='w-[90vw] md:w-[70vw] max-w-[1024px]'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-2 p-5'>
            <div className=' text-start'>
              <h1 className='text-light-red font-bold tracking-wider'>WELCOME</h1>
              <p className='text-4xl leading-snug font-lora text-dark-brown font-black'>Experience visit at <br /> Our Khodaldham <br /> Temple</p>
            </div>
            <div className=' text-start text-light-brown'>
              <p>We are happy to see newcomers at any of our yoga and meditation classes. Join the community to participate in the center`s life and the discussion club.</p>
              <br />
              <p>Stay at the Ashram and immerse yourself in our wonderful yogic lifestyle program with other like-minded members.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-center w-full gap-5  mt-5 px-5'>
            <div className='justify-self-center'>
              <Card img={activityImg} title={'Campus Activity'} desc={'At Temple Campus, vibrant student life thrives with diverse activities. Engage in clubs, events, and sports, fostering a sense of community. Unleash your potential through a dynamic blend of academics and extracurriculars, making every day an opportunity for growth and enrichment.'} />
            </div>
            <div className='justify-self-center'>
              <Card img={templeImg} title={'Campus Facility'} desc={'Temple Campus offers state-of-the-art facilities, fostering academic excellence. Modern classrooms, well-equipped labs, and serene green spaces create an inspiring environment for learning and growth. Discover a place where education meets innovation at Temple Campus.'} />
            </div>
            <div className='justify-self-center'>
              <Card img={donateImg} title={'Donation'} desc={"Support Temple's mission of excellence through your generous donation. Contribute to academic advancements, scholarships, and campus enhancements. Join us in shaping a brighter future for students and fostering a community of learning, innovation, and progress."} />
            </div>
          </div>
        </div>

        {/* live */}
        <div className='w-[90vw] md:w-[70vw] max-w-[1024px] p-5'>
          <div className=' text-start'>
            <h1 className='text-light-red font-bold tracking-wider'>Live</h1>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
            <div ref={event}>
              <AnimatePresence>
                {showevent &&
                  <motion.div
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: '0' }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  >
                    <div className=' text-start'>
                      <p className='text-4xl leading-snug font-lora text-dark-brown font-black'>Darshan</p>
                      <div className='w-full h-[300px] border-2 border-light-red'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ac0DEUuHjeE' width='100%' height='100%' />
                      </div>
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>

            <div ref={event}>
              <AnimatePresence>
                {showevent &&
                  <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: '0' }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  >
                    <div className=' text-start'>
                      <p className='text-4xl leading-snug font-lora text-dark-brown font-black'>Event</p>
                      <div className='w-full h-[300px] border-2 border-light-red'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ac0DEUuHjeE' width='100%' height='100%' />
                      </div>
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* daily program section */}
        <div className='w-[90vw] md:w-[70vw] max-w-[1024px]'>
          <div>
            <h1 className='text-light-red font-bold tracking-wider uppercase'>daily program</h1>
            <p className='text-2xl md:text-4xl leading-snug font-lora text-dark-brown font-black'>Khodaldham Temple Daily Activity</p>
          </div>
          <div className='py-5'>
            <TimeLine data={DailyTimelineData} />
          </div>
        </div>

        {/* blog section */}
        <div className='w-[100vw]'>
          <div className='flex md:h-[500px] lg:h-[700px] md:flex-row flex-col overflow-hidden text-start'>
            <div className='w-full h-[250px] md:h-auto flex justify-center items-center  relative'>
              <img src={BlogData[0].img} alt="blog thumbnail" className='h-full w-full' />
              <div className='absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-dark-brown to-[rgba(0,0,0,0)]'>
                <h1 className='font-bold text-cream font-lora truncate  text-xl  lg:text-3xl'>{BlogData[0].title}</h1>
                <Button name={'Read More'} className={'bg-red text-light-cream hover:bg-dark-brown border border-cream  duration-500 mt-3'} />
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <div className='w-full h-[250px] lg:h-[350px] flex justify-center items-center relative'>
                <img src={BlogData[1].img} alt="blog thumbnail" className=' w-full h-full' />
                <div className='absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-dark-brown to-[rgba(0,0,0,0)]'>
                  <h1 className='font-bold text-cream font-lora truncate text-xl lg:text-3xl'>{BlogData[1].title}</h1>
                  <Button name={'Read More'} className={'bg-red text-light-cream hover:bg-dark-brown border border-cream  duration-500 mt-3'} />
                </div>
              </div>
              <div className='w-full h-[250px] lg:h-[350px] flex justify-center items-center relative'>
                <img src={BlogData[2].img} alt="blog thumbnail" className=' w-full h-full ' />
                <div className='absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-dark-brown to-[rgba(0,0,0,0)]'>
                  <h1 className='font-bold text-cream font-lora truncate text-xl  lg:text-3xl'>{BlogData[2].title}</h1>
                  <Button name={'Read More'} className={'bg-red text-light-cream hover:bg-dark-brown border border-cream  duration-500 mt-3'} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* donation section */}
        <div className='w-[90vw] md:w-[70vw] max-w-[1024px]'>

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
    </div >
  )
}

export default HomePage
