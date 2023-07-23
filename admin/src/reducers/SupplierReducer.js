import { 
    ALL_SUPPLIER_REQUEST,
     ALL_SUPPLIER_SUCCESS, 
     ALL_SUPPLIER_FAIL ,


     DELETE_SUPPLIER_REQUEST,
     DELETE_SUPPLIER_SUCCESS, 
     DELETE_SUPPLIER_FAIL ,
     DELETE_SUPPLIER_RESET,

 
     SUPPLIER_DETAILS_REQUEST,
     SUPPLIER_DETAILS_SUCCESS, 
     SUPPLIER_DETAILS_FAIL ,


     SUPPLIER_COMPLETE_DETAILS_REQUEST,
     SUPPLIER_COMPLETE_DETAILS_SUCCESS, 
     SUPPLIER_COMPLETE_DETAILS_FAIL ,


     CLEAR_ERRORS, 

           } from "../constants/supplierConstant"



           //ALL Supplier
export const allSupplierReducer = (state = {seller :{}}, action)=>{
    switch (action.type) {
        case ALL_SUPPLIER_REQUEST:        
           return{
                loading:true,
                seller:[]
           }
    
           
           case ALL_SUPPLIER_SUCCESS:  
           return{
                loading:false,
                seller:action.payload.seller,
                totalSeller:action.payload.totalSeller,
           }
    
           case ALL_SUPPLIER_FAIL:        
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



    // DELETE Supplier
export const deleteSupplierReducer = (state = {}, action)=>{
    switch (action.type) {
        case  DELETE_SUPPLIER_REQUEST:        
           return{ 
              ...state,
                loading:true,
               
           }
    
           case  DELETE_SUPPLIER_SUCCESS:        
           return{
              ...state,
                loading:false,
                isDeleted:action.payload
               
           }
    
           case  DELETE_SUPPLIER_FAIL:        
           return{
                ...state,            
                loading:false,
                error:action.payload
           }

           case  DELETE_SUPPLIER_RESET:        
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









// supplier DETAILS
export const supplierDetailsReducer = (state = {supplier:{}}, action)=>{
    switch (action.type) {
        case SUPPLIER_DETAILS_REQUEST:        
           return{
                loading:true,
                ...state
           }
    
           case  SUPPLIER_DETAILS_SUCCESS:        
           return{
                loading:false,
                supplier:action.payload,
           }
    
           case SUPPLIER_DETAILS_FAIL:        
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




    // supplier DETAILS
export const supplierCompleteDetailsReducer = (state = {supplier:{}}, action)=>{
    switch (action.type) {
        case SUPPLIER_COMPLETE_DETAILS_REQUEST:        
           return{
                loading:true,
                ...state
           }
    
           case  SUPPLIER_COMPLETE_DETAILS_SUCCESS:        
           return{
                loading:false,
                supplier:action.payload.selleralldetails,
                sellerProfile:action.payload.sellerProfile
           }
    
           case SUPPLIER_COMPLETE_DETAILS_FAIL:        
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