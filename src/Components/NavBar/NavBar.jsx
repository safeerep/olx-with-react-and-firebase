import React from "react";
import PlaceSearch from "../PartsInNavBar/PlaceSearch";
import ProductSearch from "../PartsInNavBar/ProductSearch";
import Language from "../PartsInNavBar/Language";
import AddProductButton from "../PartsInNavBar/AddProductButton";
import BrandName from "../PartsInNavBar/BrandName";
import Login from "../PartsInNavBar/Login";
function NavBar() {
  return (
    <div className="p-2.5 bg-slate-100 fixed w-screen z-999">
      <div className="w-100 flex justify-between items-center">
        <BrandName />
        <PlaceSearch />
        <ProductSearch />
        <Language />
        <Login />
        <AddProductButton />
      </div>
    </div>
  );
}

export default NavBar;


