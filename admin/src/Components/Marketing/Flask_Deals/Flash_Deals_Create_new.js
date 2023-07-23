import React from "react";
import { Link } from "react-router-dom";
import "./Flash.css";
import Select from "react-select";
import { DateRangePicker } from 'rsuite';

function Flash_Deals_Create_new() {
  const options = []
  return (
    <>
    
    <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 h6 text-center">Flash Deals Information</h3>
            </div>
            <form>
              <div className="innereditbrand">
                <div className="addnewBrand editnewBrand card">
                  <div className="brandform">
                    <div class="form-group">
                      <label for="ser">Title</label>
                      <input
                        type="text"
                        class="form-control"
                        id="myInput"
                        aria-describedby="emailHelp"
                        placeholder="enter parent category"
                        name="parent_name"
                      
                        required
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
                         Background Color <sub>(Hexa-code)</sub>{" "}
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
                       
                      />
                      
                    </div>

                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                      Text Color
                      </label>
                     
                      <Select
                        options={options}
                        isMulti={true}
                        name="attributedata"
                      
                        className="basic-multi-select form-control p-0"
                        classNamePrefix="select"
                        isClearable
                      />
                    </div>

                    
                    <div className="brandup">
                    <span id="spvv">
                        Banner<sub>(1900×500)</sub>{" "}
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
                       
                      />
                      
                    </div>
                   
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                      Date
                      </label>
                    <DateRangePicker
            className='outline-0 shadow-none w-100'
            placeholder="Filter by date"
            
           />
                      </div>

                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                     Products
                      </label>
                     
                      <Select
                        options={options}
                        isMulti={true}
                        name="attributedata"
                      
                        className="basic-multi-select form-control p-0 attributedata"
                        classNamePrefix="select"
                        isClearable
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
                   
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    
    </>
  );
}

export default Flash_Deals_Create_new;
