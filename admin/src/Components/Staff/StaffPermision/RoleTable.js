import React from "react";
import { Link } from "react-router-dom";

const RoleTable = () => {
  return (
    <>
      <tr>
        <td className="" scope="row">
        <div className="customerss"></div>
        </td>

        <td className="">
        <div className="customerss">
          asdfad
          </div>
          </td>


          <td>
       <div className="customerss d-flex align-items-center">
        
             
              <Link className="mx-1" to="">
                <i class="ri-edit-box-line" style={{color:"#4F4F4F",fontWeight:"500"}}></i>
              </Link>
              <Link className="mx-1" hidden  to="">
                {" "}
                <i class="las la-copy" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
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
  );
};

export default RoleTable;
