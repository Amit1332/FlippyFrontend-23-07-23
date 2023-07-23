import React from 'react'
import "../Credential.css";
import LeftBanner from "./LeftBanner";
import { Link } from "react-router-dom";

function ResetPassSuccess() {
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
            <div className="loginform ">
            <i className="las la-check-circle"></i>
              <h1 id='resetpasssucess'>Password Reset Successfully</h1>
              <p>Your Flippy Seven account password reset successfully, Now you can login with new password</p>
              <Link to="/login" >
              <button className="button forgotepassbtn mt-3">Back to Sign in</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassSuccess