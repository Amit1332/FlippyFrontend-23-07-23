import React, { useState } from 'react'
import "./Product_stock.css"
import Select from "react-select";


function Supplier_product_sale() {
    const options = [
        { value: "shampoo", label: "shampoo" },
        { value: "hair oil", label: "hair oil" },
        { value: "hair wax", label: "hair wax" },
        { value: "royale paas", label: "royale paas" },
        { value: "watch", label: "watch" },

      ];
    const [data, setdate] = useState()
    return (
        
        <div>
        <div className="container-fluid allproducts">
          <div className="innerallproducts">
            <div className="productheading">
              <div className="productheadingtop">
                <h3 class="mb-0 my-2 h6 ">Product wise stock report</h3>
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
                       Sort by Category :
                      </p>
  
                      <div className="col p-2">
                        <Select
                          options={options}
                          placeholder="Status"
                          className="aab"
                        />
                      </div>
  
                      <button
                        type="submit"
                        class="btn text-capitalize gap-2 d-flex align-items-center justify-content-center rounded-pill"
                        style={{
                          backgroundColor: "#E7F4FC",
                          color: "#103A81",
                          fontWeight: "bold",
                        }}
                      >
                        Filter
                      </button>
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
                            <th scope="col">Product Name</th>
                            <th scope="col">Stock</th>
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
