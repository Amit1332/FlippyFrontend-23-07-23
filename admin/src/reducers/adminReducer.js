import {
     LOGIN_REQUEST,
     LOGIN_SUCCESS,
     LOGIN_FAIL,


     LOGOUT_SUCCESS,
     LOGOUT_FAIL,

     LOAD_ADMIN_REQUEST,
     LOAD_ADMIN_SUCCESS,
     LOAD_ADMIN_FAIL,

     CLEAR_ERRORS } from "../constants/adminConstant"

//Login

export const adminReducer = (state = {admin:{}}, action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
            case LOAD_ADMIN_REQUEST:
            return{
                loading:true,
                isAuthenticatedAdmin:false
            }
            case LOGIN_SUCCESS:
            case LOAD_ADMIN_SUCCESS:

                return{
                    ...state,
                    loading:false,
                    isAuthenticatedAdmin:true,
                    admin:action.payload,

                }
                case LOGOUT_SUCCESS:
                        return{
                            loading:false,
                            admin:null,
                            isAuthenticatedAdmin:false
                        }
                case LOGIN_FAIL:
                    return{
                        ...state,
                        loading:false,
                        isAuthenticatedAdmin:false,
                        admin:null,
                        error:action.payload
                    }

                    case LOAD_ADMIN_FAIL:
                        return{
                            loading:false,
                            isAuthenticatedAdmin:false,
                            admin:null,
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