import React from 'react'
import {BsChevronLeft} from 'react-icons/bs'


function Prarrow(onClick) {
  return (
    <div className='absolute right-[80px] -top-[80px]' onClick={onClick}>
      <div className='bg-brand-01 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointev'>
        <BsChevronLeft/>
      </div>

    </div>
  )
}

export default Prarrow