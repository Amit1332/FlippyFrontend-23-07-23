import React from 'react'
import Stripe from "../../Logo/Stripe.svg"
import Visa from "../../Logo/Visa.svg"
import Mastercard  from "../../Logo/Mastercard.svg"
import Applepay from "../../Logo/Applepay.svg"
import Flippy7 from "../../Logo/Flippy7.jpeg"
import Gpay from "../../Logo/Gpay.svg"
import Paypal from "../../Logo/Paypal.svg"
import Qiwi from "../../Logo/QIWI.png"

export default function PaymentmethodComponent() {
  return (
    <div className='Paymethodcompo'>
        <div className="logocomponent">
        <img src = {Flippy7} alt="" />
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
        </div>
        <div className="methods">
            <h1>Accepted payments</h1>
            <div className="method">
                <img src = {Stripe} alt="" />
                <img src={Visa} alt="" />
                <img src={Mastercard} alt="" />
                <img src={Applepay} alt="" />
                <img src={Qiwi} alt="" />
                <img src={Paypal} className= "pay" alt="" />
                <img src={Gpay} alt="" />
            </div>
        </div>
    </div>
  )
}
