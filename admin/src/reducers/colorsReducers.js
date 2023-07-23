import {
    
    ALL_COLORS_REQUEST,
    ALL_COLORS_SUCCESS,
    ALL_COLORS_FAIL,
    
    CREATE_COLORS_REQUEST,
    CREATE_COLORS_SUCCESS,
    CREATE_COLORS_FAIL,
    COLORS_RESET,
    
    
    
     DELETE_COLORS_REQUEST ,
     DELETE_COLORS_SUCCESS ,
     DELETE_COLORS_FAIL ,
     DELETE_COLORS_RESET,
    
    
    CLEAR_ERRORS
    
    
    
    } from "../constants/colorsConstant";
    
    
    
    // get all COLORS reducer
    export const allColorsReducer = (state = {allcolor:{}},action)=>{
        switch (action.type) {
            case ALL_COLORS_REQUEST:
                return {
                    loading:true,
                    allcolors:[]
                }
               case ALL_COLORS_SUCCESS:
                return {
                    loading:false,
                    allcolors:action.payload.allcolors
                    
                }
        
                case ALL_COLORS_FAIL:
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
    
    
    
    
    
    
    // create COLORS reducer
    export const ColorReducer = (state ={color:{}}, action )=>{
        switch (action.type) {
            case CREATE_COLORS_REQUEST:
                return{
                    ...state,
                    loading:true,
                }
                case CREATE_COLORS_SUCCESS:
                    return{
                        loading:false,
                        success:action.payload.success,
                        color:action.payload.color,
                    }
                    case CREATE_COLORS_FAIL:
                        return{
                            ...state,
                            loading:false,
                            error:action.payload
                        }
                        case COLORS_RESET:
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
    
    
    // delete COLORS reducer
    export const deleteColorReducer = (state = {}, action)=>{
        switch (action.type) {
            case  DELETE_COLORS_REQUEST:        
               return{ 
                  ...state,
                    loading:true,
                   
               }
        
               case  DELETE_COLORS_SUCCESS:        
               return{
                  ...state,
                    loading:false,
                    isDeleted:action.payload
                   
               }
        
               case  DELETE_COLORS_FAIL:        
               return{
                    ...state,            
                    loading:false,
                    error:action.payload
               }
    
               case   DELETE_COLORS_RESET:        
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
  