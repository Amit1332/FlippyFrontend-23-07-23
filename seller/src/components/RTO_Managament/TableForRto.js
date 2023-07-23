import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Data from "./DataForRtoTable";
import "./Rto_manage.css";


export default function TableForRto() {
    return (
        <div class="table-responsive producscroller_responsive mt-0">
        <table class="table text-nowrap startcontentleft">
          <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
                <tr className=' p-2  text-dark' style={{backgroundColor:"#F9FAFB"}} >
                    <th scope="col" className='m-0 p-1 text-center '>#</th>
                    <th className='m-0 px-2 pb-0 pt-0' style={{ margin: `0px` }}>
                        <div className="d-flex pt-0 mb-1">
                            <p style={{ marginBottom: `0px` }}>Product ID</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    <th scope="col" className=' p-1'style={{ margin: `0px` ,  }}>
                        <div className="d-flex pt-0" style={{paddingTop:"10px"}}>
                            <p style={{ marginBottom: `0px`,  }}>Product</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    {/* <th scope="col" className='m-0 p-1'>Product </th> */}
                    <th scope="col" className='m-0 p-1'>Category</th>
                    <th scope="col" className='m-0 p-1'>Order Deliver</th>
                    <th scope="col" className='m-0 p-1'>Customer Return</th>
                    <th scope="col" className='m-0 p-1'>RTO Return</th>
                    <th scope="col" className='m-0 p-1'>Return Rate</th>
                    <th scope="col" className='m-0 p-1'>Action</th>
                </tr>
            </thead>
            <tbody>
                {Data.map((data) => {
                    return (
                        <tr className='border m-0 p-0'>
                            <td scope='row'>
                            <div className="customerss">
                                 <input id='checkbox-rto'  type="checkbox"  />
                                 </div>
                                 </td>
                           
                            <td>
                            <div className="customerss">
                                {data.product_id}
                                </div>
                            </td>
                            
                            <td>
                            <div className="customers d-flex align-items-center justify-content-start">
         <div className="customerimages orderimages">
         <img src="https://img.lovepik.com/element/40027/2204.png_300.png" alt="" />
       </div>
             <span className='mx-2'>{data.product}</span>
         </div>
                            
                            </td>
                            

                            <td>
                            <div className="customerss">
                            {data.category}
                                </div>
                            </td>

                            <td>
                            <div className="customerss">
                            {data.order_deliver}
                                </div>
                            </td>

                            <td>
                            <div className="customerss">
                            {data.customer_return}
                                </div>
                            </td>
                            <td>
                            <div className="customerss">
                            {data.rto_return}
                                </div>
                            </td>

                            <td>
                            <div className="customerss">
                            <div className="d-flex gap-1">
                                <div className="rto-second-right " style={{marginRight:"0px",display:"flex", width:"65px",}}><p><i style={{transform:"rotate(120deg)"}} class="las upp la-arrow-right"></i>10.5%</p></div>
                                </div>{data.return_rate}
                                </div>
                            </td>

                            <td>
                            <div className="customerss">
                            <div className="view-details mb-0"><h5 style={{marginBottom:"0px"}}>View Details</h5></div>
                            </div>
                            </td>

                            
                            <td className='px-0' style={{paddingTop:"20px"}}>{data.action}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
    
}