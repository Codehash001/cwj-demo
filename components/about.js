import React from 'react'

function About() {
  return (
    <div className='w-full h-full items-center'>
        <div className='w-full h-[250px] bg-blue-500 flex-flex-col items-center'>
           <h1 className='font-Archivo text-4xl text-center'>Welcome to Cafe ParadiseBean!</h1>
           <div className='flex flex-row items-start justify-end'>
            <img src='/5.jpg' className='w-[300px] h-auto'/>
            <div className='px-6 py-3 rounded-md border'>Join our Discord and get listed for free mint</div>
           </div> 
        </div>
        <div className='w-full h-full flex flex-col items-end'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </div>
    </div>
  )
}

export default About