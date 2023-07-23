import React from "react";
import "../Credential.css";
import { Link } from "react-router-dom";
import LeftBanner from "./LeftBanner";
import Otp from "./Otp";
// import Otp2 from "./Otp2";

function Verify() {
  
  return (
    <>
      <div className="loginComp ">
        <LeftBanner />
        <div className="rightComp">
          <div className="userSinUpMain">
            <div className="userSinUp">
              <Link to="/signup ">Don't have an account?</Link>
              <Link to="/signup">
                <button>
                  <i className="las la-user"></i>Sign up
                </button>
              </Link>
            </div>
          </div>
          <div className="signinform">
            <div className="loginform">
              <i className="las la-check-circle"></i>
              <h1>Verify your email</h1>
              <p>
                We sent a <span>6-digit</span> verification code to your
                email.Enter the code from the email in the field below.
              </p>

              <div className="inputfrm mt-2 ">
              <Otp/>
              {/* <Otp2/> */}
               
              </div>
              <Link to="/resetpass">
                <button className="button forgotepassbtn mt-3">
                  Verify my email
                </button>
              </Link>
              <Link to="/forgotepass" className="forgatebtn">
                {" "}
                {`<`} &nbsp; Back to Sign in{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verify;
