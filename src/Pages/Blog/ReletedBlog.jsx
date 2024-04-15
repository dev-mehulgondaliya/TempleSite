import React, { useCallback, useContext, useEffect, useState } from 'react'
import headerImg from '../../Assets/about/campus.jpg'
import { AnimatePresence, motion } from 'framer-motion';
import myContext from '../../Context/StateData/myContext';
import { RiCalendarEventLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import Button from '../../Components/Button/Button';
import Loader from '../../Components/Loader/Loader';
import { useNavigate, useParams } from 'react-router';
import { getBlog } from '../../Context/ApiData/getBlog';
import dayjs from 'dayjs';
import { getRelatedBlog } from '../../Context/ApiData/getRelatedBlog';

function ReletedBlog() {
    const { tag } = useParams()
    const [blogData, setBlogData] = useState(null)
    const [indexOfLastBlog, setIndexOfLastBlog] = useState(2);

    const navigate = useNavigate()

    useEffect(() => {
        const blog = async () => {
            const result = await getRelatedBlog(tag, indexOfLastBlog)
            console.log('blog', result)
            if (result.IsSuccessful) {
                setBlogData(result.Result)
            }
        }
        blog()
    }, [indexOfLastBlog, tag])


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
                        <AnimatePresence>
                            {blogData ?
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 3 }}
                                >
                                    <div className='flex flex-col gap-2'>
                                        {blogData && blogData.length > 0 && blogData.map((BlogItem) => (
                                            <div key={BlogItem.Id} className='w-full'>
                                                <div className='h-[250px] md:h-[400px] w-full'>
                                                    <img src={`data:image/png;base64,${BlogItem.BlogHeaderImage}`} alt="img" className='object-fill w-full h-full' />
                                                </div>
                                                <div className='p-5 bg-white flex flex-col gap-2'>
                                                    <h1 className='text-4xl text-dark-brown font-lora text-start font-bold'>
                                                        {BlogItem.BlogHeader}
                                                    </h1>
                                                    <h1 className='flex gap-2 items-center font-semibold text-sm text-light-red'><RiCalendarEventLine />{dayjs(BlogItem.CreatedTime).format('DD-MM-YYYY HH:mm A')}<IoChatbubbleOutline />{BlogItem.CommentCount} Comments</h1>
                                                    <p className='text-light-brown text-start break-all'>{BlogItem.BlogDescriptionText}</p>
                                                    <div className='w-full flex'>
                                                        <Button name={'Read more'} className={'bg-red text-white hover:bg-dark-brown duration-500'} onClick={() => navigate(`/blogdetails/${BlogItem.Id}`)} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        }
                                    </div>
                                </motion.div>
                                :
                                <h1><Loader /></h1>
                            }
                        </AnimatePresence>
                        {blogData && <div className='w-full flex justify-center gap-2 mt-5'>
                            {blogData.length <= indexOfLastBlog ?
                                <h1 >No More Blog</h1> :
                                <Button name={'More Blog'} className={'bg-light-brown text-cream hover:bg-light-red duration-500 hover:text-dark-brown'} onClick={() => setIndexOfLastBlog(indexOfLastBlog + 3)} />
                            }
                        </div>}
                    </div>
                    <div className='w-full lg:w-[29%]'>
                        <div className='bg-white mt-5 md:mt-0 p-5'>
                            <h1 className='text-2xl text-dark-brown font-lora text-start font-bold'>
                                Tags
                            </h1>
                            <div className='flex gap-2 flex-wrap  mt-3'>
                                <button className='bg-cream p-1 text-dark-brown hover:text-light-red duration-500' onClick={() => navigate('/reletedblog/Ekadashi')}>Ekadashi</button>
                                <button className='bg-cream p-1 text-dark-brown hover:text-light-red duration-500' onClick={() => navigate('/reletedblog/Dharmik')}>Dharmik</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ReletedBlog
