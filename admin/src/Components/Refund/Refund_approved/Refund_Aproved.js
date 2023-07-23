import React from 'react'
import { useState } from 'react';
import Refund_table from "./Table_for_Refund_Aproved/Refund_table"

function Refund_Aproved() {
    const [data, setdata] = useState();
  return (
  <>
  
  <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 h6 text-center">Approved  Request</h3>
            </div>
            <div className="productsfilter">
             
            </div>
          </div>

          <Refund_table/>
        </div>
      </div>
  
  
  
  </>
  )
}

export default Refund_Aproved
