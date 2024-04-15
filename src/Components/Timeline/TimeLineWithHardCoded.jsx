import dayjs from 'dayjs'
import { AnimatePresence, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

function TimeLineWithHardCoded({ data }) {
    const timeline = useRef()
    const isInViewTimeline = useInView(timeline)
    const [showTimeline, setShowTimeline] = useState(false)

    useEffect(() => {
        if (isInViewTimeline) {
            setShowTimeline(true)
        }
    }, [isInViewTimeline])

    return (
        <div ref={timeline} className='overflow-hidden ps-2 md:ps-0'>
            <AnimatePresence>
                {
                    showTimeline &&
                    <motion.div
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: '0' }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <div>
                            {
                                data && data.map((item, index) => (
                                    <div key={index} className={`flex justify-center gap-5 md:gap-10 ${index % 2 != 0 && 'md:flex-row-reverse'}`}>
                                        <div className='hidden md:flex justify-center items-center w-[400px] h-[200px] my-3 overflow-hidden'>
                                            <img
                                                src={item.ImageData}
                                                alt="photo"
                                                className='border-2 border-light-red w-full h-full object-cover hover:scale-125 transition-transform duration-300'
                                            />
                                        </div>
                                        <div className=' w-[2px] bg-light-red relative'>
                                            <div className='w-3 h-3 my-5 md:my-2 absolute left-[50%] translate-x-[-50%] rounded-full bg-light-red'></div>
                                        </div>
                                        <div className='w-[400px] py-3 md:py-0 text-start'>
                                            <h1 className='font-lora text-red text-xl font-bold capitalize'>{item.StartTimeTitle}</h1>
                                            <div className='flex gap-1'>
                                                {item.StartTime && <h3 className='text-dark-brown font-semibold'>{dayjs(item.StartTime).format('HH:mm A')} </h3>}
                                                {item.EndTime && <h3 className='text-dark-brown font-semibold'> - {dayjs(item.EndTime).format('HH:mm A')}</h3>}
                                                {item.time && <h3 className='text-dark-brown font-semibold'>{item.time}</h3>}
                                            </div>
                                            <p className='text-light-red text-sm'>{item.Description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>

    )
}

export default TimeLineWithHardCoded