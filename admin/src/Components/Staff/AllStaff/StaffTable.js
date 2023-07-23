import React,{useEffect,useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useSelector, useDispatch ,useParams } from 'react-redux'
import { useAlert } from 'react-alert' 
import { clearErrors, deleteStaff, getAllStaff } from '../../../actions/staffActions'
import { DELETE_STAFF_RESET } from "../../../constants/staffConstant";



const StaffTable = () => {

    const navigate = useNavigate()
    const alert = useAlert()
    const dispatch = useDispatch()
    const {error,staffs} = useSelector((state)=> state.getAllStaff)
    const {
    error: deleteError,
    isDeleted,
  } = useSelector((state) => state.deleteStaff);


  const deleteStaffHandler = (id) => {
    dispatch(deleteStaff(id));
  };

    useEffect(() => {

        if(error){
            alert.error(
                <>
          <div style={{ color: "white" }}>{error}</div>
        </>
            )
        }

      dispatch(clearErrors());

      if (deleteError) {
      alert.error(
        <div style={{ color: "white", fontSize: "10px" }}>
          Unable To Delete Staff
        </div>
      );
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success(
        <div style={{ color: "white", fontSize: "10px" }}>
         Staff Deleted Successfully
        </div>
      );

      dispatch({ type: DELETE_STAFF_RESET });
    }




      
        dispatch(getAllStaff())
    }, [dispatch,error,alert,deleteError,navigate, isDeleted])
    const [staff,setStaff]=useState()
    
    useEffect(()=>{
        if(staffs){
            setStaff(staffs)
        }
    },[staffs])
  return (
    <>
    
   
   
         {

            staff && staff.map((elem)=>{
                return (
                    <>


                    <tr>
            <td className="" scope="row">
            <div className="customerss"></div>
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
           {elem.role}
           </div>
            </td>
            
           



            <td>
       <div className="customerss d-flex align-items-center">
        
             <Link className="mx-1" >
                <i class="ri-eye-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
              <Link className="mx-1" to={`/edit/staff/${elem._id}`}>
                <i class="ri-edit-box-line" style={{color:"#4F4F4F",fontWeight:"500"}}></i>
              </Link>
              <Link className="mx-1" hidden  to="">
                {" "}
                <i class="las la-copy" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
              <Link
            className="mx-1"
            onClick={() => deleteStaffHandler(elem._id)}

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

export default StaffTable