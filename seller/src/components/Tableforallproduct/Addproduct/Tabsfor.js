import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dragdropsmall from "./Drardropsmall.svg"
import Dragdropbig from "./Dragdropbig.svg"
import Cheap from "./Cheap.js"
export default function Tabsfor() {
    const [tebs, settabs] = useState('1');
    return (
        <div className='tablistaddpro'>
            <ul className="nav nav-tabs nav-fill mb-3" id="ex2" role="tablist">
                <li className="p-1 px-0" role="presentation">
                    <Link
                        className={tebs === '1' ? `nav-link  px-0 py-3 active` : `nav-link  p-2 py-3`}
                        id="ex3-tab-1"
                        data-mdb-toggle="tab"
                        href="#ex3-tabs-1"
                        role="tab"
                        onClick={() => { settabs('1') }}
                        aria-controls="ex3-tabs-1"
                        aria-selected="true"
                    >General Info</Link>
                </li>
                <li className="p-1" role="presentation">
                    <Link
                        className={tebs === '2' ? `nav-link  p-2 py-3 active` : `nav-link  p-2 py-3`}
                        id="ex3-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        onClick={() => { settabs('2') }}
                        aria-controls="ex3-tabs-2"
                        aria-selected="true"
                    >Inventory</Link>
                </li>
                <li className="p-1" role="presentation">
                    <Link
                        className={tebs === '3' ? `nav-link  p-2 py-3 active` : `nav-link  p-2 py-3`}
                        id="ex3-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        onClick={() => { settabs('3') }}
                        aria-controls="ex3-tabs-2"
                    //   aria-selected="false"
                    >Shipping</Link>
                </li>
                <li className="p-1" role="presentation">
                    <Link
                        className={tebs === '4' ? `nav-link  p-2 py-3 active` : `nav-link  p-2 py-3`}
                        id="ex3-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        onClick={() => { settabs('4') }}
                        aria-controls="ex3-tabs-2"
                    //   aria-selected="false"
                    >Product Variations</Link>
                </li>
                <li className="p-1" role="presentation">
                    <Link
                        className={tebs === '5' ? `nav-link  p-2 py-3 active` : `nav-link  p-2 py-3`}
                        id="ex3-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        onClick={() => { settabs('5') }}
                        aria-controls="ex3-tabs-2"
                    //   aria-selected="false"
                    >Meta Data</Link>
                </li>
            </ul>

            <div className="tab-content mb-3 p-3"  id="ex2-content" >
                {tebs === '1' ? (
                    <div
                        className="tab-pane tab-pane1 fade show active "
                        id="ex3-tabs-1"
                        role="tabpanel"
                        aria-labelledby="ex3-tab-1"
                    >
                        <div className="lefttablecontent1">
                            <h4 className="tableheadinginputcontent1">Manufacturer Name</h4>
                            <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="Enter Manufacturer Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="d-flex gap-2 mt-2 col">
                                <div className="tableheadinginputcontent1flex">
                                    <h4 className="tableheadinginputcontent1">Stocks</h4>
                                    <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="06" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                </div>
                                <div className="tableheadinginputcontent1flex">
                                    <h4 className="tableheadinginputcontent1">Price <i className="las la-info-circle"></i></h4>
                                    <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="380.00" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                </div>
                            </div>
                        </div>
                        <div className="righttablecontent1">
                            <h4 className="tableheadinginputcontent1">Manufacturer Brand</h4>
                            <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="Enter Manufacturer Brand" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="d-flex gap-2  mt-2">
                                <div className="tableheadinginputcontent1flex">
                                    <h4 className="tableheadinginputcontent1">Orders</h4>
                                    <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="30" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                </div>
                                <div className="tableheadinginputcontent1flex">
                                    <h4 className="tableheadinginputcontent1">Discount <i className="las la-info-circle"></i></h4>
                                    <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="Enter Discount" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ""}
                {tebs === '2' ? (
                    <div
                        className="tab-pane tab-pane2 fade show active pb-3"
                        id="ex3-tabs-1"
                        role="tabpanel"
                        aria-labelledby="ex3-tab-1"
                    >
                        <div className="mt-2 secondtabaddpro row p-0">
                            <div className="tableheadinginputcontent1flex col">
                                <h4 className="tableheadinginputcontent1">Unit</h4>
                                <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="Enter meta title" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                            <div className="tableheadinginputcontent1flex col">
                                <h4 className="tableheadinginputcontent1">Pisces</h4>
                                <input type="text" className="form-control"  style={{backgroundColor:"#FCFCFD"}} placeholder="Enter meta keywords" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                        </div>
                        <div className="row mt-2 padding-right-20px">
                            <div className="tableheadinginputcontent1flex col">
                                <h4 className="tableheadinginputcontent1">Low stock warning</h4>
                                <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="06" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                            <div className="tableheadinginputcontent1flex col">
                                <h4 className="tableheadinginputcontent1">Min purchase Qty</h4>
                                <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="06" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                            <div className="tableheadinginputcontent1flex col">
                                <h4 className="tableheadinginputcontent1">Max purchase Qty</h4>
                                <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}}  placeholder="30" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                        </div>
                    </div>
                ) : console.log(tebs)}
                {tebs === '3' ? (
                    <div
                        className="tab-pane tab-pane2 fade show active pb-3"
                        id="ex3-tabs-1"
                        role="tabpanel"
                        aria-labelledby="ex3-tab-1"
                    >
                        <div className="mt-2 secondtabaddpro row p-0">
                            <div className="tableheadinginputcontent1flex col">
                                <h4 className="tableheadinginputcontent1">Weight</h4>
                                <input type="text" className="form-control" placeholder="Enter weight" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                            <div className="tableheadinginputcontent1flex col">
                                <h4 className="tableheadinginputcontent1">Packaging Size</h4>
                                <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="Enter packaging size" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                        </div>

                        <div className="row mt-2 padding-right-20px">
                            <div className="tableheadinginputcontent1flex col">
                                <h4 className="tableheadinginputcontent1">Manufacturer Name</h4>
                                <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="Enter" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                            <div className="tableheadinginputcontent1flex col">
                                <h4 className="tableheadinginputcontent1">Manufacturer Brand</h4>
                                <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="Enter" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                            <div className="tableheadinginputcontent1flex col">
                                <h4 className="tableheadinginputcontent1">Country of origin</h4>
                                <input type="text" className="form-control" style={{backgroundColor:"#FCFCFD"}} placeholder="Enter" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            </div>
                        </div>
                    </div>
                ) : ""}
                {
                    tebs === '4' ? (
                        <div
                            className="row tab-pane tab-pane fade show active"
                            id="ex3-tabs-1"
                            role="tabpanel"
                            aria-labelledby="ex3-tab-1"
                        >
                            <  div class="container text-center">
                                <div className="row gap-2">
                                    <div className="col px-0">
                                        <h1>Product Image</h1>
                                        <p>Add Product main Image.</p>
                                    <div className="bg-light w-100 dfc rounded-5 px-2">
                                       
                                        <i className="las d-block la-cloud-upload-alt"></i>

                                        <img src={Dragdropsmall} style={{ width: `50%` }} alt="" />
                                        <input type="file" id="input-file-max-fs" className="m-0 file-upload" data-max-file-size="2M" />
                                    </div>
                                    </div>
                                    <div className="mx-0 col-8 px-0">
                                        <h1>Product Gallery</h1>
                                        <p>Add Product Gallery Images.</p>
                                        <div className="d-flex gap-2">
                                            <div className="imgs2 col dfcimg">
                                                <i className="las la-image"></i>
                                                <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                                            </div>
                                            <div className="bg-light dfc  rounded-5 col-9">
                                                <i className="las d-block la-cloud-upload-alt"></i>
                                                <img src={Dragdropbig} style={{ width: `90%` }} alt="" />
                                                <input type="file" style={{backgroundColor:"#FCFCFD"}}  id="input-file-max-fs" className="m-0 file-upload" data-max-file-size="2M" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-0">
                                <div className="col-6 mt-2">
                                    <h3>Size</h3>
                                    <Cheap chipData={[{key:'1',label:`S`}]}/>
                                </div>
                                <div className="col mt-2">
                                    <h3>MRP</h3>
                                    <input type="text" style={{backgroundColor:"#FCFCFD"}} placeholder='380.00' className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                                </div>
                                <div className="col mt-2">
                                    <h3>MRP</h3>
                                    <input type="text" style={{backgroundColor:"#FCFCFD"}} placeholder='380.00' className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                                </div>
                            </div>
                            <div className="row p-0">
                                <div className="col-6 mt-2">
                                    <h3>Color</h3>
                                    
                                    <Cheap chipData={[{key:'1',label:`Red`}]}/>
                                </div>
                                <div className="col mt-2">
                                    <h3>Stock</h3>
                                    <input type="text" style={{backgroundColor:"#FCFCFD"}} placeholder='18' className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                                </div>
                                <div className="col mt-2">
                                    <h3>#SKU</h3>
                                    <input type="text" style={{backgroundColor:"#FCFCFD"}} placeholder='F7-5658' className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                                </div>
                            </div> 
                             <div className="row p-0">
                                <div className="col-6 mt-2">
                                    <h3>Occasion</h3>
                                    <Cheap chipData={[{key:'1',label:`Wedding`}]}/>
                                </div>
                                <div className="col mt-2">
                                    <h3>Weight</h3>
                                    <input type="text" style={{backgroundColor:"#FCFCFD"}} placeholder='18' className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                                </div>
                                <div className="col mt-2">
                                    <h3>Packaging Size</h3>
                                    <input type="text" style={{backgroundColor:"#FCFCFD"}} placeholder='F7-5658' className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                                </div>
                            </div>
                            <div className="row p-0">
                                <div className="col-6 mt-2">
                                    
                                </div>
                                <div className="col mt-2">
                                    <h3>GST%</h3>
                                    <input type="text" placeholder='12%' style={{backgroundColor:"#FCFCFD"}} className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                                </div>
                                <div className="col mt-2">
                                    <h3>SLA</h3>
                                    <input type="text" placeholder='Enter sla' style={{backgroundColor:"#FCFCFD"}} className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                                </div>
                            </div>
                            <div className="row p-0 mt-2 tabbtn2">
                                <div className="btn btn1 col mt-2">
                                <i class="las la-plus mx-1 fs-4"></i>
                                   <p>Add New Variation</p>
                                </div>
                                <div className="btn col mt-2">
                                <i class="las la-copy fs-4 mx-1"></i>
                                  <p>Duplicate</p>
                                </div>
                            <div className="col-3 mt-2">
                                    
                                    </div>
                            </div>

                        </div>
                    ) : ""}
                {
                    tebs === '5' ? (
                        <div
                            className="tab-pane fade show active pb-3"
                            id="ex3-tabs-1"
                            role="tabpanel"
                            aria-labelledby="ex3-tab-1"
                        >
                           
                           <div className="row gap-2">
                            <div className="col p-0">
                            <h1>Meta title</h1>
                            <input type="text" style={{backgroundColor:"#FCFCFD"}} className="w-100 form-control" placeholder="Enter meta title" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            </div>
                            <div className="col p-0">
                            <h1>Meta Keywords</h1>
                            <input type="text" style={{backgroundColor:"#FCFCFD"}} className="form-control" placeholder="Enter meta keywords" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                           
                         </div>
                         <div className="col-12 p-0 m-0 w-100">
                           <h1>Meta Description</h1>
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "142px", backgroundColor:"#FCFCFD",resize:`none`}}></textarea>
  
                           </div>
                           </div>
                           
                        </div>
                    ) : ""
                }

            </div>
        </div>
    )
}
