import React from 'react'
import "./SupportTicket.css"
export default function AddNewTicket() {
  return (
<div class="offcanvas offcanvas-end text-start"  style={{zIndex:9999, overflow:'auto'}} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header" >
    <p class="offcanvas-title mx-3" id="offcanvasRightLabel">Add New Ticket</p>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <hr />
  <div class="offcanvas-body">
                    <div className="text-start">
                        <label style={{fontSize :".8rem" , fontWeight:'600', color:"#344054"}} for="disabledSelect" className="form-label  ">Subject</label>
                        <select style={{fontSize:".8rem", backgroundColor:'#fcfcfd'}} class="border form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option selected>For Product</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="text-start">
                        <label style={{fontSize :".8rem" , fontWeight:'600', color:"#344054"}} for="disabledSelect" className="form-label">Priority</label>
                        <select style={{fontSize:".8rem",  backgroundColor:'#fcfcfd'}} class="border form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option selected>For Product</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div class=" mb-3 text-start">
                        <label style={{fontSize :".8rem", fontWeight:'600' , color:"#344054"}} for="floatingTextareaDisabled" className='mb-1'>Detail Description</label>
                        <textarea style={{ resize: "none", height: "10rem" , backgroundColor:'#fcfcfd', fontSize:".8rem" }} class="border form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled"></textarea>
                    </div>

                    <div class="mb-3 text-start ">
                        <label style={{fontSize :".8rem" , fontWeight:'600', color:"#344054"}} for="exampleInputPassword1" class="form-label">Attached File</label>
                        <input style={{fontSize:".8rem", backgroundColor:'#fcfcfd'}} type="file" class="border form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="container  " id='a'>
                        <button id='buttonbase' class="btn btn-outline btn-sm" type="button">Send Ticket</button>
                        <button  style={{textTransform :"capitalize"}} class="btn btn-outline btn-sm" type="button">Cancel</button>
                    </div>

                </div>
</div>
  )
}