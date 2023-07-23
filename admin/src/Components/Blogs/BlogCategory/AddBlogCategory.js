import React from 'react'

const AddBlogCategory = () => {
  return (
    <div>
       <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
            <h3 class="mb-0 h6 text-center">Add Blog Category Information</h3>
            </div>
            <form>
                 
            <div class="aiz-main-content mt-5">
				<div class="px-15px px-lg-25px">
                    
<div class="row">
    <div class="col-lg-7 mx-auto">
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0 h6"style={{color:"#4F4F4F", fontSize:".9rem"}}>Category Information</h5>
            </div>

            <form class="form-horizontal setpgcred"  >
                 <div class="card-body">
                    <div class="form-group row">
                        <label class="col-sm-3 col-from-label" for="name"style={{color:"#4F4F4F", fontSize:".9rem"}}>Name</label>
                        <div class="col-sm-9">
                            <input type="text" placeholder="Name" id="name" name="name" class="form-control" required=""
                            />
                        </div>
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
    </div>
  )
}

export default AddBlogCategory
