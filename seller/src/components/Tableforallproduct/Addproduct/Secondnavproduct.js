import React from 'react'

export default function Secondnavproduct({Name, Btn}) {
  return (
    <div className="Allprosecnav rounded container-fluid d-flex bg-light align-items-center justify-content-between border border-secondary-subtle p-3 pt-2 pb-2">
    <div className="leftcon">
        <h1 style={{ fontSize: `1rem`,fontWeight:600, marginBottom: `0px`}} >{Name.name}</h1>
        <p style={{ fontSize: `.8rem`, margin: "0px" }}>{Name.directory}</p>
    </div>
    <div className="rightcontainer d-flex gap-2">
        {Btn.map((ele)=>{
            return(
            <button className = {`${ele.style} btn rounded-pill`} type={ele.type}> <i className={`${ele.icon}`}></i> {ele.name}</button>
            )
        })}
    </div>

</div>
  )
}
