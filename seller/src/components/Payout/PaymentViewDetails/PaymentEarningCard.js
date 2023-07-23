import React from 'react'

const PaymentEarningCard = () => {
    const cardStatus =[
        {
            title:"Total Net Order Amount",
            price2:"$559.25k",
        },
        {
            title:"Total Net Ads Cost",
            price2:"3676",
        },
        {
            title:"Compensation Cost",
            price2:"$559.25k",
        },
        {
            title:"Total Amount",
            price2:"$559.25k",
        }
    ]
  return (
    <>
      <div className="container-fluid">
            <div className="row wrapcardflex wrapcardflexearningcard">
                {
                    cardStatus.map((elem)=>{
                        return (
                            <>
                             <div className="col statusCard statusflexearningcard">
                    <div className="card">
                       <div className="card-body  py-2 px-2 m-0">
                          <div className="container-fluid p-0">
                            <div className="row">
                                <div className="col d-flex cardtit text-capitalize text-nowrap" style={{color:"#000000", fontWeight:"100"}}>
                             {elem.title}
                                </div>
                               

                            </div>
                            <div className="row">
                                <div className="col d-flex text-nowrap textboldkar" style={{color:"#475467"}}>
                                {elem.price2}
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

export default PaymentEarningCard
