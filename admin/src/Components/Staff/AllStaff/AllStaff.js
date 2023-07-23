import React from 'react'
import {Link} from "react-router-dom"
import StaffTable from './StaffTable'

const AllStaff = () => {
  return (
    <div>
    
 
    <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 h6 text-center">All Staffs</h3>
             <Link to="/add/new/staff">
                <div className="btn btn-sm rounded-pill" style={{
                          color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",
                        }}>Add New Staff</div>
              </Link> 
            </div>
            <div className="productsfilter">
            <h3 class="mb-0 h6">Staffs</h3>      
            </div>
          </div>

          <div className="row px-2">
            <div className="card p-0">
              <div class="table-responsive producscroller_responsive">
                <table class="table css-serial text-nowrap startcontentleft">
                  <thead
                    style={{ backgroundColor: "#F9FAFB", color: "#667085" }}
                  >
                <tr>
                  <th  scope="col">S.No.</th>             
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Role</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody >
               
              <StaffTable/>
              
              </tbody>
            </table>
          </div>











        </div>
       
      </div>
      </div>
       
       </div>
     
    
    </div>
  )
}

export default AllStaff