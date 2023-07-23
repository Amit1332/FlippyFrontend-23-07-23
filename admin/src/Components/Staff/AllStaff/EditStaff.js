import { useAlert } from "react-alert";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import {
  clearErrors,
  createNewStaff,
  getStaffDetails,
  updatestaff,
} from "../../../actions/staffActions";
import { ADD_NEW_STAFF_RESET, UPDATE_STAFF_RESET } from "../../../constants/staffConstant";

const EditStaff = () => {
  const options = [
    { label: "Admin", name: "Admin", value: "admin" },
    {
      label: "customer_support",
      name: "customer_support",
      value: "customer_support",
    },
    { label: "procurement", name: "procurement", value: "procurement" },
    {
      label: "logistic_1st_mile",
      name: "logistic_1st_mile",
      value: "logistic_1st_mile",
    },
    {
      label: "logistic_mid_mile",
      name: "logistic_mid_mile",
      value: "logistic_mid_mile",
    },
    {
      label: "logistic_last_mile",
      name: "logistic_last_mile",
      value: "logistic_last_mile",
    },
    {
      label: "payment_team_supplier",
      name: "payment_team_supplier",
      value: "payment_team_supplier",
    },
    {
      label: "payment_team_customer",
      name: "payment_team_customer",
      value: "payment_team_customer",
    },
    {
      label: "supplier_support",
      name: "supplier_support",
      value: "supplier_support",
    },
    {
      label: "customer_support",
      name: "customer_support",
      value: "customer_suppor",
    },
    { label: "catalog_team", name: "catalog_team", value: "catalog_team" },
    { label: "category_team", name: "category_team", value: "category_team" },
    {
      label: "marketing_team",
      name: "marketing_team",
      value: "marketing_team",
    },
    {
      label: "developer_team",
      name: "developer_team",
      value: "developer_team",
    },
  ];

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const params = useParams();
  const alert = useAlert();

  // create staff
  const { success, error } = useSelector((state) => state.updatestaff);

  const { staff } = useSelector((state) => state.getStaff);

  useEffect(() => {
    dispatch(getStaffDetails(params.id));
  }, [dispatch, params.id]);

  const [staffData, setStaffData] = useState();

  const handleInputs = (e) => {
    setStaffData({ ...staffData, [e.target.name]: e.target.value });
  };

  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    if (staff) {
      setStaffData(staff);
      
    }
  }, [staff]);

  useEffect(() => {
    if (error) {
      alert.info(
        <div style={{ color: "white", fontSize: "10px" }}>{error}</div>
      );
      dispatch(clearErrors());
    }
    if (success) {
      alert.success(
        <div style={{ color: "white", fontSize: "10px" }}>
          Staff Updated Successfully
        </div>
      );
      Navigate("/staffs");
      dispatch({ type: UPDATE_STAFF_RESET });
    }
  }, [dispatch, error, alert, success]);

  const [roles, setRoles] = useState();

  const handleChangeselete = (e) => {
    setRoles({ ...roles });
    setStaffData({ ...staffData, setRoles: roles });
  };

  const [id, setId] = useState();

  // submit staff data
  const submitstaffData = (e) => {
    e.preventDefault();
    staffData.role = selectedValue.value;

    dispatch(updatestaff(staffData, params.id));
  };

 

  return (
    <>
  <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            
            </div>
            <div className="productsfilter">
            </div>
          </div>

      <div class="aiz-main-content">
        <div class="px-15px px-lg-25px">
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0 h6" style={{color:"#4F4F4F", fontSize:".9rem"}}>Edit Staff</h5>
                </div>

                <form class="form-horizontal setpgcred">
                  <div class="card-body">
                    <div class="form-group row">
                      <label class="col-sm-3 col-from-label" for="name" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                        Name
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          placeholder="Name"
                          id="name"
                          name="name"
                          class="form-control"
                          required=""
                          onChange={handleInputs}
                          value={staffData && staffData.name}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-3 col-from-label" for="email" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                        Email
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          placeholder="Email"
                          id="email"
                          name="email"
                          class="form-control"
                          required=""
                          onChange={handleInputs}
                          value={staffData && staffData.email}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-3 col-from-label" for="mobile" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                        Phone
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          placeholder="Phone"
                          id="mobile"
                          name="phone"
                          class="form-control"
                          required=""
                          onChange={handleInputs}
                          value={staffData && staffData.phone}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-3 col-from-label" for="password" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                        Password
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="password"
                          placeholder="Password"
                          id="password"
                          name="password"
                          class="form-control"
                          required=""
                          onChange={handleInputs}
                          value={staffData && staffData.password}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-3 col-from-label" for="name" style={{color:"#4F4F4F", fontSize:".9rem"}}>
                        Role
                      </label>
                      <div class="col-sm-9">
                        <Select
                          className="p-0 attributedata"
                          classNamePrefix="select"
                          value={selectedValue}
                          onChange={setSelectedValue}
                          options={options}
                          placeholder={staff && staff.role}
                          isClearable
                        />
                      </div>
                    </div>
                    <div class="form-group mb-0 d-flex aligh-items-end justify-content-end">
                      <button
                        type="submit"
                        class="btn btn-sm rounded-pill"
                        style={{
                          color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",
                        }}
                        onClick={submitstaffData}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



      
      </div>
       
       </div>
        
      
     
    </>
  );
};

export default EditStaff;
