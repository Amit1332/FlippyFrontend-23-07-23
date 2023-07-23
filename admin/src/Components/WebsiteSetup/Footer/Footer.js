import React from 'react'
import "../Footer/Footer.css"

function Footer() {
    return (
        <>
        
        <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 h6 text-center">Website Footer</h3>
              </div>
              <div className="productsfilter">
            </div>
              <div class="px-15px px-lg-25px">

                   

<div class="card bg-transparent">
    <div class="card-header">
        <h3 class="mb-0 h6 " style={{fontWeight:"500"}}>Footer Widget</h3>

    </div>
    <div class="card-body">
        <div class="row gutters-10">
            <div class="col-lg-6">
                <div class="card shadow-none">
                    <div class="card-header">
                        <h5 class="mb-0" style={{ fontWeight: "500", fontSize:"1rem" }}>About Widget</h5>
                    </div>
                    <div class="card-body">
                        <form action="https://flippyseven.com/admin/business-settings/update" method="POST" enctype="multipart/form-data">
                            <input type="hidden" name="_token" value="c5ZQMEO1LqUHn9EiV2DP8i30Q72f7qPZySXtkXmM" />
                            <div class="form-group">
                                <label style={{ fontWeight: "600", fontSize:".9rem" }}>Footer Logo</label>
                                <div class="mb-3 mt-2">
                                    <input class="form-control" type="file" id="formFile" />
                                </div>
                                <div class="file-preview d-flex justify-content-between align-items-center">
                                    <div class="d-flex justify-content-between align-items-center gap-3 p-2" data-id="288" title="Logo.png">
                                        <div class="align-items-center align-self-stretch d-flex justify-content-center thumb">
                                            <img src="//flippyseven.com/public/uploads/all/2XxuRE6EpIZPixCfgJyWzWe0lbrGF9AdlWeasHAW.png" class="img-fit" alt=""/>
                                        </div>
                                        <div class="col body "><h6 class="d-flex mb-0"><span class="text-truncate title">Logo</span><span class="ext flex-shrink-0">.png</span></h6><p className='mb-0'>98 KB</p></div>
                                    </div>
                                        <div class="remove"><button class="btn btn-sm bg-light bg-opacity-50 btn-link remove-attachment" type="button" fdprocessedid="zcqwva"><i class="la la-close"></i></button></div>
                                </div>
                            </div>
                            <div class="form-group mt-2 mb-3">
                                <label style={{ fontWeight: "600", fontSize:".9rem" }}>About description (Translatable)</label>
                                <input type="hidden" name="types[][en]" value="about_us_description" />

                            </div>
                            {/* </div> */}

                            <div class="form-group">
                                <label className='mb-2' style={{ fontWeight: "600", fontSize:".9rem" }}>Play Store Link</label>
                                <input type="hidden" name="types[]" value="play_store_link" />
                                <input type="text" class="form-control" placeholder="http://" name="play_store_link" value="https://play.google.com/store/apps/details?id=com.flippyseven.flippyseven" fdprocessedid="x3y48f" />
                            </div>
                            <div class="form-group">
                                <label className='mb-2 mt-2' style={{ fontWeight: "600", fontSize:".9rem" }}>App Store Link</label>
                                <input type="hidden" name="types[]" value="app_store_link" />
                                <input type="text" class="form-control" placeholder="http://" name="app_store_link" value="#" fdprocessedid="bh682k" />
                            </div>
                            <div class=" d-flex mt-2 justify-content-end">
                                <button type="submit" class="btn btn-sm rounded-pill" fdprocessedid="ae5ru"style={{ color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",}}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card shadow-none ">
                    <div class="card-header">
                    <h5 class="mb-0" style={{ fontWeight: "500", fontSize:"1rem" }}>Contact Widget</h5>

                    </div>
                    <div class="card-body">
                        <form action="https://flippyseven.com/admin/business-settings/update" method="POST" enctype="multipart/form-data">
                            <input type="hidden" name="_token" value="c5ZQMEO1LqUHn9EiV2DP8i30Q72f7qPZySXtkXmM" />                                <div class="form-group">
                                <label className='mb-2' style={{ fontWeight: "600", fontSize:".9rem" }}>Contact address (Translatable)</label>
                                <input type="hidden" name="types[][en]" value="contact_address" />
                                <input type="text" class="form-control" placeholder="Address" name="contact_address" value="Headquarter : Bhopal" fdprocessedid="o5qxah" />
                            </div>
                            <div class="form-group">
                                <label className='mb-2 mt-2' style={{ fontWeight: "600", fontSize:".9rem" }}>Contact phone</label>
                                <input type="hidden" name="types[]" value="contact_phone" />
                                <input type="text" class="form-control" placeholder="Phone" name="contact_phone" value="0755 4857712" fdprocessedid="qaxldg" />
                            </div>
                            <div class="form-group">
                                <label className='mt-2 mb-2' style={{ fontWeight: "600", fontSize:".9rem" }}>Contact email</label>
                                <input type="hidden" name="types[]" value="contact_email" />
                                <input type="text" class="form-control" placeholder="Email" name="contact_email" value="help@flippyseven.com" fdprocessedid="fgt7rw" />
                            </div>
                            <div class="text-right justify-content-end d-flex mt-2">
                            <button type="submit" class="btn btn-sm rounded-pill" fdprocessedid="ae5ru"style={{ color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",}}>Update</button>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 mt-4">
                <div class="card shadow-none ">
                    <div class="card-header">
                        <h5 class="mb-0" style={{ fontWeight: "500", fontSize:"1rem" }}>Link Widget One</h5>
                    </div>
                    <div class="card-body">
                        <form action="https://flippyseven.com/admin/business-settings/update" method="POST" enctype="multipart/form-data">
                            <input type="hidden" name="_token" value="c5ZQMEO1LqUHn9EiV2DP8i30Q72f7qPZySXtkXmM" />    							<div class="form-group">
                                <label className='mb-2'style={{ fontWeight: "600", fontSize:".9rem" }}>Title (Translatable)</label>
                                <input type="hidden" name="types[][en]" value="widget_one" />
                                <input type="text" class="form-control" placeholder="Widget title" name="widget_one" value="" fdprocessedid="sfygr8" />
                            </div>
                            <div class="form-group">
                                <label className='mb-2 mt-2' style={{ fontWeight: "600", fontSize:".9rem" }}>Links - (Translatable Label)</label>
                                <div class="w3-links-target">
                                    <input type="hidden" name="types[][en]" value="widget_one_labels" />
                                    <input type="hidden" name="types[]" value="widget_one_links" />
                                </div>
                            </div>
                            <div class="text-right d-flex justify-content-between mt-2">
                                <button type="button" class="btn btn-soft-secondary rounded-pill bg-light bg-opacity-75 " data-toggle="add-more" >Add New</button>
                                <button type="submit" class="btn btn-sm rounded-pill" fdprocessedid="ae5ru"style={{ color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",}}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="card mt-4 bg-transparent">
    <div class="card-header">
        <h4 class="fw-600 mb-0" style={{ fontWeight: "500", fontSize:"1rem" }}>Footer Bottom</h4>
    </div>
    <form action="https://flippyseven.com/admin/business-settings/update" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="_token" value="c5ZQMEO1LqUHn9EiV2DP8i30Q72f7qPZySXtkXmM" />
        <div class="card-body">
            <div class="card shadow-none ">
                <div class="card-header">
                    <h5 class="mb-0"style={{ fontWeight: "500", fontSize:"1rem" }}>Copyright Widget</h5>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label style={{ fontWeight: "600", fontSize:".9rem" }}>Copyright Text (Translatable)</label>
                        <input type="hidden" name="types[][en]" value="frontend_copyright_text" />

                    </div>
                </div>
            </div>
            <div class="card shadow-none  mt-4">
                <div class="card-header">
                    <h5 class="mb-0" style={{ fontWeight: "500", fontSize:"1rem" }}>Social Link Widget</h5>
                </div>
                <div class="card-body">
                    <div class="form-group row mb-4">
                        <label class="col-md-3 col-from-label">Show Social Links?</label>
                        <div class="col-md-9">
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round"></span>
                        </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label className='mb-2' style={{ fontWeight: "600", fontSize:".9rem" }}>Social Links</label>
                        <div class="input-group form-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="lab la-facebook-f"></i></span>
                            </div>
                            <input type="hidden" name="types[]" value="facebook_link" />
                            <input type="text" class="form-control" placeholder="http://" name="facebook_link" value="https://www.facebook.com/profile.php?id=100085167445881" fdprocessedid="0icllb" />
                        </div>
                        <div class="input-group form-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="lab la-twitter"></i></span>
                            </div>
                            <input type="hidden" name="types[]" value="twitter_link" />
                            <input type="text" class="form-control" placeholder="http://" name="twitter_link" value="https://twitter.com/FlippySeven" fdprocessedid="1a9gbk" />
                        </div>
                        <div class="input-group form-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="lab la-instagram"></i></span>
                            </div>
                            <input type="hidden" name="types[]" value="instagram_link" />
                            <input type="text" class="form-control" placeholder="http://" name="instagram_link" value="https://www.instagram.com/flippysevenapp/" fdprocessedid="unhn9" />
                        </div>
                        <div class="input-group form-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="lab la-youtube"></i></span>
                            </div>
                            <input type="hidden" name="types[]" value="youtube_link" />
                            <input type="text" class="form-control" placeholder="http://" name="youtube_link" value="#" fdprocessedid="z2ypf" />
                        </div>
                        <div class="input-group form-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="lab la-linkedin-in"></i></span>
                            </div>
                            <input type="hidden" name="types[]" value="linkedin_link" />
                            <input type="text" class="form-control" placeholder="http://" name="linkedin_link" value="https://www.linkedin.com/in/flippy-seven-084103255/" fdprocessedid="2w4lcl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow-none mt-4">
                <div class="card-header">
                    <h5 class="mb-0"style={{ fontWeight: "500", fontSize:"1rem" }}>Payment Methods Widget</h5>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label style={{ fontWeight: "600", fontSize:".9rem" }}>Payment Methods</label>
                        <div class="mb-3 mt-2">
                                    <input class="form-control" type="file" id="formFile" />
                                </div>
                    </div>
                </div>
            </div>

            <div class="text-right d-flex justify-content-end mt-3">
                <button type="submit" class="btn btn-sm rounded-pill" fdprocessedid="ae5ru"style={{ color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",}}>Update</button>
            </div>
        </div>
    </form>
</div>
</div>



</div>
</div></div> 

            <div className="container-fluid">
                
            </div >
        </>
    )
}

export default Footer
