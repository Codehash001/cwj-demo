import React from 'react'

function About() {
  return (
    <div>
        <div className='w-full h-[250px] flex-flex-col items-center bg-[#fc9b40] px-16 pt-8'>
           <h1 className='font-Archivo text-6xl text-center font-semibold mb-8'>Welcome to Cafe ParadiseBean!</h1>
           <div className='flex flex-row items-start my-5'>
            <img src='/webimage1.png' className='w-[400px] h-auto rounded-lg'/>
            <div className='flex flex-col items-center mx-6'>
            <div className='px-6 py-3 rounded-md border'>
              <h1 className='font-Kanit text-3xl'>Join our Discord and get listed for free mint</h1>
            </div>
            <div className='w-[550px] mt-16'>
           <p className='text-xl font-Kanit text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
            </p>
        </div>
            </div>
           </div> 
           {/* row2 */}

            <div className='flex flex-row items-start my-5'>
            
            <div className='flex flex-col items-center'>
               <div className='w-[550px] mt-16'>
           <p className='text-xl font-Kanit text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
            </p>
        </div>
            <div className='px-6 py-3 rounded-md border'>
              <h1 className='font-Kanit text-3xl'>Join our Discord and get listed for free mint</h1>
            </div>
           
            </div>

            <img src='/webimage2.png' className='w-[400px] h-auto mx-6 rounded-lg'/>
            
           </div> 
        </div>

    </div>
  )
}

export default About