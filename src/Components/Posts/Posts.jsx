import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/config";
import { getDocs, collection } from "firebase/firestore";

function Posts() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsFromDb();
  }, []);
  const getProductsFromDb = () => {
    getDocs(collection(db, "products")).then((snapShot) => {
      const tempProducts = [];
      snapShot.forEach((doc) => {
        tempProducts.push({ productId: doc.id, ...doc.data() });
      });
      setProducts(tempProducts);
    });
  };
  return (
    <>
      <h2 className="ml-12 mt-4 text-teal-800 text-lg font-bold">
        Fresh recommendations
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full gap-4 mb-2 px-12">
        {products.length &&
          products.map((product) => {
            return (
              <div
              onClick={() => {
                navigate(`/product-view?ProductId=${product.productId}`)
              }}
                key={product.productId}
                className=" h-60 inline-block cursor-pointer border p-2"
              >
                <div className="flex justify-center items-center">
                  <img
                    className="h-32 w-full object-center"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div>
                  <p className="mt-2 text-lg font-bold">
                    &#x20B9; {product.price}
                  </p>
                  <span className="text-base">{product.productName}</span>
                  <p className="text-sm">{product.categoryName}</p>
                </div>
                <div className="flex justify-end text-sm">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Posts;
