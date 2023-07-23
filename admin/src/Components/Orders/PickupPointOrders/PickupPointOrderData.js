import React from 'react'
import { Link } from "react-router-dom";


const PickupPointOrderData = () => {
    const Orders = [
        {
          order_code: "9998765-99999",
          no_of_prod: 9,
          seller_name: "Jai Sankar",
          customer: "Mr. Customer",
          amount: "16669",
          delivery_status: "Confirmed",
          payment_status: "Processing",
          payment_type: "cash-on-delivery",
        },
        {
          order_code: "9998765-99999",
          no_of_prod: 10,
          seller_name: "Jai Sankar",
          customer: "Mr. Customer",
          amount: "16669",
          delivery_status: "Pending",
          payment_status: "Paid",
          payment_type: "cash-on-delivery",
        },
        {
          order_code: "9998765-99999",
          no_of_prod: 15,
          seller_name: "Jai Sankar",
          customer: "Mr. Customer",
          amount: "16669",
          delivery_status: "Cancelled",
          payment_status: "Un-Paid",
          payment_type: "cash-on-delivery",
        },
      ];
  return (
    <>
    {Orders.map((product) => (
      <tr>
        <td className="" scope="row">
        <div className="customerss"></div>
        </td>
        <td>
        <div className="customerss">
        {product.order_code}
        </div>
        </td>
        <td className="">
        <div className="customerss">
          
          {product.no_of_prod}
          </div> </td>

        <td className="">
        <div className="customerss">
          
          {product.customer}
          </div>
          </td>

        <td className="">
        <div className="customerss">
          
          {product.seller_name}
          </div>
          </td>
        <td className="">
        <div className="customerss">
          
          {product.amount}
          </div>
          </td>
        <td className="">
        <div className="customerss">

          <h6>
            <span
              class={`badge rounded-pill ${
                product.delivery_status === "Cancelled" ? "warning" : ""
              } ${product.delivery_status === "Pending" ? "warninack" : ""} ${
                product.delivery_status === "Confirmed"
                  ? "successColor"
                  : "cancelledDanger"
              }`}
              style={{ fontWeight: "500" }}
            >
              {" "}
              {product.delivery_status}
            </span>
          </h6>
          </div>
        </td>

        <td className="">
        <div className="customerss">
          
          {product.payment_type}
          </div>
          </td>

        <td className="">
        <div className="customerss">

          <h6>
            <span
              class={`badge rounded-pill ${
                product.payment_status === "Un-Paid" ? "warning" : "blueback"
              } ${
                product.payment_status === "Un-Paid" ? "warning" : "blueback"
              } ${
                product.payment_status === "Paid" ? "successColor" : "bluebck"
              }`}
              style={{ fontWeight: "500" }}
            >
              {product.payment_status}
            </span>
          </h6>
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

export default PickupPointOrderData