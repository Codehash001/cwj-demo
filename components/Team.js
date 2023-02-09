import React from 'react'

function Team() {
  return (
    <div className='flex flex-col items-center px-16'>
        <h1 className='font-semibold font-Archivo text-5xl my-10 bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent'>Team</h1>

        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col items-center p-6'>
                <img src='/owner.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-xl font-medium mt-3 mb-2 text-brand-01'>Team Member Name</h1>
                <h1 className='font-Archivo text-lg font-medium'>Team Memberb</h1>
            </div>

            <div className='flex flex-col items-center p-6'>
                <img src='/discIng.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-xl font-medium mt-3 mb-2 text-brand-01'>Team Member Name</h1>
                <h1 className='font-Archivo text-lg font-medium'>Team Memberb</h1>
            </div>

            <div className='flex flex-col items-center p-6'>
                <img src='/webdev.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-xl font-medium mt-3 mb-2 text-brand-01'>Team Member Name</h1>
                <h1 className='font-Archivo text-lg font-medium'>Team Memberb</h1>
            </div>

            <div className='flex flex-col items-center p-6'>
                <img src='/socialM.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-xl font-medium mt-3 mb-2 text-brand-01'>Team Member Name</h1>
                <h1 className='font-Archivo text-lg font-medium'>Team Memberb</h1>
            </div>

        </div>
    </div>
  )
}

export default Team

