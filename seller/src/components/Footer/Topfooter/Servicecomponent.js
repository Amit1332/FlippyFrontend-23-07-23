import React from 'react'
import { NavLink } from "react-router-dom";
export default function Servicecomponent(props) {

   
  return (
    <div className='ServiceComponent' style={{width:"40%"}}>
        <h1>{props.heading}</h1>
        <div className="Services">
        {props.array.map((item)=>{
         return (
          <p>{item}</p>
         )
     })}

        </div>

    </div>
  )
}
