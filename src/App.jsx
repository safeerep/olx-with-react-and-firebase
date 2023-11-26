import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { db } from "../src/Firebase/config";
import { getDocs, collection } from "firebase/firestore";
import { AppContext } from "./AppContext";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route element={<Signup />} path="/signup"></Route>
      </Routes>
      <Home />
    </>
  );
}

export default App;
