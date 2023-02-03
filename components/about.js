import React from 'react'

function About() {
  return (
    <div>
        <div className='w-full h-[250px] flex-flex-col items-center bg-blue-400 pr-16 pl-[184px]'>
           <h1 className='font-Archivo text-6xl text-center font-semibold my-8'>Welcome to Cafe ParadiseBean!</h1>
           <div className='flex flex-row items-start my-5'>
            <img src='/5.jpg' className='w-[500px] h-auto'/>
            <div className='px-6 py-3 rounded-md border font-Kanit text-3xl mx-6'>Join our Discord and get listed for free mint</div>
           </div> 
        </div>
        <div className='h-full flex flex-col justify-end items-end pr-16 pl-[184px]'>
           <div className='w-[300px] text-xl font-Kanit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
            </div>
        </div>
    </div>
  )
}

export default About