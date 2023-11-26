import React, { useState, useContext, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { db } from "../src/Firebase/config";
import { getDocs, collection } from "firebase/firestore";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  const navigate = useNavigate();
  
  return (
    <>
      <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Signup />} path="/signup"></Route>
          <Route element={<Login />} path="/login"></Route>
      </Routes>
    </>
  );
}

export default App;
