import React from "react";
import "../Credential.css";
import Loginimg from "../images/flippyBrand.png"
const LeftBanner = () => {
  return (
    <>
      <div className="leftComp">
        <div className="img">
          <img src="./flippyLogo.png" alt="" />
        </div>
        <div className="brandpic">
          <div className="centerimg">
            <img src={Loginimg} alt="" />
          </div>
        </div>

        <div className="content">
          <h1>Why Flipp7</h1>
          <div className="content-2">
            <p><i className="las la-check-circle"></i><span>Sell Online to 1Cr+ Customer at 3% Commision</span></p>
            <p><i className="las la-check-circle"></i><span>Become a Flippy7 seller & grow your bussiness</span></p>
            <p><i className="las la-check-circle"></i><span>700+ Categoreis to sell online</span></p>
            <p><i className="las la-check-circle"></i><span>11 Crore+ Customers buying across India</span></p>
          </div>
        </div>

        <div className="loginfooter">
            <h5>&copy; 2022 Flippy7. All rights reserved.</h5>
        </div>
      </div>
    </>
  );
};

export default LeftBanner;
