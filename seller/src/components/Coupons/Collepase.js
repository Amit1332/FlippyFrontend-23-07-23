import "./Collepse.css"
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

import {createcoupon, getCouponSeller} from "../../Actions/couponAction";

import {CREATE_COUPON_RESET} from "../../Constants/couponConstants";

export default function Collepase() {
  const Navigate = useNavigate();
  const params = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();

    // create brand
const {success} = useSelector((state)=>state.couponcreate)


const [couponData,setCouponData] = useState({
   
  start_date:"",
  ending_date:"",
  coupon_type:"",
  coupon_id:"",
  coupon_code:'',
  product:"",
  discount_type:"",
  discount_constant:"",
});

const handleInputs =(e)=>{
  const name =e.target.name
  const value = e.target.value
  setCouponData({...couponData,[name]:value})

}





const possible  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

 
const generateCode=()=> {
  var text = "";

  for ( var i=0; i < 6; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  console.log(text);
document.querySelector('#redomecode').value = text;
setCouponData({...couponData,'coupon_code':text})

}











useEffect(() => {
  if(success){
    alert.success(
      <div style={{ color: "white", fontSize: "10px" }}>
           Coupon Created Successfully
          </div>

    )
    Navigate("/coupon");
    dispatch({type:CREATE_COUPON_RESET})
  }
  dispatch(getCouponSeller())
}, [dispatch,Navigate,success,alert])




  const submitCoupon =(e)=>{
    e.preventDefault();
   dispatch(createcoupon(couponData))
   window.location.reload(false);

  }
  return (
<div class="offcanvas offcanvas-end text-start p-4" style={{zIndex:9999, overflow:'auto'}} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
    <p class="offcanvas-title" id="offcanvasRightLabel">Add New Coupon</p>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <hr />
  <form className="h-100">
  <div className="d-flex justify-content-between h-100 flex-column">
  <div>
  <div className="partoffcanva">

  <h4>Coupon Type</h4>
  <select
        className=" form-select p-2 px-3 border"
        aria-label="Default select example"
        name="coupon_type"
        style={{backgroundColor:"#fcfcfd"}}
        onChange={handleInputs}
        value={couponData.coupon_type}
      >
        <option selected>For Product</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
  </div>
  
  <div className="partoffcanva">
  <h4>Coupon code</h4>
  <div
        style={{backgroundColor:"#fcfcfd"}}
   className="d-flex border border-1 border-dark-subtittle rounded-3 align-items-center p-2">
  <input
        type="text"
        className='border-0 px-2'

        id="redomecode"
        placeholder='Flippy50'
        name="coupon_code"
        onChange={handleInputs}
        value={couponData.coupon_code} 
        />
    <p style={{color:`#164C96`,fontWeight: `400`,marginBottom:'0px',cursor:'pointer', fontSize: `14px`, lineHeight: `24px`}} onClick={generateCode}>Generate Random</p>
    </div>
    </div>

  <div className="partoffcanva">

  <h4>Product</h4>
  <select
        className=" form-select p-2 px-3 border"
        aria-label="Default select example"
        name="product"
        style={{backgroundColor:"#fcfcfd"}}

        onChange={handleInputs}
        value={couponData.product}
      >
        <option selected>Nothing Selected</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
  </div>
  <div className="partoffcanva">
  <h4>Start Date</h4>
  <div 
        style={{backgroundColor:"#fcfcfd"}}
  className="d-flex w-100 border border-1 border-dark-subtittle rounded-3 align-items-center p-2">
  <input
        type="text"
        className='w-100 border-0 px-2'
        placeholder='09/03/2022'
        name="start_date"
        onChange={handleInputs}
        value={couponData.start_date} 
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        />
    <i class="las la-calendar-alt"></i>
    </div>
  </div>
 
  <div className="partoffcanva">
  <h4>End Date</h4>
  <div
        style={{backgroundColor:"#fcfcfd"}}
  className="d-flex w-100 border border-1 border-dark-subtittle rounded-3 align-items-center p-2">
  <input
        type="text"
        className='w-100 border-0 px-2'
        placeholder='09/03/2022'
        name="ending_date"
        onChange={handleInputs}
        value={couponData.ending_date}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        />
    <i class="las la-calendar-alt"></i>
    </div>
  </div>
  <div className="row">
    <div className="col partoffcanva">
      <h4>Discount</h4>
      <select
        className=" form-select p-2 border px-3"
        aria-label="Default select example"
        name="discount_type"
        style={{backgroundColor:"#fcfcfd"}}

        onChange={handleInputs}
        value={couponData.discount_type}
      >
        <option selected>Percentage</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="col partoffcanva ">
      <h4>Enter Percentage</h4>
      <input type="text"
        style={{backgroundColor:"#fcfcfd"}}

       name="discount_constant"
       onChange={handleInputs}
       value={couponData.discount_constant} 
      class="form-control p-2 px-3 border" placeholder="50%" aria-label="Username" aria-describedby="basic-addon1"></input>
    </div>
  </div>
  </div>
  <div className="btncon mt-4 " style={{display:'flex',justifyContent:'flex-end', gap:'5px'}}>
    <div className="btn rounded-pill bntsave_collepse_coupon" style={{backgroundColor:'#164C96', color:"white"}} onClick={submitCoupon}>Save</div>
    <div className="btn rounded-pill border bntcansel_collepse_coupon">Cancel</div>
  </div>
  </div>
  </form>
</div>
  )
}
