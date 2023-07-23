import React, { useEffect } from "react";
// import Product from "../../Products/AllProduct/Product.js";
// import Pagination from "react-js-pagination"
import "./AllSupplier.css"

function AllSupplier({data}) {
  return (
    <>
      
          <div className="productlist table-responsive text-start">
            <table class="table border-0 text-nowrap">
              <thead class="border-0" >
                <tr className="py-4" style={{border:'1px solid transparent'}}>                 
                  <th style={{fontWeight:700, fontSize:'.9rem'}} scope="col">Code</th>
                  <th style={{fontWeight:700, fontSize:'.9rem'}} className="text-end" scope="col">Options</th>

                </tr>
              </thead>
              <tbody className="border-0">
                {data ? (
                  <tr>
            <td className="p-2">
            <button className='btn btn-sm btn-danger'>View</button>
            </td>
            <td >safsa</td>
            <td>safsa</td>
            <td >878457365</td>
            <td >amitsfd@gmailcom</td>
            <td>1</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input myinput"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </td>
            <td>
              0
            </td>
            <td>
              Rs. 9999
            </td>
            <td>
            <i class="las la-ellipsis-v px-2 py-2 rounded-pill text-light bg-opacity-75 bg-warning"></i>
            </td>
            <td>
              09-09-2023-19-05-01
            </td>
          </tr>
                ):(
               " "
                )}
              
              </tbody>
            </table>
          </div>

        
     
    </>
  )
}

export default AllSupplier
