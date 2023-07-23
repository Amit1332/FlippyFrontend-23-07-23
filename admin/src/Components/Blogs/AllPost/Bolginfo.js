import React from 'react'
import "../AllPost/AllPost.css"
import Select from "react-select";


function Bolginfo() {
    const options =[

    ]
    return (
        <>


            <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 h6 text-center">Blog Information</h3>
            </div>
            <form>
               

                
              <div class="aiz-main-content mt-5">
				<div class="px-15px px-lg-25px">
                    
<div class="row">
    <div class="col-lg-7 mx-auto">
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0 h6"style={{color:"#4F4F4F", fontSize:".9rem"}}>Staff Information</h5>
            </div>

            <form class="form-horizontal setpgcred"  >
                 <div class="card-body">
                    <div class="form-group row">
                        <label class="col-sm-3 col-from-label" for="name"style={{color:"#4F4F4F", fontSize:".9rem"}}>Blog Title</label>
                        <div class="col-sm-9">
                            <input type="text" placeholder="Name" id="name" name="name" class="form-control" required=""
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-from-label" for="name" style={{color:"#4F4F4F", fontSize:".9rem"}}>Category</label>
                        <div class="col-sm-9">
                        <Select
                        options={options}
                        className="p-0 attributedata"
                        classNamePrefix="select"
                        
                       
                        isClearable
                      />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-from-label" for="mobile"style={{color:"#4F4F4F", fontSize:".9rem"}}>Slug</label>
                        <div class="col-sm-9">
                            <input type="number" placeholder="Phone" id="mobile" name="phone" class="form-control" required=""
                          
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-from-label" for="password" style={{color:"#4F4F4F", fontSize:".9rem"}}>Meta Title</label>
                        <div class="col-sm-9">
                            <input type="password" placeholder="Password" id="password" name="password" class="form-control" required=""
                           
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-from-label" for="password" style={{color:"#4F4F4F", fontSize:".9rem"}}>Meta Description</label>
                        <div class="col-sm-9">
                            <input type="password" placeholder="Password" id="password" name="password" class="form-control" required=""
                           
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-from-label" for="password" style={{color:"#4F4F4F", fontSize:".9rem"}}>Meta Keyboard</label>
                        <div class="col-sm-9">
                            <input type="password" placeholder="Password" id="password" name="password" class="form-control" required=""
                           
                            />
                        </div>
                    </div>
                   
                    <div class="form-group mb-0 d-flex aligh-items-end justify-content-end">
                    <button
                        type="submit"
                        class="btn btn-sm rounded-pill"
                        style={{
                          color: "#103A81",
                          fontWeight: "bold",
                          backgroundColor: "#E7F4FC",
                        }}
                        >Save</button>
                    </div>
                </div>
            </form>

</div>

				</div>
				
			</div>
    </div>
    </div>
                   

                    

                    


                  

                  

                   
            
               
            </form>
          </div>
        </div>















   
      </div>

        </>
    )
}

export default Bolginfo















