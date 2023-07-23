import React from 'react'
import { Link } from "react-router-dom";
import Cheap from "./Cheap";
import Tabsfor from './Tabsfor';
import TextEditor from "./Texteditor";
import Dragdropbig from "./Dragdropbig.svg"

export default function Leftaddproduct() {
    return (
        <div className="leftaddproduct col px-0" >
            <div className="protittle container-fluid d-flex container-fluid text-start p-3" style={{background:"white"}}>
                <TextEditor />
            </div>
            <div className="container-fluid  mt-3 mb-3 p-3 " style={{borderRadius:'15px', background:"white",overflow:'hidden'}}>
                <h6 className="text-start headtittle"><span>Product Images
                </span><i className="las la-question-circle mx-2"></i></h6>
                <hr />
                <div className="addproductimage gap-1">
                    <div className="left p-1 pb-0">
                        <h4 className="m-0">Product Image</h4>
                        <p className="text-start">Add Product main Image.</p>
                        <div className="imgs2">
                            <i className="las la-image"></i>
                            <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                        </div>
                    </div>
                    <div className="right p-1 pb-0">
                        <h4 className="m-0">Product Gallery</h4>
                        <p className="text-start">Add Product Gallery Images</p>
                        <div className="progallery">

                            <div className="bg-light dfc rounded-5">
                                <i className="las d-block la-cloud-upload-alt"></i>
                               <img src={Dragdropbig} alt="" />
                                <input type="file" id="input-file-max-fs" className="m-0 file-upload" data-max-file-size="2M" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-2 px-3" style={{background:"white",borderRadius:'15px'}}>
                <Tabsfor />
            </div>
        </div>
    )
}
