import React from 'react'
import PickupFilterOrder from './PickupFilterOrder'
import PickupPointOrderData from './PickupPointOrderData'

const PickupPointOrders = () => {
  return (
    <>
    
    <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 h6 text-center">Pickup Point Orders</h3>
             
            </div>
            <div className="productsfilter">
            <h5 class="mb-0 h6">Filter Order</h5>

              <div className="searfilterproduct">
                <PickupFilterOrder/>
              </div>
            </div>
          </div>
          <div className="row px-2" >
            <div className="card p-0">
            <div class="table-responsive producscroller_responsive">
  <table class="table css-serial text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
                <tr>
                 
                <th>
                        S.No.
                </th>
                  <th scope="col">Order Code</th>
                  <th scope="col">No. of Products</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Seller</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Delivery Status</th>
                  <th scope="col">Payment Type</th>
                  <th scope="col">Payment Status</th>
                 <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody >
              
              <PickupPointOrderData/>
              <PickupPointOrderData/>
              <PickupPointOrderData/>
              <PickupPointOrderData/>

             
              
              </tbody>
            </table>
          </div>


          </div>
       
       </div>
     
        </div>
       
      </div>
    
    
    </>
  )
}

export default PickupPointOrders