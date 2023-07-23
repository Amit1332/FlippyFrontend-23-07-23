import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  clearErrors,
  deleteProduct,
  getProduct,
} from "../../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { DELETE_PRODUCT_RESET } from "../../../constants/productConstant";

const Product = () => {
  const navigate = useNavigate();
  const params = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();

  const {loading, error, products, productCount, filterProductCount } = useSelector(
    (state) => state.products
  );


  const {
    error: deleteError,
    isDeleted,
  } = useSelector((state) => state.product);

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(
        <>
          <div style={{ color: "white" }}>{error}</div>
        </>
      );
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(
        <div style={{ color: "white", fontSize: "10px" }}>
          Unable To Delete Product
        </div>
      );
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success(
        <div style={{ color: "white", fontSize: "10px" }}>
          Product Deleted Successfully
        </div>
      );

      navigate("/products");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getProduct());
  }, [dispatch, error, alert, deleteError, navigate, isDeleted]);

  return (
    <>
   


   
        {products &&
        products.map((product) => (
          <tr>
            <td className="" scope="row">
            <div className="customerss">

            </div>
            </td>
            <td className="">
            <div className="customerss">
                <input
                  class="myinput"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </td>
            <td className="">
            <div className="customerss">
            {product.name}
            </div>
          </td>
            <td className="">
            <div className="customerss">
              {product.added_by}
              </div>
            </td>
            <td className="">
            <div className="customerss">
              {product.description}
              </div>
            </td>
            <td className="">
            <div className="customerss">
              {product.unit}
              </div>
            </td>
            <td className="">
            <div className="customerss">
            <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
              </div>
            </td>
            <td className="">
            <div className="customerss">
            <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
              </div>
            </td>
            <td className="">
            <div className="customerss">
            <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
              </div>
            </td>

            <td>
       <div className="customerss d-flex align-items-center">
        
             <Link className="mx-1" to={`/product/${product._id}`}>
                <i class="ri-eye-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
              <Link className="mx-1" to="">
                <i class="ri-edit-box-line" style={{color:"#4F4F4F",fontWeight:"500"}}></i>
              </Link>
              <Link className="mx-1" hidden  to="">
                {" "}
                <i class="las la-copy" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
              <Link
            className="mx-1"
                onClick={() => deleteProductHandler(product._id)}
              >
                <i class="ri-delete-bin-6-line" style={{color:"#4F4F4F", fontWeight:"500"}}></i>
              </Link>
         </div>
       </td>
            
          </tr>
        ))}
 
      
    </>
  );
};

export default Product;
