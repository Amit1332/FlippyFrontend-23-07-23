import React from 'react'

const EditRole = () => {
  return (
    <>
 <div class="aiz-main-content">
        <div class="px-15px px-lg-25px">
          <div class="col-lg-7 mx-auto">
            <div class="card"  style={{ backgroundColor: "#D9E5F9" }}>
              <div class="card-header">
                <h5 class="mb-0 h6">Edit Role</h5>
              </div>
              <form>
              
                <div class="card-body">
                  <div class="form-group row">
                    <label class="col-md-3 col-from-label" for="name">
                      Name
                    </label>
                    <div class="col-md-9">
                      <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        name="name"
                        class="form-control"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="card-header">
                    <h5 class="mb-0 h6">Permissions</h5>
                  </div>
                  <br />
                  <div class="form-group row">
                    <label class="col-md-2 col-from-label"></label>
                    <div class="col-md-8">
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Products</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">All Orders</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Inhouse orders</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Seller Orders</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">
                            Pick-up Point Order
                          </label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Refunds</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Customers</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Sellers</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Reports</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Marketing</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Support</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Website Setup</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">
                            Setup &amp; Configurations
                          </label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">
                            Paytm Payment Gateway
                          </label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">OTP System</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Staffs</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Addon Manager</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Uploaded Files</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Blog System</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">System</label>
                        </div>
                        <div class="col-md-2">
                          <label class="aiz-switch aiz-switch-success mb-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input myinput"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mb-0 text-right d-flex align-items-end justify-content-end">
                    <button type="submit" class="btn btn-sm text-light" style={{backgroundColor:"#164c96"}}>
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      
    </>
  )
}

export default EditRole
