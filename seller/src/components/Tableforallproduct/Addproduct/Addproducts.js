import React,{useState,useEffect} from "react";
import Secondnavproduct from "../../Include/SecondNavProduct";
import "./stylefortext.css";
import Leftaddproduct from "./Leftaddproduct";
import Rightaddproduct from './rightaddproduct.js';
import { NEW_PRODUCT_RESET } from "../../../Constants/productConstant";
import { useNavigate  } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { CLEAR_ERRORS } from "../../../Constants/SellerConstant";
import { createProduct } from "../../../Actions/productAction";
export default function Addproducts() {

  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const alert = useAlert();

  const {  error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS());
    }

    if (success) {
      alert.success("Product Created Successfully");
     Navigate("/")
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, Navigate, success]);

  const createProductSubmitHandler = (e) => {

    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };


  return (
    <div className="Addproducts px-0" style={{backgroundColor: `#f5f7f9` } }>
     <form onSubmit={createProductSubmitHandler}>


     <Secondnavproduct
        Name={{ name: "Add New Product", directory: "Products > Add Product" }}
        Btn={[
          { name: "Cancel", style: "", icon: "las la-times-circle" ,type:"reset"},
          { name: "Save", style: "bluebtn", icon: "las la-check-circle",type:"submit" },
        ]}
      />
      <div
        className=" p-3 container-fluid row gap-3 mx-0 gap-0"
        style={{ width: `100%` }}
      >





        <Leftaddproduct />
        <Rightaddproduct />
      </div>
     </form>
    </div>
  );
}
