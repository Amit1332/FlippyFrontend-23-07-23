import React, { useEffect, useState } from "react";

import "./Category.css";
import "../Brand/Brand.css";

import {
  allCategory,
  clearErrors,
  createCategory,
} from "../../../actions/categoryActions";

import { Link, useNavigate } from "react-router-dom";
import { CATEGORY_RESET } from "../../../constants/categoryConstant";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { allAttribute } from "../../../actions/attributeActions";

const AddNewCategory = () => {
  const options = [];

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  // get all attribute
  const { allattribute } = useSelector((state) => state.attributes);

  allattribute &&
    allattribute.forEach((element) => {
      let a = { value: `${element._id}`, label: `${element.name}` };
      options.push(a);
    });

  const { error, success } = useSelector((state) => state.category);
  const { allcategory } = useSelector((state) => state.allcategory);

  const [categoryData, setCategoryData] = useState({
    parent_name: "",
    sub_name: "",
    featured: false,
    commission: "",
    meta_title: "",
    meta_description: "",
    attributedata: "",
  });
  const [icon, setIcon] = useState("");
  const [iconPreview, setIconPreview] = useState("");

  const handleInputs = (e) => {
    if (e.target.name === "icon") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setIconPreview(reader.result);
          setIcon(reader.result);
        }

      };

      reader.readAsDataURL(e.target.files[0]);

    }else{
        setCategoryData({ ...categoryData, [e.target.name]: e.target.value });

      }

  };











  useEffect(() => {
    if (error) {
      alert.error(
        <div style={{ color: "white", fontSize: "10px" }}>{error}</div>
      );
      dispatch(clearErrors());
    }

    if (success) {
      alert.success(
        <div style={{ color: "white", fontSize: "10px" }}>
          Category Created Successfully
        </div>
      );
      Navigate("/category");
      dispatch({ type: CATEGORY_RESET });
    }

    dispatch(allCategory());
    dispatch(allAttribute());
  }, [dispatch, error, alert, Navigate, success]);

  // submit category function
  const submitCategory = (e) => {
    e.preventDefault();
    // setCategoryData({ ...categoryData, attributedata: selectedValue });

      dispatch(createCategory(categoryData, selectedValue ,icon));
  };

  function myFunction() {
    // Declare variables
    let llk = document.querySelector(".llk");
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    llk.style.display = "block";

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  window.addEventListener("click", function () {
    let llk = document.querySelector(".llk");
    llk.style.display = "none";
    
  });

  function getvalueofparent(e) {
    const input = document.getElementById("myInput");
    const option = e.target.textContent;
    input.value = option;
    setCategoryData({ ...categoryData, 'parent_name': e.target.textContent });
  }
  const [selectedValue, setSelectedValue] = useState([]);

  // handle onChange event of the dropdown
  const handleChangeselete = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
    setCategoryData({ ...categoryData, attributedata: selectedValue });
  };
  
  return (
    <>
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 h6 text-center">Add New Categories</h3>
            </div>
            <form>
              <div className="innereditbrand">
                <div className="addnewBrand editnewBrand card">
                  <div className="brandform">
                    <div class="form-group">
                      <label for="ser">Parent Category</label>
                      <input
                        type="text"
                        class="form-control"
                        id="myInput"
                        aria-describedby="emailHelp"
                        placeholder="enter parent category"
                        name="parent_name"
                        onKeyUp={myFunction}
                        onChange={handleInputs}
                        value={categoryData.parent_name}
                        required
                      />
                    </div>

                    <div className="llk">
                      <ul id="myUL">
                        {allcategory &&
                          allcategory.map((caty) => (
                            <>
                              <li>
                                <a
                                  class="form-control"
                                  onClick={getvalueofparent}
                                >
                                  {caty.parent_name}
                                </a>
                              </li>
                            </>
                          ))}
                      </ul>
                    </div>

                    <div class="form-group">
                      <label for="exampleInputname">Sub Category</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputname"
                        aria-describedby="emailHelp"
                        placeholder="enter sub category"
                        name="sub_name"
                        onChange={handleInputs}
                        value={categoryData.sub_name}
                      />
                    </div>

                    <div className="brandup">
                    <span id="spvv">
                          icon <sub>(32×32)</sub>{" "}
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
                        name="icon"
                        onChange={handleInputs}
                        accept="image/*"
                      />
                      <div className="previewimg">
                        <div className="previewimglog">
                          <img src={iconPreview} alt="" />
                          <i class="las la-times"></i>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="exampleInputname">commission in % </label>
                      <input
                        type="number"
                        class="form-control"
                        id="exampleInputname"
                        aria-describedby="emailHelp"
                        placeholder="enter commission rate"
                        name="commission"
                        onChange={handleInputs}
                        value={categoryData.commission}
                      />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputmeta">Meta Title</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputmeta"
                        aria-describedby="emailHelp"
                        placeholder="enter meta title"
                        name="meta_title"
                        onChange={handleInputs}
                        value={categoryData.meta_title}
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
                        value={categoryData.meta_description}
                      ></textarea>
                    </div>

                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Add Attributes
                      </label>
                     
                      <Select
                        options={options}
                        isMulti={true}
                        name="attributedata"
                        onChange={handleChangeselete}
                        value={options.filter((obj) =>
                          selectedValue.includes(obj.value)
                        )}
                        className="basic-multi-select form-control p-0 attributedata"
                        classNamePrefix="select"
                        isClearable
                      />
                    </div>
                    <button
                    onClick={submitCategory}
           
              className="btn btn-sm rounded-pill"
              style={{
                color: "#103A81",
                fontWeight: "bold",
                backgroundColor: "#E7F4FC",
              }}
            >
            Save
            </button>
                   
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewCategory;
