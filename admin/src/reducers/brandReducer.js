import {
    
    ALL_BRAND_REQUEST,
    ALL_BRAND_SUCCESS,
    ALL_BRAND_FAIL,
    
    CREATE_BRAND_REQUEST,
    CREATE_BRAND_SUCCESS,
    CREATE_BRAND_FAIL,
    BRAND_RESET,


    UPDATE_BRAND_REQUEST,
    UPDATE_BRAND_SUCCESS,
    UPDATE_BRAND_FAIL,
    UPDATE_BRAND_RESET,
      
    

      BRAND_DETAILS_REQUEST,
      BRAND_DETAILS_SUCCESS, 
      BRAND_DETAILS_FAIL ,


     DELETE_BRAND_REQUEST ,
     DELETE_BRAND_SUCCESS ,
     DELETE_BRAND_FAIL ,
     DELETE_BRAND_RESET,
    
    
    
    
    CLEAR_ERRORS
    
    
    
    } from "../constants/brandConstant";
    
    
    
    // get all brand reducer
    export const allBrandReducer = (state = {brand:{}},action)=>{
        switch (action.type) {
            case ALL_BRAND_REQUEST:
                return {
                    loading:true,
                    brands:[]
                }
               case ALL_BRAND_SUCCESS:
                return {
                    loading:false,
                    brands:action.payload.brands
                    
                }
        
                case ALL_BRAND_FAIL:
                    return {
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
    
    
    
    
    
    
    // create brand reducer
    export const brandReducer = (state ={brand:{}}, action )=>{
        switch (action.type) {
            case CREATE_BRAND_REQUEST:
                return{
                    ...state,
                    loading:true,
                }
                case CREATE_BRAND_SUCCESS:
                    return{
                        loading:false,
                        success:action.payload.success,
                        brand:action.payload.brand,
                        
                    }
                    case CREATE_BRAND_FAIL:
                        return{
                            ...state,
                            loading:false,
                            error:action.payload
                        }
                        case BRAND_RESET:
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
    
    


 // update brand reducer
 export const updatebrandReducer = (state ={brand:{}}, action )=>{
    switch (action.type) {
        case UPDATE_BRAND_REQUEST:
            return{
                ...state,
                loading:true,
            }
            case UPDATE_BRAND_SUCCESS:
                return{
                    loading:false,
                    success:action.payload.success,
                    brand:action.payload.brand,
                    
                }
                case UPDATE_BRAND_FAIL:
                    return{
                        ...state,
                        loading:false,
                        error:action.payload
                    }
                    case UPDATE_BRAND_RESET:
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






// BRAND DETAILS
export const BrandDetailsReducer = (state = {brand:{}}, action)=>{
    switch (action.type) {
        case BRAND_DETAILS_REQUEST:        
           return{
                loading:true,
                ...state
           }
    
           case  BRAND_DETAILS_SUCCESS:        
           return{
                loading:false,
                brand:action.payload,
           }
    
           case BRAND_DETAILS_FAIL:        
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


    // delete brand reducer
    export const deleteBrandReducer = (state = {}, action)=>{
        switch (action.type) {
            case  DELETE_BRAND_REQUEST:        
               return{ 
                  ...state,
                    loading:true,
                   
               }
        
               case  DELETE_BRAND_SUCCESS:        
               return{
                  ...state,
                    loading:false,
                    isDeleted:action.payload
                   
               }
        
               case  DELETE_BRAND_FAIL:        
               return{
                    ...state,            
                    loading:false,
                    error:action.payload
               }
    
               case   DELETE_BRAND_RESET:        
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
    
    
    
    
    
    
    
    