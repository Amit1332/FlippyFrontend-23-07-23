import React,{useState} from 'react'
import SecondNavProduct from '../../Include/SecondNavProduct'
import PaymentEarningCard from './PaymentEarningCard'
import {Link} from "react-router-dom"
import PaymentTransactionHistory from './PaymentTransactionHistory'


const PaymentViewDetails = () => {
  const ordertabs = [
    {tabname:"Order Details",
    tabId : "1",
    icon1:"las la-cube",
},
{tabname:"Ad Cost",
tabId : "2",
icon1:"las la-clock",
orCount:"5"
},
{tabname:"Compensation & Other Cost",
tabId : "3",
icon1:"las la-pause-circle",
orCount:"5"
},

]
const [tebs, settabs] = useState('1');
  return (
    <>

<SecondNavProduct Name={{name:"Last Payments", directory:"Home > Payment > Last Payment"}} Btn={[{name:"Export Excel",   style: "bluebtn text-light fw-normal",  icon:'ri-download-2-line'}]}  backbtn = {[{backname:"back", iconback:"ri-arrow-left-line" ,link:"/payout"}]}/>
<div className="container-fluid mb-3  mt-3">
<PaymentEarningCard/>




   
           

<div className='tablistaddpro mt-3 rounded-3 w-100' >
  
<ul className="nav nav-tabs text-nowrap d-flex align-items-start justify-content-start  w-100 pb-1" id="ex2" role="tablist" style={{overflow:'auto'}}>
          {
            ordertabs.map((elem)=>{
                return (
                    <>
                      <li className="p-1" role="presentation">
                    <Link
                        className={tebs === `${elem.tabId}` ? `nav-link text-capitalize  p-2 py-3 active` : `text-capitalize nav-link  p-2 py-3`}
                        id="ex3-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        onClick={() => { settabs(`${elem.tabId}`) }}
                        aria-controls="ex3-tabs-2"
                        style={{height:"50px"}}
                    >
                        {elem.tabname}
                        </Link>
                    
                </li>
                    </>
                )
            })
          }
              
            </ul>

            <div className="tab-content" id="ex2-content">
                {tebs === '1' ? (
                    <div className='container-fluid p-0'>
<PaymentTransactionHistory/>
                       
                    </div>
                ) : ""}
                {tebs === '2' ? (
                    <div>
<PaymentTransactionHistory/>

                </div>
                ) : console.log(tebs)}
                {tebs === '3' ? (
                    <div>
<PaymentTransactionHistory/>
 
                </div>
                ) : ""}
                
                




            </div>
        </div>
 





















 </div>
      
    </>
  )
}

export default PaymentViewDetails
