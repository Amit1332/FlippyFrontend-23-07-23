import React from 'react'
import SecondNavProduct from '../Include/SecondNavProduct'
import "./Dashboard.css"
import OrderGraph from './OrderGraph'
import PerformingProducts from './PerformingProducts'
import StatusCard from './StatusCard'
import TopSupplier from './TopSupplier'



const Dashboard = () => {
  

    
  return (
    <>
    <SecondNavProduct Name={{name:"My Dashboard", directory:"Here what's happening with your store today."}} Btn={[{name:"01 jan ,2023 to 5 jan, 2023", style:"btn px-3 py-2 rounded-pill ",styleicon:"#164C96", icon:'ri-calendar-line '},{ style:"btn-circle p-1 shadow-none",styleicon:"#164C96", icon:'las la-sync-alt refresh_icon_dashboard', refresh:"true"}]}/>
 {/* <SecondNavProduct Name={{name:"My Dashboard", directory:"Here what's happening with your store today."}} Btn={[{name:"01 jan ,2023 to 5 jan, 2023", style:"btn rounded-pill",styleicon:"#164C96", icon:'ri-calendar-line '},{ style:"btn-circle shadow-none",styleicon:"#164C96", icon:'las la-sync-alt', link:'/products/addproduct'}]}/> */}
<div className="container-fluid p-0 mt-4">
  <StatusCard/>  
  <OrderGraph/>
  <PerformingProducts/>
  <TopSupplier/>
           
 </div>
 


    </>
  )
}

export default Dashboard
 