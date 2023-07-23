import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

export default function rightaddproduct() {
  const options = [
    { value: "dsafafa", label: "sadfasfsdfa" },
    { value: "afa", label: "sdfa" },
    { value: "dsaa", label: "sfsdfa" },
    { value: "dsaas", label: "sfsddfa" },
    { value: "dsfdaa", label: "sfssdfa" },
  ];
  return (
    <div className="rightaddproduct text-start col-4 px-0">
      <div className="mb-3 productcat container-fluid p-3 pt-2" style={{backgroundColor:"white"}}>
        <h6 className="">Product Categories</h6>
        <div className="catnavadd  d-flex justify-content-between align-item-center">
          <h5>Product Categories</h5>
        </div>

        <Select
          options={options}
          className="form-control p-0"
          styles={{backgroundColor:"#FCFCFD"}}
          classNamePrefix="select"
          isClearable
        />

        <div className="mt-1 mb-1 catnavadd d-flex justify-content-between align-item-center">
          <h5>Product SubCategories</h5>
        </div>
        <Select
          options={options}
          className="form-control p-0 "
        
          styles={{backgroundColor:"#FCFCFD"}}

          classNamePrefix="select"
          isClearable
        />
      </div>
      <div className="mb-3 productcat container-fluid p-3 pt-2" style={{backgroundColor:"white"}}>
        <h6 className="">Product Short Description</h6>
        <div className="catnavadd mb-1 d-flex justify-content-between align-item-center">
          <h5>Add short description for product</h5>
        </div>
        <textarea
          className="form-control"
          placeholder="Must enter minimum of a 100 charactors"
          id="floatingTextarea2"
        style={{backgroundColor:"#fcfcfd"}}
        ></textarea>
      </div>
      <div className="mb-3 productcat container-fluid p-3 pt-2" style={{backgroundColor:"white"}}>
        <h6 className="">Product Tags</h6>
        <div className=" catnavadd mb-1 d-flex justify-content-between align-item-center">
          <h5>Product Categories</h5>
        </div>
        <div className="cataddcon d-flex align-items-center justify-content-start border-none ">
          <Select
            options={options}
            isMulti={true}
            className="basic-multi-select form-control p-0 attributedata"
            classNamePrefix="select"
            isClearable
          />
          {/* <Cheap chipData={[{key:1,label:`Tagone`},{key:1,label:`Tagone`},{key:1,label:`Tagone`},{key:1,label:`Tagone`}]}/> */}
        </div>
        <div className="mt-1 mb-1 catnavadd d-flex justify-content-between align-item-center">
          <h5>Is it Refundable</h5>
          <div class="form-check form-switch ">
            <input
              class="form-check-input myinput "
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
      <div className="mb-3 productcat container-fluid bg-light p-3 pt-2">
        <h6 className="">Publish</h6>
        <div className="mt-1 mb-1 catnavadd d-flex justify-content-between align-item-center">
          <h5>Status</h5>
          <div class="form-check form-switch ">
            <input
              class="form-check-input myinput "
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <div className="mt-1 mb-1 catnavadd d-flex justify-content-between align-item-center">
          <h5>Visibility</h5>
          <div class="form-check form-switch ">
            <input
              class="form-check-input myinput "
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
