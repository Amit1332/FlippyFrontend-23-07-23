import React from 'react'
import "./SetPg.css"
const SetPg = () => {
  return (
    <>
    
    <div class="row">
    <div class="col-lg-6 mx-auto">
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0 h6" style={{color:"#4F4F4F", fontSize:"1rem"}}>Paytm Credential</h5>
            </div>
            <div class="card-body">
                
                <form class="form-horizontal setpgcred" >
                      <div class="form-group row">
                        <input type="hidden" name="types[]" value="PAYTM_ENVIRONMENT"/>
                        <div class="col-lg-4">
                            <label class="col-from-label" style={{color:"#4F4F4F"}}>PAYTM ENVIRONMENT</label>
                        </div>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" name="PAYTM_ENVIRONMENT" value="production" placeholder="local or production" required=""/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <input type="hidden" name="types[]" value="PAYTM_MERCHANT_ID"/>
                        <div class="col-lg-4">
                            <label class="col-from-label"style={{color:"#4F4F4F"}}>PAYTM MERCHANT ID</label>
                        </div>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" name="PAYTM_MERCHANT_ID" value="" placeholder="Paytm Merchant Id" required=""/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <input type="hidden" name="types[]" value="PAYTM_MERCHANT_KEY"/>
                        <div class="col-lg-4">
                            <label class="col-from-label" style={{color:"#4F4F4F"}}>PAYTM MERCHANT KEY</label>
                        </div>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" name="PAYTM_MERCHANT_KEY" value="" placeholder="Paytm Merchant Key"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <input type="hidden" name="types[]" value="PAYTM_MERCHANT_WEBSITE"/>
                        <div class="col-lg-4" >
                            <label class="col-from-label" style={{color:"#4F4F4F"}}>PAYTM MERCHANT WEBSITE</label>
                        </div>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" name="PAYTM_MERCHANT_WEBSITE" value="Default" placeholder="Paytm Merchent Wesite"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <input type="hidden" name="types[]" value="PAYTM_CHANNEL"/>
                        <div class="col-lg-4">
                            <label class="col-from-label" style={{color:"#4F4F4F"}}>PAYTM CHANNEL</label>
                        </div>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" name="PAYTM_CHANNEL" value="Web" placeholder="PAYTM CHANNEL"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <input type="hidden" name="types[]" value="PAYTM_INDUSTRY_TYPE"/>
                        <div class="col-lg-4">
                            <label class="col-from-label" style={{color:"#4F4F4F"}}>PAYTM INDUSTRY TYPE</label>
                        </div>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" name="PAYTM_INDUSTRY_TYPE" value="Retail" placeholder="PAYTM INDUSTRY TYPE"/>
                        </div>
                    </div>
                    <div class="form-group mb-0 text-right d-flex align-items-end justify-content-end mt-3">
                    <button
                    type="submit"
                    class="btn text-capitalize gap-2 d-flex align-items-center justify-content-center rounded-pill"
                    style={{
                      backgroundColor: "#E7F4FC",
                      color: "#103A81",
                      fontWeight: "bold",
                    }}
                  >
                   Save
                  </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    
    
    </>
  )
}

export default SetPg