import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import "../Brand/Brand.css";
import "./Attribute.css";

import {allAttribute, clearErrors, createAttribute, deleteAttribute, deleteAttributeValue } from "../../../actions/attributeActions";
import { ATTRIBUTE_RESET, DELETE_ATTRIBUTE_RESET, DELETE_ATTRIBUTE_VALUES_RESET  } from "../../../constants/attributeConstant";

const Attributes = () => {

    
    

  const Navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  // get all attribute
  const {  error, allattribute } = useSelector(
    (state) => state.attributes
  );
  // create attribute
const {error:createdError,success} = useSelector((state)=>state.createAttribute)


  // delete attribute
  const { error:deleteError, isDeleted } = useSelector(
    (state) => state.deleteAttribute
  );

// delete attribute value
  const {error:deleteAtrValError,isDeletedValue} = useSelector(
    (state) => state.deleteAttributeVal
  );


  // delete attribute handler
  const deleteAttributeHandler = (id) => {
    dispatch(deleteAttribute(id));
  };



  // delete attribute values
  const deleteAttrValHandler = (attrId,attrValId) => {
    dispatch(deleteAttributeValue(attrId,attrValId));
  };


  const [attributeData,setAttributeData] = useState({  
    name:'',
    val:'',
    
  });
  
  
  
  
  const handleInputs =(e)=>{
    const name =e.target.name
    const value = e.target.value
    setAttributeData({...attributeData,[name]:value })

  }







  useEffect(() => {
    if (error) {
      alert.error(
        <>
          <div style={{ color: "white" }}>{error}</div>
        </>
      );
      dispatch(clearErrors());
    }

    // delete attribute
    if (deleteError) {
      alert.error(
        <div style={{ color: "white", fontSize: "10px" }}>
          Unable To Delete Attribute
        </div>
      );
      dispatch(clearErrors());
    }



    
    // created attribute error
if (createdError) {
  alert.error(
    <div style={{ color: "white", fontSize: "10px" }}>
{
  createdError
}
    </div>
  );
  dispatch(clearErrors());
}



    // delete attribute val
    if (deleteAtrValError) {
      alert.error(
        <div style={{ color: "white", fontSize: "10px" }}>
        Unable to Delete
        </div>
      );
      dispatch(clearErrors());
    }


    //  Deleted attribute
    if (isDeleted) {
      dispatch({ type: DELETE_ATTRIBUTE_RESET });
      alert.success(
        <div style={{ color: "white", fontSize: "10px" }}>
          Attribute Deleted Successfully
        </div>
      );
    }




    // deleted attribute values

    if (isDeletedValue) {
    dispatch({ type: DELETE_ATTRIBUTE_VALUES_RESET });
    alert.success(
      <div style={{ color: "white", fontSize: "10px" }}>
       Deleted Successfully
      </div>
    );
  }
   




// created attribute
    if(success){
      alert.success(
        <div style={{ color: "white", fontSize: "10px" }}>
             Attribute Created Successfully
        </div>
      )
      dispatch({type:ATTRIBUTE_RESET})
    }
   
  
    
    

    // get all Attribute

    dispatch(allAttribute());
  }, [dispatch, error, alert, deleteError, Navigate, success, isDeleted,isDeletedValue,deleteAtrValError,createdError]);






  // submit attribute data
  const submitAttribute =(e)=>{
    e.preventDefault();
   dispatch(createAttribute(attributeData))

  }



  function myFunction() {
    // Declare variables
    let llk = document.querySelector(".llk")
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    llk.style.display="block"
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  window.addEventListener('click',function(){
    let llk = document.querySelector(".llk")
    llk.style.display="none"
  
  })
  function getvalueofparent(e){
    let input = document.getElementById('myInput')
    const option  =e.target.textContent
    input.value =option
    setAttributeData({ ...attributeData, 'name': e.target.textContent });
   
   
   }

  return (
    <>
   
   <div className="container-fluid allproducts">
            <div className="innerallproducts">
              <div className="productheading">
                <div className="productheadingtop">
                  <h3 class="mb-0 h6 text-center">All Attributes</h3>
                </div>

                <div className="row p-0">
                <div className="col-7 px-2">
                    <div className="brandlabel">
                      <div class="">
                        <span>Attributes</span>
                      </div>
                      <div className="col-md-3 p-2">

<div class="form-group">
  <input
    type="search"
    class="aab form-control"
    placeholder="type name & enter . . ."
  />
</div>
</div>
                    </div>
                    
            <div className="card p-0">

    <div class="table-responsive producscroller_responsive">
  <table class="table  css-serial text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
                          <tr>
                            <th scope="col">
                              S.No.
                            </th>

                            <th scope="col">
                             Attributes
                            </th>
                            <th scope="col">
                             Values
                            </th>
                            <th scope="col">
                              Options
                            </th>
                          </tr>      
                        </thead>
                        <tbody>
                        {allattribute &&
                          allattribute.map((attr) => (
                                <tr>
                                  <td scope="row">
                                  <div className="customerss">

                                  </div>
                                  </td>

                                  <td > <div className="customerss">
                                  {attr.name}</div>
                                  </td>
                                  <td id="attrijs">
                                  <div className="customerss">
                                      <div className="d-flex flex-wrap">
                                        {
                                            attr.attr_values.map((attrval)=>(
                                                <span id="setatval" className="rounded-pill">{attrval.val} <i class="las la-times-circle" onClick={() =>
                                                  deleteAttrValHandler(attrval._id,attr._id)
                                                } ></i></span>                                                                       

                                            ))
                                        }
                                               
                                      </div>

                                      </div>

                                  </td>

                                  


                                  <td>
       <div className="customerss d-flex align-items-center">
        
             
              <Link
            className="mx-1"
            onClick={() =>
              deleteAttributeHandler(attr._id)
            }
              >
                <i class="ri-delete-bin-6-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
         </div>
       </td>









                                </tr>
                              ))}
                        </tbody>
                      </table>
                      </div>
</div>

                    </div>
                    <div className="col-5 px-2">
                <div className="brandlabel">
                  <div class="">
                    <span>Add New Category</span>
                  </div>
                </div>

             
              <div className="card mt-2">
              <div className="addnewBrand">
                  <div className="brandform">
                        <form>
                          <div class="form-group">
                            <label for="myInput">Attribute Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="myInput"
                              aria-describedby="emailHelp"
                              placeholder="Enter attribute name"
                              name="name"
                              onKeyUp={myFunction}
                              onChange={handleInputs}
                              value={attributeData.name} 
                              required
                            />
                          </div>


                          <div className="llk">
                       <ul id="myUL">
                        {allattribute &&
                          allattribute.map((attri) => (
                                   <> 
                                    <li><a class="form-control" onClick={getvalueofparent}>{attri.name}</a></li>
                                    </>
                                   ))}
                         </ul>
                       </div>

                         

                          <div class="form-group">
                            <div className="additemattr"><label for="exampleInputmeta">Values</label>
                            </div>
                            
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputmeta"
                              aria-describedby="emailHelp"
                              placeholder="Enter attribute values"
                              name="val"
                              onChange={handleInputs}
                              value={attributeData.val} 
                            />
                          
                            </div>
                            
                            <button
       onClick={submitAttribute}
              className="btn btn-sm rounded-pill"
              style={{
                color: "#103A81",
                fontWeight: "bold",
                backgroundColor: "#E7F4FC",
              }}
            >
            Save
            </button>
                         
                        </form>
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

export default Attributes
