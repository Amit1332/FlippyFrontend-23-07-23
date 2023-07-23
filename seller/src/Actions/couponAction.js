import axios from "axios"
import { ALL_COUPON_REQUEST,
     ALL_COUPON_SUCCESS,
      ALL_COUPON_FAIL ,

      CREATE_COUPON_REQUEST,
      CREATE_COUPON_SUCCESS,
      CREATE_COUPON_FAIL,

      DELETE_COUPON_REQUEST,
      DELETE_COUPON_SUCCESS, 
      DELETE_COUPON_FAIL ,

  
      
      CLEAR_ERRORS} from "../Constants/couponConstants"

      export const getCouponSeller = ()=>async (dispatch)=>{
        try {
            
            dispatch({
                type:ALL_COUPON_REQUEST
            })
    
           const {data} = await axios({
                method: 'get',
                url: `/api/flippy/v1/seller/all/coupons`,
                withCredentials: false,
               
              });
            dispatch({
                type:ALL_COUPON_SUCCESS,
                payload:data,
            })
        } catch (error) {
            dispatch({
                type: ALL_COUPON_FAIL,
                payload:error.response.data.error
            }) 
        }
    }
    
// create coupon
export const createcoupon = (couponData) => async (dispatch) => {
  const possible  = "0123456789";
    var text = "";
    for ( var i=0; i < 6; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    couponData.coupon_id = "#F"+text


    try {
      dispatch({
        type: CREATE_COUPON_REQUEST,
      });
  
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "/api/flippy/v1//seller/add/coupons",
        couponData,
        config,
        {
          withCredentials: true,
        }
      );
  
      dispatch({
        type: CREATE_COUPON_SUCCESS,
        payload: data,
      });
  
  
  } catch (error) {
      dispatch({
          type:CREATE_COUPON_FAIL,
          payload:error.response.data.error
      
      })
  }
  
  }  



// delete coupon 
export const deleteCoupon = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_COUPON_REQUEST });
console.log(id)
    const { data } = await axios.delete(`/api/flippy/v1/seller/delete/coupons/${id}`);

    dispatch({
      type: DELETE_COUPON_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COUPON_FAIL,
      payload: error.response.data.error,
    });
  }
};











    
// clear Errors
export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })


}