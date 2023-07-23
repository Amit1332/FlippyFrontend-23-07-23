import React from "react";
import LeftBanner from "./LeftBanner";
import { Link } from "react-router-dom";
import AlreadyMember from "./AlreadyMember";

function Submitform() {
  return (
    <>
      <div className="loginComp SignComp">
        <LeftBanner />
        <div className="rightComp rightCom-2">
          <AlreadyMember />
          <div className="signinform">
            <div className="loginform createpage " >
            <div className="successicon">
            <i className="las la-check-circle"></i>
            </div>
              <h2>Account Created Successfully</h2>
              <h5 >Your Flippy Seven has been created successfully, Now you can start selling on flippy7</h5>
              <hr />
            <div className="continue">
                <Link className="button-2 " id="uploadproduct" to="/products/addproduct">Upload Product</Link>
                <Link className="button-3 " id="dasshboard" to="/dashboard">Go to Dashboard</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Submitform;