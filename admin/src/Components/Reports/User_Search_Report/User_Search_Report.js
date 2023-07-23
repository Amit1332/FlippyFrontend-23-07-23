import React, { useState } from 'react'
import "./User_Search_Report.css"

function Supplier_product_sale() {
    const [data, setdate] = useState()
    return (
      

<div>
<div className="container-fluid allproducts">
  <div className="innerallproducts">
    <div className="productheading">
      <div className="productheadingtop">
        <h3 class="mb-0 my-2 h6 ">User Search Report</h3>
      </div>
      <form>
        <div className="innereditbrand mt-5">
          <div className="card productSaleCard">
            <div
              class="form-group d-flex align-items-center my-3"
              style={{ width: "80%", margin: "0 auto" }}
            >
              <p
                className="text-start"
                style={{
                  marginBottom: "0px",
                  fontWeight: "600",
                  fontSize: ".9rem",
                }}
              >
               User Search Report
              </p>

             
             </div>        

            <div class="table-responsive producscroller_responsive">
              <table class="table css-serial text-nowrap startcontentleft">
                <thead
                  style={{ backgroundColor: "#F9FAFB", color: "#667085" }}
                >
                  <tr
                    className="py-4 "
                    style={{ border: "1px solid transparent" }}
                  >
                     <th scope="col">S.No.</th>
                    <th scope="col">Search By</th>
                    <th scope="col">Number of Searches</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td scope="row">
                            <div className="customerss"></div>
                          </td>
                    <td>
                      <div className="customerss">Pimple Facewash</div>
                    </td>
                    <td>
                      <div className="customerss">8</div>
                    </td>
                    
                   
                  </tr>


                  <tr>
                  <td scope="row">
                            <div className="customerss"></div>
                          </td>
                    <td>
                      <div className="customerss">Pimple Facewash</div>
                    </td>
                    <td>
                      <div className="customerss">8</div>
                    </td>
                    
                   
                  </tr>
                  <tr>
                  <td scope="row">
                            <div className="customerss"></div>
                          </td>
                    <td>
                      <div className="customerss">Pimple Facewash</div>
                    </td>
                    <td>
                      <div className="customerss">8</div>
                    </td>
                    
                   
                  </tr>


                  <tr>
                  <td scope="row">
                            <div className="customerss"></div>
                          </td>
                    <td>
                      <div className="customerss">Pimple Facewash</div>
                    </td>
                    <td>
                      <div className="customerss">8</div>
                    </td>
                    
                   
                  </tr>

                  <tr>
                  <td scope="row">
                            <div className="customerss"></div>
                          </td>
                    <td>
                      <div className="customerss">Pimple Facewash</div>
                    </td>
                    <td>
                      <div className="customerss">8</div>
                    </td>
                    
                   
                  </tr>

                  <tr>
                  <td scope="row">
                            <div className="customerss"></div>
                          </td>
                    <td>
                      <div className="customerss">Pimple Facewash</div>
                    </td>
                    <td>
                      <div className="customerss">8</div>
                    </td>
                    
                   
                  </tr>



                  <tr>
                  <td scope="row">
                            <div className="customerss"></div>
                          </td>
                    <td>
                      <div className="customerss">Pimple Facewash</div>
                    </td>
                    <td>
                      <div className="customerss">8</div>
                    </td>
                    
                   
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    )
}

export default Supplier_product_sale
