import React from "react";
import "../PaymentGatewaay/SetPg.css";

const SetOtpCredentials = () => {
  return (
    <>


<div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 h6 text-center">Activate OTP</h3>
            </div>
            <div className="productsfilter">
            <div className="searfilterproduct">

            </div>



      <div class="aiz-main-content">
        <div class="px-15px px-lg-25px">
          <div class="row">
            <div class="col-lg-6">
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0 h6"style={{color:"#4F4F4F", fontSize:".9rem"}}>Twilio Credential</h5>
                </div>
                <div class="card-body">
                  <form class="form-horizontal setpgcred">
                    <div class="form-group row">
                      <div class="col-lg-3">
                        <label class="col-from-label"style={{color:"#4F4F4F", fontSize:".9rem"}}>Twilio Sid</label>
                      </div>
                      <div class="col-lg-6">
                        <input
                          type="text"
                          class="form-control"
                          name="TWILIO_SID"
                          value=""
                          placeholder="Twilio Sid"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-lg-3">
                        <label class="col-from-label"style={{color:"#4F4F4F", fontSize:".9rem"}}>Twilio Auth Token</label>
                      </div>
                      <div class="col-lg-6">
                        <input
                          type="text"
                          class="form-control"
                          name="TWILIO_AUTH_TOKEN"
                          value=""
                          placeholder="Twilio Auth Token"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-lg-3">
                        <label class="col-from-label" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                          Valid Twilio Number
                        </label>
                      </div>
                      <div class="col-lg-6">
                        <input
                          type="text"
                          class="form-control"
                          name="VALID_TWILLO_NUMBER"
                          value=""
                          placeholder="Valid Twilio Number"
                        />
                      </div>
                    </div>
                    <div class="form-group mb-0 text-right d-flex align-items-end justify-content-end mt-2">
                      <button
                        type="submit"
                        class="btn btn-sm rounded-pill"
                        style={{
                          color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0 h6" style={{color:"#4F4F4F", fontSize:".9rem"}}>Nexmo Credential</h5>
                </div>
                <div class="card-body">
                  <form class="form-horizontal setpgcred">
                    <div class="form-group row">
                      <div class="col-lg-3">
                        <label class="col-from-label"style={{color:"#4F4F4F", fontSize:".9rem"}}>Nexmo key</label>
                      </div>
                      <div class="col-lg-6">
                        <input
                          type="text"
                          class="form-control"
                          name="NEXMO_KEY"
                          value=""
                          placeholder="Nexmo key"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-lg-3">
                        <label class="col-from-label" style={{color:"#4F4F4F", fontSize:".9rem"}}>Nexmo Secret</label>
                      </div>
                      <div class="col-lg-6">
                        <input
                          type="text"
                          class="form-control"
                          name="NEXMO_SECRET"
                          value=""
                          placeholder="Nexmo Secret"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="form-group mb-0 text-right d-flex align-items-end justify-content-end mt-2">
                    <button
                        type="submit"
                        class="btn btn-sm rounded-pill"
                        style={{
                          color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetOtpCredentials;
