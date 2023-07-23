import {
    
    ALL_ATTRIBUTE_REQUEST,
    ALL_ATTRIBUTE_SUCCESS,
    ALL_ATTRIBUTE_FAIL,
    
 CREATE_ATTRIBUTE_REQUEST,
    CREATE_ATTRIBUTE_SUCCESS,
    CREATE_ATTRIBUTE_FAIL,
    ATTRIBUTE_RESET,
    
    
    
     DELETE_ATTRIBUTE_REQUEST ,
     DELETE_ATTRIBUTE_SUCCESS ,
     DELETE_ATTRIBUTE_FAIL ,
     DELETE_ATTRIBUTE_RESET,
    
        
     DELETE_ATTRIBUTE_VALUES_REQUEST ,
     DELETE_ATTRIBUTE_VALUES_SUCCESS ,
     DELETE_ATTRIBUTE_VALUES_FAIL ,
     DELETE_ATTRIBUTE_VALUES_RESET,
    
    
    CLEAR_ERRORS
    
    
    
    } from "../constants/attributeConstant";
    
    
    
    // get all attribute reducer
    export const allAttributeReducer = (state = {allattri:{}},action)=>{
        switch (action.type) {
            case ALL_ATTRIBUTE_REQUEST:
                return {
                    loading:true,
                    allattribute:[]
                }
               case ALL_ATTRIBUTE_SUCCESS:
                return {
                    loading:false,
                    allattribute:action.payload.allattribute
                    
                }
        
                case ALL_ATTRIBUTE_FAIL:
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
    
    
    
    
    
    
    // create attribute reducer
    export const attributeReducer = (state ={attribute:{}}, action )=>{
        switch (action.type) {
            case CREATE_ATTRIBUTE_REQUEST:
                return{
                    ...state,
                    loading:true,
                }
                case CREATE_ATTRIBUTE_SUCCESS:
                    return{
                        loading:false,
                        success:action.payload.success,
                        attribute:action.payload.attribute,
                    }
                    case CREATE_ATTRIBUTE_FAIL:
                        return{
                            ...state,
                            loading:false,
                            error:action.payload
                        }
                        case ATTRIBUTE_RESET:
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
    
    
    // delete attribute reducer
    export const deleteAttributeReducer = (state = {}, action)=>{
        switch (action.type) {
            case  DELETE_ATTRIBUTE_REQUEST:        
               return{ 
                  ...state,
                    loading:true,
                   
               }
        
               case  DELETE_ATTRIBUTE_SUCCESS:        
               return{
                  ...state,
                    loading:false,
                    isDeleted:action.payload
                   
               }
        
               case  DELETE_ATTRIBUTE_FAIL:        
               return{
                    ...state,            
                    loading:false,
                    error:action.payload
               }
    
               case   DELETE_ATTRIBUTE_RESET:        
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
    
    // delete attribute value reducer

 export const deleteAttributeValReducer = (state = {}, action)=>{
            switch (action.type) {
                case   DELETE_ATTRIBUTE_VALUES_REQUEST:        
                   return{ 
                      ...state,
                        loading:true,
                       
                   }
            
                   case  DELETE_ATTRIBUTE_VALUES_SUCCESS:        
                   return{
                      ...state,
                        loading:false,
                        isDeletedValue:action.payload
                       
                   }
            
                   case  DELETE_ATTRIBUTE_VALUES_FAIL:        
                   return{
                        ...state,            
                        loading:false,
                        error:action.payload
                   }
        
                   case   DELETE_ATTRIBUTE_VALUES_RESET:        
                   return{
                       ...state,
                       isDeletedValue:false
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
    
    
    
    
    
    