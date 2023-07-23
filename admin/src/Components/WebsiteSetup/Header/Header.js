import React from "react";
import "../Header/Header.css";

function Header() {
  return (
    <>
      <div className="container-fluid header-main">
        <div class="px-15px px-lg-25px">
          <div class="aiz-titlebar text-left mt-2 mb-3">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="mb-0 h6">Website Setup</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-9 mx-auto">
              <div class="card">
                <div class="card-header">
                  <h6 class="mb-0">Header Setting</h6>
                </div>
                <div class="card-body">
                  <form
                    action="https://flippyseven.com/admin/business-settings/update"
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="KXcPpR5lS5hI9pLBdTwJh9nLmihi6wZEKnfh69DS"
                    />{" "}
                    <div class="form-group row">
                      <label class="col-md-3 col-from-label">Header Logo</label>
                      <div class="col-md-8 pb-3">
                        <div class="mb-3">
                          <input
                            class="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>

                        <div class="file-preview d-flex justify-content-between align-items-center p-2">
                          <div
                            class="d-flex  align-items-center gap-3 "
                            data-id="288"
                            title="Logo.png"
                          >
                            <div class=" align-self-stretch d-flex  thumb img">
                              <img
                                src="//flippyseven.com/public/uploads/all/2XxuRE6EpIZPixCfgJyWzWe0lbrGF9AdlWeasHAW.png"
                                class="img-fit"
                                alt=""
                              />
                            </div>
                            <div class="col body ">
                              <h6 class="d-flex mb-0">
                                <span class="text-truncate title">Logo</span>
                                <span class="ext flex-shrink-0">.png</span>
                              </h6>
                              <p className="mb-0">98 KB</p>
                            </div>
                          </div>
                          <div class="remove">
                            <button
                              class="btn btn-sm btn-link remove-attachment"
                              type="button"
                              fdprocessedid="i4y7xw"
                            >
                              <i class="la la-close"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row pb-2">
                      <label class="col-md-3 col-from-label">
                        Show Language Switcher?
                      </label>
                      <div class="col-md-8">
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round"></span>
                        </label>
                      </div>
                    </div>
                    <div class="form-group row pb-2">
                      <label class="col-md-3 col-from-label">
                        Show Currency Switcher?
                      </label>
                      <div class="col-md-8">
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round"></span>
                        </label>
                      </div>
                    </div>
                    <div class="form-group row pb-3">
                      <label class="col-md-3 col-from-label">
                        Enable stikcy header?
                      </label>
                      <div class="col-md-8">
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round"></span>
                        </label>
                      </div>
                    </div>
                    <hr />
                    <div class=" pt-3">
                      <div class="form-group row">
                        <label class="col-md-3 col-from-label">
                          Topbar Banner
                        </label>
                        <div class="col-md-8">
                          <div class="mb-3">
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-md-3 col-from-label">
                          Topbar Banner Link
                        </label>
                        <div class="col-md-8">
                          <div class="form-group">
                            <input
                              type="hidden"
                              name="types[]"
                              value="topbar_banner_link"
                            />
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Link with http:// Or https://"
                              name="topbar_banner_link"
                              value=""
                              fdprocessedid="4spdok"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div class=" pt-3 pb-4">
                      <div class="form-group row">
                        <label class="col-md-3 col-from-label">
                          Help line number
                        </label>
                        <div class="col-md-8">
                          <div class="form-group">
                            <input
                              type="hidden"
                              name="types[]"
                              value="helpline_number"
                            />
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Help line number"
                              name="helpline_number"
                              value="0755 4857712"
                              fdprocessedid="nshyi7"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class=" pt-3"
                      style={{ borderTop: "1px solid rgba(0, 0, 0, 0.229)" }}
                    >
                      <label class="col-md-3 col-from-label">
                        Help line number
                      </label>
                      <div class="header-nav-menu">
                        <input
                          type="hidden"
                          name="types[]"
                          value="header_menu_labels"
                        />
                        <input
                          type="hidden"
                          name="types[]"
                          value="header_menu_links"
                        />
                        <div class="row gutters-5 text-center">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Home"
                                fdprocessedid="6778g"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="https://flippyseven.com/"
                                fdprocessedid="gx1rt"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div class="row gutters-5 text-center">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Womens Ethnic"
                                fdprocessedid="ct6t9l"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="https://flippyseven.com/category/women-ethnic-wear-ik13b"
                                fdprocessedid="uo4chl"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div class="row gutters-5">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Appliances"
                                fdprocessedid="havu0m"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="https://flippyseven.com/category/personal-care-appliances-erplv"
                                fdprocessedid="clvkmr"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div class="row gutters-5">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Kids"
                                fdprocessedid="xsx6i3"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="https://flippyseven.com/category/kids-wear-9gudq"
                                fdprocessedid="2k9vwn"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div class="row gutters-5">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Jewellery"
                                fdprocessedid="6c2xbw"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="https://flippyseven.com/category/jewellery-mxh5v"
                                fdprocessedid="zwh3s"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div class="row gutters-5">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Western Wear"
                                fdprocessedid="7m0u1n"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="https://flippyseven.com/category/women-western-avklz"
                                fdprocessedid="b37ux9"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div class="row gutters-5">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Beauty Care"
                                fdprocessedid="jmw3wt"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="https://flippyseven.com/category/beauty--personal-care-9qzqe"
                                fdprocessedid="ejd9ip"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div class="row gutters-5">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Home Decor"
                                fdprocessedid="mzk0cr"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="https://flippyseven.com/category/home-decor-lmvzv"
                                fdprocessedid="nkr9nf"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div class="row gutters-5">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Mens Ethnic"
                                fdprocessedid="dpdb65"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="https://flippyseven.com/category/menss-ethnic-wear-aojkf"
                                fdprocessedid="9p8hqc"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div class="row gutters-5">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Mens Wear"
                                fdprocessedid="nkjbub"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="https://flippyseven.com/category/mens-clothing-zfqnh"
                                fdprocessedid="nedrvj"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div class="row gutters-5">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Accessories"
                                fdprocessedid="vxur6a"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="https://flippyseven.com/category/accessories-0p2um"
                                fdprocessedid="47m7b"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div class="row gutters-5">
                          <div class="col-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Label"
                                name="header_menu_labels[]"
                                value="Help"
                                fdprocessedid="2t6bne"
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Link with http:// Or https://"
                                name="header_menu_links[]"
                                value="mail to:help@flippyseven.com"
                                fdprocessedid="7uk42"
                              />
                            </div>
                          </div>
                          <div class="col-auto d-flex align-items-center justify-content-center">
                            <button className="mx-1 shadow-none bg-light">
                              <i
                                class="ri-delete-bin-6-line"
                                style={{ color: "#4F4F4F", fontWeight: "500" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-right d-flex mt-3 justify-content-between ">
                      <button
                        type="button"
                        class="btn btn-soft-secondary rounded-pill bg-light bg-opacity-75 "
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
                        fdprocessedid="o6265"
                      >
                        Update
                      </button>
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
}

export default Header;
