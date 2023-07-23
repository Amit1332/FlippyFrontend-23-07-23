
import './App.css';
import React , {useEffect} from "react"
import Sidebar from './Components/Include/Sidebar/Sidebar';
import { BrowserRouter} from "react-router-dom";
import Login from './Components/Login/Login';
import store from "./Store"
import { useSelector } from "react-redux";


import { loadAdmin } from './actions/adminActions';
import AdminOptions from './Components/Include/AdminOptions/AdminOptions';
  
function App() {


  const {isAuthenticatedAdmin, admin} = useSelector((state)=> state.admin)
useEffect(() => {
  store.dispatch(loadAdmin())

}, []);
  return (
    <div className="App">
       <BrowserRouter>
       {isAuthenticatedAdmin && <AdminOptions admin={admin} />}
       {isAuthenticatedAdmin && <Sidebar/> }
       {!isAuthenticatedAdmin && <Login/> }

          
       </BrowserRouter>
     
    </div>
  );
}

export default App;
