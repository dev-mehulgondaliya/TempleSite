import React, { useEffect, useState } from 'react'
import headerImg from '../../Assets/media/photo.jpg'
import Button from '../../Components/Button/Button'
import { motion } from 'framer-motion'
import { MdDownload } from "react-icons/md";
import download from 'downloadjs';
import { getAllRingTone } from '../../Context/ApiData/getAllRingTone';
import { getWallpaperList } from '../../Context/ApiData/getWallpaperList';
import ReactAudioPlayer from 'react-audio-player';


function Download() {

  const [numberOfIndex, setNumberOfIndex] = useState(6)
  const [isAcvtive, setIsActive] = useState('wallpaper')
  const [wallpaperData, setWallpaperData] = useState(null)
  const [ringtoneData, setRingtoneData] = useState(null)



  const handeleIsActive = (value) => {
    setIsActive(value)
    if (value == 'wallpaper') {
      setRingtoneData(null)
      setNumberOfIndex(6)
    } else if (value == 'ringtone') {
      setWallpaperData(null)
      setNumberOfIndex(6)
    }
  }

  useEffect(() => {
    const ringtone = async () => {
      const result = await getAllRingTone()
      console.log(result)
      if (result.IsSuccessful) {
        setRingtoneData(result.Result)
      }
    }

    const wallpaper = async (start, end) => {
      const result = await getWallpaperList(start, end)
      console.log(result)
      if (result.IsSuccessful) {
        setWallpaperData(result.Result)
      }
    }

    if (isAcvtive == 'wallpaper') {
      wallpaper(0, numberOfIndex)
    } else if (isAcvtive == 'ringtone') {
      ringtone()
    }

  }, [isAcvtive, numberOfIndex])


  const moreImage = () => {
    setNumberOfIndex(numberOfIndex + 6)
  }

  const downloadImg = (name, url) => {
    const fileUrl = `data:image/png;base64,${url}`;
    const fileName = name;
    download(fileUrl, fileName)
  }
  const downloadAudio = (name, url) => {
    const fileUrl = `data:Audio/mp3;base64,${url}`;
    const fileName = name;
    download(fileUrl, fileName)
  }

  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`} style={{ '--image-url': `url(${headerImg})` }}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          Download
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto md:p-5 py-5'>
        <div className='flex gap-5 mb-5'>
          <button className={`${isAcvtive == 'wallpaper' && 'border-b-2 border-b-red text-red'} py-5 hover:text-light-red duration-300`} onClick={() => handeleIsActive('wallpaper')}>Wallpaper</button>
          <button className={`${isAcvtive == 'ringtone' && 'border-b-2 border-b-red text-red'} py-5 hover:text-light-red duration-300`} onClick={() => handeleIsActive('ringtone')}>Ringtone</button>
        </div>
        {wallpaperData && <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
              {
                wallpaperData && wallpaperData.slice(0, numberOfIndex).map((item, i) => (
                  i % 3 == 0 ?
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`bg-red border  shrink-0 aspect-square w-full col-span-2 row-span-2 relative`}
                      key={item.Id}
                    >
                      <img src={`data:image/png;base64,${item.ThumbnailImageName}`} alt="photo" className='w-full h-full object-cover' />
                      <button className='absolute top-1 right-1 text-white text-xl hover:text-light-brown duration-300' onClick={() => downloadImg(item.ImageName, item.ThumbnailImageName)}><MdDownload /></button>
                    </motion.div>
                    :
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className='bg-red border  shrink-0 aspect-square relative'
                      key={item.Id}
                    >
                      <img src={`data:image/png;base64,${item.ThumbnailImageName}`} alt="photo" className='w-full h-full object-cover' />
                      <button className='absolute top-1 right-1 text-white text-xl hover:text-light-brown duration-300' onClick={() => downloadImg(item.ImageName, item.ThumbnailImageName)}><MdDownload /></button>
                    </motion.div>
                ))
              }
            </div>
          </motion.div>
          <div className='mt-5'>
            {wallpaperData && wallpaperData.length <= numberOfIndex ?
              <h1 >No More Image</h1> :
              <Button name={'More Image'} className={'bg-light-brown text-cream hover:bg-light-red duration-500 hover:text-dark-brown'} onClick={moreImage} />
            }
          </div>
        </div>}
        {ringtoneData && <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex flex-col gap-2'>
              {
                ringtoneData && ringtoneData.slice(0, numberOfIndex).map((item, i) => (
                  <div>
                    <h1 className='ms-3 shrink-0  md:hidden text-start truncate mb-3'>{item.RingToneName}</h1>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`bg-[#f2f2f2] rounded-full border items-center border-dark-brown flex justify-between ps-5 pe-3  shrink-0  w-full  relative`}
                      key={item.Id}
                    >
                      <ReactAudioPlayer
                        src={`data:audio/mpeg;base64,${item.FileName}`}
                        className='w-full'
                        controls
                      />
                      <button className='  text-2xl hover:text-light-brown duration-300' onClick={() => downloadAudio(item.RingToneName, item.FileName)}><MdDownload /></button>
                      <h1 className='ms-3 shrink-0 w-[200px] text-start truncate hidden md:block'>{item.RingToneName}</h1>
                    </motion.div>
                  </div>
                ))
              }
            </div>
          </motion.div>
          <div className='mt-5'>
            {ringtoneData && ringtoneData.length <= numberOfIndex ?
              <h1 >No More Ringtone</h1> :
              <Button name={'More Ringtone'} className={'bg-light-brown text-cream hover:bg-light-red duration-500 hover:text-dark-brown'} onClick={moreImage} />
            }
          </div>
        </div>}
      </div >
    </div >
  )
}

export default Download