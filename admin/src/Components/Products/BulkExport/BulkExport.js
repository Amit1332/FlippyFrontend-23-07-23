import React from "react";
import { Link } from "react-router-dom";

const BulkImport = () => {
  return (
    <>
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop mt-2 mb-3">
            <h3 class="mb-0 h6 text-center">Product Bulk Upload</h3>
            </div>
          </div>

          <div className="excelcsv">
            <ol type="1">
              <span>Step 1:</span>
              <li>Download the skeleton file and fill it with proper data.</li>
              <li>
                You can download the example file to understand how the data
                must be filled.
              </li>
              <li>
                Once you have downloaded and filled the skeleton file, upload it
                in the form below and submit.
              </li>
              <li>
                After uploading products you need to edit them and set product's
                images and choices.
              </li>
            </ol>
          </div>

          <div className="downloadexcelpr">
            <a
              href=""
              className="btn btn-sm rounded-pill"
              style={{
                color: "#103A81",
                fontWeight: "bold",
                backgroundColor: "#E7F4FC",
              }}
            >
              Download Excel or CSV
            </a>
          </div>

          <div className="excelcsv">
            <ol type="1">
              <span>Step 2:</span>
              <li>Category and Brand should be in numerical id.</li>
              <li>You can download the pdf to get Category and Brand id.</li>
            </ol>
          </div>

          <div className="downloadexcelpr d-flex">
          <a
              href=""
              className="btn btn-sm rounded-pill"
              style={{
                color: "#103A81",
                fontWeight: "bold",
                backgroundColor: "#E7F4FC",
              }}
            >
             Download Category
            </a>
            <a
              href=""
              className="btn btn-sm rounded-pill"
              style={{
                color: "#103A81",
                fontWeight: "bold",
                backgroundColor: "#E7F4FC",
              }}
            >
             Download Brand
            </a>
           
          </div>

          <div className="uplaoadcsvexcel mt-2">
            <div className="uppp">
              <span>Upload Product File</span>
              <div class="custom-file">
                <input type="file" id="fff" hidden />
                <label for="fff" className="uploadexfile">
                  <div id="fbcc"> Choose File . . .</div>
                  <span>Browse</span>
                </label>
              </div>
            </div>

            <div className="downloadexcelpr d-flex">
            <a
              href=""
              className="btn btn-sm rounded-pill"
              style={{
                color: "#103A81",
                fontWeight: "bold",
                backgroundColor: "#E7F4FC",
              }}
            >
             Upload Excel or CSV
            </a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulkImport;
