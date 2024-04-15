import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import headerImg from '../../Assets/about/campus.jpg'
import { AnimatePresence, motion } from 'framer-motion';
import myContext from '../../Context/StateData/myContext';
import { RiCalendarEventLine, RiFacebookLine, RiTwitterXLine, RiWhatsappLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import Button from '../../Components/Button/Button';
import Loader from '../../Components/Loader/Loader';
import { useNavigate, useParams } from 'react-router';
import { getBlogDetails } from '../../Context/ApiData/getBlogDetails';
import dayjs from 'dayjs';
import { getCommentsByBlogId } from '../../Context/ApiData/getCommentsByBlogId';
import MsgToast from '../../Components/Notify/MsgToast';
import NotifyMsg from '../../Components/Notify/NotifyMsg';
import { ToastContainer } from 'react-toastify';
import { AddCommentsAPI } from '../../Context/ApiData/AddComments';

function BlogDetails() {

  const [blogData, setBlogData] = useState(null)
  const [commentData, setCommentData] = useState(null)
  const [commentBy, setCommentBy] = useState('')
  const [commentMsg, setCommentMsg] = useState('')
  const [commentMsgCount, setCommentMsgCount] = useState(2)
  const [commentSend, setCommentSend] = useState(false)
  const { id } = useParams()


  useEffect(() => {
    const blogdetails = async () => {
      const result = await getBlogDetails(id)
      console.log('blogdetails', result)
      if (result.IsSuccessful) {
        setBlogData(result.Result)
      }
    }

    const commentData = async () => {
      const result = await getCommentsByBlogId(id)
      console.log('commentdata', result)
      if (result.IsSuccessful) {
        setCommentData(result.Result)
      }
    }

    blogdetails()
    commentData()
  }, [commentSend])

  const handleComment = useCallback(async () => {
    if (commentBy == '' && commentMsg == '') {
      alert('please type name and message')
    } else {
      const result = await AddCommentsAPI(commentMsg, commentBy, id)
      console.log(result)
      if (result.IsSuccessful) {
        setCommentSend(!commentSend)
        setCommentMsg('')
        setCommentBy('')
      }
    }
  }, [commentBy, commentMsg])


  return (
    <div>

      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`} style={{ '--image-url': `url(${headerImg})` }}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          Blog
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-10'>
        <div className='flex flex-wrap lg:flex-nowrap justify-between gap-2'>
          <div className='w-full flex flex-col gap-2'>
            {blogData ?
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                transition={{ duration: 0.5 }}
              >
                <div className='flex flex-col gap-2'>

                  <div className='w-full'>
                    {/* blog details show */}

                    {blogData.map((BlogItem) => (
                      <div className='w-full' key={BlogItem.Id}>
                        <div className='h-[250px] md:h-[400px] w-full'>
                          <img src={`data:image/png;base64,${BlogItem.BlogHeaderImage}`} alt="img" className='object-fill w-full h-full' />
                        </div>
                        <div className='p-5 bg-white flex flex-col gap-2'>
                          <h1 className='text-2xl md:text-4xl text-dark-brown font-lora text-start font-bold'>
                            {BlogItem.BlogHeader}
                          </h1>
                          <div className='flex justify-between md:flex-row flex-col'>
                            <h1 className='flex gap-2 items-center font-semibold text-sm text-light-red'><RiCalendarEventLine />{dayjs(BlogItem.CreatedTime).format('DD-MM-YYYY HH:mm A')}<IoChatbubbleOutline />{BlogItem.CommentCount} Comments</h1>
                            <h1 className='font-semibold text-sm text-light-red text-start'>~{BlogItem.CreatedBy}</h1>
                          </div>
                          <p className='text-light-brown text-start break-all'>{BlogItem.BlogDescriptionText}</p>
                          <div dangerouslySetInnerHTML={{ __html: BlogItem.BlogDescriptionHTML }} />
                          <div className='flex flex-col md:flex-row gap-5 justify-between items-center mt-5'>
                            <div className='flex items-center shrink-0 gap-2'>
                              <span className='font-semibold font-lora text-dark-brown'>Tags : {BlogItem.Tag}</span>
                            </div>
                            <div className='w-full flex items-center justify-center md:justify-end gap-2'>
                              <h1 className='font-semibold font-lora text-dark-brown'>Share :</h1>
                              <Button name={<RiWhatsappLine className='text-xl' />} className={'bg-dark-brown shrink-0 text-white hover:bg-red duration-500 md:w-[50px] md:h-[50px] flex justify-center items-center'} />
                              <Button name={<RiTwitterXLine className='text-xl' />} className={'bg-dark-brown shrink-0 text-white hover:bg-red duration-500 md:w-[50px] md:h-[50px] flex justify-center items-center'} />
                              <Button name={<RiFacebookLine className='text-xl' />} className={'bg-dark-brown shrink-0 text-white hover:bg-red duration-500 md:w-[50px] md:h-[50px] flex justify-center items-center'} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))

                    }

                    {/* comment show */}
                    {commentData && commentData.length > 0 &&
                      <div className='mt-5 flex flex-col gap-2'>
                        {commentData.slice(0, commentMsgCount).map((commentItem) => (
                          <div key={commentItem.Id} className='p-5 bg-dark-brown text-cream text-start'>
                            <div className='flex justify-between'>
                              <h1 className='text-2xl font-lora font-semibold'>{commentItem.CommentBy}</h1>

                            </div>
                            <p>{commentItem.Comment}</p>
                            <h1 className='text-sm flex justify-end font-semibold'>{dayjs(commentItem.CommentDateTime).format('DD-MM-YYYY')}</h1>
                          </div>
                        ))

                        }

                        <div className='flex justify-between'>
                          <h1 className='flex gap-2 items-center font-semibold text-light-red'><IoChatbubbleOutline /> {blogData[0].CommentCount} Comments</h1>
                          {commentData.length > 2 &&  commentMsgCount < commentData.length ?
                            <Button name={'More Comments'} className={'bg-red shrink-0 text-white hover:bg-light-brown duration-500 flex justify-center items-center'} onClick={() => setCommentMsgCount(commentMsgCount + 5)} /> :
                            <h1></h1>
                          }
                        </div>
                      </div>
                    }

                    {/* comment form */}
                    <div className='mt-5 flex flex-col gap-2'>
                      <h1 className='font-lora text-start font-semibold text-dark-brown text-2xl'>Leave a Comment</h1>
                      <form onClick={(e) => e.preventDefault()}>
                        <div className='flex flex-col w-full md:flex-row gap-2'>
                          <input type="text" value={commentBy} onChange={(e) => setCommentBy(e.target.value)} className='rounded-full text-sm p-2 px-3 w-full border-2 border-cream' placeholder='Enter Full Name*' />
                          {/* <input type="email" className='rounded-full text-sm p-2 px-3 border-2 w-full border-cream' placeholder='Enter Email Address*' /> */}
                        </div>
                        <div>
                          <textarea value={commentMsg} onChange={(e) => setCommentMsg(e.target.value)} className='w-full mt-2 border-2 border-cream rounded-3xl h-[150px] text-sm p-2 px-3' placeholder='Your comment*' style={{ resize: 'none' }}></textarea>
                        </div>
                        <div>
                          <Button name={'Send Comment'} className={'bg-light-red shrink-0 text-dark-brown hover:text-white hover:bg-light-brown duration-500 flex justify-center items-center'} onClick={handleComment} />
                        </div>
                      </form>
                    </div>
                  </div>

                </div>
              </motion.div>
              : <h1><Loader /></h1>
            }

          </div>


        </div>
      </div>
    </div >
  )
}

export default BlogDetails
