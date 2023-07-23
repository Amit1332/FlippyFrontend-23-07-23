import React from 'react'
import "../Credential.css";
import LeftBanner from "./LeftBanner";
import { Link } from "react-router-dom";
function ResetPass() {
  return (
    <>
        <div className="loginComp ">
        <LeftBanner />
        <div className="rightComp">
          <div className="userSinUpMain">
            <div className="userSinUp">
              <Link to = "/signup">Don't have an account?</Link>
              <Link to="/signup">
                <button><i className="las la-user"></i>Sign up</button></Link>
            </div>
          </div>
          <div className="signinform">
            <div className="loginform">
            <i className="las la-lock"></i>
              <h1>Reset your password</h1>
              <p>Enter your new password.</p>

              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                <i className="las la-lock"></i>
                  <input type="email" placeholder=" Enter new Password" />
                </div>
                <div className="inputbox-1">
                <i className="las la-lock"></i>
                  <input type="password" placeholder=" Confirm Password" />
                </div>
               
              </div>
              <Link to="/resetpasssuccess" >
              <button className="button forgotepassbtn mt-3">Save & Continue</button>
              </Link>
                <Link to="/verifyemail" className="forgatebtn"> {`<`} &nbsp;  Back to Sign in </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPass