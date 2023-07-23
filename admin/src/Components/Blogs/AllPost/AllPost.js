import React from 'react'
import { Link } from 'react-router-dom'
import "../AllPost/AllPost.css"

function AllPost() {
    return (
        <>
         
         <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 h6 text-center">All Post</h3>
              <Link
                to="/bloginfo"
                className="btn btn-sm rounded-pill"
                style={{
                  color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",
                }}
              >
                Add New Post
              </Link>
            </div>
            <div className="productsfilter">
            <h5 class="mb-0 h6">Filter Blog</h5>
              <div className="searfilterproduct">
              <div className="col-md-3 p-2">
                  <span>Search Blog Post</span>

                  <div class="form-group">
                    <input
                      type="search"
                      class="aab form-control"
                      placeholder="search blog..."
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
                      <th scope="col">Category</th>

                      <th scope="col">Short Description</th>
                      <th scope="col">Status</th>
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
                                <div className="customerss">
                                  About E-commerce
                                </div>
                              </td>
                              
                              <td>
                              <div className="customerss text-wrap" style={{textAlign:"justify"}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi repudiandae, recusandae quasi cupiditate sint nihil! Unde ad amet nemo voluptatibus neque obcaecati animi laudantium error id culpa. Sint tenetur vero quos quas reiciendis hic odio eveniet dolor eius ipsum, dolorum labore natus incidunt quae quod quidem modi soluta earum voluptas. Voluptatem voluptate a officiis eaque labore dolores rem beatae. Iure suscipit non odit, ut, obcaecati saepe doloremque, soluta repudiandae excepturi doloribus rerum voluptatum facere culpa! Unde voluptates veniam, sapiente similique blanditiis maxime at in repellat, facilis laudantium totam sed. Ipsam doloribus adipisci dolores laboriosam inventore eveniet architecto sequi animi.
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

export default AllPost
