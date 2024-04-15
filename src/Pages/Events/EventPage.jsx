import React, { useEffect, useState } from 'react'
import headerImg from '../../Assets/event/header.jpg'
import Button from '../../Components/Button/Button'
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine, RiFilter3Line } from 'react-icons/ri'
import dayjs from 'dayjs'
import { getUpcomingEvent } from '../../Context/ApiData/getUpcomingEvent'
import { getPastEvent } from '../../Context/ApiData/getPastEvent'
import { AnimatePresence, motion } from 'framer-motion'

function EventPage() {

  const [isActive, setIsActive] = useState('upcoming')
  const [filterOpen, setFilterOpen] = useState(false)
  const [eventData, setEventData] = useState(null)
  const [searchEventData, setSearchEventData] = useState(null)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(3)

  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    const upcomingEvent = async () => {
      const result = await getUpcomingEvent(0, 100)
      console.log(result)
      if (result.IsSuccessful) {
        setEventData(result.Result)
      }
    }
    const pastEvent = async () => {
      const result = await getPastEvent(0, 100)
      console.log(result)
      if (result.IsSuccessful) {
        setEventData(result.Result)
      }
    }

    if (isActive == 'upcoming') {
      upcomingEvent()
    } else if (isActive == 'past') {
      pastEvent()
    }

  }, [isActive])

  const handleSearch = () => {
    if (searchInput !== '') {
      const filteredEventData = eventData.filter((item) =>
        item.Title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchEventData(filteredEventData);
    }
  };

  const cleanSearchInput = () => {
    setSearchEventData(null)
    setSearchInput('')
  }




  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-top flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`} style={{ '--image-url': `url(${headerImg})` }}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          {isActive} Events
        </div>
      </div>
      {eventData &&
        <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto  pb-5'>
          {/* searchbar */}
          <div className='flex items-center w-full gap-2 bg-white rounded-full my-5'>
            <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Search...' className='w-full focus:outline-none focus:shadow-none rounded-full p-4' />
            <div className='shrink-0 pe-5 flex gap-2 items-center'>
              {searchInput !== '' && <button onClick={cleanSearchInput}><RiCloseLine className='text-2xl hover:text-light-brown duration-300' /></button>}
              <div className='flex gap-2 items-center'>
                <Button onClick={handleSearch} name={'Find Event'} className={'bg-red shrink-0 text-cream hover:text-white hover:bg-dark-brown duration-500 flex justify-center items-center'} />
                <div className='relative mt-2'>
                  <button className='text-3xl' onClick={() => setFilterOpen(!filterOpen)}><RiFilter3Line /></button>
                  <AnimatePresence>
                    {filterOpen && <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className='absolute mt-2 bg-white w-[250px] p-2 rounded-md right-0 z-20'>
                        {isActive == 'upcoming' ?
                          <Button name={'Past Event'} className={'border border-dark-brown shrink-0 w-full text-dark-brown hover:text-white hover:bg-dark-brown duration-500 flex justify-center items-center'} onClick={(e) => { setIsActive('past'); setFilterOpen(!filterOpen) }} /> :
                          <Button name={'Upcoming Event'} className={'border border-dark-brown shrink-0 w-full text-dark-brown hover:text-white hover:bg-dark-brown duration-500 flex justify-center items-center'} onClick={(e) => { setIsActive('upcoming'); setFilterOpen(!filterOpen) }} />
                        }
                      </div>
                    </motion.div>}
                  </AnimatePresence>
                </div>

              </div>

            </div>

          </div>

          {/* pagination */}
          <div className='my-0 flex justify-between items-center'>

          </div>

          {/* eventlist */}
          {searchEventData ? <div className='flex flex-col text-dark-brown gap-5'>
            {
              searchEventData && searchEventData.map((item, i) => (
                <div key={item.Id} className='flex flex-col gap-5'>
                  {i == 0 &&
                    <div className='flex items-center gap-2'>
                      <h1 className='font-lora shrink-0 '>{dayjs(item.StartTime).format('MMM YYYY')}</h1><hr className='w-full border border-x-dark-brown' />
                    </div>
                  }
                  {i > 0 && dayjs(eventData[i - 1].StartTime).format('YYYY-MM-DD') != dayjs(item.StartTime).format('YYYY-MM-DD') &&
                    <div className='flex items-center gap-2'>
                      <h1 className='font-lora shrink-0 '>{dayjs(item.StartTime).format('MMM YYYY')}</h1><hr className='w-full border border-x-dark-brown' />
                    </div>
                  }

                  <div className='flex gap-2 justify-between'>
                    <div className='flex gap-2'>
                      <div className='shrink-0 px-3 md:w-[100px]'>
                        <h1>{dayjs(item.StartTime).format('ddd')}</h1>
                        <h1 className='font-bold'>{dayjs(item.StartTime).format('DD')}</h1>
                      </div>
                      <div className='text-start'>
                        <h1>{dayjs(item.StartTime).format('DD MMM YYYY h:mm A')}  - {dayjs(item.EndTime).format('DD MMM YYYY h:mm A')}</h1>
                        <h1 className='font-bold hover:text-light-red duration-300 cursor-pointer'>{item.Title}</h1>
                        {/* <p>{item.EventInfo.length > 20 ? item.EventInfo.slice(0, 20) + '...' : item.EventInfo}</p> */}
                        <p>{item.EventInfo}</p>
                      </div>
                    </div>
                    <div className='shrink-0 md:block hidden md:w-[300px] aspect-video overflow-hidden'>
                      <img src={`data:image/png;base64,${item.ThumbnailImage}`} alt="event" className='w-full h-full object-cover border-2 border-light-red hover:scale-125 duration-300' />
                    </div>
                  </div>
                </div>
              ))
            }
          </div> :
            <div className='flex flex-col text-dark-brown gap-5'>
              {
                eventData && eventData.map((item, i) => (
                  <div key={item.Id} className='flex flex-col gap-5'>
                    {i == 0 &&
                      <div className='flex items-center gap-2'>
                        <h1 className='font-lora shrink-0 '>{dayjs(item.StartTime).format('MMM YYYY')}</h1><hr className='w-full border border-x-dark-brown' />
                      </div>
                    }
                    {i > 0 && dayjs(eventData[i - 1].StartTime).format('YYYY-MM-DD') != dayjs(item.StartTime).format('YYYY-MM-DD') &&
                      <div className='flex items-center gap-2'>
                        <h1 className='font-lora shrink-0 '>{dayjs(item.StartTime).format('MMM YYYY')}</h1><hr className='w-full border border-x-dark-brown' />
                      </div>
                    }

                    <div className='flex gap-2 justify-between'>
                      <div className='flex gap-2'>
                        <div className='shrink-0 px-3 md:w-[100px]'>
                          <h1>{dayjs(item.StartTime).format('ddd')}</h1>
                          <h1 className='font-bold'>{dayjs(item.StartTime).format('DD')}</h1>
                        </div>
                        <div className='text-start'>
                          <h1>{dayjs(item.StartTime).format('DD MMM YYYY h:mm A')}  - {dayjs(item.EndTime).format('DD MMM YYYY h:mm A')}</h1>
                          <h1 className='font-bold hover:text-light-red duration-300 cursor-pointer'>{item.Title}</h1>
                          {/* <p>{item.EventInfo.length > 20 ? item.EventInfo.slice(0, 20) + '...' : item.EventInfo}</p> */}
                          <p>{item.EventInfo}</p>
                        </div>
                      </div>
                      <div className='shrink-0 md:block hidden md:w-[300px] aspect-video overflow-hidden'>
                        <img src={`data:image/png;base64,${item.ThumbnailImage}`} alt="event" className='w-full h-full object-cover border-2 border-light-red hover:scale-125 duration-300' />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          }
        </div>
      }
    </div>
  )
}

export default EventPage