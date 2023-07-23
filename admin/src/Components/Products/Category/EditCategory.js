import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UPDATE_CATEGORY_RESET } from "../../../constants/categoryConstant";
import Select from "react-select";
import { getCategoryDetails } from "../../../actions/categoryActions";


const EditCategory = () => {
  // const params = useParams();
  // const Navigate = useNavigate();
  // const dispatch = useDispatch();
  // const alert = useAlert();

  // const {category} = useSelector((state)=> state.categorydetails)

  // console.log(category)

  // useEffect(() => {
  //   dispatch(getCategoryDetails(params.id));


  // }, [dispatch, params.id]);



  // useEffect(() => {

  //  if(brand){
  //   setbrandy({...brand})
  //  }
  // }, [brand]);


 
  return (
    <>
     
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 h6 text-center">Edit Categories</h3>
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
                       
                      />
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
                        required
                      />
                      <div className="previewimg">
                        <div className="previewimglog">
                          <img src="" alt="" />
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
                       
                      ></textarea>
                    </div>

                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Add Attributes
                      </label>
                     
                      <Select
                        isMulti={true}
                        name="attributedata"
                       
                        className="basic-multi-select form-control p-0 attributedata"
                        classNamePrefix="select"
                        isClearable
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn-sm"
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
  )
}

export default EditCategory
