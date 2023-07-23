import React from 'react'
import PaymentmethodComponent from './PaymentmethodComponent'
import Servicecomponent from './Servicecomponent'
import Servicecomponent2 from './Servicecomponent2'
export default function Topfooter() {
  return (
    <div className='Topfooter' >
        <PaymentmethodComponent/>
        <Servicecomponent  heading = "About Us" array = {["About Flippy 7","Careers","News & Blogs","Help", "Press Center", "Shop by location", "Flippy 7 Brand", "Affiliate & Partners", "Ideas & Guides"]} />
        <Servicecomponent heading = "Services" array = {["Gift Card","Mobile App","Shipping & Delivery","Order Pickup", "Account Signup"]} />
         <Servicecomponent heading = "Help" array =  {["Flippy 7 Help","Returns", "Track Orders", "Contact Us", "Feedback", "Security & Fraud"]}/> 
        <Servicecomponent2/>
    </div>
  )
}
