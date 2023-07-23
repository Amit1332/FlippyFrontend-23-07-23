import React from 'react'
import "../Credential.css";
import LeftBanner from "./LeftBanner";
import { Link } from "react-router-dom";

function ForgotePass( ) {
  return (
    <>
        <div className="loginComp ">
        <LeftBanner />
        <div className="rightComp">
          <div className="userSinUpMain">
            <div className="userSinUp">
              <a href = " ">Don't have an account?</a>
              <Link to="/signup">
                <button><i className="las la-user"></i>Sign up</button></Link>
            </div>
          </div>
          <div className="signinform">
            <div className="loginform ">
            <i className="las la-lock"></i>
              <h1>Forgot password?</h1>
              <p>Enter your details to recieve a reset link</p>

              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                <i className="las la-envelope"></i>
                  <input type="email" placeholder="Enter email address" />
                </div>
               
              </div>
              <Link to="/verifyemail" >
              <button className="button  forgotepassbtn mt-3">Submit</button>
              </Link>
                <Link to="/login" className="forgatebtn" style={{color:"#164c96"}}> {`<`} &nbsp;  Back to Sign in </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotePass