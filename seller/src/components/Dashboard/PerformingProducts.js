import React from 'react'
import RecentOrders from './RecentOrders'
import TopProduct from './TopProduct'

const PerformingProducts = () => {
  return (
    <>
      
      <div className="container-fluid mt-4">
        <div className="row">

        <div className="col-5">
            <div className="card">
              <div className="card-body py-2 px-3 m-0">
                <div className="container-fluid p-0">
                  <div className="row">
                    <div className="col d-flex justify-content-star">
                      <div className="card-text text-nowrap">Top Performing Products</div>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <div className="card-text exportReport text-nowrap">
                        Export Report <i class="las la-angle-down"></i>
                      </div>
                    </div>
                  </div>
                  <hr className='mt-3'/>

                    <TopProduct/>



                </div>
              </div>
            </div>
          </div>











          <div className="col-7">
            <div className="card">
              <div className="card-body py-2 px-0">
                <div className="container-fluid p-0">
                  <div className="row d-flex align-items-center px-3">
                    <div className="col d-flex justify-content-start">
                      <div className="card-text">Recent Orders</div>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <div className="card-text d-flex gap-2">
                        <a href="" className='btn btn-sm rounded-pill' style={{color:"#103A81",fontWeight:"bold", backgroundColor:"#E7F4FC"}}>

                                Generate Report
                        </a>
                      </div>
                    </div>
                  </div>

                    

           <RecentOrders/>   






                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>


    </>
  )
}

export default PerformingProducts
