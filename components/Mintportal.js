import React from 'react'

function Mintportal() {
  return (
    <div className='flex flex-col items-center jusitify-center font-Kanit'>
        <div className='w-auto p-6 rounded-lg border border-gray-700 flex flex-col items-center'>
            <h1 className='text-4xl bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent font-semibold'>Mnting is Live!</h1>
            <h2 className='text-2xl font-medium my-2'>Not connected</h2>
            <div className='flex flex-row items-center justify-between p-4'>
              <img src='/webimage1.png'
              className='w-[250px] h-[250px] rounded-md border border-white mx-4'/>
              <div className='w-[300px] mx-4 flex flex-col items-center justify-center'>
                {/* increment decrement buttons */}
                <div className="font-Kanit flex items-center justify-evenly w-full">
                  <button
                    className="w-12 h-8 md:w-14 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-full"
                    // onClick={decrementMintAmount}
                    >
                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-6 md:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p className="flex items-center justify-center flex-1 grow text-center font-bold bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent text-3xl md:text-4xl">
                  {/* {mintAmount}   */} 1
                  </p>
                  <button
                    className="w-12 h-8 md:w-14 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-full"
                    // onClick={incrementMintAmount} 
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-6 md:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button> 
                </div>

                <h1 className='mt-5 text-xl font-medium'>Max Mint Amount per wallet: 1</h1>
                <div className='flex flex-row items-center justify-between mt-5 border-t-2 border-b-2'>
                  <h1>Total</h1>
                  <h1>0.00 ETH</h1>
                  <h1>+ GAS</h1>
                </div>
                {/* connect wallet and mint buttons */}
                <div className='mt-6'>
                  <button className='px-8 py-4 bg-black text-white rounded-full'>Connect Wallet</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Mintportal