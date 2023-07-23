import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../../actions/productAction";
import "./singleProduct.css";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const params = useParams();
  // const alert = useAlert();
  const dispatch = useDispatch();

  const {product ,user_id} = useSelector(
    (state) => state.productDetails
  );
  
 


  const options = {
    key:`stars_${product.ratings}`,
    edit: false,
    color: "rgba(186, 183, 179)",
    activeColor: "#264B91",
    size: window.innerWidth < 600 ? 18 : 22,
    value: product&&product.ratings,
    isHalf: true,
  };
 
 
  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      
          <div className="container-fluid allproducts">
            <div className="innerallproducts">
              <div className="productheading">
                <div className="productheadingtop">
                <h3 class="mb-0 h6 text-center">Product Details</h3>
                  <Link href="">
                    <div  className="btn btn-sm rounded-pill"
                style={{
                  color: "#103A81",
                  fontWeight: "bold",
                  backgroundColor: "#E7F4FC",
                }}>Update Product</div>
                  </Link>
                </div>

                <div className="productsfilter">
                  <span>{product.name}</span>
                  <div className="addedby">
                    <span>Added By : </span>
                    <span style={{ color: "#264B91" }}>{product.added_by}</span>
                  </div>
                  <div className="addedby">
                    <span>Supplier Name: </span>
                    <span style={{ color: "#264B91" }}>{
                       user_id && user_id.name
                    }</span>
                  </div>              
                </div>
              </div>
              <div className="containerpro">
                <div className="single-product">
                  <div className="row d-flex">
                    <div className="col-4">
                      <div className="product-image">
                        <div className="product-image-main">
                          <img
                            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                            alt=""
                            id="product-main-image"
                          />
                        </div>
                        <div className="product-image-slider">
                          <img
                            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                            alt=""
                            className="image-list"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                            alt=""
                            className="image-list"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                            alt=""
                            className="image-list"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                            alt=""
                            className="image-list"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="product">
                        <div className="product-title">
                          <h2>{product.name}</h2>
                        </div>
                        <div className="product-rating">
                          <ReactStars {...options} />
                          <span className="review">
                            Reviwes:({product.numofReviews})
                          </span>
                        </div>

                        <div className="product-rating">
                          <span
                            className="review"
                            style={{ color: "black", fontWeight: "bold" }}
                          >
                            {" "}
                            Status : &nbsp;
                          </span>{" "}
                          <span
                            className={
                              product.current_stock < 1
                                ? "redColor"
                                : "greenColor"
                            }
                          >
                            {product.current_stock < 1
                              ? "OutOfStock"
                              : "InStock"}
                          </span>
                        </div>

                        <div className="product-rating">
                          <span className="review">
                            <b>Current Stock :</b>{" "}
                            <b
                              className={
                                product.current_stock < 1
                                  ? "redColor"
                                  : "greenColor"
                              }
                            >
                              {" "}
                              {product.current_stock}
                            </b>
                          </span>
                        </div>

                        <div className="product-price">
                          <span className="offer-price">
                            ₹{product.unit_price}
                          </span>
                          <span className="sale-price">
                            ₹{product.unit_price}
                          </span>
                        </div>

                        <div className="product-details">
                          <h3>Description</h3>
                          <p>{product.description}</p>
                        </div>
                        <div className="product-size">
                          <h4>Size</h4>
                          <div className="size-layout">
                            <input
                              type="radio"
                              name="size"
                              value="S"
                              id="1"
                              className="size-input"
                            />
                            <label for="1" className="size">
                              S
                            </label>

                            <input
                              type="radio"
                              name="size"
                              value="M"
                              id="2"
                              className="size-input"
                            />
                            <label for="2" className="size">
                              M
                            </label>

                            <input
                              type="radio"
                              name="size"
                              value="L"
                              id="3"
                              className="size-input"
                            />
                            <label for="3" className="size">
                              L
                            </label>

                            <input
                              type="radio"
                              name="size"
                              value="XL"
                              id="4"
                              className="size-input"
                            />
                            <label for="4" className="size">
                              XL
                            </label>

                            <input
                              type="radio"
                              name="size"
                              value="XXL"
                              id="5"
                              className="size-input"
                            />
                            <label for="5" className="size">
                              XXL
                            </label>
                          </div>
                        </div>
                        <div className="product-color">
                          <h4>Color</h4>
                          <div className="color-layout">
                            <input
                              type="radio"
                              name="color"
                              value="black"
                              className="color-input"
                            />
                            <label for="black" className="black"></label>
                            <input
                              type="radio"
                              name="color"
                              value="red"
                              className="color-input"
                            />
                            <label for="red" className="red"></label>

                            <input
                              type="radio"
                              name="color"
                              value="blue"
                              className="color-input"
                            />
                            <label for="blue" className="blue"></label>
                          </div>
                        </div>
                        <span className="divider"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="singleproductdetails">
                <h6></h6>
              </div>
            </div>
          </div>

         
    </>
  );
};

export default ProductDetails;
