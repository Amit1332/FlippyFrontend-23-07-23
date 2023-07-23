import axios from "axios";
import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,

  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,

  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_DETAILS_FAIL,


  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAIL,

  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  
  

  CLEAR_ERRORS,
} from "../constants/categoryConstant";




//  get all category action
export const allCategory = () =>async (dispatch) =>{
  try {
    dispatch({
      type: ALL_CATEGORY_REQUEST,
    });

  
    const {data} = await axios({
      method: 'get',
      url: `/api/flippy/v1/admin/get/all/category`,
      withCredentials: false,
     
    });

    dispatch({
      type: ALL_CATEGORY_SUCCESS,
      payload:data,
    });



} catch (error) {
    dispatch({
        type:ALL_CATEGORY_FAIL,
        payload:error.response.data.error
    
    })
}

}


// create category actions
export const createCategory = (categorytData,selectedValue,icon) => async (dispatch) => {
categorytData.attributedata = selectedValue
categorytData.icon = icon



  try {
    dispatch({
      type: CREATE_CATEGORY_REQUEST,
    });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/flippy/v1/admin/add/category",
      categorytData,
      config,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: CREATE_CATEGORY_SUCCESS,
      payload: data,
    });


} catch (error) {
    dispatch({
        type:CREATE_CATEGORY_FAIL,
        payload:error.response.data.error
    
    })
}

}



// delete category actions
export const deleteCategory = (catId,subId)=>async (dispatch)=>{
  try {
      
      dispatch({
          type:DELETE_CATEGORY_REQUEST
      })


     const {data} = await axios({
          method: 'delete',
         url: `/api/flippy/v1/admin/delete/category/${subId}/${catId}`,          
          withCredentials: false,
         
        });

      dispatch({
          type: DELETE_CATEGORY_SUCCESS,
          payload:data.success
      })
  } catch (error) {
      dispatch({
          type:  DELETE_CATEGORY_FAIL,
          payload:error.response.data.error
      }) 
  }
}












// update category
export const updatecategory = (id,categoryData) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CATEGORY_REQUEST,
    });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `/api/flippy/v1/admin/update/category/${id}`,
      categoryData, 
      config,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: UPDATE_CATEGORY_SUCCESS,
      payload: data,
    });


} catch (error) {
    dispatch({
        type:UPDATE_CATEGORY_FAIL,
        payload:error.response.data.error
    
    })
}

}




// CATEGORY details
export const getCategoryDetails = (id)=>async (dispatch)=>{
  try {
      
      dispatch({
          type: CATEGORY_DETAILS_REQUEST
      })

     const {data} = await axios({
          method: 'get',
          url: `/api/flippy/v1/admin/get/single/category/${id}`,
          withCredentials: true,          
        });

      dispatch({
          type:CATEGORY_DETAILS_SUCCESS,
          payload:data.category,
      
      })
  } catch (error) {
      dispatch({
          type: CATEGORY_DETAILS_FAIL,
          payload:error.response.data.error
      }) 
  }
}




//CLEAR ERROR

export const clearErrors = ()=> async (dispatch)=>{
  dispatch({
      type:CLEAR_ERRORS
  })
}
;