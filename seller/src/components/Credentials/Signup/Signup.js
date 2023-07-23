
import "../Credential.css";
import LeftBanner from "./LeftBanner";
import { Link, useNavigate } from "react-router-dom";
import AlreadyMember from "./AlreadyMember";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import React, { useState, useEffect } from "react";
import { clearErrors, registerSeller } from "../../../Actions/SellerActions";
import SignupProgress from "./SignupProgress";

const Signup = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  // register seller
  const { error, isAuthenticatedSeller } = useSelector((state) => state.seller);

  const [sellerData, setSellerData] = useState({
    phone: "",
    otp_mobile: "",
    email: "",
    otp_email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSellerData({ ...sellerData, [name]: value });
  };

  const submitRegisterSeller = (e) => {
    e.preventDefault();
    dispatch(registerSeller(sellerData));
  };

  useEffect(() => {
    if (error) {
      alert.error(
        <>
          <div style={{ color: "white", fontSize: ".8rem" }}>{error}</div>
        </>
      );
      dispatch(clearErrors());
    }

    if (isAuthenticatedSeller) {
      alert.success(
        <div style={{ color: "white", fontSize: ".8rem" }}>
          Registered Successfully
        </div>
      );
      Navigate("/gstin");
    }
  }, [dispatch, error, alert, Navigate, isAuthenticatedSeller]);

  return (
    <>
      <div className="loginComp SignComp">
        <LeftBanner />
        <div className="rightComp rightCom-2">
          <AlreadyMember />
          <div className="signinform"> 
            <div className="loginform createpage">
              <h1>
                Get <span style={{ color: "#D94a27" }}>Start</span>
              </h1>
              <h3>
                Create an account to start selling on <span>Flipp7</span>
              </h3>
              <hr />
              <div className="inputfrm mt-2 ">
                <div className="inputbox-2">
                  <i className="las la-phone"></i>
                  <input
                    className=""
                    type="text"
                    required
                    placeholder="Enter mobile number"
                    name="phone"
                    onChange={handleInputs}
                    value={sellerData.phone}
                  />
                  <span>Verify</span>
                </div>
                <div className="inputbox-1">
                  <i className="las la-minus-circle"></i>
                  <input
                    type="text"
                    placeholder="Enter Otp"
                    name="otp_mobile"
                    onChange={handleInputs}
                    required
                    value={sellerData.otp_mobile}
                  />
                </div>
                <div className="inputbox-2">
                  <i className="las la-comment-alt"></i>
                  <input
                    className=""
                    type="text"
                    required
                    placeholder="Enter email address"
                    name="email"
                    onChange={handleInputs}
                    value={sellerData.email}
                  />
                  <span>Verify</span>
                </div>
                <div className="inputbox-1">
                  <i className="las la-minus-circle"></i>
                  <input
                    type="text"
                    placeholder="Enter Otp"
                    name="otp_email"
                    onChange={handleInputs}
                    value={sellerData.otp_email}
                    required
                  />
                </div>
                <div className="inputbox-2">
                  <i className="las la-lock"></i>
                  <input
                    className=""
                    type="text"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputs}
                    value={sellerData.password}
                    required
                  />
                  <i className="las la-low-vision"></i>
                </div>
              </div>

              <div className="footertext">
                <h4>
                  By continuing, i agree to flippy7's Term of Use & Privacy
                  policy
                </h4>
              </div>

              <Link className="buttonn">
                <button onClick={submitRegisterSeller}>Create Account</button>
              </Link>
            </div>
          </div>
        <SignupProgress />

        </div>
      </div>
    </>
  );
};

export default Signup;
