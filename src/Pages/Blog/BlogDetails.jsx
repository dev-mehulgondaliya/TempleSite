import React, { useContext, useEffect, useRef, useState } from 'react'
import headerImg from '../../Assets/about/campus.jpg'
import { AnimatePresence, motion } from 'framer-motion';
import myContext from '../../Context/StateData/myContext';
import { RiCalendarEventLine, RiFacebookLine, RiTwitterXLine, RiWhatsappLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import Button from '../../Components/Button/Button';
import Loader from '../../Components/Loader/Loader';
import { useNavigate, useParams } from 'react-router';

function BlogDetails() {

  const { BlogData } = useContext(myContext)
  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])


  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`} style={{ '--image-url': `url(${headerImg})` }}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          Blog
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>
        <div className='flex flex-wrap lg:flex-nowrap justify-between gap-2'>
          <div className='w-full lg:w-[70%] flex flex-col gap-2'>
            {isLoading ? <h1><Loader /></h1> :
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                transition={{ duration: 0.5 }}
              >
                <div className='flex flex-col gap-2'>
                  {BlogData &&
                    <div className='w-full'>
                      {/* blog details show */}
                      <div className='w-full'>
                        <div className='h-[250px] md:h-[400px] w-full'>
                          <img src={BlogData[id].img} alt="img" className='object-fill w-full h-full' />
                        </div>
                        <div className='p-5 bg-white flex flex-col gap-2'>
                          <h1 className='text-4xl text-dark-brown font-lora text-start font-bold'>
                            {BlogData[id].title}
                          </h1>
                          <h1 className='flex gap-2 items-center font-semibold text-sm text-light-red'><RiCalendarEventLine />{BlogData[id].date}<IoChatbubbleOutline />{BlogData[id].comment} Comments</h1>
                          <p className='text-light-brown text-start'>{BlogData[id].desc}</p>
                          <div className='w-full flex items-center justify-end gap-2 mt-5'>
                            <h1 className='font-semibold font-lora text-dark-brown'>Share :</h1>
                            <Button name={<RiWhatsappLine className='text-xl' />} className={'bg-dark-brown shrink-0 text-white hover:bg-red duration-500 md:w-[50px] md:h-[50px] flex justify-center items-center'} onClick={() => navigate(`/blogdetails/${BlogIndex}`)} />
                            <Button name={<RiTwitterXLine className='text-xl' />} className={'bg-dark-brown shrink-0 text-white hover:bg-red duration-500 md:w-[50px] md:h-[50px] flex justify-center items-center'} onClick={() => navigate(`/blogdetails/${BlogIndex}`)} />
                            <Button name={<RiFacebookLine className='text-xl' />} className={'bg-dark-brown shrink-0 text-white hover:bg-red duration-500 md:w-[50px] md:h-[50px] flex justify-center items-center'} onClick={() => navigate(`/blogdetails/${BlogIndex}`)} />
                          </div>
                        </div>
                      </div>

                      {/* comment show */}
                      <div className='mt-5 flex flex-col gap-2'>
                        <div className='p-5 bg-dark-brown text-cream text-start'>
                          <h1 className='text-2xl font-lora font-semibold'>Smith</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet ipsa possimus vitae sint? Natus fuga at tempore alias eligendi expedita, quos numquam reprehenderit itaque?</p>
                        </div>
                        <div className='p-5 bg-dark-brown text-cream text-start'>
                          <h1 className='text-2xl font-lora font-semibold'>Smith</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet ipsa possimus vitae sint? Natus fuga at tempore alias eligendi expedita, quos numquam reprehenderit itaque?</p>
                        </div>
                        <div className='flex justify-between'>
                          <h1 className='flex gap-2 items-center font-semibold text-light-red'><IoChatbubbleOutline /> {BlogData[id].comment} Comments</h1>
                          <Button name={'More Comments'} className={'bg-red shrink-0 text-white hover:bg-light-brown duration-500 flex justify-center items-center'} onClick={() => navigate(`/blogdetails/${BlogIndex}`)} />
                        </div>
                      </div>

                      {/* comment form */}
                      <div className='mt-5 flex flex-col gap-2'>
                        <h1 className='font-lora text-start font-semibold text-dark-brown text-2xl'>Leave a Comment</h1>
                        <form>
                          <div className='flex flex-col w-full md:flex-row gap-2'>
                            <input type="text" className='rounded-full text-sm p-2 px-3 w-full border-2 border-cream' placeholder='Enter Full Name*' />
                            <input type="email" className='rounded-full text-sm p-2 px-3 border-2 w-full border-cream' placeholder='Enter Email Address*' />
                          </div>
                          <div>
                            <textarea className='w-full mt-2 border-2 border-cream rounded-3xl h-[150px] text-sm p-2 px-3' placeholder='Your comment*' style={{ resize: 'none' }}></textarea>
                          </div>
                          <div>
                            <Button name={'Send Comment'} className={'bg-light-red shrink-0 text-dark-brown hover:text-white hover:bg-light-brown duration-500 flex justify-center items-center'} onClick={() => navigate(`/blogdetails/${BlogIndex}`)} />
                          </div>
                        </form>
                      </div>
                    </div>
                  }
                </div>
              </motion.div>
            }

          </div>
          <div className='w-full lg:w-[29%]'>
            <div className='bg-white mt-5 md:mt-0 p-5'>
              <h1 className='text-2xl text-dark-brown font-lora text-start font-bold'>
                Tags
              </h1>
              <div className='flex gap-2 flex-wrap  mt-3'>
                <button className='bg-cream p-1 text-dark-brown hover:text-light-red duration-500'>Articles</button>
                <button className='bg-cream p-1 text-dark-brown hover:text-light-red duration-500'>Celebrations</button>
                <button className='bg-cream p-1 text-dark-brown hover:text-light-red duration-500'>Event</button>
                <button className='bg-cream p-1 text-dark-brown hover:text-light-red duration-500'>Joy</button>
                <button className='bg-cream p-1 text-dark-brown hover:text-light-red duration-500'>Mantra</button>
                <button className='bg-cream p-1 text-dark-brown hover:text-light-red duration-500'>Yoga</button>
                <button className='bg-cream p-1 text-dark-brown hover:text-light-red duration-500'>Maha Prasad</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default BlogDetails
