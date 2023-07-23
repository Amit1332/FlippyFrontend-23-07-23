import React from 'react'
import FilterOrder from './FilterOrder'
import "../Order.css"
import AllOrderData from './AllOrderData'

const AllOrders = () => {
  return (
    <>
     <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 h6 text-center">All Order</h3>

              {/* <Link href="">
                <div className="btn btn-sm">Add New Products</div>
              </Link> */}
            </div>
            <div className="productsfilter">
            <h5 class="mb-0 h6">Filter Order</h5>

              <div className="searfilterproduct">
                <FilterOrder/>
              </div>
            </div>
          </div>


          <div className="row px-2" >
            <div className="card p-0">
            <div class="table-responsive producscroller_responsive">
  <table class="table text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
                <tr>
                 
                  <th scope="col">Order Date-Time</th>
                  <th scope="col">Order Id</th>
                  <th scope="col">Order Status</th>
                  <th scope="col">Verified</th>
                  <th scope="col">Reseller Name</th>
                  <th scope="col">Su Order Id </th>
                  <th scope="col">Net Order Value</th>
                  <th scope="col">Dispatch Details</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Tracking Id</th>
                  <th scope="col">Payment Type</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody >
               <AllOrderData/>
               <AllOrderData/>
               <AllOrderData/>
              
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

export default AllOrders