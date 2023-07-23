import React from 'react'

const SidebarProfile = () => {
  return (
    <>
    <div className="row p-2" >
        <div className="col">
            <div className="card shopnameuser shadow-none" style={{backgroundColor:"#F9FAFB"}}>
                <div className="card-body p-3 pb-0">
                   <div className="row">
                    <div className="col">
                        <div className="shopprofiImages">
                            <img src="https://images.pexels.com/photos/1671643/pexels-photo-1671643.jpeg?cs=srgb&dl=pexels-tyler-lastovich-1671643.jpg&fm=jpg" alt="" />

                        </div>
                    </div>
                   </div>
                   <div className="row">
                    <div className="col ">
                        <h6 style={{color:"#1D2939"}}>Ajx Clothings</h6>
                    </div>
                   </div>
                   <div className="row">
                   <p style={{color:"#667085"}}>ajxclothing shop</p>

                   </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default SidebarProfile
