import React from "react";
import SecondNavProduct from "../Include/SecondNavProduct";
import "./Rto_manage.css";
import NavForAllRto from "./NavForAllRto";

function Rto_manage() {
  return (
    <>
      <SecondNavProduct
        Name={{ name: "RTO Management", directory: "Home > RTO Management" }} Btn={[{ name: "How it works?", style: "", icon: "lab la-youtube" }]}/>
        <div className="  rto_main px-4">
            <div className="  rto-first px-1">
                <div className="rto-first-left">
                     <h4>Overview</h4> 
                     <h5>Here's what's happening with your Returns/RTO Orders</h5>
                </div>
                <div className="rto-first-right">
                    <div className="rto-first-right">
                        <div className="rto-first-right-date">
                            <h5>01 Jan, 2023 to 31 Jan, 2023 </h5>
                            <i class="las la-calendar-minus"></i>
                        </div> 
                        <div className="rto-first-icon" style={{color:"#103A81"}}>
                            <i class="las la-sync"></i>
                        </div>
                    </div>
                </div>
            </div>
           <div class="gap-3 row kkk " style={{paddingLeft:"10px"}}>
              <div class="col-md-4  " style={{}}><div className="rto-second-left"><h4>CUSTOMER RETURN RATE</h4><h3>23.4%</h3><h5>18 orders returned out of 16 delivered</h5></div><div className="rto-second-right"><p><i class="las upp la-arrow-right"></i>+2.90 %</p></div></div>
              <div class="col-md-4  " style={{}}><div className="rto-second-left"><h4>COURIER RETURN (RTO) RATE</h4><h3>23.4%</h3><h5>18 orders returned out of 16 delivered</h5></div><div className="rto-second-right"><p style={{color:"#F04438"}} ><i class="las downn la-arrow-right"></i>+2.90 %</p></div></div>
              <div class="col-md-4  " style={{}}><div className="rto-second-left"><h4>Approved Claims</h4><h3>₹34,435.00</h3><h5>18 orders returned out of 16 delivered</h5></div><div className="rto-second-right"><p><i class="las upp la-arrow-right"></i>+2.90 %</p></div></div>
           </div>
              <div className="mt-1" style={{overflow:'hidden', paddingLeft:"0px", marginLeft:"0px"}}>
               <div className="rto-third ">
                     <NavForAllRto/>
                    
              </div>
                </div>
      </div>
    </>
  );
}

export default Rto_manage;
