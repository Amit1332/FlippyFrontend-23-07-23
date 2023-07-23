import React from 'react'
import "../Apperances/Apperance.css"

function Apperance() {
    return (
        <>
            <div className="container-fluid">
                <div class="col-lg-8 mx-auto">
                    <div class="card">
                        <div class="card-header">
                            <h6 class="fw-600 mb-0">General</h6>
                        </div>
                        <div class="card-body">
                            <form action="https://flippyseven.com/admin/business-settings/update" method="POST">
                                <input type="hidden" name="_token" value="IxfEHBJf9s4e2DtsTEwwPhgH68zyWoqduEu5e7uQ" />
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Frontend Website Name</label>
                                    <div class="col-md-8">
                                        <input type="hidden" name="types[]" value="website_name" />
                                        <input type="text" name="website_name" class="form-control" placeholder="Website Name" value="Flippy 7" fdprocessedid="bbojp" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Site Motto</label>
                                    <div class="col-md-8">
                                        <input type="hidden" name="types[]" value="site_motto" />
                                        <input type="text" name="site_motto" class="form-control" placeholder="Best eCommerce Website" value="No.1 Reseller Platform In India" fdprocessedid="dy7umb" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Site Icon</label>
                                    <div class="col-md-8">
                                        <div class="input-group " data-toggle="aizuploader" data-type="image">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text bg-soft-secondary">Browse</div>
                                            </div>
                                            <div class="form-control file-amount">1 File selected</div>
                                            <input type="hidden" name="types[]" value="site_icon" />
                                            <input type="hidden" name="site_icon" value="288" class="selected-files" />
                                        </div>
                                        <div class="file-preview box">
                                            <div class="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id="288" title="Logo.png">
                                                <div class="align-items-center align-self-stretch d-flex justify-content-center thumb">
                                                    <img src="//flippyseven.com/public/uploads/all/2XxuRE6EpIZPixCfgJyWzWe0lbrGF9AdlWeasHAW.png" class="img-fit" />
                                                </div>
                                                <div class="col body">
                                                    <h6 class="d-flex"><span class="text-truncate title">Logo</span><span class="ext flex-shrink-0">.png</span></h6><p>98 KB</p>
                                                </div>
                                                <div class="remove">
                                                    <button class="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="9odcdp"><i class="la la-close"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <small class="text-muted">Website favicon. 32x32 .png</small>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Website Base Color</label>
                                    <div class="col-md-8">
                                        <input type="hidden" name="types[]" value="base_color" />
                                        <input type="text" name="base_color" class="form-control" placeholder="#377dff" value="#164C96" fdprocessedid="tmkafc" />
                                        <small class="text-muted">Hex Color Code</small>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Website Base Hover Color</label>
                                    <div class="col-md-8">
                                        <input type="hidden" name="types[]" value="base_hov_color" />
                                        <input type="text" name="base_hov_color" class="form-control" placeholder="#377dff" value="#43B4C2" fdprocessedid="harl6" />
                                        <small class="text-muted">Hex Color Code</small>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary" fdprocessedid="j2j4vy">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h6 class="fw-600 mb-0">Global SEO</h6>
                        </div>
                        <div class="card-body">
                            <form action="https://flippyseven.com/admin/business-settings/update" method="POST" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="IxfEHBJf9s4e2DtsTEwwPhgH68zyWoqduEu5e7uQ" />    					<div class="form-group row">
                                    <label class="col-md-3 col-from-label">Meta Title</label>
                                    <div class="col-md-8">
                                        <input type="hidden" name="types[]" value="meta_title" />
                                        <input type="text" class="form-control" placeholder="Title" name="meta_title" value="No.1 Reseller Platform - FlippySeven" fdprocessedid="d745z" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Meta description</label>
                                    <div class="col-md-8">
                                        <input type="hidden" name="types[]" value="meta_description" />
                                        <textarea class="resize-off form-control" placeholder="Description" name="meta_description">Most trusted &amp;  best reseller platform in India.</textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Keywords</label>
                                    <div class="col-md-8">
                                        <input type="hidden" name="types[]" value="meta_keywords" />
                                        <textarea class="resize-off form-control" placeholder="Keyword, Keyword" name="meta_keywords">No.1 Reseller Platform - FlippySeven</textarea>
                                        <small class="text-muted">Separate with coma</small>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Meta Image</label>
                                    <div class="col-md-8">
                                        <div class="input-group " data-toggle="aizuploader" data-type="image">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text bg-soft-secondary">Browse</div>
                                            </div>
                                            <div class="form-control file-amount">1 File selected</div>
                                            <input type="hidden" name="types[]" value="meta_image" />
                                            <input type="hidden" name="meta_image" value="288" class="selected-files" />
                                        </div>
                                        <div class="file-preview box">
                                            <div class="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id="288" title="Logo.png">
                                                <div class="align-items-center align-self-stretch d-flex justify-content-center thumb">
                                                    <img src="//flippyseven.com/public/uploads/all/2XxuRE6EpIZPixCfgJyWzWe0lbrGF9AdlWeasHAW.png" class="img-fit" />
                                                </div>
                                                <div class="col body">
                                                    <h6 class="d-flex"><span class="text-truncate title">Logo</span><span class="ext flex-shrink-0">.png</span></h6><p>98 KB</p>
                                                </div>
                                                <div class="remove">
                                                    <button class="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="dgvjzbc"><i class="la la-close"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary" fdprocessedid="5sl7pd">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h6 class="fw-600 mb-0">Cookies Agreement</h6>
                        </div>
                        <div class="card-body">
                            <form action="https://flippyseven.com/admin/business-settings/update" method="POST" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="IxfEHBJf9s4e2DtsTEwwPhgH68zyWoqduEu5e7uQ" />    					<div class="form-group row">
                                    <label class="col-md-3 col-from-label">Cookies Agreement Text</label>
                                    <div class="col-md-8">
                                        <input type="hidden" name="types[]" value="cookies_agreement_text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Show Cookies Agreement?</label>
                                    <div class="col-md-8">
                                        <label class="aiz-switch aiz-switch-success mb-0">
                                            <input type="hidden" name="types[]" value="show_cookies_agreement" />
                                            <input type="checkbox" name="show_cookies_agreement" />
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary" fdprocessedid="6n9ebh">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h6 class="fw-600 mb-0">Website Popup</h6>
                        </div>
                        <div class="card-body">
                            <form action="https://flippyseven.com/admin/business-settings/update" method="POST" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="IxfEHBJf9s4e2DtsTEwwPhgH68zyWoqduEu5e7uQ" />
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Show website popup?</label>
                                    <div class="col-md-8">
                                        <label class="aiz-switch aiz-switch-success mb-0">
                                            <input type="hidden" name="types[]" value="show_website_popup" />
                                            <input type="checkbox" name="show_website_popup" />
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Popup content</label>
                                    <div class="col-md-8">
                                        <input type="hidden" name="types[]" value="website_popup_content" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Show Subscriber form?</label>
                                    <div class="col-md-8">
                                        <label class="aiz-switch aiz-switch-success mb-0" >
                                        <input type="hidden" name="types[]" value="show_subscribe_form" />
                                        <input type="checkbox" name="show_subscribe_form"/>
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary" fdprocessedid="9840ll">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h6 class="fw-600 mb-0">Custom Script</h6>
                        </div>
                        <div class="card-body">
                            <form action="https://flippyseven.com/admin/business-settings/update" method="POST" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="IxfEHBJf9s4e2DtsTEwwPhgH68zyWoqduEu5e7uQ" />                        <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Header custom script - before &lt;/head&gt;</label>
                                    <div class="col-md-8">
                                        <input type="hidden" name="types[]" value="header_script" />
                                        <textarea name="header_script" rows="4" class="form-control" placeholder="<script>...</script>"></textarea>
                                        <small>Write script with &lt;script&gt; tag</small>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-from-label">Footer custom script - before &lt;/body&gt;</label>
                                    <div class="col-md-8">
                                        <input type="hidden" name="types[]" value="footer_script" />
                                        <textarea name="footer_script" rows="4" class="form-control" placeholder="<script>...</script>"></textarea>
                                        <small>Write script with &lt;script&gt; tag</small>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary" fdprocessedid="b2805a">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Apperance
