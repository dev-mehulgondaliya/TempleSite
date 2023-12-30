import React from 'react'
import FooterNavBar from './FooterNavBar'

function Footer() {
  return (
    <div className='w-full bg-dark-brown py-5 '>
      <FooterNavBar />
      <div className='flex justify-center my-5 px-2 md:px-0'>
        <div className='bg-cream text-dark-brown rounded p-5 md:w-[400px]'>
          <p>Sardar Patel Bhavan -4th Floor, New Mayaninagar, Alka Society, Opp. Chandreshnagar Water Tank, Rajkot - 360004.
            Gujarat (India)</p>
        </div>
      </div>
      <div className='text-cream'>Copyright © <span className='text-light-red'>DestinyInfoTech</span> 2023. All Right Reserved.</div>
    </div>
  )
}

export default Footer