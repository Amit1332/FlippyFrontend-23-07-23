import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SecondNavProduct from '../Include/SecondNavProduct'
import "../Orders/Order.css"
import AllOrder from './AllOrder/AllOrder'
import DispatchToday from './DispatchOrders/DispatchToday';
import DelayedOrders from './DelayedOrders/DelayedOrders';
import CancelledOrder from './CancelledOrder/CancelledOrder';
import AcceptedOrder from './AcceptedOrder/AcceptedOrder';


const Order = () => {
  const ordertabs = [
    {tabname:"All Orders",
    tabId : "1",
    icon1:"las la-cube",
},
{tabname:"dispatch Today",
tabId : "2",
icon1:"las la-clock",
orCount:"5"
},
{tabname:"Delayed Orders",
tabId : "3",
icon1:"las la-pause-circle",
orCount:"5"
},
{tabname:"Accepted Orders",
tabId : "4",
icon1:"las la-check-circle",
},
{tabname:"Cancelled",
tabId : "5",
icon1:"las la-times-circle",
},
{tabname:"Download Invoice",
tabId : "6",
icon1:"las la-download",
}
]
const [tebs, settabs] = useState('1');
  return (
    <>

<SecondNavProduct Name={{name:"All Orders", directory:"Products > Orders"}} Btn={[{name:"Accepts All Orders", styleicon:"#164C96", icon:'las la-check-circle'}]}/>
<div className="container-fluid mt-4">


<div className='tablistaddpro rounded-3 w-100' >
  
<div className="containefff w-100" style={{overflow:'auto'}}>
<ul className="nav nav-tabs text-nowrap d-flex pb-1" id="ex2" role="tablist">
          {
            ordertabs.map((elem)=>{
                return (
                    <>
                      <li className="px-1" style={{flexShrink:'0'}} role="presentation">
                    <Link
                        className={tebs === `${elem.tabId}` ? ` nav-link text-capitalize  p-2 py-3 active` : `text-capitalize nav-link  p-2 py-3`}
                        id="ex3-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        onClick={() => { settabs(`${elem.tabId}`) }}
                        aria-controls="ex3-tabs-2"
                        style={{height:"50px"}}
                    >
                          <i class={`${elem.icon1}`}></i>
                        {elem.tabname}
                        <span class="badge rounded-pill" style={{backgroundColor:"#FEF4E9",color:"#D94A27"}}>{elem.orCount}</span>
                        </Link>
                    
                </li>
                    </>
                )
            })
          }
              
            </ul>
</div>

            <div className="tab-content" id="ex2-content">
                {tebs === '1' ? (
                    <div className='container-fluid p-0'>
                       <AllOrder/>

                       
                    </div>
                ) : ""}
                {tebs === '2' ? (
                    <div>
                   <DispatchToday/>
                </div>
                ) : console.log(tebs)}
                {tebs === '3' ? (
                    <div>
                  <DelayedOrders/>
                </div>
                ) : ""}
                {
                    tebs === '4' ? (
                        <div>
                 <AcceptedOrder/>
                </div>
                    ) : ""}
                {
                    tebs === '5' ? (
                        <div >
                      <CancelledOrder/>
                      </div>
                    ) : ""
                }



{/* {
                    tebs === '6' ? (
                        <div>
                       6666666
                      </div>
                    ) : ""
                } */}
            </div>
        </div>
 
           
 </div>
    </>
  )
}

export default Order
