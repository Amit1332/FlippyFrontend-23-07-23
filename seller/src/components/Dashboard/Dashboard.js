import React from 'react'
import SecondNavProduct from '../Include/SecondNavProduct'
import "./Dashboard.css"
import OrderGraph from './OrderGraph'
import PerformingProducts from './PerformingProducts'
import StatusCard from './StatusCard'

const Dashboard = () => {
  function refreshPage(){
    window.location.reload();
}
    
  return (
    <>
 <SecondNavProduct Name={{name:"My Dashboard", directory:"Here what's happening with your store today."}} Btn={[{name:"01 jan ,2023 to 5 jan, 2023", style:"btn px-3 py-2 rounded-pill ",styleicon:"#164C96", icon:'ri-calendar-line '},{name:"Add Product",style: "bluebtn btn px-3 py-2 rounded-pill", icon:'las la-plus-circle',   link:'/products/addproduct'},{ style:"btn-circle p-1 shadow-none",styleicon:"#164C96", icon:'las la-sync-alt refresh_icon_dashboard', refresh:"true"}]}/>
<div className="container-fluid p-0 mt-4">
  <StatusCard/>  
  <OrderGraph/>
  <PerformingProducts/>
           
 </div>
 


    </>
  )
}

export default Dashboard
