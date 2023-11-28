import React, { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import NavBar from "../Components/NavBar/NavBar";
import { storage, db } from "../Firebase/config";
import { AuthContext } from "../AppContext";
import { addDoc, collection } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

function AddProduct() {
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  const notify = () => toast.success("successfully added the product");
  const [productName, setProductName] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [productNameState, setProductNameState] = useState(false);
  const [categoryNameState, setCategoryNameState] = useState(false);
  const [priceState, setPriceState] = useState(false);
  const [imageState, setImageState] = useState(false);
  const productRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (user.userId === undefined) {
      console.log("no user is there");
      alert("please login first to add product");
      return;
    }
    const date = new Date().toLocaleDateString();
    // start
    if (
      productName?.trim() === null ||
      productName?.trim() === '' ||
      categoryName?.trim() === null ||
      categoryName?.trim() === '' ||
      price?.trim() === null ||
      price?.trim() === undefined ||
      price?.trim() === '' ||
      image === null
    ) {
      console.log('in if');
      if (
        productName?.trim() === null &&
        categoryName?.trim() === null &&
        price?.trim() === null
      ) {
        productRef.current.focus();
        setProductNameState(true);
        setCategoryNameState(true);
        setPriceState(true);
        setImageState(true);
        setTimeout(() => {
          setProductNameState(false);
          setCategoryNameState(false);
          setPriceState(false);
          setImageState(false);
        }, 3000);
      } else {
        console.log(image);
        if (productName === null ||  productName.trim() === null|| productName.trim() === '') {
          setProductNameState(true);
          setTimeout(() => {
            setProductNameState(false);
          }, 3000);
        }
        if (categoryName === null || categoryName?.trim() === null ||categoryName?.trim() === '') {
          setCategoryNameState(true);
          setTimeout(() => {
            setCategoryNameState(false);
          }, 3000);
        }
        if (price === null || price?.trim() === null|| price?.trim() === '' || price === undefined) {
          setPriceState(true);
          setTimeout(() => {
            setPriceState(false);
          }, 3000);
        }
        if (image === null || image === undefined) {
          setImageState(true);
          setTimeout(() => {
            setImageState(false);
          }, 3000);
        }
      }
      return;
    }
    else {
      console.log('in else');
      const verifiedPrice = Math.abs(price);
      const storageRef = ref(storage, `products/${image.name}`);
      uploadBytes(storageRef, image).then(({ metadata }) => {
        getDownloadURL(storageRef).then((url) => {
          addDoc(collection(db, "products"), {
            userId: user.userId,
            productName,
            categoryName,
            price: verifiedPrice,
            image: url,
            createdAt: date,
          })
            .then(() => {
              console.log("product added successfully");
              notify();
              navigate("/");
            })
            .catch(() => {
              console.log("an error occured!");
            });
        });
      });
    }
  };
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center h-full pt-24 border-black ">
        <form className="w-1/2">
          <label className="font-bold" htmlFor="productname">
            Product Name
          </label>
          <br />
          <input
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            ref={productRef}
            className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]"
            type="text"
            id="pname"
            name="productName"
          />
          {productNameState && <p className="text-red-700"> Please type the product name</p>}
          <br />
          <label className="font-bold" htmlFor="Categoryname">
            Category
          </label>
          <br />
          <input
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
            ref={categoryRef}
            className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]"
            type="text"
            id="ctgry"
            name="categoryName"
          />
          {categoryNameState && <p className="text-red-700">Please enter category name</p>}
          <br />
          <label className="font-bold" htmlFor="Price">
            Price
          </label>
          <br />
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            ref={priceRef}
            className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]"
            type="number"
            id="price"
            name="price"
          />
          {priceState && <p className="text-red-700">Please enter the price of the product</p>}
          <br />

          <img
            src={image && URL.createObjectURL(image)}
            ref={imageRef}
            alt=""
            //   className="w-40 h-40 border-0"
          ></img>

          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          />
          {imageState && <p className="text-red-700">Please add an image</p>}
          <button
            onClick={(e) => handleAddProduct(e)}
            className="mt-4 w-full h-12 bg-slate-900 text-slate-300 font-bold mb-12"
          >
            Add product
          </button>
        </form>
      </div>
      <Toaster />
    </>
  );
}

export default AddProduct;
