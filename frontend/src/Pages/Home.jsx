import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import MobileNavbar from "../Components/Navbar/MobileNavbar";
import Header from "../Components/header/Header";
import Main from "./Main";
import FooterComponent from "../Components/Footer/FooterComponent";
function Home() {
  return (
    <>
      <Navbar home={true}></Navbar>
      <MobileNavbar />
      <Header />
      <Main />
      <FooterComponent />
    </>
  );
}

export default Home;
