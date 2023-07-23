import React from 'react'
import { Link } from 'react-router-dom'

function BlogCategory() {
    return (
        <>
         


            <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 h6 text-center">All Blog Categories</h3>
              <Link
                to="/add/blogCategories"
                className="btn btn-sm rounded-pill"
                style={{
                  color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",
                }}
              >
              Add New Category
              </Link>
            </div>
            <div className="productsfilter">
              <div className="searfilterproduct">
              <div className="col-md-3 p-2">
                  <div class="form-group">
                    <input
                      type="search"
                      class="aab form-control"
                      placeholder="Type name & enter"
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

                      <th scope="col">Name</th>

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
                                About E-commerce
                                </div>
                              </td>
                             
                              
                            
                             

                              <td>
                                <div className="customerss d-flex align-items-center">
                                  <Link
                                    className="mx-1"
                                  >
                                    <i
                                      class="ri-eye-line"
                                      style={{
                                        color: "#4F4F4F",
                                        fontWeight: "500",
                                      }}
                                    ></i>
                                  </Link>
                                  <Link
                                  to="/blogcategoryedit"
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
                                  <Link className="mx-1" hidden to="">
                                    {" "}
                                    <i
                                      class="las la-copy"
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
        </>
    )
}

export default BlogCategory
