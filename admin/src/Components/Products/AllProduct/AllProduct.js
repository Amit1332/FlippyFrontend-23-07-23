import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import Product from "./Product";
// import Pagination from "react-js-pagination"

const AllProduct = () => {
  return (
    <>
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 h6 text-center">All Products</h3>
            </div>
            <div className="productsfilter">
              <h5 class="mb-0 h6">Filter Products</h5>

              <div className="searfilterproduct">
                {/* <div class="col-md-2 ml-auto">
                  <span>Search by Supplier</span>
                  <div className="seacrch">
                    <input type="search" placeholder="search supplier..." />
                  </div>
                </div> */}
                <div className="col-md-3 p-2">
                  <span>Search by Supplier</span>

                  <div class="form-group">
                    <input
                      type="search"
                      class="aab form-control"
                      placeholder="search product..."
                    />
                  </div>
                </div>

                <div className="col-md-3 p-2">
                  <span>Search Products</span>

                  <div class="form-group">
                    <input
                      type="search"
                      class="aab form-control"
                      placeholder="search product..."
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
                      <th scope="col">
                        <div class="">
                          <input
                            class="myinput mt-1"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </th>
                      <th scope="col">Name</th>
                      <th scope="col">Added By</th>
                      <th scope="col">Info</th>
                      <th scope="col">Total Stock</th>
                      <th scope="col">Todays Deal</th>
                      <th scope="col">Published </th>
                      <th scope="col">Featured</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Product />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
