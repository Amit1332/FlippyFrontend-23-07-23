import React from 'react'
import SecondNavProduct from '../Include/SecondNavProduct'
import PaymentHistory from './PaymentHistory/PaymentHistory'

import "./Payout.css"

const Payout = () => {
  return (
    <>
      
 <SecondNavProduct Name={{name:"Payment History", directory:"Home>Payout"}} Btn={[{name:"How it Works ?", styleicon:"text-danger fw-normal fs-5", icon:'lab la-youtube'}]}/>
<div className="container-fluid mb-3 p-0 mt-3">

<PaymentHistory/>

           
 </div>
    </>
  )
}

export default Payout
