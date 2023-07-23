import {

    REGISTER_SELLER_REQUEST,
    REGISTER_SELLER_SUCCESS,
    REGISTER_SELLER_FAIL,


    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,



    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    LOAD_SELLER_REQUEST,
    LOAD_SELLER_SUCCESS,
    LOAD_SELLER_FAIL,


    
    UPDATE_SELLER_DETAILS_REQUEST,
    UPDATE_SELLER_DETAILS_SUCCESS,
    UPDATE_SELLER_DETAILS_FAIL,
    UPDATE_SELLER_DETAILS_RESET,

    UPDATE_SELLER_BANK_DETAILS_REQUEST,
    UPDATE_SELLER_BANK_DETAILS_SUCCESS,
    UPDATE_SELLER_BANK_DETAILS_FAIL,
    UPDATE_SELLER_BANK_DETAILS_RESET,

    UPDATE_SELLER_ADDRESS_DETAILS_REQUEST,
    UPDATE_SELLER_ADDRESS_DETAILS_SUCCESS,
    UPDATE_SELLER_ADDRESS_DETAILS_FAIL,
    UPDATE_SELLER_ADDRESS_DETAILS_RESET,

    UPDATE_SELLER_SHOP_DETAILS_REQUEST,
    UPDATE_SELLER_SHOP_DETAILS_SUCCESS,
    UPDATE_SELLER_SHOP_DETAILS_FAIL,
    UPDATE_SELLER_SHOP_DETAILS_RESET,

    

    GET_SELLER_DETAILS_REQUEST,
    GET_SELLER_DETAILS_SUCCESS,
    GET_SELLER_DETAILS_FAIL,



    CLEAR_ERRORS } from "../Constants/SellerConstant"

//Login

export const SellerReducer = (state = {seller:{}}, action)=>{
   switch (action.type) {
       case LOGIN_REQUEST:
        case   REGISTER_SELLER_REQUEST:
           case LOAD_SELLER_REQUEST:
           return{
               loading:true,
               isAuthenticatedSeller:false,
           }
           case LOGIN_SUCCESS:
           case REGISTER_SELLER_SUCCESS:
           case LOAD_SELLER_SUCCESS:

               return{
                   ...state,
                   loading:false,
                   isAuthenticatedSeller:true,
                   seller:action.payload,

               }
               case LOGOUT_SUCCESS:
                       return{
                           loading:false,
                           seller:null,
                           isAuthenticatedSeller:false
                       }
               case LOGIN_FAIL:
                case REGISTER_SELLER_FAIL:
                   return{
                       ...state,
                       loading:false,
                       isAuthenticatedSeller:false,
                       seller:null,
                       error:action.payload
                   }

                   case LOAD_SELLER_FAIL:
                       return{
                           loading:false,
                           isAuthenticatedSeller:false,
                           seller:null,
                           error:action.payload
                       }

                       case LOGOUT_FAIL:
                           return{
                               ...state, 
                               loading:false,                              
                               error:action.payload
                           }


                   case CLEAR_ERRORS:
                       return{
                           ...state,
                           error:null
                       }
       default:
         return state;
   }
 
   }





   
//    update seller details

export const updateSellerDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_SELLER_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
     
      case UPDATE_SELLER_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
 
      case UPDATE_SELLER_DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      
      case UPDATE_SELLER_DETAILS_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };






   
//    update seller bank details

export const updateSellerBankDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SELLER_BANK_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
   
    case UPDATE_SELLER_BANK_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_SELLER_BANK_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    case UPDATE_SELLER_BANK_DETAILS_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};





   
//    update seller address details

export const updateSellerAddressDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SELLER_ADDRESS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
   
    case UPDATE_SELLER_ADDRESS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_SELLER_ADDRESS_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    case UPDATE_SELLER_ADDRESS_DETAILS_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};





   
//    update seller shop details

export const updateSellerShopDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SELLER_SHOP_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
   
    case UPDATE_SELLER_SHOP_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_SELLER_SHOP_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    case UPDATE_SELLER_SHOP_DETAILS_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};




  export const getSellertDetailsReducer = (state = { selleralldetails: {} }, action) => {
    switch (action.type) {
      case GET_SELLER_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case GET_SELLER_DETAILS_SUCCESS:
        return {
          loading: false,
          selleralldetails: action.payload,
          bank_details:action.payload.bank_details,
          pickup_address:action.payload.pickup_address,
          supplier_details:action.payload.supplier_details


        };
      case GET_SELLER_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };

