import Raect, { useState, Fragment } from "react";


 
export default function Accordian({id , title , content , active , setActive}) {

 
  return (
    
    
    <div className="flex flex-col items-center w-full">

      <div className="flex flex-row justify-between items-center bg-yellow-200 p-4 w-full">
        <h1 className="text-lg font-semibold">{title}</h1>

        { active === id ? (<span onClick={()=>setActive(id)} className='cursor-pointer'>X</span>):
        (<span onClick={()=>setActive(0)} className='cursor-pointer text-xl'>+</span>)}
      </div>
    
      <div className={`flex flex-col items-center p-6 bg-slate-500 ${active === id ? "h-full ease-in-out duration-1000": "hidden h-0"}`}>
        <p className='font-Archivo text-lg font-medium'>{content}</p>
      </div>

    </div>
    
    
  );
}
