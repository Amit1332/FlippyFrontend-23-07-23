import React,{useEffect,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import LeftBanner from "./LeftBanner";
import AlreadyMember from "./AlreadyMember";
import { getSellerDetails, loadSeller, updateSellerShopDetails } from "../../../Actions/SellerActions";
import { UPDATE_SELLER_SHOP_DETAILS_RESET } from "../../../Constants/SellerConstant";
import { clearErrors } from "../../../Actions/productAction";

const Shop = () => {
  const Navigate = useNavigate()
  const dispatch = useDispatch();
  const alert =useAlert()

  const {supplier_details} = useSelector((state) => state.getSellerDetails)
    const {isUpdated, error} = useSelector((state) => state.updateSellerShopDetails)


  const [sellerDetails,setSellerDetails] = useState({
    store_name:"",
    your_name:""
   
  });
 
  
  const handleInputs =(e)=>{
    const name =e.target.name
    const value = e.target.value
    setSellerDetails({...sellerDetails,[name]:value })
  }


  const submitSellerShopDetails =(e)=>{
    e.preventDefault()
    dispatch(updateSellerShopDetails(sellerDetails))
 
   }


  useEffect(() => {

       

    if (error) {
      alert.error(<div style={{fontSize:".8rem"}}>{error} </div>);
      dispatch(clearErrors());
    }

    if(isUpdated) {
      alert.success(<div style={{fontSize:".7rem"}}>Shop Created Successful</div>);
      dispatch(loadSeller());
      Navigate("/submitform")

      dispatch({
        type: UPDATE_SELLER_SHOP_DETAILS_RESET,
      });
    }
    
   
  
    dispatch(getSellerDetails())

  }, [dispatch,error,alert, Navigate,isUpdated]);


  useEffect(()=>{
  if(supplier_details){
    setSellerDetails(supplier_details)
  }

  },[supplier_details])
  return (
    <>
      <div className="loginComp SignComp">
        <LeftBanner />
        <div className="rightComp rightCom-2">
          <AlreadyMember />
          <form onSubmit={submitSellerShopDetails}>
          <div className="signinform">
            <div className="loginform ">
              <h2>Enter You Shop Info</h2>
              <hr />

              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                <i class="ri-store-2-line"></i>
                  <input type="text" placeholder="Enter Your Shop Name"
                   name="store_name"
                   onChange={handleInputs}
                   value={sellerDetails.store_name}
                   required
                  />
                </div>

                
              </div>
              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                <i class="ri-store-2-line"></i>
                  <input type="text" placeholder="Enter Your Name"
                   name="your_name"
                   onChange={handleInputs}
                   value={sellerDetails.your_name}
                   required
                  />
                </div>

                
              </div>
              

              <div className="footertext"></div>
              <div className="continue">
                <Link className="button-2" to="/address">
                  back
                </Link>
                <button className="button-3" type="submit">
                  Continue
                </button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Shop;
