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
import ReactPlayer from 'react-player/youtube'
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { getBannerDetails } from '../../Context/ApiData/getBannerDetails';
import { getHomeLink } from '../../Context/ApiData/getHomeLink';
import Loader from '../../Components/Loader/Loader';
import { getDailyProgramme } from '../../Context/ApiData/getDailyProgramme';
import { getTopBlog } from '../../Context/ApiData/getTopBlog';
import { Link, useNavigate } from 'react-router-dom';


function HomePage() {
  const donation = useRef()
  const event = useRef()

  const isInViewDonation = useInView(donation)
  const isInViewEvent = useInView(event)
  const [showdonation, setShowdonation] = useState(false)
  const [showevent, setShowEvent] = useState(false)
  const navigate = useNavigate()

  // all api data
  const [bannerData, setBannerData] = useState(null)
  const [homeLinkData, setHomeLinkData] = useState(null)
  const [dailyProgramData, setDailyProgramData] = useState(null)
  const [homeBlogData, setHomeBlogData] = useState(null)

  useEffect(() => {
    if (isInViewDonation) {
      setShowdonation(true)
    }
    if (isInViewEvent) {
      setShowEvent(true)
    }
  }, [isInViewDonation, isInViewEvent])


  // api calling data
  useEffect(() => {
    const banner = async () => {
      const result = await getBannerDetails()
      console.log('banner', result)
      if (result.IsSuccessful) {
        setBannerData(result.Result)
      }
    }

    const homelink = async () => {
      const result = await getHomeLink()
      console.log('homelink', result)
      if (result.IsSuccessful) {
        setHomeLinkData(result.Result)
      }
    }

    const dailyProgram = async () => {
      const result = await getDailyProgramme()
      console.log('dailyprogram', result)
      if (result.IsSuccessful) {
        setDailyProgramData(result.Result)
      }
    }

    const topBlog = async () => {
      const result = await getTopBlog(3)
      console.log('homeblog', result)
      if (result.IsSuccessful) {
        setHomeBlogData(result.Result)
      }
    }

    banner()
    homelink()
    dailyProgram()
    topBlog()

  }, [])


  return (
    <div className=''>
      <div className='bg-gradient-to-b from-dark-brown to-light-brown md:pt-[100px]  h-[50vh] md:h-[70vh] w-full'>
        <div className='flex justify-center h-[50vh] md:h-[70vh] md:w-[90vw]  mx-auto'>
          {bannerData && <ImageSlider data={bannerData} />}
        </div>
      </div>
      <div className='flex flex-col gap-10 justify-center items-center py-10 md:mt-[100px] overflow-hidden mx-auto'>
        {/* card section */}
        <div className='w-[90vw] md:w-[70vw] max-w-[1024px]'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-2 md:p-5'>
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
          <div className='flex flex-col lg:grid grid-cols-3 overflow-hidden justify-center  w-full gap-5  mt-5 md:px-5'>
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
        <div className='w-[90vw] md:w-[70vw] max-w-[1024px] md:p-5'>
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
                      <div className='w-full h-[300px] border-2 border-light-red flex justify-center items-center'>
                        {homeLinkData ?
                          homeLinkData.map((item) => (
                            item.LinkType === 'darshan' && <ReactPlayer key={item.ID} url={item.Link} width='100%' height='100%' />
                          ))
                          :
                          <div className='flex justify-center items-center w-full'>
                            <Loader />
                          </div>
                        }
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
                        {homeLinkData ?
                          homeLinkData.map((item) => (
                            item.LinkType === 'event' && <ReactPlayer key={item.ID} url={item.Link} width='100%' height='100%' />
                          ))
                          :
                          <div className='flex justify-center items-center w-full'>
                            <Loader />
                          </div>
                        }
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
            <TimeLine data={dailyProgramData} />
          </div>
        </div>

        {/* blog section */}
        <div className='w-[100vw]'>
          <div className='flex md:h-[500px] lg:h-[700px] md:flex-row flex-col overflow-hidden text-start'>
            {homeBlogData && homeBlogData.length > 0 ?
              <div className='w-full h-[250px] md:h-auto flex justify-center items-center  relative'>
                <img src={`data:image/png;base64,${homeBlogData[0].BlogHeaderImage}`} alt="blog thumbnail" className='h-full w-full object-cover' />
                <div className='absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-dark-brown to-[rgba(0,0,0,0)]'>
                  <h1 className='font-bold text-cream font-lora truncate  text-xl  lg:text-3xl'>{homeBlogData[0].BlogHeader}</h1>
                  <Button name={'Read More'} className={'bg-red text-light-cream hover:bg-dark-brown border border-cream  duration-500 mt-3'} onClick={() => navigate(`/blogdetails/${homeBlogData[0].Id}`)} />
                </div>
              </div>
              :
              <div className='flex justify-center items-center w-full'>
                <Loader />
              </div>
            }
            <div className='flex flex-col w-full'>
              <div className='w-full h-[250px] lg:h-[350px] overflow-hidden flex justify-center items-center relative'>
                {homeBlogData && homeBlogData.length == 3 ?
                  <div className='relative overflow-hidden w-full h-full'>
                    <img src={`data:image/png;base64,${homeBlogData[1].BlogHeaderImage}`} alt="blog thumbnail" className=' w-full h-full object-cover' />
                    <div className='absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-dark-brown to-[rgba(0,0,0,0)]'>
                      <h1 className='font-bold text-cream font-lora truncate text-xl lg:text-3xl'>{homeBlogData[2].BlogHeader}</h1>
                      <Button name={'Read More'} className={'bg-red text-light-cream hover:bg-dark-brown border border-cream  duration-500 mt-3'} onClick={() => navigate(`/blogdetails/${homeBlogData[1].Id}`)} />
                    </div>
                  </div>
                  :
                  <Loader />
                }
              </div>
              <div className='w-full h-[250px] lg:h-[350px] overflow-hidden flex justify-center items-center relative'>
                {homeBlogData && homeBlogData.length == 3 ?
                  <div className='relative overflow-hidden w-full h-full'>
                    <img src={`data:image/png;base64,${homeBlogData[2].BlogHeaderImage}`} alt="blog thumbnail" className=' w-full h-full object-cover' />
                    <div className='absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-dark-brown to-[rgba(0,0,0,0)]'>
                      <h1 className='font-bold text-cream font-lora truncate text-xl lg:text-3xl'>{homeBlogData[2].BlogHeader}</h1>
                      <Button name={'Read More'} className={'bg-red text-light-cream hover:bg-dark-brown border border-cream  duration-500 mt-3'} onClick={() => navigate(`/blogdetails/${homeBlogData[2].Id}`)} />
                    </div>
                  </div>
                  :
                  <div className='flex justify-center items-center w-full'>
                    <Loader />
                  </div>
                }
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
                    <div className='md:p-5 md:mb-10'>
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
