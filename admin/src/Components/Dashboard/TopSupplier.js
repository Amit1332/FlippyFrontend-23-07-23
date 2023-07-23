import React from 'react'

const TopSupplier = () => {
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
    <div className="col container-fluid mt-3">
            <div className="card">
              <div className="card-body py-2 px-3">
                <div className="container-fluid p-0">
                  <div className="row d-flex align-items-center">
                    <div className="col d-flex justify-content-start">
                      <div className="card-text">Top Supplier</div>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <div className="card-text d-flex gap-2">
                        <a href="" className='btn btn-sm rounded-pill' style={{color:"#103A81",fontWeight:"bold", backgroundColor:"#E7F4FC"}}>

                                Generate Report
                        </a>
                      </div>
                    </div>
                  </div>

                    









                  <div class="table-responsive producscroller_responsive mt-3">
  <table class="table text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
      <tr>
        <th scope="col">Order ID</th>
        <th scope="col">Customer</th>
        <th scope="col">Product</th>
        <th scope="col">No.of Pro.</th>
        <th scope="col">Amount</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
       
      </tr>
    </thead>
    <tbody>
    {

orders.map((elem)=>{
return (
  <>
  <tr>
       
       <td scope="row"  style={{color:"#164C96", fontWeight:"bold"}}>
       <div className="customerss">
               {elem.orderID}
         </div>
       </td>
       <td>
         <div className="customers d-flex align-items-center justify-content-start">
         <div className="customerimages">
         <img src={`${elem.images}`} alt="" />
       </div>
             <span className='mx-2'>{elem.cust_name}</span>
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
       <div className="customerss" style={{fontWeight:"bold"}}>
       ₹{
              elem.price
            }
         </div>
       </td>
       <td>
       <div className="customerss">
         <h6>
       <span class={`badge rounded-pill ${elem.status==="Pending" ? "warning":"blueback"} ${elem.status==="Pending" ? "warning":"blueback"} ${elem.status==="Paid" ? "successColor":"bluebck"}`} style={{fontWeight:"500"}}>{elem.status}</span>
       
         </h6>
         </div>
       </td>
       <td>
       <div className="customerss d-flex align-items-center ">
       <i class="ri-eye-line mx-1"></i>
       <i class="ri-download-2-line mx-1"></i>
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
              </div>
            </div>
          </div>
          
    
   
    
    
    </>
  )
}

export default TopSupplier