import React from 'react'
import Select from 'react-select'

import "../Uploadfiles/Uploadfile.css"

function Uploadfile() {
    const options = [
        { value: 'jai prakash', label: 'jai prakash' },
        { value: 'Sonu enterprise', label: 'Sonu enterprise' },
        { value: 'Jai Enerprise', label: 'Jai Enerprise' }
      ]
    return (
        <>
            <div className="container-fluid">
                <div class="aiz-main-content">
                    <div class="px-15px px-lg-25px">
                        <div class="aiz-titlebar  mt-2 mb-3">
                            <div class="justify-content-between d-flex align-items-center">
                            <h3 class="mb-0 my-2 h6 text-center">All uploaded files</h3>
                    <button className="btn btn-sm rounded-pill" style={{ backgroundColor: "#E7F4FC", color: "#103A81",fontWeight: "bold",}}>Upload New File</button>
                                  
                               
                            </div>
                        </div>

                        <div class="card">
                            <form id="sort_uploads" action="">
                                <div class="card-header row gutters-5">
                                    <div class="col-md-3">
                                        <h5 class="mb-0 h6">All files</h5>
                                    </div>
                                    <div className="col"></div>

                                    <div className="col-md-3">
              <Select options={options} 
              placeholder="All Supplier"
              className='aab'
              />

            </div>
           
                                    <div class="col-md-3">
                                        <input type="text" class="form-control form-control-xs" name="search" placeholder="Search your files" value=""/>
                                    </div>
                                    <div class="col-auto">
                    <button className="btn btn-sm rounded-pill" style={{ backgroundColor: "#E7F4FC", color: "#103A81",fontWeight: "bold",}}>Search</button>

                                    </div>
                                </div>
                            </form>
                            <div class="card-body">
                                <div class="row gutters-5">
                                                                       <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2475">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/ksLZ2ifE7liBmIKJRba72vBMcJ6DmrEeb2DgfhIJ.jpg" target="_blank" download="DSC_7982.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/ksLZ2ifE7liBmIKJRba72vBMcJ6DmrEeb2DgfhIJ.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2475" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_7982.jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/ksLZ2ifE7liBmIKJRba72vBMcJ6DmrEeb2DgfhIJ.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_7982</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>365.15 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2473">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/XsBIVLYlK4FtjFz5dBvSnEFk8z9SKf7QPrkF3SlR.jpg" target="_blank" download="B (3).jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/XsBIVLYlK4FtjFz5dBvSnEFk8z9SKf7QPrkF3SlR.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2473" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="B (3).jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/XsBIVLYlK4FtjFz5dBvSnEFk8z9SKf7QPrkF3SlR.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">B (3)</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>39.68 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2472">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/qHi1TkZWpzTtVOhejgH0uKkJtzeBUnzhW4cGO4oO.jpg" target="_blank" download="DSC_8478.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/qHi1TkZWpzTtVOhejgH0uKkJtzeBUnzhW4cGO4oO.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2472" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_8478.jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/qHi1TkZWpzTtVOhejgH0uKkJtzeBUnzhW4cGO4oO.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_8478</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>619.21 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2471">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/Ik7yhutvjDtbVtDmBcGGUJbSUhMqPna3g3wQePDc.jpg" target="_blank" download="E (4).jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/Ik7yhutvjDtbVtDmBcGGUJbSUhMqPna3g3wQePDc.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2471" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="E (4).jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/Ik7yhutvjDtbVtDmBcGGUJbSUhMqPna3g3wQePDc.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">E (4)</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>129.65 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2468">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/LVuCQQzRaryHAizTIpveMw2e91LoASeecSpahK5C.jpg" target="_blank" download="E (1).jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/LVuCQQzRaryHAizTIpveMw2e91LoASeecSpahK5C.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2468" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="E (1).jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/LVuCQQzRaryHAizTIpveMw2e91LoASeecSpahK5C.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">E (1)</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>98.37 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2469">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/lmWhJE6GZ4tv2lmEkNpnLvV8IWemCefX7rHGeT3Q.jpg" target="_blank" download="E (3).jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/lmWhJE6GZ4tv2lmEkNpnLvV8IWemCefX7rHGeT3Q.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2469" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="E (3).jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/lmWhJE6GZ4tv2lmEkNpnLvV8IWemCefX7rHGeT3Q.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">E (3)</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>89.22 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2470">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/WDqQrsJHbyM4B36HmTC3r9z2hSb1t3AldfF47Cs8.jpg" target="_blank" download="E (2).jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/WDqQrsJHbyM4B36HmTC3r9z2hSb1t3AldfF47Cs8.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2470" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="E (2).jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/WDqQrsJHbyM4B36HmTC3r9z2hSb1t3AldfF47Cs8.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">E (2)</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>100.06 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2466">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/vwDSjuunnlCwb2vA3UJ1QP1O3JnK97HjLx3gYYCS.jpg" target="_blank" download="DSC_5882.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/vwDSjuunnlCwb2vA3UJ1QP1O3JnK97HjLx3gYYCS.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2466" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5882.jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/vwDSjuunnlCwb2vA3UJ1QP1O3JnK97HjLx3gYYCS.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5882</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>105.77 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2467">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/k8a0Q5oKzPfaPQoSHnRNsFQGli9viV09IcRCQ0bC.jpg" target="_blank" download="DSC_3816.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/k8a0Q5oKzPfaPQoSHnRNsFQGli9viV09IcRCQ0bC.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2467" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_3816.jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/k8a0Q5oKzPfaPQoSHnRNsFQGli9viV09IcRCQ0bC.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_3816</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>272.84 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2465">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/nn7HoeAG5XReRQjHLj5Eo2qcFnhmiEbGSTkSUEvA.jpg" target="_blank" download="DSC_5884.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/nn7HoeAG5XReRQjHLj5Eo2qcFnhmiEbGSTkSUEvA.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2465" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5884.jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/nn7HoeAG5XReRQjHLj5Eo2qcFnhmiEbGSTkSUEvA.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5884</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>67.38 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2464">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/Vj6eNuZf8gheBQCsJ3YvaAjI7zT8LQ3tzyXctrKJ.jpg" target="_blank" download="DSC_5881.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/Vj6eNuZf8gheBQCsJ3YvaAjI7zT8LQ3tzyXctrKJ.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2464" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5881.jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/Vj6eNuZf8gheBQCsJ3YvaAjI7zT8LQ3tzyXctrKJ.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5881</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>63.06 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2463">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/9UnDL43QHyo64Z2uCunifSMIukZwbA1Q39uGeDDU.jpg" target="_blank" download="DSC_5883.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/9UnDL43QHyo64Z2uCunifSMIukZwbA1Q39uGeDDU.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2463" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5883.jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/9UnDL43QHyo64Z2uCunifSMIukZwbA1Q39uGeDDU.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5883</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>54.23 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2462">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/jIYaK1DqYZNpjPyByBEME0obxHwgxXXrXf7TQlHo.jpg" target="_blank" download="DSC_3776.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/jIYaK1DqYZNpjPyByBEME0obxHwgxXXrXf7TQlHo.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2462" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_3776.jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/jIYaK1DqYZNpjPyByBEME0obxHwgxXXrXf7TQlHo.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_3776</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>358.64 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2461">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/S6uUBQypB2hG8WRGiiK0FWsI4GKjt7LT6eT3I0vd.jpg" target="_blank" download="DSC_5632.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/S6uUBQypB2hG8WRGiiK0FWsI4GKjt7LT6eT3I0vd.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2461" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5632.jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/S6uUBQypB2hG8WRGiiK0FWsI4GKjt7LT6eT3I0vd.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5632</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>77.33 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2460">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/3FEKwYwlkT1ymV592dJERecBiOibpBTplgrrmQ0Y.jpg" target="_blank" download="DSC_5635.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/3FEKwYwlkT1ymV592dJERecBiOibpBTplgrrmQ0Y.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2460" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5635.jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/3FEKwYwlkT1ymV592dJERecBiOibpBTplgrrmQ0Y.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5635</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>58.39 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2459">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/ZL1yTmfbbODFNTZRDo4W8yWxCmkN0W2NFO88Dze6.jpg" target="_blank" download="DSC_5631.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/ZL1yTmfbbODFNTZRDo4W8yWxCmkN0W2NFO88Dze6.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2459" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5631.jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/ZL1yTmfbbODFNTZRDo4W8yWxCmkN0W2NFO88Dze6.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5631</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>45.87 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2458">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/j8BpIp8r58WCAWAQohNwfhhDpqHutRsOd6GG5Nfd.jpg" target="_blank" download="DSC_5633.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/j8BpIp8r58WCAWAQohNwfhhDpqHutRsOd6GG5Nfd.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2458" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5633.jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/j8BpIp8r58WCAWAQohNwfhhDpqHutRsOd6GG5Nfd.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5633</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>41.28 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2457">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/JmvO12yRpD4FfWVuW4tiMJi2rjmWBJAXDnzy9ZC7.jpg" target="_blank" download="DSC_3788.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/JmvO12yRpD4FfWVuW4tiMJi2rjmWBJAXDnzy9ZC7.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2457" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_3788.jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/JmvO12yRpD4FfWVuW4tiMJi2rjmWBJAXDnzy9ZC7.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_3788</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>283.6 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2456">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/xfsinlQRM10NeaENrak8NlW0wie7lJTSGrUOzVcI.jpg" target="_blank" download="DSC_5664.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/xfsinlQRM10NeaENrak8NlW0wie7lJTSGrUOzVcI.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2456" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5664.jpg">
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/xfsinlQRM10NeaENrak8NlW0wie7lJTSGrUOzVcI.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5664</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>78.81 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2454">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/HP2jk5jJrGK5Ifld5hBDssC1H9KlIiuSaKjaliK7.jpg" target="_blank" download="DSC_5667.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/HP2jk5jJrGK5Ifld5hBDssC1H9KlIiuSaKjaliK7.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2454" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5667.jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/HP2jk5jJrGK5Ifld5hBDssC1H9KlIiuSaKjaliK7.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5667</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>51.65 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2455">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/j1dHc5JFIGgMnzqrdelBbXNBoLtf96bvxCMAbLkS.jpg" target="_blank" download="DSC_5662.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/j1dHc5JFIGgMnzqrdelBbXNBoLtf96bvxCMAbLkS.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2455" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5662.jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/j1dHc5JFIGgMnzqrdelBbXNBoLtf96bvxCMAbLkS.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5662</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>55.72 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2453">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/F3n0ZOtcflnVLm51HNPTXxbBn5qVnACSGs8nJ7cn.jpg" target="_blank" download="DSC_5665.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/F3n0ZOtcflnVLm51HNPTXxbBn5qVnACSGs8nJ7cn.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2453" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_5665.jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/F3n0ZOtcflnVLm51HNPTXxbBn5qVnACSGs8nJ7cn.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_5665</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>40.2 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2452">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/9gPJ92C2eNduemktneqfLafGg1FzNuT5L7j52oPb.jpg" target="_blank" download="DSC_3336.jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/9gPJ92C2eNduemktneqfLafGg1FzNuT5L7j52oPb.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2452" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="DSC_3336.jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/9gPJ92C2eNduemktneqfLafGg1FzNuT5L7j52oPb.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">DSC_3336</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>98.41 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2417">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/jU3VnxWf8k2GH6gRxj4FertJZRvG6ZtgWCrpcNim.jpg" target="_blank" download="N (1).jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/jU3VnxWf8k2GH6gRxj4FertJZRvG6ZtgWCrpcNim.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2417" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="N (1).jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/jU3VnxWf8k2GH6gRxj4FertJZRvG6ZtgWCrpcNim.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">N (1)</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>65.32 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto w-140px w-lg-220px posrele">
                                        <div class="aiz-file-box">
                                            <div class="dropdown-file">
                                                <a class="dropdown-link" data-toggle="dropdown">
                                                     <i class="la la-ellipsis-v threedotimg" ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="detailsInfo(this)" data-id="2415">
                                                        <i class="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://flippyseven.com/public/uploads/all/2TqSmMOVhDyI8GP23PLuVIpoL6Y8you1vz9KKPQ8.jpg" target="_blank" download="N (2).jpg" class="dropdown-item">
                                                        <i class="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)" data-url="https://flippyseven.com/public/uploads/all/2TqSmMOVhDyI8GP23PLuVIpoL6Y8you1vz9KKPQ8.jpg">
                                                        <i class="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert" data-href="https://flippyseven.com/admin/uploaded-files/destroy/2415" data-target="#delete-modal">
                                                        <i class="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file aiz-uploader-select c-default" title="N (2).jpg" >
                                                <div class="card-file-thumb">
                                                    <img src="https://flippyseven.com/public/uploads/all/2TqSmMOVhDyI8GP23PLuVIpoL6Y8you1vz9KKPQ8.jpg" class="img-fit"/>
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">N (2)</span>
                                                        <span class="ext">.jpg</span>
                                                    </h6>
                                                    <p>51.98 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="aiz-pagination mt-3">
                                    <nav>
                                        <ul class="pagination">

                                            <li class="page-item">
                                                <a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=1" rel="prev" aria-label="« Previous">‹</a>
                                            </li>





                                            <li class="page-item"><a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=1">1</a></li>
                                            <li class="page-item active" aria-current="page"><span class="page-link">2</span></li>
                                            <li class="page-item"><a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=3">3</a></li>
                                            <li class="page-item"><a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=4">4</a></li>
                                            <li class="page-item"><a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=5">5</a></li>
                                            <li class="page-item"><a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=6">6</a></li>
                                            <li class="page-item"><a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=7">7</a></li>
                                            <li class="page-item"><a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=8">8</a></li>
                                            <li class="page-item"><a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=9">9</a></li>
                                            <li class="page-item"><a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=10">10</a></li>

                                            <li class="page-item disabled" aria-disabled="true"><span class="page-link">...</span></li>

                                            <li class="page-item"><a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=39">39</a></li>
                                            <li class="page-item"><a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=40">40</a></li>


                                            <li class="page-item">
                                                <a class="page-link" href="https://flippyseven.com/admin/uploaded-files?page=3" rel="next" aria-label="Next »">›</a>
                                            </li>
                                        </ul>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

        </>
    )
}

export default Uploadfile
