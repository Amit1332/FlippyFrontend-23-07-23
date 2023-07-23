import {
    
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    
        CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAIL,
    CATEGORY_RESET,
    
    
    UPDATE_CATEGORY_REQUEST ,
    UPDATE_CATEGORY_SUCCESS ,
     UPDATE_CATEGORY_FAIL ,
     UPDATE_CATEGORY_RESET,
    
    
     CATEGORY_DETAILS_REQUEST,
     CATEGORY_DETAILS_SUCCESS,
     CATEGORY_DETAILS_FAIL,
    
    
     DELETE_CATEGORY_REQUEST ,
     DELETE_CATEGORY_SUCCESS ,
     DELETE_CATEGORY_FAIL ,
     DELETE_CATEGORY_RESET,
    
    
    
    
    CLEAR_ERRORS
    
    
    
    } from "../constants/categoryConstant";
    
    
    
    // get all category reducer
    export const allCategoryReducer = (state = {allcaty:{}},action)=>{
        switch (action.type) {
            case ALL_CATEGORY_REQUEST:
                return {
                    loading:true,
                    allcategory:[]
                }
               case ALL_CATEGORY_SUCCESS:
                return {
                    loading:false,
                    allcategory:action.payload.allcategory
                    
                }
        
                case ALL_CATEGORY_FAIL:
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
    // create category reducer
    export const categoryReducer = (state ={category:{}}, action )=>{
        switch (action.type) {
            case CREATE_CATEGORY_REQUEST:
                return{
                    ...state,
                    loading:true,
                }
                case CREATE_CATEGORY_SUCCESS:
                    return{
                        loading:false,
                        success:action.payload.success,
                        category:action.payload.category,
                    }
                    case CREATE_CATEGORY_FAIL:
                        return{
                            ...state,
                            loading:false,
                            error:action.payload
                        }
                        case CATEGORY_RESET:
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
    
    
    // delete category reducer
    export const deleteCategoryReducer = (state = {}, action)=>{
        switch (action.type) {
            case  DELETE_CATEGORY_REQUEST:        
               return{ 
                  ...state,
                    loading:true,
                   
               }
        
               case  DELETE_CATEGORY_SUCCESS:        
               return{
                  ...state,
                    loading:false,
                    isDeleted:action.payload
                   
               }
        
               case  DELETE_CATEGORY_FAIL:        
               return{
                    ...state,            
                    loading:false,
                    error:action.payload
               }
    
               case   DELETE_CATEGORY_RESET:        
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
    
    // category DETAILS
    export const CategoryDetailsReducer = (state = {category:{}}, action)=>{
        switch (action.type) {
            case CATEGORY_DETAILS_REQUEST:        
               return{
                    loading:true,
                    ...state
               }
        
               case  CATEGORY_DETAILS_SUCCESS:        
               return{
                    loading:false,
                    category:action.payload,
                    user_id:action.payload.user_id       
               }
        
               case CATEGORY_DETAILS_FAIL:        
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
        
    
    
    
    
    //UPDATE CATEGORY 
    
        export const updatecategoryReducer = (state ={category:{}}, action )=>{
            switch (action.type) {
                case UPDATE_CATEGORY_REQUEST:
                    return{
                        ...state,
                        loading:true,
                    }
                    case UPDATE_CATEGORY_SUCCESS:
                        return{
                            loading:false,
                            success:action.payload.success,
                            category:action.payload.category,
                            
                        }
                        case UPDATE_CATEGORY_FAIL:
                            return{
                                ...state,
                                loading:false,
                                error:action.payload
                            }
                            case UPDATE_CATEGORY_RESET:
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
    
        
    
    
    
    
    
    
    
    