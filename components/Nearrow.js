import React from 'react'
import {BsChevronRight} from 'react-icons/bs'

function Nearrow(onClick) {
  return (
    <div className='absolute right-0 -top-[80px]' onClick={onClick}>
      <div className='bg-brand-01 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointev'>
        <BsChevronRight/>
      </div>

    </div>
  )
}

export default Nearrow











