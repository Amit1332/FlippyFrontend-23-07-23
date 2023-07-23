import React from "react";
// import { Link } from "react-router-dom";
import SecondNavProduct from "../Include/SecondNavProduct";

function Bulk() {
  return (
    <>

<SecondNavProduct Name={{name:"Bulk Products Upload",directory: "Products > Bulk Upload"}} Btn={[{name:"Cancel", style:"", icon:'las la-times-circle'},{name:"Save",style:"bluebtn", icon:'las la-check-circle'}]}/>
<div className="container-fluid p-0 mt-4">
      <div className="container-fluid allbulks p-3 " style={{backgroundColor:"transparent"}}>
        <div className="bulk-main">
        <div className="container-fluid bulk-contents  ">
          <div className=".container-fluid bulk-coontents-2  ">
          <div className="bulk-contents-2-heading">Upload Stock</div>
          <div className="bulk-contents-2-heading">Upload History</div>
             
            </div>
              <div className="view-stock">View Stock</div>
        </div>
        <div className="upload-bulk-products  p-3">
          <div className="bulk-left d-flex  justify-content-center flex-column" style={{height:"36rem"}}>
            <h3 id="dark-blue" className="bulk-text  fw-semibold ">Upload bulk product on Flippy 7</h3>
            <p id="bulk-text-p">
              There are many ways that you can upload your stock to Kukadia.
              Please note that Stock that has not updated within the last 24
              hours will no longer appear in search results.
            </p>
            <div className="bulk-upload-file flex-column d-flex align-items-center justify-content-center p-2">
              <h3 id="dark-blue" className="bulk-text fw-bold">Direct Upload</h3>
              <p style={{textAlign:"center"}}>
                Click here for detailed instructions and acceptables values.
              </p>
              <div className="bulk-submit text-nowrap">
                   <div className="bulk-submit-2"><i class="las la-download"></i>Download Sample File</div>
                   <div className="bulk-submit-2 "style={{color:"#344054", backgroundColor:"#fff",border: "1px solid #D0D5DD"}}><i class="las la-play"></i> Watch How to Video</div>
              </div>
              <div className="bulk-files mt-5">
                <h3 id="dark-blue" className="bulk-text fw-bold">
                  Upload Excel or CSV File
                </h3>
                <div className="bulk-dragged-file mt-2">
                  <div className="dragged ">
                    <i class="las la-cloud-upload-alt"></i>
                    <h3>Drag and drop here Or <span >browser files</span></h3>
                  </div>
                </div>
                <div className="bulk-left-upload">Upload File</div>
              </div>
            </div>
          </div>
          <div className="bulk-right " >
           <div style={{height:"5rem"}}>
           <h3 id="dark-blue" className="bulk-text fw-semibold">
              How this work
            </h3>
            <p id="bulk-text-p">
              You have to just follow below four steps process.
            </p>
           </div>

            <div className="bulk-upload-file right-bulk-up  p-3 ">
              <div className="d-flex gap-2 mb-2" >
                <div className="bulk-right-one ">1.</div>
                  <p style={{marginBottom:"0px"}}>Download the skeleton file and fill it with data.</p>
              </div>
              <div className="d-flex gap-2 mb-2" >
                <div className="bulk-right-one">2.</div>
                  <p style={{marginBottom:"0px"}}>You can download the example file to undersatnd how the data must be filled.</p>
              </div>
              <div className="d-flex gap-2 mb-2" >
                <div className="bulk-right-one">3.</div>
                  <p style={{marginBottom:"0px"}}>Once you have downloaded and filled the skeleton file, upload it in the form below and submit.</p>
              </div>
              <div className="d-flex gap-2 mb-2" >
                <div className="bulk-right-one">4.</div>
                  <p style={{marginBottom:"0px"}}>After uploading products need to edit them and set products images and choices.</p>
              </div>
              
            </div>
            <div className="bulk-upload-file  p-3 mt-4">
            <div className="bulk-right-content pb-3 ">
            <div className="d-flex gap-2 mb-2" >
                <div className="bulk-right-one">1.</div>
                  <p style={{marginBottom:"0px"}}>Category and Brand should be in numerical id.:</p>
              </div>
              </div>
            <div className="bulk-right-content pb-5">
            <div className="d-flex gap-2 mb-2">
                <div className="bulk-right-one">2.</div>
                  <p style={{marginBottom:"0px"}}>You can download the pdf to get Category and Brand id.:</p>
              </div>
              </div>
                
              <div className="bulk-submit bulk-right-last "style={{}}>
                   <div className="bulk-submit-2 double-btn"><i class="las la-download"></i> Download Category</div>
                   <div className="bulk-submit-2 double-btn "style={{color:"#344054", backgroundColor:"#fff",border: "1px solid #D0D5DD"}}><i class="las la-download"></i> Download Brand</div>
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

export default Bulk;
