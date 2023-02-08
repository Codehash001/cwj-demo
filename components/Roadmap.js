import React from 'react'

function Roadmap() {
  return (
    <div className='w-full h-full px-16 flex flex-col items-center'>
        <h1 className='font-Archivo text-lg font-semibold my-8'>Roadmap</h1>

        {/* slider */}

        <div className='p-6 flex flex-col items-center bg-gray-200 rounded-lg'>
          <h1 className='text-lg font-semibold text-white mb-6'>Title here</h1>
          <p className='text-gray-100 font-medium text-justify text-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
    </div>
  )
}

export default Roadmap