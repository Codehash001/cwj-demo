import Image from 'next/image'
import Head from 'next/head'
import { useState,useEffect } from "react"
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'
import data from "./data.json";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Darkmodebutton from './darkmode';
import {Link} from 'react-scroll/modules';
import {
  getTotalMinted,
  getMaxSupply,
  isPausedState,
  isPublicSaleState,
  publicMint          } from '../ulits/interact'
import About from './about';
import Mintportal from './Mintportal';
import Slider from "react-slick";

//REMEMBER TO ADD A LOGO

export default function Base () {
  const [maxSupply, setMaxSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)
  const [maxMintAmount, setMaxMintAmount] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isPublicSale, setIsPublicSale] = useState(false)
  

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  const [nav, setNav] = useState(false);

  useEffect(() => {
    const init = async () => {
      setMaxSupply(await getMaxSupply())
      setTotalMinted(await getTotalMinted())

      setPaused(await isPausedState())
      const isPublicSale = await isPublicSaleState()
      setIsPublicSale(isPublicSale)

      setMaxMintAmount(
        isPublicSale ? config.maxMintAmount : '0'
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

const handleNav = () => {
  setNav(!nav);
}

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

    const { success, status } = await publicMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }
  
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
      
    {/* nav */}
    <div>
    <div className='fixed z-[100] top-0 flex items-center justify-between w-full h-[60px] px-2 lg:px-16 bg-transparent filter backdrop-blur-md'>
        <Link className="cursor-pointer" activeClass ="active" to='home' spy={true} smooth={true} duration={500}>
          <h1 className='font-Archivo text-sm flex'><span className='font-semibold'>COffee</span> With Jesus</h1>
        </Link>
        <div>
          <ul className='hidden md:flex font-Archivo front-medium items-center justify-betweeen '>
            <li className='mx-5 text-[18px]  hover:tracking-wide hover:underline hover:underline-offset-8 font-medium'>
            <Link className="cursor-pointer" activeClass ="active" to='mint' spy={true} smooth={true} offset={-70} duration={500}>ABOUT</Link>
            </li>
            <li className='mx-5 text-[18px]  hover:tracking-wide hover:underline hover:underline-offset-8 font-medium'>
              <Link className="cursor-pointer" activeClass ="active" to='contact' spy={true} smooth={true} offset={-70} duration={500}>MINT</Link>
            </li>
            <li className='mx-5 text-[18px]  hover:tracking-wide hover:underline hover:underline-offset-8 font-medium'>
              <Link className="cursor-pointer" activeClass ="active" to='faqs' spy={true} smooth={true} offset={50} duration={500}>ROADMAP</Link>
            </li>
            <li className='mx-5 text-[18px]  hover:tracking-wide hover:underline hover:underline-offset-8 font-medium'>
              <Link className="cursor-pointer" activeClass ="active" to='faqs' spy={true} smooth={true} offset={50} duration={500}>TEAM</Link>
            </li>
            <li className='mx-5 text-[18px]  hover:tracking-wide hover:underline hover:underline-offset-8 font-medium'>
              <Link className="cursor-pointer" activeClass ="active" to='faqs' spy={true} smooth={true} offset={50} duration={500}>FAQ</Link>
            </li>
            {/* dark mode button and wallet button */}
          <div className='flex items-center justify-between'>
              <div className='ml-6'>
                 <Darkmodebutton/>
          </div>
          </div>
          </ul>
          </div>
          
          <div onClick={handleNav}
          className=' md:hidden rounded-md p-2 bg-white dark:bg-gray-700 mr-2 cursor-pointer' >
            <AiOutlineMenu size={18} />
          </div>

        
      
          </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={
         nav? 'z-[120] md:hidden fixed left-0 top-0 w-full h-screen dark:bg-gray-400/10 bg:gray-100/10 backdrop-filter backdrop-blur-sm' : ""
        }>
        
        {/* Side Drawer Menu */}
      <div className ={
        nav? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 border-r-2 backdrop-filter backdrop-blur-md"
      :'fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen'
      }>
      <div className='flex w-full items-center justify-between'>
      <Link className="cursor-pointer" activeClass ="active" to='home' spy={true} smooth={true} duration={500}>

              </Link>
              <div onClick={handleNav}
              className='rounded-full bg-gray-400 hover:shadow-lg hover:shadow-gray-600 p-3 cursor-pointer '>
              <AiOutlineClose size={18} />
             </div>
          </div>
          <div className='border-b py-4 flex flex-col mt-4'>
              <p className='uppercase text-[18px] font-Archivo text-center font-semibold'>
              cwj
              </p>
            </div>
            <div  className='py-4 flex flex-col '>
        <ul className='font-Archivo text-center font-medium'>
            <li  className='py-4 text-sm'>
            <Link onClick={() => setNav(false)}  className="cursor-pointer" activeClass ="active" to='home' spy={true} smooth={true} offset={-70} duration={500}>HOME</Link>
            </li>
            <li  className='py-4 text-sm'>
            <Link onClick={() => setNav(false)}  className="cursor-pointer" activeClass ="active" to='mint' spy={true} smooth={true} offset={-70} duration={500}>ABOUT</Link>
            </li>
            <li  className='py-4 text-sm'>
            <Link onClick={() => setNav(false)} className="cursor-pointer" activeClass ="active" to='contact' spy={true} smooth={true} offset={-70} duration={500}>MINT</Link>
            </li>
            <li  className='py-4 text-sm'>
            <Link onClick={() => setNav(false)} className="cursor-pointer upercase" activeClass ="active" to='faqs' spy={true} smooth={true} offset={-100} duration={500}>rOADMAP</Link>
            </li>
            <li  className='py-4 text-sm'>
            <Link onClick={() => setNav(false)} className="cursor-pointer" activeClass ="active" to='faqs' spy={true} smooth={true} offset={-100} duration={500}>FAQs</Link>
            </li>
            
          </ul>

        </div>

        <div className='flex flex-col items-center justify-between'>
                    <div className='ml-6'>
                        <Darkmodebutton/>
                    </div>
        </div>
        </div>
        

      </div>
    </div>

    {/* home */}

    <div className="" id='home'data-aos="fade">
      <div className='h-screen'>
       <div className='w-full flex flex-row justify-between px-16 pt-[60px] '>
        {/* veticle menu */}
          <div className='w-[70px] py-6 flex flex-col items-center justify-center border border-gray-900 bg-[#f8f5f5] filter shadow drop-shadow-lg rounded-lg'> 
           <div className='flex flex-row justify-evenly -rotate-90 font-medium'>
              <h1 className='mx-4'>Facebook</h1>
              <h1 className='mx-4'>Instagram</h1>
              <h1 className='mx-4'>Discord</h1>
              <h1 className='mx-4'>Opeansea</h1>
              <h1 className='mx-4'>Linktree</h1>
            </div>
          </div> 
        {/* home texts */}
          <div className='w-auto flex flex-col items-center justify-start py-6 px-16'>
            <div className='flex flex-col items-start w-[300px]'>
              <h1 className='font-Kanit text-start mb-2 text-5xl leading-[55px]'><span className='bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent text-6xl'>A majestic </span><br/>
              collection of 300 unique and artistic tokens.</h1>
              <button className='bg-black px-6 py-2 rounded-md font-Archivo text-white mt-6 font-semibold'>
              MINT NOW
            </button>
            </div>
          </div>
        {/* home-banners*/}
          <div className='w-full h-full flex flex-col items-end py-6'>
            <img src='/webbanner.jpg' className='w-[700px] h-auto border-2 border-white rounded-lg'/>
            <div className='w-[700px] flex flex-row item-center justify-between mt-6'>

                <img src='/5.jpg' className='w-[180px] h-[250px] rounded-md '/>
                <img src='/5.jpg' className='w-[180px] h-[250px] rounded-md '/>
                <img src='/5.jpg' className='w-[180px] h-[250px] rounded-md '/>
                <img src='/5.jpg' className='w-[180px] h-[250px] rounded-md '/>

            </div>
          </div>
          
       </div>
       <div className='flex flex-col items-end justify-end absolute bottom-0 -z-10 h-auto overflow-hidden w-full'>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fc9b40" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,149.3C384,171,480,213,576,240C672,267,768,277,864,282.7C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div> 
       </div>
    </div>

    {/* slide */}
      <About/>
      <Mintportal/>
      
      <Slider {...settings}>
       <div className='flex flex-col items-center justify-center mx-8'>  <img src='/5.jpg' className='w-[180px] h-[250px] rounded-md '/> </div>
       <div className='flex flex-col items-center justify-center mx-8'>  <img src='/5.jpg' className='w-[180px] h-[250px] rounded-md '/> </div>
       <div className='flex flex-col items-center justify-center mx-8'>  <img src='/5.jpg' className='w-[180px] h-[250px] rounded-md '/> </div>
       <div className='flex flex-col items-center justify-center mx-8'>  <img src='/5.jpg' className='w-[180px] h-[250px] rounded-md '/> </div>
       <div className='flex flex-col items-center justify-center mx-8'>  <img src='/5.jpg' className='w-[180px] h-[250px] rounded-md '/> </div>
       <div className='flex flex-col items-center justify-center mx-8'>  <img src='/5.jpg' className='w-[180px] h-[250px] rounded-md '/> </div> 
                
            </Slider>
      
    
    </>
  )
}

