import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
function Flash_Deal() {
  const options =[

  ]
  return (
    <div>
      <div class="col-lg-6 mt-2 mx-auto">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0" style={{ fontSize: "1rem", fontWeight: "500" }}>
              Send Bulk SMS
            </h3>
          </div>
          <form class="form-horizontal p-4 flashdealcol">
            <div className="d-flex align-items-center justify-content-between">
              <h6 style={{ marginBottom: "0px", fontSize: ".9rem",color:"#4F4F4F"}}>
                Mobile Users
              </h6>
              
               <div className="" style={{width:"70%"}}>
               <Select
                        options={options}
                        isMulti={true}
                        name="attributedata"
                        className="basic-multi-select form-control p-0 attributedata"
                        classNamePrefix="select"
                        placeholder="Select"
                        isClearable
                      />
               </div>
            </div>
            <div className="d-flex my-3 justify-content-between">
            <h6 style={{ marginBottom: "0px", fontSize: ".9rem",color:"#4F4F4F"}}>
                SMS content
              </h6>
              <textarea
                      style={{width:"70%"}}
                        rows="3"
                        
                      ></textarea>
            </div>
            <div className="d-flex align-items-center justify-content-between">
            <h6 style={{ marginBottom: "0px", fontSize: ".9rem",color:"#4F4F4F"}}>
                Template ID
              </h6>
                      <div style={{width:"70%"}}>
                      <input
                        type="text"
                        class="form-control"
                        id="myInput"
                        aria-describedby="emailHelp"
                        placeholder="enter slug"
                        name="parent_name"
                       
                      />
                      </div>
            </div>
            <hr className="my-4" style={{ color: "gray" }} />
            <button
           
              className="btn btn-sm rounded-pill"
              style={{
                color: "#103A81",
                fontWeight: "bold",
                backgroundColor: "#E7F4FC",
              }}
            >
            Send
            </button>
          </form>
        </div>
      </div>





      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 fw-bold h6 text-center">All Flash Deals</h3>
              <Link
                to="/marketing/flashdeals/create"
                className="btn btn-sm rounded-pill"
                style={{
                  color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",
                }}
              >
                Create New Flash Deals
              </Link>
            </div>
            <div className="productsfilter">
            <h5 class="mb-0 h6">Flash Deals</h5>
              <div className="searfilterproduct">
              <div className="col-md-3 p-2">
                  <div class="form-group">
                    <input
                      type="search"
                      class="aab form-control"
                      placeholder="type name & enter..."
                    />
                  </div>
                </div>
               
               
              </div>
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

                      <th scope="col">Title</th>
                      <th scope="col">Banner</th>

                      <th scope="col">Start Date</th>
                      <th scope="col">End Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Featured</th>
                      <th scope="col">Page Link</th>
                      <th scope="col">Options</th>

                    </tr>
                  </thead>
                  <tbody>
                  
                            <tr>
                              <td className="" scope="row">
                                <div className="customerss"></div>
                              </td>

                              <td>
                                <div className="customerss">
                                  sdfa
                                </div>
                              </td>

                              <td>
                              <div className="customerss">
                                  <img width="30" src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/awesome-solitude-bess-hamiti.jpg" alt="" />
                                </div>
                              </td>

                              <td>
                                <div className="customerss">
                                  
                                  7473647-897
                                  </div>
                              </td>
                              <td>
                                <div className="customerss">
                                  
                                  7473647-897
                                  </div>
                              </td>
                             
                              <td className="">
                                <div className="customerss">
                                  <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                  </label>
                                </div>
                              </td>
                              <td className="">
                                <div className="customerss">
                                  <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                  </label>
                                </div>
                              </td>
                              <td>
                              <div className="customerss"> sdafsafdsa
                              </div>
                              </td>

                              <td>
                                <div className="customerss d-flex align-items-center">
                                  
                                  <Link
                                    className="mx-1"
                                  >
                                    <i
                                      class="ri-edit-box-line"
                                      style={{
                                        color: "#4F4F4F",
                                        fontWeight: "500",
                                      }}
                                    ></i>
                                  </Link>
                                 
                                  <Link
                                    className="mx-1"
                                   
                                  >
                                    <i
                                      class="ri-delete-bin-6-line"
                                      style={{
                                        color: "#4F4F4F",
                                        fontWeight: "500",
                                      }}
                                    ></i>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                         
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        


        </div>
      </div>
     
    </div>
  );
}

export default Flash_Deal;
