import React from 'react'
import {Link} from "react-router-dom"

const SecondNavProduct = ({Name, Btn, backbtn}) => {

function refreshPage(){
    window.location.reload();
  }
 
   
  return (
    <>

<div className="Allprosecnav rounded container-fluid d-flex bg-light  align-items-center justify-content-between border border-secondary-subtle p-3 pt-2 pb-2">
   

    <div className="leftcon d-flex gap-3">
    <div className="rightcontainer d-flex align-items-center justify-content-center">
      
      {
       backbtn ?  backbtn.map((elem)=>{
        return (
         <>
          <div  >
          <Link  className = "px-2 py-1 d-flex align-items-center btn btn-sm rounded-pill shadow-none border text-capitalize fw-bold" to={elem.link} style={{fontWeight:"600"}}> <i className={`${elem.iconback}`} style={{marginRight:".5rem", fontWeight:"500",fontSize:"1rem" }}></i>
          {elem.backname}</Link>
          </div>
    
         </>
        )
     }) :""
      }
     </div>

        <div className="ggg">
        <h1 className='d-flex flex-column align-items-start' style={{ fontSize: `1rem`, marginBottom: `0px`, fontWeight:"600", color:"#667085" }} >{Name.name}</h1>
        <p className='seconnavparacont' style={{ textAlign:"left",fontSize: `.8rem`, margin: "0px",color:"#A2A9B6"}}>{Name.directory}</p>
        </div>

    </div>
    <div className="rightcontainer pb-0 mb-0 d-flex align-items-center gap-2">
        {Btn.map((ele)=>{
            return(
              ele.link ? (
                <Link to={`${ele.link}`} className={`${ele.style}  mb-0 my-0 btn rounded-pill text-capitalize d-flex align-items-center`} data-bs-toggle={ele.databstoggle} data-bs-target={ele.databstarget} aria-controls={ele.ariacont}>  <i className={`${ele.icon} ${ele.styleicon}`} style={{marginRight:".2rem", fontSize:".9rem" ,color:`${ele.styleicon}`}}></i> <span className='m-0 p-0 secnavbtn'> {ele.name}</span></Link>
            ) : (
                <p onClick={ele.refresh ? refreshPage :""} className={`${ele.style} btn rounded-pill text-capitalize  my-0 d-flex align-items-center`} style={{background:"white"}} data-bs-toggle={ele.databstoggle} data-bs-target={ele.databstarget} aria-controls={ele.ariacont}>  <i className={`${ele.icon} ${ele.styleicon}`} style={{marginRight:".2rem" ,fontSize:".9rem",color:`${ele.styleicon}`}}></i> <span className='m-0 p-0'> {ele.name} </span></p>
            )
            
            )
        })}
    </div>

</div> 
      
    </>
  )
}

export default SecondNavProduct
