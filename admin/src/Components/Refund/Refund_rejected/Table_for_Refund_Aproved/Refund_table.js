import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./AllSupplier.css"

function AllSupplier({data}) {
  return (
    <>
      
      <div className="row px-2">
            <div className="card p-0">
              <div class="table-responsive producscroller_responsive">
                <table class="table css-serial text-nowrap startcontentleft">
                <thead
                    style={{ backgroundColor: "#F9FAFB", color: "#667085" }}
                  >
                <tr>                 
                  <th  scope="col">S.No</th>
                  <th  scope="col">Order Code</th>
                  <th  scope="col">Seller Name</th>
                  <th  scope="col">Product</th>
                  <th  scope="col">Price</th>
                  <th  scope="col">Seller Approval</th>
                  <th  scope="col">Refund Status</th>
                  <th scope="col">Options</th>

                </tr>
              </thead>
              <tbody>
              <tr>

              <td className="" scope="row">
        <div className="customerss"></div>
        </td>

        <td className="">
        <div className="customerss">7367-3454</div>
        </td>
        <td className="">
        <div className="customerss">Raj Enterprise</div>
        </td>
        <td className="">
        <div className="customerss">Helmet</div>
        </td>
        <td className="">
        <div className="customerss">99</div>
        </td>
        <td className="">
        <div className="customerss">Approved</div>
        </td>
        <td className="">
        <div className="customerss">true</div>
        </td>
        <td>
       <div className="customerss d-flex align-items-center">
        
             <Link className="mx-1">
                <i class="ri-eye-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
              <Link className="mx-1" to="">
                <i class="ri-edit-box-line" style={{color:"#4F4F4F",fontWeight:"500"}}></i>
              </Link>
              <Link className="mx-1" hidden  to="">
                <i class="las la-copy" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
              <Link
            className="mx-1"
              >
                <i class="ri-delete-bin-6-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
         </div>
       </td>
              </tr>
              </tbody>
            </table>
          </div>
          </div>
          </div>
        
     
    </>
  )
}

export default AllSupplier
