import React from 'react'
const Product = [
    {
    name:"Cloths",
    images:"https://cdn.shopify.com/s/files/1/0428/8063/0937/files/awards_b7b68527-48b8-43b2-8a75-945922f8c149.jpg?v=1613778469",
    price:"1234",
    type:"Silicon"
},
{
    name:"Cloths",
    images:"https://cdn.shopify.com/s/files/1/0428/8063/0937/files/awards_b7b68527-48b8-43b2-8a75-945922f8c149.jpg?v=1613778469",
    price:"1234",
    type:"Silicon"
},
{
    name:"Cloths",
    images:"https://cdn.shopify.com/s/files/1/0428/8063/0937/files/awards_b7b68527-48b8-43b2-8a75-945922f8c149.jpg?v=1613778469",
    price:"1234",
    type:"Silicon"
},
{
    name:"Cloths",
    images:"https://cdn.shopify.com/s/files/1/0428/8063/0937/files/awards_b7b68527-48b8-43b2-8a75-945922f8c149.jpg?v=1613778469",
    price:"1234",
    type:"Silicon"
},
{
    name:"Cloths",
    images:"https://cdn.shopify.com/s/files/1/0428/8063/0937/files/awards_b7b68527-48b8-43b2-8a75-945922f8c149.jpg?v=1613778469",
    price:"1234",
    type:"Silicon"
}
]

const TopProduct = () => {
  return (
    <>
<div className="container-fluid p-0">
{
        Product.map((elem)=>{
            return(
                <>
    <div className="row mb-2">
     
                
                <div className="col-10 d-flex">
           <div className="card-content">
            <div className="card-images">
                <img className='rounded' src={`${elem.images}`} alt="" />
            </div>
            <div className="productdetalis">
                <h6 style={{color:"#1D2939"}}>{elem.type}</h6>
                <span style={{color:"#667085"}}>{elem.name}</span>
            </div>
           </div>
        </div>
        <div className="col-2 card-content productrepee text-nowrap" style={{color:"#164C96"}}>
        ₹ {elem.price}
        </div>
                
              


    </div>
    </>
            )
        })
     }
</div>

      
    </>
  )
}

export default TopProduct
