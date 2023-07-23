import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearErrors,
  deleteSupplier,
  getAllSeller,
} from "../../../actions/SupplierActions";
import { DELETE_SUPPLIER_RESET } from "../../../constants/supplierConstant";
import { useState } from "react";

function SupplierTable() {
  const navigate = useNavigate();
  const params = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, seller } = useSelector((state) => state.getAllSeller);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteSupplier
  );

  const deleteSupplierHandler = (id) => {
    dispatch(deleteSupplier(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(
        <>
          <div style={{ color: "white" }}>{error}</div>
        </>
      );
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(
        <div style={{ color: "white", fontSize: "10px" }}>
        {deleteError}
        </div>
      );
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success(
        <div style={{ color: "white", fontSize: "10px" }}>
          Supplier Deleted Successfully
        </div>
      );

      navigate("/allsupplier");
      dispatch({ type: DELETE_SUPPLIER_RESET });
    }

    dispatch(getAllSeller());
  }, [dispatch, error, alert, deleteError, navigate, isDeleted]);

  const [sellor, setSellor] = useState();
  useEffect(() => {
    if (seller) {
      setSellor(seller);
    }
  }, [seller]);





  return (
    <>
      {sellor &&
        sellor.map((elem) => {
          return (
            <>
              <tr>
                <td className="p-2">
                <div className="customerss">
                  <Link to={`/supplierview/${elem._id}`}>
                    <button className="btn btn-sm rounded-pill" style={{ backgroundColor: "#E7F4FC", color: "#103A81",fontWeight: "bold",}}>View</button>
                  </Link>
                  </div>
                </td>
                <td>
                <div className="customerss">{elem._id}
                </div>
                </td>
                <td>
                <div className="customerss">safsa
                </div>
                </td>
                <td>
                <div className="customerss">{elem.phone}
                </div>
                </td>
                <td>
                <div className="customerss">{elem.email}
                </div>
                </td>
                <td>
                <div className="customerss">1
                </div>
                </td>
                <td>
                <div className="customerss">
            <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
              </div>
                </td>
                <td>
                <div className="customerss">
                  0
                  
                  </div></td>
                <td>
                  
                <div className="customerss">Rs. 9999
                </div>
                </td>
                <td>
                  <div class="dropdown" style={{position:"absolute"}}>
                    <button
                      type="button"
                      style={{
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#E7F4FC", color: "#103A81"
                      }}
                      class="btn bg-opacity-75 btn-sm btn-circle btn-icon  no-arrow"
                      data-toggle="dropdown"
                      href="javascript:void(0);"
                      role="button"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      <i class="las la-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                    <Link type="button" class="dropdown-item" data-toggle="modal" data-target="#exampleModalCenter">
                    Profile
                      </Link>
                      

                      <a
                        href="https://flippyseven.com/admin/sellers/login/eyJpdiI6IkFCNTBOd0gxSVFjRnFleC84c0ZjdUE9PSIsInZhbHVlIjoiNVYvZ3NTM3V1TXdHckY2cERMUjRKUT09IiwibWFjIjoiNjYwYWM1MzQ1ZjUxMzlkNTc3ZmZiZGM5ODY5YzUxZDRjZDc0NGJhYjVkYzMzYmFhMWIyNGVkM2FlNmY2ZmY4NyIsInRhZyI6IiJ9"
                        target="_blank"
                        class="dropdown-item"
                      >
                        Log in as this Supplier
                      </a>
                      <a
                        href="#"
                        onclick="show_seller_payment_modal('90');"
                        class="dropdown-item"
                      >
                        Go to Payment
                      </a>
                      <a
                        href="https://flippyseven.com/admin/seller/payments/show/eyJpdiI6ImgrMjFTcjE3Rm5saFBBbVJhdHFpblE9PSIsInZhbHVlIjoiMlNtMnpIa3hJTXczTXBLN1I5NEVNZz09IiwibWFjIjoiYTY1M2QyMzUzYWY5YWI3MDgxODYxOTA3Y2YyMjc5NzBhOWU1MjBiNTc4N2U5OGQzYmJlMTM5OGUwNjIyY2VmMCIsInRhZyI6IiJ9"
                        class="dropdown-item"
                      >
                        Payment History
                      </a>
                      <a
                        href="https://flippyseven.com/admin/sellers/eyJpdiI6IjBlS2x4TlhZQWJvTUxGbUd1NmxoV2c9PSIsInZhbHVlIjoiSVJRandGLzZOajFxYXllcnZmZWlXdz09IiwibWFjIjoiMTEwZmE2ZDlkNzBmYzg2MTA1ZDQyOWNhYjRiY2ViN2M0NWQ1NmFiMWJlZjkzYTIwMTdlNjdhNjA4NzEwMzIxMyIsInRhZyI6IiJ9/edit"
                        class="dropdown-item"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        onclick="confirm_ban('https://flippyseven.com/admin/sellers_ban/90');"
                        class="dropdown-item"
                      >
                        Ban this Supplier
                        <i class="fa fa-ban text-danger" aria-hidden="true"></i>
                      </a>
                      <a class="dropdown-item confirm-delete"
                      onClick={() => deleteSupplierHandler(elem._id)}
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                <div className="customerss">
                  {new Date(`${elem.createdAt}`)
                    .toLocaleString(undefined, { timeZone: "Asia/Kolkata" })
                    .split("/")
                    .join("-")}
                      </div>
                </td>
              </tr>


              <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content border-0" style={{backgroundColor:"#D9E5F9"}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Profile</h5>
        <a type="button" class="close bg-transparent" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </a>
      </div>
      <div class="modal-body">

            <h6> Name : {elem.name} </h6>
            <h6> email :  {elem.email}</h6>
            <h6> Phone : {elem.phone} </h6>




      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn text-light" data-dismiss="modal" style={{backgroundColor:"#164c96"}}>Close</button>
      </div>
    </div>
  </div>
</div>




            </>
          );
        })}




    </>
  );
}

export default SupplierTable;
