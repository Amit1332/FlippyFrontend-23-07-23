import React, { useEffect } from "react";
import "./AdminOptions.css";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/adminActions";
import { useNavigate, useParams } from "react-router-dom";

const AdminOptions = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutAdmin() {
    dispatch(logout());
    alert.success(<div style={{ color: "white" }}>Logout Successfull</div>);
    navigate("/");
  }

  return (
    <>
      <div
        className="admindashoptions d-flex justify-content-center"
        style={{ height: "10vh" }}
      >
        {/* <div className="d-flex align-items-center gap-4 notifi">
          <i
            class="ri-notification-3-line  p-1 px-2 border rounded-circle"
            style={{ position: "relative" }}
          >
            <div
              className="bg-danger"
              style={{
                width: "5px",
                position: "absolute",
                top: ".5rem",
                right: ".7rem",
                borderRadius: "50%",
                border: "1px solid white",
                height: "5px",
              }}
            ></div>
          </i>
          <div className="accountnav d-flex text-start gap-2">
            <div className="alladminbox">
              <img src="/flippyLogo.png" alt="" />
            </div>
            <div class="btn-group shadow-0 text-start">
              <div
                class="btn shadow-0 p-0 d-flex align-items-center gap-3 dropdown-toggle dropdown-toggle-for-nav-account "
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <div className="text-start">
                  <h4
                    className="text-capitalize"
                    style={{
                      fontWeight: `600`,
                      fontSize: `14px`,
                      lineHeight: `24px`,
                      marginBottom: "0px",
                      color: `#1D2939`,
                    }}
                  >
                    Snehlata Patel
                  </h4>
                  <p
                    className="text-capitalize"
                    style={{ marginBottom: "0px", fontSize: "10px" }}
                  >
                    Admin
                  </p>
                </div>
                <i class="las la-angle-down fw-bolder"></i>
              </div>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                <li>
                  <button class="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* <div className="alladminbox">
        <img src="/flippyLogo.png" alt="" />
      </div> */}

        {/* 
   <div className="dashicons">
    <div className="singleicons">
           <Link to="/dashboard"> <i class="las la-home"></i></Link>
      </div> 
      <div className="singleicons">
      <Link to="/admin/me"> <i class="las la-user"></i></Link>
      
      </div> 
    
      <div className="singleicons">
       <i class="las la-sign-out-alt" onClick={logoutAdmin}></i>
      
      </div>
   </div> */}
      </div>
    </>
  );
};

export default AdminOptions;
