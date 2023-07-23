import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import "./Brand.css";
import {
  clearErrors,
  getBrandDetails,
  updateBrand,
} from "../../../actions/brandActions";
import { UPDATE_BRAND_RESET } from "../../../constants/brandConstant";

const EditBrand = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { brand } = useSelector((state) => state.brandDetails);

  const { error, success } = useSelector((state) => state.updateBrand);

  const [brandy, setbrandy] = useState({
    name: "",
    meta_title: "",
    meta_description: "",
    slug: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setbrandy({ ...brandy, [name]: value });
  };

  useEffect(() => {
    dispatch(getBrandDetails(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (brand) {
      setbrandy({ ...brand });
    }
  }, [brand]);

  // update brand data
  const updateBrands = (e) => {
    e.preventDefault();
    dispatch(updateBrand(params.id, brandy));
  };

  return (
    <>
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 h6 text-center">Brands Information</h3>
            </div>

            <div className="innereditbrand">
              <div className="addnewBrand editnewBrand card">
                <div className="brandform">
                  <form onSubmit={updateBrands}>
                    <div class="form-group">
                      <label for="exampleInputname">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputname"
                        aria-describedby="emailHelp"
                        placeholder="Enter logo name"
                        value={brandy.name}
                        name="name"
                        onChange={handleInputs}
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
                      <input type="file" hidden id="upbrandlogo" />
                      <div className="previewimg">
                        <div className="previewimglog">
                          <img src="/lgoo.png" alt="" />
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
                        value={brandy.meta_title}
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
                        value={brandy.meta_description}
                        name="meta_description"
                        onChange={handleInputs}
                      ></textarea>
                    </div>

                    <div class="form-group">
                      <label for="exampleInputname">Slug</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputname"
                        aria-describedby="emailHelp"
                        placeholder="enter slug . . . ."
                        value={brandy.slug}
                        name="slug"
                        onChange={handleInputs}
                      />
                    </div>
                    <button
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
    </>
  );
};

export default EditBrand;
