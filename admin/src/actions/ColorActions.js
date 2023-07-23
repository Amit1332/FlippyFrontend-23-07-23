import axios from "axios";

import {
    
    ALL_COLORS_REQUEST,
    ALL_COLORS_SUCCESS,
    ALL_COLORS_FAIL,
    
    CREATE_COLORS_REQUEST,
    CREATE_COLORS_SUCCESS,
    CREATE_COLORS_FAIL,
    COLORS_RESET,
    
    
    
     DELETE_COLORS_REQUEST ,
     DELETE_COLORS_SUCCESS ,
     DELETE_COLORS_FAIL ,
     DELETE_COLORS_RESET,
    
    
    CLEAR_ERRORS
    
    
    
    } from "../constants/colorsConstant";

    //  get all attribute action
export const allColors = () =>async (dispatch) =>{
    try {
      dispatch({
        type: ALL_COLORS_REQUEST,
      });
  
    
      const {data} = await axios({
        method: 'get',
        url: `/api/flippy/v1/admin/get/all/color`,
        withCredentials: true,
       
      });
  
      dispatch({
        type: ALL_COLORS_SUCCESS,
        payload:data,
      });
  
  
  
  } catch (error) {
      dispatch({
          type:ALL_COLORS_FAIL,
          payload:error.response.data.error
      
      })
  }
  
  }
  
  
  // create attribute actions
  export const createColors = (colorData) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_COLORS_REQUEST,
      });
  
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "/api/flippy/v1/admin/add/color",
       colorData,
        config,
        {
          withCredentials: true,
        }
      );
  
      dispatch({
        type: CREATE_COLORS_SUCCESS,
        payload: data,
      });
  
  
  } catch (error) {
      dispatch({
          type:CREATE_COLORS_FAIL,
          payload:error.response.data.error
      
      })
  }
  
  }
  
  
  
  // delete attribute actions
  export const deleteColors = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type:DELETE_COLORS_REQUEST
        })
  
  
       const {data} = await axios({
            method: 'delete',
           url: `/api/flippy/v1/admin/delete/color/${id}`,          
            withCredentials: true,
           
          });
  
        dispatch({
            type: DELETE_COLORS_SUCCESS,
            payload:data.success
        })
    } catch (error) {
        dispatch({
            type:  DELETE_COLORS_FAIL,
            payload:error.response.data.error
        }) 
    }
  }
  
  
  
  export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}  