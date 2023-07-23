import React from 'react'
import ProductQueriesTable from './ProductQueriesTable'

const ProductQueries = () => {
  return (
    <>
    
    <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 my-2 h6 text-center">Converstaions</h3>
  
              </div>
              <div className="productsfilter">
           
              </div>
              <div className="row p-2" >
            <div className="card p-0">
            <div class="table-responsive producscroller_responsive">
  <table class="table css-serial text-nowrap startcontentleft">
    <thead style={{backgroundColor:"#F9FAFB", color:"#667085"}}>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Title</th>
                    <th scope="col">Sender</th>
                    <th scope="col">Receiver</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>



<ProductQueriesTable/>
   



   
                </tbody>
              </table>
            </div>

            </div>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default ProductQueries
