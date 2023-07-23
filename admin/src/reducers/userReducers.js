import { 
    ALL_USER_REQUEST,
     ALL_USER_SUCCESS, 
     ALL_USER_FAIL ,


     DELETE_USER_REQUEST,
     DELETE_USER_SUCCESS, 
     DELETE_USER_FAIL ,
     DELETE_USER_RESET,

 
     USER_DETAILS_REQUEST,
     USER_DETAILS_SUCCESS, 
     USER_DETAILS_FAIL ,


     USER_COMPLETE_DETAILS_REQUEST,
     USER_COMPLETE_DETAILS_SUCCESS, 
     USER_COMPLETE_DETAILS_FAIL ,


     CLEAR_ERRORS, 

           } from "../constants/userConstant"



           //ALL user
export const allUserReducer = (state = {users :{}}, action)=>{
    switch (action.type) {
        case ALL_USER_REQUEST:        
           return{
                loading:true,
                users:[]
           }
    
           
           case ALL_USER_SUCCESS:  
           return{
                loading:false,
                users:action.payload.users,
           }
    
           case ALL_USER_FAIL:        
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



    // DELETE User
export const deleteUserReducer = (state = {}, action)=>{
    switch (action.type) {
        case  DELETE_USER_REQUEST:        
           return{ 
              ...state,
                loading:true,
               
           }
    
           case  DELETE_USER_SUCCESS:        
           return{
              ...state,
                loading:false,
                isDeleted:action.payload
               
           }
    
           case  DELETE_USER_FAIL:        
           return{
                ...state,            
                loading:false,
                error:action.payload
           }

           case  DELETE_USER_RESET:        
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









// USER DETAILS
export const userrDetailsReducer = (state = {user:{}}, action)=>{
    switch (action.type) {
        case USER_DETAILS_REQUEST:        
           return{
                loading:true,
                ...state
           }
    
           case  USER_DETAILS_SUCCESS:        
           return{
                loading:false,
                user:action.payload,
           }
    
           case USER_DETAILS_FAIL:        
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




    // user DETAILS
export const userCompleteDetailsReducer = (state = {user:{}}, action)=>{
    switch (action.type) {
        case USER_COMPLETE_DETAILS_REQUEST:        
           return{
                loading:true,
                ...state
           }
    
           case  USER_COMPLETE_DETAILS_SUCCESS:        
           return{
                loading:false,
                user:action.payload.selleralldetails,
           }
    
           case USER_COMPLETE_DETAILS_FAIL:        
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