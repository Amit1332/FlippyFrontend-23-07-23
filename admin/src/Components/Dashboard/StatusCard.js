import React from 'react'
const cardStatus =[
    {
        title:"Total Sales",
        icon1:"ri-arrow-right-up-line",
        icon2:"ri-store-line",
        price:"33",
        price2:"$559.25k",
        netearningTag:"vs previous month"
    },
    {
        title:"Visitors",
        icon1:"ri-arrow-right-up-line",
        icon2:"ri-user-received-line",
        price:"33",
        price2:"$3676",
        netearningTag:"vs previous month"
    },
    {
        title:"Total Orders",
        icon1:"ri-arrow-right-up-line",
        icon2:"las la-cube",
        price:"13M",
        price2:"$559.25k",
        netearningTag:"vs previous month"
    },
    {
        title:"Refunded",
        icon1:"ri-arrow-right-up-line",
        icon2:"las la-exchange-alt",
        price:"43",
        price2:"$559.25k",
        netearningTag:"vs previous month"
    },
    {
        title:"Total Suppliers",
        icon1:"ri-arrow-right-up-line",
        icon2:"ri-user-add-line",
        price:"43",
        price2:"$559.25k",
        netearningTag:"vs previous month"
    }
]
const StatusCard = () => {
  return (
    <>
           
           <div className="container-fluid">
            <div className="row wrapcardflex px-2">
                {
                    cardStatus.map((elem)=>{
                        return (
                            <>
                             <div className="col statusCard">
                    <div className="card">
                       <div className="card-body py-2 px-2 m-0">
                          <div className="container-fluid p-0">
                            <div className="row">
                                <div className="col d-flex cardtit text-cpaitalize text-nowrap" style={{color:"#667085", fontWeight:"600"}}>
                             {elem.title}
                                </div>
                               

                            </div>
                            <div className="row my-2">
                                <div className="col d-flex align-items-center text-nowrap textboldkar" style={{color:"#164C96"}}>
                                <i class={`${elem.icon2}`} style={{fontWeight:"500", marginRight:"5px"}}></i> {elem.price2}
                                </div>
                              
                            </div>
                            <div className="row">
                               <div className="col d-flex">
                               <div className="text-nowrap pricetag" style={{color:"#12B76A"}}>
                                <i class={`${elem.icon1}`}></i>
                                <span className=''>+{elem.price} %</span>
                                </div>
                                <div className="d-flex text-nowrap earningtext" style={{color:"#667085"}}>
                                {elem.netearningTag}
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
