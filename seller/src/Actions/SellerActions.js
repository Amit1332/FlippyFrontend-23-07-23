import axios from "axios"
import {

    
    REGISTER_SELLER_REQUEST,
    REGISTER_SELLER_SUCCESS,
    REGISTER_SELLER_FAIL, 

     LOGIN_REQUEST,
    LOGIN_SUCCESS ,
    LOGIN_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    LOAD_SELLER_REQUEST,
    LOAD_SELLER_SUCCESS,
    LOAD_SELLER_FAIL,


    GET_SELLER_DETAILS_REQUEST,
    GET_SELLER_DETAILS_SUCCESS,
    GET_SELLER_DETAILS_FAIL,


    UPDATE_SELLER_BANK_DETAILS_REQUEST,
    UPDATE_SELLER_BANK_DETAILS_SUCCESS,
    UPDATE_SELLER_BANK_DETAILS_FAIL,



    UPDATE_SELLER_ADDRESS_DETAILS_REQUEST,
    UPDATE_SELLER_ADDRESS_DETAILS_SUCCESS,
    UPDATE_SELLER_ADDRESS_DETAILS_FAIL,

    UPDATE_SELLER_SHOP_DETAILS_REQUEST,
    UPDATE_SELLER_SHOP_DETAILS_SUCCESS,
    UPDATE_SELLER_SHOP_DETAILS_FAIL,

    UPDATE_SELLER_DETAILS_REQUEST,
    UPDATE_SELLER_DETAILS_SUCCESS,
    UPDATE_SELLER_DETAILS_FAIL,


    CLEAR_ERRORS


} from "../Constants/SellerConstant";





// registerUser
export const registerSeller = (sellerData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_SELLER_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(`/api/flippy/v1/seller_signup`, sellerData, config);
  
      dispatch({ type: REGISTER_SELLER_SUCCESS, payload: data.seller });
    } catch (error) {
      dispatch({
        type: REGISTER_SELLER_FAIL,
        payload: error.response.data.error,
      });
    }
  };


    





// login 
export const login =(email,password)=> async (dispatch) =>{
try {
    dispatch({
        type:LOGIN_REQUEST
    })

        const config = { headers:{"Content-Type":"application/json"}}
        
        const {data} =await axios.post('/api/flippy/v1/seller_login',
        {email,password},
        config,
       {
        withCredentials:true
       }
        )
        dispatch({
        type:LOGIN_SUCCESS,
        payload:data.seller,
        
    })

    
} catch (error) {
    dispatch({
        type:LOGIN_FAIL,
        payload:error.response.data.error
    
    })
}

}





// load user
export const loadSeller =()=> async (dispatch) =>{
    try {
        dispatch({
            type:LOAD_SELLER_REQUEST
        })
    
            const {data} =await axios.get('/api/flippy/v1/seller/me')
            dispatch({
            type:LOAD_SELLER_SUCCESS,
            payload:data.seller,
            
        })
    
        
    } catch (error) {
        dispatch({
            type:LOAD_SELLER_FAIL,
            payload:error.response.data.error
        
        })
    }
    
    }



    export const logout =()=> async (dispatch) =>{
        try {     
        await axios.get('/api/flippy/v1/seller/logout')
                dispatch({
                type: LOGOUT_SUCCESS             
            })                
        } catch (error) {
            dispatch({
                type:LOGOUT_FAIL,
                payload:error.response.data.error
            
            })
        }
        
        }




        




        
// get Seller complete details
export const getSellerDetails = () => async (dispatch) => {
    try {
      dispatch({ type: GET_SELLER_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/flippy/v1/seller/me/show/complete/details`);
      dispatch({
        type: GET_SELLER_DETAILS_SUCCESS,
        payload: data.selleralldetails,
        
      });
    } catch (error) {
      dispatch({
        type: GET_SELLER_DETAILS_FAIL,
        payload: error.response.data.error,
      });
    }
  };





  
// update seller details
  export const updateSellerDetails = (sellerDetails) => async (dispatch) => {
      try {
        dispatch({ type: UPDATE_SELLER_DETAILS_REQUEST });
    
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        
        const { data } = await axios.put(`/api/flippy/v1/seller/me/update/complete/details`,
         sellerDetails,
          config);
    
        dispatch({
          type: UPDATE_SELLER_DETAILS_SUCCESS,
          payload: data.success,
        });
      } catch (error) {
        dispatch({
          type: UPDATE_SELLER_DETAILS_FAIL,
          payload: error.response.data.error,
        });
      }
    };




      
// update seller bank details
  export const updateSellerBankDetails = (sellerDetails) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_SELLER_BANK_DETAILS_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      
      const { data } = await axios.put(`/api/flippy/v1/seller/me/update/bank/details`,
       sellerDetails,
        config);
  
      dispatch({
        type: UPDATE_SELLER_BANK_DETAILS_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SELLER_BANK_DETAILS_FAIL,
        payload: error.response.data.error,
      });
    }
  };






      
// update seller address details
export const updateSellerAddressDetails = (sellerDetails) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SELLER_ADDRESS_DETAILS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    
    const { data } = await axios.put(`/api/flippy/v1/seller/me/update/address/details`,
     sellerDetails,
      config);

    dispatch({
      type: UPDATE_SELLER_ADDRESS_DETAILS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SELLER_ADDRESS_DETAILS_FAIL,
      payload: error.response.data.error,
    });
  }
};






// update seller shop details
export const updateSellerShopDetails = (sellerDetails) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SELLER_SHOP_DETAILS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    
    const { data } = await axios.put(`/api/flippy/v1/seller/me/update/supplier/shop/details`,
     sellerDetails,
      config);

    dispatch({
      type: UPDATE_SELLER_SHOP_DETAILS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SELLER_SHOP_DETAILS_FAIL,
      payload: error.response.data.error,
    });
  }
};









export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
