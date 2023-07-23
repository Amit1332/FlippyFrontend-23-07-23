import React,{useEffect,useState} from "react";
import LeftBanner from "./LeftBanner";
import { Link, useNavigate } from "react-router-dom";
import AlreadyMember from "./AlreadyMember";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, getSellerDetails, loadSeller, updateSellerBankDetails, updateSellerDetails } from "../../../Actions/SellerActions";
import { UPDATE_SELLER_BANK_DETAILS_RESET, UPDATE_SELLER_DETAILS_RESET } from "../../../Constants/SellerConstant";

const Bankdetails = () => {
  const Navigate = useNavigate()
  const dispatch = useDispatch();
  const alert =useAlert()

  const {bank_details} = useSelector((state) => state.getSellerDetails)
  
  const {isUpdated, error} = useSelector((state) => state.updateSellerBankDetails)


  const [sellerDetails,setSellerDetails] = useState({
    account_number:"",
    ifsc_code:""
   
  });
  
  const handleInputs =(e)=>{
    const name =e.target.name
    const value = e.target.value
    setSellerDetails({...sellerDetails,[name]:value })
  }


  const submitSellerBankDetails =(e)=>{
    console.log(sellerDetails);
    e.preventDefault()
    dispatch(updateSellerBankDetails(sellerDetails))
 
   }

  useEffect(() => {

    if (error) {
      alert.error(<div style={{fontSize:".8rem"}}>{error} </div>);
      dispatch(clearErrors());
    }

    if(isUpdated) {
      alert.success(<div style={{fontSize:".7rem"}}>Bank Added Successful</div>);
      dispatch(loadSeller());
      Navigate("/address")

      dispatch({
        type: UPDATE_SELLER_BANK_DETAILS_RESET,
      });
    }
    
   
  
    dispatch(getSellerDetails())

  }, [dispatch,error,alert, Navigate,isUpdated]);


  useEffect(()=>{
    if(bank_details){
      setSellerDetails(bank_details) 
    }
  },[bank_details])
  return (
    <>
      <div className="loginComp SignComp">
        <LeftBanner />
        <div className="rightComp rightCom-2">
          <AlreadyMember />
          <form  onSubmit={submitSellerBankDetails}>
          <div className="signinform">
            <div className="loginform ">
              <h2>Add Your Bank Details</h2>
              <hr />
              <h4> </h4>

              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                  <i className="las la-file-alt"></i>
                  <input type="number" placeholder="Bank account number" 
                   name="account_number"
                   onChange={handleInputs}
                   value={sellerDetails.account_number}    
                   required           
                  />
                </div>

                <div className="inputbox-1">
                  <i className="las la-minus-circle"></i>
                  <input type="text" placeholder="IFSC Code" 
                   name="ifsc_code"
                   onChange={handleInputs}
                   value={sellerDetails.ifsc_code}
                   required
                  />
                </div>
                <div className="doctext">
                  <p>Upload Cancel Cheque</p>
                  <div className="docfile" style={{position:"relative", overflow:"hidden"}}>
                   <input type="file" style={{height:"100%",position:"absolute" ,opacity:"0", backgroundColor:"red", width:"100%"}} />
                    <div className="uploadfile">

                    <i className="las la-cloud-upload-alt"></i>
                    </div>
                    <div className="uploadtext">
                        <p><span>Click to upload </span> or drag and drop PNG, JPG or Pdf (max size_12mb)</p>
                    </div>
                </div>
                </div>
              </div>

              <div className="footertext"></div>
              <div className="continue">
                <Link className="button-2" to="/gstin">
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

export default Bankdetails;
