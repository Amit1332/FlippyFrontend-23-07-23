import axios from "axios"
import { 
    ALL_STAFF_REQUEST,
     ALL_STAFF_SUCCESS, 
     ALL_STAFF_FAIL ,


     DELETE_STAFF_REQUEST,
     DELETE_STAFF_SUCCESS, 
     DELETE_STAFF_FAIL ,

 

     ADD_NEW_STAFF_REQUEST,
    ADD_NEW_STAFF_SUCCESS,
    ADD_NEW_STAFF_FAIL,


     STAFF_DETAILS_REQUEST,
     STAFF_DETAILS_SUCCESS, 
     STAFF_DETAILS_FAIL ,


     UPDATE_STAFF_REQUEST,
     UPDATE_STAFF_SUCCESS,
     UPDATE_STAFF_FAIL,
     UPDATE_STAFF_RESET, 

    

     CLEAR_ERRORS, 

           } from "../constants/staffConstant"




           // All staff
export const getAllStaff = ()=>async (dispatch)=>{
    try {
        
        dispatch({
            type:ALL_STAFF_REQUEST
        })

       const {data} = await axios({
            method: 'get',
            url: `/api/flippy/v1/admin/staff/role/`,
            withCredentials: false,
          });
        dispatch({
            type:ALL_STAFF_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: ALL_STAFF_FAIL,
            payload:error.response.data.error
        }) 
    }
}




// update category
export const updatestaff = (staffData, id) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_STAFF_REQUEST,
      });
  
      const config = { headers: { "Content-Type": "application/json" } };
      console.log(staffData);
      const { data } = await axios.put(
        `/api/flippy/v1/admin/staff/role/${id}`,
        staffData, 
        config,
        {
          withCredentials: false,
        }
      );
  
      dispatch({
        type: UPDATE_STAFF_SUCCESS,
        payload: data,
      });
  
  
  } catch (error) {
      dispatch({
          type:UPDATE_STAFF_FAIL,
          payload:error.response.data.error
      
      })
  }
  
  }

// Delete STAFF

export const deleteStaff = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type:DELETE_STAFF_REQUEST
        })

       const {data} = await axios({
            method: 'delete',
            url: `/api/flippy/v1/admin/user/delete//${id}`,
            withCredentials: false,
           
          });

        dispatch({
            type:DELETE_STAFF_SUCCESS,
            payload:data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_STAFF_FAIL,
            payload:error.response.data.error
        }) 
    }
}





// create new staff actions
export const createNewStaff = (staffData) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_NEW_STAFF_REQUEST,
    });

    console.log(staffData)
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/flippy/v1/admin/staff/new/",
      staffData,
      config,
      {
        withCredentials:true,
      }
    );

    dispatch({
      type: ADD_NEW_STAFF_SUCCESS,
      payload: data,
    });


} catch (error) {
    dispatch({
        type:ADD_NEW_STAFF_FAIL,
        payload:error.response.data.error
    
    })
}

}













// STAFF details
export const getStaffDetails = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type: STAFF_DETAILS_REQUEST
        })

       const {data} = await axios({
            method: 'get',
            url: `/api/flippy/v1/admin/staff/${id}`,
            withCredentials: true,          
          });
          
        dispatch({
            type:STAFF_DETAILS_SUCCESS,
            payload:data.staff,
        
        })
    } catch (error) {
        dispatch({
            type: STAFF_DETAILS_FAIL,
            payload:error.response.data.error
        }) 
    }
}









// clear Errors
export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })


}
