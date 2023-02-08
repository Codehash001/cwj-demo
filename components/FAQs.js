import Raect, { useState, Fragment } from "react";
import Accordian from "./Accordian";
import data from './data.json'


export default function Faqs() {
    const [active, setActive] = useState ('')

    return(
        <>
        {data.map ((item) =>

            <Accordian id={item.id} title={item.title} content={item.description}/>

        )}
        </>
    )
}