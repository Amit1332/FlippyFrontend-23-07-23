import React from 'react'

const OrderData = () => {
  return (
    <>
      <div className="row ordercountcust mt-2" style={{backgroundColor:"#F9FAFB"}}>
        <div className="col border-top border-bottom d-flex align-items-center justify-content-center ">
        <div className="card-body">
            <h6>7585</h6>
            <p>New Orders</p>
        </div>
        </div>
        <div className="col border d-flex align-items-center justify-content-center">
        <div className="card-body">
            <h6>7585</h6>
            <p>Cancelled</p>
        </div>
        </div>
        <div className="col border d-flex align-items-center justify-content-center">
        <div className="card-body">
            <h6>7585</h6>
            <p>On Delivery</p>
        </div>
        </div>
        <div className="col border-top border-bottom d-flex align-items-center justify-content-center">
        <div className="card-body">
            <h6>7585</h6>
            <p>Delivered</p>
        </div>
        </div>

      </div>

    </>
  )
}

export default OrderData
