import React,{useEffect,useState} from "react";
import LeftBanner from "./LeftBanner";
import { Link, useNavigate } from "react-router-dom";
import AlreadyMember from "./AlreadyMember";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, getSellerDetails, loadSeller, updateSellerDetails } from "../../../Actions/SellerActions";
import { UPDATE_SELLER_DETAILS_RESET } from "../../../Constants/SellerConstant";

const GstIn = () => {
  
  const Navigate = useNavigate()
  const dispatch = useDispatch();
  const alert =useAlert()

  const {selleralldetails} = useSelector((state) => state.getSellerDetails)

  const {isUpdated, error} = useSelector((state) => state.updateSellerDetails)


  const [sellerDetails,setSellerDetails] = useState({
   pan:"",
   gst:""
   
  });
  
  
  const handleInputs =(e)=>{
    const name =e.target.name
    const value = e.target.value
    setSellerDetails({...sellerDetails,[name]:value })
  }


  const submitSellerDetails =(e)=>{
    e.preventDefault()
    dispatch(updateSellerDetails(sellerDetails))
 
   }


  useEffect(() => {

      

    if (error) {
      alert.error(<div style={{fontSize:".8rem"}}>{error} </div>);
      dispatch(clearErrors());
    }

    if(isUpdated) {
      alert.success(<div style={{fontSize:".7rem"}}>GST & PAN Added Successful</div>);
      dispatch(loadSeller());
      Navigate("/bankdetails")

      dispatch({
        type: UPDATE_SELLER_DETAILS_RESET,
      });
    }
    
   
dispatch(getSellerDetails())
  

  }, [dispatch,error,alert, Navigate,isUpdated]);


  useEffect(()=>{
    if(selleralldetails){
      setSellerDetails(selleralldetails) 
    }
  },[selleralldetails])

  return (
    <>
      <div className="loginComp SignComp">
        <LeftBanner />
        <div className="rightComp rightCom-2">
          <AlreadyMember />
         <form onSubmit={submitSellerDetails}>

         <div className="signinform">
            <div className="loginform ">
              <h2>Verify Your GSTIN</h2>
              <hr />

              <div className="inputfrm mt-2 ">
                <div className="inputbox-1">
                  <i className="las la-file-alt"></i>
                  <input type="text" placeholder="Enter GSTIN"
                  required
                  name="gst"
                  onChange={handleInputs}
                  value={sellerDetails.gst}
                  />
                </div>

                <div className="inputbox-1">
                  <i className="las la-credit-card"></i>
                  <input type="text" placeholder="Enter pan number"
                         name="pan"
                         onChange={handleInputs}
                         value={sellerDetails.pan}
                         required
                   />
                </div>
              </div>
              <div className="doctext" >
                <p>Upload Your Pancard</p>
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

              <div className="footertext"></div>
              <div className="continue">
                <Link className="button-2" to="/signup">
                  back
                </Link>
                <button className="button-3" type="submit" >
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

export default GstIn;
