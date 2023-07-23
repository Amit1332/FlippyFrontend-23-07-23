import React from 'react'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Button from '@mui/material/Button';
import "./SupportTicket.css";
import SecondNavProduct from '../Include/SecondNavProduct';
const TicketDescryption = () => {
    return (
        <div className="container-fluid p-0">
<SecondNavProduct Name={{name:"#F735625363", directory:"Home > Support Ticket > #F735625363"}} Btn={[{name:"Mark as Resolved",   style: "bluebtn text-light fw-normal",  icon:'las la-check-circle'}]}  backbtn = {[{backname:"back", iconback:"ri-arrow-left-line" ,link:"/payout"}]}/>

        <div className='container-fluid '>
            <div class="row mt-3">
                <div class="col-8">
                    <div className="card p-2 px-3">
                        <div className="row text-start">
                            <div className="col-4">
                                <h6 id='ticket_heading' style={{fontWeight:"600"}}>Ticket Description</h6>
                            </div>
                        </div>
                        <div className="row text-start">
                            <div className="col-4">
                                <h6 id='ticket_heading' style={{fontWeight:"600"}}>Ticket Subject</h6>
                            </div>
                            <div className="col-12" id='ticketsubject' >
                                <p  style={{fontSize:"14px"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Modi quod laborum minus eius, est amet pariatur blanditiis maiores
                                    doloribus fugit nostrum unde ea impedit similique debitis nemo tenetur
                                    commodi laudantium.</p>
                            </div>
                            <div className="row">
                                    <h6 id='ticket_heading' style={{fontWeight:"600"}}>Attached Documents</h6>
                            </div>
                            <div style={{paddingRight:"5px"}}>
                            <div className="row d-flex m-1 p-2" style={{ backgroundColor: "#F1F8FD" }}>
                                <div className="col d-flex gap-2 text-center" style={{ display: "flex", color: "#103A81", alignItems: "center" }}>
                                    <i class="ri-file-pdf-line"></i>
                                    <p style={{ marginBottom: '0px' }}>file name.pdf</p>
                                </div>
                                <div className="col text-end ">
                                    <Button size='small' style={{ backgroundColor: "#F1F8FD", color: "#103A81", boxShadow: "none" ,textTransform :"capitalize"}} variant="contained" startIcon={<SaveAltIcon  />}>
                                        Download
                                    </Button>
                                </div>
                            </div>
                            <div className="row d-flex m-1 p-2" style={{ backgroundColor: "#F1F8FD" }}>
                                <div className="col d-flex gap-2 text-center" style={{ display: "flex", color: "#103A81", alignItems: "center" }}>
                                    <i class="ri-file-pdf-line"></i>
                                    <p style={{ marginBottom: '0px' }}>file name.pdf</p>
                                </div>
                                <div className="col text-end ">
                                    <Button size='small' style={{ backgroundColor: "#F1F8FD", color: "#103A81", boxShadow: "none" ,textTransform :"capitalize"}} variant="contained" startIcon={<SaveAltIcon />}>
                                        Download
                                    </Button>
                                </div>
                            </div>
                            <div className="row d-flex m-1 p-2" style={{ backgroundColor: "#F1F8FD" }}>
                                <div className="col d-flex gap-2 text-center" style={{ display: "flex", color: "#103A81", alignItems: "center" }}>
                                    <i class="ri-file-pdf-line"></i>
                                    <p style={{ marginBottom: '0px' }}>file name.pdf</p>
                                </div>
                                <div className="col text-end ">
                                    <Button size='small' style={{ backgroundColor: "#F1F8FD", color: "#103A81", boxShadow: "none" ,textTransform :"capitalize"}} variant="contained" startIcon={<SaveAltIcon />}>
                                        Download
                                    </Button>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <h6 id='ticket_heading' style={{fontWeight:"600"}}>Replay</h6>
                                </div>
                            </div>
                            <div className="row gap-3">
                                <div className="col-1 " >
                                    <img style={{ height: "3rem", width: "3rem", borderRadius: "50%" }} src="https://images.unsplash.com/photo-1673744375171-ba44dcdb6f3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                </div>
                                <div className="col-10">
                                    <h6 style={{ fontWeight: "600", fontSize: "16px", lineHeight: "24px" }} >Flippy Seven</h6>
                                    <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px", color: "#667085" }} >Admin</p>
                                    <h6 style={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px", color: " #000000" }}>Dear supplier,</h6>
                                    <h6 style={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px", color: " #000000" }}>
                                        We are checking the it. once we find the fault, we will initiate your refund.
                                    </h6>
                                <button className='mt-3 border' style={{border : "1px solid gray" ,fontWeight:"600", fontSize:"14px", borderRadius :"1rem" , padding:"2px 1rem" , color:"#344054", backgroundColor:"transparent"}}> <p className='d-flex align-items-center gap-2 mb-0'> <span className='p-0 m-0 pt-1'><input className='mb-0' type="radio" /></span><span>Replay</span></p> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div className="card p-2 px-3">
                        <div className="d-flex gap-2" style={{ display: "flex", justifyContent: "flexStart", alignItems: "center" , marginBottom :"1rem"}} >
                            <div >
                                <img style={{ width: "4rem", height: "4rem", borderRadius: "50%" }} src="https://images.unsplash.com/photo-1673744375171-ba44dcdb6f3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="logo" />
                            </div>
                            <div  style={{ fontWeight: "600", width:"100%" , fontSize: "20px", lineHeight: "30px", color: " #344054" }}>
                            AJX Cloths
                            </div>
                        </div>
                        <div className="d-flex ">
                            <div className="col text-start" >
                                <h6 style={{ fontWeight: "600", fontSize: "12px", lineHeight: "24px", color: "  #000000" }}>
                                    Genrated on :
                                </h6>
                            </div>
                            <div className="col text-end" >
                                <h6 style={{ fontWeight: "600", fontSize: "12px", lineHeight: "24px", color: "  #000000" }}>
                                    2023-01-07 23:15:59
                                </h6>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="col text-start" >
                                <h6 style={{ fontWeight: "600", fontSize: "12px", lineHeight: "24px", color: "  #000000" }}>
                                    Priority :
                                </h6>
                            </div>

                            <div className="col text-end" >
                                <h6 style={{ fontWeight: "600", fontSize: "12px", lineHeight: "20px", color: "  #667085" }}>
                                    Urgent
                                </h6>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="col text-start" >
                                <h6 style={{ fontWeight: "600", fontSize: "12px", lineHeight: "24px", color: "  #000000" }}> Status:</h6>
                            </div>
                            <div className="col text-end" >
                                <h6 style={{ fontWeight: "400", fontSize: "10px", lineHeight: "20px", color: "#DC6803" }}>On Review</h6>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="col text-start" >
                                <h6 style={{ fontWeight: "700", fontSize: "12px", lineHeight: "24px", color: "black" }}>Last Activity</h6>
                            </div>
                            <div className="col text-end" >
                                <h6 style={{ fontWeight: "700", fontSize: "12px", lineHeight: "20px", color: "#000000" }}> 14 min ago</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TicketDescryption