import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { allCategory, deleteCategory } from "../../../actions/categoryActions";

import { clearErrors } from "../../../actions/productAction";
import { DELETE_CATEGORY_RESET } from "../../../constants/categoryConstant";
import "./Category.css";

const Category = () => {
  const navigate = useNavigate();
  const params = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();

  // get all category
  const { loading, error, allcategory } = useSelector(
    (state) => state.allcategory
  );

  // delete category
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deletecategory
  );

  const deleteCategoryHandler = (catId, subId) => {
    dispatch(deleteCategory(catId, subId));
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

    // delete category
    if (deleteError) {
      alert.error(
        <div style={{ color: "white", fontSize: "10px" }}>
          Unable To Delete Category
        </div>
      );
      dispatch(clearErrors());
    }

    if (isDeleted) {
      navigate("/category");
      dispatch({ type: DELETE_CATEGORY_RESET });
      alert.success(
        <div style={{ color: "white", fontSize: "10px" }}>
          Category Deleted Successfully
        </div>
      );
    }

    // get all cateory

    dispatch(allCategory());
  }, [dispatch, error, alert, deleteError, navigate, isDeleted]);

  return (
    <>
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 h6 text-center">All Categories</h3>
              <Link
                to="/category/add/new"
                className="btn btn-sm rounded-pill"
                style={{
                  color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",
                }}
              >
                Add New category
              </Link>
            </div>
            <div className="productsfilter">
            <h5 class="mb-0 h6">Filter Categories</h5>
              <div className="searfilterproduct">
              <div className="col-md-3 p-2">
                  <span>Search Category</span>

                  <div class="form-group">
                    <input
                      type="search"
                      class="aab form-control"
                      placeholder="search supplier..."
                    />
                  </div>
                </div>
               
               
              </div>
            </div>
          </div>

          <div className="row px-2">
            <div className="card p-0">
              <div class="table-responsive producscroller_responsive">
                <table class="table  css-serial text-nowrap startcontentleft">
                  <thead
                    style={{ backgroundColor: "#F9FAFB", color: "#667085" }}
                  >
                    <tr>
                      <th scope="col">S.No.</th>

                      <th scope="col">Parent Category</th>
                      <th scope="col">Sub Category</th>

                      <th scope="col">Icon</th>
                      <th scope="col">Featured</th>
                      <th scope="col">Commission</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allcategory &&
                      allcategory.map((caty) => (
                        <>
                          {caty.sub_category.map((subc, index) => (
                            <tr>
                              <td className="" scope="row">
                                <div className="customerss"></div>
                              </td>

                              <td>
                                <div className="customerss">
                                  {caty.parent_name}{" "}
                                </div>
                              </td>

                              <td>
                                <div className="customerss">
                                  {subc.sub_name}{" "}
                                </div>
                              </td>
                              <td>
                                <div className="customerss">
                                  <img src={`${subc.icon.url}`} alt="" />
                                </div>
                              </td>
                              <td className="">
                                <div className="customerss">
                                  <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                  </label>
                                </div>
                              </td>
                              <td>
                              <div className="customerss">{subc.commission} %
                              </div>
                              </td>

                              <td>
                                <div className="customerss d-flex align-items-center">
                                  <Link
                                    className="mx-1"
                                    to={`/category/single/${caty._id}`}
                                  >
                                    <i
                                      class="ri-eye-line"
                                      style={{
                                        color: "#4F4F4F",
                                        fontWeight: "500",
                                      }}
                                    ></i>
                                  </Link>
                                  <Link
                                    className="mx-1"
                                    to={`/category/edit/single/${caty._id}/${subc._id}`}
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
                                      deleteCategoryHandler(caty._id, subc._id)
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
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        


        </div>
      </div>
    </>
  );
};

export default Category;
