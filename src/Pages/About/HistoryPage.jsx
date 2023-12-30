import React, { useContext, useRef } from 'react'
import headerImg from '../../Assets/about/history.png'
import TimeLine from '../../Components/Timeline/TimeLine';
import myContext from '../../Context/StateData/myContext';

function HistoryPage() {
  const {HistoryTimeLineData} = useContext(myContext)
  return (
    <div>
      <div className={`h-[30vh] md:h-[50vh] bg-cover bg-no-repeat bg-center flex justify-center items-end p-5 bg-dark-brown md:shadow-[inset_0px_20px_200px_50px_#49263D] md:bg-[image:var(--image-url)]`}  style={{'--image-url': `url(${headerImg})`}}>
        <div className='p-5 font-lora text-2xl md:text-5xl font-black text-cream capitalize'>
          History
        </div>
      </div>
      <div className='w-[90vw] md:w-[70vw] max-w-[1024px] mx-auto  py-10'>
        <TimeLine data={HistoryTimeLineData}/>
      </div>
    </div>
  )
}

export default HistoryPage