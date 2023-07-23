import React, { useEffect, useState } from "react";
import { getSupplierCompleteDetails } from "../../../actions/SupplierActions";
import { Link, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
function SupplierView() {
  const params = useParams();
  // const alert = useAlert();
  const dispatch = useDispatch();

  const { supplier} = useSelector(
    (state) => state.getsupplierCompleteDetails
  );

  useEffect(() => {
    dispatch(getSupplierCompleteDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <div className="container-fluid" style={{}}>
        <div
          className="supplier-details p-2"
          style={{ backgroundColor: "#D9E5F9", borderRadius: "5px" }}
        >
          <div className="first-heading ">
            <h3>Supplier Details</h3>
            <div className="nav-right">
              <button className="btn btn-danger">Reject</button>
              <button className="btn btn-success">Accept</button>
            </div>
          </div>
          <hr />
          <div className="user-info">
            <h2>Supplier Info</h2>
            <p>
              Name: {supplier.supplier_details && supplier.supplier_details.your_name}
            </p>
            <p>
              Email: {supplier.sellerProfile && supplier.sellerProfile.email}
            </p>
            <p>Address: </p>
            <p>
              Phone:{supplier.sellerProfile && supplier.sellerProfile.phone}
            </p>
            <p>GSTINN NO. : {supplier.gst}</p>
            <p>PAN NO. : {supplier.pan}</p>

          </div>
          <div className="shop-info">
            <h2>Shop Info</h2>
            <p>Shop Name : {supplier.supplier_details && supplier.supplier_details.store_name}</p>
            <p>
              Address : {supplier.pickup_address && supplier.pickup_address.house_no}, {supplier.pickup_address && supplier.pickup_address.street},{supplier.pickup_address && supplier.pickup_address.landmark},
              {supplier.pickup_address && supplier.pickup_address.city},{supplier.pickup_address && supplier.pickup_address.state},{supplier.pickup_address && supplier.pickup_address.postal_code},{supplier.pickup_address && supplier.pickup_address.state}
            </p>
          </div>
          {/* supplier details table */}
          <div
            class="table-responsive"
            style={{
              border: "1px solid #d5eced",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              class="d-flex align-items-center text-center"
              style={{
                height: "40px",
                backgroundColor: "#264B91",
                color: "#FFF",
                justifyContent: "center",
              }}
            >
              Is this an Internationaly Fulfilled Accounts ?
            </div>
            <div
              class="d-flex align-items-center"
              style={{ border: "1px solid #d5eced", height: "50px" }}
            >
              Is this an Internationaly Fulfilled Accounts :&nbsp; &nbsp;
              <form
                class="form-group d-flex align-items-center gap-2 mt-1"
                style={{ width: "100px", justifyContent: "space-between" }}
              >
                <div class="form-check d-flex">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked=""
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    No
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Yes{" "}
                  </label>
                </div>
              </form>
            </div>

            <div class="">
              <div
                class="d-flex align-items-center text-center"
                style={{
                  height: "40px",
                  backgroundColor: "#264B91",
                  color: "#FFF",
                  justifyContent: "center",
                }}
              >
                {" "}
                Supplier Bank Details
              </div>
              <table class="table table-striped " cellspacing="0" width="100%">
                <tbody>
                  <tr>
                    <th class="text">Bank Name</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th class="text">Bank Acc Name</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th class="text">Bank Acc Number</th>
                    <td>{supplier.bank_details&&supplier.bank_details.account_number}</td>
                  </tr>
                  <tr>
                    <th class="text">Bank IFSC</th>
                    <td>{supplier.bank_details&&supplier.bank_details.ifsc_code}</td>
                  </tr>
                  <tr>
                    <th class="text">Bank Routing Number</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <div
                class="d-flex align-items-center text-center"
                style={{
                  height: "40px",
                  backgroundColor: "#264B91",
                  color: "#FFF",
                  justifyContent: "center",
                }}
              >
                {" "}
                Supplier Payment Plan Details
              </div>
              <div class="container">
                <div class="row text-center">
                  <div class="col mt-2">
                    <p class="text-left mb-n1">Monetization Type :</p>
                    <div class="col-sm p-2 mt-1 border border-info">
                      Commision
                    </div>
                  </div>
                  <div class="col mt-2">
                    <p class="text-left mb-n1">
                      Default Monetization Percent :
                    </p>
                    <div class="col-sm p-2 mt-1 border border-info">5</div>
                  </div>
                  <div class="col mt-2">
                    <p class="text-left mb-n1">Percent Type</p>
                    <div class="col-sm p-2 mt-1 border border-info">
                      Delivery + X
                    </div>
                  </div>
                </div>

                <div class="row text-center">
                  <div class="col-4 mt-2">
                    <p class="text-left mb-n1">Credit Period :</p>
                    <div class="col-sm p-2 mt-1 border border-info">
                      Commision
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="d-flex align-items-center text-center"
                style={{
                  height: "40px",
                  backgroundColor: "#264B91",
                  color: "#FFF",
                  justifyContent: "center",
                  margin: "10px 0px",
                }}
              >
                Supplier Shipment Details
              </div>
              <div class="container">
                <div class="row text-center">
                  <div class="col mt-2">
                    <p class="text-left mb-n1">Flippy Fullfilled :</p>
                    <div class="col-sm mt-1 border border-info">
                      <form
                        class="form-group d-flex gap-2 align-items-center p-1 mt-1"
                        style={{
                          width: "100px",
                          justifyContent: "space-between",
                        }}
                      >
                        <div class="form-check d-flex align-items-center">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked=""
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            No{" "}
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Yes{" "}
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div class="col mt-2">
                    <p class="text-left mb-n1">Shipment Price/Bracket(Rs)* :</p>
                    <div class="col-sm p-2 mt-1 border border-info">70</div>
                  </div>
                  <div class="col mt-2">
                    <p class="text-left mb-n1">Ops Status :</p>
                    <div class="col-sm p-2 mt-1 border border-info">None</div>
                  </div>
                  <div class="col mt-2">
                    <p class="text-left mb-n1">SLA Min :</p>
                    <div class="col-sm p-2 mt-1 border border-info">2</div>
                  </div>
                </div>

                <div class="row text-center">
                  <div class="col mt-2">
                    <p class="text-left mb-n1">Weight Brackets in Grams* :</p>
                    <div class="col-sm p-2 mt-1 border border-info">100</div>
                  </div>

                  <div class="col mt-2">
                    <p class="text-left mb-n1">COD Options :</p>
                    <div class="col-sm p-2 mt-1 border border-info">yes</div>
                  </div>
                  <div class="col mt-2">
                    <p class="text-left mb-n1">Returns :</p>
                    <div class="col-sm p-2 mt-1 border border-info">
                      Returns
                    </div>
                  </div>
                  <div class="col mt-2">
                    <p class="text-left mb-n1">SLA Max :</p>
                    <div class="col-sm p-2 mt-1 border border-info">2</div>
                  </div>
                </div>

                <div class="col mt-2">
                  <p class="text-left mb-n1">Exchange Enable :</p>
                  <div class="col-sm mt-1 border border-info">
                    <form
                      class="form-group d-flex gap-2 align-items-center p-1 mt-1"
                      style={{
                        width: "100px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="form-check d-flex">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked=""
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          No{" "}
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Yes{" "}
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div
                class="d-flex align-items-center text-center"
                style={{
                  height: "40px",
                  backgroundColor: "#264B91",
                  color: "#FFF",
                  justifyContent: "center",
                  margin: "10px 0px",
                }}
              >
                {" "}
                Supplier Executive Details
              </div>
              <div class="container">
                <div class="row text-center">
                  <div class="col mt-2">
                    <p class="text-left mb-n1">Account Manager :</p>
                    <div class="col-sm p-2 mt-1 border border-info">
                      0 Not Assigned
                    </div>
                  </div>

                  <div class="col mt-2">
                    <p class="text-left mb-n1">BD Execuive :</p>
                    <div class="col-sm p-2 mt-1 border border-info">
                      Supplier Onboarding
                    </div>
                  </div>
                </div>

                <div class="row text-center">
                  <div class="col-6 mt-2">
                    <p class="text-left mb-n1">OPS Executive :</p>
                    <div class="col-sm p-2 mt-1 border border-info">
                      Commision
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="d-flex align-items-center text-center"
                style={{
                  height: "40px",
                  backgroundColor: "#264B91",
                  color: "#FFF",
                  justifyContent: "center",
                  margin: "10px 0px",
                }}
              >
                {" "}
                Supplier Address Details
              </div>
              <div
                class="d-flex align-items-center text-center"
                style={{
                  height: "40px",
                  backgroundColor: "#264B91",
                  color: "#FFF",
                  justifyContent: "center",
                  margin: "10px 0px",
                  color: "white",
                }}
              >
                {" "}
                Pickup Address
              </div>
              <div class="container">
                <div class="row text-center">
                  <div class="col mt-2">
                    <div class="col-sm p-2 mt-1 border border-info">
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                          Address*{" "}
                        </label>
                        <textarea
                          class="form-control resize-none"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          style={{ backgroundColor: "rgb(255,255,255,0.611)" }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row text-center">
                  <div class="col mt-2">
                    <p class="text-left mb-n1">Landmark* :</p>
                    <div class="col-sm p-2 mt-1 border border-info">0</div>
                  </div>

                  <div class="col mt-2">
                    <p class="text-left mb-n1">City :</p>
                    <div class="col-sm p-2 mt-1 border border-info">
                      Luckhnow
                    </div>
                  </div>
                  <div class="col mt-2">
                    <p class="text-left mb-n1">Country :</p>
                    <div class="col-sm p-2 mt-1 border border-info">India</div>
                  </div>
                </div>

                <div class="row text-center">
                  <div class="col-4 mt-2">
                    <p class="text-left mb-n1">State* :</p>
                    <div class="col-sm p-2 mt-1 border border-info">
                      Madhya Pradesh
                    </div>
                  </div>

                  <div class="col-4 mt-2">
                    <p class="text-left mb-n1">Pincode :</p>
                    <div class="col-sm p-2 mt-1 border border-info">486001</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-check m-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                is same as pickup Adress ?
              </label>
            </div>

            <div
              class="d-flex align-items-center text-center"
              style={{
                height: "40px",
                backgroundColor: "#264B91",
                color: "#FFF",
                justifyContent: "center",
                margin: "10px 0px",
                color: "white",
              }}
            >
              {" "}
              Registered Address
            </div>
            <div class="container">
              <div class="row text-center">
                <div class="col mt-2">
                  <div class="col-sm p-2 mt-1 border border-info">
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Address* </label>
                      <textarea
                        class="form-control resize-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        style={{ backgroundColor: "rgb(255,255,255,0.611)" }}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row text-center">
                <div class="col mt-2">
                  <p class="text-left mb-n1">Landmark* :</p>
                  <div class="col-sm p-2 mt-1 border border-info">0</div>
                </div>

                <div class="col mt-2">
                  <p class="text-left mb-n1">City :</p>
                  <div class="col-sm p-2 mt-1 border border-info">Luckhnow</div>
                </div>
                <div class="col mt-2">
                  <p class="text-left mb-n1">Country :</p>
                  <div class="col-sm p-2 mt-1 border border-info">India</div>
                </div>
              </div>

              <div class="row text-center">
                <div class="col-4 mt-2">
                  <p class="text-left mb-n1">State* :</p>
                  <div class="col-sm p-2 mt-1 border border-info">
                    Madhya Pradesh
                  </div>
                </div>

                <div class="col-4 mt-2">
                  <p class="text-left mb-n1">Pincode :</p>
                  <div class="col-sm p-2 mt-1 border border-info">486001</div>
                </div>
              </div>
            </div>

            <div
              class="d-flex align-items-center text-center"
              style={{
                height: "40px",
                backgroundColor: "#264B91",
                color: "#FFF",
                justifyContent: "center",
                margin: "10px 0px",
              }}
            >
              {" "}
              Supplier Buisness Details
            </div>
            <div class="container">
              <div class="row text-center">
                <div class="col mt-2">
                  <p class="text-left mb-n1">Replica Supplies* :</p>
                  <div class="col-sm p-2 mt-1 border border-info">yes</div>
                </div>

                <div class="col mt-2">
                  <p class="text-left mb-n1">Supplier Type :</p>
                  <div class="col-sm p-2 mt-1 border border-info">
                    supplier type
                  </div>
                </div>
                <div class="col mt-2">
                  <p class="text-left mb-n1">Facebook Link :</p>
                  <div class="col-sm p-2 mt-1 border border-info">
                    https://facebook.com
                  </div>
                </div>
              </div>

              <div class="row text-center">
                <div class="col-4 mt-2">
                  <p class="text-left mb-n1">Sells to Reseller* :</p>
                  <div class="col-sm p-2 mt-1 border border-info">no</div>
                </div>

                <div class="col-4 mt-2">
                  <p class="text-left mb-n1">Website Link :</p>
                  <div class="col-sm p-2 mt-1 border border-info">
                    https://flippyseven.com
                  </div>
                </div>
                <div class="col-4 mt-2">
                  <p class="text-left mb-n1">Primary Category :</p>
                  <div class="col-sm p-2 mt-1 border border-info">
                    women ethnic
                  </div>
                </div>
              </div>

              <div class="row text-center">
                <div class="col mt-2">
                  <div class="col-sm p-2 mt-1 border border-info">
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Additional Comments{" "}
                      </label>
                      <textarea
                        class="form-control resize-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Additional Comments"
                        style={{ backgroundColor: "rgb(255,255,255,0.611)" }}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="supplier-details-table">
         <table class="table table-bordered table-dark">
            <thead>
            </thead>
            <tbody>
               <tr className="text-center">
                  <td colspan="4">Is this an Internationaly Fulfilled Accounts ?</td>
                </tr>
                <tr>
                  <td colspan="4">Is this an Internationaly Fulfilled Accounts :</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              
            </tbody>
          </table>
         </div> */}
        </div>
      </div>
      {/* <h1 style={{color:"#D9E5F9"}}>hiii</h1> */}
    </>
  );
}

export default SupplierView;
