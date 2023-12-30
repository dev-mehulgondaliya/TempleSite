import React, { useContext, useEffect, useState } from 'react'
import headerImg from '../../Assets/about/campus.jpg'
import { AnimatePresence, motion } from 'framer-motion';
import myContext from '../../Context/StateData/myContext';
import { RiCalendarEventLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import Button from '../../Components/Button/Button';
import Loader from '../../Components/Loader/Loader';
import { useNavigate } from 'react-router';

function BlogPage() {

  const { BlogData } = useContext(myContext)

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * 3;
  const indexOfFirstBlog = indexOfLastBlog - 3;
  const currentBlogs = BlogData.slice(indexOfFirstBlog, indexOfLastBlog);
  const navigate = useNavigate()

  const paginate = (pageNumber) => {
    setIsLoading(true)
    setCurrentPage(pageNumber)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const renderPaginationButtons = () => {

    const totalPages = Math.ceil(BlogData.length / 3);
    const visiblePageCount = 3;

    let startPage = currentPage - Math.floor(visiblePageCount / 2);
    startPage = Math.max(startPage, 1);

    let endPage = startPage + visiblePageCount - 1;
    endPage = Math.min(endPage, totalPages);

    const paginationButtons = Array.from({ length: endPage - startPage + 1 }, (_, index) => {
      const pageNumber = startPage + index;
      return (
        <div key={pageNumber}>
          <Button
            name={pageNumber}
            className={`${currentPage === pageNumber ? 'bg-dark-brown text-cream' : 'bg-cream text-dark-brown'} hover:text-light-red duration-500 w-[50px] h-[50px] font-bold`}
            onClick={() => paginate(pageNumber)}
          />
        </div>
      );
    });

    if (currentPage === totalPages) {
      paginationButtons.shift();
    }

    return paginationButtons;
  };

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
                  {currentBlogs && currentBlogs.map((BlogItem, BlogIndex) => (
                    <div key={BlogIndex} className='w-full'>
                      <div className='h-[250px] md:h-[400px] w-full'>
                        <img src={BlogItem.img} alt="img" className='object-fill w-full h-full' />
                      </div>
                      <div className='p-5 bg-white flex flex-col gap-2'>
                        <h1 className='text-4xl text-dark-brown font-lora text-start font-bold'>
                          {BlogItem.title}
                        </h1>
                        <h1 className='flex gap-2 items-center font-semibold text-sm text-light-red'><RiCalendarEventLine />{BlogItem.date}<IoChatbubbleOutline />{BlogItem.comment} Comments</h1>
                        <p className='text-light-brown text-start'>{BlogItem.desc}</p>
                        <div className='w-full flex'>
                          <Button name={'Read more'} className={'bg-red text-white hover:bg-dark-brown duration-500'} onClick={()=>navigate(`/blogdetails/${BlogIndex}`)} />
                        </div>
                      </div>
                    </div>
                  ))
                  }
                </div>
              </motion.div>
            }
            <div className='w-full flex gap-2 mt-5'>
              <Button name={'Prev'} className={`bg-cream text-dark-brown  duration-500 hover:text-light-red w-[50px] h-[50px] font-bold`} onClick={() => { currentPage > 1 && paginate(currentPage - 1) }} />
              {renderPaginationButtons()}
              <Button name={'Next'} className={`bg-cream text-dark-brown  duration-500 hover:text-light-red w-[50px] h-[50px] font-bold`} onClick={() => { currentPage < Math.ceil(BlogData.length / 3) && paginate(currentPage + 1) }} />
            </div>
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

export default BlogPage