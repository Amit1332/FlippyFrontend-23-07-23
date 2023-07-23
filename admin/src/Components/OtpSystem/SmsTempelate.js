import React from "react";

const SmsTempelate = () => {
  return (
    <>
    <div className="container-fluid allproducts">
    <div class="aiz-main-content">
        <div class="px-15px px-lg-25px">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header">
                <h3 class="mb-0 h6"  style={{color:"#4F4F4F", fontSize:".9rem"}}>SMS Templates</h3>
                  <h5 class="mb-0 h6"></h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-3">
                      <div
                        class="nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          class="nav-link active rounded-pill"
                          id="v-pills-tab-2"
                          data-toggle="pill"
                          href="#v-pills-1"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="true"
                        >
                          Phone Number Verification
                        </a>
                        <a
                          class="nav-link rounded-pill"
                          id="v-pills-tab-2"
                          data-toggle="pill"
                          href="#v-pills-2"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Password Reset
                        </a>
                        <a
                          class="nav-link rounded-pill"
                          id="v-pills-tab-2"
                          data-toggle="pill"
                          href="#v-pills-3"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Order Placement
                        </a>
                        <a
                          class="nav-link rounded-pill"
                          id="v-pills-tab-2"
                          data-toggle="pill"
                          href="#v-pills-4"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Delivery Status Change
                        </a>
                        <a
                          class="nav-link rounded-pill"
                          id="v-pills-tab-2"
                          data-toggle="pill"
                          href="#v-pills-5"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Payment Status Change
                        </a>
                        <a
                          class="nav-link rounded-pill"
                          id="v-pills-tab-2"
                          data-toggle="pill"
                          href="#v-pills-6"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Assign Delivery Boy
                        </a>
                      </div>
                    </div>





                    <div class="col-9">
                      <div class="tab-content" id="v-pills-tabContent">
                        <div
                          class="tab-pane fade active show"
                          id="v-pills-1"
                          role="tabpanel"
                          aria-labelledby="v-pills-tab-1"
                        >
                          <form>
                            
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label"  style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                SMS Body
                              </label>
                              <div class="col-md-10">
                                <textarea
                                  name="body"
                                  class="form-control"
                                  placeholder="Type.."
                                  rows="6"
                                  required=""
                                >
                                  
                                  is your verification code for .
                                </textarea>
                                <small class="form-text text-danger">
                                  **N.B : Do Not Change The Variables Like**
                                </small>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                Template ID
                              </label>
                              <div class="col-md-10">
                                <input
                                  type="text"
                                  name="template_id"
                                  value=""
                                  class="form-control"
                                  placeholder="Template ID"
                                />
                                <small class="form-text text-danger">
                                  **N.B : Template ID is Required Only for
                                  Fast2SMS DLT Manual**
                                </small>
                              </div>
                            </div>
                            <div class="form-group mb-3 text-right">
                              <button type="submit" class="btn btn-sm rounded-pill"style={{
                  color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",
                }}>
                                Update Settings
                              </button>
                            </div>
                          </form>
                        
                        </div>
                        <div
                          class="tab-pane fade show "
                          id="v-pills-2"
                          role="tabpanel"
                          aria-labelledby="v-pills-tab-1"
                        >
                          <form>
                            <input name="_method" type="hidden" value="PATCH" />
                            
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label"  style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                SMS Body
                              </label>
                              <div class="col-md-10">
                                <textarea
                                  name="body"
                                  class="form-control"
                                  placeholder="Type.."
                                  rows="6"
                                  required=""
                                >
                                  Your password reset code is.
                                </textarea>
                                <small class="form-text text-danger">
                                  **N.B : Do Not Change The Variables Like
                                </small>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                Template ID
                              </label>
                              <div class="col-md-10">
                                <input
                                  type="text"
                                  name="template_id"
                                  value=""
                                  class="form-control"
                                  placeholder="Template ID"
                                />
                                <small class="form-text text-danger">
                                  **N.B : Template ID is Required Only for
                                  Fast2SMS DLT Manual**
                                </small>
                              </div>
                            </div>
                            <div class="form-group mb-3 text-right">
                            <button type="submit" class="btn btn-sm rounded-pill"style={{
                  color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",
                }}>
                                Update Settings
                              </button>
                            </div>
                          </form>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-3"
                          role="tabpanel"
                          aria-labelledby="v-pills-tab-1"
                        >
                          <form>
                            <input name="_method" type="hidden" value="PATCH" />
                            
                            <div class="form-group row">
                              <div class="col-md-2">
                                <label class="col-from-label">Activation</label>
                              </div>
                              <div class="col-md-10 my-1">
                              <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label"  style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                SMS Body
                              </label>
                              <div class="col-md-10">
                                <textarea
                                  name="body"
                                  class="form-control"
                                  placeholder="Type.."
                                  rows="6"
                                  required=""
                                >
                                  Your order has been placed and Order Code is
                                  
                                </textarea>
                                <small class="form-text text-danger">
                                  **N.B : Do Not Change The Variables Like**
                                </small>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                Template ID
                              </label>
                              <div class="col-md-10">
                                <input
                                  type="text"
                                  name="template_id"
                                  value=""
                                  class="form-control"
                                  placeholder="Template ID"
                                />
                                <small class="form-text text-danger">
                                  **N.B : Template ID is Required Only for
                                  Fast2SMS DLT Manual**
                                </small>
                              </div>
                            </div>
                            <div class="form-group mb-3 text-right">
                            <button type="submit" class="btn btn-sm rounded-pill"style={{
                  color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",
                }}>
                                Update Settings
                              </button>
                            </div>
                          </form>
                        </div>


                        <div
                          class="tab-pane fade"
                          id="v-pills-4"
                          role="tabpanel"
                          aria-labelledby="v-pills-tab-1"
                        >
                          <form>
                            <input name="_method" type="hidden" value="PATCH" />
                           
                            <div class="form-group row">
                              <div class="col-md-2">
                                <label class="col-from-label">Activation</label>
                              </div>
                              <div class="col-md-10 my-1">
                              <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label"  style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                SMS Body
                              </label>
                              <div class="col-md-10">
                                <textarea
                                  name="body"
                                  class="form-control"
                                  placeholder="Type.."
                                  rows="6"
                                  required=""
                                >
                                  Your delivery status has been updated to for
                                  Order code :
                                </textarea>
                                <small class="form-text text-danger">
                                  **N.B : Do Not Change The Variables Like **
                                </small>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                Template ID
                              </label>
                              <div class="col-md-10">
                                <input
                                  type="text"
                                  name="template_id"
                                  value=""
                                  class="form-control"
                                  placeholder="Template ID"
                                />
                                <small class="form-text text-danger">
                                  **N.B : Template ID is Required Only for
                                  Fast2SMS DLT Manual**
                                </small>
                              </div>
                            </div>
                            <div class="form-group mb-3 text-right">
                            <button type="submit" class="btn btn-sm rounded-pill"style={{
                  color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",
                }}>
                                Update Settings
                              </button>
                            </div>
                          </form>
                        </div>


                        <div
                          class="tab-pane fade"
                          id="v-pills-5"
                          role="tabpanel"
                          aria-labelledby="v-pills-tab-1"
                        >
                          <form>
                            <input name="_method" type="hidden" value="PATCH" />
                           
                            <div class="form-group row">
                              <div class="col-md-2">
                                <label class="col-from-label">Activation</label>
                              </div>
                              <div class="col-md-10 my-1">
                              <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label"  style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                SMS Body
                              </label>
                              <div class="col-md-10">
                                <textarea
                                  name="body"
                                  class="form-control"
                                  placeholder="Type.."
                                  rows="6"
                                  required=""
                                >
                                  Your payment status has been updated to
                                 for Order code :
                                 
                                </textarea>
                                <small class="form-text text-danger">
                                  **N.B : Do Not Change The Variables Like
                                </small>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                Template ID
                              </label>
                              <div class="col-md-10">
                                <input
                                  type="text"
                                  name="template_id"
                                  value=""
                                  class="form-control"
                                  placeholder="Template ID"
                                />
                                <small class="form-text text-danger">
                                  **N.B : Template ID is Required Only for
                                  Fast2SMS DLT Manual**
                                </small>
                              </div>
                            </div>
                            <div class="form-group mb-3 text-right">
                            <button type="submit" class="btn btn-sm rounded-pill"style={{
                  color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",
                }}>
                                Update Settings
                              </button>
                            </div>
                          </form>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-6"
                          role="tabpanel"
                          aria-labelledby="v-pills-tab-1"
                        >
                          <form>
                            <input name="_method" type="hidden" value="PATCH" />
                           
                            <div class="form-group row">
                              <div class="col-md-2">
                                <label class="col-from-label">Activation</label>
                              </div>
                              <div class="col-md-10 my-1">
                              <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label"  style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                SMS Body
                              </label>
                              <div class="col-md-10">
                                <textarea
                                  name="body"
                                  class="form-control"
                                  placeholder="Type.."
                                  rows="6"
                                  required=""
                                >
                                  You are assigned to deliver an order. Order
                                  code : 
                                </textarea>
                                <small class="form-text text-danger">
                                  **N.B : Do Not Change The Variables Like **
                                </small>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-md-2 col-form-label" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                                Template ID
                              </label>
                              <div class="col-md-10">
                                <input
                                  type="text"
                                  name="template_id"
                                  value=""
                                  class="form-control"
                                  placeholder="Template ID"
                                />
                                <small class="form-text text-danger">
                                  **N.B : Template ID is Required Only for
                                  Fast2SMS DLT Manual**
                                </small>
                              </div>
                            </div>
                            <div class="form-group mb-3 text-right">
                            <button type="submit" class="btn btn-sm rounded-pill"style={{
                  color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",
                }}>
                                Update Settings
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
    </div>
      
    </>
  );
};

export default SmsTempelate;
