import axios from "axios"
import {
     LOGIN_REQUEST,
    LOGIN_SUCCESS ,
    LOGIN_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    LOAD_ADMIN_REQUEST,
    LOAD_ADMIN_SUCCESS,
    LOAD_ADMIN_FAIL,



    CLEAR_ERRORS


} from "../constants/adminConstant";





// login 
export const login =(email,password)=> async (dispatch) =>{
try {
    dispatch({
        type:LOGIN_REQUEST
    })

        const config = { headers:{"Content-Type":"application/json"}}
        const {data} =await axios.post('/api/flippy/v1/admin_login',
        {email,password},
        config,
       {
        withCredentials:true
       }
        )
        dispatch({
        type:LOGIN_SUCCESS,
        payload:data.admin,
        
    })

    
} catch (error) {
    dispatch({
        type:LOGIN_FAIL,
        payload:error.response.data.error
    
    })
}

}





// load user
export const loadAdmin =()=> async (dispatch) =>{
    try {
        dispatch({
            type:LOAD_ADMIN_REQUEST
        })
    
            const {data} =await axios.get('/api/flippy/v1/admin/me')
            dispatch({
            type:LOAD_ADMIN_SUCCESS,
            payload:data.admin,
            admintoken:data.admintoken
            
        })
    
        
    } catch (error) {
        dispatch({
            type:LOAD_ADMIN_FAIL,
            payload:error.response.data.error
        
        })
    }
    
    }



    export const logout =()=> async (dispatch) =>{
        try {     
        await axios.get('/api/flippy/v1/admin/logout')
                dispatch({
                type: LOGOUT_SUCCESS             
            })
        
            
        } catch (error) {
            dispatch({
                type:LOGOUT_FAIL,
                payload:error.response.data.error
            
            })
        }
        
        }

     
    



export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
