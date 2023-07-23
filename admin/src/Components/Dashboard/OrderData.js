import React from 'react'

const OrderData = () => {
  return (
    <>
      <div className="row ordercountcust my-2">
        <div className="col d-flex align-items-center">
          <span  style={{color:"#344054",fontSize:"1.3rem"}}>$35423</span>
          <div className="d-flex align-items-center mx-3">
          <i class="ri-arrow-up-circle-fill" style={{color:" #164C96",fontSize:"1.5rem"}}></i>
          <div className="d-flex flex-column">
            <span style={{color:"#164C96",fontSize:".7rem"}}>0.8 %</span>
            <span style={{color:"#667085",fontSize:".6rem"}}>
              Than Last Month
            </span>
          </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default OrderData
