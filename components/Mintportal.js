import React from 'react'

function Mintportal() {
  return (
    <div className='flex flex-col items-center jusitify-center'>
        <div className='w-auto p-6 rounded-lg border border-gray-700 flex flex-col items-center'>
            <h1>Mnting is Live</h1>
            <h2>Not connected</h2>
            <div className='flex flex-row items-center justify-between p-4'>
              <img src='/webimage1.png'
              className='w-[280px] h-[350px] rounded-md border border-white mx-4'/>
              <div className='mx-4 flex flex-col items-center justify-center'>
                {/* increment decrement buttons */}
                <div className="font-Kanit flex items-center justify-evenly w-full">
                  <button
                    className="w-12 h-8 md:w-14 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-md"
                    // onClick={decrementMintAmount}
                    >
                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
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
                  <p className="flex items-center justify-center flex-1 grow text-center font-bold text-yellow-900 text-3xl md:text-4xl">
                  {/* {mintAmount}   */}
                  </p>
                  <button
                    className="w-12 h-8 md:w-14 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-md"
                    // onClick={incrementMintAmount} 
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
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

                <h1>Max Mint Amount per wallet: 1</h1>
                <div className='flex flex-row items-center justify-between'>
                  <h1>Total</h1>
                  <h1>0.00 ETH</h1>
                  <h1>+ GAS</h1>
                </div>
                {/* connect wallet and mint buttons */}
                <div>
                  <button className='px-6 py-4 bg-black text-white'>Connect Wallet</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Mintportal