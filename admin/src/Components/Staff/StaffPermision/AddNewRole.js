import React from "react";

const AddNewRole = () => {
  return (
    <>

<div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            
            </div>
            <div className="productsfilter">
            </div>
          </div>
      <div class="aiz-main-content">
        <div class="px-15px px-lg-25px">
          <div class="col-lg-7 mx-auto">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0 h6">Role Information</h5>
              </div>
              <form action="https://flippyseven.com/admin/roles" method="POST">
                <input
                  type="hidden"
                  name="_token"
                  value="WnghMbil5r5hmU3DLkjyaDht5XCZ4Y52BhGLUQSF"
                />{" "}
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
                        <div class="col-md-2 my-1">
                        <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">All Orders</label>
                        </div>
                        <div class="col-md-2 my-1">
                        <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Inhouse orders</label>
                        </div>
                        <div class="col-md-2 my-1">
                        <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10">
                          <label class="col-from-label">Seller Orders</label>
                        </div>
                        <div class="col-md-2 my-1">
                        <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
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

      </div>
        </div>
    </>
  );
};

export default AddNewRole;
