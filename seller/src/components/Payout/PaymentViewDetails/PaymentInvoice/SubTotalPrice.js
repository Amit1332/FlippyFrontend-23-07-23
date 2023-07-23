import React from 'react'

const SubTotalPrice = () => {
  return (
    <>
      
      <div className="row  px-0 w-100 m-0">
        <div className="col px-0 d-flex justify-content-end">
            <div className="card p-0">
                <div className="card-body rounded  p-0 px-2" style={{backgroundColor:"#F9F9FA",border:"1px solid #DFE4EA"}}>
                <div className="col text-nowrap mt-2">
                    <div className="col invoicetotal">
                      <div className="row">
                        <div className="col">
                          <p>Sub total(excl. GST):</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                          {" "}
                          <p>6000</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>Total GST:</p>
                        </div>
                        <div className="col  d-flex justify-content-end">
                          {" "}
                          <p>555</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>Credit Card fee (if using):</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                          {" "}
                          <p>92</p>
                        </div>
                      </div>
                      <div className="row mt-3 invoo">
                        <div className="col">
                          <p >Amount due on 20 jan 2023 :</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                          {" "}
                          <p>6000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default SubTotalPrice
