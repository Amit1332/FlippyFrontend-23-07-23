import React from "react";
import PayoutTable from "./PayoutTable";

function Payout() {
  return (
    <>
      <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 h6 text-center">Supplier Payments</h3>
            </div>
          </div>
        </div>

        <div className="row p-2" >
            <div className="card p-0">
            <div class="table-responsive producscroller_responsive">
  <table class="table css-serial text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Date</th>
                <th scope="col">Supplier</th>
                <th scope="col">Amount</th>
                <th scope="col">Payment Details</th>
              </tr>
            </thead>
            <tbody>
                <PayoutTable/>
                <PayoutTable/>
                <PayoutTable/>
                <PayoutTable/>
                <PayoutTable/>
                <PayoutTable/>
                <PayoutTable/>
                <PayoutTable/>
                <PayoutTable/>
                <PayoutTable/>
                <PayoutTable/>
                <PayoutTable/>
                <PayoutTable/>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Payout;
