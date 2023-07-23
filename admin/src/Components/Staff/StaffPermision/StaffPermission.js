import React from 'react'
import { Link } from 'react-router-dom'
import RoleTable from './RoleTable'

const StaffPermission = () => {
  return (
    <>
    

    <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h5 class="mb-0 h6">All Role</h5>

             <Link to="/add/new/role">
                <div className="btn btn-sm rounded-pill"style={{
                          color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",
                        }}>Add New Role</div>
              </Link> 
            </div>
            <div className="productsfilter">
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
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody >
               
              <RoleTable/>
              
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

export default StaffPermission