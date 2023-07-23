import React from 'react'
const cardStatus =[
    {
        title:"TOTAL EARNINGS",
        icon1:"ri-arrow-right-up-line",
        icon2:"las la-rupee-sign",
        price:"33",
        price2:"$559.25k",
        netearningTag:"view net earnings"
    },
    {
        title:"ORDERS",
        icon1:"ri-arrow-right-up-line",
        icon2:"las la-shopping-cart",
        price:"33",
        price2:"3676",
        netearningTag:"view all orders"
    },
    {
        title:"CUSTOMERS",
        icon1:"ri-arrow-right-up-line",
        icon2:"las la-user",
        price:"132M",
        price2:"$559.25k",
        netearningTag:"See details"
    },
    {
        title:"TOTAL SALES",
        icon1:"ri-arrow-right-up-line",
        icon2:"las la-clock",
        price:"34543",
        price2:"$559.25k",
        netearningTag:"view wallet"
    }
]
const StatusCard = () => {
  return (
    <>
           
           <div className="container-fluid">
            <div className="row wrapcardflex">
                {
                    cardStatus.map((elem)=>{
                        return (
                            <>
                             <div className="col statusCard px-3">
                    <div className="card">
                       <div className="card-body py-2 px-2 m-0">
                          <div className="container-fluid p-0">
                            <div className="row">
                                <div className="col d-flex cardtit text-nowrap" style={{color:"black", fontWeight:"bold"}}>
                             {elem.title}
                                </div>
                                <div className="col text-nowrap d-flex justify-content-end" style={{color:"#12B76A", fontSize:".7rem"}}>
                                <i class={`${elem.icon1}`}></i>
                                <span className=''>+{elem.price} %</span>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col d-flex text-nowrap textboldkar" style={{color:"#344054"}}>
                                {elem.price2}
                                </div>
                              
                            </div>
                            <div className="row">
                                <div className="col d-flex text-nowrap earningtext" style={{color:"#164C96"}}>
                                {elem. netearningTag}
                                </div>
                                <div className="col d-flex justify-content-end align-items-end">
                               <div className="box rounded">
                               <i class={`${elem.icon2}`}></i>
                               </div>
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

export default StatusCard
