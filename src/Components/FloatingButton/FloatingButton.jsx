import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi";

function FloatingButton() {
    const handleUp = () => {
        const element = document.documentElement;
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <button
            className='fixed bottom-2 text-red right-3 text-4xl'
            onClick={handleUp}
        >
            <BiSolidUpArrow />
        </button>
    )
}

export default FloatingButton