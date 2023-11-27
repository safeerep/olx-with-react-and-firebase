import React, { useContext, useState } from "react";
import {useNavigate } from 'react-router-dom'
import NavBar from "../Components/NavBar/NavBar";
import { storage, db } from "../Firebase/config";
import { AuthContext } from "../AppContext";
import { addDoc, collection } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

function AddProduct() {
  const navigate = useNavigate()
  const user = useContext(AuthContext)
  const [productName, setProductName] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const handleAddProduct = (e) => {
    console.log("trying to add");
    e.preventDefault();
    if (user.userId === undefined) {
      console.log('no user is there');
      alert('please login first to add product')
      return;
    }
    const date = new Date().toLocaleDateString();
    const storageRef = ref(storage, `products/${image.name}`);
    uploadBytes(storageRef, image).then(({ metadata }) => {
      getDownloadURL(storageRef).then((url) => {
        addDoc(collection(db, "products"), {
          userId: user.userId,
          productName,
          categoryName,
          price,
          image: url,
          createdAt: date,
        })
          .then(() => {
            console.log("product added successfully");
            navigate('/')
          })
          .catch(() => {
            console.log("an error occured!");
          });
      });
    });
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
            className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]"
            type="text"
            id="name"
            name="productName"
          />
          <br />
          <label className="font-bold" htmlFor="Category name">
            Category
          </label>
          <br />
          <input
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
            className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]"
            type="text"
            id="ctgry"
            name="categoryName"
          />
          <br />
          <label className="font-bold" htmlFor="Price">
            Price
          </label>
          <br />
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]"
            type="number"
            id="price"
            name="price"
          />
          <br />

          <img
            src = { image && URL.createObjectURL(image) }
            alt=""
            //   className="w-40 h-40 border-0"
          ></img>

          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          />
          <button
            onClick={(e) => handleAddProduct(e)}
            className="mt-4 w-full h-12 bg-slate-900 text-slate-300 font-bold mb-12"
          >
            Add product
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
