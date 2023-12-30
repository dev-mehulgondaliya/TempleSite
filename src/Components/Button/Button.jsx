import React from 'react'

function Button({name,className,onClick}) {
  return (
    <button className={`${className} capitalize rounded-full p-2 text-sm md:text-base`} onClick={onClick}>{name}</button>
  )
}

export default Button