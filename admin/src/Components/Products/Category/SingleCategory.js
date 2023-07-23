import React from 'react'
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { clearErrors, getCategoryDetails } from '../../../actions/categoryActions';


const SingleCategory = () => {

  const params = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();

  const {category} = useSelector(
    (state) => state.categorydetails
  );

  useEffect(() => {
    dispatch(getCategoryDetails(params.id));

    
  },[dispatch, params.id, alert])

  

  category.sub_category &&  category.sub_category.map((e)=>{
    e.attributedata.map((gg)=>{
    })
  })
  
  
  return (
    <>
      
          <div className="container-fluid allproducts">
            <div className="innerallproducts">
              <div className="productheading">
                <div className="productheadingtop">
                <h3 class="mb-0 h6 text-center">Category</h3>
                </div>

                <div className="productsfilter">
                <h5 class="h6 mx- my-3">Category Name : {category.parent_name}</h5>

             
            </div>
                
                  {category.meta_title &&
                  <h4>Meta Tittle : <span>{category.meta_title}</span></h4>
                  }
                  {category.meta_description &&

                  <p>Meta Discrption: <span>{category.meta_description}</span></p>
                  }
                    <div className="card p-0">
                    <div class="table-responsive producscroller_responsive">
                      <table class="table  css-serial text-nowrap startcontentleft">
                        <thead
                          style={{
                            backgroundColor: "#F9FAFB",
                            color: "#667085",
                          }}
                        >
                    <tr>
                      <th scope="col">
                        S.No.
                      </th>

                      <th scope="col">
                        Name
                      </th>
                      <th scope="col">
                        Icon
                      </th>
                     
                     
                      <th scope="col">
                        Featured
                      </th>

                      <th scope="col">
                      Commission
                      </th>
                      <th scope="col">
                      Attributes
                      </th>
                  
                    </tr>
                  </thead>
                  <tbody>
                 
                        {category.sub_category &&
                          category.sub_category.map((caty) => {
                          
                            return (
                            <tr>
                              
                              <td scope="row">
                                  <div className="customerss"></div>
                                </td>
                              
                             
                              <td >
                              <div className="customerss">
                              {caty.sub_name}
                              </div>
                                </td>
                        
                                   
                              <td >
                              <div className="customerss">
                                <img src={`${caty.icon.url}`} alt="" />
                                </div>
                                </td>
                                              
                          
                               <td >
                               <div className="customerss">
            <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
              </div>
                                </td>
                       
                       
                              <td>
                              <div className="customerss">
                              {caty.commission} %
                               </div>
                              </td> 
                        
                              <td id="attrijs">
                              <div className="customerss">
                              <div className="d-flex gap-2 flex-wrap">
                             {caty.attributedata.map((e)=>{
                              return(
                               <> 
                               
                                 <h5><span class="badge rounded-pill d-flex align-items-center justify-content-center" style={{color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",}}>{e.name}</span></h5> 
                                
                               </>
                              )

                             })}
                              </div>
                             </div>

                                  </td>
                         
                          
                         
                            </tr>
                            )
                          })}
                  </tbody>
                </table>
              </div>




              </div>
                </div>
                </div>
           
          </div>
          
    </>
  )
}

export default SingleCategory
