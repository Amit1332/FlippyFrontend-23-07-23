import React from 'react'
import CustomerTableData from "./CustomerTableData"
import {Link} from "react-router-dom"

function CustomerlistTable() {
  return (
    <>
   
   <div className="row p-2" >
            <div className="card p-0">
            <div class="table-responsive producscroller_responsive">
  <table class="table css-serial text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
        <tr>
          <th  scope="col">S.No.</th>
          <th  scope="col">
            <div class="">
              <input
                class="myinput mt-1"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
          </th>
          <th scope="col">Name</th>
          <th scope="col">Email Address</th>
          <th scope="col">Phone</th>
          <th scope="col">Package</th>
          <th scope="col">Wallet Balance</th>
          <th scope="col">Options </th>
        </tr>
      </thead>
      <tbody >
       
      <CustomerTableData/>
      
      </tbody>
    </table>
  </div>
  </div> </div>
    </>
  )
}

export default CustomerlistTable
