import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, login } from "../../actions/adminActions";

import { useAlert } from "react-alert";

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, isAuthenticatedAdmin, admin } = useSelector(
    (state) => state.admin
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

    if (isAuthenticatedAdmin) {   
        Navigate("/");
        alert.success(
          <div style={{ color: "white" }}>{admin.role} Login Successful</div>
        );
      } 
    
  }, [dispatch, error, alert, isAuthenticatedAdmin]);

  return (
    <>
      <div className="login">
        <div className="logininner">
          <div className="websitelogo">
            <img src="/flippyLogo.png" alt="" />
          </div>

          <div className="loginform">
            <div className="logilgoimg">
              <img src="/flippyLogo.png" alt="" />
            </div>

            <div className="nnbb">
              {" "}
              <h6>Admin Login</h6>
              <p>Login into your account</p>
            </div>

            <form className="adminloginform" onSubmit={loginSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />

              <div className="password">
                <input
                  type="password"
                  placeholder="enter your password"
                  required
                  className="myInput"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />

               
              </div>
              <div className="remem">
                <input type="checkbox" id="remember" />
                <label htmlFor="">Remember me</label>
              </div>
              <button className=""style={{width:"0", border:"0px"}} type="submit">
               
                <div className="btn btn-sm">Login</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
