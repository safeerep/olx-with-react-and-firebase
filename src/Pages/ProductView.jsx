import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { db } from "../Firebase/config";
import { doc, getDoc } from "firebase/firestore";
import NavBar from "../Components/NavBar/NavBar";

function ProductView() {
  let [searchQuery, setSearchQuery] = useSearchParams();
  const [seller, setSeller] = useState();
  const [product, setProduct] = useState();
  const productId = searchQuery.get("ProductId");
  const navigate = useNavigate();
  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    try {
      const snapshot = await getDoc(doc(db, "products", productId));
      if (snapshot.exists()) {
        const productDetails = snapshot.data();
        setProduct(productDetails);
        const userId = snapshot.data().userId;
        const userSnapShot = await getDoc(doc(db, "users", userId));
        if (userSnapShot.exists()) {
          setSeller(userSnapShot.data());
        } else {
          console.log("user is not existing");
        }
      } else {
        console.log("document is not existing");
        navigate("/");
      }
    } catch (error) {
      navigate("/");
    }
  };
  return (
    <>
    <NavBar />
      <div className="p-4 pt-24 bg-slate-50">
        <div className="">
          <img className="w-full h-96 p-4 border border-black object-fill" src={product?product.image: ''} alt="" />
        </div>
        <div className="grid lg:grid-cols-2 justify-center mx-20 gap-0 m-2">
          <div className=" bg-white p-3">
            <div className="flex justify-start gap-4 ">
              <button className="bg-yellow-400 p-2 rounded-md">
                <i className="fa-solid fa-bolt-lightning me-2"></i>FEATURED
              </button>
              <button className="bg-slate-400 p-2 rounded-md text-blue-600">
                <i className="fa-solid fa-user-check me-2"></i>VERIFIED SELLER
              </button>
            </div>
            {product ? (
              <>
                <p>{product.categoryName}</p>
                <h1 className="text-3xl font-bold">{product.productName}</h1>
                <p className="text-2xl font-bold">&#x20B9; {product.price} </p>
                <span> posted on: {product.createdAt}</span>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="bg-white ml-20 p-3">
            <p className="text-xl font-bold text-black pb-2">Seller details</p>
            {seller ? (
              <>
                <p>{seller.Username}</p>
                <p>{seller.Email}</p>
              </>
            ) : (
              <p className="text-red-800">
                Sorry for the inconvenience! seller details is not available
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductView;
