import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import "./Brand.css";
import {
  allBrand,
  clearErrors,
  createBrand,
  deleteBrand,
} from "../../../actions/brandActions";
import {
  BRAND_RESET,
  CLEAR_ERRORS,
  DELETE_BRAND_RESET,
} from "../../../constants/brandConstant";
const Brand = () => {
  const Navigate = useNavigate();
  const params = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();

  // get all brand
  const { loading, error, brands } = useSelector((state) => state.brands);
  // create brand
  const { success } = useSelector((state) => state.createbrand);

  // delete brand
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deletebrand
  );

  // delte brand handler
  const deleteBrandHandler = (id) => {
    dispatch(deleteBrand(id));
  };

  const [brandData, setBrandData] = useState({
    name: "",
    meta_title: "",
    meta_description: "",
  });

  const [logo, setLogo] = useState("");
  const [logoPreview, setLogoPreview] = useState("");

  const handleInputs = (e) => {
    if (e.target.name === "logo") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setLogoPreview(reader.result);
          setLogo(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setBrandData({ ...brandData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(
        <>
          <div style={{ color: "white" }}>{error}</div>
        </>
      );
      dispatch(clearErrors());
    }

    // delete brand
    if (deleteError) {
      alert.error(
        <div style={{ color: "white", fontSize: "10px" }}>
          Unable To Delete Brand
        </div>
      );
      dispatch(clearErrors());
    }

    if (isDeleted) {
      Navigate("/brand");
      dispatch({ type: DELETE_BRAND_RESET });
      alert.success(
        <div style={{ color: "white", fontSize: "10px" }}>
          Brand Deleted Successfully
        </div>
      );
    }

    if (success) {
      alert.success(
        <div style={{ color: "white", fontSize: "10px" }}>
          Brand Created Successfully
        </div>
      );
      Navigate("/brand");
      dispatch({ type: BRAND_RESET });
    }

    // get all cateory

    dispatch(allBrand());
  }, [dispatch, error, alert, deleteError, Navigate, success, isDeleted]);

  // submit brand data
  const submitBrand = (e) => {
    e.preventDefault();
    dispatch(createBrand(brandData, logo));
  };

  return (
    <>
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <span>All Brands</span>
            </div>

            <div className="row p-0">
                <div className="col-7 px-2">
                <div className="brandlabel">
                  <div class="">
                    <span>Brands</span>
                  </div>
                  
                  <div className="col-md-3 p-2">

                  <div class="form-group">
                    <input
                      type="search"
                      class="aab form-control"
                      placeholder="type name & enter . . ."
                    />
                  </div>
                </div>
                </div>
                
                <div className="card p-0">
                    <div class="table-responsive producscroller_responsive">
                      <table class="table  css-serial text-nowrap startcontentleft">
                        <thead
                          style={{
                            backgroundColor: "#F9FAFB",
                            color: "#667085",
                          }}
                        >
                          <tr>
                            <th scope="col">S.No.</th>

                            <th scope="col">Name</th>
                            <th scope="col">Logo</th>
                            <th scope="col">Options</th>
                          </tr>
                        </thead>
                        <tbody>
                          {brands &&
                            brands.map((brandy) => (
                              <tr>
                                <td scope="row">
                                  <div className="customerss"></div>
                                </td>

                                <td>
                                  {" "}
                                  <div className="customerss">
                                    {brandy.name}{" "}
                                  </div>
                                </td>
                                <td>
                                  <div className="customerss">
                                    <div className="bbbnnerimg1">
                                      <div className="bannerimg">
                                        <img src="/lgoo.png" alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td>
                                  <div className="customerss d-flex align-items-center">
                                 
                                    <Link
                                      className="mx-1"
                                      to={`/brand/edit/${brandy._id}`}
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
                                      onClick={() =>
                                        deleteBrandHandler(brandy._id)
                                      }
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
                            ))}
                        </tbody>
                      </table>
                    </div>
                </div>
              </div>
              <div className="col-5  px-2">
                <div className="brandlabel">
                  <div class="">
                    <span>Add New Brand</span>
                  </div>
                </div>

             
              <div className="card">
              <div className="addnewBrand">
                  <div className="brandform">
                    <form>
                      <div class="form-group">
                        <label for="exampleInputname">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputname"
                          aria-describedby="emailHelp"
                          placeholder="Enter logo name"
                          name="name"
                          onChange={handleInputs}
                          value={brandData.name}
                          required
                        />
                      </div>

                      <div className="brandup">
                        <span id="spvv">
                          Logo <sub>(120×80)</sub>{" "}
                        </span>
                        <label htmlFor="upbrandlogo">
                          <div className="upbrandlogo">
                            <div className="browse">Browse</div>
                            <div className="browse">Choose File</div>
                          </div>
                        </label>
                        <input
                          type="file"
                          hidden
                          id="upbrandlogo"
                          name="logo"
                          onChange={handleInputs}
                          accept="image/*"
                        />
                        <div className="previewimg">
                          <div className="previewimglog">
                            <img src={logoPreview} alt="" />
                            <i class="las la-times"></i>
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="exampleInputmeta">Meta Title</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputmeta"
                          aria-describedby="emailHelp"
                          placeholder="Enter meta title"
                          name="meta_title"
                          onChange={handleInputs}
                          value={brandData.meta_title}
                        />
                      </div>

                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                          Meta Description
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="meta_description"
                          onChange={handleInputs}
                          value={brandData.meta_description}
                        ></textarea>
                      </div>
                      <button
                        onClick={submitBrand}
                        className="btn btn-sm rounded-pill"
                        style={{
                          color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",
                        }}
                      >
                        Save
                      </button>
                    </form>
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

export default Brand;
