import React, { useRef, useState , useEffect } from "react";
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'

import {
  getTotalMinted,
  getMaxSupply,
  isPausedState,
  isPublicSaleState,
  isPreSaleState,
  isFreeMintState,
  publicSaleMint,
  PreSaleMint,
  whitelistedFreeMint          } from '../ulits/interact'

function Mintportal() {

  const [maxSupply, setMaxSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)
  const [maxMintAmount, setMaxMintAmount] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isPublicSale, setIsPublicSale] = useState(false)
  const [isFreeMint, setIsFreeMint] = useState(false)
  const [isPreSale, setIsPreSale] = useState(false)
  const [cost, setCost] = useState(0)
  

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  

  useEffect(() => {
    const init = async () => {
      setMaxSupply(await getMaxSupply())
      setTotalMinted(await getTotalMinted())

      setPaused(await isPausedState())
      const isPublicSale = await isPublicSaleState()
      setIsPublicSale(isPublicSale)

      const isPreSale = await isPreSaleState()
      setIsPreSale(isPreSale)

      const isFreeMint = await isFreeMintState()
      setIsFreeMint(isFreeMint)

      setMaxMintAmount(
        isPublicSale? config.maxMintAmount_Public : isPreSale ? config.maxMintAmount_PreSale : 1
      )

      setCost (
        isPublicSale? config.publicSalePrice : isPreSale ? config.preSalePrice : 0
      )
      
      
    }

    init()
  }, [])
  
  useEffect( () => {
    const onboardData = initOnboard( {
      address: (address) => setWalletAddress(address ? address : ''),
      wallet: (wallet) => {
        if (wallet.provider) {
          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          window.localStorage.removeItem('selectedWallet') }}
    }
    )
  setOnboard(onboardData)
  }, [])

  const previouslySelectedWallet = typeof window !== 'undefined' &&
  window.localStorage.getItem('selectedWallet')

useEffect(() => {
  if (previouslySelectedWallet !== null && onboard) {
    onboard.walletSelect(previouslySelectedWallet)
  }
}, [onboard, previouslySelectedWallet])



  const connectWalletHandler = async () => {
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
      window.location.reload(false)
    }
  }

  const connectWalletHandlerMobile = async () => {
    setNav(false)
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
      window.location.reload(false)
      
    }
  }

  const incrementMintAmount = () => {
    if (mintAmount < maxMintAmount) {
      setMintAmount(mintAmount + 1)
    }
  }

  const decrementMintAmount = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1)
    }
  }


  const publicMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await publicSaleMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }

  const whitelistedFreeMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await whitelistedFreeMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }

  const PreSaleMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await PreSaleMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }
  

  return (
    <div id='mint' className='flex flex-col items-center jusitify-center font-Kanit md:px-0 px-2 py-6 md:mt-8'>
        <div className='md:w-auto w-full py-6 md:px-6 rounded-md border border-gray-700 flex flex-col items-center'>
            <h1 className='font-Archivo text-5xl bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent font-semibold'>
              {isPublicSale ? "Public Sale" : isPreSale? 'Whitelisted Pre-Sale': isFreeMint? 'Free GiveAway' : 'Will be Live soon!'}
            </h1>
            <h2 className='text-xl font-medium mt-1 mb-2'>{walletAddress
                ? walletAddress.slice(0, 8) + '...' + walletAddress.slice(-4)
                : 'Not connected'}
            </h2>
            <div className='flex md:flex-row flex-col items-center justify-between md:p-4'>
              <img src='/nfts/nft.gif'
              className='w-[280px] h-[280px] rounded-md border border-white mx-4'/>
              <div className='w-[280px] mx-4 flex flex-col items-center justify-center'>
                {/* increment decrement buttons */}
                <div className="font-Kanit flex items-center justify-evenly w-full md:mt-0 mt-4">
                  <button
                    className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-full"
                    onClick={decrementMintAmount}
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
                  {mintAmount}
                  </p>
                  <button
                    className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-full"
                    onClick={incrementMintAmount} 
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

                <h1 className='mt-5 text-xl font-medium'>Max Mint Amount per wallet:{' '}{isPublicSale?"No max" : maxMintAmount}</h1>
                <div className='w-full flex flex-row items-center justify-between mt-5 border-t-2 border-b-2 py-3'>
                  <h1>Total</h1>
                  <h1>{Number.parseFloat((isPublicSale? config.publicSalePrice * mintAmount : isPreSale? config.preSalePrice * mintAmount : 0).toFixed(4))} {' '} ETH</h1>
                  <h1>+ GAS</h1>
                </div>
                {/* connect wallet and mint buttons */}
                <div className='mt-6'>
                  {paused || isMinting ?
                  (<button className='px-10 py-3 bg-gray-700 text-black rounded-full opacity-8 cursor-not-allowed'>Paused</button>):
                  walletAddress?
                  (<button className='px-10 py-3 bg-black text-white rounded-full'
                  onClick={isPublicSale? publicMintHandler : isPreSale? PreSaleMintHandler : whitelistedFreeMintHandler}
                  disabled={paused || isMinting}>{isMinting? 'Busy...' : 'Mint now'}
                </button>):
                  (<button className='px-10 py-3 bg-black text-white rounded-full'
                  onClick={connectWalletHandler}
                  disabled={paused}>Connect Wallet
                </button>)}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Mintportal

