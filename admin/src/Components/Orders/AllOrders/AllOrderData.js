import React from 'react'
import {Link} from "react-router-dom"
const Orders  = [
    {
        order_date :"23-01-2023",
        order_id :"9998765",
        order_status:"Confirmed",
        verified:1,
        reseller_name :"Jai Sankar",
        sub_order_id:"69",
        net_order_value:"16669",
        dispatch_details:"Order is ready to dispatch",
        payment_status:"Processing",
        Tracking_id:"98765432-098",
        payment_type:"cash-on-delivery"
        

    },
    {
        order_date :"23-01-2023",
        order_id :"9998765",
        order_status:"pending",
        verified:1,
        reseller_name :"Jai Sankar",
        sub_order_id:"69",
        net_order_value:"16669",
        dispatch_details:"Order is ready to dispatch",
        payment_status:"Paid",
        Tracking_id:"98765432-098",
        payment_type:"cash-on-delivery"
        

    },
    {
        order_date :"23-01-2023",
        order_id :"9998765",
        order_status:"Cancelled",
        verified:1,
        reseller_name :"Jai Sankar",
        sub_order_id:"69",
        net_order_value:"16669",
        dispatch_details:"Order is ready to dispatch",
        payment_status:"Un-Paid",
        Tracking_id:"98765432-098",
        payment_type:"cash-on-delivery"
        

    }
]

const AllOrderData = () => {
  return (
    <>
    
    {
        Orders.map((product) => (
          <tr>
            <td  >
            <div className="customerss">
            {product.order_date}

            </div>
           </td>
            <td className="">
            <div className="customerss">
            {product.order_id}
            </div>
           </td>
            <td className="">
            <div className="customerss">
            <h6>
       <span class={`badge rounded-pill ${product.order_status==="Cancelled" ? "warning":""} ${product.order_status==="pending" ? "warninack":""} ${product.order_status==="Confirmed" ? "successColor":"cancelledDanger"}`} style={{fontWeight:"500"}}> {product.order_status}</span>
       
         </h6>
         </div>
            </td>
            <td className="">
            <div className="customerss">
              {product.verified}
              </div>
            </td>
            <td className="">
            <div className="customerss">
              {product.reseller_name}
              </div>
            </td>
            <td className="">
            <div className="customerss">
              {product.sub_order_id}
              </div>
            </td>
            <td className="">
            <div className="customerss">
              {product.net_order_value}
              </div>
            </td>
            <td className="">
            <div className="customerss">
              {product.dispatch_details}
              </div>
            </td>
            <td className="">
            <div className="customerss">
            <h6>
       <span class={`badge rounded-pill ${product.payment_status==="Un-Paid" ? "warning":"blueback"} ${product.payment_status==="Un-Paid" ? "warning":"blueback"} ${product.payment_status==="Paid" ? "successColor":"bluebck"}`} style={{fontWeight:"500"}}>{product.payment_status}</span>
       
         </h6>
         </div>
            </td>
            <td className="">
            <div className="customerss">

              {product.Tracking_id}
              </div>
            </td>
            <td className="">
            <div className="customerss">
              {product.payment_type}
              </div>
            </td>
            
            <td>
       <div className="customerss d-flex align-items-center">
        
             <Link className="mx-1">
                <i class="ri-eye-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
              <Link className="mx-1" to="">
                <i class="ri-edit-box-line" style={{color:"#4F4F4F",fontWeight:"500"}}></i>
              </Link>
              <Link className="mx-1" hidden  to="">
                <i class="las la-copy" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
              <Link
            className="mx-1"
              >
                <i class="ri-delete-bin-6-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
         </div>
       </td>
  
          </tr>
        ))}
 

    
    </>
  )
}

export default AllOrderData