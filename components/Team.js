import React from 'react'

function Team() {
  return (
    <div className='flex flex-col items-center px-16'>
        <h1 className='font-semibold font-Archivo text-xl mx-8'>Team</h1>

        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col items-center p-6'>
                <img src='/5.jpg' className='w-[200px] h-[200px]'/>
                <h1 className='font-Archivo text-lg font-medium mt-6 mb-4'>Team Member</h1>
                <h1 className='font-Archivo text-md font-medium'>Team Memberb Name</h1>
            </div>

            <div className='flex flex-col items-center p-6'>
                <img src='/5.jpg' className='w-[200px] h-[200px]'/>
                <h1 className='font-Archivo text-lg font-medium mt-6 mb-4'>Team Member</h1>
                <h1 className='font-Archivo text-md font-medium'>Team Memberb Name</h1>
            </div>

            <div className='flex flex-col items-center p-6'>
                <img src='/5.jpg' className='w-[200px] h-[200px]'/>
                <h1 className='font-Archivo text-lg font-medium mt-6 mb-4'>Team Member</h1>
                <h1 className='font-Archivo text-md font-medium'>Team Memberb Name</h1>
            </div>

            <div className='flex flex-col items-center p-6'>
                <img src='/5.jpg' className='w-[200px] h-[200px]'/>
                <h1 className='font-Archivo text-lg font-medium mt-6 mb-4'>Team Member</h1>
                <h1 className='font-Archivo text-md font-medium'>Team Memberb Name</h1>
            </div>
        </div>
    </div>
  )
}

export default Team