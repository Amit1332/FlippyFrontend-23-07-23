import React from "react";
import FilterOrder from "../FilterOrder";

const AllOrder = () => {
  const orders =[
    {
 orderID: "#1234234234234",
images:"https://pixlr.com/images/index/remove-bg.webp",
prod_name:"350 ml Glass Grocery",

customer:"Rocky Smith Jhonson",
size:"Free Size",
productID: "1234234234234",
skuId:"KYS4440",
quantity:"5"

  },
  {
    orderID: "#1234234234234",
    images:"https://pixlr.com/images/index/remove-bg.webp",
    prod_name:"350 ml Glass Grocery",

    customer:"Rocky Smith Jhonson ",
size:"Free Size",
productID: "1234234234234",
skuId:"KYS4440",
quantity:"5"
    
      },
      {
        orderID: "#1234234234234",
        images:"https://pixlr.com/images/index/remove-bg.webp",
        prod_name:"350 ml Glass Grocery",
        customer:"Rocky Smith Jhonson",
        size:"Free Size",
        quantity:"5",
        productID: "1234234234234",
        skuId:"KYS4440",
        
          },
          {
            orderID: "#1234234234234",
            images:"https://pixlr.com/images/index/remove-bg.webp",
            prod_name:"350 ml Glass Grocery",
            customer:"Rocky Smith Jhonson",
            size:"Free Size",
            quantity:"5",
            productID: "1234234234234",
            skuId:"KYS4440",
            
              },
              {
                orderID: "#1234234234234",
                images:"https://pixlr.com/images/index/remove-bg.webp",
                prod_name:"350 ml Glass Grocery",
                customer:"Rocky Smith Jhonson",
                size:"Free Size",
                quantity:"5",
                productID: "1234234234234",
                skuId:"KYS4440",
                
                  }
]
  return (
    <>
     

     <FilterOrder/>
     <div className="card-body py-2 px-3">
      <div class="table-responsive producscroller_responsive mt-0">
  <table class="table text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
      <tr>
      <th className='' scope="col">#</th>
        <th scope="col">Order No</th>
        <th scope="col">Product</th>
        <th scope="col">Customer</th>

        <th scope="col">Quantity</th>
        <th scope="col">Size</th>
        <th scope="col">SKU ID</th>
        <th scope="col">Product Id</th>
        <th  scope="col">Action</th>
             
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

       
       
       <td  style={{color:"#344054", fontWeight:"bold"}}>
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
       <div className="customerss" style={{fontWeight:"bold"}}>
       {
              elem.skuId
            }
         </div>
       </td>
       <td>
       <div className="customerss">
       {
              elem.productID
            }
         </div>
       </td>
       <td>
       <div className="customerss d-flex align-items-center ">
              <button className="btn btn-sm rounded-pill text-capitalize" style={{backgroundColor:"#164C96",color:"white"}}>Accept</button>
              <button className="btn btn-sm rounded-pill text-capitalize mx-2">Cancel</button>



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
  );
};

export default AllOrder;
