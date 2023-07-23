import React from "react";
import Select from "react-select";

function Create_New_Coupon() {
    const options = [
        {value:"jjjdfhjs", label:"dsafaafahg"},
        {value:"jjjdfhjs", label:"dsafaafahg"},
        {value:"jjjdfhjs", label:"dsafaafahg"},
    
    
    ]
    return (
        <div className="container-fluid allproducts">
        <div className="new_coupon">
            <div className="card p-3 px-4" style={{width:"45%", margin:'0 auto'}}>
                <h5>Coupon Information Adding</h5>
                <hr className="text-dark text-opacity-50" />
                <div className="d-flex align-items-center justify-content-between">
                    <h6 style={{marginBottom:"0px", fontWeight:600, fontSize:".9rem"}}>Coupon Type</h6>
                    <Select
                        options={options}
                        name="attributedata"
                      
                        className="form-control p-0 attributedata"
                        classNamePrefix="select"
                        isClearable
                      />
                </div>
                <div className="d-flex justify-content-end mt-3">
                <div className="btn btn-sm rounded-pill"
                 style={{
                    color: "#103A81",
                    fontWeight: "bold",
                    backgroundColor: "#E7F4FC",
                  }}
                >Save</div>
                </div>
            </div>
        </div>
        </div>

    )
}
export default Create_New_Coupon
