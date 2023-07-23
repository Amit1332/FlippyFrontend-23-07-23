import React from 'react'
import {Link} from "react-router-dom"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PaymentFilter from './PaymentFilter';

const PaymentTransactionHistory = () => {
    const orders =[
        {
     orderID: "#1234234234234",
     sku:"88787878787",
     status:"RTO",
     orderamount:"777475757",
     compe:"777475757",
     delivery_charges:"65.00",
     totalAmount:"44545454"
    
   
    
      },
      {
        orderID: "#1234234234234",
        sku:"88787878787",
     status:"Delivered",
     orderamount:"777475757",
     compe:"777475757",
     delivery_charges:"65.00",
     totalAmount:"44545454"
        
          },
          {
            orderID: "#1234234234234",
            sku:"88787878787",
     status:"RTO",
     orderamount:"777475757",
     compe:"777475757",
     delivery_charges:"65.00",
     totalAmount:"44545454"
            
              },
              {
                orderID: "#1234234234234",
                status:"Return",
                sku:"88787878787",
                orderamount:"777475757",
                compe:"777475757",
                delivery_charges:"65.00",
                totalAmount:"44545454"
                
                  },
                  {
                    orderID: "#1234234234234",
                    status:"RTO",
                    sku:"88787878787",
                    orderamount:"777475757",
                    compe:"777475757",
                    delivery_charges:"65.00",
                    totalAmount:"44545454"
                    
                      }
    ]
  return (
    <>
    <PaymentFilter/>
    
      <div class="table-responsive producscroller_responsive">
  <table class="table text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
      <tr>
      <th scope="col">#</th>
      <th scope="col">Order No</th>
        <th scope="col">SKU</th>
        <th scope="col">Status</th>

        <th scope="col">Order Amount</th>
        <th scope="col">Compe. & Other</th>
        <th scope="col">Delivery Charges</th>
        <th scope="col">Total Amount</th>
        <th className='text-center' scope="col">Action</th>
             
      </tr>
    </thead>
    <tbody  >
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

       
       
       <td  style={{color:"#344054", fontWeight:"bold"}}>
       <div className="customerss">
               {elem.orderID}
         </div>
       </td>
       
       <td>
           <div className="customerss">
              {elem.sku}
         </div>
       </td>


       <td>
           <div className="customerss">
           <h6>
       <span class={`badge rounded-pill ${elem.status==="Return" ? "danger":"blueback"}  ${elem.status==="Delivered" ? "successColor":"bluebck"}`} style={{fontWeight:"500"}}>{elem.status}</span>
       
         </h6>
         </div>
       </td>
       <td>
           <div className="customerss">
           ₹ {elem.orderamount}
         </div>
       </td>
       
       <td>
           <div className="customerss">
           ₹  {elem.compe}
         </div>
       </td>
       <td>
           <div className="customerss">
           ₹  {elem.delivery_charges}
         </div>
       </td>
       <td>
       <div className="customerss" style={{fontWeight:"500"}}>
       ₹ {
              elem.totalAmount
            }
         </div>
       </td>
       
       <td>
       <div className="customerss d-flex align-items-center justify-content-center mt-1 ">
        <Link to="/paymentInvoice">
        <button className="btn btn-sm rounded-pill shadow-none border text-capitalize mx-2">View Details</button>

        </Link>



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

export default PaymentTransactionHistory
