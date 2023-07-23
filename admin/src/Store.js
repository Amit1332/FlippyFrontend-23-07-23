import { legacy_createStore as createStore ,combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { ProductDetailsReducer, ProductReducer, ProductsReducer } from "./reducers/productReducers"
import { adminReducer } from "./reducers/adminReducer"
import { allCategoryReducer, CategoryDetailsReducer, categoryReducer, deleteCategoryReducer, updatecategoryReducer } from "./reducers/categoryReducers"
import { allBrandReducer, BrandDetailsReducer, brandReducer, deleteBrandReducer, updatebrandReducer } from "./reducers/brandReducer"
import { allAttributeReducer, attributeReducer, deleteAttributeReducer, deleteAttributeValReducer } from "./reducers/attributeReducers"
import { allColorsReducer, ColorReducer, deleteColorReducer } from "./reducers/colorsReducers"
import { allSupplierReducer, deleteSupplierReducer, supplierCompleteDetailsReducer, supplierDetailsReducer } from "./reducers/SupplierReducer"
import { allUserReducer, deleteUserReducer } from "./reducers/userReducers"
import { allStaffReducer, createStaffReducer, deleteStaffReducer, staffCompleteDetailsReducer, staffDetailsReducer, updatestaffReducer } from "./reducers/staffReducers"


const reducer =combineReducers({
    products:ProductsReducer,     //get all product
    productDetails :ProductDetailsReducer,  // single product details
    product:ProductReducer,   //Delete Product

    category:categoryReducer,   // create category reducer
    allcategory:allCategoryReducer,  //get all category reducer
    deletecategory:deleteCategoryReducer,  //delete category reducer
    editcategory: updatecategoryReducer, //edit category
    categorydetails: CategoryDetailsReducer, //get single category


    brands:allBrandReducer,  //get all brand  reducer
    createbrand:brandReducer,     // create  brand 
    deletebrand:deleteBrandReducer,  //delete brand  reducer
    brandDetails :BrandDetailsReducer,  // single brand details
    updateBrand:updatebrandReducer,


    attributes:allAttributeReducer ,   //get all attribute  reducer
    createAttribute:attributeReducer,  // create  attribute
    deleteAttribute:deleteAttributeReducer, //delete Attribute  reducer
    deleteAttributeVal:deleteAttributeValReducer, //delete Attribute value  reducer
    admin:adminReducer,    // admin login auth



    Colors : allColorsReducer ,   //get all attribute  reducer
    createColors : ColorReducer,  // create  attribute
    deleteColors : deleteColorReducer, //delete Attribute  reducer


    getAllSeller:allSupplierReducer ,  // get all supplier
    deleteSupplier:deleteSupplierReducer ,  // delete supplier
    supplierDetails:supplierDetailsReducer,  // supplier details reducer
    getsupplierCompleteDetails:supplierCompleteDetailsReducer,  //get supplier details reducer



    getAllUser:allUserReducer,    //get all user
    deleteUser:deleteUserReducer,    // delete user


    getAllStaff:allStaffReducer,    //get all staff
    deleteStaff:deleteStaffReducer,   // delete staff
    createNewStaff:createStaffReducer,  // create new staff
    updatestaff:updatestaffReducer, //update staff
    getStaff:staffDetailsReducer
})



let initialState ={}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;