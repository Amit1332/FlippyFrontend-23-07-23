import React from 'react'
import "./SupplierCommission.css"

function SupplierCommission() {
  return (
    <>
     <div className="container-fluid allproducts">
     <div class="px-15px px-lg-25px">
                    
                    <div class="row">
                        <div class="col-lg-6">
                           <div class="card">
                                    <h3 class="mb-0 my-2 h6 text-center">Supplier Commission Activatation</h3>
                                <div class="card-body text-center">
                                   
                                 <div class="form-check form-switch">
            <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
             
                                  </div>
                                </div>
                            </div>
                        </div>
                
                        <div class="col-lg-6">
                           <div class="card">
                                    <h3 class="mb-0 my-2 h6 text-center">Category Based Commission</h3>
                                <div class="card-body text-center">
                                <div class="form-check form-switch">
                                <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
                                  </div>
                                </div>
                            </div>
                        </div>
                
                        <div class="col-lg-6 pt-5">
                            <div class="card">
                                  <h5 class="mb-0 my-2 text-center h6">Supplier Commission</h5>
                              <div class="card-body">
                                  <form class="form-horizontal" action="https://flippyseven.com/admin/vendor_commission_update" method="POST" enctype="multipart/form-data">
                                      <input type="hidden" name="_token" value="bh4kqLaouq3COBVO56jdmKR5Qe6c1wpNY0a97MsH"/>                    <div class="form-group row">
                                        <label class="col-md-4 col-from-label">Supplier Commission</label>
                                        <div class="col-md-8">
                                            <input type="hidden" name="types[]" value="vendor_commission"/>
                                            <div class="input-group">
                                                <input type="number" lang="en" min="0" step="0.01" value="3" placeholder="Supplier Commission" name="vendor_commission" class="form-control" fdprocessedid="1ic9ca"/>
                                                <div class="input-group-append">
                                                    <span class="input-group-text">%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group sss d-flex mb-0 mt-2 text-right">
                                    <div className="div"></div>
                                        <button type="submit" className='btn btn-sm rounded-pill' style={{ backgroundColor: "#E7F4FC", color: "#103A81",fontWeight: "bold",}}>Save</button>
                                    </div>
                                  </form>
                              </div>
                            </div>
                        </div>
                
                        <div class="col-lg-6 pt-5">
                          <div class="card" >
                                    <h5 class="mb-0 my-2 text-center h6">Note</h5>
                                <div class="card-body">
                                    <ul class="list-group">
                                        <li class="list-group-item text-muted">
                                            1. 3% of supplier product price will be deducted from supplier earnings.
                                        </li>
                                        <li class="list-group-item text-muted">
                                            2. If Category Based Commission is enabled, Set supplier commission percentage 0..
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                
                        <div class="col-lg-6 pt-4">
                           <div class="card">
                                  <h5 class="mb-0 my-2 text-center h6">Withdraw Supplier Amount</h5>
                              <div class="card-body">
                                  <form class="form-horizontal" action="https://flippyseven.com/admin/vendor_commission_update" method="POST" enctype="multipart/form-data">
                                      <input type="hidden" name="_token" value="bh4kqLaouq3COBVO56jdmKR5Qe6c1wpNY0a97MsH"/>                    
                                      <div class="form-group row">
                                        <label class="col-md-4 col-from-label">Minimum Supplier Amount Withdraw</label>
                                        <div class="col-md-8">
                                            <input type="hidden" name="types[]" value="minimum_seller_amount_withdraw"/>
                                            <div class="input-group">
                                                <input type="number" lang="en" min="0" step="0.01" value="100" placeholder="Minimum Supplier Amount Withdraw" name="minimum_seller_amount_withdraw" class="form-control" required="" fdprocessedid="op670r"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group sss mb-0 text-right d-flex">
                                    <div className="div"></div>
                                    <button type="submit" className='btn btn-sm rounded-pill' style={{ backgroundColor: "#E7F4FC", color: "#103A81",fontWeight: "bold",}}>Save</button>
                                       
                                    </div>
                                  </form>
                              </div>
                            </div>
                        </div>
                
                    </div>
                
                                </div>
     </div> 
    </>
  )
}

export default SupplierCommission
