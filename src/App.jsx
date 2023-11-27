import React, { useState, useContext} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthProvider } from "./AppContext";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import AddProduct from "./Pages/AddProduct";
import ProductView from "./Pages/ProductView";

function App() {
  const navigate = useNavigate();

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Signup />} path="/signup"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<AddProduct />} path="/add-product"></Route>
        <Route element={<ProductView />} path="/product-view"></Route>
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
