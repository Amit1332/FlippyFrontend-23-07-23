import React from 'react'
import { Link } from 'react-router-dom'

const ProductQueriesTable = () => {
  return (
    <>
      
      <tr>
        <td scope='row'>
        <div className="customerss">
          
          </div>
          </td>
        <td>
        <div className="customerss">
         834983-98897
          </div>
          </td>
        <td>
        <div className="customerss">
          Ja Shankar
          </div>
          </td>
        <td>
        <div className="customerss">
          jai@gmailcom
          </div>
          </td>
        
        
        <td>
        <div className="customerss">
          
          2023-01-27 13:09:05
          </div>
           </td>

        <td class="text-right">
        <div className="customerss">
           <Link className="mx-1">
                <i class="ri-eye-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
              <Link
            className="mx-1"
              >
                <i class="ri-delete-bin-6-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
              </div>
        </td>
        
      </tr>
    </>
  )
}

export default ProductQueriesTable
