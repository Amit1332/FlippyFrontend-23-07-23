import { 
    ALL_STAFF_REQUEST,
     ALL_STAFF_SUCCESS, 
     ALL_STAFF_FAIL ,


     DELETE_STAFF_REQUEST,
     DELETE_STAFF_SUCCESS, 
     DELETE_STAFF_FAIL ,
     DELETE_STAFF_RESET,

 
     ADD_NEW_STAFF_REQUEST,
    ADD_NEW_STAFF_SUCCESS,
    ADD_NEW_STAFF_FAIL,
    ADD_NEW_STAFF_RESET,

     STAFF_DETAILS_REQUEST,
     STAFF_DETAILS_SUCCESS, 
     STAFF_DETAILS_FAIL ,


     STAFF_COMPLETE_DETAILS_REQUEST,
     STAFF_COMPLETE_DETAILS_SUCCESS, 
     STAFF_COMPLETE_DETAILS_FAIL ,


   



     CLEAR_ERRORS,


     UPDATE_STAFF_REQUEST,
     UPDATE_STAFF_SUCCESS,
     UPDATE_STAFF_FAIL,
     UPDATE_STAFF_RESET, 

           } from "../constants/staffConstant"



           //ALL staff
export const allStaffReducer = (state = {staffs :{}}, action)=>{
    switch (action.type) {
        case ALL_STAFF_REQUEST:        
           return{
                loading:true,
                staffs:[]
           }
    
           
           case ALL_STAFF_SUCCESS:  
           return{
                loading:false,
                staffs:action.payload.allstaff,
           }
    
           case ALL_STAFF_FAIL:        
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

    //update staff details
    export const updatestaffReducer = (state ={staffs:{}}, action )=>{
        switch (action.type) {
            case UPDATE_STAFF_REQUEST:
                return{
                    ...state,
                    loading:true,
                }
                case UPDATE_STAFF_SUCCESS:
                    return{
                        loading:false,
                        success:action.payload.success,
                        staffs:action.payload.updatestaffs,
                        
                    }
                    case UPDATE_STAFF_FAIL:
                        return{
                            ...state,
                            loading:false,
                            error:action.payload
                        }
                        case UPDATE_STAFF_RESET:
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


    // DELETE STAFF
export const deleteStaffReducer = (state = {}, action)=>{
    switch (action.type) {
        case  DELETE_STAFF_REQUEST:        
           return{ 
              ...state,
                loading:true,
               
           }
    
           case  DELETE_STAFF_SUCCESS:        
           return{
              ...state,
                loading:false,
                isDeleted:action.payload
               
           }
    
           case  DELETE_STAFF_FAIL:        
           return{
                ...state,            
                loading:false,
                error:action.payload
           }

           case  DELETE_STAFF_RESET:        
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



// add staff
    export const createStaffReducer = (state ={staff:{}}, action )=>{
        switch (action.type) {
            case ADD_NEW_STAFF_REQUEST:
                return{
                    ...state,
                    loading:true,
                }
                case ADD_NEW_STAFF_SUCCESS:
                    return{
                        loading:false,
                        success:action.payload.success,
                        staff:action.payload.newstaff,
                        
                    }
                    case ADD_NEW_STAFF_FAIL:
                        return{
                            ...state,
                            loading:false,
                            error:action.payload
                        }
                        case ADD_NEW_STAFF_RESET:
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

















// STAFF DETAILS
export const staffDetailsReducer = (state = {staff:{}}, action)=>{
    switch (action.type) {
        case STAFF_DETAILS_REQUEST:        
           return{
                loading:true,
                ...state
           }
    
           case  STAFF_DETAILS_SUCCESS:
            // console.log(action);        
           return{
                loading:false,
                staff:action.payload,
           }
    
           case STAFF_DETAILS_FAIL:        
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




    // STAFF DETAILS
export const staffCompleteDetailsReducer = (state = {staff:{}}, action)=>{
    switch (action.type) {
        case STAFF_COMPLETE_DETAILS_REQUEST:        
           return{
                loading:true,
                ...state
           }
    
           case  STAFF_COMPLETE_DETAILS_SUCCESS:        
           return{
                loading:false,
                staff:action.payload.staff,
           }
    
           case STAFF_COMPLETE_DETAILS_FAIL:        
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