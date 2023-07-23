import React from 'react'
import FilterAcceptedOrder from '../FilterAcceptedOrder'
import FilterOrder from '../FilterOrder'

const AcceptedOrder = () => {
    const orders =[
        {
     orderID: "#1234234234234",
    images:"https://pixlr.com/images/index/remove-bg.webp",
    prod_name:"350 ml Glass Grocery",
    
    customer:"Rocky Smith Jhonson",
    size:"Free Size",
    status: "Breached",
    date:"01 Jan 2023",
    quantity:"5"
    
      },
      {
        orderID: "#1234234234234",
        images:"https://pixlr.com/images/index/remove-bg.webp",
        prod_name:"350 ml Glass Grocery",
    
        customer:"Rocky Smith Jhonson",
    size:"Free Size",
    status: "Breached",
    date:"01 Jan 2023",
    quantity:"5"
        
          },
          {
            orderID: "#1234234234234",
            images:"https://pixlr.com/images/index/remove-bg.webp",
            prod_name:"350 ml Glass Grocery",
            customer:"Rocky Smith Jhonson",
            size:"Free Size",
            quantity:"5",
            status: "Breached",
            date:"01 Jan 2023",
            
              },
              {
                orderID: "#1234234234234",
                images:"https://pixlr.com/images/index/remove-bg.webp",
                prod_name:"350 ml Glass Grocery",
                customer:"Rocky Smith Jhonson",
                size:"Free Size",
                quantity:"5",
                status: "Breached Soon",
                date:"01 Jan 2023",
                
                  },
                  {
                    orderID: "#1234234234234",
                    images:"https://pixlr.com/images/index/remove-bg.webp",
                    prod_name:"350 ml Glass Grocery",
                    customer:"Rocky Smith Jhonson",
                    size:"Free Size",
                    quantity:"5",
                    status: "Breached Soon",
                    date:"01 Jan 2023",
                    
                      }
    ]
  return (
    <>

<FilterAcceptedOrder/>
  
       
    <div className="container-fluid p-0" >
      <div class="table-responsive producscroller_responsive mt-0">
  <table class="table text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
      <tr>
      <th className='text-center' scope="col">#</th>
        <th scope="col">Order No</th>
        <th scope="col">Product</th>
        <th scope="col">Customer</th>

        <th scope="col">Quantity</th>
        <th scope="col">Size</th>
        <th scope="col">Date</th>
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
              {elem.customer}
         </div>
       </td>
       <td>
       <div className="customerss">
       <h5><span class="badge" style={{border:"1px solid #EAECF0", color:"#344054"}}>{elem.quantity}</span></h5>
               
         </div>
       </td>
       <td>
           <div className="customerss">
              {elem.size}
         </div>
       </td>
       
       <td>
       <div className="customerss">
       {
              elem.date
            }
         </div>
       </td>
       <td>
       <div className="customerss">
         <h6>
       <span class={`badge rounded-pill ${elem.status==="Breached Soon" ? "warning":"blueback"} ${elem.status==="Breached Soon" ? "warning":"blueback"} ${elem.status==="Breached" ? "successColor":"bluebck"}`} style={{fontWeight:"500"}}>{elem.status}</span>
       
         </h6>
         </div>
       </td>
       <td>
       <div className="customerss d-flex align-items-center justtify-content-center">
              <button className="btn btn-sm rounded-pill text-capitalize d-flex align-items-center px-3" style={{backgroundColor:"#164C96",color:"white",padding:".1rem 0rem"}}><i class="ri-download-2-line" style={{fontSize:"1rem" , marginRight:"5px"}}></i>Label</button>
              <button className="btn btn-sm rounded-pill text-capitalize shadow-none mx-2 p-0 infop"><i class="ri-information-line"></i></button>



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

export default AcceptedOrder
