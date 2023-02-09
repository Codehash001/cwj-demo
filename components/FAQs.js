import Raect, { useState, Fragment } from "react";
import Accordian from "./Accordian";
import data from './data.json'


export default function Faqs() {
    const [active, setActive] = useState (0)

    return(
        <>
        <div id='faqs'className='md:px-16 px-2 my-[14px] rounded-lg'data-aos="fade-up">
            <h1 className='md:text-[40px] text-[30px] bg-gradient-to-r from-rose-600 via-red-700 to-red-600 bg-clip-text text-transparent font-Archivo text-center uppercase font-semibold tracking-wide mb-8'> Frequently Asked Questions</h1>
        {data.map ((item) =>
            <div key={item.id} className='my-6'>
            <Accordian id={item.id} title={item.title} content={item.description} active={active} setActive={setActive}/>
            </div>
        )}
        </div>
        </>
    )
}