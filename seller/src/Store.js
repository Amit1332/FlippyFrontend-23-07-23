import { legacy_createStore as createStore ,combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {getSellertDetailsReducer, SellerReducer, updateSellerAddressDetailsReducer, updateSellerBankDetailsReducer, updateSellerDetailsReducer, updateSellerShopDetailsReducer } from "./Reducers/SellerReducer"
import { newProductReducer, ProductDetailsReducer, ProductReducer, ProductsReducer } from "./Reducers/productReducers"
import { CouponsDeleteReducer, CouponsDetailsReducer, CouponsReducer, createCouponReducer } from "./Reducers/couponReducers"

const reducer =combineReducers({
    seller:SellerReducer,
    updateSellerDetails:updateSellerDetailsReducer,
    updateSellerBankDetails:updateSellerBankDetailsReducer,
    updateSellerAddressDetails:updateSellerAddressDetailsReducer,
    updateSellerShopDetails:updateSellerShopDetailsReducer,



    getSellerDetails : getSellertDetailsReducer,

    products:ProductsReducer,     //get all product
    productDetails :ProductDetailsReducer,  // single product details
    product:ProductReducer, 
    newProduct: newProductReducer, // new product



    coupons:CouponsReducer,     //get all coupon
    couponDetails :CouponsDetailsReducer,  // single coupon details
    coupondelete:CouponsDeleteReducer, 
    couponcreate:createCouponReducer, //CREATE COUPON
})


let initialState ={}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;