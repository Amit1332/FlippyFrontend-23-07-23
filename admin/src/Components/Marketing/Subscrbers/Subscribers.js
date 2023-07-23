import React from "react";
import { useState } from "react";

function Subscribers() {
  const [style, setStyle] = useState({
    display:"none"
  })
  const [bol,setbol] = useState(true)
  const colapshandle = (e)=>{
    if(bol){
      e.target.textContent = "-"
      console.log(e.target.id)
      document.getElementsByClassName(e.target.id)[0].style.display= "initial"
      setbol(false)
    }else{
      e.target.textContent = "+"
      
      document.getElementsByClassName(e.target.id)[0].style.display= "none"
   
      setbol(true)
    }
  }
  return (
    <div className="container-fluid mt-1 allproducts">

      <div className="p-3 rounded shadow">
      <h5 class="mb-0 fw-bold h6">All Subscribers</h5>
      <hr  className="text-light" />
      <table class="table text-nowrap" style={{width:'100%'}}>
        <thead>
          <tr>
            <th scope="col" className="col-12">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              class="footable-first-visible footable-last-visible"
              style={{display: "table-cell"}}
            >
              <span onClick={colapshandle} id="first" class="footable-toggle fooicon fooicon-plus bg-warning bg-opacity-25 text-warning p-2 rounded">+</span>
              <div style={{fontWeight:"600"}} className="pt-2">
                0mLd_generic_b18a5b28_flippyseven.com@data-backup-
              </div>
            </td>
          </tr>
          <tr  className="first" style={{display:'none'}}>
            <td colspan="1" className="col-4">
              <table class=" table mb-0">
                <tbody>
                  <tr>
                    <th style={{fontWeight:"600"}}>#</th>
                    <td style={{ display: "table-cell", fontWeight:'600' }}>1</td>
                  </tr>
                  <tr>
                    <th style={{fontWeight:"600"}}>Date</th>
                    <td style={{ display: "table-cell", fontWeight:"600" }}>01-02-2023</td>
                  </tr>
                  <tr>
                    <th style={{fontWeight:"600"}}>Options</th>
                    <td class="text-right" style={{ display: "table-cell", fontWeight:"600" }}>
                      <a
                        href="#"
                        class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                        data-href="https://flippyseven.com/admin/subscribers/destroy/5"
                        title="Delete"
                      >
                        <i class="las la-trash"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td
              class="footable-first-visible footable-last-visible"
              style={{display: "table-cell"}}
            >
              <span onClick={colapshandle} id="secode" class="footable-toggle fooicon fooicon-plus bg-warning bg-opacity-25 text-warning p-2 rounded">+</span>
              <div style={{fontWeight:"600"}} className="pt-2">
                0mLd_generic_b18a5b28_flippyseven.com@data-backup-
              </div>
            </td>
          </tr>
          <tr  className="secode" style={{display:'none'}}>
            <td colspan="1" className="col-4">
              <table class=" table mb-0">
                <tbody>
                  <tr>
                    <th style={{fontWeight:"600"}}>#</th>
                    <td style={{ display: "table-cell", fontWeight:'600' }}>1</td>
                  </tr>
                  <tr>
                    <th style={{fontWeight:"600"}}>Date</th>
                    <td style={{ display: "table-cell", fontWeight:"600" }}>01-02-2023</td>
                  </tr>
                  <tr>
                    <th style={{fontWeight:"600"}}>Options</th>
                    <td class="text-right" style={{ display: "table-cell", fontWeight:"600" }}>
                      <a
                        href="#"
                        class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                        data-href="https://flippyseven.com/admin/subscribers/destroy/5"
                        title="Delete"
                      >
                        <i class="las la-trash"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          
        </tbody>
      </table>
      </div>
      </div>

  );
}

export default Subscribers;
