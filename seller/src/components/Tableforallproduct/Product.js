import { red } from '@mui/material/colors'
import { color } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Navforallproduct from './Navforallproduct'
import Secondnavproduct from '../Include/SecondNavProduct'
import "./Styleforallproduct.css"

export default function Product({data}) {
    return (
   
      <div className='Productspplyer text-nowrap p-0 container-fluid rounded' style={{ backgroundColor: `rgb(245,247,249)` }}>
      <Secondnavproduct Name={{name:"All Products", directory:"Products > All Products"}} Btn={[{name:"Upload Bulk Products", style:"", icon:'las la-plus-circle',link :"/products/bulk_upload"},{name:"Add Product",style: "bluebtn pb-2 my-0", link :"/Addproducts", icon:'las la-plus-circle'}]}/>
     <div className="container-fluid px-3" style={{background:"#F5F7F9"}}>
      <div className="container-fluid rounded mt-3 p-2 pt-3" style={{background:"white"}}>
          <div className="nav container-fluid p-0 d-flex align-items-center justify-content-between">
              <div className="leftpronav rounded-2 overflow-hidden p-1 d-flex gap-2 px-2 align-items-center border border-secondary-subtle">
                  <i className="las la-search" style={{fontSize:`1.5rem`, transform:'rotate(270deg)', color:"gray"}}></i>
              <form className="d-flex w-100" role="search">
                  <input  style={{border:`none`, outline:`none`, width:"100%"}} type="search" placeholder="Search" aria-label="Search" />
              </form>
              </div>
              <div className="rightpronav d-flex align-items-center justify-content-between gap-2">
                  <div className="rounded p-1 px-2 border border-secondary-subtle d-flex gap-2 align-items-center">
                  <i class="ri-calendar-line" style={{fontSize:"17px"}}></i>
                  <p style={{marginBottom: `0px`, fontSize: `14px`}}>Jan 6, 2022-Jan 13, 2022</p>
                  </div>
                  <div className="rounded p-1 px-2 border border-secondary-subtle d-flex gap-2 align-items-center" style={{width:"fit-content"}}>
                  <i class="ri-filter-3-fill" style={{fontSize:"17px"}}></i>
                  <p style={{marginBottom: `0px`, fontSize: `14px`}}>Filters</p>
                  </div>
              </div>
          </div>
            <Navforallproduct data={data}/>
          
      </div> 
      </div>
  </div>
    )
}

