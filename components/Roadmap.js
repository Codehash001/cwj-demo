import React from 'react'
import Slider from "react-slick";
import Head from 'next/head';

function Roadmap() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
    <Head>
        <title>Coffee With Jesus - Demo</title>
        <meta name="Description" content="Coffe with Jesus - demo!" />
        <link rel="icon" href="/Logoicon.png" />
        
       <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
	      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
    <div className='w-screen h-full px-16 flex flex-col items-center'>
        <h1 className='font-Archivo text-lg font-semibold my-8'>Roadmap</h1>

        {/* slider */}
<Slider {...settings}>
        <div className='p-6 flex flex-col items-center bg-gray-800 rounded-lg'>
          <h1 className='text-lg font-semibold text-white mb-6'>Title here</h1>
          <p className='text-gray-100 font-medium text-justify text-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='p-6 flex flex-col items-center bg-gray-800 rounded-lg'>
          <h1 className='text-lg font-semibold text-white mb-6'>Title here</h1>
          <p className='text-gray-100 font-medium text-justify text-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>


        <div className='p-6 flex flex-col items-center bg-gray-800 rounded-lg'>
          <h1 className='text-lg font-semibold text-white mb-6'>Title here</h1>
          <p className='text-gray-100 font-medium text-justify text-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='p-6 flex flex-col items-center bg-gray-800 rounded-lg'>
          <h1 className='text-lg font-semibold text-white mb-6'>Title here</h1>
          <p className='text-gray-100 font-medium text-justify text-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='p-6 flex flex-col items-center bg-gray-800 rounded-lg'>
          <h1 className='text-lg font-semibold text-white mb-6'>Title here</h1>
          <p className='text-gray-100 font-medium text-justify text-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='p-6 flex flex-col items-center bg-gray-800 rounded-lg'>
          <h1 className='text-lg font-semibold text-white mb-6'>Title here</h1>
          <p className='text-gray-100 font-medium text-justify text-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      
      </Slider>
    </div>
    </>
  )
}

export default Roadmap