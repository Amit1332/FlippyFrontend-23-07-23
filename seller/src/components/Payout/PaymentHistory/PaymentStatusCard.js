import React from 'react'
import {Link} from "react-router-dom"

const PaymentStatusCard = () => {
    const cardStatus =[
        {
            icon2:"las la-rupee-sign",
            price2:"$55955555.25k",
            netearningTag:"Payment to date",
            paymentStat:"Next Payment"
        },
        {
            icon2:"las la-rupee-sign",
            price2:"$367655555",
            netearningTag:"Total Outstanding Payment",
            paymentStat:"Last Payment"
        },
        {
            icon2:"las la-rupee-sign",
            price2:"$55955555.25k",
            paymentStat:"Last Payment",
            netearningTag:"Compensation & Other Support Services"
        }
      
    ]
  return (
    <>
      <div className="container-fluid ">
            <div className="row px-3 wrapcardflex wrapcardflexpayout">
                {
                    cardStatus.map((elem)=>{
                        return (
                            <>
                             <div className="col statusCard statusCardpayout">
                    <div className="card">
                       <div className="card-body py-3 px-3 m-0">
                          <div className="container-fluid p-0">
                          <div className="row">
                                <div className="col d-flex text-nowrap earningtext payoutearningtext align-items-start" >
                                {elem. netearningTag}
                                </div>
                                <div className="col d-flex justify-content-end align-items-end">
                               <div className="box rounded payoutbox">
                               <i class={`${elem.icon2}`}></i>
                               </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col d-flex text-nowrap textboldkar" style={{color:"#344054"}}>
                                {elem.price2}
                                </div>
                              
                            </div>
                            <div className="row">
                               <div className="col">
                                <div className="paymentStrip d-flex align-items-center px-2 rounded fw-bold my-2">
                                    <span id='statcolor'>{elem.paymentStat}&nbsp; : &nbsp;</span>
                                    <span> {elem.price2}</span> 

                                </div>
                               </div>

                            </div>
                            

                            <div className="row">
                               <div className="col d-flex align-items-start">
                                 <Link to ="/paymentDetails"><div className="btn btn-sm rounded-pill shadow-none border text-capitalize fw-bold">View Details</div></Link>
                               </div>

                            </div>
                            




                            
                          </div>
                       </div>
                    </div>
                </div>
                            </>
                        )
                    })
                }
               


                
                
              
              

            </div>
            </div> 

    </>
  )
}

export default PaymentStatusCard
