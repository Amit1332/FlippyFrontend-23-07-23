import React from 'react'

const PaymentInvoiceTable = () => {
    const orders =[
        {
    orderID:"#1234",
    images:"https://pixlr.com/images/index/remove-bg.webp",
    cust_name:"Sally Jain",
    product:"Clothes",
    noprod:"03",
    price:"109.00",
    status:"Paid"
    
      },
      {
        orderID:"#1234",
        images:"https://pixlr.com/images/index/remove-bg.webp",
        cust_name:"Sally Jain",
        product:"Clothes",
        noprod:"03",
        price:"109.00",
        status:"Confirmed"
        
          },
          {
            orderID:"#1234",
            images:"https://pixlr.com/images/index/remove-bg.webp",
            cust_name:"Sally Jain",
            product:"Clothes",
            noprod:"03",
            price:"109.00",
            status:"Pending"
            
              }
    ]
  return (
    <>
       <div class="table-responsive invoicetableor producscroller_responsive mt-3 p-0">
  <table class="table text-nowrap startcontentleft ">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}} >
      <tr>
        <th scope="col">Description</th>
        <th scope="col">Qty</th>
        <th scope="col">Price</th>
        <th scope="col">GST</th>
        <th scope="col">Amount</th>
        
       
      </tr>
    </thead>
    <tbody >
    {

orders.map((elem)=>{
return (
  <>
  <tr>
  <td>
         <div className="customers d-flex align-items-center justify-content-start">
         <div className="customerimages invoiceprodimage">
         <img src={`${elem.images}`} alt="" />
       </div>
             <span className='mx-2'>{elem.cust_name}</span>
         </div>
      
         
       </td>
       
       <td scope="row">
       <div className="customerss">
               {elem.orderID}
         </div>
       </td>
      
       <td>
           <div className="customerss">
              {elem.product}
         </div>
       </td>
       <td>
       <div className="customerss">
               {elem.noprod}
         </div>
       </td>
       <td>
       <div className="customerss">
       ₹{
              elem.price
            }
         </div>
       </td>
      
      
      
     </tr>
  
  </>
)
})
        }
      
     
      
    </tbody>
  </table>
</div>


    </>
  )
}

export default PaymentInvoiceTable
