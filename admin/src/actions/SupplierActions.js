import axios from "axios"
import {
    ALL_SUPPLIER_REQUEST,
    ALL_SUPPLIER_SUCCESS, 
    ALL_SUPPLIER_FAIL ,


  

    DELETE_SUPPLIER_REQUEST,
    DELETE_SUPPLIER_SUCCESS, 
    DELETE_SUPPLIER_FAIL ,


    SUPPLIER_DETAILS_REQUEST,
    SUPPLIER_DETAILS_SUCCESS, 
    SUPPLIER_DETAILS_FAIL ,


    SUPPLIER_COMPLETE_DETAILS_REQUEST,
    SUPPLIER_COMPLETE_DETAILS_SUCCESS, 
    SUPPLIER_COMPLETE_DETAILS_FAIL ,

    CLEAR_ERRORS, 
     
      
      
    } from "../constants/supplierConstant"

    // All supplier
export const getAllSeller = ()=>async (dispatch)=>{
    try {
        
        dispatch({
            type:ALL_SUPPLIER_REQUEST
        })

       const {data} = await axios({
            method: 'get',
            url: `/api/flippy/v1/admin/seller`,
            withCredentials: false,
           
          });

        dispatch({
            type:ALL_SUPPLIER_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: ALL_SUPPLIER_FAIL,
            payload:error.response.data.error
        }) 
    }
}





// Delete supplier

export const deleteSupplier = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type:DELETE_SUPPLIER_REQUEST
        })

       const {data} = await axios({
            method: 'delete',
            url: `/api/flippy/v1/admin/seller/delete/${id}`,
            withCredentials: false,
           
          });

        dispatch({
            type:DELETE_SUPPLIER_SUCCESS,
            payload:data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_SUPPLIER_FAIL,
            payload:error.response.data.error
        }) 
    }
}



// supplier details
export const getSupplierDetails = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type: SUPPLIER_DETAILS_REQUEST
        })

       const {data} = await axios({
            method: 'get',
            url: `/api/flippy/v1/admin/seller/${id}`,
            withCredentials: false,          
          });

        dispatch({
            type:SUPPLIER_DETAILS_SUCCESS,
            payload:data.seller,
        
        })
    } catch (error) {
        dispatch({
            type: SUPPLIER_DETAILS_FAIL,
            payload:error.response.data.error
        }) 
    }
}




// supplier Complete details
export const getSupplierCompleteDetails = (id)=>async (dispatch)=>{
    try {
        
        dispatch({
            type: SUPPLIER_COMPLETE_DETAILS_REQUEST
        })

       const {data} = await axios({
            method: 'get',
            url: `/api/flippy/v1/admin/seller/all/details/${id}`,
            withCredentials: false,          
          });

        dispatch({
            type:SUPPLIER_COMPLETE_DETAILS_SUCCESS,
            payload:data,
        
        })
    } catch (error) {
        dispatch({
            type: SUPPLIER_COMPLETE_DETAILS_FAIL,
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

