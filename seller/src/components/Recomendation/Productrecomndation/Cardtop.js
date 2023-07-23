import React from 'react'
import "./navfortable.css"
export default function Cardtop({heading, number, persent}) {
  return (
    <div className='Cardtop col' style={{height: 'fit-content',padding: '10px 10px', background: `#FFFFFF`, borderRight: `1px solid #EAECF0`,borderRadius: '7px 0px 0px 7px'}}>
        <p style={{fontWeight: '500', fontSize: '14px', lineHeight: '20px', color: '#667085', marginBottom:"7px"}}>{heading}</p>
        <h1 style={{fontWeight: '700',fontSize: '20px',marginBottom:"7px",lineHeight: '30px', color: '#164C96'}}>
        <i className={number.icon}></i>
        <span className='mx-1'>{number.no}</span>
        </h1>
        <p style={{fontWeight: `400`,marginBottom:"0px", fontSize: `8px`, lineHeight: `0px`, color: `#667085`}}>
        <span className="container-fluid bg-success bg-opacity-10 text-success" style={{background: `#ECFDF3`, borderRadius: `5px`, padding: `2px 5px`}}>
        <i className="las la-arrow-right" style={{transform:"rotate(-45deg)" , marginRight:'.3rem'}}></i>
        <span>+{persent} %</span>
        </span>
          &nbsp;  vs. previous month
        </p>
    </div>
  )
}
