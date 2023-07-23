import React from "react";
import "../WebsitePages/WebsitePages.css";
import Select from "react-select";

function WebsiteEditPages() {
  const options = [
    {
      label: "fdfsds",
      name: "sdfsafsa",
    },
    {
      label: "fdfsds",
      name: "sdfsafsa",
    },
    {
      label: "fdfsds",
      name: "sdfsafsa",
    },
  ];
  return (
    <>
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 h6">Home Page Settings</h3>
            </div>
            <div className="productsfilter"></div>
            <div className="container-fluid aaa-3">
              <div class="col-xl-10 aaa mx-auto">
                <div class="card">
                  <div class="card-header">
                    <h5
                      class="mb-0"
                      style={{ fontSize: "1rem", fontWeight: "500" }}
                    >
                      Home Slider
                    </h5>
                  </div>
                  <div class="card-body">
                    <div
                      class="alert alert-info fw-bold"
                      style={{ fontSize: ".8rem" }}
                    >
                      We have limited banner height to maintain UI. We had to
                      crop from both left &amp; right side in view for different
                      devices to make it responsive. Before designing banner
                      keep these points in mind.
                    </div>
                    <form>
                      <div class="form-group">
                        <label style={{ fontSize: ".8rem", fontWeight: "600" }}>
                          Photos &amp; Links
                        </label>
                        <div class="home-slider-target">
                          <div class="row gutters-5">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="mb-3">
                                  <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                  />
                                </div>
                              
                              
                              </div>
                            </div>
                            <div class="col-md">
                              <div class="form-group">
                               
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="http://"
                                  name="home_slider_links[]"
                                  value=""
                                />
                              </div>
                            </div>
                            <div class="col-md-auto">
                              <div class="form-group homeedit">
                                <button className="mx-1 shadow-none bg-transparent">
                                  <i
                                    class="ri-delete-bin-6-line"
                                    style={{
                                      color: "#4F4F4F",
                                      fontWeight: "500",
                                    }}
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="row gutters-5">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="mb-3">
                                  <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                  />
                                </div>
                               
                              </div>
                            </div>
                            <div class="col-md">
                              <div class="form-group">
                                <input
                                  type="hidden"
                                  name="types[]"
                                  value="home_slider_links"
                                />
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="http://"
                                  name="home_slider_links[]"
                                  value=""
                                />
                              </div>
                            </div>
                            <div class="col-md-auto">
                              <div class="form-group homeedit">
                                <button className="mx-1 shadow-none bg-transparent">
                                  <i
                                    class="ri-delete-bin-6-line"
                                    style={{
                                      color: "#4F4F4F",
                                      fontWeight: "500",
                                    }}
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="row gutters-5">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="mb-3">
                                  <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                  />
                                </div>
                              
                              </div>
                            </div>
                            <div class="col-md">
                              <div class="form-group">
                                <input
                                  type="hidden"
                                  name="types[]"
                                  value="home_slider_links"
                                />
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="http://"
                                  name="home_slider_links[]"
                                  value=""
                                />
                              </div>
                            </div>
                            <div class="col-md-auto">
                              <div class="form-group homeedit">
                                <button className="mx-1 shadow-none bg-transparent">
                                  <i
                                    class="ri-delete-bin-6-line"
                                    style={{
                                      color: "#4F4F4F",
                                      fontWeight: "500",
                                    }}
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="row gutters-5">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="mb-3">
                                  <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                  />
                                </div>
                               
                              </div>
                            </div>
                            <div class="col-md">
                              <div class="form-group">
                                <input
                                  type="hidden"
                                  name="types[]"
                                  value="home_slider_links"
                                />
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="http://"
                                  name="home_slider_links[]"
                                  value=""
                                />
                              </div>
                            </div>
                            <div class="col-md-auto">
                              <div class="form-group homeedit">
                                <button className="mx-1 shadow-none bg-transparent">
                                  <i
                                    class="ri-delete-bin-6-line"
                                    style={{
                                      color: "#4F4F4F",
                                      fontWeight: "500",
                                    }}
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="row gutters-5">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="mb-3">
                                  <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                  />
                                </div>
                               
                              </div>
                            </div>
                            <div class="col-md">
                              <div class="form-group">
                             
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="http://"
                                  name="home_slider_links[]"
                                  value=""
                                />
                              </div>
                            </div>
                            <div class="col-md-auto">
                              <div class="form-group homeedit">
                                <button className="mx-1 shadow-none bg-transparent">
                                  <i
                                    class="ri-delete-bin-6-line"
                                    style={{
                                      color: "#4F4F4F",
                                      fontWeight: "500",
                                    }}
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-right d-flex justify-content-between mt-3">
                        <button
                          type="button"
                          class="btn bg-light bg-opacity-50 btn-soft-secondary btn-sm rounded-pill"
                          data-toggle="add-more"
                        >
                          Add New
                        </button>
                        <button
                          type="submit"
                          class="btn btn-sm rounded-pill"
                          style={{
                            color: "#103A81",
                            fontWeight: "bold",
                            backgroundColor: "#E7F4FC",
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="card mt-4">
                  <div class="card-header">
                    <h5
                      class="mb-0 fw-600"
                      style={{ fontSize: "1rem", fontWeight: "500" }}
                    >
                      Home Banner 1 (Max 3)
                    </h5>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label style={{ fontSize: ".8rem", fontWeight: "600" }}>
                          Banner &amp; Links
                        </label>
                        <div class="home-banner1-target">
                          <div class="row gutters-5">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="mb-3">
                                  <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                  />
                                </div>
                              
                              </div>
                            </div>
                            <div class="col-md">
                              <div class="form-group">
                            
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="http://"
                                  name="home_banner1_links[]"
                                  value=""
                                />
                              </div>
                            </div>
                            <div class="col-md-auto">
                              <div class="form-group homeedit">
                                <button className="mx-1 shadow-none bg-transparent">
                                  <i
                                    class="ri-delete-bin-6-line"
                                    style={{
                                      color: "#4F4F4F",
                                      fontWeight: "500",
                                    }}
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-right mt-3 d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          class="btn bg-light bg-opacity-50 btn-soft-secondary btn-sm rounded-pill"
                          data-toggle="add-more"
                        >
                          Add New
                        </button>
                        <button
                          type="submit"
                          class="btn btn-sm rounded-pill"
                          style={{
                            color: "#103A81",
                            fontWeight: "bold",
                            backgroundColor: "#E7F4FC",
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card mt-4">
                  <div class="card-header">
                    <h5
                      class="mb-0"
                      style={{ fontSize: "1rem", fontWeight: "500" }}
                    >
                      Home Banner 2 (Max 3)
                    </h5>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label style={{ fontSize: ".8rem", fontWeight: "600" }}>
                          Banner &amp; Links
                        </label>
                        <div class="home-banner2-target">
                          <div class="row gutters-5">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="mb-3">
                                  <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                  />
                                </div>
                               
                              </div>
                            </div>
                            <div class="col-md">
                              <div class="form-group">
                                <input
                                  type="hidden"
                                  name="types[]"
                                  value="home_banner2_links"
                                />
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="http://"
                                  name="home_banner2_links[]"
                                  value=""
                                />
                              </div>
                            </div>
                            <div class="col-md-auto">
                              <div class="form-group homeedit">
                                <button className="mx-1 shadow-none bg-transparent">
                                  <i
                                    class="ri-delete-bin-6-line"
                                    style={{
                                      color: "#4F4F4F",
                                      fontWeight: "500",
                                    }}
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="row gutters-5">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="mb-3">
                                  <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                  />
                                </div>
                              
                              </div>
                            </div>
                            <div class="col-md">
                              <div class="form-group">
                              
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="http://"
                                  name="home_banner2_links[]"
                                  value=""
                                />
                              </div>
                            </div>
                            <div class="col-md-auto">
                              <div class="form-group homeedit">
                                <button className="mx-1 shadow-none bg-transparent">
                                  <i
                                    class="ri-delete-bin-6-line"
                                    style={{
                                      color: "#4F4F4F",
                                      fontWeight: "500",
                                    }}
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-right mt-3 d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          class="btn bg-light bg-opacity-50 btn-soft-secondary btn-sm rounded-pill"
                          data-toggle="add-more"
                        >
                          Add New
                        </button>
                        <button
                          type="submit"
                          class="btn btn-sm rounded-pill"
                          style={{
                            color: "#103A81",
                            fontWeight: "bold",
                            backgroundColor: "#E7F4FC",
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card mt-4">
                  <div class="card-header">
                    <h5
                      class="mb-0"
                      style={{ fontSize: "1rem", fontWeight: "500" }}
                    >
                      Home Categories
                    </h5>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label style={{ fontSize: ".8rem", fontWeight: "600" }}>
                          Categories
                        </label>
                        <div class="home-categories-target">
                         
                          <div class="row gutters-5">
                            <div class="col d-flex gap-3">
                              <div class="col-11">
                                <Select
                                  options={options}
                                  name="attributedata"
                                  classNamePrefix="select"
                                />
                              </div>
                              <div class="col-md-auto">
                                <div class="form-group homeedit">
                                  <button className="mx-1 shadow-none bg-transparent">
                                    <i
                                      class="ri-delete-bin-6-line"
                                      style={{
                                        color: "#4F4F4F",
                                        fontWeight: "500",
                                      }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row gutters-5">
                            <div class="col d-flex gap-3">
                              <div class="form-group col-11">
                                <Select
                                  options={options}
                                  name="attributedata"
                                  classNamePrefix="select"
                                />
                              </div>
                              <div class="col-md-auto">
                                <div class="form-group homeedit">
                                  <button className="mx-1 shadow-none bg-transparent">
                                    <i
                                      class="ri-delete-bin-6-line"
                                      style={{
                                        color: "#4F4F4F",
                                        fontWeight: "500",
                                      }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row gutters-5">
                            <div class="col d-flex gap-3">
                              <div class="form-group col-11">
                                <Select
                                  options={options}
                                  name="attributedata"
                                  classNamePrefix="select"
                                />
                              </div>
                              <div class="col-md-auto">
                                <div class="form-group homeedit">
                                  <button className="mx-1 shadow-none bg-transparent">
                                    <i
                                      class="ri-delete-bin-6-line"
                                      style={{
                                        color: "#4F4F4F",
                                        fontWeight: "500",
                                      }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row gutters-5">
                            <div class="col d-flex gap-3">
                              <div class="form-group col-11">
                                <Select
                                  options={options}
                                  name="attributedata"
                                  classNamePrefix="select"
                                  isClearable
                                />
                              </div>
                              <div class="col-md-auto">
                                <div class="form-group homeedit">
                                  <button className="mx-1 shadow-none bg-transparent">
                                    <i
                                      class="ri-delete-bin-6-line"
                                      style={{
                                        color: "#4F4F4F",
                                        fontWeight: "500",
                                      }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="text-right mt-3 d-flex justify-content-between align-items-center">
                            <button
                              type="button"
                              class="btn bg-light bg-opacity-50 btn-soft-secondary btn-sm rounded-pill"
                              data-toggle="add-more"
                            >
                              Add New
                            </button>
                            <button
                              type="submit"
                              class="btn btn-sm rounded-pill"
                              style={{
                                color: "#103A81",
                                fontWeight: "bold",
                                backgroundColor: "#E7F4FC",
                              }}
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="card mt-4">
                  <div class="card-header">
                    <h5
                      class="mb-0"
                      style={{ fontSize: "1rem", fontWeight: "500" }}
                    >
                      Home Banner 3 (Max 3)
                    </h5>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label style={{ fontSize: ".8rem", fontWeight: "600" }}>
                          Banner &amp; Links
                        </label>
                        <div class="home-banner3-target">
                          <div class="row gutters-5">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="mb-3">
                                  <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                  />
                                </div>
                                
                              </div>
                            </div>
                            <div class="col-md">
                              <div class="form-group">
                                <input
                                  type="hidden"
                                  name="types[]"
                                  value="home_banner3_links"
                                />
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="http://"
                                  name="home_banner3_links[]"
                                  value=""
                                />
                              </div>
                            </div>

                            <div class="col-md-auto">
                              <div class="form-group homeedit">
                                <button className="mx-1 shadow-none bg-transparent">
                                  <i
                                    class="ri-delete-bin-6-line"
                                    style={{
                                      color: "#4F4F4F",
                                      fontWeight: "500",
                                    }}
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-right mt-3 d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          class="btn bg-light bg-opacity-50 btn-soft-secondary btn-sm rounded-pill"
                          data-toggle="add-more"
                        >
                          Add New
                        </button>
                        <button
                          type="submit"
                          class="btn btn-sm rounded-pill"
                          style={{
                            color: "#103A81",
                            fontWeight: "bold",
                            backgroundColor: "#E7F4FC",
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="card mt-4">
                  <div class="card-header">
                    <h5
                      class="mb-0"
                      style={{ fontSize: "1rem", fontWeight: "500" }}
                    >
                      Top 10
                    </h5>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-group row ">
                        <div class="row gutters-5">
                          <div class="col d-flex gap-3">
                            <label
                              class="col-md-2 col-from-label"
                              style={{ fontSize: ".8rem", fontWeight: "600" }}
                            >
                              Top Categories (Max 10)
                            </label>
                            <div class="form-group col-10">
                              <Select
                                options={options}
                                name="attributedata"
                                classNamePrefix="select"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row gutters-5">
                          <div class="col d-flex gap-3">
                            <label
                              class="col-md-2 col-from-label"
                              style={{ fontSize: ".8rem", fontWeight: "600" }}
                            >
                              Top Brands (Max 10)
                            </label>
                            <div class="form-group col-10">
                              <Select
                                options={options}
                                name="attributedata"
                                classNamePrefix="select"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="text-right d-flex justify-content-end mt-3">
                          <button
                            type="submit"
                            class="btn btn-sm rounded-pill"
                            style={{
                              color: "#103A81",
                              fontWeight: "bold",
                              backgroundColor: "#E7F4FC",
                            }}
                          >
                            Update
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
      </div>
    </>
  );
}

export default WebsiteEditPages;
