import axios from "axios";
import {
  ALL_BRAND_REQUEST,
  ALL_BRAND_SUCCESS,
  ALL_BRAND_FAIL,

  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  CREATE_BRAND_FAIL,


  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
  UPDATE_BRAND_FAIL,
    
      BRAND_DETAILS_REQUEST,
      BRAND_DETAILS_SUCCESS, 
      BRAND_DETAILS_FAIL ,



  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAIL,
  
  

  CLEAR_ERRORS,
} from "../constants/brandConstant";




//  get all brand action
export const allBrand = () =>async (dispatch) =>{
  try {
    dispatch({
      type: ALL_BRAND_REQUEST,
    });

  
    const {data} = await axios({
      method: 'get',
      url: `/api/flippy/v1/admin/all/brands`,
      withCredentials: false,
     
    });

    dispatch({
      type: ALL_BRAND_SUCCESS,
      payload:data,
    });



} catch (error) {
    dispatch({
        type:ALL_BRAND_FAIL,
        payload:error.response.data.error
    
    })
}

}


// create brand actions
export const createBrand = (brandtData ,logo) => async (dispatch) => {
  brandtData.logo=logo
  try {
    dispatch({
      type: CREATE_BRAND_REQUEST,
    });

    console.log(brandtData)
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/flippy/v1/admin/add/brands",
     brandtData,
      config,
      {
        withCredentials:true,
      }
    );

    dispatch({
      type: CREATE_BRAND_SUCCESS,
      payload: data,
    });


} catch (error) {
    dispatch({
        type:CREATE_BRAND_FAIL,
        payload:error.response.data.error
    
    })
}

}




// update brand
export const updateBrand = (id,brandtData) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_BRAND_REQUEST,
    });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `/api/flippy/v1/admin/update/brands/${id}`,
     brandtData, 
      config,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: UPDATE_BRAND_SUCCESS,
      payload: data,
    });


} catch (error) {
    dispatch({
        type:UPDATE_BRAND_FAIL,
        payload:error.response.data.error
    
    })
}

}








// get brand details
export const getBrandDetails = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type: BRAND_DETAILS_REQUEST
        })

        console.log(id)
       const {data} = await axios({
            method: 'get',
            url: `/api/flippy/v1/admin/single/brands/${id}`,
            withCredentials: false,          
          });

          console.log(data)
        dispatch({
            type:BRAND_DETAILS_SUCCESS,
            payload:data.brand,
        
        })
    } catch (error) {
        dispatch({
            type: BRAND_DETAILS_FAIL,
            payload:error.response.data.error
        }) 
    }
}







// delete brand actions
export const deleteBrand = (id)=>async (dispatch)=>{
  try {
      
      dispatch({
          type:DELETE_BRAND_REQUEST
      })

     const {data} = await axios({
          method: 'delete',
          url: `/api/flippy/v1/admin/delete/brands/${id}`,
          withCredentials: false,
         
        });

      dispatch({
          type: DELETE_BRAND_SUCCESS,
          payload:data.success
      })
  } catch (error) {
      dispatch({
          type:  DELETE_BRAND_FAIL,
          payload:error.response.data.error
      }) 
  }
}







export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
;
