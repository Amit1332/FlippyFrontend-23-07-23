import React, { useEffect } from 'react'
import "../Refund.css"
function Refund_configration() {
  useEffect(()=>{
    let fileInput = document.getElementById("file-upload-input");
let fileSelect = document.getElementsByClassName("file-upload-select")[0];
fileSelect.onclick = function() {
  fileInput.click();
}
fileInput.onchange = function() {
  let filename = fileInput.files[0].name;
  let selectName = document.getElementsByClassName("file-select-name")[0];
  selectName.innerText = filename;
}
  })
  return (
    <div className ='refund_configration p-4 allproducts container-fluid'>
      <div className="row gap-3 ">
        <div className="col px-4 p-3 card">
            <h6 style={{fontSize:"1rem", fontWeight:500}}>Set Refund Time</h6>
            <hr />
            <div className="d-flex gap-4 align-items-center">
                <h6 className='col-lg-3 col-from-label' style={{fontWeight:600, fontSize:".9rem"}}>Set Time for sending Refund Request</h6>
               
                <div className="col p-2">
              <div class="form-group">
                <input
                  type="text"
                  class="aab form-control"
                  placeholder="Set days"
                />
              </div>
            </div>
                <div className="btn btn-sm rounded-pill" style={{width:"fit-content", height:"fit-content"}}>days</div>
            </div>
            <div className="d-flex justify-content-end">
            <a
             
              className="btn btn-sm rounded-pill"
              style={{
                color: "#103A81",
                fontWeight: "bold",
                backgroundColor: "#E7F4FC",
              }}
            >
            Save
            </a>
            </div>
            </div>
        <div className="col p-2 px-4 card">
            <h6 style={{fontSize:"1rem", fontWeight:500}} className="mt-2">Set Refund Sticker</h6>
<hr />

            <div className="col" >

            <div className="d-flex gap-4 align-items-center">
              <h6 style={{marginBottom:"0px", marginRight:'2rem',fontWeight:600, fontSize:".9rem"}}>Sticker</h6>
              <div class="file-upload w-100">
  <div class="file-upload-select border ">
    <div class="file-select-button border" >Browse</div>
    <div class="file-select-name">Choose File</div> 
    <input type="file" name="file-upload-input" id="file-upload-input" />
  </div>
</div>
              </div>
          </div>
          <div className="d-flex justify-content-end">

        <div className="btn btn-sm rounded-pill mt-4" style={{ color: "#103A81",
                fontWeight: "bold",
                backgroundColor: "#E7F4FC"}} >Save</div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Refund_configration 
