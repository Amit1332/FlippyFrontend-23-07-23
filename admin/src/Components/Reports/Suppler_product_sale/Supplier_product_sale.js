import React, { useState } from "react";
import "./supplier_product_sale.css";
import Select from "react-select";

function Supplier_product_sale() {
  const [data, setdate] = useState();

  const options = [
    { value: "Approved", label: "Approved" },
    { value: "Non Approved", label: "Non Approved" },
  ];
  return (
    <div>
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 my-2 h6 ">Supplier Based Selling Report</h3>
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
                      Sort by verificarion status :
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
                          <th scope="col">Supplier Name</th>
                          <th scope="col">Shop Name</th>
                          <th scope="col">Number of Product Sale</th>
                          <th scope="col">Order Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                        <td scope="row">
                            <div className="customerss"></div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">0</div>
                          </td>
                          <td>
                            <div className="customerss">RS 0.00</div>
                          </td>
                        </tr>


                        <tr>
                        <td scope="row">
                            <div className="customerss"></div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">0</div>
                          </td>
                          <td>
                            <div className="customerss">RS 0.00</div>
                          </td>
                        </tr>


                        <tr>
                        <td scope="row">
                            <div className="customerss"></div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">0</div>
                          </td>
                          <td>
                            <div className="customerss">RS 0.00</div>
                          </td>
                        </tr>


                        <tr>
                        <td scope="row">
                            <div className="customerss"></div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">0</div>
                          </td>
                          <td>
                            <div className="customerss">RS 0.00</div>
                          </td>
                        </tr>


                        <tr>
                        <td scope="row">
                            <div className="customerss"></div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">0</div>
                          </td>
                          <td>
                            <div className="customerss">RS 0.00</div>
                          </td>
                        </tr>


                        <tr>
                        <td scope="row">
                            <div className="customerss"></div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">0</div>
                          </td>
                          <td>
                            <div className="customerss">RS 0.00</div>
                          </td>
                        </tr>


                        <tr>
                        <td scope="row">
                            <div className="customerss"></div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">JAYA FASHION</div>
                          </td>
                          <td>
                            <div className="customerss">0</div>
                          </td>
                          <td>
                            <div className="customerss">RS 0.00</div>
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
  );
}

export default Supplier_product_sale;
