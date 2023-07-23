import React,{useEffect,useState} from "react";
import LeftBanner from "./LeftBanner";
import { Link, useNavigate } from "react-router-dom";
import AlreadyMember from "./AlreadyMember";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, getSellerDetails, loadSeller, updateSellerAddressDetails, updateSellerDetails } from "../../../Actions/SellerActions";
import { UPDATE_SELLER_ADDRESS_DETAILS_RESET, UPDATE_SELLER_DETAILS_RESET } from "../../../Constants/SellerConstant";

function Address() {

  const Navigate = useNavigate()
  const dispatch = useDispatch();
  const alert =useAlert()

  const {pickup_address} = useSelector((state) => state.getSellerDetails)
    const {isUpdated, error} = useSelector((state) => state.updateSellerAddressDetails)


  const [sellerDetails,setSellerDetails] = useState({
    house_no:"", 
      street:"",
      landmark:"",
      postal_code:"",
      city:"",
      state:"",
   
  });
 
  
  const handleInputs =(e)=>{
    const name =e.target.name
    const value = e.target.value
    setSellerDetails({...sellerDetails,[name]:value })
  }


  const submitSellerAddressDetails =(e)=>{
    e.preventDefault()
    dispatch(updateSellerAddressDetails(sellerDetails))
 
   }


  useEffect(() => {

       

    if (error) {
      alert.error(<div style={{fontSize:".8rem"}}>{error} </div>);
      dispatch(clearErrors());
    }

    if(isUpdated) {
      alert.success(<div style={{fontSize:".7rem"}}>Address Submitted Successful</div>);
      dispatch(loadSeller());
      Navigate("/shop")

      dispatch({
        type: UPDATE_SELLER_ADDRESS_DETAILS_RESET,
      });
    }
    
   
  
    dispatch(getSellerDetails())

  }, [dispatch,error,alert, Navigate,isUpdated]);


  useEffect(()=>{
  if(pickup_address){
    setSellerDetails(pickup_address)
  }

  },[pickup_address])
  return (
    <>
      <div className="loginComp SignComp">
        <LeftBanner />
        <div className="rightComp rightCom-2">
          <AlreadyMember />
         <form onSubmit={submitSellerAddressDetails}>

         <div className="signinform">
            <div className="loginform createpage " id="addressform">
              <h2>Add Your Address</h2>
              <hr />
              <h4 id="defaultaddress">Default Address </h4>
              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                  <input type="text" placeholder="Flat/House No."
                   name="house_no"
                   onChange={handleInputs}
                   value={sellerDetails.house_no}
                   required
                   />
                </div>

                <div className="inputbox-1">
                  <input type="text" placeholder="street name"
                   name="street"
                   onChange={handleInputs}
                   value={sellerDetails.street}
                   required
                  />
                </div>
              </div>
              <div className="inputbox-3">
                <div className="inputbox-3-2">
                  <input type="text" placeholder="Landmark"
                 name="landmark"
                 onChange={handleInputs}
                 value={sellerDetails.landmark}
                 required
                /></div>
                <div className="inputbox-3-3">
                  <input type="text" placeholder="City"
                   name="city"
                   onChange={handleInputs}
                   value={sellerDetails.city}
                   required
                  />
                  </div>
              </div>
              <div className="inputbox-3">
                <div className="inputbox-3-2"><input type="text" placeholder="State"
                 name="state"
                 onChange={handleInputs}
                 value={sellerDetails.state}
                 required
                /></div>
                <div className="inputbox-3-3 "><input type="text" placeholder="Pin"
                 name="postal_code"
                 onChange={handleInputs}
                 value={sellerDetails.postal_code}
                 required
                /></div>
              </div>
              <h4 id="picaddress">Pickup Address </h4>
              <div className="checkbx"><h4 id="sameaddress">Same as default address </h4>
              <div className="form-check form-switch"><input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" /></div>
              </div>
              
              <div className="continue">
                <Link className="button-2" to="/bankdetails">back</Link>
                <button className="button-3"type="submit">Submit</button>
              </div>
            </div>
          </div>
         </form>
        </div>
      </div>

    </>
  );
}

export default Address;
