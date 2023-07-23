import React, { useState,useEffect } from 'react'
import Tableforallproduct from './TableforallCouponactive'
import Tableforexpirecoupon from './Tableforexpirecoupon'
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  clearErrors           ,
  getCouponSeller,
} from "../../Actions/couponAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";



export default function Navforallproduct() {
  const navigate = useNavigate();
  const params = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();

  const {loading, error, coupons, couponsCount } = useSelector(
    (state) => state.coupons
  );

 
  useEffect(() => {
    if (error) {
      alert.error(
        <>
          <div style={{ color: "white" }}>{error}</div>
        </>
      );
      dispatch(clearErrors());
    }

    dispatch(getCouponSeller());
},[dispatch, error, alert, navigate])









  const ordertabs = [
    {tabname:"Active",
    tabId : "1",
orCount:"5"

},
{tabname:"Expired",
tabId : "2",
orCount:"5"
}]
const [tebs, settabs] = useState('1');
  return (
    <div className='tablistaddpro  w-100' style={{overflow:'auto', backgroundColor:"white"}}>
            <ul className="nav nav-tabs w-100" id="ex2" role="tablist" style={{marginBottom:'-20px'}}>
          {
            ordertabs.map((elem)=>{
                return (
                    <>
                      <li className="p-1" role="presentation">
                    <Link
                        className={tebs === `${elem.tabId}` ? `nav-link text-capitalize  p-2 py-3 active` : `text-capitalize nav-link  p-2 py-3`}
                        id="ex3-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        style={tebs === `${elem.tabId}` ? (
                            {backgroundColor:"transparent",fontWeight: '600',fontSize: '16px',lineHeight: '24px',backgroundColor:"transparent",color: '#164C96'}
                            ):(
                            {backgroundColor:"transparent",fontWeight: '600',fontSize: '16px',backgroundColor:"transparent",lineHeight: '24px',color: '#667085'}
                            )}
                        onClick={() => { settabs(`${elem.tabId}`) }}
                        aria-controls="ex3-tabs-2"
                    >
                        <span style={{fontWeight:'100'}}>

                          <i className={`${elem.icon1}`} style={{fontSize:'18px', marginRight:'5px'}}></i>
                        </span>
                        {elem.tabname}
                        <span class="badge rounded-pill" style={{backgroundColor:"#FEF4E9",color:"#D94A27"}}>{elem.orCount}</span>
                        </Link>
                    
                </li>
                    </>
                )
            })
          }
              
            </ul>

            <div className="tab-content w-100 mt-3" id="ex2-content">
                {tebs === '1' ? (
                    <div className='overflow-auto container-fluid px-0 ttscrollbar'>
                       <Tableforallproduct coupons={coupons}/>

                       
                    </div>
                ) : ""}
                {tebs === '2' ? (
                     <div className='overflow-auto container-fluid px-0 ttscrollbar'>
                     <Tableforexpirecoupon />

                     
                  </div>
                ) : ""
               }
            </div>
        </div>

  )
}
