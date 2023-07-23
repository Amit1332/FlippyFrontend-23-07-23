import axios from "axios"
import {
    ALL_USER_REQUEST,
    ALL_USER_SUCCESS, 
    ALL_USER_FAIL ,


  

    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS, 
    DELETE_USER_FAIL ,


    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS, 
    USER_DETAILS_FAIL ,


    USER_COMPLETE_DETAILS_REQUEST,
    USER_COMPLETE_DETAILS_SUCCESS, 
    USER_COMPLETE_DETAILS_FAIL ,

    CLEAR_ERRORS, 
     
      
      
    } from "../constants/userConstant"

    // All user
export const getAllUser = ()=>async (dispatch)=>{
    try {
        
        dispatch({
            type:ALL_USER_REQUEST
        })

       const {data} = await axios({
            method: 'get',
            url: `/api/flippy/v1/admin/users`,
            withCredentials: false,
           
          });

        dispatch({
            type:ALL_USER_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: ALL_USER_FAIL,
            payload:error.response.data.error
        }) 
    }
}





// Delete user

export const deleteUser = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type:DELETE_USER_REQUEST
        })

       const {data} = await axios({
            method: 'delete',
            url: `/api/flippy/v1/admin/user/delete//${id}`,
            withCredentials: false,
           
          });

        dispatch({
            type:DELETE_USER_SUCCESS,
            payload:data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload:error.response.data.error
        }) 
    }
}



// user details
export const getUserDetails = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type: USER_DETAILS_REQUEST
        })

       const {data} = await axios({
            method: 'get',
            url: `/api/flippy/v1/admin/user/${id}`,
            withCredentials: false,          
          });

        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:data.user,
        
        })
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:error.response.data.error
        }) 
    }
}




// user Complete details
export const getUserCompleteDetails = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type: USER_COMPLETE_DETAILS_REQUEST
        })

       const {data} = await axios({
            method: 'get',
            url: `/api/flippy/v1/admin/seller/all/details/${id}`,
            withCredentials: false,          
          });

        dispatch({
            type:USER_COMPLETE_DETAILS_SUCCESS,
            payload:data,
        
        })
    } catch (error) {
        dispatch({
            type: USER_COMPLETE_DETAILS_FAIL,
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

