
import './App.css';
import React , {useEffect} from "react"
import Sidebar from './components/Include/Sidebar/Sidebar';
import Login from './components/Credentials/Login/Login';
import Home from './components/HomeMain/Home';   


import { BrowserRouter,Routes,Route} from "react-router-dom";
import store from "./Store"
import { useSelector } from "react-redux";


import { loadSeller } from './Actions/SellerActions';
import ForgotePass from './components/Credentials/Login/ForgotePass';
import Verify from './components/Credentials/Login/Verify';
import ResetPass from './components/Credentials/Login/ResetPass';
import ResetPassSuccess from './components/Credentials/Login/ResetPassSuccess';
import Signup from './components/Credentials/Signup/Signup';
import GstIn from './components/Credentials/Signup/GstIn';
import Bankdetails from './components/Credentials/Signup/Bankdetails';
import Address from './components/Credentials/Signup/Address';
import Submitform from './components/Credentials/Signup/Submitform';
import Shop from './components/Credentials/Signup/Shop';
  
function App() {


  const {isAuthenticatedSeller, seller} = useSelector((state)=> state.seller)
useEffect(() => {
  store.dispatch(loadSeller())

 
 
}, []);
  return (
    <div className="App">
       <BrowserRouter>
       {isAuthenticatedSeller && <Sidebar/> }
       <Routes>
       <Route path="/" element={!isAuthenticatedSeller && <Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/forgotepass" element={<ForgotePass />} />
          <Route path="/verifyemail" element={<Verify />} />
          <Route path="/resetpass" element={<ResetPass />} />
          <Route path="/resetpasssuccess" element={<ResetPassSuccess />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gstin" element={<GstIn />} />
          <Route path="/bankdetails" element={<Bankdetails />} />
          <Route path="/address" element={<Address />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="/submitform" element={<Submitform />} />
       </Routes>

       

          
       </BrowserRouter>
     
    </div>
  );
}

export default App;
