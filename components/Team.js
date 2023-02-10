import React from 'react'

function Team() {
  return (
    <div id='team' className='flex flex-col items-center md:px-16 px-2'>
        <h1 className='font-semibold font-Archivo text-5xl my-10 bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent'>Team</h1>

        <div className='flex md:flex-row flex-col items-center justify-between'>
            <div className='flex flex-col items-center p-6'>
                <img src='/owner.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-2xl font-medium mt-3 mb-2 text-brand-01'>Mr.Phoenyx</h1>
                <h1 className='font-Archivo text-xl font-medium'>Cafe Owner, Majestic Battista</h1>
            </div>

            <div className='flex flex-col items-center p-6'>
                <img src='/discIng.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-2xl font-medium mt-3 mb-2 text-brand-01'>Sam</h1>
                <h1 className='font-Archivo text-xl font-medium'>Discord Engineer</h1>
            </div>

            <div className='flex flex-col items-center p-6'>
                <img src='/webdev.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-2xl font-medium mt-3 mb-2 text-brand-01'>CodeHash</h1>
                <h1 className='font-Archivo text-xl font-medium'>Web and Blockchain dev</h1>
            </div>

            <div className='flex flex-col items-center p-6'>
                <img src='/socialM.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-2xl font-medium mt-3 mb-2 text-brand-01'>Ashely</h1>
                <h1 className='font-Archivo text-xl font-medium'>Social Media Director</h1>
            </div>

        </div>
    </div>
  )
}

export default Team

