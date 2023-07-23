import React from "react";
import { Link } from "react-router-dom";
function TicketTableData() {
  return (
    <>
      <tr>
        <td>
        <div className="customerss">
          435464
          </div>
          </td>
        <td>
        <div className="customerss">
          Seller
          </div>
          </td>
        <td>
        <div className="customerss">
          Ja Shankar
          </div>
          </td>
        <td>
        <div className="customerss">
          jai@gmailcom
          </div>
          </td>
        <td>
        <div className="customerss">
          98876655
          </div>
          </td>
        <td>
        <div className="customerss">
        <h6>
       <span class={`badge rounded-pill ${""==="Cancelled" ? "warning":""} ${"pending"==="pending" ? "warninack":""} ${"Pending"==="Confirmed" ? "successColor":"cancelledDanger"}`} style={{fontWeight:"500"}}> Pending</span>
       
         </h6>
          </div>
        </td>
        <td>
        <div className="customerss">
          
          2023-01-27 13:09:05
          </div>
           </td>

        <td class="text-right">
        <div className="customerss">
           <Link className="mx-1">
                <i class="ri-eye-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
              </div>
        </td>
        <td>
        <div className="customerss">
          Return/RTO Exchange
          </div>
          </td>
      </tr>
    </>
  );
}

export default TicketTableData;
