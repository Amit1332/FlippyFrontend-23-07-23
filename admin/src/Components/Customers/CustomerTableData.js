import React, { useEffect,useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import {clearErrors, deleteUser, getAllUser} from "../../actions/UserActions";
import { DELETE_USER_RESET } from "../../constants/userConstant";



function CustomerTaleData() {
  const navigate = useNavigate();
  const params = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, users } = useSelector((state) => state.getAllUser);


  console.log(users)
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteUser
  );

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
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
         User Deleted Successfully
        </div>
      );

      navigate("/customerlist");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUser());
  }, [dispatch, error, alert, deleteError, navigate, isDeleted]);

  const [user, setUser] = useState();
  useEffect(() => {
    if (users) {
      setUser(users);
    }
  }, [users]);



  return (
    <>

    
          {
           user && user.map((elem)=>{
              return (
                <>
                <tr>
            <td className="" scope="row">
            <div className="customerss">
            

            </div>
            </td>
            <td className="">
            <div className="customerss">
              <div class="">
                <input
                  class="myinput"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
              </div>
            </td>
            <td className="">
            <div className="customerss">
        {elem.name}
        </div>
           </td>
            <td className="">
            <div className="customerss">
      {elem.email}
      </div>
            </td>
            <td className="">
            <div className="customerss">
      {elem.phone}
      </div>
            </td>
            <td className="">
            <div className="customerss">
          jaguar package
          </div>
            </td>
            <td className="">
            <div className="customerss">
          987765
          </div>
               </td>
           
               <td>
       <div className="customerss d-flex align-items-center">
        
            
              <Link className="mx-1" to="">
                <i class="ri-user-unfollow-line" style={{color:"#4F4F4F",fontWeight:"500"}}></i>
              </Link>
              <Link
            className="mx-1"
            onClick={() => deleteUserHandler(elem._id)}
              >
                <i class="ri-delete-bin-6-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
         </div>
       </td>
            
          
          </tr>
                </>
              )
            })
          }
       
    </>
  )
}

export default CustomerTaleData
