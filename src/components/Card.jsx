import React from 'react'

const Card = ({title, children, metrix, desc = ""}) => {
  return (
    <div className='w-1/6 p-3 rounded-xl bg-[#748CF1] text-white'>
        <h1 className='pb-1 font-light'>{title}</h1>
        <h1 className='text-3xl pb-1 font-semibold'>{children} {metrix}</h1>
        <h1 className='font-light'>{desc}</h1>
    </div>
  )
}

export default Card