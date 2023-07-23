import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Coupon_table from "./Coupon_table"
function Coupons() {
  const [data, setdata] = useState();
    return (


      <div className="container-fluid allproducts">
      <div className='Refund_request'>
        <div className="d-flex mb-4 align-items-center justify-content-between">
          <h5 class="mb-0 h6 fw-bold">All Coupons</h5>
          <Link to="/marketing/coupons/create" style={{
                          color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",
                        }} className="btn rounded-pill">Add New Coupon</Link>
        </div>
        
        
      </div>
      <div className="row px-2">
            <div className="card p-0">
              <div class="table-responsive producscroller_responsive">
                <table class="table  css-serial text-nowrap startcontentleft">
                  <thead
                    style={{ backgroundColor: "#F9FAFB", color: "#667085" }}
                  >
                    <tr>
                      <th scope="col">S.No.</th>
                      <th scope="col">Code</th>
                      <th scope="col">Type</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">End Date</th>
                    
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Coupons
