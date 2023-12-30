import React from 'react'
import Button from '../Button/Button'

function DonationForm() {
    const handleSubmit = () => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-end rounded-full overflow-hidden bg-[#F6E0CE] gap-2 items-center w-[100px]'>
                    <h1>₹</h1>
                    <input type="text" className='p-2 justify-center text-center rounded-full text-dark-brown border border-cream focus:ring-0 focus:border-cream w-[70%] flex items-center' placeholder='100'/>
                </div>
                <div className='flex gap-2 flex-wrap items-center my-5'>
                    <button className='p-2  hover:bg-transparent border border-transparent duration-500 hover:border-dark-brown bg-cream text-dark-brown rounded-full'>₹ 100</button>
                    <button className='p-2  hover:bg-transparent border border-transparent duration-500 hover:border-dark-brown bg-cream text-dark-brown rounded-full'>₹ 500</button>
                    <button className='p-2  hover:bg-transparent border border-transparent duration-500 hover:border-dark-brown bg-cream text-dark-brown rounded-full'>₹ 5000</button>
                    <button className='p-2  hover:bg-transparent border border-transparent duration-500 hover:border-dark-brown bg-cream text-dark-brown rounded-full'>Custom</button>
                </div>
                <div>
                    <h1 className='font-lora text-xl text-start font-semibold'>Personal Details</h1>
                </div>
                <div className='flex flex-col gap-2 my-2'>
                    <input type="text" className='p-2 px-3 rounded-full text-dark-brown border border-cream focus:ring-0 focus:border-cream w-full' placeholder='Enter Full Name'/>
                    <input type="tel" className='p-2 px-3 rounded-full text-dark-brown border border-cream focus:ring-0 focus:border-cream w-full' placeholder='Enter Phone Number '/>
                    <input type="text" className='p-2 px-3 rounded-full text-dark-brown border border-cream focus:ring-0 focus:border-cream w-full' placeholder='Enter Pan Numebr'/>
                </div>
                <div>
                    <Button name={'donate now'} className={'bg-red text-white hover:bg-dark-brown duration-500'}/>
                </div>

            </form>
        </div>
    )
}

export default DonationForm