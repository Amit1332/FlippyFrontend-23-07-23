import { 
      ALL_PRODUCT_REQUEST,
      ALL_PRODUCT_SUCCESS, 
      ALL_PRODUCT_FAIL ,


      NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESET,

      DELETE_PRODUCT_REQUEST,
      DELETE_PRODUCT_SUCCESS, 
      DELETE_PRODUCT_FAIL ,
      DELETE_PRODUCT_RESET,

  
      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS, 
      PRODUCT_DETAILS_FAIL ,



      CLEAR_ERRORS, 

            } from "../Constants/productConstant"

//ALL PRODUCT
export const ProductsReducer = (state = {product :{}}, action)=>{
switch (action.type) {
    case ALL_PRODUCT_REQUEST:        
       return{
            loading:true,
            products:[]
       }

       
       case ALL_PRODUCT_SUCCESS:        
       return{
            loading:false,
            products:action.payload.products,
            productCount:action.payload.productCount,
            filterProductCount:action.payload.filterProductCount,
       }

       case ALL_PRODUCT_FAIL:        
       return{
            loading:false,
            error:action.payload
       }
       case CLEAR_ERRORS:        
       return{
           ...state,
           error:null
       }
    default:
        return state
};



}



// Add New Product
export const newProductReducer = (state = { product: {} }, action) => {
     switch (action.type) {
       case NEW_PRODUCT_REQUEST:
         return {
           ...state,
           loading: true,
         };
       case NEW_PRODUCT_SUCCESS:
         return {
           loading: false,
           success: action.payload.success,
           product: action.payload.product,
         };
       case NEW_PRODUCT_FAIL:
         return {
           ...state,
           loading: false,
           error: action.payload,
         };
       case NEW_PRODUCT_RESET:
         return {
           ...state,
           success: false,
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





// DELETE PRODUCT
export const ProductReducer = (state = {}, action)=>{
     switch (action.type) {
         case  DELETE_PRODUCT_REQUEST:        
            return{ 
               ...state,
                 loading:true,
                
            }
     
            case  DELETE_PRODUCT_SUCCESS:        
            return{
               ...state,
                 loading:false,
                 isDeleted:action.payload
                
            }
     
            case  DELETE_PRODUCT_FAIL:        
            return{
                 ...state,            
                 loading:false,
                 error:action.payload
            }

            case  DELETE_PRODUCT_RESET:        
            return{
                ...state,
                isDeleted:false
            }
            case CLEAR_ERRORS:        
            return{
                ...state,
                error:null
            }
         default:
             return state
     };
     
     
     
     }









// PRODUCT DETAILS
export const ProductDetailsReducer = (state = {product:{}}, action)=>{
     switch (action.type) {
         case PRODUCT_DETAILS_REQUEST:        
            return{
                 loading:true,
                 ...state
            }
     
            case  PRODUCT_DETAILS_SUCCESS:        
            return{
                 loading:false,
                 product:action.payload,
                 user_id:action.payload.user_id       
            }
     
            case PRODUCT_DETAILS_FAIL:        
            return{
                 loading:false,
                 error:action.payload
            }
            case CLEAR_ERRORS:        
            return{
                ...state,
                error:null
            }
         default:
             return state
     };
     
     
     
     
     
     
     
     
     
     
     }