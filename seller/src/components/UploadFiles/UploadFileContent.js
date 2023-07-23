import React, { useState } from 'react'
import Button from '@mui/material/Button';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
const UploadFileContent = () => {


    return (
        <>
            <div className='col-6 mt-2 mx-0 px-0' >
                <div className="row gap-3 " id='UploadFile_Content ' >
                    <div className="col-2 rounded-1 " id='chair'>
                        <img style={{borderRadius:"8px 0px 0px 8px"}} src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                    </div>
                    <div className="col-9">
                        <div className="d-flex" id='btn_and_content' >

                            <div className="row" id='chair_Right_Content'>
                                <h6 className='mb-3'>Arial Wooden Chair</h6>
                                <p>arial-eooden-vhair.jpg</p>
                                <p>Uploaded : 10 jan, 2022 10:30AM</p>
                                <p>2.0 MB</p>
                            </div>
                            <div className='row' id='button' >
                                <button type="button" id='btn' style={{ backgroundColor: " #164C96", color: "white" }} className="btn btn-outline-primary btn-sm text-nowrap ">Copy Link</button>
                                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" type="button" id='btn' className="btn btn-outline-secondary  btn-sm text-nowrap ">Edit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <UploadFile />
        </>
    )
}

export default UploadFileContent




const UploadFile = () => {
    return (

        <div style={{ zIndex: "999999" }} class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel" style={{fontSize :".9rem" , fontWeight :"600"}}>File Info</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{fontSize :".7rem" , color:"black"}}></button>
            </div>
            <hr   />
            <div class="offcanvas-body pt-0" >

                <div className="card pb-3 " >
                    <div className="container  d-flex gap-5  mb-3 " >
                        <div className="col-2 rounded-1  " id='chair'>
                            <img style={{borderRadius:"8px 0px 0px 8px"}}  src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                        </div>

                        <div className="row" id='chair_Right_Content'>
                            <h6 className='mb-3'>Arial Wooden Chair</h6>
                            <p>arial-eooden-vhair.jpg</p>
                            <p>Uploaded : 10 jan, 2022 10:30AM</p>
                            <p>2.0 MB</p>
                        </div>
                    </div>
                    <div class="container text-center">
                        <div class="row text-nowrap gap-0">
                            <div class="col">
                                <button size='small' className='border text-capitalize px-2' variant="contained" style={{ backgroundColor:"transparent",display: "flex", fontSize: ".8rem", gap: ".2rem", outline: "", padding: ".1rem 5px",color:'#344054', borderRadius: "1rem", textAlign: "center", border: "1px solid #D0D5DD", }}  > <i class="ri-edit-box-line"></i>Edit Image</button>
                            </div>
                            <div class="col " >
                                <button size='small' className='border text-capitalize px-2' variant="contained" style={{  backgroundColor:"transparent",display: "flex", gap: ".4rem", fontSize: ".8rem", outline: "", padding: ".1rem .5rem", textAlign: "center",color:'#344054', borderRadius: "1rem", border: "1px solid #D0D5DD", }}  ><i class="ri-download-2-line"></i>download</button>
                            </div>
                            <div class="col">
                                <button size='small' className='border text-capitalize px-2 text-danger border-danger' variant="contained" style={{  backgroundColor:"transparent",display: "flex", fontSize: ".8rem", gap: ".5rem", outline: "", padding: ".1rem .5rem", textAlign: "center", borderRadius: "1rem", border: "1px solid #D0D5DD", }}><i class="ri-delete-bin-6-line"></i>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-start mt-4  ">
                    <h6 style={{color :" #344054" , fontSize :".9rem" , fontWeight :"600"}}>Edit Image</h6>
                    <hr />
                </div>
                <div className="container text-start">
                    <form>
                        <div class="mb-3">
                            <label style={{fontSize :".8rem",fontWeight: "500" ,color:" #344054"  , fontWeight :"600"}} for="exampleInputEmail1" class="form-label">File Name</label>
                            <input style={{fontSize :".8rem",backgroundColor:'#fcfcfd', borderRadius:"8px"}} type="text" placeholder='Arial wooden chair' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label style={{fontSize :".8rem",fontWeight: "500" ,color:" #344054"  , fontWeight :"600"}} for="exampleInputPassword1" class="form-label">File Type</label>
                            <input style={{fontSize :".8rem",backgroundColor:'#fcfcfd', borderRadius:"8px"}} type="text" placeholder='JPEG' class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label style={{fontSize :".8rem",fontWeight: "500" ,color:" #344054"  , fontWeight :"600"}} for="exampleInputPassword1" class="form-label">File Size</label>
                            <input style={{fontSize :".8rem",backgroundColor:'#fcfcfd', borderRadius:"8px"}} type="text" placeholder='1.02 MB' class="form-control" id="exampleInputPassword1" />
                        </div>



                        <div className="btn rounded-pill bntsave_collepse_coupon" style={{backgroundColor:'#164C96', marginRight:"5px",color:"white"}} >Submit</div>
    <div className="btn rounded-pill border bntcansel_collepse_coupon">Cancel</div>
                    </form>
                </div>
            </div>

        </div>
    )
}


