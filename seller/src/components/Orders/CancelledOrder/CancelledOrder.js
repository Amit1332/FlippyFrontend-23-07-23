import React from 'react'
import FilterCancelled from '../FilterCancelled'

const CancelledOrder = () => {
    const orders =[
        {
     orderID: "#1234234234234",
    images:"https://pixlr.com/images/index/remove-bg.webp",
    prod_name:"350 ml Glass Grocery",  
    customer:"Rocky Smith Jhonson",
    size:"Free Size",
    quantity:"5",
    canceltaionReasion:"Customer Cancellation",
    cancelationDate:"01 Jan 2023"
    
      },
      {
        orderID: "#1234234234234",
        images:"https://pixlr.com/images/index/remove-bg.webp",
        prod_name:"350 ml Glass Grocery",
        customer:"Rocky Smith Jhonson",
    size:"Free Size",
    canceltaionReasion:"Customer Cancellation",
    cancelationDate:"01 Jan 2023",
    quantity:"5"
        
          },
          {
            orderID: "#1234234234234",
            images:"https://pixlr.com/images/index/remove-bg.webp",
            prod_name:"350 ml Glass Grocery",
            customer:"Rocky Smith Jhonson",
            size:"Free Size",
            quantity:"5",
            canceltaionReasion:"Customer Cancellation",
           cancelationDate:"01 Jan 2023"
            
              },
              {
                orderID: "#1234234234234",
                images:"https://pixlr.com/images/index/remove-bg.webp",
                prod_name:"350 ml Glass Grocery",
                canceltaionReasion:"Customer Cancellation",
                cancelationDate:"01 Jan 2023",
                customer:"Rocky Smith Jhonson",
                size:"Free Size",
                quantity:"5",
                
                  },
                  {
                    orderID: "#1234234234234",
                    images:"https://pixlr.com/images/index/remove-bg.webp",
                    prod_name:"350 ml Glass Grocery",
                    canceltaionReasion:"Customer Cancellation",
                    cancelationDate:"01 Jan 2023",
                    customer:"Rocky Smith Jhonson",
                    size:"Free Size",
                    quantity:"5",
                   
                    
                      }
    ]
  return (
    <>
    <FilterCancelled />
    <div className="container-fluid p-0">
      <div class="table-responsive producscroller_responsive mt-0">
  <table class="table text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
      <tr>
      <th className='text-center' scope="col">#</th>
        <th scope="col">Order No</th>
        <th scope="col">Product</th>
        <th scope="col">Size</th>
        <th scope="col">Quantity</th>

        <th scope="col">Customer</th>

        <th scope="col">Cancellatin Reason</th>
        <th scope="col">Cancellation Date</th>
       
      </tr>
    </thead>
    <tbody>
    {

orders.map((elem)=>{
return (
  <>
  <tr>
  <td>
           <div className="customerss">
           <div class="form-check">
           <input type="checkbox" class="form-check-input"/>
              </div>
         </div>
       </td>

       
       
       <td scope="row"  style={{color:"#344054", fontWeight:"bold"}}>
       <div className="customerss">
               {elem.orderID}
         </div>
       </td>
       <td>
         <div className="customers d-flex align-items-center justify-content-start">
         <div className="customerimages orderimages">
         <img src={`${elem.images}`} alt="" />
       </div>
             <span className='mx-2'>{elem.prod_name}</span>
         </div>
      
         
       </td>
       <td>
           <div className="customerss">
              {elem.size}
         </div>
       </td>

       
       <td>
       <div className="customerss">
       <h5><span class="badge" style={{border:"1px solid #EAECF0", color:"#344054"}}>{elem.quantity}</span></h5>
               
         </div>
       </td>
       
       <td>
           <div className="customerss">
              {elem.customer}
         </div>
       </td>
       <td>
           <div className="customerss">
              {elem.canceltaionReasion}
         </div>
       </td>
       <td>
           <div className="customerss">
              {elem.cancelationDate}
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
      </div>
      
    </>
  )
}

export default CancelledOrder
