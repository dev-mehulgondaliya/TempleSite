import React, { useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { Transition } from '@headlessui/react';

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'https://images.pexels.com/photos/2900315/pexels-photo-2900315.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2896474/pexels-photo-2896474.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2872081/pexels-photo-2872081.jpeg?auto=compress&cs=tinysrgb&w=400',
        // Add more image URLs as needed
    ];



    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    return (

        <div className='flex justify-center items-center  w-full h-full relative bg-dark-brown overflow-hidden'>
            {
                images.map((image, index) => (
                    <AnimatePresence key={index}>
                        {index === currentIndex && (
                            <motion.div
                                initial={{ opacity: 0, width: '80%', height: '80%' }}
                                animate={{ opacity: 1, width: '100%', height: '100%' }}
                                exit={{ opacity: 0, width: '150%', height: '150%' }}
                                transition={{ duration: 1 }}
                                className='w-full h-full absolute'
                                key={index}
                            >
                                <div className='w-full h-full bg-cover bg-no-repeat bg-center ' style={{boxShadow : 'inset 0 30px 200px 100px #49263D', backgroundImage : `url(${image})`}}>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                ))
            }

            <div className='absolute w-full flex items-center justify-between p-10 text-2xl text-cream left-0  right-0 bottom-0'>
                <button onClick={handlePrev} className='hover:text-red duration-300'><FaLongArrowAltLeft /></button>
                <button onClick={handleNext} className='hover:text-red duration-300'><FaLongArrowAltRight /></button>
            </div>
        </div>
    )
}

export default ImageSlider

// style={{
//     boxShadow: 'inset 0px 0px 100px 25px #210E1A',
//     backgroundImage: `url(${images[currentIndex]})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
// }}