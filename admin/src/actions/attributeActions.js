import axios from "axios";
import {
  ALL_ATTRIBUTE_REQUEST,
  ALL_ATTRIBUTE_SUCCESS,
  ALL_ATTRIBUTE_FAIL,

  CREATE_ATTRIBUTE_REQUEST,
  CREATE_ATTRIBUTE_SUCCESS,
  CREATE_ATTRIBUTE_FAIL,

  DELETE_ATTRIBUTE_REQUEST,
  DELETE_ATTRIBUTE_SUCCESS,
  DELETE_ATTRIBUTE_FAIL,
  

      
  DELETE_ATTRIBUTE_VALUES_REQUEST ,
  DELETE_ATTRIBUTE_VALUES_SUCCESS ,
  DELETE_ATTRIBUTE_VALUES_FAIL ,
  

  CLEAR_ERRORS,
} from "../constants/attributeConstant";




//  get all attribute action
export const allAttribute = () =>async (dispatch) =>{
  try {
    dispatch({
      type: ALL_ATTRIBUTE_REQUEST,
    });

  
    const {data} = await axios({
      method: 'get',
      url: `/api/flippy/v1/admin/get/all/attribute`,
      withCredentials: false,
     
    });

    dispatch({
      type: ALL_ATTRIBUTE_SUCCESS,
      payload:data,
    });



} catch (error) {
    dispatch({
        type:ALL_ATTRIBUTE_FAIL,
        payload:error.response.data.error
    
    })
}

}


// create attribute actions
export const createAttribute = (attributetData) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_ATTRIBUTE_REQUEST,
    });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/flippy/v1/admin/add/attribute",
     attributetData,
      config,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: CREATE_ATTRIBUTE_SUCCESS,
      payload: data,
    });


} catch (error) {
    dispatch({
        type:CREATE_ATTRIBUTE_FAIL,
        payload:error.response.data.error
    
    })
}

}



// delete attribute actions
export const deleteAttribute = (id)=>async (dispatch)=>{
  try {
      
      dispatch({
          type:DELETE_ATTRIBUTE_REQUEST
      })


     const {data} = await axios({
          method: 'delete',
         url: `/api/flippy/v1/admin/delete/attribute/${id}`,          
          withCredentials: false,
         
        });

      dispatch({
          type: DELETE_ATTRIBUTE_SUCCESS,
          payload:data.success
      })
  } catch (error) {
      dispatch({
          type:  DELETE_ATTRIBUTE_FAIL,
          payload:error.response.data.error
      }) 
  }
}





// delete Attribute value actions
export const deleteAttributeValue = (attrId,attrValId)=>async (dispatch)=>{
  try {
      
      dispatch({
          type:DELETE_ATTRIBUTE_VALUES_REQUEST
      })


     const {data} = await axios({
          method: 'delete',
         url: `/api/flippy/v1/admin/delete/attribute/atrval/${attrId}/${attrValId}`,          
          withCredentials: false,
         
        });

      dispatch({
          type: DELETE_ATTRIBUTE_VALUES_SUCCESS,
          payload:data.success
      })
  } catch (error) {
      dispatch({
          type: DELETE_ATTRIBUTE_VALUES_FAIL,
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
