import React from 'react'
import SecondNavProduct from '../../../Include/SecondNavProduct'
import InvoiceLabel from './InvoiceLabel'


const PaymentInvoice = () => {
  return (
    <>
<SecondNavProduct Name={{name:"#44444", directory:"Home > Payment > Last Payment > OrderId"}} Btn={[{name:"Download Invoice", style:"text-light bluebtn fw-normal", icon:'ri-download-2-line'}, {name:"Print", style:"fw-normal", icon:'las la-print'}]}  backbtn = {[{backname:"back", iconback:"ri-arrow-left-line", link:"/paymentDetails"}]}/>
<div className="container-fluid mb-3  mt-3">
<InvoiceLabel/>




</div>

    </>
  )
}

export default PaymentInvoice
