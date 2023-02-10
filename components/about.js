import React from 'react'
import Mintportal from './Mintportal'

function About() {
  return (
    <div id='about' className='h-auto'>
            <div className='w-full h-[80px] bg-brand-01 flex flex-col items-center justify center'></div>
             <div className='w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify center md:mt-16'>
             <div className='px-6 py-4 border bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l md:flex md:flex-row flex-col items-center md:my-16 my-8'>
              <h1 className='font-Kanit md:text-2xl text-lg text-black'>Join our Discord and get listed for free mint</h1>
              <a href=''>
              <button className='md:text-xl text-[20px] font-Archivo text-black px-4 py-2 border border-black md:rounded-full md:ml-8 ml-2 bg-white hover:bg-slate-400'>Join Now</button>
              </a>
            </div>
             </div>
        <div className='w-full h-full hidden md:flex flex-col items-center px-16 pt-8'>
           
           <div className='flex flex-row items-start mb-5'>
            <img src='/webimage1.png' className='w-[400px] h-auto rounded-lg'/>
            <div className='flex flex-col items-center ml-6'>
            <h1 className='font-Archivo text-5xl text-center font-semibold my-4 bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent'>Welcome to Cafe ParadiseBean!</h1>
            <div className='mt-16 ml-12'>
           <p className='text-xl font-Kanit text-justify'>We are the greatest place on earth you can enjoy that special cup of java with Jesus. What an incredible way to start your day off right. No matter what you're going through or where you are, He's always there with that special mug of morning goodness for you.
            Nothing says HAVE A GREAT DAY like Jesus sharing some relaxing time with you.Here at the cafe, we feature a majestic collection of 300 unique and artistic tokens, each with their own distinctive traits to make your day feel even better.
          </p>
        </div>
            </div>
           </div> 
           {/* row2 */}

            <div className='flex flex-row items-start my-5'>
            
            <div className='flex flex-col items-center'>
               <div className='mt-12 mr-16'>
           <p className='text-xl font-Kanit text-justify'>
Our collection was created for you to be a beacon of inspiration and positivity. The mission of the artist is to spread a grand message of courage, motivation and movement throughout the world. So come and enjoy a fresh cup of java with Jesus, and begin your day with a smile!Our vision is for our collection to bring the light of inspiration and the incentive to strive for happiness across the globe.
Join us on the journey to enlighten the world on this mission.
            </p>
        </div>
            <div className='px-6 py-3 rounded-md border'>
              <h1 className='font-Kanit text-3xl'>Join our Discord and get listed for free mint</h1>
            </div>
           
            </div>

            <img src='/webimage2.png' className='w-[400px] h-auto ml-6 rounded-lg'/>
            
           </div>
           
        </div>

        <div className='md:hidden flex flex-col w-full h-full items-center px-2'>

        <h1 className='font-Archivo text-3xl text-center font-semibold my-4 bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent'>Welcome to Cafe ParadiseBean!</h1>
        <img src='/webimage1.png' className='w-[400px] h-auto rounded-lg my-4'/>

        <p className='text-lg font-Kanit text-justify my-4'>We are the greatest place on earth you can enjoy that special cup of java with Jesus. What an incredible way to start your day off right. No matter what you're going through or where you are, He's always there with that special mug of morning goodness for you.
            Nothing says HAVE A GREAT DAY like Jesus sharing some relaxing time with you.Here at the cafe, we feature a majestic collection of 300 unique and artistic tokens, each with their own distinctive traits to make your day feel even better.
        </p>

        <img src='/webimage2.png' className='w-[400px] h-auto my-4 rounded-lg'/>

        <p className='text-xl font-Kanit text-justify my-4'>
Our collection was created for you to be a beacon of inspiration and positivity. The mission of the artist is to spread a grand message of courage, motivation and movement throughout the world. So come and enjoy a fresh cup of java with Jesus, and begin your day with a smile!Our vision is for our collection to bring the light of inspiration and the incentive to strive for happiness across the globe.
Join us on the journey to enlighten the world on this mission.
            </p>
        </div>
 
    </div>
  )
}

export default About
