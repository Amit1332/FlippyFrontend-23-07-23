import { ALL_COUPON_REQUEST,
    ALL_COUPON_SUCCESS,
     ALL_COUPON_FAIL ,


     DELETE_COUPON_REQUEST,
     DELETE_COUPON_SUCCESS, 
     DELETE_COUPON_FAIL ,

     CREATE_COUPON_REQUEST,
      CREATE_COUPON_SUCCESS,
      CREATE_COUPON_FAIL,
      CREATE_COUPON_RESET,

     COUPON_DETAILS_REQUEST,
     COUPON_DETAILS_SUCCESS, 
     COUPON_DETAILS_FAIL ,
     
     
     CLEAR_ERRORS,
     DELETE_COUPON_RESET} from "../Constants/couponConstants"


//ALL COUPONS
export const CouponsReducer = (state = {coupon :{}}, action)=>{
    
switch (action.type) {
  case ALL_COUPON_REQUEST:        
     return{
          loading:true,
          coupons:[]
     }

     
     case ALL_COUPON_SUCCESS:        
     return{
          loading:false,
          coupons:action.payload.coupons,
          couponsCount:action.payload.couponsCount,
     }

     case ALL_COUPON_FAIL:        
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

  // create coupon reducer
  export const createCouponReducer = (state ={coupon:{}}, action )=>{
     switch (action.type) {
         case CREATE_COUPON_REQUEST:
             return{
                 ...state,
                 loading:true,
             }
             case CREATE_COUPON_SUCCESS:
                 return{
                     loading:false,
                     success:action.payload.success,
                     coupon:action.payload.brand,
                     
                 }
                 case CREATE_COUPON_FAIL:
                     return{
                         ...state,
                         loading:false,
                         error:action.payload
                     }
                     case CREATE_COUPON_RESET:
                     return{
                         ...state,
                        success:false
                     }
                 
                     case CLEAR_ERRORS:
                         return{
                             ...state,
                             error:null
                         }
     
         default:
             return state
     }
         
 }
 
 




// DELETE PRODUCT
export const CouponsDeleteReducer = (state = {}, action)=>{
   switch (action.type) {
       case  DELETE_COUPON_REQUEST:        
          return{ 
             ...state,
               loading:true,
              
          }
   
          case  DELETE_COUPON_SUCCESS:        
          return{
             ...state,
               loading:false,
               isDeleted:action.payload
              
          }
   
          case  DELETE_COUPON_FAIL:        
          return{
               ...state,            
               loading:false,
               error:action.payload
          }

          case  DELETE_COUPON_RESET:        
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









// COUPON DETAILS
export const CouponsDetailsReducer = (state = {product:{}}, action)=>{
   switch (action.type) {
       case COUPON_DETAILS_REQUEST:        
          return{
               loading:true,
               ...state
          }
   
          case  COUPON_DETAILS_SUCCESS:        
          return{
               loading:false,
               coupon:action.payload,
               user_id:action.payload.user_id       
          }
   
          case COUPON_DETAILS_FAIL:        
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