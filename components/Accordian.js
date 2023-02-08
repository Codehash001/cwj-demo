import Raect, { useState, Fragment } from "react";


 
export default function Accordian({id , title , content , active , setActive}) {

 
  return (
    <div id='faqs'className='md:px-16 px-2 my-[44px] rounded-lg'data-aos="fade-up">
      <h1 className='md:text-[40px] text-[30px] bg-gradient-to-r from-rose-600 via-red-700 to-red-600 bg-clip-text text-transparent font-Archivo text-center uppercase font-semibold tracking-wide mb-8'> Frequently Asked Questions</h1>
    
    <div className="flex flex-col items-center w-full">

      <div className="flex flex-row justify-between items-center bg-yellow-200 p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <span>X</span>
      </div>

      <div className='flex flex-col items-center p-6 bg-slate-500'>
        <p className='font-Archivo text-lg font-medium'>{content}</p>
      </div>

    </div>
    
    </div>
  );
}
