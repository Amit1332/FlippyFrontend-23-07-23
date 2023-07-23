import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SupplierTable from "./SupplierTable";
import Select from 'react-select'
import "./AllSupplier.css";

function AllSupplier() {
  const options = [
    { value: 'Activate', label: 'Activate' },
    { value: 'Temporary Delete', label: 'Temporary Delete' },
    { value: 'Permanent Delete', label: 'Permanent Delete' },
  ]

  return (
    <>
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 h6 text-center">All Suppliers</h3>
            </div>
            <div className="productsfilter">
              <div className="searchsuppl">
               
                  <div className="col-md-2 ml-auto p-2">
              <div class="form-group">
                <input
                  type="search" placeholder="search supplier..."
                  class="aab form-control"
                />
              </div>
            </div>

            <div className="col-md-3 ml-auto p-2">
              <Select options={options} 
              placeholder="Action"
              className='aab'
              />
              
            </div>
                 
              
 
              </div>
            </div>
          </div>
        </div>

        <div className="row p-2" >
            <div className="card p-0">
            <div class="table-responsive producscroller_responsive">
  <table class="table text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
              <tr>
                <th scope="col">Action</th>

                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Approval</th>
                <th scope="col">Product </th>
                <th scope="col">Supplier</th>
                <th scope="col">Options</th>
                <th scope="col">Created </th>
              </tr>
            </thead>
            <tbody>
              {/* <supplier /> */}
              
              <SupplierTable />
              


            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default AllSupplier;
