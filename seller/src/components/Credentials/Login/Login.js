import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Credential.css";
import LeftBanner from "./LeftBanner";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, login } from "../../../Actions/SellerActions";

const Login = ( ) => {


  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, isAuthenticatedSeller, seller } = useSelector(
    (state) => state.seller
  );

  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));

  };

   useEffect(() => {
    if (error) {
      alert.error(<div style={{ color: "white" }}>{error}</div>);
      dispatch(clearErrors());
    }

    if (isAuthenticatedSeller) { 

        alert.success(
          <div style={{ color: "white",fontSize:".8rem" }}>{seller.role} Login Successful</div>
        );
        Navigate("/dashboard")


      } 
    
  }, [dispatch, error, alert, isAuthenticatedSeller]);





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
          <form action="">
          <div className="signinform">
            <div className="loginform">
              <i className="las la-user"></i>
              <h1>Login to your supplier panel</h1>
              <p>Welcome back, you’ve been missed!</p>

              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                  <i className="las la-user"></i>
                  <input type="email" placeholder=" Email or Mobile Number"
                   required
                   value={loginEmail}
                   onChange={(e) => setLoginEmail(e.target.value)}
                  />

                </div>
                
                <div className="inputbox-2">
                  <i className="las la-lock"></i>
                  <input className="" type="password" placeholder="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <i className="las la-eye"></i>
                </div>
              </div>

              <div className="forgetusr mt-2">
                <p><input type="checkbox"/> Remember me</p>
                <Link to="/forgotepass" > Forget Password?</Link>
              </div>
              <button className="button mt-3"  onClick={loginSubmit}>Log In</button>
            </div>
          </div>
          </form>
         
        </div>
      </div>
    </>
  );
};

export default Login;
