import React, { useContext } from "react";
import { AuthContext } from "../AppContext";

import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/Banner/Banner";
import Posts from "../Components/Posts/Posts";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Posts />
      <Footer />
    </>
  );
}

export default Home;
