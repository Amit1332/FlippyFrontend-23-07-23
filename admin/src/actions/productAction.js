import axios from "axios"
import { ALL_PRODUCT_REQUEST,
     ALL_PRODUCT_SUCCESS,
      ALL_PRODUCT_FAIL ,


      DELETE_PRODUCT_REQUEST,
      DELETE_PRODUCT_SUCCESS, 
      DELETE_PRODUCT_FAIL ,

      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS, 
      PRODUCT_DETAILS_FAIL ,
      
      
      CLEAR_ERRORS} from "../constants/productConstant"


// All product
export const getProduct = ()=>async (dispatch)=>{
    try {
        
        dispatch({
            type:ALL_PRODUCT_REQUEST
        })

       const {data} = await axios({
            method: 'get',
            url: `/api/flippy/v1/admin/all/product`,
            withCredentials: false,
           
          });

        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload:error.response.data.error
        }) 
    }
}


// Delete product

export const deleteProduct = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type:DELETE_PRODUCT_REQUEST
        })

       const {data} = await axios({
            method: 'delete',
            url: `/api/flippy/v1/admin/delete/product/${id}`,
            withCredentials: false,
           
          });

        dispatch({
            type:DELETE_PRODUCT_SUCCESS,
            payload:data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload:error.response.data.error
        }) 
    }
}



// product details
export const getProductDetails = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        })

       const {data} = await axios({
            method: 'get',
            url: `/api/flippy/v1/admin/single/product/${id}`,
            withCredentials: false,          
          });

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data.product,
        
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
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
