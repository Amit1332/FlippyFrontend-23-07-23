import React from "react";
import Loginimg from "../images/flippyBrand.png"
import flippyShop from "../images/flippyShop.PNG"



const LeftBanner = () => {
  return (
    <>
      <div className="leftComp leftComp-2 signupleft">
        <div className="img">
          <img src="./flippyLogo.png" alt="" />
        </div>
        <div className="firsttxt mt-1">
          <div className="boxx-1">
            <div className="number">1</div>
            <div className="txt-2 ">
              <h5>Your Details</h5>
              <p>Please provide your phone and email</p>
            </div>
          </div>
          <div className="boxx-1">
            <div className="number-2">2</div>
            <div className="txt-2">
              <h5 id="txt-3">Verify Your GSTIN</h5>
              <p>Please provide GSTIN & Pan</p>
            </div>
          </div>
          <div className="boxx-1">
            <div className="number-2">3</div>
            <div className="txt-2">
              <h5 id="txt-3">Add Your Bank Account</h5>
              <p>Plaese provide your back details</p>
            </div>
          </div>
          <div className="boxx-1">
            <div className="number-2">4</div>
            <div className="txt-2">
              <h5 id="txt-3">Pickup & Registered Address</h5>
              <p>Please provide your address</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="secondtxt">
          <div className="secondtxt-2">
            <div className="txt-3"><h1>700+</h1><p>Categories</p></div>
             <div className="txt-3"><h1>18,000+</h1><p>Suppliers</p></div>
          </div>
          <h5>All you need to sell on</h5>
          <div className="content-2 content-3" id="content-3">
              <p><i className="las la-check-circle"></i><span>GSTIN </span></p>
              <p><i className="las la-check-circle"></i><span>Bank Account</span></p>
          </div>
          
        </div>
        <div className="thirdimg">
          <img src={flippyShop}  alt="" />
          
        </div>

        <div className="footrsighup signupfootr ">
          <div className="footrsighup-2">
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
          </div>
            <h5>&copy; 2022 Flippy7. All rights resered.</h5>
        </div>
      </div>
    </>
  );
};

export default LeftBanner;
